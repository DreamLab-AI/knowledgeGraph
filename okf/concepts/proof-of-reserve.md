---
okf_version: "0.2"
type: Class
title: Proof Of Reserve
resource: urn:ngm:class:proof-of-reserve
domain: blockchain
description: "Proof of reserve is a verification practice in which a custodian or exchange demonstrates that it holds assets sufficient to cover its customer liabilities. It typically combines an on-chain attestation of owned assets with a Merkle-tree commitment to the liability set, allowing users to verify inclusion of their balance without revealing others. Robust schemes also prove liabilities to establish "
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:blockchain
  - urn:ngm:class:bc-governance-and-regulation
requires:
  - urn:ngm:class:attestation
enables:
  - urn:ngm:class:transparency
dependsOn:
  - urn:ngm:class:merkle-tree
implements:
  - urn:ngm:class:cryptographic-proof
bridgesTo:
  - urn:ngm:class:zero-knowledge-proof
uses:
  - urn:ngm:class:cryptographic-proof
  - urn:ngm:class:attestation
supports:
  - urn:ngm:class:centralised-exchange
standardizedBy:
  - urn:ngm:class:merkle-tree
partOf:
  - urn:ngm:class:audit
relatedTo:
  - urn:ngm:class:audit
  - urn:ngm:class:custodian
---

# Proof Of Reserve

Proof of reserve is a verification practice in which a custodian or exchange demonstrates that it holds assets sufficient to cover its customer liabilities. It typically combines an on-chain attestation of owned assets with a Merkle-tree commitment to the liability set, allowing users to verify inclusion of their balance without revealing others. Robust schemes also prove liabilities to establish solvency, often with auditor or zero-knowledge support.
