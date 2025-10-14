import Image from "next/image";
import { getActivities } from "../../services/wordpress/activity.service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Activities",
  description:
    "Explore our profiles to learn more about their backgrounds, specialties, and how they can assist you in achieving your wellness goals.",
  alternates: {
    canonical: "/activities",
  },
  openGraph: {
    title: "Activities",
    description: "Explore our profiles to learn more about their backgrounds, specialties, and how they can assist you in achieving your wellness goals.",
    url: "/activities",
    locale: "en-US",
    siteName: "Passionate Heart",
    type: "website"
  }
};

export default async function Page() {

  const activities = await getActivities()

  return (
    <div className="container-sm mx-auto px-4">
      <div className="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {activities.map((pic, index) => (
          <Image key={index} src={pic.imageUrl} alt="pic" width={600} height={200} />
        ))}
      </div>
    </div>
  );
}
