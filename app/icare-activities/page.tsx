import Image from "next/image";
import { SidebarDemo } from "@/components/NavBar";
import Link from "next/link";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
export default function Home() {
  return (
    <div className="relative h-screen w-screen flex overflow-hidden">
      <div className="relative h-full w-full">
        <Image
          src="/bg.svg"
          alt="bg"
          layout="fill"
          objectFit="cover"
          className="h-full w-full"
        />
        <div className="absolute inset-0 flex flex-col md:flex-row">
          <SidebarDemo />
          <div className="flex flex-col md:flex-row items-center justify-center text-left p-8 md:p-36 w-full h-full">
            <Link
              href="#"
              className="motion-duration-2000 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md h-[30vh] md:h-[50vh] w-[80vw] md:w-[40vw] rounded-xl m-4 flex items-center justify-center animate-gradient bg-gradient-to-br from-[#133B5C]/50 to-[#FFA6AF]/50"
            >
              <h1 className="text-white font-poppins text-2xl md:text-6xl text-center">
                First iCare Activity
              </h1>
            </Link>
            <Link
              href="#"
              className="motion-duration-2000 motion-opacity-in-0 motion-translate-y-in-[-100%] motion-blur-in-md h-[30vh] md:h-[50vh] w-[80vw] md:w-[40vw] rounded-xl m-4 flex items-center justify-center animate-gradient bg-gradient-to-tl from-[#133B5C]/50 to-[#FFA6AF]/50"
            >
              <h1 className="text-white font-poppins text-2xl md:text-6xl text-center">
                Second iCare Activity
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
