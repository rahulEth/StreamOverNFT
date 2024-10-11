require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

const META_MASK_PRIVATE_KEY= process.env.APP_PRIVATE_KEY;
const INFURA_API_KEY= process.env.INFURA_API_KEY;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers:[
      {
        version: "0.8.20"
      },
      {
        version: "0.8.27"
      }
    ]
  },
  etherscan: {
    apiKey: {
      baseSepolia: process.env.BASE_SCAN_TESTNET
    }
  },
  networks: {
    BaseSepoliaTestnet:{
      url: `https://base-sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [META_MASK_PRIVATE_KEY] ,
    },
  }
};
