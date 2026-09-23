---
okf_version: "0.2"
type: Class
title: Chain of Custody
resource: urn:ngm:class:chain-of-custody
domain: security
description: "Chain of Custody is a documented, unbroken sequence of records that tracks the possession, handling, transfer, analysis, and disposition of physical or digital items from their point of origin to their ultimate use—most critically in legal proceedings and regulated industries. Each handoff event must be recorded with the identity of the parties involved, the time and location of transfer, and the "
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:provenance-tracking
hasPart:
  - urn:ngm:class:custody
  - urn:ngm:class:tamper-detection
requires:
  - urn:ngm:class:audit-logging
  - urn:ngm:class:identity-verification
  - urn:ngm:class:cryptographic-hash-function
enables:
  - urn:ngm:class:legal-evidence
  - urn:ngm:class:compliance-verification
  - urn:ngm:class:provenance-verification
dependsOn:
  - urn:ngm:class:access-control
  - urn:ngm:class:trusted-timestamping
implements:
  - urn:ngm:class:non-repudiation
contrastsWith:
  - urn:ngm:class:record-keeping
bridgesTo:
  - urn:ngm:class:blockchain-provenance
  - urn:ngm:class:data-lineage
uses:
  - urn:ngm:class:audit-trail
  - urn:ngm:class:digital-signature
  - urn:ngm:class:verifiable-credential-vc
supports:
  - urn:ngm:class:supply-chain-traceability
  - urn:ngm:class:digital-forensics
  - urn:ngm:class:data-governance
partOf:
  - urn:ngm:class:evidence-collection
  - urn:ngm:class:compliance-framework
relatedTo:
  - urn:ngm:class:digital-evidence-chain-of-custody
  - urn:ngm:class:data-provenance
---

# Chain of Custody

Chain of Custody is a documented, unbroken sequence of records that tracks the possession, handling, transfer, analysis, and disposition of physical or digital items from their point of origin to their ultimate use—most critically in legal proceedings and regulated industries. Each handoff event must be recorded with the identity of the parties involved, the time and location of transfer, and the state of the item, ensuring that the integrity and authenticity of the item can be demonstrated to any subsequent examiner. In digital contexts the concept extends to data provenance, AI training datasets, and blockchain-based asset transfer records.
