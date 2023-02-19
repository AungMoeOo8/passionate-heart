import { Box, Container, Grid, Space, Title } from "@mantine/core";
import Head from "next/head";
import { CounsellorCard } from "../../components";
import counsellorsData from "../../counsellorsData";

export default function CounsellorsPage() {
  return (
    <>
      <Head>
        <title>Passionate Heart | Counselors</title>
      </Head>
      <div className="mt-[50px]">
        <p className="text-center text-4xl font-extrabold">Counselors</p>
      </div>
      <div className="container-sm my-[100px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-[20px]">
          {counsellorsData.map((counsellor, index) => (
            <div key={index} className="flex justify-center rounded-[10px]">
              {/* lg={6}
              xs={6}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                borderRadius: "10px",
              }} */}

              <CounsellorCard
                image={counsellor.image}
                name={counsellor.name}
                bio={counsellor.bio}
                roles={counsellor.roles}
              />
              <Space h={50} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
