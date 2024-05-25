import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/sidebar";
// import Head from 'next/head';
import logo from "./favicon.ico";

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
        <meta name="title" content="Kasunudara.me" />
        <meta name="description" content="Official Portfolio site from Kasun Udara" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kasunudara.me/" />
        <meta property="og:title" content="Kasunudara.me" />
        <meta property="og:description" content="Official Portfolio site from Kasun Udara" />
        <meta property="og:image" content="./logo.jpeg" />
        <meta name="description" content={metadata.description} />
        
        <link rel="icon" href={logo.src} />
      </head>
      <body className={`flex ${inter.className}`}>
        <div className="w-1/12 fixed top-0" style={{ zIndex: 21 }}>
          <SideBar />
        </div>
        <div className="w-11/12 ml-8 md:ml-32">
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
