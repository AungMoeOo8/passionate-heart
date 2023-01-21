import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="bg-[#F1FDFF]">
      <div className="container-sm py-[100px] ">
        {/* <div className="mb-[100px] flex flex-col-reverse md:flex-row z-50"> */}
        <div className="basis-6/12 flex flex-col justify-center">
          <h2
            className="font-bold text-[30px] md:text-[45px] text-start z-10"
            // data-aos="fade-up"
            // data-aos-delay="100"
            // data-aos-duration="1000"
            // data-aos-offset="0"
            // data-aos-once="true"
          >
            WE ARE HERE FOR YOU
          </h2>
          <div className="md:h-[100px]"></div>
          <p
            className="text-[20px] opacity-70 md:text-[32px] font-medium text-end mt-[30px] leading-[30px] md:leading-[50px] max-w-[554px] self-end"
            // data-aos="fade-left"
            // data-aos-delay="100"
            // data-aos-duration="1000"
            // data-aos-offset="0"
            // data-aos-once="true"
          >
            We are passionate to offer assured, trusted, affordable counseling
            services, pyschological tests, and assessment services.
          </p>
        </div>
        {/* <div className="rectangle-sm"></div> */}
        <div className="box box-lg top-[190px] right-[30%] rotate-[10deg]"></div>
        <div className="box box-lg top-[200px] right-[31%] rotate-[10deg]"></div>
        <div className="box box-sm top-[310px] right-[25%] rotate-[344deg]"></div>
        <div className="box box-sm top-[320px] right-[25.5%] rotate-[344deg]"></div>

        {/* <div className="box box-sm top-[295px] right-[1515px] rotate-[155deg]"></div> */}
        <div className="box box-sm top-[300px] right-[1520px] rotate-[155deg]"></div>
        <div className="box box-sm top-[504px] left-[25%] rotate-[30deg]"></div>
        <div className="box box-sm top-[500px] left-[25.5%] rotate-[30deg]"></div>
      </div>
    </div>
  );
}
