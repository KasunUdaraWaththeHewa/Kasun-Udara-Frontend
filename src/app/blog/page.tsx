import Image from "next/image";
import Particles from "@/components/particles/ParticleDesign";
import blogImage from "../../../public/assests/blogs/blogImage.webp";

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
    image: blogImage,
    link: "https://example.com/ctf-writeup-01",
  },
  {
    title: "Debugging React",
    subtitle: "Debugging React Applications",
    image: blogImage,
    link: "https://example.com/debugging-react",
  },
  {
    title: "Spring Boot Microservices",
    subtitle: "Spring Boot Microservices with Docker",
    image: blogImage,
    link: "https://example.com/spring-boot-microservices",
  },
  {
    title: "FastAPI for Machine Learning",
    subtitle: "FastAPI for Machine Learning APIs",
    image: blogImage,
    link: "https://example.com/fastapi-for-ml",
  },
  {
    title: "Node Express vs Spring Boot",
    subtitle: "Node Express vs Spring Boot for REST APIs",
    image: blogImage,
    link: "https://example.com/node-express-vs-spring-boot",
  },
  {
    title: "React Native vs Flutter",
    subtitle: "React Native vs Flutter for Mobile Apps",
    image: blogImage,
    link: "https://example.com/react-native-vs-flutter",
  },
];

export default function Page() {
  return (
    <>
      <div className="w-full min-h-screen h-auto bg-gradient-to-br from-black to-darkMaroon text-gold flex flex-col items-center py-4">
        <Particles />
        <div
          className="w-3/4 flex flex-row justify-end items-center cursor-pointer"
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
        <div className="mt-4 w-full">
          <h1 className="text-2xl text-white w-full text-left">
            <b>Published Blogs</b>
          </h1>
        </div>
        <div
          className="w-full flex flex-wrap justify-center items-center mt-4"
          style={{ zIndex: 21 }}
        >
          {blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-2">
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-[270px] w-full block rounded-lg flex flex-col items-center justify-center hover:cursor-pointer  bg-darkMaroon"
                >
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={300}
                    height={300}
                    className="rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 transition duration-500 ease-in-out"
                  />
                  <h1 className="text-gold text-1xl mt-2">{blog.title}</h1>
                  <p className="text-white text-xs">{blog.subtitle}</p>
                </a>
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
