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
  IconPhone,
  IconPhoneCall,
} from "@tabler/icons";

export default function Footer() {
  return (
    <Container
      size={"lg"}
      sx={(theme) => ({
        padding: "30px 16px",
        display: "flex",
        gap: "20px",
        flexDirection: "column",
        alignItems: "center",
        borderTop: `solid 1px ${theme.colors.gray[2]}`,
      })}
    >
      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
      >
        <Text
          size={"sm"}
          weight={300}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <IconPhone stroke={1} /> 09 988 209589
        </Text>

        <Box sx={{ display: "flex", gap: "20px" }}>
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
        Copyright © 2022<br /> passionateheartmyanmar.com
      </Text>
    </Container>
  );
}
