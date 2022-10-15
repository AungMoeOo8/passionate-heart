import { Box, Text, Grid, Space } from "@mantine/core";
import CounsellorCard from "../CounsellorCard";

export default function CounsellorSection() {
  return (
    <Box id="counsellors" sx={{ padding: "100px 0" }}>
      <Text
        align="center"
        size={35}
        weight={800}
        variant={"gradient"}
        gradient={{ from: "pink", to: "orange", deg: 45 }}
      >
        COUNSELLORS
      </Text>

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
    </Box>
  );
}
