---
okf_version: "0.2"
type: Class
title: Evidence Collection
resource: urn:ngm:class:evidence-collection
domain: governance
description: Evidence collection is the systematic process of identifying, preserving, and documenting artefacts — digital or physical — in a manner that maintains their integrity and admissibility for legal, regulatory, or investigative proceedings. In digital contexts it encompasses forensic acquisition of disk images, memory dumps, network captures, and log files while maintaining strict chain-of-custody do
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:digital-forensics
hasPart:
  - urn:ngm:class:memory-acquisition
requires:
  - urn:ngm:class:chain-of-custody
  - urn:ngm:class:access-control
  - urn:ngm:class:trusted-timestamping
enables:
  - urn:ngm:class:forensic-analysis
  - urn:ngm:class:threat-intelligence
contrastsWith:
  - urn:ngm:class:data-destruction
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:artificial-intelligence
uses:
  - urn:ngm:class:audit-log
  - urn:ngm:class:chain-of-custody
  - urn:ngm:class:write-blocker
  - urn:ngm:class:cryptographic-hash
  - urn:ngm:class:forensic-imaging
supports:
  - urn:ngm:class:legal-evidence
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:cybercrime-investigation
standardizedBy:
  - urn:ngm:class:iso-iec-27037
relatedTo:
  - urn:ngm:class:incident-response
  - urn:ngm:class:compliance-evidence
  - urn:ngm:class:e-discovery
  - urn:ngm:class:data-integrity
  - urn:ngm:class:volatile-data
---

# Evidence Collection

Evidence collection is the systematic process of identifying, preserving, and documenting artefacts — digital or physical — in a manner that maintains their integrity and admissibility for legal, regulatory, or investigative proceedings. In digital contexts it encompasses forensic acquisition of disk images, memory dumps, network captures, and log files while maintaining strict chain-of-custody documentation.
