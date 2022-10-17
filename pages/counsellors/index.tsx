import { Box, Container, Grid, Space, Title } from "@mantine/core";
import Head from "next/head";
import { CounsellorCard } from "../../components";

export default function CounsellorsPage() {
  return (
    <>
      <Head>
        <title>Passionate Heart | Counsellors</title>
      </Head>
      <Container size={"lg"}>
        <Title align="center">WE ARE HERE TO HELP</Title>
        <Grid
          gutter={20}
          sx={{
            margin: "50px 0 0 0",
          }}
        >
          {["Ko Mg Mg", "Ma Thi", "U Myint Maung", "U Kyaw", "Ko Htun"].map(
            (item, index) => (
              <Grid.Col
                lg={6}
                xs={6}
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "10px",
                }}
              >
                <CounsellorCard item={item} />
                <Space h={50} />
              </Grid.Col>
            )
          )}
        </Grid>
      </Container>
    </>
  );
}
