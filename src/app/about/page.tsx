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

  const handleTextClick = (text: any) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard!");
        setMessage("Email address copied to clipboard!");
        setIsError(false);
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
        setMessage("Failed to copy email address. Please try again later.");
        setIsError(true);
      });
  };
  return (
    <>
      <div className="w-full min-h-screen h-auto bg-gradient-to-br from-black to-darkMaroon text-gold flex flex-col items-center py-4">
        <Particles />
        <motion.main
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full h-auto flex flex-col justify-center items-center"
        >
          <div className="mt-12 w-full flex flex-col justify-center items-center sm:items-center md:items-left sm:justify-center">
            <h1 className="sm:text-1xl md:text-2xl text-gold w-full flex flex-col justify-center items-center">
              <b>
                <Typewriter
                  words={[
                    "About Me",
                    "Who Am I",
                    "I am Kasun Udara",
                    "From",
                    "University of Colombo",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </b>
            </h1>
            <p className="text-white text-sm w-3/4 sm:w-3/4 md:w-3/4 text-center md:text-center mt-4">
              I am Kasun Udara, a Software Engineer, Web Developer, Mobile App
              Developer, Backend Developer, Frontend Developer, FullStack
              Developer, Machine Learning Enthusiast, Tech Enthusiast,
              Freelancer. I am currently a computer science undergraduate at
              University of Colombo School of Computing. I went to Dharmasoka
              College Ambalangoda. I am also the founder at our startup IgniteX
              , software engineer at IntendAble.
            </p>
          </div>
        </motion.main>
        <motion.div
          variants={tileVariants}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <div className="w-full h-auto md:h-[500px] flex flex-col justify-center items-center">
            <div className="w-full h-auto md:h-[275px] flex flex-col md:flex-row mt-4 justify-center items-center">
              <div className="h-full flex flex-col justify-center items-center w-[100px] sm:w-[100px] md:w-[200px]">
                <Image
                  alt="Kasun Udara"
                  src={logo}
                  className="rounded-full"
                ></Image>
              </div>
              <div
                className="w-full flex flex-col justify-center items-center md:ml-10 mt-4 w-[170px] md:w-[700px]"
                style={{ zIndex: 21 }}
              >
                <h1 className="text-1xl md:text-2xl text-center md:text-left w-full text-white">
                  <b>Waththe Hewa Kasun Udara</b>
                </h1>
                <p className="text-white mt-4 text-sm text-center md:text-justify w-3/4 md:w-full">
                  As a passionate Full-stack Developer and Java Developer, I
                  thrive on pushing the boundaries of technology. With a strong
                  foundation in frontend, backend, and mobile app development, I
                  bring a versatile skill set to every project I undertake. What
                  sets me apart is my unwavering commitment to learning and
                  embracing new technologies and applying them to real-world
                  problems.
                </p>
                <div className="w-full flex flex-row justify-center items-center mt-4 sm:mt-4 md:mt-1 text-white hover:text-gold cursor-pointer">
                  <i className="bx bx-location-plus mt-1"></i>
                  <h3 className="ml-4 text-sm text-left md:w-full">
                    Ambalangoda, Sri Lanka
                  </h3>
                </div>
                <div className="w-full flex flex-row justify-center items-center mt-1 text-white hover:text-gold cursor-pointer">
                  <i className="bx bxl-gmail mt-1"></i>
                  <h3
                    className="ml-4 text-sm text-left md:w-full"
                    onClick={() => handleTextClick("kasunu2001@gmail.com")}
                    title="Click to copy email address"
                  >
                    kasunu2001@gmail.com
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-3/4 h-auto md:px-10 pt-4">
              <p className="text-white text-sm text-center md:text-justify">
                I am currently the{" "}
                <span className="text-white">Web Master</span> at UCSC ACM and I
                got experiences at web tasks at UCSC ACM ,{" "}
                <span className="text-white">marketing tasks</span> at UCSC ACM,
                where I help to market events and posts, for events and
                workshops. I have involved in the{" "}
                <span className="text-white">program</span> and{" "}
                <span className="text-white">logistics and finance tasks</span>,
                where I developed and promoted engaging content and campaigns
                for the chapter.
              </p>
            </div>
            <div className="w-3/4 h-auto md:px-10 pt-4">
              <p className="text-white text-sm text-center md:text-justify">
                I am comfirtable with Javascript frameworks and Libraries for
                fullstack development. I have experiences in react , mongo ,
                express , nodejs , PHP , Javascript , MySQL , HTML , CSS , Java
                , springboot , python , C , C++ , fastAPI, React Native ,
                Flutter. I am currently trying to engage Machine Learning and
                Blockchaain technology for Fullstack development. I am a quick
                self learner and I am always ready to learn new technologies.
              </p>
            </div>
          </div>
        </motion.div>
        {message && (
          <p
            className={`mt-4 text-sm ${
              isError ? "text-red-500" : "text-green-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </>
  );
}
