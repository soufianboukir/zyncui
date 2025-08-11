import { Header } from "@/components/app/header";
import SideBar from "@/components/app/sideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="pt-16 max-w-[1600px] mx-auto">
      <SideBar>
        <Header />
        {children}
      </SideBar>
    </div>
  );
}
