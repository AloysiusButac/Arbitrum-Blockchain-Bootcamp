import { ethers } from "hardhat";

async function main() {
  const token = await ethers.deployContract("SharedTango", ["0x4d63B50bba1714449c17A58aEDb6e5bf6A7728e5"]);

  await token.waitForDeployment();
  
  console.log(
    `Token deployed to ${token.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
