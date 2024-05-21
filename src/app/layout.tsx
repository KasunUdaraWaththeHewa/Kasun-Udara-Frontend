import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kasun Udara",
  description: "Official Portfolio of Kasun Udara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <div className="w-1/12">
            <SideBar />
          </div>
          <div className="w-11/12">{children}</div>
        </div>
      </body>
    </html>
  );
}
