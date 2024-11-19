require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
const { ALCHEMY_SEPOLIA_URL, METAMASK_PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.27",
  networks: {
    sepolia: {
      url: ALCHEMY_SEPOLIA_URL,
      accounts: [`0x${METAMASK_PRIVATE_KEY}`],
    },
  },
};
