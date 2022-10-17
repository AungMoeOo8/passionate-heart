import { Box, Text } from "@mantine/core";
import Image from "next/image";
import { useResponsive } from "../hooks";

export default function CounsellorCard({ item }: { item: string }) {
  const { tablet } = useResponsive();
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: "10px",
        boxShadow: "0 0 2px 0px gray",
        // boxShadow: "0 0 5px 0px #4bc9b3",
        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
        transition: "ease 250ms",
        ":hover": {
          translate: "-3px -3px",
        },

        "@media (max-width: 1000px)": {
          flexDirection: "column",
        },

        "@media (max-width: 600px)": {
          flexDirection: "column",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          flexBasis: "35%",
          height: "100%",
          // minWidth: "200px",
        }}
      >
        <Image
          src={
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
          layout={"fill"}
          priority
        />
      </Box>
      <Box sx={{ flexBasis: "65%", padding: "20px" }}>
        <Text weight={600} size={20} sx={{}}>
          {item}
        </Text>
        <Text weight={400} color={"#4697fb"}>
          Counsellor
        </Text>
        <Text sx={{ marginTop: "20px", transition: "ease 250ms" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
          voluptatibus voluptatem officia laudantium est et omnis placeat eius
          ab soluta, asperiores dignissimos inventore voluptate vero nisi vitae
          consequuntur eaque rerum.
        </Text>
      </Box>
    </Box>
  );
}
