---
okf_version: "0.2"
type: Class
title: Tamper Detection
resource: urn:ngm:class:tamper-detection
domain: security
description: Tamper detection is the set of technical mechanisms and protocols that identify whether a digital asset, data record, physical device, or communication has been unauthorisedly modified since its creation or last verified state. In the digital domain it employs cryptographic hash functions, digital signatures, Merkle proofs, and content-addressed storage to generate verifiable commitments that reve
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:data-integrity
enables:
  - urn:ngm:class:content-authentication
  - urn:ngm:class:provenance-verification
  - urn:ngm:class:digital-forensics
uses:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:digital-signature
  - urn:ngm:class:cryptographic-signature
relatedTo:
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:audit-trail
---

# Tamper Detection

Tamper detection is the set of technical mechanisms and protocols that identify whether a digital asset, data record, physical device, or communication has been unauthorisedly modified since its creation or last verified state. In the digital domain it employs cryptographic hash functions, digital signatures, Merkle proofs, and content-addressed storage to generate verifiable commitments that reveal any change to the protected content. Applied to media authenticity, hardware integrity, and data provenance, tamper detection is a foundational component of trust architectures for critical systems, supply chains, digital forensics, and content authenticity verification.
