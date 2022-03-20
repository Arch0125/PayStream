var SimpleStorage = artifacts.require("SimpleStorage");
var Marketplace = artifacts.require("Marketplace");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(Marketplace);
};
