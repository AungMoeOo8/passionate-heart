import { Metadata } from "next";
import { ServiceCard } from "../../components";
import { services } from "../../staticData";
import React from "react";
import Image from "next/image";
import { getServices } from "../../services/wordpress/service.service";

export const metadata: Metadata = {
  title: "Services",
  description:
    "We are dedicated to providing a safe environment where you can explore your feelings and receive support for various mental health challenges.",
  alternates: {
    canonical: "/services",
  },
};

const psychologistServices = [
  { title: "Counselling", fee: 50000 },
  { title: "Trauma Counselling", fee: 60000 },
  { title: "EMDR Therapy", fee: 70000 },
];

export default async function Page() {
  const { data } = await getServices();


  return (
    <div className="container-sm">
      <ul className="my-12 flex flex-col gap-12">
        {data.map((service, index) => (
          <li key={index}>
            <ServiceCard {...service} />
          </li>
        ))}
      </ul>
    </div>
  );
}

{
  /* <div className="mt-8 bg-cyan-800 p-8 rounded-lg">
        
        </div> */
}

{
  /* <p className="text-3xl font-bold text-white">
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
              <div className=" backdrop-blur-0 text-white">
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
        <ServiceCard {...services[3]} className="mt-8 mb-16" /> */
}
