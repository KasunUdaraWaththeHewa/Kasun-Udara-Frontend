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
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-darkMaroon text-gold py-10 px-6 md:px-20 flex flex-col items-center">
      <Particles />

      <motion.main
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl w-full flex flex-col items-center mb-12"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-4 tracking-wide">
          <Typewriter
            words={["Projects and Contributions", "What I have Worked on"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </h1>
        <p className="max-w-4xl text-center text-base md:text-lg text-gray-300 leading-relaxed">
          I have worked on several projects and contributed to many open source projects.
          Below are some highlights. Feel free to explore more on my GitHub profile.
        </p>
      </motion.main>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full max-w-7xl">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={tileVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 cursor-pointer shadow-lg flex flex-col"
          >
            <Link
              href={project.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit project ${project.title}`}
              className="flex flex-col h-full"
            >
              <div className="relative w-full h-40 md:h-44 rounded-xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 20vw"
                  priority={index < 6}
                  className="rounded-xl"
                />
              </div>
              <div className="mt-4 flex flex-col flex-grow">
                <h2 className="text-lg font-semibold text-gold line-clamp-1 text-center">
                  {project.title}
                </h2>
                <p className="text-sm mt-1 text-gray-200 line-clamp-3 flex-grow">
                  {project.description}
                </p>
                <p className="mt-2 text-xs font-mono text-gold tracking-wide select-text text-center">
                  {project.techStack}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}