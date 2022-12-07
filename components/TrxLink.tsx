import { Text, Link } from "@chakra-ui/react";

interface Props {
  link: string;
  isHeigher: boolean;
}

const TrxLink: React.FC<Props> = ({ link, isHeigher }) => {
  return (
    <>
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
          top={
            isHeigher
              ? "calc(100vh - (100vh - 1094px) - 74px)"
              : "calc(100vh -  (100vh - 1094px) + 15px - 74px)"
          }
        >
          <Link href={link} target="_blank">
            View on block explorer
          </Link>
        </Text>
      )}
    </>
  );
};
export default TrxLink;
