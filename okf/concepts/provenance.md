---
okf_version: "0.2"
type: Class
title: Provenance
resource: urn:ngm:class:provenance
domain: data
description: The documented record of the origin, history and chain of custody of data or assets, used to establish authenticity, trust and accountability.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:data-provenance
hasPart:
  - urn:ngm:class:audit-trail
  - urn:ngm:class:data-lineage
  - urn:ngm:class:chain-of-custody
requires:
  - urn:ngm:class:audit-trail
  - urn:ngm:class:digital-signature
  - urn:ngm:class:timestamp
enables:
  - urn:ngm:class:trust
  - urn:ngm:class:accountability
  - urn:ngm:class:reproducibility
  - urn:ngm:class:data-quality
dependsOn:
  - urn:ngm:class:metadata
  - urn:ngm:class:identity
implements:
  - urn:ngm:class:provenance-standard
contrastsWith:
  - urn:ngm:class:anonymisation
bridgesTo:
  - urn:ngm:class:supply-chain
  - urn:ngm:class:blockchain
  - urn:ngm:class:reproducibility
  - urn:ngm:class:provenance-tracking
uses:
  - urn:ngm:class:cryptographic-hash
  - urn:ngm:class:merkle-tree
supports:
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:open-data
standardizedBy:
  - urn:ngm:class:provenance-standard
  - urn:ngm:class:provenance-ontology-prov-o
partOf:
  - urn:ngm:class:data-governance
  - urn:ngm:class:knowledge-graph
relatedTo:
  - urn:ngm:class:provenance-tracking
  - urn:ngm:class:data-lineage
  - urn:ngm:class:non-repudiation
---

# Provenance

The documented record of the origin, history and chain of custody of data or assets, used to establish authenticity, trust and accountability.
