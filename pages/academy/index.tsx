import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const outline = [
  "What is PFA and Why is PFA needed?",
  "How to apply PFA?",
  "The concept of counselling",
  "Basic Interpersonal Communication",
  "The Role of Counsellor",
  "Self-Awareness and Emotion management",
];

function Course() {
  return (
    <div className="py-16">
      <div className="flex justify-between flex-col gap-x-8 md:flex-row">
        <div className=" basis-1/2 ">
          <div className="h-3/4">
            <div className="sticky top-[88px] sm:top-[152px]">
              <h3 className="text-2xl font-semibold py-4  bg-white sm:bg-transparent z-10">
                Foundation Course In Counselling
              </h3>

              <div className="bg-slate-500 inline text-sm px-2 py-1 rounded text-white">
                Instructor
              </div>
              <Link
                href={"/counselors/Dr. Tin Mar San"}
                className="ml-2 font-semibold text-md"
              >
                Prof Dr. Tin Mar San
              </Link>
              <div className="my-4 flex flex-wrap gap-x-4 gap-y-4">
                <div className="flex flex-col justify-center text-center bg-green-700 text-white w-min min-w-[120px] p-4 rounded-lg">
                  <span>Fees</span>
                  <span>150,000 MMK</span>
                </div>
                <div className="flex flex-col justify-center text-center bg-yellow-600 text-white w-min min-w-[120px] p-4 rounded-lg">
                  <span>Duration</span>
                  <span>5 Weeks</span>
                </div>
                <div className="flex flex-col grow justify-center text-center bg-purple-800 text-white w-min min-w-[120px] p-4 rounded-lg">
                  <span>Time</span>
                  <span>Every Sat and Sun ( 7pm to 9pm )</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="basis-1/2 flex justify-center sm:justify-end">
          <div className="mt-16">
            <p className="font-semibold text-2xl">Course Outline</p>
            <ul className="parent-dotted-line relative">
              {outline.map((item, index) => (
                <li
                  key={index}
                  className="first:my-8 last:my-8 my-16 ml-8 font-base child-dotted-line relative"
                >
                  <p className="relative">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Academy() {
  return (
    <>
      <Head>
        <title>Passionate Heart | Academy</title>
      </Head>
      <div>
        <div className="container-sm pb-16 flex items-center flex-col-reverse md:flex-row">
          <div className="flex-[50%]">
            <p className="font-bold text-4xl text-center md:text-start">
              Passionate Heart Academy
            </p>
            <p className="md:w-[70%] text-[20px] opacity-80 my-[25px] text-center md:text-start">
              We aim to offer systematic and qualified psychology and mental
              health courses.
            </p>
          </div>
          <div className="flex-[50%] flex justify-end">
            <Image
              priority
              alt="academy logo"
              width={500}
              height={500}
              src="/images/ph-academy-logo.png"
            />
          </div>
        </div>
        <div>
          <div className="container-sm ">
            <Course />
            <Course />
          </div>
        </div>
      </div>
    </>
  );
}
