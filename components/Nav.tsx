import styles from "../styles/Home.module.css";
import { Box, Stack, Link, Spacer, scaleFadeConfig } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import LocaleSwitcher from "./LocaleSwitcher";
import React from "react";

interface Props {
  isHeigher: boolean;
}

const nav: React.FC<Props> = ({ isHeigher }) => {
  interface NavItem {
    label: any;
    href?: string;
  }

  const NAV_ITEMS: Array<NavItem> = [
    {
      label: "ABOUT",
      href: "https://medium.com/@pupupupuisland.eth/%E6%A3%92%E6%89%93sbf%E5%8D%B3%E5%8F%AF%E5%85%8D%E8%B2%BB%E9%A0%98%E5%8F%96-cyberbonk-nft-1e10c66efef3",
    },
    {
      label: "OPENSEA",
      href: "https://opensea.io/collection/cyberbonk",
    },
  ];

  return (
    <Stack
      direction={"row"}
      spacing={4}
      className={styles["nav"]}
      w="100%"
      zIndex={"3"}
      pos={isHeigher ? "relative" : "absolute"}
      top={isHeigher ? "0" : "110px"}
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
        chainStatus="name"
        showBalance={false}
      />
      ;
    </Stack>
  );
};

export default nav;
