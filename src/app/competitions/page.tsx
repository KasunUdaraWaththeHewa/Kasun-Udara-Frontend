import Image from "next/image";
import Particles from "@/components/particles/ParticleDesign";
import googleSummerOfCode from "../../../public/assests/competitions/googleSummerOfCode.png";
import hacktoberfest from "../../../public/assests/competitions/hacktoberfest.png";
import googleCodeIn from "../../../public/assests/competitions/googleCodeIn.jpg";

const competitions = [
  {
    title: "Hacktoberfest",
    description:
      "Hacktoberfest is a month-long celebration of open source software run by DigitalOcean.",
    image: hacktoberfest,
    places: "1st Place",
  },
  {
    title: "Google Code-in",
    description:
      "Google Code-in is a contest to introduce pre-university students (ages 13-17) to open source software development.",
    image: googleCodeIn,
    places: "1st Place",
  },
  {
    title: "Google Summer of Code",
    description:
      "Google Summer of Code is a global program focused on bringing more student developers into open source software development.",
    image: googleSummerOfCode,
    places: "1st Place",
  },
];

export default function Page() {
  return (
    <>
      <div className="w-full h-screen bg-gradient-to-br from-black to-darkMaroon text-gold flex flex-col items-center py-4">
        <Particles />
        <div className="mt-12 w-full">
          <h1 className="text-2xl text-white w-full text-left">
            <b>Competitions and Victories</b>
          </h1>
          <p className="text-white text-xs w-full text-left mt-4">
            I have participated in several competitions and hackathons and have won several of them. Here are some of the competitions I have participated in and won. I have won several competitions including Hacktoberfest, Google Code-in, and Google Summer of Code. I have also participated in several hackathons
          </p>
        </div>
        <div className="grid grid-row-1 md:grid-cols-2 gap-4 mt-4 p-4 mx-20">
          {competitions.map((competition, index) => (
            <div
              key={index}
              className="text-white p-4 rounded-lg bg-white"
            >
              <Image
                src={competition.image}
                alt={competition.title}
                width={200}
                height={200}
              />
              <h2 className="text-sm mt-2 text-black"><b>{competition.title}</b></h2>
              <p className="mt-2 text-sm text-black">{competition.description}</p>
              <p className="mt-2 text-sm text-black"><b>{competition.places}</b></p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
