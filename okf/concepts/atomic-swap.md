---
okf_version: "0.2"
type: Class
title: Atomic Swap
resource: urn:ngm:class:atomic-swap
domain: blockchain
description: Trustless peer-to-peer cryptocurrency exchange mechanism across different blockchains using Hash Time-Locked Contracts (HTLCs) that guarantees atomic execution where the swap either completes fully or not at all, eliminating counterparty risk without requiring centralized intermediaries.
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:blockchain-protocol
  - urn:ngm:class:blockchain
requires:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:payment-channel
enables:
  - urn:ngm:class:cross-chain-interoperability
  - urn:ngm:class:decentralised-exchange
dependsOn:
  - urn:ngm:class:blockchain
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:consensus-mechanism
implements:
  - urn:ngm:class:hash-time-locked-contract
contrastsWith:
  - urn:ngm:class:cross-chain-bridge
  - urn:ngm:class:centralised-exchange
  - urn:ngm:class:wrapped-token
bridgesTo:
  - urn:ngm:class:decentralised-finance
  - urn:ngm:class:virtual-economy
uses:
  - urn:ngm:class:hash-function
  - urn:ngm:class:commitment-scheme
  - urn:ngm:class:digital-signature
supports:
  - urn:ngm:class:lightning-network
  - urn:ngm:class:submarine-swap
  - urn:ngm:class:adaptor-signature
partOf:
  - urn:ngm:class:decentralised-exchange
relatedTo:
  - urn:ngm:class:bitcoin
  - urn:ngm:class:ethereum
  - urn:ngm:class:erc-20-tokens
  - urn:ngm:class:polkadot
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Atomic Swap

Trustless peer-to-peer cryptocurrency exchange mechanism across different blockchains using Hash Time-Locked Contracts (HTLCs) that guarantees atomic execution where the swap either completes fully or not at all, eliminating counterparty risk without requiring centralized intermediaries.
