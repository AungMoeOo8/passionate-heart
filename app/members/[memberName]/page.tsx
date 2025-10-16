import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPersonByName } from "../../../services/wordpress/people.service";
import { PersonComponent } from "../../../components";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ memberName: string }>;
}): Promise<Metadata> {
  const { memberName } = await params;
  const member = await getPersonByName(memberName)

  return {
    title: member?.name,
    alternates: {
      canonical: "/members/" + member?.name,
    },
    openGraph: {
      title: member?.name,
      description: member?.biography.split("\n")[0],
      url: "/members/" + member?.name,
      locale: "en-US",
      siteName: "Passionate Heart",
      type: "website"
    }
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ memberName: string }>;
}) {
  const { memberName } = await params;

  const member = await getPersonByName(memberName)

  if (!member) {
    notFound();
  }

  return <PersonComponent {...member} />
}
