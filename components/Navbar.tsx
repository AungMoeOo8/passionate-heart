import Link from "next/link";
import { Box, Container, Anchor, Text, Burger } from "@mantine/core";
import { useResponsive } from "../hooks";
import { useState } from "react";
import { logo } from "../assets";
import Image from "next/image";

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
        backgroundColor: tablet
          ? "transparent"
          : isOpened
          ? "#b9f9d7eb"
          : "transparent",
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
          <Box
            sx={{
              minWidth: "130px",
              height: "100px",
              overflow: "hidden",
              position: "relative",
              cursor: "pointer",
              marginLeft: tablet ? "0" : "16px",
              padding: "10px 0",
            }}
          >
            <Image
              src={logo}
              layout={"fill"}
              style={{ transform: "scale(1.5, 2)" }}
            />
          </Box>
        </Link>

        <Box
          sx={{
            position: tablet ? "static" : "absolute",
            top: "100px",
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
          <Anchor
            href={"#counsellors"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Text
              transform={"capitalize"}
              weight={500}
              size={18}
              align={"center"}
              sx={{
                margin: "10px 0",
                padding: "5px 10px",
                cursor: "pointer",
                borderRadius: "5px",
                ":hover": {
                  backgroundColor: "#4bc9b3",
                },
              }}
            >
              Counsellors
            </Text>
          </Anchor>
          <Anchor href={"/"} style={{ textDecoration: "none", color: "black" }}>
            <Text
              transform={"capitalize"}
              weight={500}
              size={18}
              align={"center"}
              sx={{
                margin: "10px 0",
                padding: "5px 10px",
                cursor: "pointer",
                borderRadius: "5px",
                ":hover": {
                  backgroundColor: "#4bc9b3",
                },
              }}
            >
              Projects
            </Text>
          </Anchor>
          <Anchor href={"/"} style={{ textDecoration: "none", color: "black" }}>
            <Text
              transform={"capitalize"}
              weight={500}
              size={18}
              align={"center"}
              sx={{
                margin: "10px 0",
                padding: "5px 10px",
                cursor: "pointer",
                borderRadius: "5px",
                ":hover": {
                  backgroundColor: "#4bc9b3",
                },
              }}
            >
              Articles
            </Text>
          </Anchor>
          <Anchor href={"/"} style={{ textDecoration: "none", color: "black" }}>
            <Text
              transform={"capitalize"}
              weight={500}
              size={18}
              align={"center"}
              sx={{
                margin: "10px 0",
                padding: "5px 10px",
                cursor: "pointer",
                borderRadius: "5px",
                ":hover": {
                  backgroundColor: "#4bc9b3",
                },
              }}
            >
              Contact
            </Text>
          </Anchor>
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
