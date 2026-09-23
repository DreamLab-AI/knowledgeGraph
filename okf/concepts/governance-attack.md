---
okf_version: "0.2"
type: Class
title: Governance Attack
resource: urn:ngm:class:governance-attack
domain: blockchain
description: A governance attack is an exploit in which an adversary acquires or temporarily controls sufficient voting power within a decentralised governance system to pass malicious proposals against the interests of the wider community. Such attacks often combine economic mechanisms, such as borrowing governance tokens via flash loans, with the on-chain execution semantics of decentralised autonomous organ
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:voting-mechanism
requires:
  - urn:ngm:class:governance-token
enables:
  - urn:ngm:class:sybil-attack
dependsOn:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:voting-mechanism
contrastsWith:
  - urn:ngm:class:consensus
bridgesTo:
  - urn:ngm:class:blockchain
uses:
  - urn:ngm:class:flash-loan
supports:
  - urn:ngm:class:distributed-ledger
partOf:
  - urn:ngm:class:decentralized-governance
relatedTo:
  - urn:ngm:class:decentralized-governance
  - urn:ngm:class:dao
  - urn:ngm:class:snapshot-voting
  - urn:ngm:class:token-weighted-voting
---

# Governance Attack

A governance attack is an exploit in which an adversary acquires or temporarily controls sufficient voting power within a decentralised governance system to pass malicious proposals against the interests of the wider community. Such attacks often combine economic mechanisms, such as borrowing governance tokens via flash loans, with the on-chain execution semantics of decentralised autonomous organisations. The aim is typically to drain a treasury, alter protocol parameters, or seize privileged contract roles.
