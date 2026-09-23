---
okf_version: "0.2"
type: Class
title: Data Provenance
resource: urn:ngm:class:data-provenance
domain: infrastructure
description: A continuous process of recording and tracking the origin, lineage, and transformation history of data objects, enabling traceability, validation of data quality, and verification of authenticity throughout the data lifecycle.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:data-management
  - urn:ngm:class:data-management
hasPart:
  - urn:ngm:class:data-lineage-tracking
  - urn:ngm:class:provenance
  - urn:ngm:class:timestamp-service
  - urn:ngm:class:audit-trail
  - urn:ngm:class:provenance
  - urn:ngm:class:data-lineage-tracking
  - urn:ngm:class:signature-validator
requires:
  - urn:ngm:class:metadata
  - urn:ngm:class:timestamp-authority
  - urn:ngm:class:digital-signature
enables:
  - urn:ngm:class:compliance-audit
  - urn:ngm:class:data-quality
  - urn:ngm:class:reproducibility
  - urn:ngm:class:provenance-verification
  - urn:ngm:class:data-quality
  - urn:ngm:class:attribution
dependsOn:
  - urn:ngm:class:identity-management
  - urn:ngm:class:event-logging
  - urn:ngm:class:blockchain
bridgesTo:
  - urn:ngm:class:blockchain
partOf:
  - urn:ngm:class:data-governance
  - urn:ngm:class:data-management
  - urn:ngm:class:trust-framework
---

# Data Provenance

A continuous process of recording and tracking the origin, lineage, and transformation history of data objects, enabling traceability, validation of data quality, and verification of authenticity throughout the data lifecycle.
