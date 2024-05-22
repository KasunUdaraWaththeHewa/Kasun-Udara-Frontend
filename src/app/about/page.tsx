import Image from "next/image";
import Particles from "@/components/particles/ParticleDesign";
import logo from "../../../public/logo.jpeg";

export default function Page() {
  return (
    <>
      <div className="w-full min-h-screen h-auto bg-gradient-to-br from-black to-darkMaroon text-gold flex flex-col items-center py-4">
        <Particles />
        <div className="mt-4 w-full">
          <h1 className="text-2xl text-white w-full text-left">
            <b>About Me</b>
          </h1>
        </div>
        <div className="w-full h-[600px] flex flex-col justify-center items-center">
          <div className="w-full h-[275px] flex flex-row mt-4 justify-center items-center">
            <div
              className="h-full flex flex-col justify-center items-center"
              style={{ width: "15%" }}
            >
              <Image
                alt="Kasun Udara"
                src={logo}
                className="rounded-full"
              ></Image>
            </div>
            <div
              className="w-full flex flex-col justify-center items-center ml-10"
              style={{ width: "60%", zIndex: 21 }}
            >
              <h1 className="text-2xl text-left w-full text-gold">
                <b>Waththe Hewa Kasun Udara</b>
              </h1>
              <p className="text-white mt-4 text-sm text-justify">
                I am Kasun Udara, a Software Engineer, Web Developer, Mobile App
                Developer, Backend Developer, Frontend Developer, FullStack
                Developer, Machine Learning Enthusiast, Tech Enthusiast,
                Freelancer and more... I am currently a computer science
                undergraduate at University of Colombo School of Computing. I
                went to Dharmasoka College Ambalangoda. I am also the Chief
                Executive Officer at our startup
                <span className="text-gold"> IgniteX</span>.
              </p>
              <div className="w-full flex flex-row mt-1">
                <i className="bx bx-location-plus mt-1"></i>
                <h3 className="ml-4 text-1xl text-left w-full text-gold">
                  Ambalangoda, Sri Lanka
                </h3>
              </div>
              <div className="w-full flex flex-row mt-1">
                <i className="bx bxl-gmail mt-1 text-white"></i>
                <h3 className="ml-4 text-sm text-left w-full text-white">
                  kasunu2001@gmail.com
                </h3>
              </div>
            </div>
          </div>
          <div className="w-3/4 h-auto px-10 pt-4">
            <p className="text-white text-sm text-justify">
              As a passionate Full-stack Developer and Java Developer, I thrive
              on pushing the boundaries of technology. With a strong foundation
              in frontend, backend, and mobile app development, I bring a
              versatile skill set to every project I undertake. What sets me
              apart is my unwavering commitment to learning and embracing new
              technologies and applying them to real-world problems.
            </p>
          </div>
          <div className="w-3/4 h-auto px-10 pt-4">
            <p className="text-white text-sm text-justify">
              I am currently the <span className="text-gold">Web Master</span>{" "}
              at UCSC ACM and I got experiences at web tasks at UCSC ACM ,{" "}
              <span className="text-gold">marketing tasks</span> at UCSC ACM,
              where I help to market events and posts, for events and workshops.
              I have involved in the <span className="text-gold">program</span>{" "}
              and <span className="text-gold">logistics and finance tasks</span>
              , where I developed and promoted engaging content and campaigns
              for the chapter.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
