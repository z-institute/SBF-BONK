import styles from "../styles/Home.module.css";
import Question from "../public/question.png";
import classNames from "classnames";
import { Box, Text, Image } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

interface Props {
  isMobile: boolean;
}
const ComAudit: React.FC<Props> = ({ isMobile }) => {
  // language hooks
  const t = useTranslations("Index");
  return (
    <>
      {!isMobile && (
        <Box>
          <Box className={classNames(styles["que10"], styles["que"])} p={5}>
            <Image src={Question.src} alt="" />
          </Box>
          <Box className={classNames(styles["que10Text"], styles["queText"])}>
            <Text className={styles["queText__en"]}>
              Decentralization of power
            </Text>
            <Text className={styles["queText__tw"]}>
              {t("decentralizationDescription")}
            </Text>
          </Box>
        </Box>
      )}
    </>
  );
};

export default ComAudit;
