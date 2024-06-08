import { Metadata } from "next";
import { ServiceCard } from "../../components";
import { servicesData } from "../../staticData";
import React from "react";
import { cn } from "../../util";
import { IconClock } from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Services",
};

function Card({ children, className, ...props }: React.HtmlHTMLAttributes<HTMLDivElement>) {
  const merged = cn("", className)
  return (
    <div className={merged} {...props}>
      {children}
    </div>
  )
}

const psychologistServices = [
  { title: "Counselling", fee: 50000 },
  { title: "Trauma Counselling", fee: 60000 },
  { title: "EMDR Therapy", fee: 70000 }
]

export default function Page() {
  return (
    <div className="container-sm">
      <div>
        <p className="text-3xl font-bold mt-8">Psychologist & EMDR Therapist</p>

        <div className=" mt-8 mb-20 w-full flex flex-col sm:flex-row justify-evenly gap-4">
          {
            psychologistServices.map((service, index) => (
              <div key={index} className="border custom-shadow rounded-lg p-8 ">
                <div className="text-center text-2xl font-bold mb-8">{service.title}</div>
                <div className="text-center font-semibold">Online</div>
                <div className="text-center font-semibold">{service.fee} MMK</div>
                <div className="font-semibold flex justify-center items-center gap-x-1"><IconClock strokeWidth={1.75} />50 Minutes</div>
              </div>
            ))
          }
        </div>

        <ServiceCard {...servicesData[4]} className="my-16" />
      </div>

      <div className="mt-16">
        <p className="text-3xl font-bold mb-8">Trauma Counsellor</p>
        <ServiceCard {...servicesData[0]} />
      </div>

      <div className="mt-16">
        <p className="text-3xl font-bold mb-8">Psychiatrist</p>
        <ServiceCard {...servicesData[2]} />
      </div>

      <div className=" mt-16">
        <p className="text-3xl font-bold">Lay Counsellor</p>
        <ServiceCard {...servicesData[3]} className="mt-8 mb-16" />
      </div>

    </div>
  );
}


{/* <ul>
  {servicesData.map((service, index) => (
    <ServiceCard key={index} {...service} />
  ))}
</ul> */}