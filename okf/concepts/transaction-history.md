---
okf_version: "0.2"
type: Class
title: Transaction History
resource: urn:ngm:class:transaction-history
domain: blockchain
description: Transaction history is the ordered, append-only record of all value transfers, state changes, or operations executed within a financial or data system, providing a tamper-evident chronological account of who transacted what, with whom, and when. In blockchain systems, transaction history is the fundamental data structure underpinning the distributed ledger — every confirmed block links to its pred
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:transaction-ledger
enables:
  - urn:ngm:class:blockchain-analytics
  - urn:ngm:class:blockchain-compliance
uses:
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:audit-trail
  - urn:ngm:class:blockchain
relatedTo:
  - urn:ngm:class:financial-transactions
  - urn:ngm:class:audit-log
  - urn:ngm:class:on-chain-governance
---

# Transaction History

Transaction history is the ordered, append-only record of all value transfers, state changes, or operations executed within a financial or data system, providing a tamper-evident chronological account of who transacted what, with whom, and when. In blockchain systems, transaction history is the fundamental data structure underpinning the distributed ledger — every confirmed block links to its predecessor through cryptographic hashing, making retroactive alteration of any transaction computationally prohibitive. Transaction history serves audit, compliance, forensic, tax, and portfolio analytics functions across both traditional and decentralised financial systems.
