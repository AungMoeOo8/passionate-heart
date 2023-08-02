export default function HeroSection() {
  return (
    <section className="relative">
      <div className="container-sm py-[100px] ">
        <div className="basis-6/12 flex flex-col justify-center">
          <h2
            className={`text-[#155e75] font-libre font-bold text-[40px] md:text-[60px] text-start z-10 md:w-[50%] md:text-center`}
          >
            WE ARE HERE FOR YOU
          </h2>
          <div className="md:h-[100px]"></div>
          <p className="text-[20px] opacity-70 md:text-[32px] font-medium text-end mt-[30px] leading-[30px] md:leading-[50px] max-w-[554px] self-end z-10">
            We are passionate to offer assured, trusted, affordable counseling
            services, pyschological tests, and assessment services.
          </p>
        </div>

        {/* background glasses */}
        <div className="glass glass-lg type-2 animated top-[100px] right-[31%] rotate-[10deg] hidden md:block"></div>
        <div className="glass glass-sm type-2 animated top-[220px] right-[25.5%] rotate-[344deg] hidden md:block"></div>

        <div className="glass glass-sm type-2 animated top-[204px] right-[1520px] rotate-[155deg]"></div>
        <div className="glass glass-sm type-2 animated top-[400px] left-[25.5%] rotate-[30deg]"></div>

        <div className="glass glass-lg type-1 third left-[78%]"></div>
        {/*  */}
      </div>
    </section>
  );
}
