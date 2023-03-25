import Link from "next/link";
import Image from "next/image";

import { MutableRefObject, useEffect, useRef } from "react";
import { NavLinkButton } from "..";
import { IconX } from "@tabler/icons-react";
import { useRouter } from "next/router";

// min-w-[130px] h-[100px] overflow-hidden relative cursor-pointer px-[10px]

export default function Navbar() {
  const { pathname } = useRouter();
  const navRef = useRef<HTMLElement>() as MutableRefObject<HTMLElement>;
  const navbarRef =
    useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;

  function openNav() {
    document.body.classList.add("overflow-hidden");
    navRef.current.classList.add("open-nav");
  }

  function closeNav() {
    document.body.classList.remove("overflow-hidden");
    navRef.current.classList.remove("open-nav");
  }

  useEffect(() => {
    closeNav(), [pathname];
  });

  return (
    <div ref={navbarRef} className="z-50 sticky top-0 bg-white shadow-sm">
      <div className="container-lg flex justify-between items-center bg-inherit">
        <Link href={"/"} passHref>
          <a className="">
            <img src="/images/ph-logo.webp" className="py-[12px]" />
          </a>
        </Link>

        <nav
          ref={navRef}
          className="absolute md:static left-0 -top-[100vh] opacity-0 md:opacity-100 md:px-[10px] md:py-0 m-auto md:m-0  md:max-w-[600px] w-full h-screen md:h-full transition-[opacity] bg-white md:bg-transparent z-50"
        >
          <div className="flex gap-[30px] h-[80%] flex-col md:flex-row justify-evenly">
            <div className="absolute top-[30px] right-[30px] flex items-center justify-end">
              <div
                onClick={closeNav}
                className="md:hidden p-[10px] rounded-[16px] bg-azure shadow-lg cursor-pointer"
              >
                <IconX />
              </div>
            </div>
            <NavLinkButton name="Counselors" href="/counselors" />
            <NavLinkButton name="Services" href="/services" />
            <NavLinkButton name="Academy" href="/academy" />
            <NavLinkButton name="Contact" href="/contact" />
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
