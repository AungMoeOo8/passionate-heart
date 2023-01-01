import Link from "next/link";
import { FC } from "react";
import { Text } from "@mantine/core";

type NavLinkProps = {
  name: string;
  href: string;
};

const NavLinkButton: FC<NavLinkProps> = ({ name, href }) => {
  return (
    <Link href={href} style={{ textDecoration: "none", color: "black" }}>
      <a className="font-medium text-[18px] mx-[10px] px-[5px] py-[10px] text-center cursor-pointer">
        {name}
      </a>
    </Link>
  );
};

export default NavLinkButton;
