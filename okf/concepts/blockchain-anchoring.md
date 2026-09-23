---
okf_version: "0.2"
type: Class
title: Blockchain Anchoring
resource: urn:ngm:class:blockchain-anchoring
domain: blockchain
description: Blockchain Anchoring is a technique for binding external data or documents to a blockchain by embedding a cryptographic hash of that data in a blockchain transaction, thereby creating a tamper-evident, timestamped proof of existence and integrity that can be independently verified by any party with access to the document and the chain. The blockchain's immutability and distributed consensus guaran
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:blockchain-infrastructure
  - urn:ngm:class:cryptographic-hash-function
enables:
  - urn:ngm:class:data-integrity
  - urn:ngm:class:audit-trail
  - urn:ngm:class:immutable-record
uses:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:blockchain-transaction
relatedTo:
  - urn:ngm:class:timestamp
  - urn:ngm:class:cryptographic-proof
---

# Blockchain Anchoring

Blockchain Anchoring is a technique for binding external data or documents to a blockchain by embedding a cryptographic hash of that data in a blockchain transaction, thereby creating a tamper-evident, timestamped proof of existence and integrity that can be independently verified by any party with access to the document and the chain. The blockchain's immutability and distributed consensus guarantee that the anchoring transaction cannot be altered retroactively, providing a trust anchor without requiring the document itself to be stored on-chain. Applications span document notarisation, supply chain provenance, audit logs, and verifiable credential revocation.
