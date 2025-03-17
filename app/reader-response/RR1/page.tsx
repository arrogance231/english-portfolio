import Image from "next/image";
import Link from "next/link";
import { SidebarDemo } from "@/components/NavBar";

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
        <div className="relative h-full w-full overflow-hidden">
          <div className="absolute inset-0 flex flex-col xl:px-[100px] px-4">
            <Link href="/reader-response" legacyBehavior>
              <a className="absolute top-4 right-4 text-white text-2xl ">←</a>
            </Link>
            <SidebarDemo />
            <div className="animate-appearFromCenter text-white xl:mx-auto xl:my-8 md:mx-32 mx-2 my-4 mt-10 p-2 md:p-4 xl:w-full xl:h-full overflow-y-auto bg-gradient-to-t from-[#133B5C]/50 to-[#FFA6AF]/50">
              <h1 className="text-xl md:text-4xl font-bold mb-4 md:mb-8">
                READER RESPONSE FORM
              </h1>
              <div className="text-sm md:text-lg mb-4 md:mb-8 bg-white bg-opacity-20 p-4 rounded-lg shadow-md">
                <p className="font-semibold">Name:</p>
                <p className="underline">Arjhine A. Ty</p>
                <p className="mt-2">
                  <span className="font-semibold">Section:</span>
                  <span className="underline">TA01</span>
                </p>
                <p className="mt-2">
                  <span className="font-semibold">Date:</span>
                  <span className="underline">February 27, 2025</span>
                </p>

                <p className="mt-2">
                  <span className="font-semibold">
                    Title of Reading Selection:
                  </span>
                  <span className="underline">
                    Are We Too Dependent on Technology?
                  </span>
                </p>
              </div>
              <div className="text-sm md:text-lg mb-4 md:mb-8 bg-white bg-opacity-20 p-4 rounded-lg shadow-md">
                <h2 className="font-semibold mb-2">Summary</h2>
                <p>
                  The article, Are We Too Dependent On Technology? Written by
                  Terry Brown explores the negative effects of technology on us
                  humans. Does it negatively affect our cognitive abilities? The
                  author initially hypothesized that with the increase of
                  presence of technology on both our personal and professional
                  lives, it maybe even damaging our brains. This is supported by
                  the article he mentioned regarding how Taxi Drivers on London
                  were trained, with the so called, “Knowledge of London” test.
                  This test helps grow and activate parts of our brains that
                  help us think and decide, specifically the Hippocampus. But by
                  using automated systems, these parts of our brain cease to
                  function as it isn’t burdened anymore. It is also supported by
                  the theory that, “By not regularly exercising the brain, just
                  like a muscle, it becomes weak and unhealthy.” This problem of
                  forgetting things not only affects our personal lives, but
                  also professional lives. This is especially true for
                  businesses, and the author expressed his opinion regarding
                  this. He added an article that corporate training was executed
                  for companies across the US. And from it, they found out that,
                  “the average person forgets about 70% of new information
                  within 24 hours, and 80% within a week.” This phenomenon is
                  called, “digital amnesia”, as coined by Kaspersky in 2015. The
                  convenience of having access to data makes it harder for the
                  person to commit to remembering that data. The author
                  expressed his opinion regarding the effects of technology in
                  real life. Robots are now routinely used to perform surgeries,
                  but the problem with that is that surgeons may lose their
                  touch when operating with patients directly, and in the
                  future, new surgeons might not be able to learn manual surgery
                  anymore. While machines working may be alright, the author
                  expressed his doubts about it, are we okay with not being able
                  to do life-saving operations without technology? According to
                  him, “If we are dependent on technology to think, live,
                  communicate, travel, and work – who’s really the slave, and
                  who’s the master?” Finally, he expressed his final thoughts by
                  saying that it’s all about balance. We can’t remove technology
                  from the equation, but we also want to have healthy and
                  functioning cognitive abilities, that’s why we must take
                  balance into account.
                </p>
              </div>
              <div className="text-sm md:text-lg mb-4 md:mb-8 bg-white bg-opacity-20 p-4 rounded-lg shadow-md">
                <h2 className="font-semibold mb-2">Response</h2>
                <p>
                  The author’s points are valid in the realm of the masses.
                  Humans are cognitive creatures as well as innovative
                  creatures, as such they always think of a way to do things
                  better and much more efficiently. While degradation of human
                  cognitive abilities is prevalent in most people, these are
                  inevitably just the result of their decision to forget about
                  the manual task that they did once and focus on new tasks that
                  they can do with effort. While drivers have indeed lost touch
                  with directions and locations, they became better maneuvers as
                  well as adaptive to different traffic conditions. The human
                  mind does not merely discard skills; rather, it reallocates
                  cognitive resources to areas that demand more immediate
                  attention. A driver may rely on GPS for navigation, but in
                  turn, they develop quicker reaction times, better hazard
                  perception, and improved multitasking abilities—skills that
                  are far more critical in modern driving environments. Consider
                  programmers who use AI-assisted code completion. While they
                  may no longer recall every syntax rule by heart, they become
                  more efficient problem solvers, focusing on logic,
                  architecture, and debugging rather than rote memorization.
                  This applies to businesses as well. While remembering client
                  data might seem crucial, the real priority lies in handling
                  that data properly. With automation, businesses can manage
                  information more efficiently and with fewer errors, allowing
                  employees to focus on higher-level tasks such as strategy,
                  customer relationships, and innovation. Regarding robotics,
                  besides the operation itself, there are much more important
                  variables to consider, one of such are the dosages, knowledge
                  of the right procedure to have the robot execute as well as
                  ensuring precise calibration, safety protocols, and
                  adaptability to unexpected variables. In conclusion,
                  technology may seem to have had bad effects on our cognitive
                  abilities, it merely switched our attentions to much more
                  important things. While these arguments may not apply to how
                  everyone uses technology, it is still without a doubt, a proof
                  of concept.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
