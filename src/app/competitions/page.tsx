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
    image: Codesprint,
    places: "Finalist (Sri Lanka) - from over 525 teams",
  },
];

const tileVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export default function Page() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black to-darkMaroon text-gold py-10">
      <Particles />
      <motion.main
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full flex flex-col items-center"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-4 tracking-wide">
          <Typewriter
            words={[
              "Competitions and Victories",
              "What I Have Participated In",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={30}
            delaySpeed={1200}
          />
        </h1>
        <p className="text-white text-sm md:text-base text-center max-w-2xl mt-4 mb-10 px-4">
          I have actively participated in national and international hackathons,
          coding competitions, and CTFs. Here's a glimpse of my journey and
          achievements.
        </p>
      </motion.main>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-20">
        {competitions.map((comp, index) => (
          <motion.div
            key={index}
            variants={tileVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 hover:scale-105 transform transition duration-300 shadow-lg text-white"
          >
            <div className="w-full h-40 relative rounded-xl overflow-hidden">
              <Image
                src={comp.image}
                alt={comp.title}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gold">{comp.title}</h2>
              <p className="text-sm mt-1 text-gray-200">{comp.description}</p>
              <p className="mt-2 text-sm text-gold font-semibold">
                {comp.places}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
