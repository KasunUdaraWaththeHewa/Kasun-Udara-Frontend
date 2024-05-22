import Image from "next/image";
import Particles from "@/components/particles/ParticleDesign";
import projectOne from "../../../public/assests/projects/project1.png";
import Link from "next/link";

const projects = [
  {
    title: "Project 01",
    description: "Description of Project 01",
    image: projectOne,
    link: "https://example.com/project-01",
  },
  {
    title: "Project 02",
    description: "Description of Project 02",
    image: projectOne,
    link: "https://example.com/project-02",
  },
  {
    title: "Project 03",
    description: "Description of Project 03",
    image: projectOne,
    link: "https://example.com/project-03",
  },
  {
    title: "Project 04",
    description: "Description of Project 04",
    image: projectOne,
    link: "https://example.com/project-04",
  },
  {
    title: "Project 05",
    description: "Description of Project 05",
    image: projectOne,
    link: "https://example.com/project-05",
  },
  {
    title: "Project 06",
    description: "Description of Project 06",
    image: projectOne,
    link: "https://example.com/project-06",
  },
];

export default function Page() {
  return (
    <>
      <div className="w-full h-screen bg-gradient-to-br from-black to-darkMaroon text-gold flex flex-col items-center py-4">
        <Particles />
        <div className="mt-12 w-full">
          <h1 className="text-2xl text-white w-full text-left">
            <b>Projects and Contributions</b>
          </h1>
        </div>
        <div className="grid grid-rows-1 md:grid-cols-5 gap-4 mt-4 p-4">
          {projects.map((project, index) => (
            <Link
              style={{ zIndex: 21 }}
              key={index}
              href={project.link}
              passHref
              target="_blank"
              rel="noopener noreferrer"
              className="hover:cursor-pointer hover:scale-105 transition transform transition duration-500 ease-in-out shadow-lg hover:shadow-xl rounded-lg"
            >
              <div className="text-white p-4 rounded-lg bg-black cursor-pointer">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={200}
                  height={200}
                />
                <h2 className="text-sm mt-2 text-gold">{project.title}</h2>
                <p className="mt-2 text-xs">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
