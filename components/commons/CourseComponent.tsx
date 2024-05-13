import Image from "next/image";
import Link from "next/link";
import { CourseProps } from "../../types";
import { IconClock } from "@tabler/icons-react";

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
      className="first:my-8 last:my-8 my-8 font-base outlines relative"
    >
      <div className="absolute w-[26px] flex justify-center items-center text-base font-bold">
        <span>.</span>
      </div>
      <p className="ml-12 text-slate-800">{item}</p>
    </li>
  );
};

const Outlines = (course: CourseProps) => {
  return (
    <ul className=" relative w-full">
      {course.outlines.map((item, index) => (
        <OutlineItem key={index} item={item} index={index} />
      ))}
    </ul>
  )
}

export default function Course(course: CourseProps) {
  return (
    <>
      <div className="py-16 ">
        <div className="flex justify-between flex-col gap-x-8 md:flex-row">
          <div className=" basis-1/2 ">
            <div className="h-full">
              <div className="sticky top-[88px] sm:top-[152px]">
                <h3 className="text-3xl font-bold py-4  bg-white sm:bg-transparent z-10">
                  {course.title}
                </h3>

                <div className="mb-2">
                  <div className="bg-slate-700 inline text-sm font-light px-2 py-1 rounded text-white">
                    Instructor
                  </div>
                  <Link
                    href={"/counsellors/Dr. Tin Mar San"}
                    className="ml-2 font-semibold text-xl"
                  >
                    {course.instructor}
                  </Link>
                </div>

                {
                  course.gustLecturer ? (
                    <div>
                      <div className="bg-slate-700 inline text-sm font-light px-2 py-1 rounded text-white">
                        Gust Lecturer
                      </div>
                      <div
                        className="ml-2 font-semibold text-xl inline"
                      >
                        {course.gustLecturer}
                      </div>
                    </div>
                  ) : null
                }

                {/* Boxes */}
                <div className="mt-4 mb-8 flex flex-wrap gap-x-4 gap-y-4">
                  <div
                    className={`flex items-center`}
                  >
                    <IconClock size={28}/>
                    <span className="ml-2 text-slate-800 font-semibold">{course.duration}</span>
                  </div>
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
              {/* <ul className="parent-dotted-line relative">
                {course.outlines.map((item, index) => (
                  <OutlineItem key={index} item={item} index={index} />
                ))}
              </ul> */}
              <Outlines {...course} />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
