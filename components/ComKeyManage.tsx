import styles from "../styles/Home.module.css";
import Question from "../public/question.png";
import classNames from "classnames";
import { Box, Text, Image } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
const ComKeyManage = () => {
  // language hooks
  const t = useTranslations("Index");
  return (
    <>
      <Box>
        <Box className={classNames(styles["que6"], styles["que"])} p={5}>
          <Image src={Question.src} alt="" />
        </Box>
        <Box className={classNames(styles["que6Text"], styles["queText"])}>
          <Text className={styles["queText__en"]}>Key management !</Text>
          <Text className={styles["queText__tw"]}>{t("keyDescription")}</Text>
        </Box>
      </Box>
    </>
  );
};

export default ComKeyManage;
