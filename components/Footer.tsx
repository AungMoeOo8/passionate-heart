import { Box, Container, Text } from "@mantine/core";
import { RiFacebookCircleFill } from "react-icons/ri";

export default function Footer() {
  return (
    <>
      <Container size={"lg"}>
        <hr style={{ borderColor: "black" }} />
      </Container>
      <Box>
        <Container
          size={"lg"}
          sx={{
            padding: "30px 16px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* <Text align="center" weight={700} size={20}>
            Footer
          </Text> */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <RiFacebookCircleFill size={50} />
            <Text size={18} weight={900}>
              PASSIONATE HEART
            </Text>
          </Box>
        </Container>
      </Box>
    </>
  );
}
