import { SidebarDemo } from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen w-screen flex overflow-hidden">
      <Image
        src="/bg.svg"
        alt="bg"
        layout="fill"
        objectFit="cover"
        className="absolute h-full w-full"
      />
      <div className="relative h-full w-full overflow-hidden">
        <div className="absolute inset-0 flex flex-col xl:px-[100px] px-4">
          <SidebarDemo />
          <div className="animate-appearFromCenter text-white xl:mx-auto xl:my-8 md:mx-32 mx-5 my-4 p-4 md:p-8 xl:w-full xl:h-full overflow-y-auto bg-gradient-to-t from-[#133B5C]/50 to-[#FFA6AF]/50">
            <h1 className="text-2xl md:text-4xl font-bold mb-8">
              Reading Process Worksheet 1
            </h1>
            <div className="grid h-full w-full rounded-x">
              <section className="mb-8">
                <h2 className="text-2xl md:text-4xl font-semibold mb-4">
                  Pre-Reading
                </h2>
                <h3 className="my-10">
                  A. Complete the table with the headings, subheadings, and
                  visual titles/descriptions from the text. Provide at least 2
                  entries for each column.
                </h3>
                <div className="overflow-x-auto">
                  <table className="table-auto w-full mb-8">
                    <tbody>
                      <tr>
                        <td className="border px-2 md:px-4 py-2 text-center w-1/3">
                          Headings
                        </td>
                        <td className="border px-2 md:px-4 py-2 text-center w-1/3">
                          Subheadings
                        </td>
                        <td className="border px-2 md:px-4 py-2 text-center w-1/3">
                          Visuals
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-2 md:px-4 py-2 w-1/3">
                          Are We Too Dependent on Technology
                        </td>
                        <td className="border px-2 md:px-4 py-2 w-1/3">
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
                        <td className="border px-2 md:px-4 py-2 w-1/3">
                          ● A cognitive map that is evident on an MRI scan – in
                          an enlarged part of the brain called the hippocampus.,
                          <br />
                          ● A graph showing the rate as to how much a person has
                          their memory retention decreases as time passes by
                          while they are being trained.,
                          <br />
                          ● An image saying that 31 percent of consumers believe
                          that we will have to go to “mind gyms” to practice
                          thinking.,
                          <br />● An image showing a scene where the surgery of
                          a person is being done, while with supervision of a
                          human, by robotic arms.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3>
                  B. Fill the table with information that you already know about
                  the topic (K), you wonder about the topic (W), and you will
                  learn after reading the text (L). Fill the L Column after
                  reading the text. Provide at least 2 entries for each column.{" "}
                </h3>
                <div className="overflow-x-auto">
                  <table className="table-auto w-full mb-8">
                    <tbody>
                      <tr>
                        <td className="border px-2 md:px-4 py-2 text-center w-1/3">
                          K (Know)
                        </td>
                        <td className="border px-2 md:px-4 py-2 text-center w-1/3">
                          W (Wonder)
                        </td>
                        <td className="border px-2 md:px-4 py-2 text-center w-1/3">
                          L (Learn)
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-2 md:px-4 py-2">
                          We are too dependent on technology
                        </td>
                        <td className="border px-2 md:px-4 py-2">
                          ● Are we, by any chance, not too dependent on
                          technology?,
                          <br />● How will we stop becoming too dependent on
                          technology?
                        </td>
                        <td className="border px-2 md:px-4 py-2">
                          Row 2, Col 3
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl md:text-4xl font-semibold mb-4">
                  Reading
                </h2>
                <div className="overflow-x-auto">
                  <table className="table-auto w-full mb-8">
                    <tbody>
                      <tr>
                        <td className="border px-2 md:px-4 py-2 text-center">
                          Column 1
                        </td>
                        <td className="border px-2 md:px-4 py-2 text-center">
                          Column 2
                        </td>
                        <td className="border px-2 md:px-4 py-2 text-center">
                          Column 3
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-2 md:px-4 py-2">
                          Row 2, Col 1
                        </td>
                        <td className="border px-2 md:px-4 py-2">
                          Row 2, Col 2
                        </td>
                        <td className="border px-2 md:px-4 py-2">
                          Row 2, Col 3
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-2 md:px-4 py-2">
                          Row 3, Col 1
                        </td>
                        <td className="border px-2 md:px-4 py-2">
                          Row 3, Col 2
                        </td>
                        <td className="border px-2 md:px-4 py-2">
                          Row 3, Col 3
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="overflow-x-auto">
                  <table className="table-auto w-full mb-8">
                    <tbody>
                      <tr>
                        <td className="border px-2 md:px-4 py-2 text-center">
                          Column 1
                        </td>
                        <td className="border px-2 md:px-4 py-2 text-center">
                          Column 2
                        </td>
                        <td className="border px-2 md:px-4 py-2 text-center">
                          Column 3
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-2 md:px-4 py-2">
                          Row 2, Col 1
                        </td>
                        <td className="border px-2 md:px-4 py-2">
                          Row 2, Col 2
                        </td>
                        <td className="border px-2 md:px-4 py-2">
                          Row 2, Col 3
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-2 md:px-4 py-2">
                          Row 3, Col 1
                        </td>
                        <td className="border px-2 md:px-4 py-2">
                          Row 3, Col 2
                        </td>
                        <td className="border px-2 md:px-4 py-2">
                          Row 3, Col 3
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-2 md:px-4 py-2">
                          Row 4, Col 1
                        </td>
                        <td className="border px-2 md:px-4 py-2">
                          Row 4, Col 2
                        </td>
                        <td className="border px-2 md:px-4 py-2">
                          Row 4, Col 3
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-2 md:px-4 py-2">
                          Row 5, Col 1
                        </td>
                        <td className="border px-2 md:px-4 py-2">
                          Row 5, Col 2
                        </td>
                        <td className="border px-2 md:px-4 py-2">
                          Row 5, Col 3
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              <section>
                <h2 className="text-2xl md:text-4xl font-semibold mb-4">
                  Post-Reading
                </h2>
                <p>Content for Post-Reading section...</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
