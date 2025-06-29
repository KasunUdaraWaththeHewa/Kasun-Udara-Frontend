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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Page() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black to-darkMaroon text-gold py-16 px-4">
      <Particles />

      <motion.main
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full flex flex-col items-center mb-12"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-4">
          <Typewriter
            words={["Licenses and Certifications"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={30}
            delaySpeed={1200}
          />
        </h1>
        <p className="text-white text-center max-w-2xl text-base mt-2">
          These certifications highlight my continued growth and dedication to staying current in tech. Click to view each one.
        </p>
      </motion.main>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            variants={tileVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onClick={() => cert.link && window.open(cert.link, "_blank")}
            className={`cursor-pointer bg-white/10 transition-all duration-300 p-6 rounded-xl border border-white/10 shadow-md backdrop-blur-lg`}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src={cert.logo}
                  alt={cert.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3 className="text-base font-semibold leading-snug">
                {cert.name}
              </h3>
            </div>

            {cert.link ? (
              <p className="text-sm underline mt-2 text-[#ffffff]">
                View Certificate
              </p>
            ) : (
              <p className="text-xs italic text-gray-400 mt-2">
                No certificate link provided
              </p>
            )}
          </motion.div>
        ))}
      </div>

      <p className="text-white text-sm text-center mt-16 max-w-xl mx-auto">
        See more certifications on my{" "}
        <a
          href="https://www.linkedin.com/in/w-h-kasun-udara/details/certifications/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-gold hover:text-white"
        >
          LinkedIn
        </a>{" "}
        or{" "}
        <a
          href="https://github.com/KasunUdaraWaththeHewa/My-Certificates-in-IT"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-gold hover:text-white"
        >
          GitHub
        </a>{" "}
        profiles.
      </p>
    </div>
  );
}