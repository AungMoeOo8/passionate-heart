"use client";

import Link from "next/link";
import Image from "next/image";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import {
  IconX,
  IconBrandFacebook,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { NavLinkProps } from "../../types";

const navLinks = [
  { name: "Activities", href: "/activities" },
  { name: "Services", href: "/services" },
  { name: "Academy", href: "/academy" },
];

function OrganizationLinks() {
  return (
    <div className="p-2 absolute left-0 top-[100%] bg-white flex items-start flex-col shadow rounded-[8px]">
      <Link href={"/professionals"} className="w-full text-black font-semibold p-3 cursor-pointer rounded-md hover:bg-slate-100">Professionals</Link>
      <Link href={"/members"} className="w-full text-black font-semibold p-3 cursor-pointer rounded-md hover:bg-slate-100">Members</Link>
    </div>
  )
}

function OrganizationButton() {
  const pathname = usePathname();
  const isCurrentURL = pathname === "/professionals" || pathname === "/members";

  const textColor = isCurrentURL ? "text-cyan-600" : "text-black";

  const [show, setShow] = useState(false);

  return (
    <div
      className="relative h-16 flex items-center"
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}>
      <div
        className={`${textColor} hover:bg-slate-100 rounded-md font-semibold p-3 text-center cursor-pointer`}>
        Organization
      </div>
      {show && <OrganizationLinks />}
    </div>
  )
}

const NavLinkButton: React.FC<NavLinkProps> = ({ name, href }) => {
  const pathname = usePathname();
  const isCurrentURL = pathname === href;

  const textColor = isCurrentURL ? "text-cyan-600" : "text-black";

  return (
    <Link href={href} className={`${textColor} flex justify-center items-center`}>
      <div className="hover:bg-slate-100 rounded-md font-semibold p-3 text-center cursor-pointer">
        {name}
      </div>
    </Link>
  );
};

export default function Navbar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null)
  const navbarRef =
    useRef<HTMLDivElement>(null)

  function openNav() {
    navRef.current?.classList.add("open-nav");
    document.body.classList.add("overflow-hidden")
  }

  function closeNav() {
    navRef.current?.classList.remove("open-nav");
    document.body.classList.remove("overflow-hidden")
  }

  useEffect(() => {
    closeNav(), [pathname];
  });

  return (
    <div ref={navbarRef} className="h-[92px] sticky flex items-center top-0 bg-white shadow-sm z-50">
      <div className="container-lg w-full flex justify-between items-center bg-inherit">
        <Link href={"/"} passHref>
          <Image
            alt="logo"
            loading="eager"
            width={150}
            height={88}
            style={{ height: "auto" }}
            src={"/images/ph-logo.webp"}
            className="py-[12px]"
          />
        </Link>

        <nav
          ref={navRef}
          className="absolute md:static left-0 -top-[100vh] opacity-0 md:opacity-100 md:px-[10px] md:py-0 m-auto md:m-0 flex justify-end w-full h-screen md:h-full transition-[opacity] bg-white md:bg-transparent z-50"
        >
          <div className="flex h-dvh md:h-full flex-col md:flex-row justify-evenly gap-x-8">
            <div className="absolute top-[30px] right-[30px] flex items-center">
              <div
                onClick={closeNav}
                className="md:hidden p-[10px] rounded-[16px] bg-azure shadow-lg cursor-pointer"
              >
                <IconX />
              </div>
            </div>
            <OrganizationButton />
            {navLinks.map((item, index) => (
              <NavLinkButton key={index} name={item.name} href={item.href} />
            ))}
            <div className="flex gap-4 justify-center items-center">
              <Link
                href={"https://www.facebook.com/profile.php?id=100075651559328"}
              >
                <IconBrandFacebook size={28} stroke="1.5" color="#00ADB5" />
              </Link>

              <Link href={"https://www.linkedin.com/company/passionate-heart/"}>
                <IconBrandLinkedin size={28} stroke="1.5" color="#00ADB5" />
              </Link>
            </div>
          </div>
        </nav>

        <div className="block md:hidden" onClick={openNav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-menu-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
        </div>
      </div>
    </div>
  );
}
