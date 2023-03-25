import Link from "next/link";
import { NavLinkProps } from "../../types";

const NavLinkButton: React.FC<NavLinkProps> = ({ name, href }) => {
  return (
    <Link href={href} style={{ textDecoration: "none", color: "black" }}>
      <a className="font-medium text-[18px] py-[10px] text-center cursor-pointer">
        {name}
      </a>
    </Link>
  );
};

export default NavLinkButton;
