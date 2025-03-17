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
                    Student Perceptions of ChatGPT Use in a College Essay
                    Assignment: Implications for Learning, Grading, and Trust in
                    Artificial Intelligence
                  </span>
                </p>
              </div>
              <div className="text-sm md:text-lg mb-4 md:mb-8 bg-white bg-opacity-20 p-4 rounded-lg shadow-md">
                <h2 className="font-semibold mb-2">Summary</h2>
                <p>
                  The research paper, Student Perceptions of ChatGPT Use in a
                  College Essay Assignment: Implications for Learning, Grading,
                  and Trust in Artificial Intelligence, explores the experience
                  of students, specifically engineering students, before and
                  after writing an essay wherein the use of ChatGPT was
                  required. The study first explores the various underlying
                  opinions regarding the use of Large Language Models in various
                  sectors of society. This was followed by the inclusion to the
                  educational sector, wherein Sullivan et al, reported that
                  roughly 33% of the students surveyed have used ChatGPT for
                  their writing, and 75% of those students considered it
                  cheating, while the other students said that it provided them
                  personalized feedback and flexibility in learning. To further
                  go deeper on the study itself, the researchers gathered 24
                  participants from the United States Air Force Academy. They
                  were provided with ChatGPT-supported assignment descriptions,
                  which they completed in roughly two months. The survey was
                  then undergone for the students, this was done before the
                  assignment itself was given and after it was given. To
                  summarize the results, the grades the students got were
                  comparable to essays that they have passed before this
                  ChatGPT-required essay. Observations as to how low they rated
                  the difficulty of the assignment and how high they would get
                  on the essay itself before they started were quickly turned
                  around after they finished their essay, resulting in the
                  students’ opinion that it was harder than they imagined, and
                  their expected grade became lower. This was accentuated with
                  the level of trustworthiness ChatGPT got for the students,
                  before and after they were required to use it, with the
                  students giving it a higher trust value after they did the
                  essay. In conclusion, this research paper captures the
                  underlying misconceptions about ChatGPT as well as how exactly
                  students see Artificial Intelligence, and how much their
                  academic life is affected by it, by both grades and learning
                  flexibility.
                </p>
              </div>
              <div className="text-sm md:text-lg mb-4 md:mb-8 bg-white bg-opacity-20 p-4 rounded-lg shadow-md">
                <h2 className="font-semibold mb-2">Response</h2>
                <p>
                  The researchers’ points are valid in the sense that they did
                  not immediately make negative claims about Artificial
                  Intelligence. AI tools have indeed changed the educational
                  landscape and will continue to do so. Although one of the
                  Related Study presented was too generalistic, AWE technologies
                  are yet to be that widespread, so are Automated Grading
                  Algorithms, but the main pressing issue is the statement that
                  students prefer human feedback rather than automated feedback
                  are unaligned with what is truly widespread. Various variables
                  are to be considered when making a statement regarding the
                  preferences of students, as this also affects integral parts
                  of the research as well as the perceptions of researchers on
                  the problem moving forward, variables include location,
                  institution, social status etc. As a researcher, forming
                  conclusions without acknowledging these complexities can lead
                  to misleading interpretations. Despite this, the research was
                  well-structured and presented in a way that is accessible to a
                  broad audience. The abstract effectively summarized the
                  study’s purpose and findings, ensuring clarity for readers.
                  Additionally, while the study explored student perceptions
                  well, further research should focus on larger and more diverse
                  student populations. Overall, the research provides valuable
                  insights into student perceptions of AI in education. However,
                  it must consider additional nuances to fully capture AI’s
                  evolving role in the land of education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
