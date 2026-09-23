---
okf_version: "0.2"
type: Class
title: EVM-Compatible Blockchain
resource: urn:ngm:class:evm-compatible-blockchain
domain: blockchain
description: An EVM-compatible blockchain is a network whose execution environment implements the Ethereum Virtual Machine semantics, allowing it to run unmodified Ethereum smart contract bytecode and reuse Ethereum tooling. Compatibility lets developers deploy Solidity contracts, wallets and infrastructure across many chains with minimal changes, fostering an interoperable multi-chain ecosystem. Such chains i
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:blockchain
  - urn:ngm:class:blockchain-network
requires:
  - urn:ngm:class:smart-contract
enables:
  - urn:ngm:class:decentralized-application
  - urn:ngm:class:erc-20-token-standard
dependsOn:
  - urn:ngm:class:ethereum
uses:
  - urn:ngm:class:ethereum-smart-contract-platform-virtual-machine
  - urn:ngm:class:solidity
  - urn:ngm:class:gas
supports:
  - urn:ngm:class:blockchain-interoperability
partOf:
  - urn:ngm:class:blockchain
relatedTo:
  - urn:ngm:class:sidechain
  - urn:ngm:class:polygon
  - urn:ngm:class:binance-smart-chain
  - urn:ngm:class:avalanche
---

# EVM-Compatible Blockchain

An EVM-compatible blockchain is a network whose execution environment implements the Ethereum Virtual Machine semantics, allowing it to run unmodified Ethereum smart contract bytecode and reuse Ethereum tooling. Compatibility lets developers deploy Solidity contracts, wallets and infrastructure across many chains with minimal changes, fostering an interoperable multi-chain ecosystem. Such chains include layer-2 rollups, sidechains and alternative layer-1 networks.
