---
okf_version: "0.2"
type: Class
title: Proof Of Spacetime
resource: urn:ngm:class:proof-of-spacetime
domain: blockchain
description: Proof of Spacetime (PoSt) is a cryptographic consensus mechanism in which a participant repeatedly proves that it has continuously stored a specific set of data over a period of time, rather than expending computation as in proof of work. Used by decentralised storage networks such as Filecoin, it combines storage proofs with time-based challenges so that providers cannot reclaim space without los
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:consensus-mechanism
hasPart:
  - urn:ngm:class:cryptographic-proof
requires:
  - urn:ngm:class:cryptographic-proof
enables:
  - urn:ngm:class:decentralized-storage
  - urn:ngm:class:file-storage
dependsOn:
  - urn:ngm:class:decentralized-storage
implements:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:decentralized-storage
contrastsWith:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:proof-of-stake
bridgesTo:
  - urn:ngm:class:proof-of-reserves
uses:
  - urn:ngm:class:cryptographic-proof
  - urn:ngm:class:verifiable-computation
supports:
  - urn:ngm:class:filecoin
  - urn:ngm:class:block-reward
partOf:
  - urn:ngm:class:consensus-mechanism
relatedTo:
  - urn:ngm:class:ipfs
  - urn:ngm:class:replication
  - urn:ngm:class:consensus
---

# Proof Of Spacetime

Proof of Spacetime (PoSt) is a cryptographic consensus mechanism in which a participant repeatedly proves that it has continuously stored a specific set of data over a period of time, rather than expending computation as in proof of work. Used by decentralised storage networks such as Filecoin, it combines storage proofs with time-based challenges so that providers cannot reclaim space without losing the ability to answer. This ties block production and rewards to verifiable, useful storage capacity.
