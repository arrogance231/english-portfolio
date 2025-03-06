import Image from "next/image";
import { SidebarDemo } from "@/components/NavBar";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const line1 = [
  {
    text: "Specialized English Program I",
    className:
      "text-[24px] sm:text-[24px] md:text-[28px] xl:text-[40px] font-semibold font-poppins leading-none text-white",
    duration: 0,
  },
];

const line2_1Mobile = [
  {
    text: "Digital",
    className:
      "text-[64px] md:text-[52px] font-bold font-poppins leading-none text-white w-full",
    duration: 0.5,
  },
];

const line2_2Mobile = [
  {
    text: "Reading",
    className:
      "text-[64px] md:text-[52px] font-bold font-poppins leading-none text-white w-full",
    duration: 0.5,
  },
];

const line2Desktop = [
  {
    text: "Digital Reading",
    className:
      "md:text-[52px] lg:text-[108px] font-bold font-poppins leading-none text-white w-full md:w-[80vw]",
    duration: 0.5,
  },
];

const line3 = [
  {
    text: "PORTFOLIO",
    className:
      "text-[64px] sm:text-[40px] md:text-[52px] lg:text-[108px] font-bold font-poppins leading-none text-[#6EBEFF]",
    duration: 0.5,
  },
];

export default function Home() {
  return (
    <div className="relative h-screen flex flex-col overflow-hidden">
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
          <div className="flex flex-col items-start justify-center p-4 pb-44 mt-20 md:mt-0 md:p-16 lg:p-32 xl:p-64 ml-2 md:ml-10 lg:ml-2 h-full">
            <TypewriterEffectSmooth
              words={line1}
              className={`${line1[0].className} xl:-mb-1`}
              delay={line1[0].duration}
            />
            <div className="block md:hidden">
              <TypewriterEffectSmooth
                words={line2_1Mobile}
                className={`${line2_1Mobile[0].className} -mb-3`}
                delay={line2_1Mobile[0].duration}
              />
              <TypewriterEffectSmooth
                words={line2_2Mobile}
                className={`${line2_2Mobile[0].className} -mb-3`}
                delay={line2_2Mobile[0].duration}
              />
            </div>
            <div className="hidden md:block">
              <TypewriterEffectSmooth
                words={line2Desktop}
                className={`${line2Desktop[0].className} xl:-mb-3`}
                delay={line2Desktop[0].duration}
              />
            </div>
            <TypewriterEffectSmooth
              words={line3}
              className={`${line3[0].className} xl:-mb-3`}
              delay={line3[0].duration}
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex flex-col md:flex-row justify-evenly items-center p-4 space-y-4 md:space-y-0 md:space-x-4">
        <div className="bg-[#133B5C]/45 text-white text-center font-poppins p-2 sm:p-4 rounded-3xl shadow-md w-3/4 sm:w-1/4 border-[1.5px] border-white">
          Arjhine A. Ty
        </div>
        <div className="bg-[#133B5C]/45 text-white text-center font-poppins p-2 sm:p-4 rounded-3xl shadow-md w-3/4 sm:w-1/4 border-[1.5px] border-white">
          LinkedIn/Arro
        </div>
        <div className="bg-[#133B5C]/45 text-white text-center font-poppins p-2 sm:p-4 rounded-3xl shadow-md w-3/4 sm:w-1/4 border-[1.5px] border-white">
          Portfolio
        </div>
      </div>
    </div>
  );
}
