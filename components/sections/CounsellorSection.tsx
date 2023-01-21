import { Box, Text, Grid, Space, Button } from "@mantine/core";
import Link from "next/link";
import { IconArrowRight as RightArrow } from "@tabler/icons";
import CounsellorCard from "../commons/CounsellorCard";
import counsellorsData from "../../counsellorsData";

export default function CounsellorSection() {
  return (
    <div className="bg-[#F1FDFF]">
      <div className="container-sm mt-[0] py-[100px] z-50 ">
        <div id="counsellors">
          <div className="flex justify-center">
            <p className="text-center text-4xl font-bold">Counsellors</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-[20px] mt-[50px]">
            {counsellorsData.map((counsellor, index) => (
              <div key={index} className="flex justify-center rounded-[10px]">
                <CounsellorCard
                  image={counsellor.image}
                  name={counsellor.name}
                  bio={counsellor.bio}
                />
                <Space h={50} />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-[50px]">
            <Link href={"/counsellors"}>
              <span className="text-white px-4 py-2 rounded cursor-pointer shadow-lg hover:shadow-md transition-[box-shadow] duration-300 flex items-center gap-1 bg-gradient-to-br from-[#af74ff] to-[#afffff]">
                All Counsellors
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-arrow-narrow-right"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <line x1="15" y1="16" x2="19" y2="12"></line>
                  <line x1="15" y1="8" x2="19" y2="12"></line>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
