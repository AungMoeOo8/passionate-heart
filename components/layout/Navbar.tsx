import Link from "next/link";
import Image from "next/image";

import { MutableRefObject, useEffect, useRef } from "react";
import { NavLinkButton } from "..";

export default function Navbar() {
  const navRef = useRef<HTMLElement>() as MutableRefObject<HTMLElement>;
  const navbarRef =
    useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;

  function openNav() {
    navbarRef.current.classList.toggle("open-navbar");
    navRef.current.classList.toggle("open-nav");
  }

  useEffect(() => {
    document.onscroll = () => {
      if (scrollY > 100) {
        navbarRef.current.classList.add("bg-white");
      }
      if (scrollY < 100) {
        navbarRef.current.classList.remove("bg-white");
      }
    };
  });

  return (
    <div ref={navbarRef} className="z-50 sticky top-0">
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
          className="absolute md:static left-0 top-[-250px] px-[10px] flex gap-[10px] flex-col md:flex-row justify-evenly md:max-w-[600px] w-full transition-[top] z-10 bg-inherit"
        >
          <NavLinkButton name="Counsellors" href="/counsellors" />
          <NavLinkButton name="Services" href="/#services" />
          <NavLinkButton name="Academy" href="/academy" />
          <NavLinkButton name="Contact" href="/contact" />
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

// export default function Navbar() {
//   const { route } = useRouter();
//   const { tablet } = useResponsive();
//   const [isOpened, setIsOpened] = useState(false);

//   useEffect(() => {
//     setIsOpened(false);
//   }, [route]);
//   return (
//     <Box
//       sx={{
//         position: "sticky",
//         top: "0px",
//         backdropFilter: "blur(10px)",
//         zIndex: 100,
//         backgroundColor: tablet
//           ? "transparent"
//           : isOpened
//           ? "white"
//           : "transparent",
//       }}
//     >
//       <Container
//         size={"lg"}
//         sx={{
//           padding: tablet ? "0 16px" : "0",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <Link href={"/"} passHref>
//           <Box
//             rel="home"
//             component="a"
//             sx={{
//               minWidth: "130px",
//               height: "100px",
//               overflow: "hidden",
//               position: "relative",
//               cursor: "pointer",
//               marginLeft: tablet ? "0" : "16px",
//               padding: "10px 0",
//             }}
//           >
//             <Image
//               src={"/images/passionate-heart-logo.png"}
//               layout={"fill"}
//               style={{ transform: "scale(1.5, 2)" }}
//             />
//           </Box>
//         </Link>

//         <Box
//           component="nav"
//           sx={{
//             position: tablet ? "static" : "absolute",
//             top: "100px",
//             padding: "10px 0",
//             display: tablet ? "flex" : isOpened ? "flex" : "none",
//             gap: "10px",
//             flexDirection: tablet ? "row" : "column",
//             justifyContent: "space-evenly",
//             maxWidth: "600px",
//             width: "100%",
//             // backgroundColor: tablet ? "transparent" : "#b9f9d7eb",
//             backgroundColor: tablet ? "transparent" : "white",
//             borderRadius: "0 0 10px 10px",
//           }}
//         >
//           <NavLinkButton name="Counsellors" href="/counsellors" />
//           <NavLinkButton name="Services" href="/#services" />
//           <NavLinkButton name="Activities" href="/activities" />
//           <NavLinkButton name="Contact" href="/" />
//         </Box>

//         {!tablet && (
//           <Burger
//             opened={isOpened}
//             onClick={() => setIsOpened(!isOpened)}
//             sx={{ marginRight: tablet ? "0" : "16px" }}
//           />
//         )}
//       </Container>
//     </Box>
//   );
// }
