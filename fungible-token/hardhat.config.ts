import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
// import environment
import * as env from 'dotenv'; 
// config environment
env.config();

const {PRIVATE_KEY, ETHERSCAN_API_KEY} = process.env

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
  "arbitrum-sepolia":{
      url: "https://sepolia-rollup.arbitrum.io/rpc",
      accounts: [PRIVATE_KEY ?? ""],
      chainId: 421614
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY ?? "",
    customChains: [
      {
        network: "arbitrum-sepolia",
        chainId: 421614,
        urls: {
          apiURL: "https://api-sepolia.arbiscan.io/api",
          browserURL: "https://sepolia.arbiscan.io/",
        },
      },
    ],
  }
  
};



export default config;
