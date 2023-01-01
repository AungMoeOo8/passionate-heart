import Image from "next/future/image";
import Link from "next/link";

// "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"

type CounsellorCardType = {
  image: string;
  name: string;
  bio: string;
};

export default function CounsellorCard({
  image,
  name,
  bio,
}: CounsellorCardType) {
  return (
    <Link href={`/counsellors/${name}`} passHref>
      <a
        className="w-full rounded-lg flex flex-col lg:flex-row shadow overflow-hidden cursor-pointer backdrop-blur"
        // data-aos="fade-up"
        // data-aos-delay="100"
        // data-aos-duration="1000"
        // data-aos-offset="50"
      >
        <div className="basis-[35%] justify-center flex">
          <div className="relative md:h-full min-h-[200px] overflow-hidden w-[200px] h-[200] rounded-[100%] lg:rounded-none m-[20px] md:m-0">
            <Image
              alt={name}
              src={image}
              // layout={"fill"}
              style={{ objectFit: "cover" }}
              fill
              priority
            />
          </div>
        </div>
        <div className="basis-[65%] p-[20px]">
          <p className="font-semibold text-[20px]">{name}</p>
          <div className="inline-block rounded-full px-[6px] bg-blue-50 ">
            <span className="font-normal text-[#4697fb] text-[13px]">
              Counsellor
            </span>
          </div>
          <p className="mt-[20px] leading-[25px] line-clamp-6 text-[14px] ">
            {bio}
          </p>
        </div>
      </a>
    </Link>
  );
}
