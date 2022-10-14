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
import { img, male, female, meeting, phoneCall, logo } from "../assets";
import { useResponsive } from "../hooks";
import Head from "next/head";
import Link from "next/link";

const services = [
  { image: meeting, title: "Meet in person" },
  { image: phoneCall, title: "Call via phone" },
  { image: meeting, title: "Meet in person" },
];

const Home: NextPage = () => {
  const { tablet, laptop, desktop } = useResponsive();
  return (
    <>
      <Head>
        <title>Passionate Heart | Welcome</title>
      </Head>
      {/*------------- main section ------------*/}
      <Container size={"lg"} sx={{ marginTop: tablet ? "50px" : "0" }}>
        <Box
          sx={{
            marginBottom: "100px",
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
            <Text weight={900} size={45} align={laptop ? "start" : "center"}>
              WE ARE HERE FOR YOU
            </Text>
            <Text
              size={20}
              weight={500}
              align={laptop ? "start" : "center"}
              sx={{
                marginTop: "30px",
                lineHeight: "35px",
                letterSpacing: "0px",
              }}
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
              src={logo}
              width={400}
              height={400}
              // objectFit={"contain"}
              priority
            />
          </Box>
        </Box>
        {/*---------- main section end ---------*/}

        {/*----------- Counsellors section ---------*/}
        <Box id="counsellors" sx={{ padding: "100px 0" }}>
          <Text align="center" size={35} weight={800}>
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
                      width: "100%",
                      // padding: "20px",
                      borderRadius: "10px",
                      backdropFilter: "blur(10px)",
                      boxShadow: "0 0 5px 0px #4bc9b3",
                      display: "flex",
                      flexDirection: tablet ? "row" : "column",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        flexBasis: "35%",
                        height: "100%",
                        minHeight: "200px",
                        objectFit: "cover",
                      }}
                    >
                      <Image
                        src={
                          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        }
                        layout={"fill"}
                      />
                    </Box>
                    <Box sx={{ flexBasis: "65%", padding: "20px" }}>
                      <Text weight={600} size={20} sx={{}}>
                        {item}
                      </Text>
                      <Text weight={400} color={"#4697fb"}>
                        Counsellor
                      </Text>
                      <Text
                        sx={{ marginTop: "20px", transition: "ease 250ms" }}
                      >
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Labore voluptatibus voluptatem officia laudantium
                        est et omnis placeat eius ab soluta, asperiores
                        dignissimos inventore voluptate vero nisi vitae
                        consequuntur eaque rerum.
                      </Text>
                    </Box>
                  </Box>
                  <Space h={50} />
                </Grid.Col>
              )
            )}
          </Grid>
        </Box>
        {/*--------- Counsellors section End ----------*/}

        {/*--------- Services section -------*/}
        <Box id="services" sx={{ padding: "100px 0" }}>
          <Text align="center" size={35} weight={800}>
            Services
          </Text>

          <Box
            sx={{
              marginTop: "50px",
              display: "flex",
              flexDirection: laptop ? "row" : "column",
              gap: "20px",
              justifyContent: "space-between",
            }}
          >
            {services.map(({ image, title }, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexBasis: "100%",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "20px",
                  // borderRadius: "10px",
                  // backdropFilter: "blur(10px)",
                  // boxShadow: "0 0 5px 0px #4bc9b3",
                }}
              >
                <Box
                  sx={{
                    width: "200px",
                    height: "150px",
                    marginBottom: "10px",
                    position: "relative",
                  }}
                >
                  <Image src={image} layout={"fill"} />
                </Box>
                <Text weight={700} size={20}>
                  {title}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
        {/*--------- Services section End --------*/}
      </Container>
    </>
  );
};

export default Home;
