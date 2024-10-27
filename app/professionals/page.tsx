import { Metadata } from "next";
import { ProfessionalCard } from "../../components";
import counsellorsData from "../../staticData/professionals";

export const metadata: Metadata = {
  title: "Mental Health Professionals & Practitioners",
  description:
    "Explore our profiles to learn more about their backgrounds, specialties, and how they can assist you in achieving your wellness goals.",
  alternates: {
    canonical: "/professionals",
  },
};

export default function Page() {
  return (
    <>
      <div className="mt-[50px]">
        <h2 className="text-4xl font-bold text-center mt-8 mb-14">
          Mental Health Professionals & Practitioners
        </h2>
      </div>
      <div className="mb-[100px]">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-[20px]">
          {counsellorsData.map((counsellor, index) => (
            <li key={index} className="flex justify-center rounded-[10px]">
              <ProfessionalCard
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
