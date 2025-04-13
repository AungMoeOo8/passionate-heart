import Image from "next/image";
import Link from "next/link";
import { PersonProps } from "../../types";

function RoleComponent({ roles }: { roles: string[] | null }) {
  if (roles == null) {
    return <div></div>;
  }

  return (
    <>
      {roles.map((role, index) => (
        <div
          key={index}
          className="inline-block rounded-sm mt-[4px] px-[8px] border even:mx-2"
        >
          <span className="font-normal text-[12px] opacity-80">{role}</span>
        </div>
      ))}
    </>
  );
}

export default function CounsellorCard({
  image,
  name,
  biography,
  roles,
}: PersonProps) {
  return (
    <Link
      href={`/professionals/${name}`}
      scroll={false}
      passHref
      className="flex w-full"
    >
      <div className="w-full rounded-lg p-4 flex flex-col lg:flex-row border custom-shadow custom-hover overflow-hidden cursor-pointer group">
        <div className="basis-[35%] justify-center flex">
          <div className="min-w-[200px] min-h-[200px] w-[200px] lg:w-full h-[200px] lg:h-full overflow-hidden rounded-[100%] lg:rounded-xl">
            <div className="relative min-w-[200px] min-h-[300px]">
              <Image
                alt={name}
                src={image}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="basis-[65%] p-[20px]">
          <p className="font-semibold text-[20px]">{name}</p>
          <div className="">
            <RoleComponent roles={roles} />
          </div>

          <p className="mt-[20px] leading-[25px] line-clamp-6 text-[14px] opacity-80">
            {biography}
          </p>
        </div>
      </div>
    </Link>
  );
}
