import { Box, Container } from "@mantine/core";
import Head from "next/head";
import { useResponsive } from "../hooks";

export default function Activities() {
  const { tablet } = useResponsive();
  return (
    <>
      <Head>
        <title>Passionate Heart | Activities</title>
      </Head>
      <Container size={"lg"}>Hello</Container>
    </>
  );
}
