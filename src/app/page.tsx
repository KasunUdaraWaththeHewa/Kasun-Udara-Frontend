"use client";
import Particles from "@/components/particles/ParticleDesign";
import { Typewriter } from "react-simple-typewriter";
import SP from "@/components/spline";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black to-darkMaroon text-gold flex flex-col items-center">
        <Particles />
        <div
          className="w-full h-full flex flex-col md:flex-row justift-center items-center relative"
          style={{ zIndex: 21 }}
        >
          <div className="w-full md:w-1/3 flex flex-col justify-center items-center absolute top-[100px] md:relative md:top-auto">
            <h1 className="text-right text-white w-full">
              <b>
                <span className="text-4xl md:text-6xl text-outline">
                  Kasun Udara
                </span>
              </b>
            </h1>
            <p className="text-right text-white w-full text-sm pl-4 md:pl-0">
              A computer science undergraduate at University of Colombo School
              of Computing. I am also the founder at our startup IgniteX , Software Engineer at IntendAble.
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
          <div className="w-full md:w-2/3 h-full flex flex-col justify-center items-center cursor-pointer">
            <SP />
          </div>
        </div>
      </div>
    </>
  );
}
