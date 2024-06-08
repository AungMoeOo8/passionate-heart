"use client";

import Link from "next/link";
import Image from "next/image";

import { MutableRefObject, useCallback, useEffect, useRef } from "react";
import { NavLinkButton } from "..";
import {
  IconX,
  IconBrandFacebook,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Our Professionals", href: "/professionals" },
  { name: "Activity", href: "/activity"},
  { name: "Services", href: "/services" },
  { name: "Academy", href: "/academy" },
];

export default function Navbar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>() as MutableRefObject<HTMLElement>;
  const navbarRef =
    useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;

  function openNav() {
    navRef.current.classList.add("open-nav");
    document.body.classList.add("overflow-hidden")
  }

  function closeNav() {
    navRef.current.classList.remove("open-nav");
    document.body.classList.remove("overflow-hidden")
  }

  useEffect(() => {
    closeNav(), [pathname];
  });

  return (
    <div ref={navbarRef} className="z-50 sticky top-0 bg-white shadow-sm">
      <div className="container-lg flex justify-between items-center bg-inherit">
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
          className="absolute md:static left-0 -top-[100vh] opacity-0 md:opacity-100 md:px-[10px] md:py-0 m-auto md:m-0  md:max-w-[700px] w-full h-screen md:h-full transition-[opacity] bg-white md:bg-transparent z-50"
        >
          <div className="flex h-dvh md:h-full flex-col md:flex-row justify-evenly">
            <div className="absolute top-[30px] right-[30px] flex items-center justify-end">
              <div
                onClick={closeNav}
                className="md:hidden p-[10px] rounded-[16px] bg-azure shadow-lg cursor-pointer"
              >
                <IconX />
              </div>
            </div>
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
