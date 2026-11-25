---
okf_version: "0.2"
type: Class
title: Sub-Millisecond Latency
resource: urn:ngm:class:sub-millisecond-latency
domain: blockchain
description: Sub-Millisecond Latency is a network performance characteristic in which end-to-end transaction confirmation or consensus completion occurs in under one millisecond, enabling near-real-time settlement on blockchain networks. It depends on highly optimised peer-to-peer propagation, deterministic finality mechanisms, and minimal block time, distinguishing high-performance chains from conventional sy
maturity: established
quality: 0
is-a:
  - urn:ngm:class:network-component
  - urn:ngm:class:transaction-confirmation
requires:
  - urn:ngm:class:deterministic-finality
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:peer-to-peer-network
enables:
  - urn:ngm:class:transaction-finality
  - urn:ngm:class:transaction-processing
contrastsWith:
  - urn:ngm:class:probabilistic-finality
relatedTo:
  - urn:ngm:class:latency
  - urn:ngm:class:network-latency
  - urn:ngm:class:block-time
  - urn:ngm:class:blockchain-scalability
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Sub-Millisecond Latency

Sub-Millisecond Latency is a network performance characteristic in which end-to-end transaction confirmation or consensus completion occurs in under one millisecond, enabling near-real-time settlement on blockchain networks. It depends on highly optimised peer-to-peer propagation, deterministic finality mechanisms, and minimal block time, distinguishing high-performance chains from conventional systems with multi-second confirmation times.
