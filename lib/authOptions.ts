import { dbConnection } from "@/config/db";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import User from "@/models/user";
import { sendRegistrationEmail } from "./mail";


type Profile = {
    login?: string;
    avatar_url?: string
}
export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),
    ],

    callbacks: {
        async signIn({ account, profile }) {
            if (!account || !profile?.email) return false;
            
            await dbConnection();
            const email = profile.email;
            let user = await User.findOne({ email });
            
            if (user) {
                if (!user.username) {
                    user.username = account.provider === "github"
                    ? (profile as Profile).login
                    : profile.email?.split("@")[0];
                }
            
                if (!user.name) {
                    user.name = profile.name!;
                }
            
                if (!user.avatarUrl) {
                    user.avatarUrl = profile.avatar_url || (profile as Profile).avatar_url;
                }
            
                await user.save();
            } else {
                user = await User.create({
                    name: profile.name,
                    email,
                    avatarUrl: profile.picture || (profile as Profile).avatar_url,
                    username: account.provider === "github"
                        ? (profile as Profile).login
                        : profile.email?.split("@")[0],
                });

                await sendRegistrationEmail({toEmail: user.email, name: user.name})
            }
            
            return true;
        },    

        async jwt({ token, user }) {
        if (user) {
            await dbConnection()
            const existingUser = await User.findOne({ email: user.email });

            token.username = existingUser?.username;
            token.id = user.id;
            token.name = user.name;
            token.email = user.email;
            token.avatarUrl = user.avatarUrl!;
        }

        return token;
        },

        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string;
                session.user.name = token.name as string;
                session.user.email = token.email as string;
                session.user.username = token.username as string;
                session.user.avatarUrl = token.picture as string;
            }
            return session;
        },
    },

    session: {
        strategy: "jwt",
    },

    pages: {
        signIn: "/login",
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };