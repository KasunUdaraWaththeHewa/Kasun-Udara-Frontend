import Image from "next/image";
import Particles from "@/components/particles/ParticleDesign";

export default function Page() {
  return (
    <>
    <div className="w-full h-screen bg-gradient-to-br from-black to-darkMaroon text-gold flex flex-col items-center py-4">
    <Particles />
        <div className="mt-12 w-full">
          <h1 className="text-2xl text-white w-full text-left">
            <b>Licenses and Certifications</b>
          </h1>
        </div>
    </div>
    </>
  );
}
