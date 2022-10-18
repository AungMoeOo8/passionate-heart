import { Box, Text } from "@mantine/core";
import Image from "next/future/image";
import Link from "next/link";

export default function CounsellorCard({ item }: { item: string }) {
  return (
    <Link href={`/counsellors/${item}`}>
      <Box
        sx={{
          width: "100%",
          borderRadius: "10px",
          boxShadow: "0 0 2px 0px gray",
          // boxShadow: "0 0 5px 0px #4bc9b3",
          display: "flex",
          flexDirection: "row",
          overflow: "hidden",
          cursor: "pointer",
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
            flexBasis: "35%",
            justifyContent: "center",
            "@media (max-width: 1000px)": {
              display: "flex",
            },
          }}
        >
          <Box
            sx={{
              position: "relative",
              height: "100%",
              minHeight: "200px",
              overflow: "hidden",

              "@media (max-width: 1000px)": {
                width: "200px",
                height: "200px",
                borderRadius: "100%",
                margin: "20px",
              },

              "@media (max-width: 600px)": {
                width: "200px",
                height: "200px",
                borderRadius: "100%",
                margin: "20px",
              },
            }}
          >
            <Image
              alt="Counsellor Photo"
              src={
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
              }
              // layout={"fill"}
              style={{ objectFit: "cover" }}
              fill
              priority
            />
          </Box>
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
            ab soluta, asperiores dignissimos inventore voluptate vero nisi
            vitae consequuntur eaque rerum.
          </Text>
        </Box>
      </Box>
    </Link>
  );
}
