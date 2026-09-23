---
okf_version: "0.2"
type: Class
title: OpenZeppelin
resource: urn:ngm:class:open-zeppelin
domain: blockchain
description: OpenZeppelin is an open-source framework and security company that provides battle-tested, audited smart contract libraries for Ethereum and EVM-compatible blockchains, most notably the OpenZeppelin Contracts library. It implements widely adopted token standards (ERC-20, ERC-721, ERC-1155), access control patterns, proxy upgrade mechanisms, and governance primitives used as foundational building b
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:smart-contract-framework
hasPart:
  - urn:ngm:class:erc-20-token-standard
  - urn:ngm:class:erc-721-standard
  - urn:ngm:class:erc-1155
  - urn:ngm:class:access-control
  - urn:ngm:class:proxy-pattern
  - urn:ngm:class:open-zeppelin-governor
  - urn:ngm:class:open-zeppelin-governor
requires:
  - urn:ngm:class:solidity
  - urn:ngm:class:ethereum-smart-contract-platform-virtual-machine
enables:
  - urn:ngm:class:de-fi
  - urn:ngm:class:non-fungible-token
  - urn:ngm:class:decentralised-autonomous-organisation
  - urn:ngm:class:token-contract
dependsOn:
  - urn:ngm:class:ethereum
  - urn:ngm:class:smart-contract
implements:
  - urn:ngm:class:token-standard
  - urn:ngm:class:eip
contrastsWith:
  - urn:ngm:class:solmate
  - urn:ngm:class:dapptools
bridgesTo:
  - urn:ngm:class:supply-chain-security
  - urn:ngm:class:digital-asset-governance
  - urn:ngm:class:supply-chain-security
uses:
  - urn:ngm:class:hardhat
  - urn:ngm:class:foundry
supports:
  - urn:ngm:class:role-based-access-control
  - urn:ngm:class:multisig-wallet
  - urn:ngm:class:upgradeable-contract
relatedTo:
  - urn:ngm:class:security-audit
  - urn:ngm:class:reentrancy-attack
  - urn:ngm:class:formal-verification
---

# OpenZeppelin

OpenZeppelin is an open-source framework and security company that provides battle-tested, audited smart contract libraries for Ethereum and EVM-compatible blockchains, most notably the OpenZeppelin Contracts library. It implements widely adopted token standards (ERC-20, ERC-721, ERC-1155), access control patterns, proxy upgrade mechanisms, and governance primitives used as foundational building blocks across decentralised finance, NFT platforms, and DAO infrastructure. Beyond libraries, OpenZeppelin offers professional security auditing services, the Defender operations platform for smart contract monitoring and automation, and open tooling that lowers the barrier to secure on-chain development.
