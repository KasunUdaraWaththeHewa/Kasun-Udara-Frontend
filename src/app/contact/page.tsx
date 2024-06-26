"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Particles from "@/components/particles/ParticleDesign";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

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
    name: "Google Mail",
    logo: "bxl-gmail",
    link: "mailto:kasunu2001@gmail.com",
  },
];

const tileVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function Page() {
  const form = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const handleTextClick = (text: any) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setMessage("Email address copied to clipboard!");
        setIsError(false);
        console.log("Text copied to clipboard!");
      })
      .catch((err) => {
        setMessage("Failed to copy email address. Please try again later.");
        setIsError(true);
        console.error("Could not copy text: ", err);
      });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !userMessage) {
      setMessage("All fields are required.");
      setIsError(true);
      return;
    }

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("Message Sent");
            setMessage(
              "Your message has been sent successfully! Kasun Udara will contact you soon."
            );
            setIsError(false);
            form.current?.reset();
            setName("");
            setEmail("");
            setUserMessage("");
          },
          (error) => {
            console.log(error.text);
            setMessage("Failed to send your message. Please try again later.");
            setIsError(true);
          }
        );
    }
  };

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
            <h1 className="md:text-2xl text-gold w-full text-center">
              <b>
                <Typewriter
                  words={[
                    "Contact Me",
                    "Get in touch with me",
                    "Let's Talk!",
                    "Send me a message!",
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
            <p
              className="text-white text-sm w-3/4 md:w-3/4 text-center md:text-center mt-4"
              style={{ zIndex: 21 }}
            >
              Feel free to contact me for any inquiries or collaborations. I am
              always open to new opportunities and projects. You can reach me
              through the following social media platforms or send me an email
              directly.I will get back to you as soon as possible. My Email
              address is{" "}
              <span
                className="text-gold cursor-pointer"
                onClick={() => handleTextClick("kasunu2001@gmail.com")}
                title="Click to copy email address"
              >
                kasunu2001@gmail.com
              </span>{" "}
              Thank you!
            </p>
          </div>
        </motion.main>
        <motion.div
          variants={tileVariants}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <div className="w-full flex flex-wrap justify-center items-center mt-4">
            <div className="w-1/2 flex flex-col md:flex-row items-center justify-center items-center">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-center items-center space-x-2 rounded-lg p-2 transition transform hover:scale-110 transition duration-500 ease-in-out"
                >
                  <div className="flex flex-row justify-center items-center w-[100px]">
                    <i className={`bx ${social.logo} text-1xl text-white`}></i>
                    <span className="text-white text-sm">
                      &nbsp;{social.name}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={tileVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col justify-center items-center"
        >
          <div className="w-1/2 flex flex-col justify-center items-center mt-4">
            <form ref={form} onSubmit={sendEmail} className="w-full">
              <div className="w-full flex flex-col items-center justify-center">
                <label className="text-white text-1xl w-full text-left">
                  Your Name{" "}
                </label>
                <input
                  type="text"
                  name="user_name"
                  className="w-full h-[50px] p-2 rounded-lg mt-2 text-black"
                  style={{ zIndex: 21 }}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="w-full flex flex-col items-center justify-center mt-4">
                <label className="text-white text-1xl w-full text-left">
                  Your Email{" "}
                </label>
                <input
                  type="email"
                  name="user_email"
                  className="w-full h-[50px] p-2 rounded-lg mt-2 text-black"
                  style={{ zIndex: 21 }}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="w-full flex flex-col items-center justify-center mt-4">
                <label className="text-white text-1xl w-full text-left">
                  Your Message{" "}
                </label>
                <textarea
                  className="w-full h-[200px] p-2 rounded-lg mt-2 text-black"
                  name="user_message"
                  style={{ zIndex: 21 }}
                  onChange={(e) => setUserMessage(e.target.value)}
                />
              </div>
              <div className="w-1/2 md:w-1/6 flex flex-col items-center justify-center mt-4 mb-4">
                <button
                  type="submit"
                  value="Send"
                  className="w-full h-[35px] bg-gold hover:bg-lightMaroon hover:text-white transition transform hover:scale-110 transition duration-500 ease-in-out text-black rounded-lg cursor-pointer"
                  style={{ zIndex: 21 }}
                >
                  <b>Send</b>
                </button>
              </div>
            </form>
            {message && (
              <p
                className={`mt-4 text-sm ${
                  isError ? "text-red-500" : "text-green-500"
                }`}
              >
                {message}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
}
