import styles from "../styles/Home.module.css";
import { Box, Stack, Link, Spacer, scaleFadeConfig } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import LocaleSwitcher from "./LocaleSwitcher";

const nav = () => {
  interface NavItem {
    label: any;
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

  return (
    <Stack
      direction={"row"}
      spacing={4}
      className={styles["nav"]}
      w="100%"
      zIndex={"3"}
    >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} p={5} _hover={{ transform: "scale(1.1)" }}>
          <Link
            href={navItem.href ?? "#"}
            fontSize={"20px"}
            fontWeight={400}
            color="#ffffff"
            _hover={{ textDecoration: "none" }}
          >
            {navItem.label}
          </Link>
        </Box>
      ))}
      <Box _hover={{ transform: "scale(1.1)" }}>
        <LocaleSwitcher />
      </Box>
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
