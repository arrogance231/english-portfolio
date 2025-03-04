"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function SidebarDemo() {
  const links = [
    {
      label: "Home",
      href: "/",
      icon: (
        <Image
          src="/home.svg"
          alt="Home"
          width={20}
          height={20}
          className="text-neutral-700 dark:text-neutral-200 xl:h-16 xl:w-16 flex-shrink-0"
        />
      ),
    },
    {
      label: "Reading Process Worksheet",
      href: "./reading-process-worksheet",
      iconLink: "#",
      icon: (
        <Image
          src="/reading.svg"
          alt="Reading Process Worksheet"
          width={20}
          height={20}
          className="text-neutral-700 dark:text-neutral-200 xl:h-16 xl:w-16 flex-shrink-0"
        />
      ),
    },
    {
      label: "Reader Response",
      href: "./reader-response",
      icon: (
        <Image
          src="/reader-response.svg"
          alt="Reader Response"
          width={20}
          height={20}
          className="text-neutral-700 dark:text-neutral-200 xl:h-16 xl:w-16 flex-shrink-0"
        />
      ),
    },
    {
      label: "iCare Activities",
      href: "./icare-activities",
      icon: (
        <Image
          src="/icare.svg"
          alt="iCare Activities"
          width={20}
          height={20}
          className="text-neutral-700 dark:text-neutral-200 xl:h-16 xl:w-16 flex-shrink-0"
        />
      ),
    },
    {
      label: "My Experience",
      href: "./my-experience",
      icon: (
        <Image
          src="/idea.svg"
          alt="experience"
          width={20}
          height={20}
          className="text-neutral-700 dark:text-neutral-200 xl:h-16 xl:w-16 flex-shrink-0"
        />
      ),
    },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div className={cn()}>
      <Sidebar
        open={open}
        setOpen={setOpen}
        className={`fixed inset-0 z-50 overflow-hidden p-0 ${
          open ? "w-full" : "w-16"
        }`}
      >
        <SidebarBody className="relative z-50 overflow-auto p-0">
          <div className="h-full overflow-y-hidden overflow-x-hidden">
            <div className="flex flex-col items-center h-full justify-evenly mt-7">
              {links.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={link}
                  className={`text-6xl ${!open ? "h-8 w-8" : "h-16 w-16"}`}
                />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
    </div>
  );
}
