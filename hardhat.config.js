require('@nomicfoundation/hardhat-toolbox');
require("@nomiclabs/hardhat-vyper");
require("dotenv").config();

module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  vyper: {
    compilers: [
      { version: "0.2.11" },
      { version: "0.3.3" },
      { version: "0.3.10" }
    ]
  },
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/YOUR_INFURA_KEY",
      accounts: [process.env.PRIVATE_KEY]
    },
    mantle: {
      url: "https://rpc.mantle.xyz",
      chainId: 5000,
      accounts: [process.env.PRIVATE_KEY],
      gasPrice : 200000
    },
  },
  etherscan: {
    apiKey: "YOUR_ETHERSCAN_API_KEY"
  }
};
