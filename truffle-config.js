const path = require("path");
require("dotenv").config({path: "./.env"});
const HDWalletProvider = require("@truffle/hdwallet-provider");
const AccountIndex = 0;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      port: 8545,
      host: "127.0.0.1",
      network_id: 5777
    },
    ganache_local: {
      provider: function() {
        return new HDWalletProvider(process.env.GANACHE_MNEMONIC, "http://127.0.0.1:8545", AccountIndex)
      },
      network_id: 5777
    },
    kovan_infura: {
      provider: function() {
        return new HDWalletProvider(process.env.METAMASK_MNEMONIC, "https://kovan.infura.io/v3/4badaf12963a4dd28d67d5a57e71a75f", AccountIndex)
      },
      network_id: 42
    },
    ropsten_infura: {
      provider: function() {
        return new HDWalletProvider(process.env.METAMASK_MNEMONIC, "https://ropsten.infura.io/v3/4badaf12963a4dd28d67d5a57e71a75f", AccountIndex)
      },
      network_id: 3
    },
    rinkeby_infura: {
      provider: function() {
        return new HDWalletProvider(process.env.METAMASK_MNEMONIC, "https://rinkeby.infura.io/v3/4badaf12963a4dd28d67d5a57e71a75f", AccountIndex)
      },
      network_id: 4
    }
  },
  compilers: {
    solc: {
      version: "^0.6.0"
    }
  }
};
