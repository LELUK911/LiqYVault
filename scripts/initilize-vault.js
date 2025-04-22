const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Governator:", deployer.address);

    const vaultFactory = await ethers.getContractFactory("Vault", { signer: deployer });

    const vault = new ethers.Contract(
        "0x5FbDB2315678afecb367f032d93F642f64180aa3",
        vaultFactory.interface,
        deployer
    );

    await vault["initialize(address,address,address,string,string,address,address)"](
        "0x78c1b0c915c4faa5fffa6cabf0219da63d7f4cb8", // token
        deployer.address, // governance
        deployer.address, // rewards
        "Vault stMNT",    // name
        "stMNT",          // symbol
        deployer.address, // guardian
        deployer.address,  // management
        { gasLimit: 5_000_000 }
    );



    console.log("Vault initialized!");









}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
