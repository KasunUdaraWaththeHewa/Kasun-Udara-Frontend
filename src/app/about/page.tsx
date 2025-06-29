"use client";
import React, { useState } from "react";
import Image from "next/image";
import Particles from "@/components/particles/ParticleDesign";
import logo from "../../../public/logo.jpeg";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const tileVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function Page() {
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  const handleTextClick = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setMessage("Email address copied to clipboard!");
        setIsError(false);
      })
      .catch((err) => {
        console.error("Copy failed: ", err);
        setMessage("Failed to copy email address. Please try again later.");
        setIsError(true);
      });
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black to-darkPink text-white relative py-10 px-4">
      <Particles />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center space-y-6"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-pink">
          <Typewriter
            words={[
              "About Me",
              "Who Am I?",
              "I am Kasun Udara",
              "From University of Colombo",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>

        <p className="text-white text-sm md:text-base leading-relaxed">
          I am Kasun Udara, a versatile Full Stack Software Engineer,
          experienced in Web, Mobile, and Backend Development. Currently an
          undergraduate at the University of Colombo School of Computing, I work
          at Xeptagon and am passionate about merging innovation with practical
          solutions.
        </p>
      </motion.div>

      <motion.div
        variants={tileVariants}
        initial="hidden"
        animate="visible"
        className="mt-10 max-w-4xl mx-auto bg-white/5 p-6 rounded-2xl shadow-lg backdrop-blur-md"
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Image
            alt="Kasun Udara"
            src={logo}
            width={160}
            height={160}
            className="rounded-full shadow-md"
          />
          <div className="flex-1 space-y-2">
            <h2 className="text-xl font-bold text-pink">
              Waththe Hewa Kasun Udara
            </h2>
            <p className="text-sm text-white/90 leading-relaxed">
              I`m a Full-stack Developer and Java Developer with a strong
              foundation in frontend, backend, and mobile app development. I
              love solving problems, learning emerging technologies, and
              delivering scalable solutions to real-world challenges.
            </p>

            <div className="flex items-center gap-3 text-sm text-white/80 mt-2">
              <i className="bx bx-location-plus text-lg text-pink" />
              <span>Ambalangoda, Sri Lanka</span>
            </div>
            <div
              className="flex items-center gap-3 text-sm text-white/80 cursor-pointer hover:text-pink transition"
              onClick={() => handleTextClick("kasunu2001@gmail.com")}
              title="Click to copy email"
            >
              <i className="bx bxl-gmail text-lg text-pink" />
              <span>kasunu2001@gmail.com</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-10 max-w-4xl mx-auto space-y-6 text-sm text-white/90 leading-relaxed text-justify">
        <p>
          As the <span className="text-pink">Web Master</span> of UCSC ACM, I’ve
          taken lead in managing web infrastructure and supporting event
          promotion and marketing strategies. My contributions also span
          logistics, programming, and finance roles, helping deliver impactful
          workshops and campaigns.
        </p>

        <p>
          My tech stack includes React, Node.js, Express, MongoDB, MySQL, PHP,
          Spring Boot, Java, Python, FastAPI, C++, and mobile frameworks like
          Flutter and React Native. I`m currently exploring the integration of
          Machine Learning and Blockchain into full-stack systems.
        </p>
      </div>

      {message && (
        <p
          className={`mt-6 text-center text-sm ${
            isError ? "text-red-500" : "text-green-500"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
