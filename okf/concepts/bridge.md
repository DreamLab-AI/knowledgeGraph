---
okf_version: "0.2"
type: Class
title: Bridge
resource: urn:ngm:class:bridge
domain: blockchain
description: A protocol that transfers assets or messages between separate ledgers by locking, burning, or attesting value on one chain and reproducing a representation on another.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:blockchain-interoperability
hasPart:
  - urn:ngm:class:lock-and-mint-mechanism
  - urn:ngm:class:relayer
requires:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:oracle
  - urn:ngm:class:validator-set
  - urn:ngm:class:cryptographic-proof
enables:
  - urn:ngm:class:cross-chain-asset-transfer
  - urn:ngm:class:cross-chain-messaging
  - urn:ngm:class:de-fi
dependsOn:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:finality
contrastsWith:
  - urn:ngm:class:atomic-swap
  - urn:ngm:class:rollup
bridgesTo:
  - urn:ngm:class:interoperability-protocol
  - urn:ngm:class:cross-chain-bridge
  - urn:ngm:class:cross-chain-messaging
uses:
  - urn:ngm:class:multi-signature
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:hash-time-locked-contract
supports:
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:decentralised-exchange
relatedTo:
  - urn:ngm:class:trusted-bridge
  - urn:ngm:class:trustless-bridge
---

# Bridge

A protocol that transfers assets or messages between separate ledgers by locking, burning, or attesting value on one chain and reproducing a representation on another.
