require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/nGT5cfgsvk2O0fb0C6fp4jjpTbT_Jpww',
      accounts: ['483350b1577dc4f0ae2b0467a0d064354f0a51d497c51dac69e4d5bb03675940'],
    },
  },
};