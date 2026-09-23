---
okf_version: "0.2"
type: Class
title: Chainlink
resource: urn:ngm:class:chainlink
domain: blockchain
description: Chainlink is a decentralised oracle network and middleware layer that enables smart contracts on any blockchain to securely access off-chain data, computation, and cross-chain interoperability services. Founded in 2017 by Sergey Nazarov and Steve Ellis, it operates a network of independent node operators who retrieve, aggregate, and deliver external data — including price feeds, verifiable randomn
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:blockchain-oracle
hasPart:
  - urn:ngm:class:chainlink-oracles
  - urn:ngm:class:chainlink-ccip
  - urn:ngm:class:chainlink-vrf
  - urn:ngm:class:chainlink-automation
  - urn:ngm:class:chainlink-functions
requires:
  - urn:ngm:class:ethereum
  - urn:ngm:class:cryptographic-signature
  - urn:ngm:class:peer-to-peer-network
enables:
  - urn:ngm:class:enterprise-smart-contracts
  - urn:ngm:class:cross-chain-interoperability
  - urn:ngm:class:on-chain-automation
  - urn:ngm:class:verifiable-randomness
dependsOn:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:staking
  - urn:ngm:class:cryptoeconomics
contrastsWith:
  - urn:ngm:class:pyth-network
  - urn:ngm:class:band-protocol
  - urn:ngm:class:api3
bridgesTo:
  - urn:ngm:class:traditional-finance
  - urn:ngm:class:internet-of-things
  - urn:ngm:class:enterprise-data-integration
uses:
  - urn:ngm:class:off-chain-reporting
  - urn:ngm:class:threshold-signature-scheme
  - urn:ngm:class:threshold-signature-scheme
  - urn:ngm:class:decentralized-computing
supports:
  - urn:ngm:class:de-fi-protocol
  - urn:ngm:class:non-fungible-token
  - urn:ngm:class:tokenization
partOf:
  - urn:ngm:class:decentralized-finance-de-fi
relatedTo:
  - urn:ngm:class:blockchain-interoperability
  - urn:ngm:class:cross-chain-messaging
  - urn:ngm:class:dao
  - urn:ngm:class:decentralised-autonomous-organisation
---

# Chainlink

Chainlink is a decentralised oracle network and middleware layer that enables smart contracts on any blockchain to securely access off-chain data, computation, and cross-chain interoperability services. Founded in 2017 by Sergey Nazarov and Steve Ellis, it operates a network of independent node operators who retrieve, aggregate, and deliver external data — including price feeds, verifiable randomness, API responses, and event outcomes — to on-chain smart contracts, solving the oracle problem that prevents blockchains from natively interacting with real-world information. Its native token (LINK) provides cryptoeconomic incentives and collateral for node operators, whilst its Off-Chain Reporting protocol reduces on-chain costs through peer-to-peer consensus. Beyond data feeds, Chainlink has expanded into cross-chain messaging (CCIP), on-chain automation, and verifiable computation, positioning itself as general-purpose decentralised infrastructure for the entire blockchain ecosystem.
