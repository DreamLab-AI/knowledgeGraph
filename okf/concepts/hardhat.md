---
okf_version: "0.2"
type: Class
title: Hardhat
resource: urn:ngm:class:hardhat
domain: blockchain
description: Hardhat is a professional Ethereum development environment that provides a comprehensive toolchain for compiling, deploying, testing, and debugging Solidity smart contracts. It ships with Hardhat Network, an in-process Ethereum node implementation designed for local development that supports forking mainnet state and emitting Solidity stack traces on failure. Hardhat's plugin architecture integrat
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:network-component
hasPart:
  - urn:ngm:class:hardhat-network
  - urn:ngm:class:hardhat-runner
  - urn:ngm:class:hardhat-plugin
requires:
  - urn:ngm:class:node-js
  - urn:ngm:class:compiler
  - urn:ngm:class:compiler
enables:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:smart-contract-deployment
  - urn:ngm:class:smart-contract-testing
  - urn:ngm:class:contract-verification
dependsOn:
  - urn:ngm:class:ethereum
  - urn:ngm:class:evm
  - urn:ngm:class:ethereum-smart-contract-platform-virtual-machine
contrastsWith:
  - urn:ngm:class:truffle
  - urn:ngm:class:foundry
  - urn:ngm:class:brownie
bridgesTo:
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:devops
uses:
  - urn:ngm:class:solidity
  - urn:ngm:class:type-script
  - urn:ngm:class:ethers-js
  - urn:ngm:class:mocha
supports:
  - urn:ngm:class:de-fi-protocol
  - urn:ngm:class:nft
  - urn:ngm:class:dao
relatedTo:
  - urn:ngm:class:open-zeppelin
  - urn:ngm:class:remix-ide
  - urn:ngm:class:etherscan
---

# Hardhat

Hardhat is a professional Ethereum development environment that provides a comprehensive toolchain for compiling, deploying, testing, and debugging Solidity smart contracts. It ships with Hardhat Network, an in-process Ethereum node implementation designed for local development that supports forking mainnet state and emitting Solidity stack traces on failure. Hardhat's plugin architecture integrates tightly with ethers.js and Waffle, and its tasks system allows developers to automate bespoke deployment and verification workflows. It has become the dominant development framework in the Ethereum ecosystem, displacing earlier tools such as Truffle.
