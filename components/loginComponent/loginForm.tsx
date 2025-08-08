import { Card, CardContent, CardTitle } from "./ui/card";
import OAuth from "./oAuth";
import { Playfair_Display } from "next/font/google";

const PlayfairDisplay = Playfair_Display({
  subsets: ["latin"],
});

export const LoginForm = () => {
  return (
    <div className={`flex h-screen items-center justify-center ${PlayfairDisplay.className}`}>
      <Card>
        <CardTitle>Welcome Back</CardTitle>
        <CardContent>
          <OAuth />
        </CardContent>
      </Card>
    </div>
  );
};
