import { Box, Container } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/router";
import { male } from "../../assets";

export default function Counsellors() {
  const router = useRouter();
  const { counsellorName } = router.query;
  return (
    <Container size={"lg"}>
      <Box>
        <Image src={male} />
      </Box>
    </Container>
  );
}
