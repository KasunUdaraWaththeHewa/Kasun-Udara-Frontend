import Particles from "@/components/particles/ParticleDesign";

const Services = [
  {
    title: "Frontend Development",
    description:
      "I am confident on my frontend development skills. I have worked on several frontend development tasks, specially as the Web Master at ACM UCSC Student Chapeter.",
  },
  {
    title: "Backend Development",
    description:
      "I am confident on my backend development skills. I have worked on several backend development tasks, specially as the Web Master at ACM UCSC Student Chapeter.",
  },
  {
    title: "Full Stack Development",
    description:
      "I am confident on my full stack development skills. I have worked on several full stack development tasks, specially as the Web Master at ACM UCSC Student Chapeter.",
  },
  {
    title: "Mobile App Development",
    description:
      "I am confident on my mobile app development skills. I have worked on cross platform mobile app development tasks, specially at the Mobile App Development Course at University of Colombo School of Computing.",
  },
  {
    title: "Machine Learning",
    description:
      "I am confident on my machine learning skills. I have worked on several machine learning tasks, specially at the my research projects at IgniteX",
  },
  {
    title: "UI/UX Design",
    description:
      "I am confident on my UI/UX design skills. I have worked on several UI/UX design tasks, specially as the Web Master at ACM UCSC Student Chapeter.",
  },
];

export default function Page() {
  return (
    <>
      <div className="w-full h-screen bg-gradient-to-br from-black to-darkMaroon text-gold flex flex-col items-center py-4">
        <Particles />
        <div className="mt-12 w-full">
          <h1 className="text-2xl text-white w-full text-left">
            <b>Services I offer</b>
          </h1>
          <p className="text-white text-xs w-full text-left mt-4">
            I offer several services including web development services, mobile
            app development services, machine learning services, and freelance
            services. I have worked on several projects and have contributed to
            several open source projects. Here are some of the services I offer.
            I have worked on several projects including web development
            projects, mobile app development projects, and machine learning
            projects. I have also contributed to several open source projects
            and have made several contributions to several open source projects.
            I have also worked on several freelance projects and have made
            several contributions to several freelance projects.
          </p>
        </div>
        <div className="grid grid-row-1 md:grid-cols-3 gap-4 mt-4 p-4 mx-20">
          {Services.map((service, index) => (
            <div
              key={index}
              className="text-black cursor-pointer p-4 rounded-lg bg-white p-2 transition transform hover:scale-105 transition duration-500 ease-in-out hover:bg-lightMaroon hover:text-white"
            >
              <h2 className="text-sm mt-2">
                <b>{service.title}</b>
              </h2>
              <p className="mt-2 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
