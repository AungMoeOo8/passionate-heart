import { ActionIcon, Tooltip } from "@mantine/core";
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

type InfoPropsType = { Icon: Icon; info: string };

const Info = ({ Icon, info }: InfoPropsType) => {
  return (
    <p className="flex items-center gap-[10px] text-sm text-white">
      <Icon stroke="1.5" /> <span>{info}</span>
    </p>
  );
};

export default function Footer() {
  return (
    <div className="bg-cyan-800">
      <div className="container-lg py-[50px] px-[16px] gap-[30px] flex flex-col items-center">
        <div className="w-full flex gap-[30px] justify-between flex-col sm:flex-row">
          <div className="flex flex-col gap-[20px]">
            <Info Icon={IconPhone} info="09 988 209589" />
            <Info Icon={IconMail} info="passionateheartmyanmar@gmail.com" />
            <Info
              Icon={IconLocation}
              info="Hledan Centre, 2nd Floor Learning Hub
            Room 2"
            />
            <Info Icon={IconClock} info="Tues, Thurs, Sat, Sun (10AM - 3PM)" />
          </div>

          <div className="flex justify-center gap-[20px]">
            <Tooltip label="follow us on Facebook">
              <a
                href="https://www.facebook.com/profile.php?id=100075651559328"
                target={"_blank"}
              >
                <div className="rounded-sm p-[10px]">
                  <IconBrandFacebook size={28} stroke={1.5} color="white" />
                </div>
              </a>
            </Tooltip>
            <Tooltip label="follow us on Linkedin">
              <a
                href="https://www.linkedin.com/company/passionate-heart/"
                target={"_blank"}
              >
                <div className="rounded-sm p-[10px]">
                  <IconBrandLinkedin size={28} stroke={1.5} color="white" />
                </div>
              </a>
            </Tooltip>
            <Tooltip label="join our Telegram channel">
              <a href="https://t.me/passionateheart" target={"_blank"}>
                <div className="rounded-sm p-[10px]">
                  <IconBrandTelegram size={28} stroke={1.5} color="white" />
                </div>
              </a>
            </Tooltip>
          </div>
        </div>
        <p className="font-light text-center text-sm text-white">
          Copyright © 2022
          <br /> passionateheartmyanmar.com
        </p>
      </div>
    </div>
  );
}
