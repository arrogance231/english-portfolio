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
        <div className="absolute inset-0 flex flex-col xl:px-[100px]">
          <SidebarDemo />
          <div className="animate-appearFromCenter text-white xl:mx-auto xl:my-8 md:mx-32 mx-5 my-4 p-8 rounded-xl md:p-8 xl:w-full xl:h-full overflow-y-auto animate-gradient bg-gradient-to-t from-[#133B5C]/50 to-[#FFA6AF]/50">
            <h1 className="text-4xl font-bold mb-8">
              Reading Process Worksheet 1
            </h1>
            <div className="grid h-full w-full rounded-x">
              <section className="mb-8">
                <h2 className="text-8xl font-semibold mb-4">Pre-Reading</h2>
                <h3 className="my-10">
                  A. Complete the table with the headings, subheadings, and
                  visual titles/descriptions from the text. Provide at least 2
                  entries for each column.
                </h3>
                <table className="table-auto w-full mb-8">
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2 text-center">Headings</td>
                      <td className="border px-4 py-2 text-center">
                        Subheadings
                      </td>
                      <td className="border px-4 py-2 text-center">Visuals</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Row 2, Col 1</td>
                      <td className="border px-4 py-2">Row 2, Col 2</td>
                      <td className="border px-4 py-2">Row 2, Col 3</td>
                    </tr>
                  </tbody>
                </table>
                <h3>
                  B. Fill the table with information that you already know about
                  the topic (K), you wonder about the topic (W), and you will
                  learn after reading the text (L). Fill the L Column after
                  reading the text. Provide at least 2 entries for each column.{" "}
                </h3>
                <table className="table-auto w-full mb-8">
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2 text-center">K (Know)</td>
                      <td className="border px-4 py-2 text-center">
                        W (Wonder)
                      </td>
                      <td className="border px-4 py-2 text-center">
                        L (Learn)
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Row 2, Col 1</td>
                      <td className="border px-4 py-2">Row 2, Col 2</td>
                      <td className="border px-4 py-2">Row 2, Col 3</td>
                    </tr>
                  </tbody>
                </table>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Reading</h2>
                <table className="table-auto w-full mb-8">
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2 text-center">Column 1</td>
                      <td className="border px-4 py-2 text-center">Column 2</td>
                      <td className="border px-4 py-2 text-center">Column 3</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Row 2, Col 1</td>
                      <td className="border px-4 py-2">Row 2, Col 2</td>
                      <td className="border px-4 py-2">Row 2, Col 3</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Row 3, Col 1</td>
                      <td className="border px-4 py-2">Row 3, Col 2</td>
                      <td className="border px-4 py-2">Row 3, Col 3</td>
                    </tr>
                  </tbody>
                </table>
                <table className="table-auto w-full mb-8">
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2 text-center">Column 1</td>
                      <td className="border px-4 py-2 text-center">Column 2</td>
                      <td className="border px-4 py-2 text-center">Column 3</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Row 2, Col 1</td>
                      <td className="border px-4 py-2">Row 2, Col 2</td>
                      <td className="border px-4 py-2">Row 2, Col 3</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Row 3, Col 1</td>
                      <td className="border px-4 py-2">Row 3, Col 2</td>
                      <td className="border px-4 py-2">Row 3, Col 3</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Row 4, Col 1</td>
                      <td className="border px-4 py-2">Row 4, Col 2</td>
                      <td className="border px-4 py-2">Row 4, Col 3</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Row 5, Col 1</td>
                      <td className="border px-4 py-2">Row 5, Col 2</td>
                      <td className="border px-4 py-2">Row 5, Col 3</td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-4">Post-Reading</h2>
                <p>Content for Post-Reading section...</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
