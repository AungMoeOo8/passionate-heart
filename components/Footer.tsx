import {
  ActionIcon,
  Anchor,
  AnchorProps,
  Box,
  Container,
  Text,
  Tooltip,
} from "@mantine/core";
import { IconBrandFacebook, IconBrandTelegram } from "@tabler/icons";
import { ReactNode } from "react";

export default function Footer() {
  return (
    <Container
      size={"lg"}
      sx={(theme) => ({
        padding: "30px 16px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
        borderTop: `solid 1px ${theme.colors.gray[2]}`,
      })}
    >
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
      <Text weight={300} size={"sm"} align="center">
        Copyright © 2022 by <br /> passionateheartmyanmar.com
      </Text>
    </Container>
  );
}
