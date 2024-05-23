"use client";
import Particles from "@/components/particles/ParticleDesign";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Services = [
  {
    title: "Frontend Development",
    description:
      "I am confident on my frontend development skills. I have worked on several frontend development tasks, specially as the Web Master at ACM UCSC Student Chapeter.",
  },
  {
    title: "Backend Development",
    description:
      "I am confident on my backend development skills. I have worked on several backend development tasks, specially as the Web Master at ACM UCSC Student Chapeter.",
  },
  {
    title: "Full Stack Development",
    description:
      "I am confident on my full stack development skills. I have worked on several full stack development tasks, specially as the Web Master at ACM UCSC Student Chapeter.",
  },
  {
    title: "Mobile App Development",
    description:
      "I am confident on my mobile app development skills. I have worked on cross platform mobile app dev tasks at University of Colombo School of Computing.",
  },
  {
    title: "Machine Learning",
    description:
      "I am confident on my machine learning skills. I have worked on several machine learning tasks, specially at the my research projects at IgniteX",
  },
  {
    title: "UI/UX Design",
    description:
      "I am confident on my UI/UX design skills. I have worked on several UI/UX design tasks, specially as the Web Master at ACM UCSC Student Chapeter.",
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
              <b><Typewriter
                  words={["Services I offer"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                /></b>
            </h1>
            <p className="text-white text-sm w-3/4 md:w-3/4 text-center md:text-center mt-4">
              I offer several services including web development services, have
              worked on several projects and have contributed to several open
              source projects. Here are some of the services I offer.
            </p>
          </div>
        </motion.main>
        <div className="grid grid-row-1 md:grid-cols-3 gap-4 mt-4 p-4 mx-6 sm:mx-6 md:mx-10">
          {Services.map((service, index) => (
            <motion.div
              key={index}
              variants={tileVariants}
              initial="hidden"
              animate="visible"
              className="w-full"
            >
              <div
                key={index}
                className="text-black cursor-pointer p-4 rounded-lg bg-white p-2 transition transform hover:scale-105 transition duration-500 ease-in-out hover:bg-lightMaroon hover:text-white"
              >
                <h2 className="text-sm mt-2 text-center">
                  <b>{service.title}</b>
                </h2>
                <p className="mt-2 text-sm text-center">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
