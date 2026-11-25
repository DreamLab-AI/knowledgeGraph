---
okf_version: "0.2"
type: Class
title: Block Propagation
resource: urn:ngm:class:block-propagation
domain: blockchain
description: Block Propagation is the process by which a newly mined or validated block is broadcast across a blockchain peer-to-peer network so that all full nodes can update their local copy of the chain. Propagation latency directly influences the orphan/stale block rate, security against selfish mining, and the degree of centralisation pressure towards large, well-connected mining pools. Techniques such as
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:consensus-protocol
hasPart:
  - urn:ngm:class:block-propagation-time
requires:
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:full-node
enables:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:blockchain-scalability
dependsOn:
  - urn:ngm:class:blockchain-protocol
contrastsWith:
  - urn:ngm:class:light-node
relatedTo:
  - urn:ngm:class:block-time
  - urn:ngm:class:block-size
  - urn:ngm:class:mempool
  - urn:ngm:class:miner
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Block Propagation

Block Propagation is the process by which a newly mined or validated block is broadcast across a blockchain peer-to-peer network so that all full nodes can update their local copy of the chain. Propagation latency directly influences the orphan/stale block rate, security against selfish mining, and the degree of centralisation pressure towards large, well-connected mining pools. Techniques such as Compact Block Relay (Bitcoin BIP 152) and Graphene reduce bandwidth requirements by sending block sketches rather than full transaction lists, exploiting the fact that recipient nodes already hold most transactions in their mempools.
