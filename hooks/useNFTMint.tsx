import { useAccount, useContractWrite } from "wagmi";
import { NFTAddress, password } from "../constants";
import NFTAbi from "../abis/NFTAbi.json";
import { utils } from "ethers";

const useNFTMint = (mintCount: number) => {
  const { address, isConnected } = useAccount();

  const { writeAsync, status } = useContractWrite({
    mode: "recklesslyUnprepared",
    address: NFTAddress,
    abi: NFTAbi,
    functionName: "mint",
    args: [password],
  });

  return {
    freeMintAsync: writeAsync,
    freeMintStatus: status,
    isConnected,
  };
};

export default useNFTMint;
