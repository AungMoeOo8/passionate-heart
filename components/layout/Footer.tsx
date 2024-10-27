import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconClock,
  IconLocation,
  IconMail,
  IconPhone,
  Icon,
} from "@tabler/icons-react";
import { businessInfo } from "../../staticData/";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-cyan-800">
      <div className="container-lg py-[50px] px-[16px] gap-[30px] flex flex-col items-center">
        <div className="w-full flex gap-[30px] justify-between flex-col sm:flex-row">
          <div className="flex flex-col gap-[20px]">
            <Link href={"mailto:" + businessInfo.email}>
              <div className="flex items-center gap-[10px] text-sm text-white">
                <IconMail stroke="1.5" /> <span>{businessInfo.email}</span>
              </div>
            </Link>
          </div>

          <div className="flex justify-center gap-[20px]">
            <a href="https://www.facebook.com/profile.php?id=100075651559328">
              <div className="rounded-sm p-[10px]">
                <IconBrandFacebook size={28} stroke={1.5} color="white" />
              </div>
            </a>
            <a href="https://www.linkedin.com/company/passionate-heart/">
              <div className="rounded-sm p-[10px]">
                <IconBrandLinkedin size={28} stroke={1.5} color="white" />
              </div>
            </a>
            <a href="https://t.me/passionateheart">
              <div className="rounded-sm p-[10px]">
                <IconBrandTelegram size={28} stroke={1.5} color="white" />
              </div>
            </a>
          </div>
        </div>
        <div className="font-light text-center text-sm text-white">
          Copyright © 2023
          <br /> passionateheartmyanmar.com
        </div>
      </div>
    </footer>
  );
}
