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
        <Text
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-offset="0"
          // data-aos-once="true"
          component="h2"
          weight={900}
          size={45}
          align={laptop ? "start" : "center"}
          variant={"gradient"}
          gradient={{ from: "pink", to: "orange", deg: 45 }}
        >
          WE ARE HERE FOR YOU
        </Text>
        <Text
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-offset="0"
          data-aos-once="true"
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
          alt="Passionate Heart Logo"
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
