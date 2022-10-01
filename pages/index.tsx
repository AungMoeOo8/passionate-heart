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
            <Title align={laptop ? "start" : "center"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              {/* နိုင်ငံ့အခြေအနေဖော်ပြချက် */}
            </Title>
            <Text
              weight={500}
              align={laptop ? "start" : "center"}
              sx={{ marginTop: "30px", lineHeight: "35px" }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              consequuntur ea natus ad iusto veniam nulla quo possimus
              perferendis et hic, saepe ipsum rem animi beatae eum dolores
              deserunt deleniti?
              {/* ကျွန်တော်တို့ မြန်မာနိုင်ငံတော်ကြီးဟာဆိုရင်ဖြင့်
              တလွဲတွေကြီးဖြစ်နေပါတယ်။ တခြားနိုင်ငံပြေးရင်
              ပြည်တွင်းကိုပိုက်ဆံပြန်ပို့ဖို့ အမိန့်ထုတ်ပြီး လူတွေကိုတော့
              ငတ်အောင်လုပ်နေပါပြီ။ */}
            </Text>
            <Box sx={{ marginTop: "30px" }}>
              <Button
                size="md"
                color={"dark"}
                fullWidth={tablet ? false : true}
              >
                See More
              </Button>
            </Box>
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
        <hr style={{ borderColor: "black" }} />
      </Container>
      {/*---------- main section end ---------*/}

      {/*----------- Member section ---------*/}
      <Container size={"lg"} sx={{ marginTop: "50px", marginBottom: "50px" }}>
        <Text
          color={"white"}
          size={18}
          weight={500}
          sx={{
            display: "inline-flex",
            alignItems: "center",
            padding: "5px 10px",
            gap: "10px",
            backgroundColor: "#25262b",
            borderRadius: "5px",
          }}
        >
          Counsellors
          <HiOutlineUserGroup size={25} color={"white"} />
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
                lg={3}
                md={3}
                sm={4}
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
                    minWidth: "250px",
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
                    }}
                  >
                    <Text weight={500} size={18} align={"center"}>
                      {item}
                    </Text>
                    <Link href={`/${item}/appointments`}>
                      <Button
                        size="md"
                        sx={{
                          cursor: "pointer",
                          padding: "5px",
                        }}
                        color={"dark"}
                      >
                        See More
                        <HiChevronRight size={20} />
                      </Button>
                    </Link>
                  </Box>
                </Box>
                <Space h={50} />
              </Grid.Col>
            )
          )}
        </Grid>
      </Container>
      {/*--------- Member section End ----------*/}
    </Box>
  );
};

export default Home;
