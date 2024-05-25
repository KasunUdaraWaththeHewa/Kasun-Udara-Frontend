import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/sidebar";
// import Head from 'next/head';
import logo from "./favicon.ico";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Kasun Udara",
  },
  description: {
    default:
      "A computer science undergraduate at University of Colombo School of Computing. I am also the founder at our startup IgniteX.",
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* <title>{metadata.title.default}</title>
        <meta name="description" content={metadata.description.default} />
        <meta property="og:title" content={metadata.title.default} />
        <meta
          property="og:description"
          content={metadata.description.default}
        /> */}
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
