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

const infomations = [
  { title: "Fees", value: "150,000 MMK", color: "bg-teal-500" },
  { title: "Duration", value: "5 Weeks", color: "bg-amber-500" },
  {
    title: "Time",
    value: "Every Sat and Sun ( 7pm to 9pm )",
    color: "bg-fuchsia-500",
  },
];

function Course() {
  return (
    <div className="py-16">
      <div className="flex justify-between flex-col gap-x-8 md:flex-row">
        <div className=" basis-1/2 ">
          <div className="h-full">
            <div className="sticky top-[88px] sm:top-[152px]">
              <h3 className="text-3xl font-bold py-4  bg-white sm:bg-transparent z-10">
                Foundation Course In Counselling
              </h3>

              <div className="bg-slate-700 inline text-sm font-light px-2 py-1 rounded text-white">
                Instructor
              </div>
              <Link
                href={"/counselors/Dr. Tin Mar San"}
                className="ml-2 font-semibold text-xl"
              >
                Prof Dr. Tin Mar San
              </Link>

              {/* Boxes */}
              <div className="my-8 flex flex-wrap gap-x-4 gap-y-4 text-white">
                {infomations.map((infomation, index) => (
                  <div
                    key={index}
                    className={`flex flex-col justify-center text-center ${infomation.color} w-fit min-w-[120px] p-4 rounded-lg`}
                  >
                    <span className="font-semibold">{infomation.title}</span>
                    <span className="text-sm">{infomation.value}</span>
                  </div>
                ))}
              </div>
              {/* Boxes End */}

              <div className="inline-flex flex-col items-center gap-y-2">
                <Image
                  priority
                  alt="zoom logo"
                  width={40}
                  height={40}
                  src={"/images/Zoom-Icon.png"}
                />
                <p className="text-lg">
                  Via <span className="text-xl font-bold">Zoom</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="basis-1/2 flex justify-center sm:justify-end">
          <div className="mt-16">
            <p className="font-bold text-2xl">Course Outline</p>
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
      <div className="relative">
        <div className=" container-sm pb-16 flex items-center flex-col-reverse md:flex-row">
          <div className="flex-[50%]">
            <p className="font-bold text-4xl lg:text-5xl text-center md:text-start">
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
        <div className="">
          <div className="container-sm ">
            <Course />
            <Course />
          </div>
        </div>

        {/* background glasses */}
        <div className="glass glass-lg type-2 animated top-[100px] right-[42%] rotate-[10deg] hidden md:block"></div>
        <div className="glass glass-sm type-2 animated top-[70px] right-[70%] rotate-[344deg]"></div>

        <div className="glass glass-sm type-2 animated top-[204px] lg:right-[81%] rotate-[155deg] hidden lg:block"></div>
        <div className="glass glass-sm type-2 animated top-[400px] left-[25.5%] rotate-[30deg]"></div>

        <div className="glass glass-lg type-1 third top-[400px] left-[78%]"></div>
        {/*  */}
      </div>
    </>
  );
}
