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
  { title: "Counselling", fee: 40000 },
  { title: "Trauma Counselling", fee: 40000 },
  { title: "EMDR Therapy", fee: 40000 }
]

export default function Page() {
  return (
    <div className="container-sm">
      <div>
        <p className="text-3xl font-bold my-8">Psychologist & EMDR Therapist</p>
        <Card className="bg-white rounded-[18px] custom-shadow px-4 py-8">
          <div className=" w-full flex flex-col sm:flex-row justify-evenly gap-8">
            {
              psychologistServices.map((service, index) => (
                <div key={index}>
                  <div className="text-center text-2xl font-bold">{service.title}</div>
                  <div className="text-center font-semibold mt-2">Online</div>
                  <div className="text-center font-semibold">{service.fee} MMK</div>
                  <div className="font-semibold flex justify-center items-center gap-x-1"><IconClock strokeWidth={1.75}/>50 Minutes</div>
                </div>
              ))
            }
          </div>
        </Card>
        <ServiceCard {...servicesData[4]} className="my-16"/>
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
        <ServiceCard {...servicesData[3]} className="mt-8 mb-16"/>
      </div>

    </div>
  );
}


{/* <ul>
  {servicesData.map((service, index) => (
    <ServiceCard key={index} {...service} />
  ))}
</ul> */}