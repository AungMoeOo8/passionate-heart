import { Box, Text, Grid, Space, Button } from "@mantine/core";
import Link from "next/link";
import { IconArrowRight as RightArrow } from "@tabler/icons";
import CounsellorCard from "../CounsellorCard";

export default function CounsellorSection() {
  return (
    <Box id="counsellors" sx={{ padding: "100px 0" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Text
          align="center"
          size={35}
          weight={800}
          variant={"gradient"}
          // gradient={{ from: "#289d84", to: "#00ffad", deg: 45 }}
          gradient={{ from: "#4697fb", to: "#14e7fd", deg: 45 }}
          sx={{ display: "inline-flex" }}
        >
          Counsellors
        </Text>
      </Box>

      <Grid
        grow
        gutter={20}
        sx={{
          margin: "50px 0 0 0",
        }}
      >
        {["Ko Mg Mg", "Ma Thi", "U Myint Maung", "U Kyaw"].map(
          (item, index) => (
            <Grid.Col
              lg={6}
              xs={6}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                borderRadius: "10px",
              }}
            >
              <CounsellorCard item={item} />
              <Space h={50} />
            </Grid.Col>
          )
        )}
      </Grid>

      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <Link href={"/counsellors"} passHref>
          <Button
            component="a"
            size="md"
            rightIcon={<RightArrow />}
            variant="gradient"
            gradient={{ from: "#4697fb", to: "#14e7fd", deg: 45 }}
          >
            All Counsellors
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
