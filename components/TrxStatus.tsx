import { Text } from "@chakra-ui/react";

interface Props {
  status: string;
  count: number;
  isMobile: boolean;
}

const TrxStatus: React.FC<Props> = ({ status, count, isMobile }) => {
  return (
    <>
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
    </>
  );
};
export default TrxStatus;
