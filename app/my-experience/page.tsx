import Image from "next/image";
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
            <SidebarDemo />
            <div className="animate-appearFromCenter text-white xl:mx-auto xl:my-8 md:mx-32 mx-2 my-4 mt-10 p-2 md:p-4 xl:w-full xl:h-full overflow-y-auto bg-gradient-to-t from-[#133B5C]/50 to-[#FFA6AF]/50">
              <h1 className="text-xl md:text-4xl font-bold mb-4 md:mb-8 text-center">
                Beyond Words: A Journey of Growth and Confidence
              </h1>
              <div className="text-sm md:text-lg mb-4 md:mb-8 bg-white bg-opacity-20 p-4 rounded-lg shadow-md">
                <p>
                  Often you wonder what your knowledge back in high school was
                  for when eventually you’ll only tackle less than half of that
                  once you enter college. Often people only give importance on
                  Science and Mathematics. But well, I am the same, they are the
                  only ones that matters right? Technically yes, but there’s one
                  more undermined area of expertise that every professional know
                  and understand, yet they only understand it by heart, but not
                  what it really is. And to be honest, I was like that too,
                  until GED0001 (Specialized English Program 1) of FEU Tech came
                  into my life, specifically having sir Allan Salanguste as my
                  professor for this wonderful course. This subject not only
                  changed my view of this area of expertise, but it also gave me
                  valuable things that I will forever treasure. It’s strange,
                  really, how something I used to overlook turned out to be this
                  significant. The way words are used, the way they shape
                  meaning—it’s something I never thought deeply about before.
                  But now, I see how crucial it is, not just in academics, but
                  in life itself. This is not only a paper that showcases my
                  journey in this course, but also of my own character
                  development.
                </p>
              </div>{" "}
              <div className="text-sm md:text-lg mb-4 md:mb-8 bg-white bg-opacity-20 p-4 rounded-lg shadow-md">
                <p>
                  First few weeks at the subject. It was really nerve-wracking.
                  For one, I was separated from my previous block last semester
                  and I knew no one, like absolutely no one, and what I thought
                  of this subject was that it would be heavy on collaborations
                  as I saw that it tackles research. I really thought we would
                  make a research paper on this subject and that made me super
                  nervous. How can I form a close enough bond with my blockmates
                  that I barely knew so we could have proper synchronization
                  when doing our research paper? That aside, there’s more
                  pressing matters like my problem with my stutters. This has
                  been with me since I was in elementary and it has been my
                  biggest complex and the reason I try to avoid taking
                  leadership roles. I wondered if I can survive in this
                  environment, I probably won’t, but I’ll still try to do my
                  best… and BANG! My expectations was without a doubt, broken.
                  It turns out, this subject wasn’t as terrifying as I thought.
                  I was just overthinking things, that’s for sure.
                </p>
              </div>{" "}
              <div className="text-sm md:text-lg mb-4 md:mb-8 bg-white bg-opacity-20 p-4 rounded-lg shadow-md">
                <p>
                  They say that a person’s expectation is determined by his
                  experience, and I wholeheartedly agree, until I first set foot
                  into this class. With my previous semester being so
                  disappointing considering how our teachers turned out to be, I
                  did not expect much for this semester as well. I figured,
                  “Well, if that’s the quality they can provide for first-year
                  first-semester students, what is there to expect more from
                  them?” Since to be fair, everyone knows that universities are
                  also a form of business. They want to keep you invested onto
                  them, that’s why the first few weeks/months should be the most
                  important timeframe for them to work on that. They give the
                  best service when you’re new to hook you in, yet we only got
                  disappointed. Is that truly their best? But I never expected
                  that our professors for this subject would not only be better
                  than them, but he would also be, in my opinion, a force to be
                  reckoned with. He was different from the ones we had before.
                  It was surprising, in a good way.
                </p>
              </div>{" "}
              <div className="text-sm md:text-lg mb-4 md:mb-8 bg-white bg-opacity-20 p-4 rounded-lg shadow-md">
                <p>
                  My complex is something that I cannot get over with even to
                  this date, but my professor in this subject really helped me
                  remedy this to some extent. My stuttering affects my
                  confidence, and sir Allan helped me to somewhat regain
                  confidence in myself. He did this by allowing me to express my
                  thoughts in class with proper guidance and words of
                  encouragement. It wasn’t easy at first, since I always
                  hesitated to speak. I was scared that I would mess up and
                  embarrass myself in front of everyone. But somehow, sir Allan
                  made it feel less terrifying. He never rushed me or made me
                  feel ashamed when I struggled to get my words out. Instead, he
                  listened patiently and gave me time to gather my thoughts.
                  Little by little, I found myself speaking more in class. Even
                  though my stuttering hasn’t disappeared, I now have the
                  courage to speak despite it. And that, for me, is already a
                  big improvement.
                </p>
              </div>{" "}
              <div className="text-sm md:text-lg mb-4 md:mb-8 bg-white bg-opacity-20 p-4 rounded-lg shadow-md">
                <p>
                  Looking back, I never expected this subject to change me this
                  much. I thought it would just be another requirement to get
                  over with, nothing more, nothing less. But I was wrong—way
                  wrong. From the first day, when I entered the class with zero
                  expectations, to now, where I can confidently say I gained
                  more than just knowledge, but also growth, this journey has
                  been surprising. It’s not just about learning English or
                  improving writing skills, but about understanding myself
                  better. Sir Allan, without a doubt, played a big role in that.
                  He pushed me to break free from my insecurities, even just a
                  little, and I know that’s something I’ll carry with me moving
                  forward. My stuttering is still here, my fears haven’t
                  completely vanished, but at least now, I have the courage to
                  try. And sometimes, that’s all that really matters. This
                  subject wasn’t just about lessons in books—it was a lesson
                  about myself. And for that, I’ll always be grateful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
