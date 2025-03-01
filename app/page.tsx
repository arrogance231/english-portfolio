import Image from "next/image";
import { SidebarDemo } from "@/components/NavBar";

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
          <div className="flex flex-col items-start justify-center p-8 md:p-16 lg:p-32 xl:p-64 ml-4 md:ml-10 lg:ml-20">
            <div className="text-[24px] md:text-[32px] font-semibold font-poppins leading-none text-[#FFFFFF] mt-4">
              SPECIALIZED ENGLISH PROGRAM
            </div>
            <div className="text-[48px] md:text-[72px] lg:text-[105px] font-bold font-poppins text-white leading-none w-full md:w-[80vw] mt-4">
              DIGITAL READING
            </div>
            <div className="text-[48px] md:text-[72px] lg:text-[105px] font-bold font-poppins text-[#6EBEFF] leading-none mt-4">
              PORTFOLIO
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
