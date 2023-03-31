import Image from "next/image";
import Head from "next/head";

const outline = [
  "What is PFA and Why is PFA needed?",
  "How to apply PFA?",
  "The concept of counselling",
  "Basic Interpersonal Communication",
  "The Role of Counsellor",
  "Self-Awareness and Emotion management",
];

export default function Academy() {
  return (
    <>
      <Head>
        <title>Passionate Heart | Academy</title>
      </Head>
      <div>
        <div className="container-sm flex items-center flex-col-reverse md:flex-row">
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
          <div className="container-sm py-8">
            <h3 className="text-2xl font-semibold">
              Foundation Course In Counselling
            </h3>
            <div className="my-4">
              <div className="bg-slate-500 inline text-sm px-2 py-1 rounded text-white">
                Instructor
              </div>
              <span className="ml-2 font-semibold text-md">
                Prof Dr. Tin Mar San
              </span>
            </div>
            <div>
              <p className="font-semibold text-lg">Course Outline</p>
              <ul className=" my-4 list-disc list-inside">
                {outline.map((item, index) => (
                  <li key={index} className="my-2 font-base">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
