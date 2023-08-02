import { Metadata } from "next";
import { ServiceCard } from "../../components";
import { servicesData } from "../../staticData";

export const metadata: Metadata = {
  title: "Services",
};

export default function Page() {
  return (
    <>
      <div className="container-sm">
        <p className="text-3xl font-bold mt-8 mb-14">We offer these services</p>
        <ul>
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </ul>
      </div>
    </>
  );
}
