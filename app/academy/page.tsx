import Image from "next/image";
import Head from "next/head";
import { CourseComponent } from "../../components";
import { Metadata } from "next";
import coursesData from "../../staticData/coursesData";

export const metadata: Metadata = {
  title: "Academy",
};

export default function Page() {
  return (
    <>
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
              style={{ height: "auto" }}
              src="/images/ph-academy-logo.png"
            />
          </div>
        </div>
        <div className="">
          <div className="container-sm ">
            {
              coursesData.map((course, index) => <CourseComponent course={course} index={index} />)
            }
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
