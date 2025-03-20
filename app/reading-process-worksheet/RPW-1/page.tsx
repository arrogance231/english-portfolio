import { SidebarDemo } from "@/components/NavBar";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Link from "next/link";
export default function Home() {
  return (
    <div className="relative w-screen flex overflow-hidden h-[100vh]">
      <Image
        src="/bg.svg"
        alt="bg"
        layout="fill"
        style={{ objectFit: "cover" }}
        className="absolute h-full w-full"
      />
      <div className="relative h-full w-full overflow-hidden">
        <div className="absolute inset-0 flex flex-col xl:px-[100px] px-4">
          <SidebarDemo />
          <Link href="/reading-process-worksheet" legacyBehavior>
            <a className="absolute top-4 right-4 text-white text-2xl ">←</a>
          </Link>
          <div className="animate-appearFromCenter text-white xl:mx-auto xl:my-8 md:mx-32 mx-2 my-4 mt-10 p-2 md:p-4 xl:w-full xl:h-full overflow-y-auto bg-gradient-to-t from-[#133B5C]/50 to-[#FFA6AF]/50">
            <h1 className="text-xl md:text-4xl font-bold mb-4 md:mb-8">
              Reading Process Worksheet 1
            </h1>
            <div className="text-sm md:text-lg mb-4 md:mb-8 bg-white bg-opacity-20 p-4 rounded-lg shadow-md">
              <p className="font-semibold">GED0001</p>
              <p className="mt-2">
                <span className="font-semibold">NAME:</span>
                <span className="underline">
                  Arjhine A. Ty / Yuan Kester B. Evangelista / Alfonso Alan P.
                  Velasco / Neo Niño Jr.
                </span>
              </p>
              <p className="mt-2">
                <span className="font-semibold">SECTION:</span>
                <span className="underline">TA01</span>
              </p>
              <p className="mt-2">
                <span className="font-semibold">TEXT TITLE:</span>{" "}
                <span className="underline">
                  Are We Too Dependent on Technology?
                </span>
              </p>
              <p className="mt-2">
                <span className="font-semibold">DATE:</span>{" "}
                <span className="underline">February 7, 2025</span>
              </p>
              <p className="mt-2">
                <span className="font-semibold">TEXT TYPE:</span>{" "}
                <span className="underline">Informative Text</span>
              </p>
              <p className="mt-2">
                <span className="font-semibold">AUTHOR:</span>{" "}
                <span className="underline">Terry Brown</span>
              </p>
            </div>
            <div className="grid h-full w-full rounded-x">
              <section className="mb-4 md:mb-8 font-semibold">
                <h2 className="text-xl md:text-4xl mb-2 md:mb-4">
                  Pre-Reading
                </h2>
                <h3 className="my-4 md:my-10">
                  A. Complete the table with the headings, subheadings, and
                  visual titles/descriptions from the text. Provide at least 2
                  entries for each column.
                </h3>
                <div className="hidden md:block overflow-x-auto">
                  <table className="table-auto w-full mb-4 md:mb-8">
                    <tbody>
                      <tr>
                        <td className="border px-1 md:px-4 py-2 text-center w-1/3">
                          Headings
                        </td>
                        <td className="border px-1 md:px-4 py-2 text-center w-1/3">
                          Subheadings
                        </td>
                        <td className="border px-1 md:px-4 py-2 text-center w-1/3">
                          Visuals
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-1 md:px-4 py-2 w-1/3">
                          Are We Too Dependent on Technology
                        </td>
                        <td className="border px-1 md:px-4 py-2 w-1/3">
                          ● Who Needs Knowledge?,
                          <br />
                          ● Are There Business Costs of Being Too Dependent on
                          Technology?,
                          <br />
                          ● Digital Amnesia,
                          <br />
                          ● Getting Real About Technology,
                          <br />● Final Thoughts
                        </td>
                        <td className="border px-1 md:px-4 py-2 w-1/3">
                          ● A cognitive map that is evident on an MRI scan – in
                          an enlarged part of the brain called the hippocampus.,
                          <br />
                          ● A graph showing the rate as to how much a person has
                          their memory retention decreases as time passes by
                          while they are being trained. ,
                          <br />
                          ● An image saying that 31 percent of consumers believe
                          that we will have to go to “mind gyms” to practice
                          thinking. ,
                          <br />● An image showing a scene where the surgery of
                          a person is being done, while with supervision of a
                          human, by robotic arms.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="md:hidden">
                  <Tabs defaultValue="headings" className="w-full">
                    <TabsList className="flex justify-evenly">
                      <TabsTrigger
                        value="headings"
                        className="bg-gray-500 border border-gray-400 rounded px-2 py-1"
                      >
                        Headings
                      </TabsTrigger>
                      <TabsTrigger
                        value="subheadings"
                        className="bg-gray-500 border border-gray-400 rounded px-2 py-1"
                      >
                        Subheadings
                      </TabsTrigger>
                      <TabsTrigger
                        value="visuals"
                        className="bg-gray-500 border border-gray-400 rounded px-2 py-1"
                      >
                        Visuals
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent
                      value="headings"
                      className="m-2 p-2 border border-gray-400 rounded h-96"
                    >
                      <p>Are We Too Dependent on Technology</p>
                    </TabsContent>
                    <TabsContent
                      value="subheadings"
                      className="m-2 p-2 border border-gray-400 rounded h-96"
                    >
                      <p>
                        ● Who Needs Knowledge?,
                        <br />
                        ● Are There Business Costs of Being Too Dependent on
                        Technology?,
                        <br />
                        ● Digital Amnesia,
                        <br />
                        ● Getting Real About Technology,
                        <br />● Final Thoughts
                      </p>
                    </TabsContent>
                    <TabsContent
                      value="visuals"
                      className="m-2 p-2 border border-gray-400 rounded"
                    >
                      <p>
                        ● A cognitive map that is evident on an MRI scan – in an
                        enlarged part of the brain called the hippocampus.,
                        <br />
                        ● A graph showing the rate as to how much a person has
                        their memory retention decreases as time passes by while
                        they are being trained.
                        <br />
                        ● An image saying that 31 percent of consumers believe
                        that we will have to go to “mind gyms” to practice
                        thinking.
                        <br />● An image showing a scene where the surgery of a
                        person is being done, while with supervision of a human,
                        by robotic arms.
                      </p>
                    </TabsContent>
                  </Tabs>
                </div>
                <h3>
                  B. Fill the table with information that you already know about
                  the topic (K), you wonder about the topic (W), and you will
                  learn after reading the text (L). Fill the L Column after
                  reading the text. Provide at least 2 entries for each column.{" "}
                </h3>
                <div className="hidden md:block overflow-x-auto">
                  <table className="table-auto w-full mb-4 md:mb-8">
                    <tbody>
                      <tr>
                        <td className="border px-1 md:px-4 py-2 text-center w-1/3  ">
                          K (Know)
                        </td>
                        <td className="border px-1 md:px-4 py-2 text-center w-1/3">
                          W (Wonder)
                        </td>
                        <td className="border px-1 md:px-4 py-2 text-center w-1/3">
                          L (Learn)
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-1 md:px-4 py-2">
                          We are too dependent on technology
                        </td>
                        <td className="border px-1 md:px-4 py-2">
                          ● Are we, by any chance, not too dependent on
                          technology? ,
                          <br />● How will we stop becoming too dependent on
                          technology?
                        </td>
                        <td className="border px-1 md:px-4 py-2">
                          <p className="text-justify font-semibold">
                            Being too dependent on technology has its downsides
                            that most of us wouldnt have realized, like the
                            halting of the growth of our hippocampus, which is a
                            big part of what helps us memorize and familiarize
                            with things.
                          </p>
                          <p className="text-justify font-semibold">
                            That with time, people would actually have lesser
                            memory retention, instead of having a higher rate of
                            it. They forget more as they are trained more,
                            rather than remembering more as they are trained
                            more.
                          </p>
                          <p className="text-justify font-semibold">
                            We need to be able to balance our dependence on
                            technology, use it for what seems like an important
                            task, but for simple tasks that would require our
                            brain and body to function, we should do it
                            ourselves
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="md:hidden">
                  <Tabs defaultValue="know" className="w-full">
                    <TabsList className="flex justify-evenly">
                      <TabsTrigger
                        value="know"
                        className="bg-gray-500 border border-gray-400 rounded px-2 py-1"
                      >
                        K (Know)
                      </TabsTrigger>
                      <TabsTrigger
                        value="wonder"
                        className="bg-gray-500 border border-gray-400 rounded px-2 py-1"
                      >
                        W (Wonder)
                      </TabsTrigger>
                      <TabsTrigger
                        value="learn"
                        className="bg-gray-500 border border-gray-400 rounded px-2 py-1"
                      >
                        L (Learn)
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent
                      value="know"
                      className="m-2 p-2 border border-gray-400 rounded h-[500px]"
                    >
                      <p>We are too dependent on technology</p>
                    </TabsContent>
                    <TabsContent
                      value="wonder"
                      className="m-2 p-2 border border-gray-400 rounded h-[500px]"
                    >
                      <p>
                        ● Are we, by any chance, not too dependent on
                        technology? ,
                        <br />● How will we stop becoming too dependent on
                        technology?
                      </p>
                    </TabsContent>
                    <TabsContent
                      value="learn"
                      className="m-2 p-2 border border-gray-400 rounded h-[650px]"
                    >
                      <p className="text-justify mb-10">
                        Being too dependent on technology has its downsides that
                        most of us wouldnt have realized, like the halting of
                        the growth of our hippocampus, which is a big part of
                        what helps us memorize and familiarize with things.
                      </p>
                      <p className="text-justify my-10">
                        That with time, people would actually have lesser memory
                        retention, instead of having a higher rate of it. They
                        forget more as they are trained more, rather than
                        remembering more as they are trained more.
                      </p>
                      <p className="text-justify my-10">
                        We need to be able to balance our dependence on
                        technology, use it for what seems like an important
                        task, but for simple tasks that would require our brain
                        and body to function, we should do it ourselves so that
                        our brain and body wont rot to oblivion.
                      </p>
                    </TabsContent>
                  </Tabs>
                </div>
              </section>

              <section className="mb-4 md:mb-8">
                <h2 className="text-xl md:text-4xl font-semibold mb-2 md:mb-4">
                  Reading
                </h2>
                <h3 className="my-4 md:my-10">
                  A. Fill the table with specific details from the text and
                  inferences that can be drawn from it. Provide at least 2
                  entries for each column.
                </h3>
                <div className="hidden md:block overflow-x-auto">
                  <table className="table-auto w-full mb-4 md:mb-8">
                    <tbody>
                      <tr>
                        <td className="border px-1 md:px-4 py-2 text-center w-1/2">
                          Details from the Text
                        </td>
                        <td className="border px-1 md:px-4 py-2 text-center w-1/2">
                          Plausible Inferences
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-1 md:px-4 py-2">
                          The author used to do mental math but now relies on a
                          calculator.
                        </td>
                        <td className="border px-1 md:px-4 py-2">
                          Were all getting so used to technology that we dont
                          bother using our brains for simple tasks like math
                          anymore. Were forgetting basic skills because we rely
                          too much on gadgets.
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-1 md:px-4 py-2">
                          A study showed that when people use GPS, their brains
                          navigation system basically "switches off."
                        </td>
                        <td className="border px-1 md:px-4 py-2">
                          Relying too much on GPS might make us lose the ability
                          to figure out directions on our own. Our brains get
                          lazy when we let technology do all the thinking for
                          us.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="md:hidden">
                  <Tabs defaultValue="column1" className="w-full ">
                    <TabsList className="flex justify-evenly">
                      <TabsTrigger
                        value="column1"
                        className="bg-gray-500 border border-gray-400 rounded px-2 py-1"
                      >
                        Details from the Text
                      </TabsTrigger>
                      <TabsTrigger
                        value="column2"
                        className="bg-gray-500 border border-gray-400 rounded px-2 py-1"
                      >
                        Plausible Inferences
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent
                      value="column1"
                      className="m-2 p-2 border border-gray-400 rounded h-48"
                    >
                      <p className="text-justify border-b border-gray-400 mb-2">
                        The author used to do mental math but now relies on a
                        calculator.
                      </p>
                      <p className="text-justify border-b-t border-gray-400 my-2">
                        A study showed that when people use GPS, their brains
                        navigation system basically "switches off."
                      </p>
                    </TabsContent>
                    <TabsContent
                      value="column2"
                      className="m-2 p-2 border border-gray-400 rounded h-72"
                    >
                      <p className="text-justify border-b border-gray-400 mb-2">
                        Were all getting so used to technology that we dont
                        bother using our brains for simple tasks like math
                        anymore. Were forgetting basic skills because we rely
                        too much on gadgets.
                      </p>
                      <p className="text-justify border-b-t border-gray-400 my-2">
                        Relying too much on GPS might make us lose the ability
                        to figure out directions on our own. Our brains get lazy
                        when we let technology do all the thinking for us.
                      </p>
                    </TabsContent>
                  </Tabs>
                </div>
              </section>

              <section className="mb-4 md:mb-8">
                <h3 className="my-4 md:my-10">
                  B. Figure out the meaning of the technical term from the text.
                  Write the technical term, indicate the clue from the text, and
                  use the term in your own sentence. Provide at least 2 entries
                  for each column.
                </h3>
                <div className="hidden md:block overflow-x-auto">
                  <table className="table-auto w-full mb-4 md:mb-8">
                    <tbody>
                      <tr>
                        <td className="border px-1 md:px-4 py-2 text-center w-1/3">
                          Technical Term
                        </td>
                        <td className="border px-1 md:px-4 py-2 text-center w-1/3">
                          Context Clue i.e., antonym, synonym, examples,
                          description, word parts, definition or any clues in
                          the text
                        </td>
                        <td className="border px-1 md:px-4 py-2 text-center w-1/3">
                          Use each technical term in a sentence
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-1 md:px-4 py-2 font-bold">
                          1. Hippocampus
                        </td>
                        <td className="border px-1 md:px-4 py-2">
                          “Well, a 2017 study by researchers at University
                          College London (UCL) – published in Nature
                          Communications – claims that when using automated
                          systems to memorize directions and guide us where we
                          need to go, the hippocampus and other areas of the
                          brain used to think of different routes are “switched
                          off.””
                        </td>
                        <td className="border px-1 md:px-4 py-2">
                          Studying for exams without distractions can help
                          improve the hippocampus and improve memory.
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-1 md:px-4 py-2 font-bold">
                          2. Digital Amnesia
                        </td>
                        <td className="border px-1 md:px-4 py-2">
                          Word Parts: Digital - expressed as series of the
                          digits 0 and 1. Using technology to store, send, or
                          process information. Amnesia - When someone forgets
                          things, either temporarily or permanently.
                        </td>
                        <td className="border px-1 md:px-4 py-2">
                          I barely remember anyones phone number anymore because
                          of digital amnesia.I just rely on my contacts app.
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-1 md:px-4 py-2 font-bold">
                          3. Cognitive Map
                        </td>
                        <td className="border px-1 md:px-4 py-2">
                          “To do so, theyre required to memorize hundreds of
                          routes and landmarks and demonstrate their knowledge
                          of them in test situations. They commit to memory
                          thousands of street names and can mentally visualize
                          hundreds of journeys across the UKs biggest city.”
                        </td>
                        <td className="border px-1 md:px-4 py-2">
                          I dont need Google Maps for my campus anymore because
                          Ive built a cognitive map of all the shortcuts.
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-1 md:px-4 py-2 font-bold">
                          4. Autonomous AI
                        </td>
                        <td className="border px-1 md:px-4 py-2">
                          Word Parts: Auto - Automatic or without human control
                          nomous - related to control AI (Artificial
                          Intelligence) - Technology that allows computers to
                          think and make decisions like humans.
                        </td>
                        <td className="border px-1 md:px-4 py-2">
                          Self-driving cars are a great example of autonomous AI
                          because they can operate without a human driver.
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-1 md:px-4 py-2 font-bold">
                          5. Digital Deluge
                        </td>
                        <td className="border px-1 md:px-4 py-2">
                          “As we become so dependent on technology to remember
                          things for us, our actual memories suffer. Kwik calls
                          this the “digital deluge,””
                        </td>
                        <td className="border px-1 md:px-4 py-2">
                          Because of all the information available online, I
                          feel like Im constantly drowning in a digital deluge.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="md:hidden">
                  <Tabs defaultValue="column1" className="w-full ">
                    <TabsList className="flex justify-evenly">
                      <TabsTrigger
                        value="column1"
                        className="bg-gray-500 border border-gray-400 rounded px-2 py-1 text-xs"
                      >
                        Technical Term
                      </TabsTrigger>
                      <TabsTrigger
                        value="column2"
                        className="bg-gray-500 border border-gray-400 rounded px-2 py-1 text-xs"
                      >
                        Context Clue
                      </TabsTrigger>
                      <TabsTrigger
                        value="column3"
                        className="bg-gray-500 border border-gray-400 rounded px-2 py-1 text-xs"
                      >
                        Use in a Sentence
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent
                      value="column1"
                      className="m-2 p-2 border border-gray-400 rounded h-[500px]"
                    >
                      <p className="border-b border-gray-400 p-2 font-bold h-1/5">
                        1. Hippocampus
                      </p>
                      <p className="border-b border-gray-400 p-2 font-bold h-1/5">
                        2. Digital Amnesia
                      </p>
                      <p className="border-b border-gray-400 p-2 font-bold h-1/5">
                        3. Cognitive Map
                      </p>
                      <p className="border-b border-gray-400 p-2 font-bold h-1/5">
                        4. Autonomous AI
                      </p>
                      <p className="border-b border-gray-400 p-2 font-bold h-1/5">
                        5. Digital Deluge
                      </p>
                    </TabsContent>
                    <TabsContent
                      value="column2"
                      className="m-2 p-2 border border-gray-400 rounded h-[1000px]"
                    >
                      <p className="border-b border-gray-400 p-2">
                        “Well, a 2017 study by researchers at University College
                        London (UCL) – published in Nature Communications –
                        claims that when using automated systems to memorize
                        directions and guide us where we need to go, the
                        hippocampus and other areas of the brain used to think
                        of different routes are “switched off.””
                      </p>
                      <p className="border-b border-gray-400 p-2">
                        Word Parts: Digital - expressed as series of the digits
                        0 and 1. Using technology to store, send, or process
                        information. Amnesia - When someone forgets things,
                        either temporarily or permanently.{" "}
                      </p>
                      <p className="border-b border-gray-400 p-2">
                        “To do so, theyre required to memorize hundreds of
                        routes and landmarks and demonstrate their knowledge of
                        them in test situations. They commit to memory thousands
                        of street names and can mentally visualize hundreds of
                        journeys across the UKs biggest city.”
                      </p>
                      <p className="border-b border-gray-400 p-2">
                        Word Parts: Auto - Automatic or without human control
                        autonomous - related to control AI (Artificial
                        Intelligence) - Technology that allows computers to
                        think and make decisions like humans.
                      </p>
                      <p className="border-b border-gray-400 p-2">
                        “As we become so dependent on technology to remember
                        things for us, our actual memories suffer. Kwik calls
                        this the “digital deluge,””
                      </p>
                    </TabsContent>
                    <TabsContent
                      value="column3"
                      className="m-2 p-2 border border-gray-400 rounded h-[500px]"
                    >
                      <p className="border-b border-gray-400 p-2">
                        Studying for exams without distractions can help improve
                        the hippocampus and improve memory.
                      </p>
                      <p className="border-b border-gray-400 p-2">
                        I barely remember anyones phone number anymore because
                        of digital amnesia.I just rely on my contacts app.
                      </p>
                      <p className="border-b border-gray-400 p-2">
                        I dont need Google Maps for my campus anymore because
                        Ive built a cognitive map of all the shortcuts.
                      </p>
                      <p className="border-b border-gray-400 p-2">
                        Self-driving cars are a great example of autonomous AI
                        because they can operate without a human driver.
                      </p>
                      <p className="border-b border-gray-400 p-2">
                        Because of all the information available online, I feel
                        like Im constantly drowning in a digital deluge.
                      </p>
                    </TabsContent>
                  </Tabs>
                </div>
                <div className="mb-4 md:mb-8">
                  <h3 className="font-semibold mb-2">Topic of the text:</h3>
                  <p className="mb-2">Societys Dependence on Technology</p>
                  <h3 className="font-semibold mb-2">
                    Writers opinion about the texts topic:
                  </h3>
                  <p className="mb-2">
                    The writer believes that while technology enhances
                    efficiency and convenience, our increasing dependence on it
                    may weaken cognitive abilities, particularly memory and
                    problem-solving skills. Although technology is very used in
                    modern life and cannot be removed, individuals and
                    businesses should strive for balance to avoid negative
                    consequences such as reduced mental sharpness and over
                    reliance on digital tools.
                  </p>
                  <h3 className="font-semibold mb-2">
                    Support for writers opinion (e.g., evidence such as facts,
                    testimonies, examples, etc.):
                  </h3>
                  <p>
                    <strong>A. Impact on Cognitive Abilities:</strong> Studies,
                    the 2017 UCL research shows that reliance on GPS technology
                    reduces hippocampus activity, weakening memory and spatial
                    navigation skills.
                  </p>
                  <p>
                    <strong>B. Business Consequences:</strong> Memory expert Jim
                    Kwik highlights how forgetting information due to reliance
                    on technology can hurt businesses, leading to financial
                    losses and inefficiencies.
                  </p>
                  <p>
                    <strong>C. Medical and Professional Risks:</strong>{" "}
                    Overdependence on A.I and robotics in healthcare may result
                    in doctors and surgeons losing essential manual skills,
                    potentially making them unable to operate without
                    technology.
                  </p>
                </div>
              </section>
              <section>
                <h2 className="text-xl md:text-4xl font-semibold mb-2 md:mb-4">
                  Post-Reading
                </h2>
                <h3 className="my-4 md:my-10">
                  A. Answer the following rhetorical analysis guide questions.
                </h3>
                <ol className="list-decimal list-inside">
                  <li className="mb-4">
                    <strong>
                      What credentials does the author have which give him/her
                      the authority to write about the topic of the text?
                    </strong>
                    <p>
                      He is a seasoned professional in product management and
                      marketing, with over 30 years of experience working for
                      technology-driven companies across various industries such
                      as Telecoms, IT Service Management (ITSM), Managed Service
                      Providers (MSP), Enterprise Security, Business
                      Intelligence (BI), and Healthcare. He has a strong track
                      record in shaping and executing marketing strategies to
                      effectively support sales initiatives. In his personal
                      time, he enjoys craft beer and has a passion for Lotus
                      cars.
                    </p>
                  </li>
                  <li className="mb-4">
                    <strong>
                      After considering the authors profession and affiliation,
                      what possible biases the author might have about the
                      topic?
                    </strong>
                    <p>
                      The author focused a lot on the customers POV as he is a
                      marketing professional. The downsides and such that he
                      have mentioned in the topic are of course being considered
                      by the manufacturers and developers of what we consider as
                      the digital platform. Design Thinking/Human Computer
                      Interaction are taken into account when creating products
                      for consumers, and such negative effect are also taken in
                      consideration.
                    </p>
                  </li>
                  <li className="mb-4">
                    <strong>
                      What is the purpose of the text, and how does the author
                      accomplish that purpose? What evidence does the author use
                      to support the main idea in the text?
                    </strong>
                    <p>
                      The texts main purpose is to simply answer the question,
                      Are we too dependent on technology? The author
                      accomplishes this by giving examples as to how technology
                      relates to human nature, the negative effects that it
                      proposes to us humans, both biologically and mentally
                      speaking. For example, being too dependent on technology
                      for navigation decreases the ability of a person to
                      memorize as well as be familiar with the roads as one
                      would usually be without a GPS.
                    </p>
                  </li>
                  <li className="mb-4">
                    <strong>
                      What specific idea/information in the text challenges or
                      surprises you? Why?
                    </strong>
                    <p>
                      The information regarding the hippocampus, specifically
                      with how drivers would not be able to remember as much
                      roads as they would have usually had if GPS did not exist.
                      I was surprised at this because that didnt seem to be the
                      case, specially with personal experience. Grab drivers
                      only use their GPS just to make sure that they dont get
                      lost, but they dont entirely depend on it and the drivers
                      still know every single area that they are in, as
                      sometimes some do a shortcut, which the GPS does not find
                      most of the time and only a local could do.
                    </p>
                  </li>
                  <li className="mb-4">
                    <strong>
                      Is the style of writing suitable for the intended
                      audience? Is it too formal or too casual? Why?
                    </strong>
                    <p>
                      The style of writing is just right. Its formal, but at the
                      same time it resonates with most people. The simple
                      gestures and related phrases have captivated me and would
                      do so as well for other audiences as these experiences are
                      very, “oh, this happened to me too”. kind of thing.
                    </p>
                  </li>
                </ol>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
