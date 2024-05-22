"use client";

import "boxicons/css/boxicons.min.css";
import Image from "next/image";
import logo from "../../public/logo.jpeg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const icons = [
  { icon: "bx-home", link: "/" },
  { icon: "bx-user", link: "/about" },
  { icon: "bxl-blogger", link: "/blog" },
  { icon: "bxs-contact", link: "/contact" },
  { icon: "bxs-circle-three-quarter", link: "/competitions" },
  { icon: "bxs-briefcase", link: "/projects" },
  { icon: "bx-certification", link: "/certifications" },
  { icon: "bxs-building-house", link: "/services" },
];

export default function SideBar() {
  const pathname = usePathname();
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  return (
    <div className="w-full h-screen bg-gradient-to-br from-black to-darkgreen text-gold flex flex-col items-center py-4">
      <div className="w-full m-4 text-2xl font-bold flex flex-col items-center justify-center">
        <div className="w-1/3 h-auto flex justify-center items-center cursor-pointer">
          <Link href="/" className="flex flex-col justify-center items-center">
            <Image
              className="w-3/4 h-full object-cover rounded-full transition transform hover:scale-110 transition duration-500 ease-in-out"
              src={logo}
              alt="Logo"
            />
          </Link>
        </div>
      </div>
      <div className="w-1/3 h-full flex flex-col justify-center items-center">
        {icons.map((item, index) => (
          <Link key={index} href={item.link}>
            <div
              className={`w-full mb-6 flex justify-center items-center transition transform hover:scale-110 transition duration-500 ease-in-out ${
                active === item.link ? "text-white" : "text-gold"
              }`}
            >
              <i className={`bx ${item.icon} text-2xl`}></i>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
