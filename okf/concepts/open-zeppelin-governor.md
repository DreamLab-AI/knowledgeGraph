---
okf_version: "0.2"
type: Class
title: OpenZeppelin Governor
resource: urn:ngm:class:open-zeppelin-governor
domain: blockchain
description: OpenZeppelin Governor is a modular, security-audited Solidity smart-contract framework that provides the core infrastructure for deploying on-chain governance systems on EVM-compatible blockchains, succeeding the Compound Governor Bravo pattern. It implements a canonical proposal lifecycle — proposal creation, configurable voting delay, voting period, quorum validation, and timelock-guarded execut
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:bc-governance-and-regulation
requires:
  - urn:ngm:class:solidity
  - urn:ngm:class:ethereum-smart-contract-platform-virtual-machine
  - urn:ngm:class:vote-delegation
enables:
  - urn:ngm:class:dao-governance
  - urn:ngm:class:voting-mechanism
  - urn:ngm:class:treasury-management
  - urn:ngm:class:protocol-upgrades
  - urn:ngm:class:protocol-upgrade
dependsOn:
  - urn:ngm:class:smart-contracts
  - urn:ngm:class:eip-5805
  - urn:ngm:class:eip-712
  - urn:ngm:class:open-zeppelin-contracts
implements:
  - urn:ngm:class:on-chain-governance
  - urn:ngm:class:compound-governor-bravo
contrastsWith:
  - urn:ngm:class:multisig-wallet
  - urn:ngm:class:optimistic-governance
bridgesTo:
  - urn:ngm:class:collective-intelligence
  - urn:ngm:class:liquid-democracy
uses:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:governance-token
  - urn:ngm:class:erc-20-token-standard
  - urn:ngm:class:erc-721-standard
  - urn:ngm:class:timelock-controller
  - urn:ngm:class:timelock-controller
supports:
  - urn:ngm:class:decentralised-autonomous-organisation
  - urn:ngm:class:de-fi-protocol
  - urn:ngm:class:upgradeable-proxy
relatedTo:
  - urn:ngm:class:quorum
  - urn:ngm:class:snapshot-voting
  - urn:ngm:class:token-weighted-voting
  - urn:ngm:class:quorum
---

# OpenZeppelin Governor

OpenZeppelin Governor is a modular, security-audited Solidity smart-contract framework that provides the core infrastructure for deploying on-chain governance systems on EVM-compatible blockchains, succeeding the Compound Governor Bravo pattern. It implements a canonical proposal lifecycle — proposal creation, configurable voting delay, voting period, quorum validation, and timelock-guarded execution — with pluggable extension modules for vote-counting strategies (simple majority, Bravo-style, fractional), token-based voting-power sources (ERC-20 with EIP-5805 checkpointing or ERC-721), and TimelockController integration. The framework is maintained by the OpenZeppelin security team as part of OpenZeppelin Contracts, has undergone multiple third-party audits, and is adopted as the de facto governance standard by major decentralised autonomous organisations and DeFi protocols including Uniswap, ENS, and Compound.
