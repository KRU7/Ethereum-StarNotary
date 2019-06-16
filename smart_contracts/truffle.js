var HDWalletProvider = require('truffle-hdwallet-provider');

const mnemonic = 'awkward trophy cage firm level often script turkey acoustic depth upset donkey';
const infura = 'https://rinkeby.infura.io/v3/a5c7deeb6f0f49779e15ef41ee75dd57'

module.exports = {
  networks: { 
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: "*"
    }, 
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, infura),
      network_id: 4,
      gas : 6700000,
      gasPrice : 10000000000
    },
  }
};
