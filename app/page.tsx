import type { Metadata } from "next";
import { CounsellorSection, HeroSection, ServiceSection } from "../components";

export const metadata: Metadata = {
  title: "Welcome | Passionate Heart",
};

const page = () => {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <CounsellorSection />
    </>
  );
};

export default page;
