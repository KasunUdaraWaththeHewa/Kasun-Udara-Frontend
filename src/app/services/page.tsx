"use client";
import Particles from "@/components/particles/ParticleDesign";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

// Services Data
const Services = [
  {
    title: "Frontend Development",
    description:
      "Responsive, modern web interfaces built with React, Tailwind, and best practices.",
    iconClass: "bx bx-laptop",
  },
  {
    title: "Backend Development",
    description:
      "Scalable APIs and backend systems using Node.js, Express, and databases.",
    iconClass: "bx bx-server",
  },
  {
    title: "Full Stack Development",
    description:
      "End-to-end application development covering both frontend and backend.",
    iconClass: "bx bx-code-alt",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps built with React Native for iOS and Android.",
    iconClass: "bx bx-mobile-alt",
  },
  {
    title: "Machine Learning",
    description:
      "Intelligent systems using Python, TensorFlow, and data modeling.",
    iconClass: "bx bx-brain",
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered designs that focus on accessibility, clarity, and delight.",
    iconClass: "bx bx-paint",
  },
];

// Animation
const tileVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

// Card Component
function ServiceCard({
  iconClass,
  title,
  description,
}: {
  iconClass: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      variants={tileVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full"
    >
      <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 cursor-pointer shadow-lg flex flex-col">
        <div className="flex justify-center text-4xl mb-2">
          <i className={iconClass}></i>
        </div>
        <h2 className="text-lg font-semibold text-center text-white">{title}</h2>
        <p className="mt-2 text-sm text-center">{description}</p>
      </div>
    </motion.div>
  );
}

// Page
export default function Page() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black to-darkMaroon text-gold flex flex-col items-center py-8">
      <Particles />

      <motion.main
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="w-full flex flex-col justify-center items-center"
      >
        <div className="mt-12 w-full flex flex-col justify-center items-center px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-4 tracking-wide">
            <Typewriter
              words={["Services I offer", "What I can do for you"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1000}
            />
          </h1>
          <p className="text-white text-sm md:text-base w-full md:w-3/4 text-center mt-4">
            I specialize in a range of services across web and app development,
            machine learning, and UI/UX design. Here's a snapshot of what I can
            offer.
          </p>
        </div>
      </motion.main>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8 px-6 w-full max-w-6xl">
        {Services.map((service, index) => (
          <ServiceCard
            key={index}
            iconClass={service.iconClass}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}
