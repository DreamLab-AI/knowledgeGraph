---
okf_version: "0.2"
type: Class
title: Pruned Node
resource: urn:ngm:class:pruned-node
domain: blockchain
description: A Pruned Node is a blockchain full node that validates the complete chain history during initial block download but subsequently discards spent transaction outputs and old block data beyond a configurable retention window, reducing on-disk storage requirements by orders of magnitude while retaining full validation capability for new blocks. Pruning enables operators with limited storage (e.g. 5–10
maturity: established
quality: 0
is-a:
  - urn:ngm:class:network-component
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:network-component
requires:
  - urn:ngm:class:blockchain
  - urn:ngm:class:cryptographic-hash-function
enables:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:blockchain-scalability
dependsOn:
  - urn:ngm:class:data-storage
contrastsWith:
  - urn:ngm:class:archival-node
partOf:
  - urn:ngm:class:blockchain-network
relatedTo:
  - urn:ngm:class:full-node
  - urn:ngm:class:light-node
  - urn:ngm:class:archival-node
  - urn:ngm:class:utxo-model
---

# Pruned Node

A Pruned Node is a blockchain full node that validates the complete chain history during initial block download but subsequently discards spent transaction outputs and old block data beyond a configurable retention window, reducing on-disk storage requirements by orders of magnitude while retaining full validation capability for new blocks. Pruning enables operators with limited storage (e.g. 5–10 GB rather than 500+ GB for Bitcoin's full history) to participate in consensus verification without trusting third parties, unlike SPV light nodes that skip validation entirely. The pruned node can no longer serve historical block data to peers, constraining its contribution to network archival.
