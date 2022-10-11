import { Anchor, Box, Container, Text } from "@mantine/core";
import { RiFacebookCircleFill } from "react-icons/ri";

export default function Footer() {
  return (
    <Container
      size={"lg"}
      sx={{
        padding: "30px 16px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Anchor
        sx={{ display: "flex", alignItems: "center" }}
        href="https://www.facebook.com/profile.php?id=100075651559328"
      >
        <RiFacebookCircleFill size={40} />
        {/* <Text size={16} weight={700}>
              PASSIONATE HEART
            </Text> */}
      </Anchor>
    </Container>
  );
}
