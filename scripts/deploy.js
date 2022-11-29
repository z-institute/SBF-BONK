const hre = require("hardhat");
const tokenUri = "https://clonex-assets.rtfkt.com/";

async function main() {
  const NFT = await hre.ethers.getContractFactory("CyberBonk");
  const nft = await NFT.deploy(tokenUri);

  console.log("Contract is deploying... Please wait");

  await nft.deployed();

  console.log("Contract address: " + nft.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
