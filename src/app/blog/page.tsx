import Image from "next/image";
import Particles from "@/components/particles/ParticleDesign";
import blogImage from "../../../public/assests/blogs/blogImage.webp";

const blogs = [
  {
    title: "CTF Writeup 01",
    image: blogImage,
    link: "https://example.com/ctf-writeup-01",
  },
  {
    title: "Debugging React",
    image: blogImage,
    link: "https://example.com/debugging-react",
  },
  {
    title: "Spring Boot Microservices",
    image: blogImage,
    link: "https://example.com/spring-boot-microservices",
  },
  {
    title: "FastAPI for Machine Learning",
    image: blogImage,
    link: "https://example.com/fastapi-for-ml",
  },
  {
    title: "Node Express vs Spring Boot",
    image: blogImage,
    link: "https://example.com/node-express-vs-spring-boot",
  },
  {
    title: "React Native vs Flutter",
    image: blogImage,
    link: "https://example.com/react-native-vs-flutter",
  },
];

export default function Page() {
  return (
    <>
      <div className="w-full min-h-screen h-auto bg-gradient-to-br from-black to-darkMaroon text-gold flex flex-col items-center py-4">
        <Particles />
        <div className="mt-10">
          <h1 className="text-4xl text-white w-full text-center">
            <b>Blogs</b>
          </h1>
        </div>
        <div
          className="w-full flex flex-wrap justify-center items-center mt-4"
          style={{ zIndex: 21 }}
        >
          {blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-2">
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-[300px] w-full block rounded-lg flex flex-col items-center justify-center hover:cursor-pointer"
                >
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={300}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                  <h1 className="text-white text-1xl mt-2">{blog.title}</h1>
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
