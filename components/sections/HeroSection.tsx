import { Box, Text } from "@mantine/core";
import Image from "next/image";
import { useResponsive } from "../../hooks";

export default function HeroSection() {
  const { laptop } = useResponsive();
  return (
    <div className="container-sm py-[100px] z-50">
      {/* <div className="mb-[100px] flex flex-col-reverse md:flex-row z-50"> */}
        <div className="basis-6/12 flex flex-col justify-center">
          <h2
            className="font-bold text-[30px] md:text-[45px] text-center "
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-offset="0"
            data-aos-once="true"
          >
            WE ARE HERE FOR YOU
          </h2>
          <p
            className="text-[20px] md:text-[32px] font-medium text-center mt-[30px] leading-9"
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-offset="0"
            data-aos-once="true"
          >
            We are passionate to offer assured, trusted, affordable counseling
            services, pyschological tests, and assessment services.
          </p>
        </div>
        {/* <div
          className="basis-6/12 flex justify-center"
          // sx={{
          //   flexBasis: "50%",
          //   display: "flex",
          //   justifyContent: "center",
          // }}
        >
          <Image
            alt="Passionate Heart Logo"
            src={"/images/passionate-heart-logo.png"}
            width={400}
            height={400}
            // objectFit={"contain"}
            priority
          />
        </div> */}
      </div>
    // </div>
  );
}
