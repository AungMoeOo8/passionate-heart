import { ActionIcon, Tooltip } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandTelegram,
  IconClock,
  IconLocation,
  IconMail,
  IconPhone,
  TablerIcon,
} from "@tabler/icons";

type InfoPropsType = { icon: TablerIcon; info: string };

const Info = ({ icon, info }: InfoPropsType) => {
  return (
    <p
      className="flex items-start gap-[10px] text-sm text-white"
      // size={"sm"}
      // weight={300}
      // sx={{ display: "flex", alignItems: "start", gap: "10px" }}
    >
      {icon({ stroke: 1.5 })} {info}
    </p>
  );
};

export default function Footer() {
  return (
    <div className="bg-neutral-800">
      <div className="container-lg py-[50px] px-[16px] gap-[30px] flex flex-col items-center">
        <div className="w-full flex gap-[30px] justify-between flex-col sm:flex-row">
          <div className="flex flex-col gap-[20px]">
            <Info icon={IconPhone} info="09 988 209589" />
            <Info icon={IconMail} info="passionateheartmyanmar@gmail.com" />
            <Info
              icon={IconLocation}
              info="Hledan Centre, 2nd Floor Learning Hub
            Room 2"
            />
            <Info icon={IconClock} info="Tues, Thurs, Sat, Sun (10AM - 3PM)" />
          </div>

          <div className="flex justify-center gap-[20px]">
            <Tooltip label="follow us on Facebook">
              <a
                href="https://www.facebook.com/profile.php?id=100075651559328"
                target={"_blank"}
              >
                <div className="bg-white rounded-full p-[10px]">
                  <IconBrandFacebook size={24} stroke={2} />
                </div>
              </a>
            </Tooltip>
            <Tooltip label="join our Telegram channel">
              <a href="https://t.me/passionateheart" target={"_blank"}>
                <div className="bg-white rounded-full p-[10px]">
                  <IconBrandTelegram size={24} stroke={1.5} />
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
