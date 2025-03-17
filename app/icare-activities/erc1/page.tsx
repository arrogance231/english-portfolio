import Image from "next/image";
import { SidebarDemo } from "@/components/NavBar";

export default function Home() {
  return (
    <div className="relative h-screen w-screen flex flex-col overflow-hidden">
      <div className="relative h-full w-full">
        {/* Background Image */}
        <Image
          src="/bg.svg"
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          className="h-full w-full"
          priority
        />

        {/* Content Wrapper */}
        <div className="absolute inset-0 flex flex-col md:flex-row">
          {/* Sidebar */}
          <SidebarDemo />

          {/* Main Content */}
          <div className="animate-appearFromCenter flex flex-col items-center justify-center text-center p-6 md:p-16 w-full h-full mt-5">
            <div className="rounded-xl m-4 flex flex-col items-center justify-center bg-gradient-to-br from-[#133B5C]/50 to-[#FFA6AF]/50 p-6 w-full max-w-2xl xl:max-w-5xl">
              {/* Title */}
              <h1 className="text-white font-poppins text-lg md:text-6xl text-center mb-4">
                ERC iCare Activity Worksheet
              </h1>

              {/* Image Container */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <Image
                  src="/ERC/ERC1.png"
                  alt="ERC1"
                  width={400}
                  height={400}
                  className="max-w-[80%] md:max-w-[400px] object-contain"
                  priority
                />
                <Image
                  src="/ERC/ERC2.png"
                  alt="ERC2"
                  width={400}
                  height={400}
                  className="max-w-[80%] md:max-w-[400px] object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
