import { Box, Container, Text } from "@mantine/core";
import Head from "next/head";
import Image from "next/image";
import FutureImage from "next/future/image";
import { useRouter } from "next/router";

export default function Counsellors() {
  const router = useRouter();
  const { counsellorName } = router.query;
  return (
    <>
      <Head>
        <title>Counsellor | {counsellorName}</title>
      </Head>
      <Container
        size={"lg"}
        sx={{ marginTop: "50px", marginBottom: "50px", minHeight: "560px" }}
      >
        {/* <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            display: "flex",

            // placeContent: "center",
          }}
        >
          <Image
            alt="Counsellor Photo"
            width={400}
            height={400}
            src={
              "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
            }
            layout={"intrinsic"}
          />
        </Box> */}
        <Box
          sx={{
            position: "relative",
            width: "400px",
            maxWidth: "100%",
            height: "400px",
            overflow: "hidden",
          }}
        >
          <FutureImage
            style={{ objectFit: "cover" }}
            fill
            alt="Counsellor Photo"
            src={
              "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
            }
          />
        </Box>
        <Text size={25} weight={500} sx={{ marginTop: "20px" }}>{counsellorName}</Text>
        <Text size={18} weight={400} color={"#4697fb"}>
          Counsellor
        </Text>
        <Text sx={{ marginTop: "50px", lineHeight: 2 }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi nemo
          dolores beatae eligendi consectetur dolore blanditiis consequatur,
          fuga sequi repudiandae illo architecto, voluptas in accusamus quod
          culpa minus provident minima. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Numquam provident necessitatibus aliquam nobis,
          consequuntur a cumque suscipit tempora dolor, natus et, molestias
          recusandae perferendis voluptatibus quas quod tempore laboriosam! Cum!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          inventore veniam, aut nisi officiis, facilis ex doloremque a iure
          doloribus sunt, quidem odio corrupti commodi tempore illum pariatur
          odit sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Et excepturi esse provident dolorem quia expedita, ex est laboriosam
          aliquid eius reiciendis voluptas optio voluptate assumenda? Ex
          assumenda consequatur mollitia itaque!
        </Text>
      </Container>
    </>
  );
}
