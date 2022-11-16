require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
require("hardhat-deploy")


/** @type import('hardhat/config').HardhatUserConfig */

const URL = process.env.URL;
const KEY = process.env.KEY
const EKEY = process.env.EKEY
const CKEY = process.env.CKEY

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    goerli: {
        url: URL,
        accounts: [KEY],
        chainId: 5,
        blockConfirmations: 6,
    },
  },
  localhost: {
    url: "http://127.0.0.1:8545/",
    chainId: 31337,
},
      solidity: {
        compilers: [
            {
                version: "0.8.7",
            },
            {
                version: "0.6.6",
            },
        ],
      },
  etherscan: {

    apiKey: {
      goerli: EKEY
    },
  },
  gasReporter: {
    enabled: false,
    outputFile: "gas-report.txt", 
    noColors: true,
    currency: "USD",
    coinmarketcap: CKEY,
  },
  namedAccounts: {
    deployer: {
        default: 0, // here this will by default take the first account as deployer
        1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
},
};
