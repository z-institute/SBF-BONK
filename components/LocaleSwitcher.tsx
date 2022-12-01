import styles from "../styles/Home.module.css";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");

  const { locale, locales, route } = useRouter();
  const otherLocale = locales?.find((cur) => cur !== locale);

  return (
    <Box
      fontSize={"20px"}
      fontWeight={400}
      color="#ffffff"
      textAlign="center"
      lineHeight="70px"
    >
      <Link href={route} locale={otherLocale}>
        {t("switchLocale", { locale: otherLocale })}
      </Link>
    </Box>
  );
}
