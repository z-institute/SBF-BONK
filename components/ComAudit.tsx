import styles from "../styles/Home.module.css";
import Question from "../public/question.png";
import classNames from "classnames";
import { Box, Text, Image } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
const ComAudit = () => {
  // language hooks
  const t = useTranslations("Index");
  return (
    <>
      <Box>
        <Box className={classNames(styles["que9"], styles["que"])} p={5}>
          <Image src={Question.src} alt="" />
        </Box>
        <Box className={classNames(styles["que9Text"], styles["queText"])}>
          <Text className={styles["queText__en"]}>Audit procedure !</Text>
          <Text className={styles["queText__tw"]}>{t("AuditDescription")}</Text>
        </Box>
      </Box>
    </>
  );
};

export default ComAudit;
