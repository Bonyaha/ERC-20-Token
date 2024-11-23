const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const TokenTransferHelperModule = buildModule("TokenTransferHelperModule", (m) => {
  // Deploy TokenTransferHelper with existing contract addresses
  const helper = m.contract(
    "TokenTransferHelper",
    [
      "YOUR_BUCKET_CONTRACT_ADDRESS",    // Replace with actual Bucket address
      "YOUR_SHIRE_TOKEN_ADDRESS"         // Replace with actual Shire address
    ]
  );

  return {
    helper
  };
});

module.exports = TokenTransferHelperModule;