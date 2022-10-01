import Link from "next/link";
import { Box, Container, Anchor, Text, Burger } from "@mantine/core";
import { useResponsive } from "../hooks";
import { useState } from "react";

export default function Navbar() {
  const { tablet } = useResponsive();
  const [isOpened, setIsOpened] = useState(false);
  return (
    <Box
      sx={{
        position: "sticky",
        top: "0px",
        backdropFilter: "blur(10px)",
        zIndex: 100,
      }}
    >
      <Container
        size={"lg"}
        sx={{
          padding: tablet ? "0 16px" : "0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link href={"/"} passHref>
          <Text
            size={18}
            weight={900}
            sx={{
              cursor: "pointer",
              marginLeft: tablet ? "0" : "16px",
              padding: "10px 0",
            }}
          >
            <Text>PASSIONATE</Text>
            <Text sx={{letterSpacing: 13}}>HEART</Text>
          </Text>
          {/* <Text
            size={40}
            weight={700}
            sx={{ cursor: "pointer", marginLeft: tablet ? "0" : "16px" }}
          >
            HEART
          </Text> */}
        </Link>

        <Box
          sx={{
            position: tablet ? "static" : "absolute",
            top: "75.78px",
            padding: "10px 0",
            display: tablet ? "flex" : isOpened ? "flex" : "none",
            gap: "10px",
            flexDirection: tablet ? "row" : "column",
            justifyContent: "space-evenly",
            maxWidth: "600px",
            width: "100%",
            backgroundColor: tablet ? "transparent" : "#b9f9d7eb",
            borderRadius: "0 0 10px 10px",
          }}
        >
          {["about", "blog", "booking", "contact"].map((item, index) => (
            <Link
              key={index}
              href={`/${item}`}
              // style={{ textDecoration: "none", color: "black" }}
            >
              <Text
                transform={"capitalize"}
                weight={500}
                size={18}
                align={"center"}
                sx={{
                  padding: "10px 0",
                  cursor: "pointer",
                }}
              >
                {item}
              </Text>
            </Link>
          ))}
        </Box>

        {!tablet && (
          <Burger
            opened={isOpened}
            onClick={() => setIsOpened(!isOpened)}
            sx={{ marginRight: tablet ? "0" : "16px" }}
          />
        )}
      </Container>
    </Box>
  );
}
