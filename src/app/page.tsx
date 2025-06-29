"use client";
import Particles from "@/components/particles/ParticleDesign";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import profileImage from "./logo.jpeg";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-black to-darkPink text-pink px-6 pt-20 md:pt-0 relative overflow-hidden">
      <Particles />

      <main className="w-full max-w-6xl flex flex-col-reverse md:flex-row justify-center items-center gap-10 relative z-20">
        {/* Text Content */}
        <section className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-6 px-4 md:px-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-pink leading-tight tracking-wide">
            Kasun Udara
          </h1>

          <p className="text-white text-lg max-w-lg">
            Computer Science Undergraduate at University of Colombo School of
            Computing, Software Engineer at Xeptagon.
          </p>

          <div className="text-2xl md:text-3xl font-semibold text-pink h-12 md:h-14">
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
          </div>

          <a
            href="https://drive.google.com/drive/folders/10xjKzVYgEHbfke_43dqWDfJW2NUZg_-H?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-lightPink text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black hover:shadow-lg transition duration-300 ease-in-out"
          >
            Download CV
          </a>
        </section>

        {/* Image Section */}
        <section className="w-full md:w-1/2 flex justify-center items-center cursor-pointer group">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl shadow-xl overflow-hidden animate-float">
            {/* Soft Glow Background */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-700 via-pink-500 to-yellow-400 opacity-30 blur-3xl z-0" />

            {/* Profile Image */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 overflow-hidden bg-black/20 backdrop-blur-md shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-105 z-10 blob-mask animate-float">
              <Image
                src={profileImage}
                alt="Kasun Udara Profile Image"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
