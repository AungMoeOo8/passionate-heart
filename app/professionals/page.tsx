import { Metadata } from "next";
import { ProfessionalCard } from "../../components";

const { NEXT_WORDPRESS_DOMAIN } = process.env;

export const dynamic = 'force-dynamic';

export type Response<TData> = {
  isSuccess: boolean;
  message: string;
  data: TData;
};

export type PersonProps = {
  id: string;
  name: string;
  image: string;
  position: string;
  roles: string[];
  biography: string;
  visibility: boolean;
  indexNumber: number;
};

export const metadata: Metadata = {
  title: "Mental Health Professionals & Practitioners",
  description:
    "Explore our profiles to learn more about their backgrounds, specialties, and how they can assist you in achieving your wellness goals.",
  alternates: {
    canonical: "/professionals",
  },
};

export default async function Page() {
  const res = await fetch(`${NEXT_WORDPRESS_DOMAIN}/phweb/wp-json/api/people`);
  const { data: counsellors }: Response<PersonProps[]> = await res.json();
  console.log(counsellors);

  return (
    <>
      <div className="mt-[50px]">
        <h2 className="text-4xl font-bold text-center mt-8 mb-14">
          Mental Health Professionals & Practitioners
        </h2>
      </div>
      <div className="mb-[100px]">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-[20px]">
          {counsellors.sort((a, b) => a.indexNumber - b.indexNumber).map((counsellor, index) => (
            <li key={index} className="flex justify-center rounded-[10px]">
              <ProfessionalCard
                image={counsellor.image}
                name={counsellor.name}
                bio={counsellor.biography}
                roles={counsellor.roles}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
