import { Metadata } from "next";
import React from "react";
import { ServiceResponse } from "../../services/wordpress/service.service";
import { cn } from "../../util";
import Image from "next/image";
import { services as staticServices } from "../../staticData";

export const metadata: Metadata = {
  title: "Services",
  description:
    "We are dedicated to providing a safe environment where you can explore your feelings and receive support for various mental health challenges.",
  alternates: {
    canonical: "/services",
  },
};

function ServiceCard({
  id,
  name,
  provider,
  description,
  fees,
  ending,
  className,
}: ServiceResponse & { className?: string }) {
  return (
    <div>
      <div className="text-3xl font-bold mb-8">{provider}</div>
      <div
        className={cn(
          "w-full rounded-lg shadow-custom relative bg-cyan-800",
          className
        )}
      >
        <div className="text-sm font-normal rounded-lg py-2 px-4 inline absolute top-[-20px] left-[16px] bg-cyan-800 text-white">
          {name}
        </div>
        <div className="flex flex-col md:flex-row gap-x-3">
          <div className="flex-[65%] px-4 py-8 bg-white rounded-[18px]">
            <p className=" whitespace-pre-wrap text-sm sm:text-[15px] leading-6">
              {description}
            </p>
            <p className="text-sm leading-6 mt-8">{ending}</p>
          </div>

          <div className="flex-[35%] text-white px-4 py-8">
            {fees.map((fee, index) => (
              <div key={index} className="leading-6 even:py-2">
                <span className="text-sm font-semibold">{fee.type}</span> -{" "}
                <span className="text-sm">
                  {Intl.NumberFormat().format(fee.amount!)} MMK
                </span>
                {fee.description && (
                  <span className="text-sm block font-light py-1">
                    {fee.description}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const psychologistServices = [
  { title: "Counselling", fee: 50000 },
  { title: "Trauma Counselling", fee: 60000 },
  { title: "EMDR Therapy", fee: 70000 },
];

export default async function Page() {
  // const services = await getServices();

  const services = staticServices;

  return (
    <div className="container-sm">
      <div className="mt-8 bg-cyan-800 p-8 rounded-lg">
        <p className="text-3xl font-bold text-white">
          Psychologist & EMDR Therapist
        </p>

        <div className=" my-8 w-full grid grid-cols-1 md:grid-cols-3 justify-evenly gap-4">
          {psychologistServices.map((service, index) => (
            <div
              key={index}
              className="relative rounded-lg px-8 py-8 bg-white overflow-hidden"
            >
              <Image
                fill
                className=" brightness-[40%] object-cover bg-[#6d6d6d]"
                src={"/images/passionate-heart-logo.png"}
                alt="bg"
              />
              <div className=" backdrop-blur-xs text-white">
                <div className="text-2xl font-bold mb-8">{service.title}</div>
                <div className="font-medium">Online</div>
                <div className="font-medium">50 Minutes</div>
                <div className="font-medium">
                  {Intl.NumberFormat().format(service.fee)} MMK
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-white text-sm">
          Counselling Service များကို Facebook Messenger သို့
          ဆက်သွယ်၍ရယူနိင်ပါတယ်။
        </p>
      </div>
      <ServiceCard {...services[4]} className="my-16" />

      <div className="mt-16">
        <p className="text-3xl font-bold mb-8">Trauma Counsellor</p>
        <ServiceCard {...services[0]} />
      </div>

      <div className="mt-16">
        <p className="text-3xl font-bold mb-8">Psychiatrist</p>
        <ServiceCard {...services[2]} />
      </div>

      <div className=" mt-16">
        <p className="text-3xl font-bold">
          Counsellor & Mental Health Practitioner
        </p>
        <ServiceCard {...services[3]} className="mt-8 mb-16" />
      </div>
    </div >
  );
}

{/* <ul className="my-12 flex flex-col gap-12">
        {services.map((service, index) => (
          <li key={index}>
            <ServiceCard {...service} />
          </li>
        ))}
      </ul> */}

{
  /* <div className="mt-8 bg-cyan-800 p-8 rounded-lg">
        
        </div> */
}

