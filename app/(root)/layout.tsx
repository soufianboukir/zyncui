import { Header } from "@/components/app/header";
import SideBar from "@/components/app/sideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto max-w-[1600px] pt-16">
      <SideBar>
        <Header />
        {children}
      </SideBar>
    </div>
  );
}
