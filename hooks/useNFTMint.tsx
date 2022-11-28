import { useAccount, useContractWrite } from "wagmi";
import { NFTAddress, PUBLIC_PRICE } from "../constants";
import NFTAbi from "../abis/NFTAbi.json";
import { utils } from "ethers";

const useNFTMint = (mintCount: number) => {
  const { address, isConnected } = useAccount();

  const { writeAsync, status } = useContractWrite({
    mode: "recklesslyUnprepared",
    address: NFTAddress,
    abi: NFTAbi,
    functionName: "publicMintSecond",
    args: [address, mintCount.toString()],
    overrides: {
      from: address,
      value: utils.parseEther((PUBLIC_PRICE * mintCount).toString()),
    },
  });

  return {
    freeMintAsync: writeAsync,
    freeMintStatus: status,
    isConnected,
  };
};

export default useNFTMint;
