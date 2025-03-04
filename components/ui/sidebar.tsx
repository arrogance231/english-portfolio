"use client";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu2 } from "@tabler/icons-react";
import Image from "next/image";

interface Links {
  href: string;
  icon: React.ReactNode;
  label: string; // Add label for hover text
}

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate: animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
  className, // This was previously unused
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
  className?: string;
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {/* ✅ Now passing className and children correctly */}
      <SidebarBody className={className}>{children}</SidebarBody>
    </SidebarProvider>
  );
};

export const SidebarBody = ({
  className,
  ...props
}: React.ComponentProps<typeof motion.div> & { className?: string }) => {
  return (
    <>
      <DesktopSidebar className={className} {...props} />
      <MobileSidebar
        className={className}
        {...(props as React.ComponentProps<"div">)}
      />
    </>
  );
};

export const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) => {
  const { open, setOpen, animate } = useSidebar();

  return (
    <>
      <motion.div
        className={cn(
          "px-4 py-4 hidden md:flex md:flex-col bg-[#1E1E1E]/50 dark:bg-neutral-800/50 flex-shrink-0 absolute left-0 top-0 h-full group",
          className
        )}
        animate={{
          width: animate ? (open ? "150px" : "80px") : "150px",
        }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        {...props}
      >
        {children}
      </motion.div>
    </>
  );
};

export const MobileSidebar = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  const { open, setOpen } = useSidebar();
  return (
    <>
      <div
        className={cn(
          "h-10 px-4 py-4 flex flex-row md:hidden items-center justify-between w-full",
          className
        )}
        {...props}
      >
        <div className="flex justify-end z-20 w-full md:hidden">
          <IconMenu2
            className="text-neutral-800 dark:text-neutral-200"
            onClick={() => setOpen(!open)}
          />
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{
                duration: 1, // Increased duration to prevent stutter
                ease: "easeInOut",
              }}
              className={cn(
                "fixed h-full w-full inset-0 bg-[#1E1E1E]/50 dark:bg-neutral-900 p-10 z-[100] flex flex-col justify-center items-center space-y-4",
                className
              )}
            >
              <button
                className="absolute top-4 right-4 text-white"
                onClick={() => setOpen(false)}
              >
                X
              </button>
              <SidebarLink
                link={{
                  label: "Home",
                  href: "/home",
                  icon: (
                    <Image
                      src="/home.svg"
                      alt="Home"
                      width={20}
                      height={20}
                      className="text-neutral-700 dark:text-neutral-200 xl:h-24 xl:w-24 flex-shrink-0 h-20 w-20"
                    />
                  ),
                }}
              />
              <SidebarLink
                link={{
                  label: "Reading Process Worksheet",
                  href: "/reading-process-worksheet",
                  icon: (
                    <Image
                      src="/reading.svg"
                      alt="Reading Process Worksheet"
                      width={20}
                      height={20}
                      className="text-neutral-700 dark:text-neutral-200 xl:h-24 xl:w-24 flex-shrink-0 h-20 w-20"
                    />
                  ),
                }}
              />
              <SidebarLink
                link={{
                  label: "Reader Response",
                  href: "/reader-response",
                  icon: (
                    <Image
                      src="/reader-response.svg"
                      alt="Reader Response"
                      width={20}
                      height={20}
                      className="text-neutral-700 dark:text-neutral-200 xl:h-24 xl:w-24 flex-shrink-0 h-20 w-20"
                    />
                  ),
                }}
              />
              <SidebarLink
                link={{
                  label: "iCare Activities",
                  href: "/icare-activities",
                  icon: (
                    <Image
                      src="/icare.svg"
                      alt="iCare Activities"
                      width={20}
                      height={20}
                      className="text-neutral-700 dark:text-neutral-200 xl:h-24 xl:w-24 flex-shrink-0 h-20 w-20"
                    />
                  ),
                }}
              />
              <SidebarLink
                link={{
                  label: "My Experience",
                  href: "/my-experience",
                  icon: (
                    <Image
                      src="/idea.svg"
                      alt="experience"
                      width={20}
                      height={20}
                      className="text-neutral-700 dark:text-neutral-200 xl:h-24 xl:w-24 flex-shrink-0 h-20 w-20"
                    />
                  ),
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
export const SidebarLink = ({
  link,
  className,
  ...props
}: {
  link: Links;
  className?: string;
  props?: LinkProps;
}) => {
  return (
    <Link
      href={link.href}
      className={cn(
        "flex flex-col items-center justify-center gap-2 group/sidebar py-2 relative",
        className
      )}
      {...props}
    >
      <div
        className="absolute z-50 p-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded shadow-lg opacity-0 group-hover/sidebar:opacity-100 transition-opacity transform pointer-events-none"
        style={{ bottom: "100%", marginBottom: "10px" }}
      >
        <h1 className="text-2xl w-full text-center">{link.label}</h1>
      </div>
      <div>{link.icon}</div>
    </Link>
  );
};
