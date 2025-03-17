import { SidebarDemo } from "@/components/NavBar";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

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
          <div className="animate-appearFromCenter text-white xl:mx-auto xl:my-8 md:mx-32 mx-2 my-4 mt-10 p-2 md:p-4 xl:w-full xl:h-full overflow-y-auto bg-gradient-to-t from-[#133B5C]/50 to-[#FFA6AF]/50">
            <h1 className="text-xl md:text-4xl font-bold mb-4 md:mb-8">
              Reading Process Worksheet 1
            </h1>
            <div className="text-sm md:text-lg mb-4 md:mb-8 bg-white bg-opacity-20 p-4 rounded-lg shadow-md">
              <p className="font-semibold">GED0001</p>
              <p className="mt-2">
                <span className="font-semibold">NAME:</span>
                <span className="underline">
                  Arjhine A. Ty, Dionne Gwyneth G. Mendoza, Ryko Mikael Domingo,
                  Lars Dwayne Mananghaya, Joaquin Alfonso Mikael Inigo R.
                  Martinez
                </span>
              </p>
              <p className="mt-2">
                <span className="font-semibold">SECTION:</span>
                <span className="underline">TA01</span>
              </p>
              <p className="mt-2">
                <span className="font-semibold">TEXT TITLE:</span>{" "}
                <span className="underline">
                  Student Perceptions of ChatGPT Use in a College Essay
                  Assignment: Implications for Learning, Grading, and Trust in
                  Artificial Intelligence
                </span>
              </p>
              <p className="mt-2">
                <span className="font-semibold">DATE:</span>{" "}
                <span className="underline">March 6, 2025</span>
              </p>
              <p className="mt-2">
                <span className="font-semibold">TEXT TYPE:</span>{" "}
                <span className="underline">Scientific Text</span>
              </p>
              <p className="mt-2">
                <span className="font-semibold">AUTHORS:</span>{" "}
                <span className="underline">
                  Chad C. Tossell, Nathan L. Tenhundfeld, Ali Momen, Katrina
                  Cooley, & Ewart J. de Visser
                </span>
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
                          Title/Description of Visual
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-1 md:px-4 py-2 w-1/3">
                          Student Perceptions of ChatGPT Use in a College Essay
                          Assignment: Implications for Learning, Grading, and
                          Trust in Artificial Intelligence
                        </td>
                        <td className="border px-1 md:px-4 py-2 w-1/3">
                          ● Related Work,
                          <br />
                          ● Importance of Student Perceptions in Education,
                          <br />
                          ● Measurement of Perceived Assignment Difficulty and
                          Quality,
                          <br />
                          ● Measurement of Trust In and Reliance on ChatGPT,
                          <br />● Themes and Frequency Counts by Question. (Page
                          7)
                        </td>
                        <td className="border px-1 md:px-4 py-2 w-1/3">
                          ● Students’ Perceptions of ChatGPT in Assignment.
                          (Page 5)
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
                        className="bg-gray-500 border border-gray-400 rounded px-2 py-1 text-center"
                        style={{ whiteSpace: "normal" }}
                      >
                        Title/Description of Visual
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent
                      value="headings"
                      className="m-2 p-2 border border-gray-400 rounded h-96"
                    >
                      <p>
                        Student Perceptions of ChatGPT Use in a College Essay
                        Assignment: Implications for Learning, Grading, and
                        Trust in Artificial Intelligence
                      </p>
                    </TabsContent>
                    <TabsContent
                      value="subheadings"
                      className="m-2 p-2 border border-gray-400 rounded h-96"
                    >
                      <p>
                        ● Related Work,
                        <br />
                        ● Importance of Student Perceptions in Education,
                        <br />
                        ● Measurement of Perceived Assignment Difficulty and
                        Quality,
                        <br />
                        ● Measurement of Trust In and Reliance on ChatGPT,
                        <br />● Themes and Frequency Counts by Question. (Page
                        7)
                      </p>
                    </TabsContent>
                    <TabsContent
                      value="visuals"
                      className="m-2 p-2 border border-gray-400 rounded h-96"
                    >
                      <p>
                        ● Students’ Perceptions of ChatGPT in Assignment. (Page
                        5)
                      </p>
                      <p>● Themes and Frequency Counts by Question. (Page 7)</p>
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
                        <td className="border px-1 md:px-4 py-2 text-center w-1/3">
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
                          ● I know how ChatGPT can really help students from
                          making their homeworks.
                          <br />● I already know that there were concerns about
                          the accuracy of ChatGPT. <br />● I know that most
                          people view ChatGPT as a “cheating tool” because of
                          it's capabilities.
                        </td>
                        <td className="border px-1 md:px-4 py-2">
                          ● I wonder how does prolonged use of ChatGPT can
                          affect the critical thinking and writing skills of a
                          student.
                          <br />● I wonder how teachers/professors can integrate
                          AI into learning without compromising the academic
                          integrity of the students.
                          <br />● I wonder how will the students balanced the
                          use of AI assistance and independent critical thinking
                          to achieve effective learning
                        </td>
                        <td className="border px-1 md:px-4 py-2">
                          ● I learned that ChatGPT can provide learning
                          assistance, but it doesn't necessarily simplify the
                          work of a student.
                          <br />● I learned that while ChatGPT can be a useful
                          tool, it is important for students to develop their
                          own critical thinking and writing skills.
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
                      <p>
                        ● I know how ChatGPT can really help students from
                        making their homeworks.
                      </p>
                      <p>
                        ● I already know that there were concerns about the
                        accuracy of ChatGPT.
                      </p>{" "}
                      <p>
                        ● I already know that there were concerns about the
                        accuracy of ChatGPT.
                      </p>
                    </TabsContent>
                    <TabsContent
                      value="wonder"
                      className="m-2 p-2 border border-gray-400 rounded h-[500px]"
                    >
                      <p>
                        ● I wonder how does prolonged use of ChatGPT can affect
                        the critical thinking and writing skills of a student.
                      </p>
                      <p>
                        ● I wonder how teachers/professors can integrate AI into
                        learning without compromising.
                      </p>
                      <p>
                        ● I wonder how will the students balanced the use of AI
                        assistance and independent critical thinking to achieve
                        effective learning
                      </p>
                    </TabsContent>
                    <TabsContent
                      value="learn"
                      className="m-2 p-2 border border-gray-400 rounded h-[650px]"
                    >
                      <p>
                        ● I learned that ChatGPT can provide learning
                        assistance, but it doesn't necessarily simplify the work
                        of a student.
                      </p>
                      <p>
                        ● I learned that while ChatGPT can be a useful tool, it
                        is important for students to develop their own critical
                        thinking and writing skills.
                      </p>
                      <p>
                        ● I know that most people view ChatGPT as a “cheating
                        tool” because of it's capabilities.
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
                          Some students felt that using ChatGPT made the writing
                          process easier and helped them generate ideas.
                          Instructors expressed concerns about the authenticity
                          of student work when AI was used.
                        </td>
                        <td className="border px-1 md:px-4 py-2">
                          Students may rely more on AI for brainstorming rather
                          than developing their own critical thinking skills.
                          Trust in student submissions may decline if
                          AI-generated content becomes indistinguishable from
                          human writing.
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-1 md:px-4 py-2">
                          Some students worried that using ChatGPT might be
                          considered academic dishonesty. The study found that
                          students who used ChatGPT had mixed feelings about its
                          accuracy.
                        </td>
                        <td className="border px-1 md:px-4 py-2">
                          There is uncertainty about ethical guidelines for AI
                          use in academic writing. ChatGPT’s responses might not
                          always be reliable, leading to hesitation in fully
                          depending on it for academic work.
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
                        A study showed that when people use GPS, their brain’s
                        navigation system basically "switches off."
                      </p>
                    </TabsContent>
                    <TabsContent
                      value="column2"
                      className="m-2 p-2 border border-gray-400 rounded h-72"
                    >
                      <p className="text-justify border-b border-gray-400 mb-2">
                        We’re all getting so used to technology that we don’t
                        bother using our brains for simple tasks like math
                        anymore. We’re forgetting basic skills because we rely
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
                          Context Clue (i.e., antonym, synonym, examples,
                          description, word parts, definition or any clues in
                          the text)
                        </td>
                        <td className="border px-1 md:px-4 py-2 text-center w-1/3">
                          Use each technical term in a sentence
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-1 md:px-4 py-2 font-bold">
                          1. Large Language Models (LLMs)
                        </td>
                        <td className="border px-1 md:px-4 py-2">
                          Examples - "power applications, such as ChatGPT" and
                          Description - "can change education for the better."
                        </td>
                        <td className="border px-1 md:px-4 py-2">
                          Researchers are continuously improving LLMs to enhance
                          their ability to generate coherent and contextually
                          relevant responses across various domains.
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-1 md:px-4 py-2 font-bold">
                          2. Automated Writing Evaluation (AWE)
                        </td>
                        <td className="border px-1 md:px-4 py-2">
                          Description - The passage explains that AWE
                          technologies help teachers save time in assessing
                          writing, encourage more writing practice, and
                          complement writing instruction.
                        </td>
                        <td className="border px-1 md:px-4 py-2">
                          Many educators are incorporating AWE tools into their
                          classroom to provide students with instant feedback
                          and improve their writing skills.
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-1 md:px-4 py-2 font-bold">
                          3. Human-Computer Interaction (HCI)
                        </td>
                        <td className="border px-1 md:px-4 py-2">
                          Description – The passage states that one of the final
                          course papers focused on "current Human
                          Factors/Human-Computer Interaction (HF/HCI)
                          challenges," indicating that HCI is a field related to
                          how humans interact with computer systems.
                        </td>
                        <td className="border px-1 md:px-4 py-2">
                          Advances in HCI have led to more intuitive user
                          interfaces, making technology more accessible and
                          user-friendly.
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-1 md:px-4 py-2 font-bold">
                          4. Trust Calibration
                        </td>
                        <td className="border px-1 md:px-4 py-2">
                          Description – The study explains trust calibration as
                          the process of adjusting students’ confidence in
                          ChatGPT based on its accuracy and reliability. It
                          discusses how students initially doubted ChatGPT but
                          later developed a more balanced trust after
                          recognizing both its strengths and limitations.
                        </td>
                        <td className="border px-1 md:px-4 py-2">
                          Trust calibration is important in AI-assisted learning
                          because it helps students balance trusting ChatGPT’s
                          answers and recognizing its useful features.
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-1 md:px-4 py-2 font-bold">
                          5. Automation
                        </td>
                        <td className="border px-1 md:px-4 py-2">
                          Definition: The passage discusses automation in
                          relation to AI tools like ChatGPT, explaining how they
                          assist in tasks such as writing, grading, and
                          feedback, but do not replace human effort entirely.
                        </td>
                        <td className="border px-1 md:px-4 py-2">
                          The increasing automation of writing tasks with AI
                          tools like ChatGPT is changing how students approach
                          academic assignments.
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
                        1. Large Language Models (LLMs)
                      </p>
                      <p className="border-b border-gray-400 p-2 font-bold h-1/5">
                        2. Automated Writing Evaluation (AWE)
                      </p>
                      <p className="border-b border-gray-400 p-2 font-bold h-1/5">
                        3. Human-Computer Interaction (HCI)
                      </p>
                      <p className="border-b border-gray-400 p-2 font-bold h-1/5">
                        4. Trust Calibration
                      </p>
                      <p className="border-b border-gray-400 p-2 font-bold h-1/5">
                        5. Automation
                      </p>
                    </TabsContent>
                    <TabsContent
                      value="column2"
                      className="m-2 p-2 border border-gray-400 rounded h-[1000px]"
                    >
                      <p className="border-b border-gray-400 p-2">
                        Examples - "power applications, such as ChatGPT" and
                        Description - "can change education for the better."
                      </p>
                      <p className="border-b border-gray-400 p-2">
                        Description - The passage explains that AWE technologies
                        help teachers save time in assessing writing, encourage
                        more writing practice, and complement writing
                        instruction.
                      </p>
                      <p className="border-b border-gray-400 p-2">
                        Description – The passage states that one of the final
                        course papers focused on "current Human
                        Factors/Human-Computer Interaction (HF/HCI) challenges,"
                        indicating that HCI is a field related to how humans
                        interact with computer systems.
                      </p>
                      <p className="border-b border-gray-400 p-2">
                        Description – The study explains trust calibration as
                        the process of adjusting students’ confidence in ChatGPT
                        based on its accuracy and reliability. It discusses how
                        students initially doubted ChatGPT but later developed a
                        more balanced trust after recognizing both its strengths
                        and limitations.
                      </p>
                      <p className="border-b border-gray-400 p-2">
                        Definition: The passage discusses automation in relation
                        to AI tools like ChatGPT, explaining how they assist in
                        tasks such as writing, grading, and feedback, but do not
                        replace human effort entirely.
                      </p>
                    </TabsContent>
                    <TabsContent
                      value="column3"
                      className="m-2 p-2 border border-gray-400 rounded h-[500px]"
                    >
                      <p className="border-b border-gray-400 p-2">
                        Researchers are continuously improving LLMs to enhance
                        their ability to generate coherent and contextually
                        relevant responses across various domains.
                      </p>
                      <p className="border-b border-gray-400 p-2">
                        Many educators are incorporating AWE tools into their
                        classroom to provide students with instant feedback and
                        improve their writing skills.
                      </p>
                      <p className="border-b border-gray-400 p-2">
                        Advances in HCI have led to more intuitive user
                        interfaces, making technology more accessible and
                        user-friendly.
                      </p>
                      <p className="border-b border-gray-400 p-2">
                        Trust calibration is important in AI-assisted learning
                        because it helps students balance trusting ChatGPT’s
                        answers and recognizing its useful features.
                      </p>
                      <p className="border-b border-gray-400 p-2">
                        The increasing automation of writing tasks with AI tools
                        like ChatGPT is changing how students approach academic
                        assignments.
                      </p>
                    </TabsContent>
                  </Tabs>
                </div>
                <div className="mb-4 md:mb-8">
                  <h3 className="font-semibold mb-2">
                    C. Supply the missing information below:
                  </h3>
                  <p className="mb-2">
                    <strong>1. Topic of the text:</strong> The topic of the
                    research paper is about the effects of ChatGPT in college
                    level essays, specifically in its implication on the
                    experience of students with and without explicitly saying
                    it’s needed, including its impact on the learning process
                    and educational value. The text also explored how it would
                    be graded, with the instruction that ChatGPT is required, in
                    mind.
                  </p>
                  <p className="mb-2">
                    <strong>2. Writer’s opinion about the text’s topic:</strong>{" "}
                    The researchers conclude that the surrounding body of
                    knowledge about the use of Artificial Intelligence for
                    education is not enough, they battled the idea that “New
                    technological capabilities do not always change human
                    perceptions and performance in expected ways.” The
                    researchers have found the resources about the importance of
                    AI in collaborative academic work to be lacking, and as such
                    have decided to create a research paper that would give a
                    more in depth look at its educational value rather than
                    concluding that it would not be helpful for the growth and
                    enjoyment of students. The researchers have also pointed out
                    the grading systems that have been developed with the rise
                    of Artificial Intelligence and its potential drawbacks.
                  </p>
                  <p className="mb-2">
                    <strong>
                      3. Support for writer’s opinion (e.g., evidence such as
                      facts, testimonies, examples, etc.):
                    </strong>
                  </p>
                  <p className="mb-2">
                    <strong>A.</strong> According to a research done by Shoufan,
                    which is one of the only researches that have tackled the
                    perceptions of students to date which conducted an
                    experiment through coding and theme building, the students
                    have found the tool, ChatGPT, to be helpful and useful for
                    their studies and work.
                  </p>
                  <p className="mb-2">
                    <strong>B.</strong> With the rise of artificial
                    intelligence, so did tools that would aid professors in
                    doing their responsibilities, much like students. But
                    students did not like this. When asked whether they would
                    rather go with a human-based feedback or computer-based
                    feedback for their written works, majority have sided that
                    they would rather prefer human-feedback due to how
                    overwhelming the feedbacks of Artificial intelligence on
                    their work.
                  </p>
                  <p className="mb-2">
                    <strong>C.</strong> New technological capabilities do change
                    the human perceptions, and conversely, affect their
                    performance. Students who have found it useful had improved
                    work, and conversely, students who did not find it useful
                    had a less desirable result when both are tested in the same
                    domain. This is predominant with the research results and
                    findings, specifically the percentage of grades and
                    confidence level of students before and after taking the
                    ChatGPT supported assignment.
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
                      The authors of the article "Student Perceptions of ChatGPT
                      Use in a College Essay Assignment: Implications for
                      Learning, Grading, and Trust in Artificial Intelligence"
                      include Chad C. Tossell, Nathan L. Tenhundfeld, Ali Momen,
                      Katrina Cooley, and Ewart J. de Visser. While the specific
                      credentials of each author are not detailed in the
                      provided excerpts from the article, it is common for
                      authors in academic research, especially in educational
                      technology and human factors, to have advanced degrees
                      (such as Ph.D. or Master's) in relevant fields such as
                      education, psychology, human-computer interaction, or
                      engineering. Given their work involves studying how
                      students interact with AI tools like ChatGPT, they have a
                      keen understanding of both the potential benefits and
                      challenges these technologies pose. Plus, their research
                      is published in a respected academic journal, showing that
                      their findings have been rigorously analyzed and reviewed
                      by other experts. This combination of academic credentials
                      and research experience positions them as trustworthy
                      voices on the subject.
                    </p>
                  </li>
                  <li className="mb-4">
                    <strong>
                      After considering the author’s profession and affiliation,
                      what possible biases the author might have about the
                      topic?
                    </strong>
                    <p>
                      The authors of the study may have biases shaped by their
                      affiliations with institutions like the United States Air
                      Force Academy. Their backgrounds in engineering and
                      behavioral sciences likely lead them to favor technology,
                      focusing on its benefits in education while possibly
                      downplaying its limitations and ethical concerns. Working
                      in a military context may also encourage a preference for
                      structured guidelines on AI usage over more flexible
                      methods. Additionally, their commitment to academic
                      integrity may heighten their awareness of the ethical
                      challenges posed by AI. Overall, their perspectives might
                      overlook broader issues like fairness and accessibility in
                      education, making it important to consider these biases
                      when interpreting their insights on AI's role in
                      education.
                    </p>
                  </li>
                  <li className="mb-4">
                    <strong>
                      What is the purpose of the text, and how does the author
                      accomplish that purpose? What evidence does the author use
                      to support the main idea in the text?
                    </strong>
                    <p>
                      The study explores student perceptions of using ChatGPT in
                      a college essay assignment, focusing on its impact on
                      learning, grading, and trust in AI. Utilizing surveys and
                      open-ended questions, the authors gathered empirical data
                      on student attitudes before and after engaging with
                      ChatGPT. They found that many students initially viewed
                      the AI as a "cheating tool," but their perceptions shifted
                      to seeing it as a valuable collaborative resource for
                      learning. Students expressed a preference for grades to be
                      assigned collaboratively by ChatGPT and instructors rather
                      than solely by the AI. Despite recognizing the potential
                      benefits of ChatGPT, students also felt uneasy about fully
                      relying on it for their work. Overall, the study
                      highlights both the advantages and challenges of
                      integrating AI into higher education, emphasizing the
                      importance of using such tools to enhance learning while
                      maintaining ethical oversight.
                    </p>
                  </li>
                  <li className="mb-4">
                    <strong>
                      What specific idea/information in the text challenges or
                      surprises you? Why?
                    </strong>
                    <p>
                      One surprising finding from the study is how student
                      perceptions of ChatGPT shifted significantly. Initially,
                      many students viewed it as a "cheating tool." However,
                      after using it for their essay assignments, they began to
                      see it as a helpful partner in the learning process. This
                      change highlights how students can develop a deeper
                      understanding of AI's potential when engaged in meaningful
                      learning experiences.
                    </p>
                  </li>
                  <li className="mb-4">
                    <strong>
                      Is the style of writing suitable for the intended
                      audience? Is it too formal or too casual? Why?
                    </strong>
                    <p>
                      The writing style in the document primarily reflects an
                      expository approach, which is suitable for its intended
                      audience of educators, researchers, and students in higher
                      education. The text aims to inform and explain findings
                      about student perceptions of using ChatGPT in educational
                      settings. This style is characterized by clarity and the
                      presentation of facts and evidence, which aligns well with
                      the purpose of academic communication. In addition the
                      formal and objective tone contributes to credibility,
                      essential in scholarly discourse. This formality is
                      necessary to discuss complex subjects like AI in education
                      without bias or personal anecdotes.
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
