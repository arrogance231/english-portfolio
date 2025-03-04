import Image from "next/image";
import { SidebarDemo } from "@/components/NavBar";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const line1 = [
  {
    text: "Specialized English Program I",
    className:
      "text-[24px] md:text-[46px] font-semibold font-poppins leading-none text-white",
    duration: 0,
  },
];

const line2 = [
  {
    text: "DIGITAL READING",
    className:
      "text-[48px] md:text-[72px] lg:text-[125px] font-bold font-poppins leading-none text-white w-full md:w-[80vw]",
    duration: 0.5,
  },
];

const line3 = [
  {
    text: "PORTFOLIO",
    className:
      "text-[48px] md:text-[72px] lg:text-[125px] font-bold font-poppins leading-none text-[#6EBEFF]",
    duration: 0.5,
  },
];

export default function Home() {
  return (
    <div className="relative h-screen flex overflow-hidden">
      <div className="relative flex-1">
        <Image
          src="/bg.svg"
          alt="bg"
          layout="fill"
          objectFit="cover"
          className="h-full w-full"
        />
        <div className="absolute inset-0 flex flex-col md:flex-row">
          <SidebarDemo />
          <div className="flex flex-col items-start justify-center p-8 mt-52 md:p-16 lg:p-32 xl:p-64 ml-4 md:ml-10 lg:ml-2">
            <TypewriterEffectSmooth
              words={line1}
              className={`${line1[0].className} mb-[-5px]`}
              delay={line1[0].duration}
            />
            <TypewriterEffectSmooth
              words={line2}
              className={`${line2[0].className} mb-[-25px]`}
              delay={line2[0].duration}
            />
            <TypewriterEffectSmooth
              words={line3}
              className={`${line3[0].className} mb-[-10px]`}
              delay={line3[0].duration}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
