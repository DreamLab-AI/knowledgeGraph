---
okf_version: "0.2"
type: Class
title: Polkadot XCM
resource: urn:ngm:class:polkadot-xcm
domain: blockchain
description: Polkadot XCM (Cross-Consensus Messaging) is a format and language for communicating intent between consensus systems within and beyond the Polkadot network. Rather than transferring assets directly, XCM expresses instructions that a receiving chain interprets and executes locally, enabling asset transfers, remote calls and governance actions across parachains and the relay chain. It is transport-a
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:cross-chain-communication
requires:
  - urn:ngm:class:polkadot
enables:
  - urn:ngm:class:cross-chain-interoperability
dependsOn:
  - urn:ngm:class:consensus-mechanism
implements:
  - urn:ngm:class:cross-chain-communication
contrastsWith:
  - urn:ngm:class:cosmos-ibc
  - urn:ngm:class:layer-zero
bridgesTo:
  - urn:ngm:class:cross-chain-bridge
uses:
  - urn:ngm:class:message-passing
  - urn:ngm:class:web-assembly
supports:
  - urn:ngm:class:smart-contract
standardizedBy:
  - urn:ngm:class:interoperability-protocol
partOf:
  - urn:ngm:class:polkadot
relatedTo:
  - urn:ngm:class:distributed-ledger
---

# Polkadot XCM

Polkadot XCM (Cross-Consensus Messaging) is a format and language for communicating intent between consensus systems within and beyond the Polkadot network. Rather than transferring assets directly, XCM expresses instructions that a receiving chain interprets and executes locally, enabling asset transfers, remote calls and governance actions across parachains and the relay chain. It is transport-agnostic, relying on underlying delivery layers such as XCMP and HRMP, and is designed to be extensible and version-negotiated.
