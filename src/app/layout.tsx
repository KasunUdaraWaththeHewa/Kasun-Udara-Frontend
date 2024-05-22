import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/sidebar";
import logo from "../../public/logo.ico";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kasun Udara",
  description: "Official Portfolio of Kasun Udara",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={logo.src} />
      </head>
      <body className={`flex ${inter.className}`}>
        <div className="w-1/12" style={{ zIndex: 21 }}>
          <SideBar />
        </div>
        <div className="w-11/12">
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
