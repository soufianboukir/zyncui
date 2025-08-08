import { Footer } from "@/components/app/footer";
import { Header } from "@/components/app/header";
import SideBar from "@/components/app/sideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="pt-16">
      <SideBar>
        <Header />
        {children}
        <Footer />
      </SideBar>
    </div>
  );
}
