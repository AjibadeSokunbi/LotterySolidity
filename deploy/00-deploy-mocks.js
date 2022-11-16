const {developmentChains} = require("../helper-hardhat-config")


const BASE_FEE= ethers.utils.parseEther("0.25") //going to cost 0.25 link per transaction, we get to be the one sponsoring this random number
const GAS_PRICE_LINK = 1e9

module.exports = async function ({getNamedAccounts, deployments}) { 
    const {deploy, log} = deployments
    const {deployer} = await getNamedAccounts()
    const chainId = network.config.chainId
    const args = [BASE_FEE, GAS_PRICE_LINK]

    if (chainId == 31337) {
        log("Local network detected! Deploying mocks....")
        // deploy mock vrfCoordinatorV2 ,,,,
        await deploy("VRFCoordinatorV2Mock",{
            from: deployer,
            log: true,
            args: args,
        })
        log("Mocks deployed!")
        log("----------------")
    }
}


