const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("BucketModule", (m) => {
  // Deploy the Bucket contract without any constructor parameters
  const bucket = m.contract("Bucket");
  
  return { bucket };
});