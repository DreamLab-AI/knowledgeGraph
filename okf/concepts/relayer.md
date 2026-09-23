---
okf_version: "0.2"
type: Class
title: Relayer
resource: urn:ngm:class:relayer
domain: blockchain
description: Infrastructure operator that facilitates cross-chain message passing by monitoring source chains for events, generating cryptographic proofs of state, and submitting verified transactions to destination chains. Relayers provide non-custodial connectivity for interoperability protocols such as IBC, LayerZero, and Chainlink CCIP without holding user assets.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:network-component
  - urn:ngm:class:blockchain-interoperability
  - urn:ngm:class:blockchain
requires:
  - urn:ngm:class:full-node
  - urn:ngm:class:key-management
  - urn:ngm:class:gas-fee
enables:
  - urn:ngm:class:cross-chain-bridge
  - urn:ngm:class:interoperability
  - urn:ngm:class:cross-chain-messaging
  - urn:ngm:class:meta-transaction
dependsOn:
  - urn:ngm:class:blockchain
  - urn:ngm:class:consensus-mechanism
implements:
  - urn:ngm:class:message-passing
  - urn:ngm:class:interoperability-protocol
  - urn:ngm:class:ibc
contrastsWith:
  - urn:ngm:class:blockchain-oracle
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:infrastructure
uses:
  - urn:ngm:class:light-client
  - urn:ngm:class:cryptographic-proof
  - urn:ngm:class:smart-contract
supports:
  - urn:ngm:class:de-fi
  - urn:ngm:class:cross-chain-liquidity
partOf:
  - urn:ngm:class:interoperability-protocol
relatedTo:
  - urn:ngm:class:mev
  - urn:ngm:class:staking
  - urn:ngm:class:slashing
  - urn:ngm:class:blockchain-oracle
---

# Relayer

Infrastructure operator that facilitates cross-chain message passing by monitoring source chains for events, generating cryptographic proofs of state, and submitting verified transactions to destination chains. Relayers provide non-custodial connectivity for interoperability protocols such as IBC, LayerZero, and Chainlink CCIP without holding user assets.
