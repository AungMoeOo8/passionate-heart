import type { NextPage } from "next";
import Head from "next/head";
import { CounsellorSection, HeroSection, ServiceSection } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Passionate Heart | Welcome</title>
        <link href="https://passionateheartmyanmar.com" rel="canonical" />
      </Head>
      <HeroSection />
      <ServiceSection />
      <CounsellorSection />
    </>
  );
};

export default Home;
