import { useAccount, useContractWrite } from "wagmi";
import { NFTAddress, password } from "../constants";
import NFTAbi from "../abis/NFTAbi.json";

const useNFTMint = () => {
  const { isConnected } = useAccount();

  const { writeAsync, status } = useContractWrite({
    mode: "recklesslyUnprepared",
    address: NFTAddress,
    abi: NFTAbi,
    functionName: "mint",
    args: [process.env.PASSWORD],
  });

  return {
    freeMintAsync: writeAsync,
    freeMintStatus: status,
    isConnected,
  };
};

export default useNFTMint;
