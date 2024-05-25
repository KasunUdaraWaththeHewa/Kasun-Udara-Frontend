"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import Particles from "@/components/particles/ParticleDesign";
import html from "../../../public/assests/techlogo/html.webp";
import css from "../../../public/assests/techlogo/css.webp";
import js from "../../../public/assests/techlogo/javascript.webp";
import ts from "../../../public/assests/techlogo/typescript.png";
import react from "../../../public/assests/techlogo/react.png";
import reactnative from "../../../public/assests/techlogo/react-native.png";
import nextjs from "../../../public/assests/techlogo/nextjs.png";
import node from "../../../public/assests/techlogo/nodejs.png";
import express from "../../../public/assests/techlogo/express.png";
import java from "../../../public/assests/techlogo/java.png";
import spring from "../../../public/assests/techlogo/springboot.png";
import python from "../../../public/assests/techlogo/python.png";
import fastAPI from "../../../public/assests/techlogo/fastAPI.png";
import PHP from "../../../public/assests/techlogo/php.png";
import C from "../../../public/assests/techlogo/C.png";
import Cpp from "../../../public/assests/techlogo/C++.png";
import Bootsrap from "../../../public/assests/techlogo/bootstrap.png";
import Tailwind from "../../../public/assests/techlogo/tailwind.png";
import flutter from "../../../public/assests/techlogo/flutter.png";
import AWS from "../../../public/assests/techlogo/aws.png";
import Azure from "../../../public/assests/techlogo/azure.png";
import Vercel from "../../../public/assests/techlogo/vercel.png";
import Github from "../../../public/assests/techlogo/github.png";
import Postman from "../../../public/assests/techlogo/postman.png";
import MySQL from "../../../public/assests/techlogo/mysql.png";
import MongoDB from "../../../public/assests/techlogo/mongo-db.png";
import PostgreSQL from "../../../public/assests/techlogo/postgreSQL.png";
import Firebase from "../../../public/assests/techlogo/firebase.png";
import Vite from "../../../public/assests/techlogo/vite.png";
import Docker from "../../../public/assests/techlogo/docker.png";
import Kubernetes from "../../../public/assests/techlogo/kubernetes.webp";

const FrontendDevelopment = [
  {
    name: "HTML",
    logo: html,
  },
  {
    name: "CSS",
    logo: css,
  },
  {
    name: "JavaScript",
    logo: js,
  },
  {
    name: "TypeScript",
    logo: ts,
  },
  {
    name: "React",
    logo: react,
  },
  {
    name: "NextJS",
    logo: nextjs,
  },
  {
    name: "Bootstrap",
    logo: Bootsrap,
  },
  {
    name: "TailwindCSS",
    logo: Tailwind,
  },
  {
    name: "Vite",
    logo: Vite,
  },
];

const BackendDevelopment = [
  {
    name: "NodeJS",
    logo: node,
  },
  {
    name: "ExpressJS",
    logo: express,
  },
  {
    name: "Java",
    logo: java,
  },
  {
    name: "Spring Boot",
    logo: spring,
  },
  {
    name: "Python",
    logo: python,
  },
  {
    name: "FastAPI",
    logo: fastAPI,
  },
  {
    name: "PHP",
    logo: PHP,
  },
  {
    name: "C",
    logo: C,
  },
  {
    name: "C++",
    logo: Cpp,
  },
];

const MobileDevelopment = [
  {
    name: "React Native",
    logo: reactnative,
  },
  {
    name: "Flutter",
    logo: flutter,
  },
  {
    name: "Firebase",
    logo: Firebase,
  },
  {
    name: "MySQL",
    logo: MySQL,
  },
  {
    name: "MongoDB",
    logo: MongoDB,
  },
  {
    name: "PostgreSQL",
    logo: PostgreSQL,
  },
];

const DevOps = [
  {
    name: "AWS",
    logo: AWS,
  },
  {
    name: "Azure",
    logo: Azure,
  },
  {
    name: "Vercel",
    logo: Vercel,
  },
  {
    name: "Github",
    logo: Github,
  },
  {
    name: "Postman",
    logo: Postman,
  },
  {
    name: "Docker",
    logo: Docker,
  },
  {
    name: "Kubernetes",
    logo: Kubernetes,
  },
];
const tileVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
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
                  words={[
                    "Skills and Technologies",
                    "What I am Good At",
                    "Tech Stacks I am Familiar With",
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
              I have a confident understanding on these languages and tech
              stacks. I am a good quick self learner who always learn new
              technologies and applying them for my projects.
            </p>
          </div>
        </motion.main>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-3/4 h:auto md:h-[150px] p-2 mt-4">
            {/* <h1 className="text-sm text-white mt-2 w-full text-left">
              Frontend Development
            </h1> */}
            <div className="grid grid-row-1 grid-cols-2 md:grid-cols-9 gap-4 mt-4 mx-6 sm:mx-6 md:mx-10">
              {FrontendDevelopment.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={tileVariants}
                  initial="hidden"
                  animate="visible"
                  className="w-full"
                >
                  <div
                    key={tech.name}
                    className="flex flex-col justify-center items-center p-2  md:ml-10 cursor-pointer"
                  >
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={50}
                      height={50}
                      style={{ zIndex: 21 }}
                      title={tech.name}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="w-3/4 h:auto md:h-[150px] p-2 mt-4">
            {/* <h1 className="text-sm text-white mt-2  w-full text-left">
              Backend Development
            </h1> */}
            <div className="grid grid-row-1 grid-cols-2 md:grid-cols-9 gap-4 mt-4 mx-6 sm:mx-6 md:mx-10">
              {BackendDevelopment.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={tileVariants}
                  initial="hidden"
                  animate="visible"
                  className="w-full"
                >
                  <div
                    key={tech.name}
                    className="flex flex-col justify-center items-center p-2  md:ml-10  cursor-pointer"
                  >
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={50}
                      height={50}
                      style={{ zIndex: 21 }}
                      title={tech.name}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="w-3/4 h:auto md:h-[150px] p-2">
            {/* <h1 className="text-sm text-white mt-2  w-full text-left">
              Mobile App Development
            </h1> */}

            <div className="grid grid-row-1 grid-cols-2 md:grid-cols-9 gap-4 mt-4 mx-6 sm:mx-6 md:mx-10">
              {MobileDevelopment.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={tileVariants}
                  initial="hidden"
                  animate="visible"
                  className="w-full"
                >
                  <div
                    key={tech.name}
                    className="flex flex-col justify-center items-center p-2  md:ml-10 cursor-pointer"
                  >
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={50}
                      height={50}
                      style={{ zIndex: 21 }}
                      title={tech.name}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="w-3/4 h:auto md:h-[150px] p-2">
            {/* <h1 className="text-sm text-white mt-2  w-full text-left">
              DevOps
            </h1> */}
            <div className="grid grid-row-1 grid-cols-2 md:grid-cols-9 gap-4 mt-4 mx-6 sm:mx-6 md:mx-10">
              {DevOps.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={tileVariants}
                  initial="hidden"
                  animate="visible"
                  className="w-full"
                >
                  <div
                    key={tech.name}
                    className="flex flex-col justify-center items-center p-2 md:ml-10 cursor-pointer"
                  >
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={50}
                      height={50}
                      style={{ zIndex: 21 }}
                      title={tech.name}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
