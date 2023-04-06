import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { NavLinkProps } from "../../types";

const NavLinkButton: React.FC<NavLinkProps> = ({ name, href }) => {
  const { pathname } = useRouter();
  const isCurrentURL = pathname === href;

  const textColor = isCurrentURL ? "text-cyan-600" : "text-black";

  return (
    <Link href={href} className={`${textColor}`}>
      <div className="font-semibold text-[18px] py-[10px] text-center cursor-pointer">
        {name}
      </div>
    </Link>
  );
};

export default NavLinkButton;
