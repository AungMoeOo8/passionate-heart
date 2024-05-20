import type { Metadata } from "next";
import { ProfessionalSection, HeroSection, ServiceSection } from "../components";

export const metadata: Metadata = {
  title: "Welcome | Passionate Heart",
};

const page = () => {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <ProfessionalSection />
    </>
  );
};

export default page;
