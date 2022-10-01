import { Box, Container } from "@mantine/core";
import Image from "next/image";

export default function BlogPage() {
  return (
    <Container size={"lg"} sx={{ marginTop: "50px" }}>
      <Box>
        <Box sx={{ width: "100%", height: "auto" }}>
          <Image
            alt="Hello.png"
            width={500}
            height={300}
            layout="responsive"
            quality={100}
            src={"https://wallpaperaccess.com/full/2073460.jpg"}
          />{" "}
        </Box>
      </Box>
    </Container>
  );
}
