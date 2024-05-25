"use client";
import Image from "next/image";
import Particles from "@/components/particles/ParticleDesign";
import sample from "../../../public/assests/certificates/sample.png";
import IJSE from "../../../public/assests/certificateLogo/IJSE.png";
import universityOfMichigan from "../../../public/assests/certificateLogo/University of Michigan.png";
import Hackerrank from "../../../public/assests/certificateLogo/Hackerrank.png";
import IBM from "../../../public/assests/certificateLogo/IBM.png";
import Google from "../../../public/assests/certificateLogo/Google.png";
import ISC2 from "../../../public/assests/certificateLogo/ISC2.png";
import UCDavis from "../../../public/assests/certificateLogo/UCDAVIS.png";
import Cisco from "../../../public/assests/certificateLogo/Cisco.png";
import AWS from "../../../public/assests/certificateLogo/AWS.png";
import LinkedIn from "../../../public/assests/certificateLogo/LinkedIn.png";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const certifications = [
  {
    name: "Diploma in Comprehensive Master Java Developer",
    logo: IJSE,
    // link: "https://www.linkedin.com/posts/w-h-kasun-udara-5647a4218_java-oracle-oop-activity-7011543055962968065-4AMR/",
    link: "",
  },
  {
    name: "Programming for Everybody (Getting Started with Python)",
    logo: universityOfMichigan,
    link: "https://www.coursera.org/account/accomplishments/certificate/E48NH9HA3L8R",
  },
  {
    name: "Python (Basic) Certificate",
    logo: Hackerrank,
    link: "https://www.hackerrank.com/certificates/e8f694d904d6",
  },
  {
    name: "Problem Solving (Basic) Certificate",
    logo: Hackerrank,
    link: "https://www.hackerrank.com/certificates/0cb415f3c931",
  },
  {
    name: "Javascript (Basic) Certificate",
    logo: Hackerrank,
    link: "https://www.hackerrank.com/certificates/8a38cf474154",
  },
  {
    name: "Java (Basic) Certificate",
    logo: Hackerrank,
    link: "https://www.hackerrank.com/certificates/6d83df93d9f4",
  },
  {
    name: "CSS (Basic) Certificate",
    logo: Hackerrank,
    link: "https://www.hackerrank.com/certificates/e446f206ff25",
  },
  {
    name: "What is Data Science",
    logo: IBM,
    link: "https://www.coursera.org/account/accomplishments/certificate/SW6TCAUE3XLX",
  },
  {
    name: "Google Project Management Professional Certificate",
    logo: Google,
    link: "https://www.coursera.org/account/accomplishments/certificate/YZ77WBNPH57Q",
  },
  {
    name: "Introduction to Technical Support",
    logo: IBM,
    link: "https://www.coursera.org/account/accomplishments/certificate/AY4FHESWSFC2",
  },
  {
    name: "Introduction to Artificial Intelligence (AI)",
    logo: IBM,
    link: "https://www.coursera.org/account/accomplishments/certificate/Q8RVP3W3RCAV",
  },
  {
    name: "Google Cybersecurity Professional Certificate",
    logo: Google,
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/6SEBHUQJFRNB",
  },
  {
    name: "Certified in Cybersecurity",
    logo: ISC2,
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/RL32SHLCLPA6",
  },
  {
    name: "Agile Project Management",
    logo: Google,
    link: "https://www.coursera.org/account/accomplishments/certificate/T9SMNGZ8NZXY",
  },
  {
    name: "Javascript for Beginners (Specialization)",
    logo: UCDavis,
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/XHYUFKHDRHSC",
  },
  {
    name: "Networking Essentials",
    logo: Cisco,
    link: "",
  },
  {
    name: "AWS Educate Introduction to Cloud 101",
    logo: AWS,
    link: "https://www.credly.com/badges/b5d2c6fd-47c5-48c1-8548-d0998a77df1e/linked_in_profile",
  },
  {
    name: "React JS Essential Training",
    logo: LinkedIn,
    link: "https://www.linkedin.com/learning/certificates/320510bf00d530158e0c310c95e54d33b76b14ab009e3ee0b4f44f880585002c?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B%2BLhZmvi0Tc64D4HDGPE3cQ%3D%3D",
  },
  {
    name: "MERN Essential Training",
    logo: LinkedIn,
    link: "https://www.linkedin.com/learning/certificates/ffc0c50aeda38fe9baffc454d44e470f7b59cbe6e73e5edf9f3910c325a1b8e2",
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
                  words={["Licenses and Certifications"]}
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
              I have completed several courses and certifications to enhance my
              skills and knowledge. I am always eager to learn new technologies
              and tools to improve my work. Here are some of the certifications
              I have completed so far in my career.
            </p>
          </div>
        </motion.main>
        <div className="w-full flex flex-wrap justify-center items-center mt-4">
          <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((certification) => (
              <motion.div
                key={certification.name}
                variants={tileVariants}
                initial="hidden"
                animate="visible"
                className="w-full"
              >
                <a
                  key={certification.name}
                  href={certification.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 rounded-lg transition transform hover:scale-105 transition duration-500 ease-in-out bg-black p-2 hover:bg-darkMaroon hover:shadow-lg"
                >
                  <Image
                    src={certification.logo}
                    alt={certification.name}
                    width={25}
                    height={25}
                    className="rounded-lg"
                  />
                  <span className="text-white text-sm w-full">
                    <h1 className="text-sm text-left md:text-left">
                      {certification.name}
                    </h1>
                  </span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
        <p
          className="text-white text-sm w-3/4 md:w-3/4 text-center md:text-center mt-4"
          style={{ zIndex: 21 }}
        >
          You may visit my{" "}
          <a
            href="https://www.linkedin.com/in/w-h-kasun-udara/details/certifications/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold cursor-pointer"
          >
            LinkedIn
          </a>{" "}
          profile or{" "}
          <a
            href="https://github.com/KasunUdaraWaththeHewa/My-Certificates-in-IT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold cursor-pointer"
          >
            Github
          </a>{" "}
          repository to see more certifications I possess.
        </p>
      </div>
    </>
  );
}
