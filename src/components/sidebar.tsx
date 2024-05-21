import "boxicons/css/boxicons.min.css";
import Image from "next/image";
import logo from "../../public/next.svg";
import Link from "next/link";

const icons = [
  { icon: "bx-home", link: "/" },
  { icon: "bx-user", link: "/about" },
  { icon: "bxl-blogger", link: "/blog" },
  { icon: "bxs-contact", link: "/contact" },
  { icon: "bxs-circle-three-quarter", link: "/competitions" },
  { icon: "bxs-briefcase", link: "/projects" },
  { icon: "bxs-building-house", link: "/services" },
];

export default function SideBar() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-black to-darkgreen text-gold flex flex-col items-center py-4">
      <div className="w-full m-4 text-2xl font-bold flex flex-col items-center justify-center">
        <Image className="w-3/4" src={logo} alt="Logo" />
      </div>
      <div className="w-3/4 h-3/4 flex flex-col justify-center items-center p-4">
        {icons.map((item, index) => (
          <Link key={index} href={item.link}>
            <div className="mb-6 flex justify-center items-center transition transform hover:scale-110 hover:text-white">
              <i className={`bx ${item.icon} text-2xl`}></i>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
