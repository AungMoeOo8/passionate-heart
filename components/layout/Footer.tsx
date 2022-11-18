import {
  ActionIcon,
  Anchor,
  AnchorProps,
  Box,
  Container,
  Text,
  Tooltip,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandTelegram,
  IconClock,
  IconLocation,
  IconMail,
  IconPhone,
  TablerIcon,
} from "@tabler/icons";
import { useResponsive } from "../../hooks";

const Info = ({ icon, info }: { icon: TablerIcon; info: string }) => {
  return (
    <Text
      size={"sm"}
      weight={300}
      sx={{ display: "flex", alignItems: "start", gap: "10px" }}
    >
      {icon({ stroke: 1.5 })} {info}
    </Text>
  );
};

export default function Footer() {
  const { tablet } = useResponsive();
  return (
    <Container
      size={"lg"}
      sx={(theme) => ({
        padding: "50px 16px",
        display: "flex",
        gap: "30px",
        flexDirection: "column",
        alignItems: "center",
        borderTop: `solid 1px ${theme.colors.gray[2]}`,
      })}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: tablet ? "row" : "column",
          justifyContent: "space-between",
          gap: "30px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Info icon={IconPhone} info="09 988 209589" />
          <Info icon={IconMail} info="passionateheartmyanmar@gmail.com" />
          <Info
            icon={IconLocation}
            info="Hledan Centre, 2nd Floor Learning Hub
            Room 2"
          />
          <Info icon={IconClock} info="Tues, Thurs, Sat, Sun (10AM - 3PM)" />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Tooltip label="follow us on Facebook">
            <Anchor
              href="https://www.facebook.com/profile.php?id=100075651559328"
              target={"_blank"}
            >
              <ActionIcon size="xl" variant="default" radius="xl">
                <IconBrandFacebook size={25} stroke={1.5} />
              </ActionIcon>
            </Anchor>
          </Tooltip>
          <Tooltip label="join our Telegram channel">
            <Anchor href="https://t.me/passionateheart" target={"_blank"}>
              <ActionIcon size="xl" variant="default" radius="xl">
                <IconBrandTelegram size={25} stroke={1.5} />
              </ActionIcon>
            </Anchor>
          </Tooltip>
        </Box>
      </Box>
      <Text weight={300} size={"sm"} align="center">
        Copyright © 2022
        <br /> passionateheartmyanmar.com
      </Text>
    </Container>
  );
}
