---
okf_version: "0.2"
type: Class
title: Proof of History
resource: urn:ngm:class:proof-of-history
domain: blockchain
description: Proof of History is a cryptographic clock mechanism that timestamps transactions using a sequential, verifiable delay function (SHA-256 hash chain), establishing a tamper-evident historical record. This allows Solana validators to process transactions in parallel without requiring round-trip consensus on ordering, dramatically increasing throughput.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:proof-based-consensus
enables:
  - urn:ngm:class:deterministic-finality
  - urn:ngm:class:blockchain-network
uses:
  - urn:ngm:class:blockchain-transaction
partOf:
  - urn:ngm:class:proof-based-consensus
relatedTo:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:validator-node
  - urn:ngm:class:transaction-finality
  - urn:ngm:class:blockchain-scalability
---

# Proof of History

Proof of History is a cryptographic clock mechanism that timestamps transactions using a sequential, verifiable delay function (SHA-256 hash chain), establishing a tamper-evident historical record. This allows Solana validators to process transactions in parallel without requiring round-trip consensus on ordering, dramatically increasing throughput.
