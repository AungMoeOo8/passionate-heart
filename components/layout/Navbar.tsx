import Link from "next/link";
import Image from "next/image";
import { Box, Container, Burger } from "@mantine/core";
import { useResponsive } from "../../hooks";
import { useEffect, useState } from "react";
import { logo } from "../../assets";
import { useRouter } from "next/router";
import { NavLinkButton } from "..";

export default function Navbar() {
  const { route } = useRouter();
  const { tablet } = useResponsive();
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    setIsOpened(false);
  }, [route]);
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
          ? "white"
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
            rel="home"
            component="a"
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
          component="nav"
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
            // backgroundColor: tablet ? "transparent" : "#b9f9d7eb",
            backgroundColor: tablet ? "transparent" : "white",
            borderRadius: "0 0 10px 10px",
          }}
        >
          <NavLinkButton name="Counsellors" href="/counsellors" />
          <NavLinkButton name="Services" href="/#services" />
          <NavLinkButton name="Activities" href="/activities" />
          <NavLinkButton name="Contact" href="/" />
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
