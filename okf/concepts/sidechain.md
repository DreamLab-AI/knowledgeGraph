---
okf_version: "0.2"
type: Class
title: Sidechain
resource: urn:ngm:class:sidechain
domain: blockchain
description: Independent blockchain connected to a parent blockchain via a two-way peg mechanism that operates with its own consensus and validation rules while enabling asset transfers between chains, providing scalability and experimental capabilities without impacting the main chain.
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:network-component
  - urn:ngm:class:blockchain
hasPart:
  - urn:ngm:class:two-way-peg
  - urn:ngm:class:bridge-contract
  - urn:ngm:class:validator
  - urn:ngm:class:consensus-layer
requires:
  - urn:ngm:class:layer-1
  - urn:ngm:class:smart-contract
enables:
  - urn:ngm:class:cross-chain-interoperability
  - urn:ngm:class:asset-portability
  - urn:ngm:class:transaction-throughput
dependsOn:
  - urn:ngm:class:cryptographic-proof
  - urn:ngm:class:federated-byzantine-fault-tolerance
implements:
  - urn:ngm:class:two-way-peg
contrastsWith:
  - urn:ngm:class:rollup
  - urn:ngm:class:state-channel
  - urn:ngm:class:plasma
bridgesTo:
  - urn:ngm:class:distributed-systems
uses:
  - urn:ngm:class:cross-chain-bridge
  - urn:ngm:class:multisignature
supports:
  - urn:ngm:class:decentralised-application
  - urn:ngm:class:token-standard
partOf:
  - urn:ngm:class:blockchain
  - urn:ngm:class:scalability-solutions
relatedTo:
  - urn:ngm:class:polygon
  - urn:ngm:class:liquid-network
  - urn:ngm:class:layer-1
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Sidechain

Independent blockchain connected to a parent blockchain via a two-way peg mechanism that operates with its own consensus and validation rules while enabling asset transfers between chains, providing scalability and experimental capabilities without impacting the main chain.
