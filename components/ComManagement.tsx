import styles from "../styles/Home.module.css";
import Question from "../public/question.png";
import classNames from "classnames";
import { Box, Text, Image } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
const ComManagement = () => {
  // language hooks
  const t = useTranslations("Index");
  return (
    <>
      <Box>
        <Box className={classNames(styles["que8"], styles["que"])} p={5}>
          <Image src={Question.src} alt="" />
        </Box>
        <Box className={classNames(styles["que8Text"], styles["queText"])}>
          <Text className={styles["queText__en"]}>Asset management !</Text>
          <Text className={styles["queText__tw"]}>{t("assetDescription")}</Text>
        </Box>
      </Box>
    </>
  );
};

export default ComManagement;
