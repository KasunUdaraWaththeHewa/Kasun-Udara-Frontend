"use client";
import Particles from "@/components/particles/ParticleDesign";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import profileImage from "./logo.jpeg";

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-black to-darkMaroon text-gold px-4 pt-20 md:pt-0">
        <Particles />
        <div
          className="w-full h-full flex flex-col-reverse md:flex-row justift-center items-center relative"
          style={{ zIndex: 21 }}
        >
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left space-y-4 px-4 md:px-10 mb-10 md:mb-0">
            <h1 className="text-right text-white w-full">
              <b>
                <span className="text-4xl md:text-6xl text-outline">
                  Kasun Udara
                </span>
              </b>
            </h1>
            <p className="text-right text-white w-full text-sm pl-4 md:pl-0">
              A Computer Science Undergraduate at University of Colombo School
              of Computing, Software Engineer at Xeptagon.
            </p>
            <div className="sm:text-1xl md:text-2xl text-right text-gold w-full">
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
            <div className="w-full flex flex-end justify-end items-center">
              <a
                className="bg-lightMaroon text-white p-2 rounded-lg mt-4 hover:bg-white hover:text-black hover:shadow-lg transition duration-500 ease-in-out"
                href="https://drive.google.com/drive/folders/10xjKzVYgEHbfke_43dqWDfJW2NUZg_-H?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>Download CV</b>
              </a>
            </div>
          </div>
          <div className="w-full md:w-2/3 h-full flex flex-col justify-center items-center cursor-pointer group mb-10 md:mb-0">
            <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-black-300 via-purple-300 to-gray-300 rounded-3xl blur-xl opacity-30 z-0" />
              <div className="w-full h-full overflow-hidden shadow-2xl rounded-[2rem] backdrop-blur-lg transition-transform duration-300 ease-in-out group-hover:scale-[1.03] z-10">
                <Image
                  src={profileImage}
                  alt="Profile Image"
                  width={250}
                  height={250}
                  className="object-contain w-full h-full blob-mask"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
