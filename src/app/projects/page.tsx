"use client";
import Image from "next/image";
import Particles from "@/components/particles/ParticleDesign";
import projectOne from "../../../public/assests/projects/project1.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const projects = [
  {
    title: "Project 01",
    description: "Description of Project 01",
    image: projectOne,
    link: "https://example.com/project-01",
  },
  {
    title: "Project 02",
    description: "Description of Project 02",
    image: projectOne,
    link: "https://example.com/project-02",
  },
  {
    title: "Project 03",
    description: "Description of Project 03",
    image: projectOne,
    link: "https://example.com/project-03",
  },
  {
    title: "Project 04",
    description: "Description of Project 04",
    image: projectOne,
    link: "https://example.com/project-04",
  },
  {
    title: "Project 05",
    description: "Description of Project 05",
    image: projectOne,
    link: "https://example.com/project-05",
  },
  {
    title: "Project 06",
    description: "Description of Project 06",
    image: projectOne,
    link: "https://example.com/project-06",
  },
];

const tileVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function Page() {
  return (
    <>
      <div className="w-full h-screen bg-gradient-to-br from-black to-darkMaroon text-gold flex flex-col items-center py-4">
        <Particles />
        <motion.main
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full h-auto flex flex-col justify-center items-center"
        >
          <div className="mt-12 w-full  flex flex-col justify-center items-center">
            <h1 className="text-1xl md:text-2xl text-white w-full text-center">
              <b><Typewriter
                  words={["Projects and Contributions"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                /></b>
            </h1>
            <p className="text-white text-sm w-3/4 md:w-full text-center md:text-left mt-4">
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
                <div className="text-black p-4 rounded-lg bg-white cursor-pointer transition transform transition duration-500 ease-in-out hover:bg-lightMaroon hover:text-white">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={200}
                    height={200}
                  />
                  <h2 className="text-sm mt-2 text-center">
                    <b>{project.title}</b>
                  </h2>
                  <p className="mt-2 text-xs text-center">{project.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
