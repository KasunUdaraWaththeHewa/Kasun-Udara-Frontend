import Image from "next/image";
import Particles from "@/components/particles/ParticleDesign";

const socials = [
  {
    name: "LinkedIn",
    logo: "bxl-linkedin-square",
    link: "https://www.linkedin.com/in/w-h-kasun-udara/",
  },
  {
    name: "GitHub",
    logo: "bxl-github",
    link: "https://github.com/KasunUdaraWaththeHewa",
  },
  {
    name: "Facebook",
    logo: "bxl-facebook",
    link: "https://www.facebook.com/kasun.kalhara.900?mibextid=LQQJ4d",
  },
  {
    name: "Google Mail",
    logo: "bxl-gmail",
    link: "mailto:kasunu2001@gmail.com",
  },
];
export default function Page() {
  return (
    <>
      <div className="w-full h-screen bg-gradient-to-br from-black to-darkMaroon text-gold flex flex-col items-center py-4">
        <Particles />
        <div
          className="w-3/4 flex flex-row justify-end items-center cursor-pointer"
          style={{ zIndex: 21 }}
        >
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 rounded-lg p-2 transition transform hover:scale-110 transition duration-500 ease-in-out"
            >
              <i className={`bx ${social.logo} text-1xl`}></i>
            </a>
          ))}
        </div>
        <div className="mt-4 w-full">
          <h1 className="text-4xl text-white w-full text-left">
            <b>Contact Me</b>
          </h1>
        </div>
        <div className="w-full flex flex-wrap justify-center items-center mt-4">
          <div className="w-1/2 flex flex-row items-center justify-center items-center">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 rounded-lg p-2 transition transform hover:scale-110 transition duration-500 ease-in-out"
              >
                <div className="flex flex-row w-[100px]">
                  <i className={`bx ${social.logo} text-1xl`}></i>
                  <span className="text-white text-sm">
                    &nbsp;{social.name}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center mt-4">
          <div className="w-full flex flex-col items-center justify-center">
            <label className="text-white text-1xl w-full text-left">
              Your Name{" "}
            </label>
            <input
              type="text"
              className="w-full h-[50px] p-2 rounded-lg mt-2 text-black"
              style={{ zIndex: 21 }}
            />
          </div>
          <div className="w-full flex flex-col items-center justify-center mt-4">
            <label className="text-white text-1xl w-full text-left">
              Your Email{" "}
            </label>
            <input
              type="email"
              className="w-full h-[50px] p-2 rounded-lg mt-2 text-black"
              style={{ zIndex: 21 }}
            />
          </div>
          <div className="w-full flex flex-col items-center justify-center mt-4">
            <label className="text-white text-1xl w-full text-left">
              Your Message{" "}
            </label>
            <textarea
              className="w-full h-[200px] p-2 rounded-lg mt-2 text-black"
              style={{ zIndex: 21 }}
            />
          </div>
          <div className="w-1/6 flex flex-col items-center justify-center mt-4 mb-4">
            <button
              className="w-full h-[50px] bg-gold text-black rounded-lg cursor-pointer"
              style={{ zIndex: 21 }}
            >
              <b>Send</b>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
