---
okf_version: "0.2"
type: Class
title: Sybil Attack
resource: urn:ngm:class:sybil-attack
domain: security
description: A Sybil Attack is a network security threat in which a single adversary creates a large number of pseudonymous identities to gain disproportionate influence over a peer-to-peer system. In blockchain and distributed ledger contexts it can subvert reputation systems, distort consensus voting, facilitate eclipse attacks, and undermine proof-of-stake weighting. Countermeasures include proof-of-work, s
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:infra-security-and-identity
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:networkcomponent
requires:
  - urn:ngm:class:pseudonymity
  - urn:ngm:class:peer-to-peer-network
enables:
  - urn:ngm:class:eclipse-attack
  - urn:ngm:class:double-spending
  - urn:ngm:class:routing-attack
  - urn:ngm:class:denial-of-service
dependsOn:
  - urn:ngm:class:network-topology
  - urn:ngm:class:identity-management
contrastsWith:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:byzantine-fault-tolerance
uses:
  - urn:ngm:class:reputation-system
relatedTo:
  - urn:ngm:class:selfish-mining
  - urn:ngm:class:51-attack
  - urn:ngm:class:decentralized-identity
  - urn:ngm:class:consensus-mechanism
---

# Sybil Attack

A Sybil Attack is a network security threat in which a single adversary creates a large number of pseudonymous identities to gain disproportionate influence over a peer-to-peer system. In blockchain and distributed ledger contexts it can subvert reputation systems, distort consensus voting, facilitate eclipse attacks, and undermine proof-of-stake weighting. Countermeasures include proof-of-work, stake-weighted voting, identity verification, and peer diversity requirements.
