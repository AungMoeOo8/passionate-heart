import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPersonByName } from "../../../services/wordpress/people.service";
import { PersonComponent } from "../../../components";

export async function generateMetadata({
  params,
}: {
  params: { professionalName: string };
}): Promise<Metadata> {
  const { professionalName } = await params;
  const professional = await getPersonByName(professionalName)

  return {
    title: professional?.name,
    alternates: {
      canonical: "/professionals/" + professional?.name,
    },
    openGraph: {
      title: professional?.name,
      description: professional?.biography.split("\n")[0],
      url: "/members/" + professional?.name,
      locale: "en-US",
      siteName: "Passionate Heart",
      type: "website"
    }
  };
}

export default async function Page({
  params,
}: {
  params: { professionalName: string };
}) {
  const { professionalName } = await params;

  const professional = await getPersonByName(professionalName)

  if (!professional) {
    notFound();
  }

  return <PersonComponent {...professional} />;
}
