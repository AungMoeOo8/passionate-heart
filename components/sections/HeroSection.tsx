import { Box, Text } from "@mantine/core";
import Image from "next/image";
import { useResponsive } from "../../hooks";
import { logo } from "../../assets";

export default function HeroSection() {
  const { laptop } = useResponsive();
  return (
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
  );
}
