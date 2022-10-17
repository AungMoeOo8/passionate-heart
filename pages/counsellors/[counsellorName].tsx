import { Box, Container } from "@mantine/core";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Counsellors() {
  const router = useRouter();
  const { counsellorName } = router.query;
  return (
    <>
      <Head>
        <title>{counsellorName} | Detail</title>
      </Head>
      <Container size={"lg"}>
        <Box
          sx={{
            position: "relative",
            width: "500px",
            height: "750px",
          }}
        >
          <Image
            alt="Counsellor Photo"
            src={
              "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
            }
            layout={"fill"}
          />
        </Box>
      </Container>
    </>
  );
}
