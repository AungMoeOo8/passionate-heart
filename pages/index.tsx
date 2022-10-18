import type { NextPage } from "next";
import { Container } from "@mantine/core";
import { useResponsive } from "../hooks";
import Head from "next/head";
import { CounsellorSection, HeroSection, ServiceSection } from "../components";

const Home: NextPage = () => {
  const { tablet } = useResponsive();
  return (
    <>
      <Head>
        <title>Passionate Heart | Welcome</title>
      </Head>
      <Container size={"lg"} sx={{ marginTop: tablet ? "100px" : "0" }}>
        <HeroSection />
        <CounsellorSection />
        <ServiceSection />
      </Container>
    </>
  );
};

export default Home;
