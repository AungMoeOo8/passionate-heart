import Image from "next/image";
import Head from "next/head";

export default function Academy() {
  return (
    <>
      <Head>
        <title>Passionate Heart | Academy</title>
      </Head>
      <div className="">
        <div className="container-sm flex items-center flex-col-reverse md:flex-row">
          <div className="flex-[50%]">
            <p className="font-bold text-4xl text-center md:text-start">Passionate Heart Academy</p>
            <p className="md:w-[70%] text-[20px] opacity-80 my-[25px] text-center md:text-start">
              We aim to offer systematic and qualified psychology and mental
              health courses.
            </p>
          </div>
          <div className="flex-[50%] flex justify-end">
            <Image
              alt="academy logo"
              width={500}
              height={500}
              src="/images/ph-academy-logo.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}
