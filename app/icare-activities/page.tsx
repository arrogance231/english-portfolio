import Image from "next/image";
import { SidebarDemo } from "@/components/NavBar";
import Link from "next/link";
export default function page() {
  return (
    <div className="relative h-screen w-screen flex overflow-hidden">
      <div className="">
        <Image
          src="/bg.svg"
          alt="bg"
          layout="fill"
          objectFit="cover"
          className="h-full w-full"
        />
        <div className="absolute inset-0 flex">
          <SidebarDemo className="h-full" />
          <div className="flex items-center justify-center text-left p-36 w-full h-full">
            <Link
              href="#"
              className="h-[50vh] w-[50vw] rounded-xl m-4 flex items-center justify-center animate-gradient bg-gradient-to-bl from-[#133B5C]/50 to-[#FFA6AF]/50"
            >
              <h1 className="text-white font-poppins text-6xl text-center">
                First iCare Activity
              </h1>
            </Link>
            <Link
              href="#"
              className="h-[50vh] w-[50vw] rounded-xl m-4 flex items-center justify-center animate-gradient bg-gradient-to-tr from-[#133B5C]/50 to-[#FFA6AF]/50"
            >
              <h1 className="text-white font-poppins text-6xl text-center">
                Second iCare Activity
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
