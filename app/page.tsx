import type { Metadata } from "next";
import { MemberSection, HeroSection, ServiceSection } from "../components";

export const metadata: Metadata = {
  title: "Welcome | Passionate Heart",
};

const page = () => {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <MemberSection />
    </>
  );
};

export default page;
