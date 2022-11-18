import Link from "next/link";
import { FC } from "react";
import { Text } from "@mantine/core";

type NavLinkProps = {
  name: string;
  href: string;
};

const NavLinkButton: FC<NavLinkProps> = ({ name, href }) => {
  return (
    <Link
      href={href}
      style={{ textDecoration: "none", color: "black" }}
      passHref
    >
      <Text
        component="a"
        transform={"capitalize"}
        weight={500}
        size={18}
        align={"center"}
        sx={{
          margin: "10px 0",
          padding: "5px 10px",
          cursor: "pointer",
          borderRadius: "5px",
          transition: "background-color ease 250ms",
          ":hover": {
            backgroundColor: "#4697fb",
            color: "white",
          },
        }}
      >
        {name}
      </Text>
    </Link>
  );
};

export default NavLinkButton;
