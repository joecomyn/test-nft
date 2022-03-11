/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("dotenv").config();
 require("@nomiclabs/hardhat-ethers");

/**const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
*/

const API_URL = "https://eth-ropsten.alchemyapi.io/v2/ZKPUSq20_NXH7o8fNGXPZwzBmFWLTNYC";
const PRIVATE_KEY = "2c20bb34c6d9c37f46bacde427d92f04f9c1db819ba7d19cce72bef67fc6b249";

module.exports = {
  solidity: "0.8.1",
  defaultNetwork: "ropsten",
   networks: {
      hardhat: {},
      ropsten: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
};
