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

const techStack = {
  frontend: [
    { name: "HTML", logo: html },
    { name: "CSS", logo: css },
    { name: "JavaScript", logo: js },
    { name: "TypeScript", logo: ts },
    { name: "React", logo: react },
    { name: "NextJS", logo: nextjs },
    { name: "Bootstrap", logo: Bootsrap },
    { name: "TailwindCSS", logo: Tailwind },
    { name: "Vite", logo: Vite },
  ],
  backend: [
    { name: "NodeJS", logo: node },
    { name: "ExpressJS", logo: express },
    { name: "Java", logo: java },
    { name: "Spring Boot", logo: spring },
    { name: "Python", logo: python },
    { name: "FastAPI", logo: fastAPI },
    { name: "PHP", logo: PHP },
    { name: "C", logo: C },
    { name: "C++", logo: Cpp },
  ],
  mobile: [
    { name: "React Native", logo: reactnative },
    { name: "Flutter", logo: flutter },
    { name: "Firebase", logo: Firebase },
    { name: "MySQL", logo: MySQL },
    { name: "MongoDB", logo: MongoDB },
    { name: "PostgreSQL", logo: PostgreSQL },
  ],
  devops: [
    { name: "AWS", logo: AWS },
    { name: "Azure", logo: Azure },
    { name: "Vercel", logo: Vercel },
    { name: "Github", logo: Github },
    { name: "Postman", logo: Postman },
    { name: "Docker", logo: Docker },
    { name: "Kubernetes", logo: Kubernetes },
  ],
};
const tileVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

type TechCategoryProps = {
  title: string;
  stack: { name: string; logo: any }[];
};

const TechCategory = ({ title, stack }: TechCategoryProps) => (
  <div className="w-full max-w-6xl px-6 py-6">
    <h2 className="text-xl font-semibold text-white mb-4 border-b border-pink pb-2">
      {title}
    </h2>
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
      {stack.map((tech) => (
        <motion.div
          key={tech.name}
          variants={tileVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center bg-white/5 rounded-xl p-3 hover:bg-pink hover:text-black transition-all duration-300"
        >
          <Image
            src={tech.logo}
            alt={tech.name}
            width={40}
            height={40}
            className="mb-2"
            title={tech.name}
          />
          <p className="text-xs font-medium text-center">{tech.name}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

export default function Page() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black to-darkPink text-pink py-10">
      <Particles />
      <motion.main
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="w-full flex flex-col items-center"
      >
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-4 tracking-wide">
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
          </h1>
          <p className="text-white mt-4 text-sm md:text-base">
            I have a confident understanding of these languages and tech stacks. I`m a fast, self-motivated learner who embraces new technologies and applies them in projects.
          </p>
        </div>

        {/* Section rendering */}
        <TechCategory title="Frontend Development" stack={techStack.frontend} />
        <TechCategory title="Backend Development" stack={techStack.backend} />
        <TechCategory title="Mobile Development" stack={techStack.mobile} />
        <TechCategory title="DevOps & Tools" stack={techStack.devops} />
      </motion.main>
    </div>
  );
}