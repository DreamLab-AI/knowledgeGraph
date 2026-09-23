---
okf_version: "0.2"
type: Class
title: Supply Chain Provenance
resource: urn:ngm:class:supply-chain-provenance
domain: supply-chain
description: "Supply chain provenance is the verified documentary record of an item's origin, material composition, transformation steps, custody changes, and transportation history from raw material extraction through to the end consumer, enabling authenticity verification, ethical sourcing attestation, and regulatory compliance. It extends data provenance principles to physical goods, typically combining IoT "
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:provenance-tracking
requires:
  - urn:ngm:class:data-integrity
  - urn:ngm:class:unique-identifier
enables:
  - urn:ngm:class:anti-counterfeiting
  - urn:ngm:class:supply-chain-transparency
  - urn:ngm:class:ethical-sourcing
  - urn:ngm:class:regulatory-compliance
implements:
  - urn:ngm:class:gs1-epcis
  - urn:ngm:class:gs-1-standards
bridgesTo:
  - urn:ngm:class:zero-knowledge-proof
uses:
  - urn:ngm:class:supply-chain-blockchain
  - urn:ngm:class:audit-trail
  - urn:ngm:class:sensor-data
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:decentralized-identifiers
supports:
  - urn:ngm:class:provenance-verification
  - urn:ngm:class:esg-reporting
  - urn:ngm:class:food-safety
standardizedBy:
  - urn:ngm:class:provenance-standard
  - urn:ngm:class:gs1-digital-link
relatedTo:
  - urn:ngm:class:supply-chain
  - urn:ngm:class:supply-chain-traceability
  - urn:ngm:class:chain-of-custody
  - urn:ngm:class:digital-product-passport
  - urn:ngm:class:conflict-mineral-tracking
---

# Supply Chain Provenance

Supply chain provenance is the verified documentary record of an item's origin, material composition, transformation steps, custody changes, and transportation history from raw material extraction through to the end consumer, enabling authenticity verification, ethical sourcing attestation, and regulatory compliance. It extends data provenance principles to physical goods, typically combining IoT sensor data, third-party audit records, and cryptographic anchors (hashes or blockchain transactions) to create an immutable chain of evidence that resists falsification and supports granular attribution.
