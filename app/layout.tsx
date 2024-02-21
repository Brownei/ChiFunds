import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Introducing ChiFunds: A Platform For Easy And Fast Payments",
  description: "ChiFunds revolutionizes online transactions with its lightning-fast and user-friendly payment platform. Offering seamless integration and secure processing, ChiFunds ensures hassle-free payments for businesses and customers alike. Say goodbye to lengthy checkout processes and hello to swift, efficient transactions with ChiFunds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
