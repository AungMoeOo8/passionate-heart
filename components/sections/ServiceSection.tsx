import { Box, Text } from "@mantine/core";
import { meeting, phoneCall } from "../../assets";
import { useResponsive } from "../../hooks";
import Image from "next/image";

const services = [
  { image: meeting, title: "Meet in person" },
  { image: phoneCall, title: "Call via phone" },
  { image: meeting, title: "Meet in person" },
];

export default function ServiceSection() {
  const { laptop } = useResponsive();
  return (
    <Box id="services" sx={{ padding: "100px 0" }}>
      <Text
        align="center"
        size={35}
        weight={800}
        variant={"gradient"}
        gradient={{ from: "pink", to: "orange", deg: 45 }}
      >
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
              <Image alt="Service Photo" src={image} layout={"fill"} />
            </Box>
            <Text weight={700} size={20}>
              {title}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
