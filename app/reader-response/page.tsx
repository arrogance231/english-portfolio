import Image from "next/image";
import { SidebarDemo } from "@/components/NavBar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative h-[100vh] w-screen flex overflow-hidden">
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
          <div className="animate-appearFromCenter flex flex-col md:flex-row items-center justify-center text-left p-8 md:p-36 w-full h-full">
            <Link
              href="/reader-response/RR1"
              className="h-[30vh] md:h-[50vh] w-[80vw] md:w-[40vw] rounded-xl m-4 flex items-center justify-center animate-gradient bg-gradient-to-t from-[#133B5C]/50 to-[#FFA6AF]/50"
            >
              <h1 className="text-white font-poppins text-2xl md:text-6xl text-center">
                First Reader Response
              </h1>
            </Link>
            <Link
              href="/reader-response/RR2"
              className=" h-[30vh] md:h-[50vh] w-[80vw] md:w-[40vw] rounded-xl m-4 flex items-center justify-center animate-gradient bg-gradient-to-t from-[#133B5C]/50 to-[#FFA6AF]/50"
            >
              <h1 className="text-white font-poppins text-2xl md:text-6xl text-center">
                Second Reader Response
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
