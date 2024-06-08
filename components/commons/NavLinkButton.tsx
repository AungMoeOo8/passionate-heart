import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinkProps } from "../../types";

const NavLinkButton: React.FC<NavLinkProps> = ({ name, href }) => {
  const pathname = usePathname();
  const isCurrentURL = pathname === href;

  const textColor = isCurrentURL ? "text-cyan-600" : "text-black";

  return (
    <Link href={href} className={`${textColor}`}>
      <div className="font-semibold md:text-[16px] lg:text-[18px] py-[10px] text-center cursor-pointer">
        {name}
      </div>
    </Link>
  );
};

export default NavLinkButton;
