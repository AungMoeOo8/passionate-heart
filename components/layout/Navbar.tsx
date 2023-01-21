import Link from "next/link";
import Image from "next/image";

import { MutableRefObject, useEffect, useRef } from "react";
import { NavLinkButton } from "..";
import { IconX } from "@tabler/icons";

export default function Navbar() {
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

  // useEffect(() => {
  //   document.onscroll = () => {
  //     if (scrollY > 100) {
  //       navbarRef.current.classList.add("bg-white");
  //     }
  //     if (scrollY < 100) {
  //       navbarRef.current.classList.remove("bg-white");
  //     }
  //   };
  // });

  return (
    <div ref={navbarRef} className="z-50 bg-[#F1FDFF]">
      <div className="container-lg flex justify-between items-center bg-inherit">
        <Link href={"/"}>
          <a className="min-w-[130px] h-[100px] overflow-hidden relative cursor-pointer px-[10px]">
            <Image
              priority
              alt="logo"
              src={"/images/ph-logo.webp"}
              layout={"fill"}
              style={{ transform: "scale(1, 0.6)" }}
            />
          </a>
        </Link>

        <nav
          ref={navRef}
          className="absolute md:static left-[10%] top-[-600px] opacity-0 md:opacity-100 px-[10px] py-[30px] md:py-0 m-auto md:m-0  md:max-w-[600px] w-[80%] h-[50vh] md:h-full transition-[opacity] rounded-lg bg-white md:bg-transparent overflow-scroll md:overflow-hidden shadow-lg md:shadow-none z-50"
        >
          <div className="flex gap-[30px] flex-col md:flex-row justify-evenly">
            <div className="sticky top-0 flex items-center justify-end">
              <div
                onClick={closeNav}
                className="md:hidden p-[10px]  rounded bg-purple-500 shadow-md cursor-pointer"
              >
                <IconX color="white" />
              </div>
            </div>
            <NavLinkButton name="Counselors" href="/counsellors" />
            <NavLinkButton name="Services" href="/#services" />
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
