"use client";
import Image from "next/image";
import Particles from "@/components/particles/ParticleDesign";
import projectOne from "../../../public/assests/projects/project1.png";
import LoneSurvivor from "../../../public/assests/projects/loneSurvivor.png";
import Thahawuru from "../../../public/assests/projects/thahawuru.png";
import SriTel from "../../../public/assests/projects/SriTelCustomerCare.png";
import Akahub from "../../../public/assests/projects/Akahub.png";
import StaySafeQuarantineCenter from "../../../public/assests/projects/Stay Safe Quarantine Center.png";
import Hackathonslk from "../../../public/assests/projects/HackAthonslk.jpeg";
import hackaholics6 from "../../../public/assests/projects/Hackaholics6.0.png";
import noilk from "../../../public/assests/projects/noilk.png";
import noiportal from "../../../public/assests/projects/NOI Portal.png";
import kasunudarame from "../../../public/assests/projects/kasunudara.me.png";
import readConnect from "../../../public/assests/projects/readconnect.png";
import kiddieED from "../../../public/assests/projects/kiddieED.png";
import Finforecast from "../../../public/assests/projects/Finforecast.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const projects = [
  {
    title: "Thahawuru",
    description:
      "Blockchain based Digital Idenntity Verification System for Sri Lankan Citizens.",
    techStack:
      "NodeJS Express Springboot Nextjs Solidity Hardhat PostgreSQL Typescript Tailwind",
    image: Thahawuru,
    link: "https://github.com/orgs/Thahawuru/repositories",
  },
  {
    title: "ඇක Hub",
    description:
      "Student Collaborative and Connectivity platform for UCSC Students.",
    techStack: "PHP MySQL HTML CSS JS JQuery ",
    image: Akahub,
    link: "https://github.com/SaliyaBandara/aka-hub",
  },
  {
    title: "Sri Tel - Customer Care System",
    description:
      "A Customer Care System for Sri Lanka Telecom using Microservice Architecture.",
    techStack: "NodeJS Express MongoDB Springboot Go",
    image: SriTel,
    link: "https://github.com/KasunUdaraWaththeHewa/Sri-Tel-Customer-Care-Web-Portal-Backend",
  },
  {
    title: "Lone Survivor",
    description:
      "Unity based 3D Survial Game developed for a University Project.",
    techStack: "Unity C# Flooded Grounds",
    image: LoneSurvivor,
    link: "https://drive.google.com/drive/folders/1B9etWNldeIgbi0SmDnGhQVfKw9d1FYv2?usp=sharing",
  },
  {
    title: "Stay Safe Quarantine Center",
    description:
      "A web application to manage quarantine centers in Sri Lanka using MERN Stack.",
    techStack: "MongoDB Express React NodeJS",
    image: StaySafeQuarantineCenter,
    link: "https://github.com/KasunUdaraWaththeHewa/Stay-Safe-Quarantine-Center",
  },
  {
    title: "HackAthons.lk",
    description: "A platform to find hackathons happening around Sri Lanka.",
    techStack: "MongoDB Express React NodeJS",
    image: Hackathonslk,
    // link: "https://github.com/IntendAble/HackHive",
    link: "",
  },
  {
    title: "Read Connect",
    description:
      "A Library Management system specially designed for School libraries.",
    techStack: "MongoDB Express React NodeJS",
    image: readConnect,
    link: "https://github.com/IgniteX-SL/Read-Connect",
  },
  {
    title: "Finforecast",
    description: "An application for Stocks Analyzing and Predictions for CSE",
    techStack: "Python FastAPI React Vite Typescript",
    image: Finforecast,
    link: "https://fin-forecast-frontend.vercel.app",
  },
  {
    title: "Kiddie ED Backend",
    description:
      "Backend for the Kiddie ED project which is a Kindergarten platform.",
    techStack: "MongoDB Express React NodeJS",
    image: kiddieED,
    link: "https://github.com/kORzix/KiddieEd-node-backend",
  },
  {
    title: "Hackaholic 6.0",
    description:
      "Official Website for Hackaholics 6.0 organized by IEEE WIE in UCSC.",
    techStack: "MongoDB Express React NodeJS Typescript Tailwind",
    image: hackaholics6,
    link: "https://hackaholics.ucscieee.lk/",
  },
  {
    title: "NOI.lk",
    description:
      "National Olympiad of Informatics 2024 organized by ACM UCSC in collaboration with Ministry of Education.",
    techStack: "NextJS MongoDB Typescript Tailwind",
    image: noilk,
    link: "https://www.noi.lk/",
  },
  {
    title: "NOI Portal",
    description:
      "A LMS type portal platform to manage National Olimpiad of Informatics and manage the participants.",
    techStack: "PHP MySQL HTML CSS JS JQuery",
    image: noiportal,
    // link: "https://github.com/NOI-SL/NOI-LMS-PHP",
    link: "",
  },
  {
    title: "kasunudara.me",
    description:
      "My personal portfolio website to show my projects, skills, certifications and services.",
    techStack: "NextJS Typescript Tailwind",
    image: kasunudarame,
    link: "https://github.com/KasunUdaraWaththeHewa/Kasun-Udara-Frontend",
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
          <div className="mt-12 w-full  flex flex-col justify-center items-center">
            <h1 className="text-1xl md:text-2xl text-gold w-full text-center">
              <b>
                <Typewriter
                  words={[
                    "Projects and Contributions",
                    "What I have Worked on",
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
            <p className="text-white text-sm w-3/4 md:w-3/4 text-center md:text-center mt-4">
              I have worked on several projects and have contributed to several
              open source projects. Here are some of the projects I have worked
              on and contributed to. You can find more on my GitHub profile.
            </p>
          </div>
        </motion.main>
        <div className="grid grid-rows-1 md:grid-cols-5 gap-4 mt-4 p-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={tileVariants}
              initial="hidden"
              animate="visible"
              className="w-full"
            >
              <Link
                style={{ zIndex: 21 }}
                key={index}
                href={project.link}
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:scale-105 transition transform transition duration-500 ease-in-out shadow-lg hover:shadow-xl rounded-lg"
              >
                <div className="text-black p-4 rounded-lg bg-white cursor-pointer transition transform transition duration-500 ease-in-out hover:bg-lightMaroon hover:text-white flex flex-col justify-center items-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={200}
                    height={200}
                  />
                  <h2 className="text-sm mt-2 text-center">
                    <b>{project.title}</b>
                  </h2>
                  <p className="mt-2 text-xs text-center">
                    {project.description}
                  </p>
                  <p className="mt-2 text-xs text-center">
                    <b>{project.techStack}</b>
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
