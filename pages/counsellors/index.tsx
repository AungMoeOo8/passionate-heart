import { Box, Container, Grid, Space, Title } from "@mantine/core";
import Head from "next/head";
import { CounsellorCard } from "../../components";
import counsellorsData from "../../counsellorsData";

export default function CounsellorsPage() {
  return (
    <>
      <Head>
        <title>Passionate Heart | Counsellors</title>
      </Head>
      <Container size={"lg"}>
        <Title
          align="center"
          variant="gradient"
          gradient={{ from: "pink", to: "orange", deg: 45 }}
        >
          Counsellors
        </Title>
        <Grid
          gutter={20}
          sx={{
            margin: "50px 0 50px 0",
          }}
        >
          {counsellorsData.map((counsellor, index) => (
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
              <CounsellorCard
                image={counsellor.image}
                name={counsellor.name}
                bio={counsellor.bio}
              />
              <Space h={50} />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </>
  );
}
