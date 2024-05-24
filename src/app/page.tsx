"use client";
import Particles from "@/components/particles/ParticleDesign";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black to-darkMaroon text-gold flex flex-col items-center">
        <Particles />
        {/* <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/kasun_udara.me/public/fire.mp4"
          autoPlay
          muted
          loop
        ></video> */}
        <div
          className="w-full h-full flex flex-col justift-center items-center"
          style={{ zIndex: 21 }}
        >
          <div className="w-full h-4/5 flex flex-col justify-center items-center cursor-pointer">
            <iframe
              src="https://my.spline.design/wizardroomcopy-833ac17ba4b03bf17b85220fcc3da1a4/"
              className="hover:scale-105 transition duration-500 ease-in-out"
              width="90%"
              height="90%"
            ></iframe>
          </div>
          <div className="w-full h-1/6 flex flex-col justify-center items-center">
            <div className="sm:text-1xl md:text-2xl text-center text-gold">
              <b>
                <Typewriter
                  words={[
                    "Software Engineer",
                    "Web Developer",
                    "Tech Enthusiast",
                    "Freelancer",
                    "Backend Developer",
                    "Frontend Developer",
                    "Fullstack Developer",
                    "Machine Learning Enthusiast",
                    "Cyber Security Enthusiast",
                    "Mobile App Developer",
                    "Java Developer",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </b>
            </div>
            <a
              className="bg-lightMaroon text-white p-2 rounded-lg mt-4 hover:bg-white hover:text-black hover:shadow-lg transition duration-500 ease-in-out"
              href="https://drive.google.com/file/d/1hO1wRM7uHJkB7KVAQ-CFRE2eHfK0WYTY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>Download CV</b>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
