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
          <p className="text-white text-xs w-full text-left mt-4">
            I have worked on several projects and have contributed to several open source projects. Here are some of the projects I have worked on and contributed to. I have worked on several projects including web development projects, mobile app development projects, and machine learning projects. I have also contributed to several open source projects and have made several contributions to several open source projects. I have also worked on several freelance projects and have made several contributions to several freelance projects.
          </p>
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
              <div className="text-white p-4 rounded-lg bg-white cursor-pointer">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={200}
                  height={200}
                />
                <h2 className="text-sm mt-2 text-black"><b>{project.title}</b></h2>
                <p className="mt-2 text-xs text-black">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
