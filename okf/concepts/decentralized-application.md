---
okf_version: "0.2"
type: Class
title: Decentralized Application
resource: urn:ngm:class:decentralized-application
domain: blockchain
description: A decentralized application (dApp) is a software application whose backend logic runs on a blockchain or peer-to-peer network rather than on centralised servers controlled by a single entity, ensuring that no single party can unilaterally modify, censor, or shut down the application. The on-chain components — typically smart contracts — enforce business logic and state transitions transparently, w
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:blockchain-application
hasPart:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:oracle
requires:
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:wallet
  - urn:ngm:class:consensus-mechanism
enables:
  - urn:ngm:class:dao
  - urn:ngm:class:decentralized-finance-de-fi
  - urn:ngm:class:blockchain-governance
  - urn:ngm:class:non-fungible-token
  - urn:ngm:class:tokenized-asset
dependsOn:
  - urn:ngm:class:smart-contract-platform
  - urn:ngm:class:evm
  - urn:ngm:class:ipfs
implements:
  - urn:ngm:class:trustless-execution
  - urn:ngm:class:censorship-resistance
contrastsWith:
  - urn:ngm:class:centralized-application
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:peer-to-peer-network
uses:
  - urn:ngm:class:blockchain
  - urn:ngm:class:layer-2-scaling
  - urn:ngm:class:account-abstraction
relatedTo:
  - urn:ngm:class:web3
  - urn:ngm:class:de-fi
  - urn:ngm:class:cross-chain-interoperability
---

# Decentralized Application

A decentralized application (dApp) is a software application whose backend logic runs on a blockchain or peer-to-peer network rather than on centralised servers controlled by a single entity, ensuring that no single party can unilaterally modify, censor, or shut down the application. The on-chain components — typically smart contracts — enforce business logic and state transitions transparently, while user-facing frontends may remain conventional web or mobile interfaces that communicate with the blockchain via wallet connectors. dApps inherit the censorship resistance and trustlessness of their underlying blockchain while exposing usability challenges related to transaction costs, latency, and key management.
