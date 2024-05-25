import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/sidebar";
// import Head from 'next/head';
import logo from "./favicon.ico";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kasun Udara",
  description:
    "Kasun Udara is a computer science undergraduate at University of Colombo School of Computing, Sri Lanka. He is a Software Engineer, Web Developer, Mobile App Developer, Backend Developer, Frontend Developer, FullStack Developer, Machine Learning Enthusiast, Tech Enthusiast, Freelancer.",
  ogImage: "./logo.jpeg",
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
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.ogImage} />

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
