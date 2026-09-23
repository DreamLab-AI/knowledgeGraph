---
okf_version: "0.2"
type: Class
title: Digital Evidence Chain of Custody
resource: urn:ngm:class:digital-evidence-chain-of-custody
domain: infrastructure
description: Digital Evidence Chain of Custody is a type of Legal Framework in the infrastructure domain.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:infra-legal-and-regulatory
  - urn:ngm:class:legal-framework
hasPart:
  - urn:ngm:class:audit-log
  - urn:ngm:class:timestamp-authority
  - urn:ngm:class:access-control
  - urn:ngm:class:cryptographic-hash
  - urn:ngm:class:digital-signature
requires:
  - urn:ngm:class:blockchain-ledger
  - urn:ngm:class:secure-storage
  - urn:ngm:class:tamper-detection
  - urn:ngm:class:identity-verification
enables:
  - urn:ngm:class:forensic-investigation
  - urn:ngm:class:legal-admissibility
  - urn:ngm:class:non-repudiation
  - urn:ngm:class:evidence-integrity-verification
dependsOn:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:evidence-collection-protocol
  - urn:ngm:class:legal-framework
bridgesTo:
  - urn:ngm:class:blockchain
partOf:
  - urn:ngm:class:digital-forensics-framework
---

# Digital Evidence Chain of Custody

Digital Evidence Chain of Custody is a type of Legal Framework in the infrastructure domain.
