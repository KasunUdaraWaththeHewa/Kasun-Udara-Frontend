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
        </div>
        <div className="grid grid-row-1 md:grid-cols-2 gap-4 mt-4 p-4 mx-20">
          {competitions.map((competition, index) => (
            <div
              key={index}
              className="text-white p-4 rounded-lg bg-black"
            >
              <Image
                src={competition.image}
                alt={competition.title}
                width={200}
                height={200}
              />
              <h2 className="text-sm mt-2 text-gold">{competition.title}</h2>
              <p className="mt-2 text-sm">{competition.description}</p>
              <p className="mt-2 text-sm">{competition.places}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
