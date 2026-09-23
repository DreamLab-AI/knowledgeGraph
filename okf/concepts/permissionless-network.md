---
okf_version: "0.2"
type: Class
title: Permissionless Network
resource: urn:ngm:class:permissionless-network
domain: blockchain
description: A Permissionless Network is a blockchain or distributed ledger system in which any entity may join as a node, submit transactions, and participate in consensus without prior authorisation or identity verification from a central authority. Permissionlessness is a foundational design property of public blockchains such as Bitcoin and Ethereum, enabling censorship resistance and global open access at
maturity: established
quality: 0
is-a:
  - urn:ngm:class:network-component
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:network-component
requires:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:peer-to-peer-network
enables:
  - urn:ngm:class:public-blockchain
  - urn:ngm:class:incentive-alignment
contrastsWith:
  - urn:ngm:class:distributed-ledger-technology
relatedTo:
  - urn:ngm:class:51-attack
  - urn:ngm:class:double-spending
  - urn:ngm:class:gossip-protocol
  - urn:ngm:class:nakamoto-consensus
  - urn:ngm:class:network-topology
  - urn:ngm:class:proof-of-stake
---

# Permissionless Network

A Permissionless Network is a blockchain or distributed ledger system in which any entity may join as a node, submit transactions, and participate in consensus without prior authorisation or identity verification from a central authority. Permissionlessness is a foundational design property of public blockchains such as Bitcoin and Ethereum, enabling censorship resistance and global open access at the cost of requiring Sybil-resistant consensus mechanisms—typically proof-of-work or proof-of-stake—to prevent anonymous actors from subverting the network.
