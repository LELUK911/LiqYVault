
async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with account:", deployer.address);

    const Vault = await ethers.getContractFactory("Vault");


    const vault = await Vault.connect(deployer).deploy({
        gasLimit: 30000000
    });





    await vault.waitForDeployment();
    const address = await vault.getAddress()
    console.log("Vault deployed at:", address);

    console.log("Vault initialized!");


}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
