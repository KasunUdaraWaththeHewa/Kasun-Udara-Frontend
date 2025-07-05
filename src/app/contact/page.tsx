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

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [feedback, setFeedback] = useState<{
    msg: string;
    isError: boolean;
  } | null>(null);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setFeedback({ msg: "All fields are required.", isError: true });
      return;
    }

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );
      setFeedback({ msg: "Message sent successfully!", isError: false });
      setFormData({ name: "", email: "", message: "" });
      form.current?.reset();
    } catch (err) {
      setFeedback({ msg: "Failed to send. Try again later.", isError: true });
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-black to-darkPink text-pink py-20 px-6 min-h-screen">
      <Particles />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-pink">
          <Typewriter
            words={["Contact Me", "Let`s Connect", "Send a Message"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={30}
            delaySpeed={1000}
          />
        </h1>
        <p className="text-white mt-4 max-w-xl mx-auto">
          I’m always open to discussing new opportunities. Feel free to reach
          out through the form or social platforms.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <form
          ref={form}
          onSubmit={handleSend}
          className="bg-white/10 p-6 rounded-xl space-y-4"
        >
          <input
            name="user_name"
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-white text-black"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            name="user_email"
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-white text-black"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <textarea
            name="user_message"
            placeholder="Your Message"
            className="w-full p-3 rounded bg-white text-black h-40"
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          <button
            type="submit"
            className="w-full py-2 rounded bg-pink text-black hover:bg-lightPink transition"
          >
            Send Message
          </button>
          {feedback && (
            <p
              className={`text-sm ${
                feedback.isError ? "text-red-500" : "text-green-500"
              }`}
            >
              {feedback.msg}
            </p>
          )}
        </form>

        <div className="w-full max-w-md mx-auto space-y-6 text-white">
          <h3 className="text-2xl font-bold text-center">Connect With Me</h3>

          <ul className="space-y-3">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-pink/10 hover:text-pink transition duration-300 flex flex-row justify-center items-center"
                >
                  <i className={`bx ${social.logo} text-2xl`}></i>
                  <span className="text-base">{social.name}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="text-center text-sm text-white">
            <p>
              Or reach out via email:{" "}
              <span
                className="text-pink underline cursor-pointer hover:text-pink/80 transition"
                onClick={() =>
                  navigator.clipboard.writeText("kasunu2001@gmail.com")
                }
                title="Click to copy email"
              >
                kasunu2001@gmail.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
