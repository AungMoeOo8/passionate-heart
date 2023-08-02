import Image from "next/image";
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

const OutlineItem = ({ item, index }: { item: string; index: number }) => {
  return (
    <li
      key={index}
      className="first:my-8 last:my-8 my-16 ml-6 font-base child-dotted-line relative"
    >
      <div className="absolute top-[2px] left-[-33px] w-5 h-5 flex justify-center items-center text-white text-[12px] bg-black rounded-full">
        <span className="p-1">{index + 1}</span>
      </div>
      <p className="relative text-slate-800">{item}</p>
    </li>
  );
};

export default function Course() {
  return (
    <div className="py-16 ">
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
                href={"/counsellors/Dr. Tin Mar San"}
                className="ml-2 font-semibold text-xl"
              >
                Prof Dr. Tin Mar San
              </Link>

              {/* Boxes */}
              <div className="my-8 flex flex-wrap gap-x-4 gap-y-4 text-white">
                {infomations.map((infomation, index) => (
                  <div
                    key={index}
                    className={`flex flex-col justify-center text-center ${infomation.color} w-fit min-w-[120px] p-4 rounded-lg shadow-xl`}
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
          <div className="mt-16 px-1 max-w-[370px]">
            <p className="font-bold text-2xl">Course Outline</p>
            <ul className="parent-dotted-line relative">
              {outline.map((item, index) => (
                <OutlineItem key={index} item={item} index={index} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
