import type { Metadata } from "next";
import SideBar from "@/components/SideBar";

export const metadata: Metadata = {
  title: "Your Dashboard",
  description: "ChiFunds revolutionizes online transactions with its lightning-fast and user-friendly payment platform. Offering seamless integration and secure processing, ChiFunds ensures hassle-free payments for businesses and customers alike. Say goodbye to lengthy checkout processes and hello to swift, efficient transactions with ChiFunds.",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html>
        <body>
          <div className="flex h-screen w-full bg-gray-100">
            <SideBar />
            <div className="flex flex-col w-full h-full ml-64 p-4">
              {children}
            </div>
          </div>
        </body>
    </html>
  );
}
