"use client";
import Image from "next/image";
import Particles from "@/components/particles/ParticleDesign";
import googleSummerOfCode from "../../../public/assests/competitions/googleSummerOfCode.png";
import hacktoberfest from "../../../public/assests/competitions/hacktoberfest.png";
import googleCodeIn from "../../../public/assests/competitions/googleCodeIn.jpg";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const competitions = [
  {
    title: "Hacktoberfest",
    description:
      "Hacktoberfest is a month-long celebration of open source software run by DigitalOcean.",
    image: hacktoberfest,
    places: "1st Place",
  },
  {
    title: "Google Code-in",
    description:
      "Google Code-in is a contest to introduce pre-university students (ages 13-17) to open source software development.",
    image: googleCodeIn,
    places: "1st Place",
  },
  {
    title: "Google Summer of Code",
    description:
      "Google Summer of Code is a global program focused on bringing more student developers into open source software development.",
    image: googleSummerOfCode,
    places: "1st Place",
  },
];

const tileVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function Page() {
  return (
    <>
      <div className="w-full h-auto md:h-screen bg-gradient-to-br from-black to-darkMaroon text-gold flex flex-col items-center py-4">
        <Particles />
        <motion.main
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full h-auto flex flex-col justify-center items-center"
        >
          <div className="mt-12 w-full flex flex-col justify-center items-center">
            <h1 className="text-1xl md:text-2xl text-gold w-full text-center">
              <b>
                <Typewriter
                  words={["Competitions and Victories"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </b>
            </h1>
            <p className="text-white text-sm w-3/4 md:w-3/4 text-center md:text-center mt-4">
              I have participated in several competitions and hackathons and
              have won several of them. Here are some of the competitions I have
              participated in and won.
            </p>
          </div>
        </motion.main>
        <div className="grid grid-row-1 md:grid-cols-2 gap-4 mt-4 md:p-4 mx-6 sm:mx-6 md:mx-10">
          {competitions.map((competition, index) => (
            <motion.div
              key={index}
              variants={tileVariants}
              initial="hidden"
              animate="visible"
              className="w-full"
            >
              <div
                key={index}
                className="text-black p-4 rounded-lg bg-white cursor-pointer transition transform transition duration-500 ease-in-out hover:bg-lightMaroon hover:text-white hover:scale-105 mx-4 mt-2 flex flex-col md:justify-center items-center"
              >
                <Image
                  src={competition.image}
                  alt={competition.title}
                  width={200}
                  height={200}
                />
                <h2 className="text-sm text-center mt-2">
                  <b>{competition.title}</b>
                </h2>
                <p className="mt-2 text-sm text-center">{competition.description}</p>
                <p className="mt-2 text-sm text-center">
                  <b>{competition.places}</b>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
