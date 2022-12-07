import { Text } from "@chakra-ui/react";

interface Props {
  status: string;
  count: number;
  isMobile: boolean;
  isHeigher: boolean;
}

const TrxStatus: React.FC<Props> = ({ status, count, isMobile, isHeigher }) => {
  return (
    <>
      {isMobile ||
        (count >= 111 && (
          <Text
            position="absolute"
            fontSize="24px"
            bottom="35px"
            color="#ffffff"
            left="50%"
            transform="translateX(-50%)"
            top={
              isHeigher
                ? "calc(100vh - (100vh - 1094px) - 74px)"
                : "calc(100vh -  (100vh - 1094px) - 26px - 74px)"
            }
          >
            {status}
          </Text>
        ))}
    </>
  );
};
export default TrxStatus;
