const hre = require("hardhat");

async function main() {
  // Get your deployed contract addresses
  const BUCKET_ADDRESS = "0x50542D49bB36dBC410cC21308BFA1eF3922B9dF6";
  const SHIRE_ADDRESS = "0x6df8FFbFF0726c372892eae72CE1993dB159CA22";
  
  // Get contract instances
  const shire = await hre.ethers.getContractAt("Shire", SHIRE_ADDRESS);
  const bucket = await hre.ethers.getContractAt("Bucket", BUCKET_ADDRESS);

  // Amount to drop (e.g., 1 token = 1 * 10^18)
  const amount = hre.ethers.parseEther("0");

  // Get the signer
  //let check = await hre.ethers.getSigners();
  //console.log('signer is: ', check);
  
  const [signer] = await hre.ethers.getSigners();
  
  // Check initial balance
  const balance = await shire.balanceOf(signer.address);
  console.log("Current balance:", hre.ethers.formatEther(balance), "SHR");

  try {
    // First approve the Bucket contract to spend tokens
    console.log("Approving tokens...");
    const approveTx = await shire.approve(BUCKET_ADDRESS, amount);
    await approveTx.wait();
    console.log("Approval successful!");

    // Then call the drop function
    console.log("Dropping tokens...");
    const dropTx = await bucket.drop(SHIRE_ADDRESS, amount);
    await dropTx.wait();
    console.log("Successfully dropped tokens!");
    
    // Check new balance
    const newBalance = await shire.balanceOf(signer.address);
    console.log("New balance:", hre.ethers.formatEther(newBalance), "SHR");
  } catch (error) {
    console.error("Error:", error);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});