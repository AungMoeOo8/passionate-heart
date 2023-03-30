import Link from "next/link";
import CounsellorCard from "../commons/CounsellorCard";
import { counsellorsData } from "../../staticData";
import { IconArrowNarrowRight } from "@tabler/icons-react";

export default function CounsellorSection() {
  return (
    <section className="">
      <div className="container-sm mt-[0] py-[100px] z-50 ">
        <div id="counsellors">
          <div className="flex justify-center">
            <p className="text-center text-4xl font-bold">Counselors</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-[20px] mt-[50px]">
            {counsellorsData.map((counsellor, index) => (
              <div key={index} className="flex justify-center rounded-[10px]">
                <CounsellorCard
                  image={counsellor.image}
                  name={counsellor.name}
                  bio={counsellor.bio}
                  roles={counsellor.roles}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-[50px]">
            <Link href={"/counselors"} passHref>
              <a className="text-white text-[0.9rem] px-4 py-2 rounded-sm cursor-pointer hover:-translate-y-2 transition-all duration-300 flex items-center gap-1 bg-secondary">
                <span>All Counselors</span>
                <IconArrowNarrowRight />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
