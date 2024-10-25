import Link from "next/link";
import MemberCard from "../commons/ProfessionalCard";
import { professionals } from "../../staticData";
import { IconArrowNarrowRight } from "@tabler/icons-react";

const professionalsSlice = professionals.slice(0, 4);

export default function CounsellorSection() {
  return (
    <section className="">
      <div className="container-sm mt-[0] py-[100px] z-50 ">
        <div id="counsellors">
          <div className="flex justify-center">
            <p className="text-center text-4xl font-bold">Mental Health Professionals</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-[20px] mt-[50px]">
            {professionalsSlice.map((professional, index) => (
              <div key={index} className="flex justify-center rounded-[10px]">
                <MemberCard
                  image={professional.image}
                  name={professional.name}
                  bio={professional.bio}
                  roles={professional.roles}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-[50px]">
            <Link href={"/professionals"} passHref>
              <div className=" text-[0.9rem] px-4 py-2 rounded-sm cursor-pointer hover:-translate-y-2 transition-all duration-300 flex items-center gap-1 border custom-shadow">
                <span className="font-medium">See More</span>
                <IconArrowNarrowRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
