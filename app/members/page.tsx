import { Metadata } from "next";
import { getMembers } from "../../services/wordpress/people.service";
import { PersonCard } from "../../components";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Organization Members",
  description:
    "Explore our profiles to learn more about their backgrounds, specialties, and how they can assist you in achieving your wellness goals.",
  alternates: {
    canonical: "/members",
  },
  openGraph: {
    title: "Organization Members",
    description: "Explore our profiles to learn more about their backgrounds, specialties, and how they can assist you in achieving your wellness goals.",
    url: "/members",
    locale: "en-US",
    siteName: "Passionate Heart",
    type: "website"
  }
};

export default async function Page() {
  const persons = await getMembers();

  if (persons.length === 0) {
    notFound()
  }
  return (
    <>
      <div className="mt-[50px]">
        <h2 className="text-4xl font-bold text-center mt-8 mb-14">
          Organization Members
        </h2>
      </div>
      <div className="mb-[100px]">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-[20px]">
          {persons.length === 0 ? <div>404</div> : persons.map((person, index) => (
            <li key={index} className="flex justify-center rounded-[10px]">
              <PersonCard {...person} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
