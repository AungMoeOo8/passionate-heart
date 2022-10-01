import { Box, Container } from "@mantine/core";
import { useRouter } from "next/router";

export default function BlogDetailPage() {
  const { id } = useRouter().query;
  return (
    <Container size={"lg"} sx={{ minHeight: "min-content" }}>
      <Box>{id}</Box>
    </Container>
  );
}
