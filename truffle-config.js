const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
const path = require("path");

module.exports = {
  // See <http://truffleconst HDWalletProvider = require('@truffle/hdwallet-provider');framework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "src/contracts"),
  networks: {
    develop: {
      host: "localhost",
      port: 7545,
      network_id: "*"
    },
    matic: {
      provider: () => new HDWalletProvider(mnemonic, `https://rpc-mumbai.maticvigil.com`),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      gas: 6000000,
      gasPrice: 10000000000,
    },
  }
};
