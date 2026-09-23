---
okf_version: "0.2"
type: Class
title: Light Node
resource: urn:ngm:class:light-node
domain: blockchain
description: A Light Node is a blockchain network participant that downloads and verifies only block headers rather than the full transaction history, using Simplified Payment Verification (SPV) to confirm transaction inclusion via Merkle proofs. This design allows resource-constrained devices—mobile wallets, IoT devices, embedded clients—to interact securely with a blockchain without the storage and bandwidth
maturity: established
quality: 0
is-a:
  - urn:ngm:class:blockchain-entity
requires:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:peer-to-peer-network
enables:
  - urn:ngm:class:digital-wallet
contrastsWith:
  - urn:ngm:class:full-node
  - urn:ngm:class:archival-node
uses:
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:cryptographic-protocol
partOf:
  - urn:ngm:class:blockchain-infrastructure
relatedTo:
  - urn:ngm:class:bootstrap-node
  - urn:ngm:class:validator-node
  - urn:ngm:class:blockchain-protocol
---

# Light Node

A Light Node is a blockchain network participant that downloads and verifies only block headers rather than the full transaction history, using Simplified Payment Verification (SPV) to confirm transaction inclusion via Merkle proofs. This design allows resource-constrained devices—mobile wallets, IoT devices, embedded clients—to interact securely with a blockchain without the storage and bandwidth demands of a Full Node, relying on connected full nodes to supply the underlying transaction data when required.
