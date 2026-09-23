---
okf_version: "0.2"
type: Class
title: Fork Choice Rule
resource: urn:ngm:class:fork-choice-rule
domain: blockchain
description: Algorithm by which blockchain nodes select the canonical chain head when multiple competing branches exist, resolving temporary forks deterministically. Bitcoin uses longest-chain (most cumulative proof-of-work) while Ethereum post-Merge uses the LMD-GHOST fork-choice weighted by validator attestation stake, determining network-wide finality.
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:consensus-protocol
requires:
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:block-propagation
  - urn:ngm:class:peer-discovery
enables:
  - urn:ngm:class:immutability
  - urn:ngm:class:finality
  - urn:ngm:class:blockchain-scalability
  - urn:ngm:class:double-spend-prevention
dependsOn:
  - urn:ngm:class:block-header
  - urn:ngm:class:chain-weight
implements:
  - urn:ngm:class:consensus-protocol
  - urn:ngm:class:nakamoto-consensus
contrastsWith:
  - urn:ngm:class:longest-chain-rule
  - urn:ngm:class:lmd-ghost
bridgesTo:
  - urn:ngm:class:distributed-consensus
  - urn:ngm:class:fault-tolerant-protocol
uses:
  - urn:ngm:class:consensus-algorithm
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:validator-attestation
relatedTo:
  - urn:ngm:class:censorship-resistance
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:blockchain-protocol
  - urn:ngm:class:consensus-rule
  - urn:ngm:class:network-partition-tolerance
  - urn:ngm:class:selfish-mining
---

# Fork Choice Rule

Algorithm by which blockchain nodes select the canonical chain head when multiple competing branches exist, resolving temporary forks deterministically. Bitcoin uses longest-chain (most cumulative proof-of-work) while Ethereum post-Merge uses the LMD-GHOST fork-choice weighted by validator attestation stake, determining network-wide finality.
