import type { Metadata } from "next";
import {
  ServiceComponent,
  ProfessionalCard,
} from "../components";
import Link from "next/link";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { professionals } from "../staticData";

type ServicesProps = {
  image: string;
  title: string;
  description: string;
};

const brainSVG = "/images/trauma_counselling.jpg";

const services: ServicesProps[] = [
  {
    image: brainSVG,
    title: "Trauma Counselling",
    description: `Trauma counseling is designed to help individuals cope with and recover from the effects of traumatic experiences. Trauma can refer to a wide range of events, including physical, emotional, or sexual abuse, natural disasters, accidents, or other life-threatening situations.`,
  },
  {
    image: "/images/EMDR_Therapy.jpg",
    title: "Eye Movement Desensitization and Reprocessing (EMDR Therapy)",
    description: `EMDR therapy is a form of psychotherapy that aims to help individuals recover from the effects of traumatic experiences. It is used to treat a wide range of mental health conditions, including post-traumatic stress disorder (PTSD), anxiety, depression, and phobias.`,
  },
  {
    image: "/images/psychiatrist_consultation.jpg",
    title: "Psychiatrist Consultation",
    description: `Psychiatrist consultations are often recommended for individuals experiencing significant mental health symptoms, such as depression, anxiety, bipolar disorder, or schizophrenia. During the consultation, the psychiatrist will typically conduct a comprehensive psychiatric evaluation, which may include a review of the person's medical history, mental health history, and current symptoms. They may also conduct a physical examination and order additional tests or screenings if needed.`,
  },
];

const professionalsSlice = professionals.slice(0, 4);

export const metadata: Metadata = {
  title: "Welcome | Passionate Heart",
};

const page = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="container-sm py-[100px] ">
          <div className="basis-6/12 flex flex-col justify-center">
            <h2
              className={`text-[#155e75] font-libre font-bold text-[40px] md:text-[60px] text-start z-10 md:w-[50%] md:text-center`}
            >
              WE ARE HERE FOR YOU
            </h2>
            <div className="md:h-[100px]"></div>
            <p className="text-[20px] opacity-70 md:text-[32px] font-medium text-end mt-[30px] leading-[30px] md:leading-[50px] max-w-[554px] self-end z-10">
              We are passionate to offer assured, trusted, affordable counseling
              services, pyschological tests, and assessment services.
            </p>
          </div>

          <div className="glass glass-lg type-2 animated top-[100px] right-[31%] rotate-[10deg] hidden md:block"></div>
          <div className="glass glass-sm type-2 animated top-[220px] right-[25.5%] rotate-[344deg] hidden md:block"></div>

          <div className="glass glass-sm type-2 animated top-[204px] right-[1520px] rotate-[155deg]"></div>
          <div className="glass glass-sm type-2 animated top-[400px] left-[25.5%] rotate-[30deg]"></div>

          <div className="glass glass-lg type-1 third left-[78%]"></div>
        </div>
      </section>

      {/* Service Section */}
      <section className="">
        <div id="services" className="container-sm mt-[0] z-50 py-[100px]">
          <div className="flex flex-col gap-[66px]">
            {services.map((service, index) => (
              <ServiceComponent
                key={index}
                reverse={index % 2 != 0 ? true : false}
                image={service.image}
                text={
                  <div className="p-5 sm:p-6">
                    <span className="inline-block mb-[10px] text-2xl font-semibold">
                      {service.title}
                    </span>
                    <p className="text-[14px] opacity-70">
                      {service.description}
                    </p>
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Professionals Section */}
      <section className="">
      <div className="container-sm mt-[0] py-[100px] z-50 ">
        <div id="counsellors">
          <div className="flex justify-center">
            <p className="text-center text-4xl font-bold">Mental Health Professionals</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-[20px] mt-[50px]">
            {professionalsSlice.map((professional, index) => (
              <div key={index} className="flex justify-center rounded-[10px]">
                <ProfessionalCard
                  image={professional.image}
                  name={professional.name}
                  bio={professional.bio}
                  roles={professional.roles}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-[50px]">
            <Link href={"/professionals"} passHref>
              <div className=" text-[0.9rem] px-4 py-2 rounded-sm cursor-pointer hover:-translate-y-2 transition-all duration-300 flex items-center gap-1 border custom-shadow">
                <span className="font-medium">See More</span>
                <IconArrowNarrowRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default page;
