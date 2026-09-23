---
okf_version: "0.2"
type: Class
title: Gasper Consensus
resource: urn:ngm:class:gasper-consensus
domain: blockchain
description: Gasper Consensus is Ethereum's Proof-of-Stake consensus protocol, combining Casper FFG (Friendly Finality Gadget) as a finality mechanism with LMD GHOST (Latest Message Driven Greedy Heaviest Observed Subtree) as the fork choice rule. Validators stake ETH directly and attest to blocks in each epoch; Casper FFG provides economic finality by requiring two-thirds supermajority agreement, while LMD GH
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:hybrid-consensus
hasPart:
  - urn:ngm:class:fork-choice-rule
  - urn:ngm:class:finality
  - urn:ngm:class:validator-set
requires:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:validator-node
  - urn:ngm:class:consensus-mechanism
enables:
  - urn:ngm:class:finality
  - urn:ngm:class:blockchain-scalability
uses:
  - urn:ngm:class:consensus-algorithm
  - urn:ngm:class:consensus-protocol
relatedTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:blockchain-protocol
  - urn:ngm:class:distributed-ledger
---

# Gasper Consensus

Gasper Consensus is Ethereum's Proof-of-Stake consensus protocol, combining Casper FFG (Friendly Finality Gadget) as a finality mechanism with LMD GHOST (Latest Message Driven Greedy Heaviest Observed Subtree) as the fork choice rule. Validators stake ETH directly and attest to blocks in each epoch; Casper FFG provides economic finality by requiring two-thirds supermajority agreement, while LMD GHOST guides validators towards the heaviest chain, resolving short-lived forks without full finalisation delay.
