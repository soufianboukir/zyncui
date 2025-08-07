import SideBar from "@/components/app/sideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <div className="mx-auto grid grid-cols-6 gap-10 bg-red-300 pt-20 sm:max-w-[1700px]">

    <div className="pt-16">
      <SideBar>{children}</SideBar>
    </div>
    // <div className="col-span-4">{children}</div>
    //</div>
  );
}
