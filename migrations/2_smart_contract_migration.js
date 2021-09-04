const SmartContract = artifacts.require("CodeBeast");

module.exports = function (deployer) {
  deployer.deploy(SmartContract, "Codebeast", "CBD", "https://nowtech.com.ng/");
};
