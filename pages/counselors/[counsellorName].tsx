import Head from "next/head";
import { useRouter } from "next/router";
import counsellorsData from "../../counsellorsData";

export default function Counsellors() {
  const router = useRouter();
  const { counsellorName } = router.query;

  const counsellor = counsellorsData.find(
    (counsellor) => counsellor.name === counsellorName
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
        <div className="max-w-[400px] h-[400px] rounded-lg overflow-hidden">
          <img
            className="w-auto h-auto object-center rounded-lg"
            alt="Counsellor Photo"
            src={counsellor.image}
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
        <p className=" mt-8 leading-7 opacity-80 indent-8">
          {counsellor.bio}
        </p>
        <div className="flex justify-center items-center gap-2 mt-5">
          <hr className=" flex-1"/>
          <img src="/images/paragraph_end.png" className=" w-40" />
          <hr className="flex-1"/>
        </div>
      </div>
    </>
  );
}
