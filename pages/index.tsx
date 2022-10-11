import type { NextPage } from "next";
import {
  Box,
  Container,
  Text,
  Title,
  Button,
  Grid,
  Space,
} from "@mantine/core";
import Image from "next/image";
import { img, male, female } from "../assets";
import { useResponsive } from "../hooks";
import Head from "next/head";
import { HiOutlineUserGroup, HiChevronRight } from "react-icons/hi";
import Link from "next/link";

const Home: NextPage = () => {
  const { tablet, laptop, desktop } = useResponsive();
  return (
    <Box>
      <Head>
        <title>Passionate Heart | Welcome</title>
      </Head>
      {/*------------- main section ------------*/}
      <Container size={"lg"} sx={{ marginTop: tablet ? "50px" : "0" }}>
        <Box
          sx={{
            marginBottom: "50px",
            display: "flex",
            flexDirection: laptop ? "row" : "column-reverse",
          }}
        >
          <Box
            sx={{
              flexBasis: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Text weight={900} size={40} align={laptop ? "start" : "center"}>
              WE ARE HERE FOR YOU
            </Text>
            <Text
              size={20}
              weight={500}
              align={laptop ? "start" : "center"}
              sx={{ marginTop: "30px", lineHeight: "35px" }}
            >
              We are passionate to offer assured, trusted, affordable counseling
              services, pyschological tests, and assessment services.
            </Text>
            {/* <Box sx={{ marginTop: "30px" }}>
              <Button
                size="md"
                color={"dark"}
                fullWidth={tablet ? false : true}
              >
                See More
              </Button>
            </Box> */}
          </Box>
          <Box
            sx={{
              flexBasis: "50%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src={img}
              width={350}
              height={350}
              objectFit={"contain"}
              priority
            />
          </Box>
        </Box>
        {/*---------- main section end ---------*/}

        {/*----------- Member section ---------*/}
        <Box id="counsellors" sx={{ paddingTop: "100px" }}>
          <Text align="center" size={30} weight={800}>
            COUNSELLORS
          </Text>

          <Grid
            grow
            gutter={20}
            sx={{
              margin: "50px 0 0 0",
            }}
          >
            {["Ko Mg Mg", "Ma Thi", "U Myint Maung", "U Kyaw"].map(
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
                  <Box
                    sx={{
                      // maxWidth: "250px",
                      // minWidth: "400px",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      padding: "10px",
                      borderRadius: "10px",
                      backdropFilter: "blur(10px)",
                      boxShadow: "0 0 5px 0px #4bc9b3",
                    }}
                  >
                    <Image
                      src={index === 1 ? female : male}
                      width={100}
                      height={100}
                      style={{ marginTop: "20px" }}
                    />
                    <Box
                      sx={{
                        marginTop: "20px",
                        display: "flex",
                        flexDirection: "column",
                        height: "200px",
                      }}
                    >
                      <Text weight={500} size={18} align={"center"}>
                        {item}
                      </Text>
                      <Link href={`/${item}/appointments`}>
                        <Text
                          align="center"
                          weight={500}
                          sx={{ cursor: "pointer" }}
                        >
                          See More
                        </Text>
                      </Link>
                    </Box>
                  </Box>
                  <Space h={50} />
                </Grid.Col>
              )
            )}
          </Grid>
        </Box>
      </Container>
      {/*--------- Member section End ----------*/}
    </Box>
  );
};

export default Home;
