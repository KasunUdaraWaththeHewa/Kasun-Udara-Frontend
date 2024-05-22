import Image from "next/image";
import Particles from "@/components/particles/ParticleDesign";
import logo from "../../../public/logo.jpeg";
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
import C from "../../../public/assests/techlogo/c.png";
import Cpp from "../../../public/assests/techlogo/c++.png";
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
import PostgreSQL from "../../../public/assests/techlogo/postgreSQL.jpg";
import Firebase from "../../../public/assests/techlogo/firebase.png";
import Vite from "../../../public/assests/techlogo/vite.png";
import Docker from "../../../public/assests/techlogo/docker.png";
import Kubernetes from "../../../public/assests/techlogo/kubernetes.webp";

export default function Page() {
  const technologies = [
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
      name: "React Native",
      logo: reactnative,
    },
    {
      name: "NextJS",
      logo: nextjs,
    },
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
    {
      name: "Bootstrap",
      logo: Bootsrap,
    },
    {
      name: "Tailwind CSS",
      logo: Tailwind,
    },
    {
      name: "Flutter",
      logo: flutter,
    },
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
    {
      name: "Firebase",
      logo: Firebase,
    },
    {
      name: "Vite",
      logo: Vite,
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

  const socials = [
    {
      name: "LinkedIn",
      logo: "bxl-linkedin-square",
      link: "https://www.linkedin.com/in/w-h-kasun-udara/",
    },
    {
      name: "GitHub",
      logo: "bxl-github",
      link: "https://github.com/KasunUdaraWaththeHewa",
    },
    {
      name: "Facebook",
      logo: "bxl-facebook",
      link: "https://www.facebook.com/kasun.kalhara.900?mibextid=LQQJ4d",
    },
    {
      name: "Gmail",
      logo: "bxl-gmail",
      link: "mailto:kasunu2001@gmail.com",
    },
  ];
  return (
    <>
      <div className="w-full h-screen bg-gradient-to-br from-black to-darkMaroon text-gold flex flex-col items-center py-4">
        <Particles />
        <div
          className="w-3/4 flex flex-row justify-end items-center cursor-pointer"
          style={{ zIndex: 21 }}
        >
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 rounded-lg p-2 transition transform hover:scale-110 transition duration-500 ease-in-out"
            >
              <i className={`bx ${social.logo} text-1xl`}></i>
            </a>
          ))}
        </div>
        <div className="mt-4">
          <h1 className="text-4xl text-white w-full text-centers">
            <b>About Me</b>
          </h1>
        </div>
        <div className="w-full h-[275px] flex flex-row mt-4 justify-center items-center">
          <div className="h-full" style={{ width: "20%" }}>
            <Image
              alt="Kasun Udara"
              src={logo}
              className="rounded-full"
            ></Image>
          </div>
          <div
            className="w-full flex flex-col justify-center items-center ml-10"
            style={{ width: "60%", zIndex: 21 }}
          >
            <h1 className="text-2xl text-left w-full text-gold">
              <b>Waththe Hewa Kasun Udara</b>
            </h1>
            <p className="text-white mt-4">
              Hello I am Kasun Udara, a Software Engineer, Web Developer ,
              Mobile App Developer , Backend Developer , Frontend Developer,
              FullStack Developer, Machine Learning Enthusiast, Tech Enthusiast,
              Freelancer and more... I am currently a computer science
              undergraduate at University of Colombo School of Computing. I am
              also the Chief Executive Officer at our startup{" "}
              <span className="text-gold">IgniteX</span>.
            </p>
            <div className="w-full flex flex-row mt-1">
              <i className="bx bx-location-plus mt-1"></i>
              <h3 className="ml-4 text-1xl text-left w-full text-gold">
                Ambalangoda, Sri Lanka
              </h3>
            </div>
            <div className="w-full flex flex-row mt-1">
              <i className="bx bxl-gmail mt-1 text-white"></i>
              <h3 className="ml-4 text-sm text-left w-full text-white">
                kasunu2001@gmail.com
              </h3>
            </div>
          </div>
        </div>
        <div className="w-full h-auto px-10 pt-4">
          <p className="text-white">
            As a passionate Full-stack Developer and Java Developer, I thrive on
            pushing the boundaries of technology. With a strong foundation in
            frontend, backend, and mobile app development, I bring a versatile
            skill set to every project I undertake. What sets me apart is my
            unwavering commitment to learning and embracing new technologies and
            applying them to real-world problems.
          </p>
        </div>
        <div className="w-full h-auto px-10 pt-4">
          <p className="text-white">
            I am currently the <span className="text-gold">Web Master</span> at
            UCSC ACM and I got experiences at web tasks at UCSC ACM ,{" "}
            <span className="text-gold">marketing tasks</span> at UCSC ACM,
            where I help to market events and posts, for events and workshops. I
            have involved in the <span className="text-gold">program</span> and{" "}
            <span className="text-gold">logistics and finance tasks</span>,
            where I developed and promoted engaging content and campaigns for
            the chapter.
          </p>
        </div>
        <div className="w-full h-auto px-10 pt-4">
          <p className="text-white">
            I have a confident understanding on these languages, tech stacks and
            I am a good self learner who always learn new things.
          </p>
        </div>
        <div className="w-3/4 flex flex-wrap justify-center mt-10">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="p-2 flex flex-col justify-center items-center"
            >
              <Image src={tech.logo} alt={tech.name} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
