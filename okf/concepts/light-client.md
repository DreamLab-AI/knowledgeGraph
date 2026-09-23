---
okf_version: "0.2"
type: Class
title: Light Client
resource: urn:ngm:class:light-client
domain: blockchain
description: Resource-efficient blockchain client that validates block headers and uses cryptographic proofs (Merkle proofs, state proofs) to verify transaction inclusion without downloading full blockchain state. Light clients enable trustless interaction from mobile devices, browsers, and IoT systems while requiring only megabytes of storage versus gigabytes for full nodes.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:node
  - urn:ngm:class:blockchain
hasPart:
  - urn:ngm:class:merkle-proof
requires:
  - urn:ngm:class:block-header
  - urn:ngm:class:peer-to-peer-network
enables:
  - urn:ngm:class:cross-chain-bridge
  - urn:ngm:class:wallet
dependsOn:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:cryptographic-hash-function
implements:
  - urn:ngm:class:state-proof
contrastsWith:
  - urn:ngm:class:full-node
  - urn:ngm:class:archive-node
bridgesTo:
  - urn:ngm:class:iot-device
  - urn:ngm:class:edge-computing
uses:
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:bls-signature
  - urn:ngm:class:relayer
supports:
  - urn:ngm:class:relayer
  - urn:ngm:class:decentralised-application
partOf:
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:interoperability-protocol
relatedTo:
  - urn:ngm:class:fraud-proof
---

# Light Client

Resource-efficient blockchain client that validates block headers and uses cryptographic proofs (Merkle proofs, state proofs) to verify transaction inclusion without downloading full blockchain state. Light clients enable trustless interaction from mobile devices, browsers, and IoT systems while requiring only megabytes of storage versus gigabytes for full nodes.
