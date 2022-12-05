import styles from "../styles/Home.module.css";
import { Text } from "@chakra-ui/react";

interface Props {
  isMobile: boolean;
}

const Title: React.FC<Props> = ({ isMobile }) => {
  return (
    <>
      <Text
        className={styles["logo"]}
        data-stroke="CYBERBONK"
        fontSize={isMobile ? "60px" : "90px"}
        _before={
          isMobile
            ? { textShadow: "none" }
            : {
                textShadow: "0px 11px 25px rgba(0, 0, 0, 1)",
              }
        }
        left={"50%"}
        transform={"translateX(-50%)"}
      >
        CYBERBONK
      </Text>
      <Text className={styles["slogan"]}>Bonk 111 times to free mint NFT</Text>;
    </>
  );
};
export default Title;
