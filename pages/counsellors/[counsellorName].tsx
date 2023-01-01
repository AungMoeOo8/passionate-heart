import { Box, Container, Text } from "@mantine/core";
import Head from "next/head";
import Image from "next/image";
import FutureImage from "next/future/image";
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
        <title>Counsellor | {counsellor?.name}</title>
      </Head>
      <div className="container-sm mt-[50px] mb-[50px] min-h-[560px]">
        <div className="relative w-[400px] max-w-[100%] h-[400px] overflow-hidden">
          <FutureImage
            style={{ objectFit: "cover" }}
            fill
            alt="Counsellor Photo"
            src={counsellor.image}
          />
        </div>
        <span className="block text-[25px] font-medium mt-[20px]">
          {counsellor.name}
        </span>
        <span className="block text-[18px] font-normal text-[#4697fb]">
          Counsellor
        </span>
        <p className="mt-[20px] leading-7">{counsellor.bio}</p>
      </div>
    </>
  );
}
