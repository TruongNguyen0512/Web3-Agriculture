const { ethers } = require("hardhat"); 

async function main() {
  const TestConnection = await ethers.getContractFactory("TestConnection");
  console.log("Deploying TestConnection to Goerli Testnet...");
  
  const testConnection = await TestConnection.deploy();
  await testConnection.deployed();

  console.log("TestConnection deployed to:", testConnection.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
