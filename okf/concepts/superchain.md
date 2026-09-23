---
okf_version: "0.2"
type: Class
title: Superchain
resource: urn:ngm:class:superchain
domain: blockchain
description: A superchain is a network of independent Layer-2 blockchains that share a common technical standard, security model, and communication layer so they interoperate as a unified system rather than isolated silos. Pioneered by the OP Stack ecosystem around Optimism, superchains let many rollups inherit the same upgrade path, governance, and eventually a shared sequencer, enabling low-latency cross-cha
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:rollup
hasPart:
  - urn:ngm:class:base
requires:
  - urn:ngm:class:governance
enables:
  - urn:ngm:class:blockchain-scalability
  - urn:ngm:class:interoperability
dependsOn:
  - urn:ngm:class:ethereum
uses:
  - urn:ngm:class:optimistic-rollup
  - urn:ngm:class:bridge
partOf:
  - urn:ngm:class:op-stack
  - urn:ngm:class:optimism
relatedTo:
  - urn:ngm:class:rollup
  - urn:ngm:class:modular-blockchain
---

# Superchain

A superchain is a network of independent Layer-2 blockchains that share a common technical standard, security model, and communication layer so they interoperate as a unified system rather than isolated silos. Pioneered by the OP Stack ecosystem around Optimism, superchains let many rollups inherit the same upgrade path, governance, and eventually a shared sequencer, enabling low-latency cross-chain messaging and a consistent developer experience. The model addresses blockchain fragmentation by treating horizontal scaling as a coordinated mesh of homogeneous chains that settle to a common Layer 1.
