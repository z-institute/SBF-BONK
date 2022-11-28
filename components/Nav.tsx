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

const nav = () => {
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

interface NavItem {
  label: string;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "ABOUT",
    href: "https://opensea.io/",
  },
  {
    label: "OPENSEA",
    href: "https://opensea.io/",
  },
];
