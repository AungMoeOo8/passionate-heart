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

type InfoPropsType = { Icon: Icon; info: string };

const Info = ({ Icon, info }: InfoPropsType) => {
  return (
    <>
      {info != "" ? (
        <p className="flex items-center gap-[10px] text-sm text-white">
          <Icon stroke="1.5" /> <span>{info}</span>
        </p>
      ) : (
        <></>
      )}
    </>
  );
};

export default function Footer() {
  return (
    <footer className="bg-cyan-800">
      <div className="container-lg py-[50px] px-[16px] gap-[30px] flex flex-col items-center">
        <div className="w-full flex gap-[30px] justify-between flex-col sm:flex-row">
          <div className="flex flex-col gap-[20px]">
            <Info Icon={IconPhone} info={businessInfo.phone} />
            <Info Icon={IconMail} info={businessInfo.email} />
            <Info Icon={IconLocation} info={businessInfo.location} />
            <Info Icon={IconClock} info={businessInfo.time} />
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
        <p className="font-light text-center text-sm text-white">
          Copyright © 2023
          <br /> passionateheartmyanmar.com
        </p>
      </div>
    </footer>
  );
}
