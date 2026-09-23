---
okf_version: "0.2"
type: Class
title: Transaction Privacy
resource: urn:ngm:class:transaction-privacy
domain: blockchain
description: Transaction privacy is the property of a payment or ledger system that conceals sensitive details of a transaction, such as sender, receiver and amount, from third parties while preserving verifiability of correctness. On public blockchains it is achieved through cryptographic techniques that prove a transaction is valid without revealing its contents. It addresses the inherent transparency of ope
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:privacy-preserving-computation
hasPart:
  - urn:ngm:class:stealth-address
enables:
  - urn:ngm:class:confidential-transactions
  - urn:ngm:class:shielded-transaction
dependsOn:
  - urn:ngm:class:zero-knowledge-proof
implements:
  - urn:ngm:class:privacy-preserving-computation
contrastsWith:
  - urn:ngm:class:beneficial-ownership
bridgesTo:
  - urn:ngm:class:monero
uses:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:zk-snark
supports:
  - urn:ngm:class:privacy-coin
relatedTo:
  - urn:ngm:class:zcash
  - urn:ngm:class:confidential-transactions
---

# Transaction Privacy

Transaction privacy is the property of a payment or ledger system that conceals sensitive details of a transaction, such as sender, receiver and amount, from third parties while preserving verifiability of correctness. On public blockchains it is achieved through cryptographic techniques that prove a transaction is valid without revealing its contents. It addresses the inherent transparency of open ledgers, trading off auditability and regulatory visibility against confidentiality.
