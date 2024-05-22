"use client";
import Particles from "@/components/particles/ParticleDesign";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black to-darkMaroon text-gold flex flex-col items-center">
        <Particles />
        {/* <h1 className="text-8xl font-bold text-white mb-10">Kasun Udara</h1>
      <p className="text-2xl text-white">I am a Software Engineer</p> */}
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
            <h1 className="text-4xl  text-center w-1/2 font-bold text-white">
              Hi, I am <span className="text-gold">Kasun Udara</span>
            </h1>
            <div className="text-2xl text-center text-white">
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
                  "Mobile App Developer",
                  "Java Developer"
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
