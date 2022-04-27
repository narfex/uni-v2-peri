const { ethers } = require("hardhat");

const main = async () => {
  const RouterContract = await ethers.getContractFactory("UniswapV2Router02");
  const router = await RouterContract.deploy(
      "0x4054B6a2f6b31Ea73E28a7Db553540E4Fb2a6d8F", // Factory contract
      "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" // WBNB contract for BSC network
  );

  await router.deployed();

  console.log("Router deployed:", router.address);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });