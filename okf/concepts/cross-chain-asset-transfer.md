---
okf_version: "0.2"
type: Class
title: Cross Chain Asset Transfer
resource: urn:ngm:class:cross-chain-asset-transfer
domain: blockchain
description: Cross-chain asset transfer is the cryptographic and protocol-level process of moving digital assets — cryptocurrencies, fungible tokens, or non-fungible tokens — from one blockchain network to a distinct, independent blockchain network while preserving the asset's economic properties and enforcing integrity guarantees across the transfer. Because independent blockchains maintain no shared global s
maturity: emerging
quality: 0.74
is-a:
  - urn:ngm:class:cross-chain-interoperability
requires:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:cryptographic-proof
  - urn:ngm:class:validator-network
enables:
  - urn:ngm:class:blockchain-interoperability
  - urn:ngm:class:de-fi
  - urn:ngm:class:cross-chain-liquidity
  - urn:ngm:class:multi-chain-ecosystem
  - urn:ngm:class:wrapped-token
contrastsWith:
  - urn:ngm:class:centralised-exchange
  - urn:ngm:class:wrapped-token
bridgesTo:
  - urn:ngm:class:de-fi
  - urn:ngm:class:digital-asset-regulation
uses:
  - urn:ngm:class:atomic-swap
  - urn:ngm:class:cross-chain-bridge
  - urn:ngm:class:blockchain-protocol
  - urn:ngm:class:smart-contract
  - urn:ngm:class:hash-time-locked-contract
  - urn:ngm:class:light-client
  - urn:ngm:class:zero-knowledge-proof
standardizedBy:
  - urn:ngm:class:cosmos-ibc
  - urn:ngm:class:polkadot-xcm
relatedTo:
  - urn:ngm:class:cross-chain-messaging
  - urn:ngm:class:blockchain-security
  - urn:ngm:class:sidechain
  - urn:ngm:class:layer-2-scaling
  - urn:ngm:class:rollup
  - urn:ngm:class:token-standard
---

# Cross Chain Asset Transfer

Cross-chain asset transfer is the cryptographic and protocol-level process of moving digital assets — cryptocurrencies, fungible tokens, or non-fungible tokens — from one blockchain network to a distinct, independent blockchain network while preserving the asset's economic properties and enforcing integrity guarantees across the transfer. Because independent blockchains maintain no shared global state, protocols must ensure that an asset locked or burned on the source chain is atomically minted or released on the destination chain, preventing double-spend and maintaining supply conservation. Implementations range from hash time-locked contracts (HTLCs) and lock-and-mint bridge contracts overseen by validator committees to native inter-blockchain communication protocols (IBC) and zero-knowledge proof-based verification bridges that eliminate trusted attestors entirely.
