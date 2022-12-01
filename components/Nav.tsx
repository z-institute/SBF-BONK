import styles from "../styles/Home.module.css";
import {
  Box,
  Stack,
  Link,
  Popover,
  PopoverTrigger,
  Spacer,
} from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useTranslations } from "next-intl";

const nav = () => {
  // language hooks
  const t = useTranslations("nav");

  interface NavItem {
    label: any;
    href?: string;
  }

  const NAV_ITEMS: Array<NavItem> = [
    {
      label: `${t('about')}`,
      href: "https://opensea.io/",
    },
    {
      label: "OPENSEA",
      href: "https://opensea.io/",
    },
  ];

  return (
    <Stack direction={"row"} spacing={4} className={styles["nav"]}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} p={5}>
          <Link
            href={navItem.href ?? "#"}
            fontSize={"20px"}
            fontWeight={400}
            color="#ffffff"
          >
            {navItem.label}
          </Link>
        </Box>
      ))}
      <Spacer />
      <ConnectButton
        accountStatus="address"
        chainStatus="none"
        showBalance={false}
      />
      ;
    </Stack>
  );
};

export default nav;
