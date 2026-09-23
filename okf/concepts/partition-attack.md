---
okf_version: "0.2"
type: Class
title: Partition Attack
resource: urn:ngm:class:partition-attack
domain: blockchain
description: A Partition Attack is a network-level attack against a blockchain in which an adversary manipulates routing infrastructure to segment the peer-to-peer network into two or more isolated subgraphs, causing each partition to mine or validate on a separate chain branch. When the partition is healed the shorter branch is discarded, enabling the attacker to waste honest mining power and potentially faci
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:network-component
requires:
  - urn:ngm:class:network-topology
  - urn:ngm:class:peer-to-peer-network
enables:
  - urn:ngm:class:double-spending
  - urn:ngm:class:selfish-mining
contrastsWith:
  - urn:ngm:class:byzantine-fault-tolerance
partOf:
  - urn:ngm:class:cybersecurity
relatedTo:
  - urn:ngm:class:eclipse-attack
  - urn:ngm:class:sybil-attack
  - urn:ngm:class:attack-vector
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:cryptographic-security
---

# Partition Attack

A Partition Attack is a network-level attack against a blockchain in which an adversary manipulates routing infrastructure to segment the peer-to-peer network into two or more isolated subgraphs, causing each partition to mine or validate on a separate chain branch. When the partition is healed the shorter branch is discarded, enabling the attacker to waste honest mining power and potentially facilitate double-spend attacks.
