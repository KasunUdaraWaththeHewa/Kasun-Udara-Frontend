"use client";

import "boxicons/css/boxicons.min.css";
import Image from "next/image";
import logo from "../../public/logo.jpeg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const icons = [
  { icon: "bx-home", link: "/", label: "Home" },
  { icon: "bx-user", link: "/about", label: "About" },
  // { icon: "bxl-blogger", link: "/blog", label: "Blog" },
  { icon: "bxs-contact", link: "/contact", label: "Contact" },
  {
    icon: "bxs-circle-three-quarter",
    link: "/competitions",
    label: "Competitions",
  },
  { icon: "bxs-briefcase", link: "/projects", label: "Projects" },
  {
    icon: "bx-certification",
    link: "/certifications",
    label: "Certifications",
  },
  { icon: "bxs-building-house", link: "/services", label: "Services" },
  { icon: "bxs-hand", link: "/skills", label: "Skills" },
];

export default function SideBar() {
  const pathname = usePathname();
  const [active, setActive] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setActive(pathname);
    // Close sidebar on navigation (mobile)
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile hamburger toggle */}
      <button
        aria-label="Toggle sidebar"
        onClick={() => setSidebarOpen((prev) => !prev)}
        className="fixed top-5 left-5 z-60 md:hidden w-10 h-10 p-1 rounded-md text-pink shadow-lg flex items-center justify-center focus:outline-none"
      >
        <i className={`bx ${sidebarOpen ? "bx-x" : "bx-menu"} text-3xl`}></i>
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen bg-black text-pink shadow-xl flex flex-col items-center py-8
          w-32 md:w-32
          transform md:transform-none
          transition-transform duration-300 ease-in-out z-50

          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Logo */}
        <div className="mb-12 w-12 h-12 rounded-full overflow-hidden cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out flex items-center justify-center">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              width={36}
              height={36}
              className="object-contain rounded-full"
              priority
            />
          </Link>
        </div>

        {/* Icons list */}
        <nav className="flex flex-col h-[80%] w-full">
          {icons.map(({ icon, link, label }) => (
            <Link
              key={link}
              href={link}
              className="group relative flex justify-center"
              aria-label={label}
              title={label}
            >
              <div
                className={`flex items-center justify-center w-14 h-14 rounded-xl cursor-pointer transition-all duration-300 ease-in-out mx-auto
                  ${
                    active === link
                      ? "text-[#ffffff]"
                      : "text-pink hover:text-white"
                  }
                `}
              >
                <i className={`bx ${icon} text-3xl`}></i>
              </div>

              {/* Tooltip - above icon */}
              <span className="absolute bottom-full mb-2 px-2 py-1 rounded bg-pink text-black text-xs font-semibold opacity-0 group-hover:opacity-100 pointer-events-none select-none whitespace-nowrap transition-opacity">
                {label}
              </span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Overlay for mobile when sidebar open */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          aria-hidden="true"
        />
      )}
    </>
  );
}
