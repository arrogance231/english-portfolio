import Image from "next/image";
import { SidebarDemo } from "@/components/NavBar";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Link from "next/link";
const line1 = [
  {
    text: "Specialized English Program I",
    className:
      "text-[16px] sm:text-[24px] md:text-[28px] xl:text-[40px] font-semibold font-poppins text-white",
    duration: 0,
  },
];

const line2_1Mobile = [
  {
    text: "DIGITAL",
    className: "text-[50px] md:text-[100px] font-bold font-poppins text-white",
    duration: 0.5,
  },
];

const line2_2Mobile = [
  {
    text: "READING",
    className: "text-[50px] md:text-[100px] font-bold font-poppins text-white",
    duration: 0.5,
  },
];

const line2Desktop = [
  {
    text: "DIGITAL READING",
    className:
      "md:text-[90px] lg:text-[100px] font-bold font-poppins text-white ",
    duration: 0.5,
  },
];

const line3 = [
  {
    text: "PORTFOLIO",
    className:
      "text-[50px] sm:text-[40px] md:text-[120px] lg:text-[150px] font-bold font-poppins  text-[#6EBEFF]",
    duration: 0.5,
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden h-[100vh]">
      <Image
        src="/bg.svg"
        alt="bg"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="relative flex-1 flex flex-col md:flex-row w-screen overflow-hidden">
        <SidebarDemo />
        <div className="z-0 flex flex-col xl:items-start ml-8 xl:ml-[150px] xl:text-left md:text-left text-left justify-center p-4 pb-44 mt-20 md:mt-0 md:p-16 lg:p-32 h-screen w-screen overflow-hidden">
          <TypewriterEffectSmooth
            words={line1}
            className={`${line1[0].className} xl:-mb-12 -mb-4 md:-mb-10`}
            delay={line1[0].duration}
          />
          <div className="block xl:hidden">
            <TypewriterEffectSmooth
              words={line2_1Mobile}
              className={`${line2_1Mobile[0].className} -mb-8 md:-mb-[75px]`}
              delay={line2_1Mobile[0].duration}
            />
            <TypewriterEffectSmooth
              words={line2_2Mobile}
              className={`${line2_2Mobile[0].className} -mb-8 md:-mb-[80px]`}
              delay={line2_2Mobile[0].duration}
            />
          </div>
          <div className="hidden xl:block">
            <TypewriterEffectSmooth
              words={line2Desktop}
              className={`${line2Desktop[0].className} xl:-mb-[95px] md:-mb-[74px]`}
              delay={line2Desktop[0].duration}
            />
          </div>
          <TypewriterEffectSmooth
            words={line3}
            className={`${line3[0].className} xl:-mb-16`}
            delay={line3[0].duration}
          />
          <div className="xl:px-64 absolute bottom-0 right-0 z-50 flex flex-col md:flex-row md:px-20 justify-evenly items-center xl:py-16 space-y-4 mb-10 md:space-y-0 md:space-x-4 w-full xl:mr-6">
            <Link
              href="https://github.com/arrogance231"
              className="bg-[#133B5C]/45 text-white text-center font-poppins p-2 sm:p-4 rounded-2xl shadow-md w-3/4 sm:w-1/4 border-[1.5px] border-white"
            >
              Arjhine A. Ty
            </Link>
            <Link
              href="https://www.linkedin.com/in/arrochi/"
              className="bg-[#133B5C]/45 text-white text-center font-poppins p-2 sm:p-4 rounded-2xl shadow-md w-3/4 sm:w-1/4 border-[1.5px] border-white"
            >
              LinkedIn
            </Link>

            <Link
              href="https://github.com/arrogance231/portfolio"
              className="bg-[#133B5C]/45 text-white text-center font-poppins p-2 sm:p-4 rounded-2xl shadow-md w-3/4 sm:w-1/4 border-[1.5px] border-white"
            >
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
