---
okf_version: "0.2"
type: Class
title: Decentralised Application
resource: urn:ngm:class:decentralised-application
domain: blockchain
description: A decentralized application (dApp) is a software application whose backend logic runs on a blockchain or peer-to-peer network rather than on centralised servers controlled by a single entity, ensuring that no single party can unilaterally modify, censor, or shut down the application. The on-chain components — typically smart contracts — enforce business logic and state transitions transparently, w
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:distributed-system
  - urn:ngm:class:blockchain-application
hasPart:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:wallet
  - urn:ngm:class:oracle
requires:
  - urn:ngm:class:blockchain
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:cryptocurrency-wallet
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:wallet
enables:
  - urn:ngm:class:decentralised-finance
  - urn:ngm:class:non-fungible-token
  - urn:ngm:class:decentralised-autonomous-organisation
  - urn:ngm:class:decentralised-autonomous-organisation
  - urn:ngm:class:decentralized-finance-de-fi
  - urn:ngm:class:blockchain-governance
  - urn:ngm:class:tokenized-asset
dependsOn:
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:decentralised-storage
  - urn:ngm:class:token-standard
implements:
  - urn:ngm:class:web3
  - urn:ngm:class:open-source-software
  - urn:ngm:class:trustless-execution
  - urn:ngm:class:censorship-resistance
contrastsWith:
  - urn:ngm:class:centralized-application
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:digital-governance
  - urn:ngm:class:peer-to-peer-network
uses:
  - urn:ngm:class:ethereum
  - urn:ngm:class:ipfs
  - urn:ngm:class:oracle
  - urn:ngm:class:blockchain
  - urn:ngm:class:layer-2-scaling
  - urn:ngm:class:account-abstraction
relatedTo:
  - urn:ngm:class:web3
  - urn:ngm:class:token-economy
  - urn:ngm:class:censorship-resistance
  - urn:ngm:class:decentralised-finance
  - urn:ngm:class:cross-chain-interoperability
---

# Decentralised Application

A decentralized application (dApp) is a software application whose backend logic runs on a blockchain or peer-to-peer network rather than on centralised servers controlled by a single entity, ensuring that no single party can unilaterally modify, censor, or shut down the application. The on-chain components — typically smart contracts — enforce business logic and state transitions transparently, while user-facing frontends may remain conventional web or mobile interfaces that communicate with the blockchain via wallet connectors. dApps inherit the censorship resistance and trustlessness of their underlying blockchain while exposing usability challenges related to transaction costs, latency, and key management.
