---
okf_version: "0.2"
type: Class
title: Cross-Chain Interoperability
resource: urn:ngm:class:cross-chain-interoperability
domain: blockchain
description: Cross-Chain Interoperability is the technical capacity for distinct blockchain networks to communicate, transfer assets, and share arbitrary state without relying on a centralised intermediary, achieved through mechanisms such as light-client bridges, relay chains, atomic swaps, and standardised inter-blockchain communication protocols. It addresses the heterogeneous consensus problem—the challeng
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:blockchain-interoperability
hasPart:
  - urn:ngm:class:cross-chain-bridge
  - urn:ngm:class:atomic-swap
  - urn:ngm:class:cross-chain-messaging
  - urn:ngm:class:light-client-verification
requires:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:merkle-proof
  - urn:ngm:class:smart-contract
enables:
  - urn:ngm:class:cross-chain-governance
  - urn:ngm:class:de-fi
  - urn:ngm:class:cross-chain-liquidity
  - urn:ngm:class:multi-chain-application
dependsOn:
  - urn:ngm:class:distributed-ledger-technology
  - urn:ngm:class:cryptographic-proof
  - urn:ngm:class:hash-time-locked-contract
contrastsWith:
  - urn:ngm:class:centralised-exchange
  - urn:ngm:class:wrapped-token
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:decentralised-identity
uses:
  - urn:ngm:class:cosmos-ibc
  - urn:ngm:class:polkadot-xcm
  - urn:ngm:class:interoperability-protocol
  - urn:ngm:class:zero-knowledge-proof
standardizedBy:
  - urn:ngm:class:cosmos-ibc
  - urn:ngm:class:ieee-standards
relatedTo:
  - urn:ngm:class:polkadot
  - urn:ngm:class:blockchain-scalability
  - urn:ngm:class:layer-2-scaling
  - urn:ngm:class:oracle-network
---

# Cross-Chain Interoperability

Cross-Chain Interoperability is the technical capacity for distinct blockchain networks to communicate, transfer assets, and share arbitrary state without relying on a centralised intermediary, achieved through mechanisms such as light-client bridges, relay chains, atomic swaps, and standardised inter-blockchain communication protocols. It addresses the heterogeneous consensus problem—the challenge of enabling two networks with different finality guarantees and trust models to agree on the validity of cross-chain events—through cryptographic proofs, validator sets, or shared security frameworks. Prominent implementations include the Cosmos IBC protocol, Polkadot's Cross-Consensus Message Format (XCM), LayerZero's oracle-relayer model, and zero-knowledge proof bridges that verify source-chain state transitions with minimal on-chain trust. The field is foundational to the composable multi-chain ecosystem in which digital assets, governance rights, and smart contract logic can flow freely across sovereign networks.
