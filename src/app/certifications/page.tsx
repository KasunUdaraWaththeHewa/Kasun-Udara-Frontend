import Image from "next/image";
import Particles from "@/components/particles/ParticleDesign";
import sample from "../../../public/assests/certificates/sample.png";

const certifications = [
  {
    name: "AWS Certified Solutions Architect - Associate",
    logo: sample,
    link: "https://www.youracclaim.com/badges/7f0c7b4d-8e3f-4b1a-9e6d-4b3c6b7b0c8a",
  },
  {
    name: "Google IT Support Professional Certificate",
    logo: sample,
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/8X6Z9TJ7XU2J",
  },
  {
    name: "IBM Data Science Professional Certificate",
    logo: sample,
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/3ZQZ9Z8Y7QZ6",
  },
  {
    name: "Cisco Networking Essentials",
    logo: sample,
    link: "https://www.youracclaim.com/badges/4f8f3c3f-6c7c-4c2b-9a3a-0e2b8e8b9f6d",
  },
  {
    name: "CompTIA IT Fundamentals",
    logo: sample,
    link: "https://www.youracclaim.com/badges/0e8b3b0d-4e5b-4b1e-8b2f-4e6c0d5b0e8b",
  },
  {
    name: "Microsoft Azure Fundamentals",
    logo: sample,
    link: "https://www.youracclaim.com/badges/1d3c0b4d-8e3f-4b1a-9e6d-4b3c6b7b0c8a",
  },
  {
    name: "Red Hat Certified System Administrator",
    logo: sample,
    link: "https://www.redhat.com/rhtapps/verify/?certId=210-284-913",
  },
  {
    name: "VMware Data Center Virtualization Fundamentals",
    logo: sample,
    link: "https://www.youracclaim.com/badges/1d3c0b4d-8e3f-4b1a-9e6d-4b3c6b7b0c8a",
  },
  {
    name: "Dell EMC Information Storage and Management",
    logo: sample,
    link: "https://www.youracclaim.com/badges/1d3c0b4d-8e3f-4b1a-9e6d-4b3c6b7b0c8a",
  },
  {
    name: "Juniper Networks Certified Associate",
    logo: sample,
    link: "https://www.youracclaim.com/badges/1d3c0b4d-8e3f-4b1a-9e6d-4b3c6b7b0c8a",
  },
  {
    name: "Oracle Database SQL Certified Associate",
    logo: sample,
    link: "https://www.youracclaim.com/badges/1d3c0b4d-8e3f-4b1a-9e6d-4b3c6b7b0c8a",
  },
  {
    name: "SAP Certified Application Associate",
    logo: sample,
    link: "https://www.youracclaim.com/badges/1d3c0b4d-8e3f-4b1a-9e6d-4b3c6b7b0c8a",
  },
  {
    name: "Salesforce Certified Administrator",
    logo: sample,
    link: "https://www.youracclaim.com/badges/1d3c0b4d-8e3f-4b1a-9e6d-4b3c6b7b0c8a",
  },
  {
    name: "CISSP - Certified Information Systems Security Professional",
    logo: sample,
    link: "https://www.youracclaim.com/badges/1d3c0b4d-8e3f-4b1a-9e6d-4b3c6b7b0c8a",
  },
  {
    name: "CEH - Certified Ethical Hacker",
    logo: sample,
    link: "https://www.youracclaim.com/badges/1d3c0b4d-8e3f-4b1a-9e6d-4b3c6b7b0c8a",
  },
  {
    name: "CISM - Certified Information Security Manager",
    logo: sample,
    link: "https://www.youracclaim.com/badges/1d3c0b4d-8e3f-4b1a-9e6d-4b3c6b7b0c8a",
  },
  {
    name: "CRISC - Certified in Risk and Information Systems Control",
    logo: sample,
    link: "https://www.youracclaim.com/badges/1d3c0b4d-8e3f-4b1a-9e6d-4b3c6b7b0c8a",
  },
  {
    name: "PMP - Project Management Professional",
    logo: sample,
    link: "https://www.youracclaim.com/badges/1d3c0b4d-8e3f-4b1a-9e6d-4b3c6b7b0c8a",
  },
];

export default function Page() {
  return (
    <>
      <div className="w-full h-screen bg-gradient-to-br from-black to-darkMaroon text-gold flex flex-col items-center py-4">
        <Particles />
        <div className="mt-12 w-full">
          <h1 className="text-2xl text-white w-full text-left">
            <b>Licenses and Certifications</b>
          </h1>
          <p className="text-white text-sm w-full text-left mt-4">
            I have completed several courses and certifications to
            enhance my skills and knowledge. I am always eager to learn new
            technologies and tools to improve my work. Here are some of the
            certifications I have completed so far.
          </p>
        </div>
        <div className="w-full flex flex-wrap justify-center items-center mt-4">
          <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((certification) => (
              <a
                key={certification.name}
                href={certification.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 rounded-lg transition transform hover:scale-110 transition duration-500 ease-in-out bg-black p-2"
              >
                <Image
                  src={certification.logo}
                  alt={certification.name}
                  width={25}
                  height={25}
                  className="rounded-lg"
                />
                <span className="text-white hover:text-gold text-sm">
                  {certification.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
