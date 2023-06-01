import { Metadata } from "next";
import { CounsellorCard } from "../../components";
import counsellorsData from "../../staticData/counsellorsData";

export const metadata: Metadata = {
  title: "Counselors",
  alternates: {
    canonical: "https://passionateheartmyanmar.com/counselors",
  },
};

export default function CounsellorsPage() {
  return (
    <>
      <div className="mt-[50px] container-sm">
        <p className="text-3xl font-bold mt-8 mb-14">Our Counsellors</p>
      </div>
      <div className="container-sm mb-[100px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-[20px]">
          {counsellorsData.map((counsellor, index) => (
            <div key={index} className="flex justify-center rounded-[10px]">
              <CounsellorCard
                image={counsellor.image}
                name={counsellor.name}
                bio={counsellor.bio}
                roles={counsellor.roles}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
