import Image from "next/image";
import Particles from "@/components/particles/ParticleDesign";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black to-darkMaroon text-gold flex flex-col items-center">
        <Particles />
        {/* <h1 className="text-8xl font-bold text-white mb-10">Kasun Udara</h1>
      <p className="text-2xl text-white">I am a Software Engineer</p> */}
        <div
          className="w-full h-full flex flex-col justift-center items-center"
          style={{ zIndex: 21 }}
        >
          <div className="w-full h-4/5 flex flex-col justify-center items-center">
            <iframe
              src="https://my.spline.design/wizardroomcopy-833ac17ba4b03bf17b85220fcc3da1a4/"
              width="100%"
              height="100%"
            ></iframe>
          </div>
          <div className="w-full h-1/6 flex flex-col justify-center items-center">
            <h1 className="text-6xl  text-left w-1/3 font-bold text-white">
              Kasun Udara
            </h1>
            <p className="text-2xl text-left w-1/3 text-gold">
              Software Engineer
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
