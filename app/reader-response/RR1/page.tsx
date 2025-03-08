import Image from "next/image";
import { SidebarDemo } from "@/components/NavBar";

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
          <div className="animate-appearFromCenter text-white xl:mx-32 xl:my-8 md:mx-32 mt-10 my-4 p-8 pb-16 rounded-xl md:p-8 w-screen overflow-y-auto animate-gradient bg-gradient-to-t from-[#133B5C]/50 to-[#FFA6AF]/50">
            <div className="grid relative w-full">
              <Image
                src="/RR1/S2P1.svg"
                alt="p1"
                width={0}
                height={0}
                className="w-full h-auto"
              ></Image>
              <Image
                src="/RR1/S2P2.svg"
                alt="p1"
                width={0}
                height={0}
                className="w-full h-full top-0"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
