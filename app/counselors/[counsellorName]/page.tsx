"use client";

import Head from "next/head";
import Image from "next/image";
import { useParams } from "next/navigation";
import { counsellorsData } from "../../../staticData/";

export default function Counsellors() {
  const { counsellorName } = useParams();

  const counsellor = counsellorsData.find(
    (counsellor) => counsellor.name === counsellorName.replaceAll("%20", " ")
  );

  if (!counsellor) {
    return <div>404, Page not found!</div>;
  }

  return (
    <>
      <Head>
        <title>Counselor | {counsellor?.name}</title>
      </Head>
      <div className="container-sm mt-10 mb-10 min-h-[560px] relative">
        <div className="max-w-[400px] h-[400px] overflow-hidden rounded-lg">
          <Image
            alt={"Counsellor Photo"}
            src={counsellor.image}
            width={400}
            height={400}
            className="sm:translate-y-[-12.5%] rounded-lg"
          />
        </div>
        <span className="block text-[25px] font-semibold mt-[16px]">
          {counsellor.name}
        </span>
        {counsellor.roles.map((role, index) => (
          <div
            key={index}
            className="inline-block rounded-sm mt-[8px] px-[12px] border even:mx-2"
          >
            <span className="font-normal text-[14px] opacity-80">{role}</span>
          </div>
        ))}
        <p className=" mt-8 leading-7 opacity-80">{counsellor.bio}</p>
        <div className="flex justify-center items-center gap-2 mt-5">
          <hr className=" flex-1" />
          <img src="/images/paragraph_end.png" className=" w-40" />
          <hr className="flex-1" />
        </div>
      </div>
    </>
  );
}
