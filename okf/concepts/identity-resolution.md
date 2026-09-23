---
okf_version: "0.2"
type: Class
title: Identity Resolution
resource: urn:ngm:class:identity-resolution
domain: data
description: Identity resolution is the process of determining that multiple data records, identifiers, or signals across different systems refer to the same real-world entity — whether a person, organisation, or device — and consolidating them into a unified, persistent representation. It combines probabilistic and deterministic matching algorithms, data enrichment, and graph-linking to resolve fragmented ide
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:entity-resolution
hasPart:
  - urn:ngm:class:probabilistic-matching
  - urn:ngm:class:identity-graph
requires:
  - urn:ngm:class:data-deduplication
enables:
  - urn:ngm:class:fraud-detection
  - urn:ngm:class:personalisation
dependsOn:
  - urn:ngm:class:graph-database
contrastsWith:
  - urn:ngm:class:decentralized-identity
  - urn:ngm:class:anonymous-credential
bridgesTo:
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:self-sovereign-identity
uses:
  - urn:ngm:class:machine-learning-discipline
supports:
  - urn:ngm:class:audience-segmentation
standardizedBy:
  - urn:ngm:class:w3-c-did
partOf:
  - urn:ngm:class:master-data-management
  - urn:ngm:class:customer-data-platform
relatedTo:
  - urn:ngm:class:privacy-preserving-analytics
  - urn:ngm:class:data-clean-room
  - urn:ngm:class:consent-management
---

# Identity Resolution

Identity resolution is the process of determining that multiple data records, identifiers, or signals across different systems refer to the same real-world entity — whether a person, organisation, or device — and consolidating them into a unified, persistent representation. It combines probabilistic and deterministic matching algorithms, data enrichment, and graph-linking to resolve fragmented identities across first-party, second-party, and third-party data sources.
