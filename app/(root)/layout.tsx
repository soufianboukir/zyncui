import SideBar from "@/components/app/sideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="pt-16">
      <SideBar>{children}</SideBar>
    </div>
  );
}
