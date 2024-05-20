import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { professionalsData } from "../../../staticData";

export async function generateMetadata({
  params,
}: {
  params: { professionalName: string };
}): Promise<Metadata> {
  const { professionalName } = params;
  const name = professionalName.replaceAll("%20", " ");
  return {
    title: name,
  };
}

export default function Page({
  params,
}: {
  params: { professionalName: string };
}) {
  const { professionalName } = params;

  const professional = professionalsData.find(
    (professional) => professional.name === professionalName.replaceAll("%20", " ")
  );

  if (!professional) {
    notFound();
  }

  function Placeholder() {
    return (
      <div>
        
      </div>
    )
  }

  return (
    <>
      <main className="">
        {professional.image === "" ? <Placeholder /> :
          <div className="max-w-[400px] h-[400px] overflow-hidden rounded-lg">
            <Image
              alt={"Counsellor Photo"}
              src={professional.image}
              width={400}
              height={400}
              style={{ height: "auto" }}
              className="sm:translate-y-[-12.5%] rounded-lg"
            />
          </div>}

        <span className="block text-[25px] font-semibold mt-[16px]">
          {professional.name}
        </span>
        {professional.roles.map((role, index) => (
          <div
            key={index}
            className="inline-block rounded-sm mt-[8px] px-[12px] border even:mx-2"
          >
            <span className="font-normal text-[14px] opacity-80">{role}</span>
          </div>
        ))}
        <p className=" mt-8 leading-7 opacity-80 font-poppins text-wrap whitespace-pre">{professional.bio}</p>
        <div className="flex justify-center items-center gap-2 mt-5">
          <hr className=" flex-1" />
          <img src="/images/paragraph_end.png" className=" w-40" />
          <hr className="flex-1" />
        </div>
      </main>
    </>
  );
}
