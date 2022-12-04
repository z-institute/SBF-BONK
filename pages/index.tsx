import type { GetStaticPropsContext, NextPage } from "next";
import styles from "../styles/Home.module.css";
import Background from "../public/background.png";
import Cz from "../public/cz.png";
import Sbf from "../public/sbf.png";
import Nav from "../components/Nav";
import { useRef, useEffect, useState } from "react";
import useNFTMint from "../hooks/useNFTMint";
import { Container, Box, Button, useMediaQuery, Image } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import Members from "../components/Members";
import MobileInstru from "../components/MobileInstru";
import TrxStatus from "../components/TrxStatus";
import TrxLink from "../components/TrxLink";
import Title from "../components/Title";
import ComRiskSpread from "../components/ComRiskSpread";
import ComKeyManage from "../components/ComKeyManage";
import ComTransparency from "../components/ComTransparency";
import ComManagement from "../components/ComManagement";
import ComAudit from "../components/ComAudit";
import ComDecen from "../components/ComDecen";
import useMouseEvent from "../hooks/useMouseEvent";

const Home: NextPage = () => {
  // language hooks
  const t = useTranslations("Index");
  // index page content
  const czRef = useRef<HTMLImageElement>(null);
  const sbfRef = useRef<HTMLImageElement>(null);
  const batRef = useRef<HTMLImageElement>(null);
  const bonkRef = useRef<HTMLButtonElement>(null);
  const [count, setCount] = useState(0);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { mouseDown, mouseUp } = useMouseEvent(
    czRef,
    sbfRef,
    batRef,
    bonkRef,
    isMobile
  );

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

  const [isH, setIsH] = useState(false);
  const [height, setHeight] = useState(
    typeof window === "undefined" ? 0 : window.innerHeight
  );
  useEffect(() => {
    if (height >= 1094) {
      setIsH(true);
    }
  }, []);

  console.log(height);

  // mobile - click on screen
  if (typeof window !== "undefined" && isMobile) {
    document.body.addEventListener("touchstart", mouseDown, true);
    document.body.addEventListener("touchend", mouseUp, true);
  }

  return (
    <>
      <Container
        maxW="1440px"
        overflow="hidden"
        left={isMobile ? "0" : "0"}
        position={isMobile ? "relative" : "relative"}
        p={"0"}
        centerContent
      >
        {!isMobile && <Nav />}
        <Box
          bgImage={`url(${Background.src})`}
          w="1944px"
          h="1094px"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          pos="relative"
          mt={isMobile ? "-250px" : "-70px"}
          backgroundSize={isMobile ? "70%" : "unset"}
        >
          <Title isMobile={isMobile} />

          {/* -----↓↓↓↓ warnings ↓↓↓↓-----  */}
          <ComRiskSpread />
          <ComKeyManage />
          <ComTransparency />
          <ComManagement />
          <ComAudit />
          <ComDecen isMobile={isMobile} />
          {/* -----↑↑↑↑ warnings ↑↑↑↑-----  */}

          <Image src={Cz.src} alt="CZ" className={styles["cz"]} ref={czRef} />
          <Image
            src={Sbf.src}
            alt="SBF"
            className={styles["sbf"]}
            ref={sbfRef}
          />
          <Box className={styles["batWrapper"]} ref={batRef} />
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
                ref={bonkRef}
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
          <TrxStatus status={status} count={count} isMobile={isMobile} />
          {/* Transaction Link */}
          <TrxLink link={link} />
          <MobileInstru count={count} isHeigher={isH} isMobile={isMobile} />
        </Box>
        <Members isHeigher={isH} isMobile={isMobile} />
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
