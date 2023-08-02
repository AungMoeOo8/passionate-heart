import { Metadata } from "next";
import { CounsellorCard } from "../../components";
import counsellorsData from "../../staticData/counsellorsData";

export const metadata: Metadata = {
  title: "Counsellors",
  alternates: {
    canonical: "https://passionateheartmyanmar.com/counselors",
  },
};

export default function Page() {
  return (
    <>
      <div className="mt-[50px]">
        <p className="text-3xl font-bold mt-8 mb-14">Our Counsellors</p>
      </div>
      <div className="mb-[100px]">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-[20px]">
          {counsellorsData.map((counsellor, index) => (
            <li key={index} className="flex justify-center rounded-[10px]">
              <CounsellorCard
                image={counsellor.image}
                name={counsellor.name}
                bio={counsellor.bio}
                roles={counsellor.roles}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
