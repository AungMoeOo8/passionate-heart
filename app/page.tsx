import type { Metadata, NextPage } from "next";
import Head from "next/head";
import { CounsellorSection, HeroSection, ServiceSection } from "../components";

export const metadata: Metadata = {
  title: "Welcome | Passionate Heart",
};

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <CounsellorSection />
    </>
  );
};

export default Home;
