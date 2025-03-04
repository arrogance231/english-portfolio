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
          <div className="flex flex-col items-center text-left p-8 md:p-36 w-full h-full gap-4">
            <div className="text-[24px] md:text-[32px] font-semibold font-poppins leading-none text-[#FFFFFF]">
              My Wonderful Experience!
            </div>
            <div className="h-full w-full rounded-xl flex items-center justify-center animate-gradient bg-gradient-to-br from-[#133B5C]/50 to-[#FFA6AF]/50">
              <h1 className="text-white font-poppins text-3xl md:text-6xl text-center">
                Loreprep
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
