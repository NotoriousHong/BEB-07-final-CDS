// this script migrates EWEToken
const CDS = artifacts.require('CDS');
const PriceOracleMock = artifacts.require('PriceOracleMock');
module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(PriceOracleMock, 10000);
  const priceOracleMock = await PriceOracleMock.deployed();
  let price = await priceOracleMock.getPrice();
  console.log(price.toNumber());
  await priceOracleMock.setPrice(20000);
  price = await priceOracleMock.getPrice();
  console.log(price.toNumber());

  await deployer.deploy(CDS);
  const cds = await CDS.deployed();
  await cds.makeSwap(accounts[0], 10, 30, 60, 24);
};
