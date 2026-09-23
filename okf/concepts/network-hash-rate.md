---
okf_version: "0.2"
type: Class
title: Network Hash Rate
resource: urn:ngm:class:network-hash-rate
domain: blockchain
description: The aggregate computational power (measured in hashes per second) expended by all miners participating in a proof-of-work blockchain at a given time. A higher network hash rate increases attack cost for a 51% attack and triggers upward difficulty adjustments to maintain target block times; conversely, drops in hash rate trigger downward adjustments.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:consensus-protocol
  - urn:ngm:class:consensus-protocol
enables:
  - urn:ngm:class:nakamoto-consensus
uses:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:mining
relatedTo:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:difficulty-adjustment
  - urn:ngm:class:mining-pool
  - urn:ngm:class:51-attack
  - urn:ngm:class:selfish-mining
  - urn:ngm:class:block-reward
---

# Network Hash Rate

The aggregate computational power (measured in hashes per second) expended by all miners participating in a proof-of-work blockchain at a given time. A higher network hash rate increases attack cost for a 51% attack and triggers upward difficulty adjustments to maintain target block times; conversely, drops in hash rate trigger downward adjustments.
