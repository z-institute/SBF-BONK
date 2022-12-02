import { Text, Link } from "@chakra-ui/react";

interface Props {
  link: string;
}

const TrxLink: React.FC<Props> = ({ link }) => {
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
