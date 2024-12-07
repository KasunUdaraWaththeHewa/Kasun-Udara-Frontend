"use client";
import Image from "next/image";
import Particles from "@/components/particles/ParticleDesign";
import HackTheBoxUniCTF2023 from "../../../public/assests/competitions/HackTheBoxUniCTF2023.png";
import hacktoberfest from "../../../public/assests/competitions/hacktoberfest.png";
import IEEEXtreme2023 from "../../../public/assests/competitions/IEEE Xtreme 2023.png";
import ManthraCTF from "../../../public/assests/competitions/ManthraCTF.png";
import CodefestAlgothon2022 from "../../../public/assests/competitions/CodeFest Algothon 2022.png";
import pyHack2 from "../../../public/assests/competitions/PyHack 2.0.png";
import HackX2023 from "../../../public/assests/competitions/HackX2023.jpg";
import Devthon from "../../../public/assests/competitions/Devthon 1.0.jpeg";
import Codesprint from "../../../public/assests/competitions/codesprint.jpg";
import HackTheBoo2024 from "../../../public/assests/competitions/HackTheBoo 2024.png";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const competitions = [
  {
    title: "Hack The Box UniCTF 2023",
    description:
      "Hack The Box UniCTF 2023 is a Capture The Flag competition organized by Hack The Box.",
    image: HackTheBoxUniCTF2023,
    places: "101st Place (Worldwide) , 1st Place (Sri Lanka)",
  },
  {
    title: " Hack The Boo 2024",
    description:
      "Hack The Boo 2024 is a Capture The Flag competition organized by Hack The Box.",
    image: HackTheBoo2024,
    places: "109 th place from 6349 teams.",
  },
  {
    title: "IEEE Xtreme 17.0",
    description:
      "IEEE Xtreme is a global 24 hour competitive programming Hackathon which students compete.",
    image: IEEEXtreme2023,
    places: "50 th place (Sri Lanka)",
  },
  {
    title: "ManthraCTF 2023",
    description:
      "ManthraCTF is a Capture The Flag competition organized by the IEEE at NSBM Green University.",
    image: ManthraCTF,
    places: "2nd Upper (Sri Lanka)",
  },
  {
    title: "Hacktoberfest 2023",
    description:
      "Hacktoberfest is a month-long global open source software challenge.",
    image: hacktoberfest,
    places: "Completed",
  },
  {
    title: "CodeFest Algothon 2022",
    description:
      "Algothon is a CP hackathon organized by the SLIIT in Codefest 2022.",
    image: CodefestAlgothon2022,
    places: "6th Place (Sri Lanka)",
  },
  {
    title: "PyHack 2.0",
    description:
      "PyHack 2.0 is a CP hackathon organized by the IEEE at IIT University.",
    image: pyHack2,
    places: "7 th Place (Sri Lanka)",
  },
  {
    title: "HackX 2023",
    description:
      "HackX 2023 is a Inter University Startup Challenge organized by University of Kelaniya.",
    image: HackX2023,
    places: "Semi Finalist (Sri Lanka)",
  },
  {
    title: "Devthon 1.0",
    description:
      "Devthon 1.0 is a hackathon organized by the Leo Club at University of Moratuwa.",
    image: Devthon,
    places: "Semi Finalist (Sri Lanka)",
  },
  {
    title: "Codesprint 8",
    description:
      "Codesprint is a Startup competition organized by the IEEE at IIT.",
      "image":Codesprint,
    places: "Finalist (Sri Lanka) - from over 525 teams",
  }
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
                  words={["Competitions and Victories","What I have Participated"]}
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
        <div className="grid grid-row-1 md:grid-cols-3 gap-4 mt-4 md:p-4 mx-6 sm:mx-6 md:mx-10">
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
                <p className="mt-2 text-sm text-center">
                  {competition.description}
                </p>
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
