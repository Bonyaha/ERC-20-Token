// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("ShireModule", (m) => {
    // Deploy the Shire token contract
    const shireToken = m.contract("Shire", []);

    console.log("Deploying Shire Token...");

    return { shireToken };
});
