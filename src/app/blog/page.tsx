"use client";
import Particles from "@/components/particles/ParticleDesign";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const socials = [
  {
    name: "medium",
    logo: "bxl-medium-square",
    link: "https://www.linkedin.com/in/w-h-kasun-udara/",
  },
  {
    blogger: "blogger",
    logo: "bxl-blogger",
    link: "https://www.linkedin.com/in/w-h-kasun-udara/",
  },
  {
    dev: "dev",
    logo: "bxl-dev-to",
    link: "https://www.linkedin.com/in/w-h-kasun-udara/",
  },
];
const blogs = [
  {
    title: "CTF Writeup 01",
    subtitle: "Writeup for CTF challenge",
    link: "https://example.com/ctf-writeup-01",
  },
  // {
  //   title: "Debugging React",
  //   subtitle: "Debugging React Applications",
  //   link: "https://example.com/debugging-react",
  // },
  // {
  //   title: "Spring Boot Microservices",
  //   subtitle: "Spring Boot Microservices with Docker",
  //   link: "https://example.com/spring-boot-microservices",
  // },
  // {
  //   title: "FastAPI for Machine Learning",
  //   subtitle: "FastAPI for Machine Learning APIs",
  //   link: "https://example.com/fastapi-for-ml",
  // },
  // {
  //   title: "Node Express vs Spring Boot",
  //   subtitle: "Node Express vs Spring Boot for REST APIs",
  //   link: "https://example.com/node-express-vs-spring-boot",
  // },
  // {
  //   title: "React Native vs Flutter",
  //   subtitle: "React Native vs Flutter for Mobile Apps",
  //   link: "https://example.com/react-native-vs-flutter",
  // },
];

const tileVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function Page() {
  return (
    <>
      <div className="w-full min-h-screen h-auto bg-gradient-to-br from-black to-darkMaroon text-gold flex flex-col items-center py-4">
        <Particles />
        <motion.main
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full h-auto flex flex-col justify-center items-center"
        >
          <div
            className="w-full flex flex-row justify-end items-center cursor-pointer mr-10"
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
        </motion.main>
        <motion.main
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full h-auto flex flex-col justify-center items-center"
        >
          <div className="mt-4 w-full flex flex-col justify-center items-center sm:items-center md:items-left sm:justify-center">
            <h1 className="sm:text-1xl md:text-2xl text-gold w-full flex flex-col justify-center items-center">
              <b>
                <Typewriter
                  words={["Blogs and Publications"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </b>
            </h1>
            <p className="text-white text-sm w-3/4 sm:w-3/4 md:w-3/4 text-center md:text-center mt-4">
              I have written several blogs and publications on various topics
              including Cyber Security, Web Development, Mobile Development, and
              Machine Learning. Here are some of my blogs and publications. You
              can find more on my Medium, Blogger, and Dev.to profiles.
            </p>
          </div>
        </motion.main>
        <div
          className="w-3/4 flex flex-wrap justify-center items-center mt-4"
          style={{ zIndex: 21 }}
        >
          {blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-2">
                <motion.div
                  key={index}
                  variants={tileVariants}
                  initial="hidden"
                  animate="visible"
                  className="w-full"
                >
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-[150px] text-black w-full block rounded-lg flex flex-col items-center justify-center hover:cursor-pointer  bg-white hover:shadow-xl transition transform hover:scale-105 transition duration-500 ease-in-out hover:bg-lightMaroon hover:text-white p-2"
                  >
                    <h1 className="text-1xl mt-2 text-center">
                      <b className="text-center">{blog.title}</b>
                    </h1>
                    <p className="text-xs text-center">{blog.subtitle}</p>
                  </a>
                </motion.div>
              </div>
            ))
          ) : (
            <div className="w-full flex flex-col items-center justify-center">
              <h1 className="text-white text-2xl">No Blogs Found</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
