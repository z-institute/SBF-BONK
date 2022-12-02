import type { GetStaticPropsContext, NextPage } from "next";
import styles from "../styles/Home.module.css";
import Background from "../public/background.png";
import Cz from "../public/cz.png";
import Sbf from "../public/sbf.png";
import Question from "../public/question.png";
import Nav from "../components/Nav";
import classNames from "classnames";
import { useRef, useEffect, useState } from "react";
import useNFTMint from "../hooks/useNFTMint";
import { Howl } from "howler";
import {
  Container,
  Box,
  Text,
  Button,
  Stack,
  useMediaQuery,
  Image,
  Link,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import ReactGA from "react-ga";

const Home: NextPage = () => {
  // language hooks
  const t = useTranslations("Index");
  // index page content
  const czActive = useRef<HTMLImageElement>(null);
  const SbfActive = useRef<HTMLImageElement>(null);
  const BatActive = useRef<HTMLImageElement>(null);
  const BonkRef = useRef<HTMLButtonElement>(null);
  const [count, setCount] = useState(0);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  // Mint
  const { freeMintAsync, isConnected } = useNFTMint();
  const [status, setStatus] = useState("done!");
  const [link, setLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  const sound = new Howl({
    src: ["/bonk.m4a"],
    html5: true,
  });

  const [isH, setIsH] = useState(false);
  const [height, setHeight] = useState(
    typeof window === "undefined" ? 0 : window.innerHeight
  );
  useEffect(() => {
    if (height >= 1094) {
      setIsH(true);
    }
  }, []);

  // Desktop - click func
  function mouseDown() {
    sound.play();
    if (czActive.current) {
      czActive.current.style.transform = "rotate(5.81deg)";
    }
    if (SbfActive.current) {
      SbfActive.current.style.height = "148px";
      SbfActive.current.style.top = "642px";
    }
    if (BatActive.current) {
      BatActive.current.style.transform = "rotate(80deg)";
    }
    if (BonkRef.current) {
      BonkRef.current.style.backgroundColor = "#13C4E6";
      BonkRef.current.style.color = "#ffffff";
    }
  }

  function mouseUp() {
    sound.stop();
    if (czActive.current) {
      czActive.current.style.transform = "rotate(0deg)";
    }
    if (SbfActive.current) {
      SbfActive.current.style.height = "304px";
      SbfActive.current.style.top = "482px";
    }
    if (BatActive.current) {
      BatActive.current.style.transform = "rotate(0deg)";
    }
    if (BonkRef.current) {
      BonkRef.current.style.backgroundColor = "#ffffff";
      BonkRef.current.style.color = "#169bb4";
    }
  }

  // mobile - click on screen
  if (typeof window !== "undefined" && isMobile) {
    document.body.addEventListener("touchstart", mouseDown, true);
    document.body.addEventListener("touchend", mouseUp, true);
  }

  return (
    <>
      <Container
        maxW="2000px"
        overflow="hidden"
        mt={isMobile ? "-50%" : 0}
        left={isMobile ? "-6%" : "0"}
        w={isMobile ? "150%" : "100%"}
        position={isMobile ? "absolute" : "relative"}
        centerContent
      >
        <Nav />
        <Box
          bgImage={`url(${Background.src})`}
          w="1944px"
          h="1094px"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          pos="relative"
          mt={"-70px"}
        >
          <Text
            className={styles["logo"]}
            data-stroke="CYBERBONK"
            fontSize={isMobile ? "80px" : "90px"}
            _before={
              isMobile
                ? { textShadow: "none" }
                : {
                    textShadow: "0px 11px 25px rgba(0, 0, 0, 1)",
                  }
            }
          >
            CYBERBONK
          </Text>
          <Text className={styles["slogan"]}>
            Bonk 1111 times to free mint NFT
          </Text>
          {/* -----↓↓↓↓ warnings ↓↓↓↓-----  */}
          {/* Risk spreading */}
          <Box>
            <Box className={classNames(styles["que5"], styles["que"])} p={5}>
              <Image src={Question.src} alt="" />
            </Box>
            <Box className={classNames(styles["que5Text"], styles["queText"])}>
              <Text className={styles["queText__en"]}>Risk spreading !</Text>
              <Text className={styles["queText__tw"]}>
                {t("riskDescription")}
              </Text>
            </Box>
          </Box>
          {/* Key management */}
          <Box>
            <Box className={classNames(styles["que6"], styles["que"])} p={5}>
              <Image src={Question.src} alt="" />
            </Box>
            <Box className={classNames(styles["que6Text"], styles["queText"])}>
              <Text className={styles["queText__en"]}>Key management !</Text>
              <Text className={styles["queText__tw"]}>
                {t("keyDescription")}
              </Text>
            </Box>
          </Box>
          {/* transparency ! */}
          <Box>
            <Box className={classNames(styles["que7"], styles["que"])} p={5}>
              <Image src={Question.src} alt="" />
            </Box>
            <Box className={classNames(styles["que7Text"], styles["queText"])}>
              <Text className={styles["queText__en"]}>Transparency !</Text>
              <Text className={styles["queText__tw"]}>
                {t("transparencyDescription")}
              </Text>
            </Box>
          </Box>
          {/* Management ! */}
          <Box>
            <Box className={classNames(styles["que8"], styles["que"])} p={5}>
              <Image src={Question.src} alt="" />
            </Box>
            <Box className={classNames(styles["que8Text"], styles["queText"])}>
              <Text className={styles["queText__en"]}>Asset management !</Text>
              <Text className={styles["queText__tw"]}>
                {t("assetDescription")}
              </Text>
            </Box>
          </Box>
          {/* Audit procedure ! */}
          <Box>
            <Box className={classNames(styles["que9"], styles["que"])} p={5}>
              <Image src={Question.src} alt="" />
            </Box>
            <Box className={classNames(styles["que9Text"], styles["queText"])}>
              <Text className={styles["queText__en"]}>Audit procedure !</Text>
              <Text className={styles["queText__tw"]}>
                {t("AuditDescription")}
              </Text>
            </Box>
          </Box>
          {/* decentralization of power ! */}
          {!isMobile && (
            <Box>
              <Box className={classNames(styles["que10"], styles["que"])} p={5}>
                <Image src={Question.src} alt="" />
              </Box>
              <Box
                className={classNames(styles["que10Text"], styles["queText"])}
              >
                <Text className={styles["queText__en"]}>
                  Decentralization of power
                </Text>
                <Text className={styles["queText__tw"]}>
                  {t("decentralizationDescription")}
                </Text>
              </Box>
            </Box>
          )}

          {/* images */}
          <Image
            src={Cz.src}
            alt="CZ"
            className={styles["cz"]}
            ref={czActive}
          />
          <Image
            src={Sbf.src}
            alt="SBF"
            className={styles["sbf"]}
            ref={SbfActive}
          />
          <Box className={styles["batWrapper"]} ref={BatActive} />

          {/* BONK BUTTON */}
          {isMobile ||
            (count < 10 && (
              <Button
                w="200px"
                height="50px"
                position="absolute"
                fontSize="30px"
                color="#07839E"
                borderRadius="38.5px"
                onMouseDown={mouseDown}
                onMouseUp={mouseUp}
                className={styles["bonkButton"]}
                ref={BonkRef}
                zIndex="10"
                onClick={handleClick}
                isLoading={isLoading}
                top={
                  isH
                    ? "calc(100vh - (100vh - 1094px) - 137px)"
                    : "calc(100vh - 137px)"
                }
                _hover={{ color: "#ffffff", backgroundColor: "#07839E" }}
              >
                BONK
              </Button>
            ))}

          {/* Mint Button */}
          {isMobile ||
            (count >= 10 && (
              <Button
                as="a"
                w="200px"
                height="50px"
                position="absolute"
                fontSize="30px"
                color="#07839E"
                borderRadius="38.5px"
                className={styles["bonkButton"]}
                top={
                  isH
                    ? "calc(100vh - (100vh - 1094px) - 137px)"
                    : "calc(100vh - 137px)"
                }
                zIndex="10"
                isLoading={isLoading}
                onClick={async () => {
                  // 先判斷是否有連結錢包
                  if (isConnected == false) {
                    window.alert("請先連結錢包");
                  } else {
                    // 有連結錢包後才能執行 mint
                    try {
                      setIsLoading(true);
                      setStatus("Freeminting...");
                      let freeMintTx = await freeMintAsync?.();
                      await freeMintTx?.wait();
                      setStatus("Minted!");
                      setLink(
                        `https://goerli.etherscan.io/tx/${freeMintTx?.hash}`
                      );
                      setCount(0);
                      setIsLoading(false);
                    } catch (error) {
                      setStatus(
                        "Error,can only mint one NFT per address or please try again."
                      );
                      setIsLoading(false);
                    }
                  }
                }}
              >
                MINT
              </Button>
            ))}

          {/* Transaction Status */}
          {isMobile ||
            (count >= 10 && (
              <Text
                position="absolute"
                fontSize="24px"
                bottom="35px"
                color="#ffffff"
                left="50%"
                transform="translateX(-50%)"
              >
                {status}
              </Text>
            ))}

          {/* Transaction Link */}
          {link && (
            <Text
              position="absolute"
              fontSize="16px"
              bottom="10px"
              color="#ffffff"
              left="50%"
              transform="translateX(-50%)"
              zIndex={10}
              textDecoration="underline"
            >
              <Link href={link} target="_blank">
                View on block explorer
              </Link>
            </Text>
          )}

          {/* Mobile - instruction text */}
          {!isMobile ? (
            count < 10 && (
              <Text
                position="absolute"
                fontSize="30px"
                top={
                  isH
                    ? "calc(100vh - (100vh - 1094px) - 74px)"
                    : "calc(100vh - 74px)"
                }
                left="50%"
                transform="translateX(-50%)"
                color="#ffffff"
              >
                {count} / 1111
              </Text>
            )
          ) : (
            <Stack
              position="absolute"
              fontSize="20px"
              bottom="7%"
              left="50%"
              transform="translateX(-50%)"
              color="#9FCAD3"
            >
              <Text align="center">Click to BONK</Text>
              <Text align="center">*Use PC to full experience</Text>
            </Stack>
          )}
        </Box>
        <UnorderedList
          color={"#9FCAD3"}
          position="absolute"
          top={
            isH
              ? "calc(100vh - (100vh - 1094px) - 110px)"
              : "calc(100vh - 110px)"
          }
          left="20px"
          listStyleType={"none"}
        >
          Contract | Tina Lee Front-end | Siling Wang, Chou Yi Tao ART & UI |
          pupupupuisland
          <ListItem>Contract | Tina Lee</ListItem>
          <ListItem>Front-end | Siling Wang, Chou Yi Tao</ListItem>
          <ListItem>ART & UI | pupupupuisland</ListItem>
        </UnorderedList>
      </Container>
    </>
  );
};

export default Home;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../public/locales/${locale}.json`)).default,
    },
  };
}
