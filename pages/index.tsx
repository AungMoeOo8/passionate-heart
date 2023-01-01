import type { NextPage } from "next";
import Head from "next/head";
import { CounsellorSection, HeroSection, ServiceSection } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Passionate Heart | Welcome</title>
      </Head>
      <div
        style={{
          backgroundImage: `url("/images/wave3.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 50%",
          backgroundSize: "cover",
          // rotate: "y 180deg",
          position: "absolute",
          top: 0,
          left: 0,
          height: "500px",
          width: "100%",
          pointerEvents: "none",
          zIndex: "-100",
        }}
      ></div>
      <HeroSection />
      <ServiceSection />
      <CounsellorSection />
    </>
  );
};

export default Home;
