---
okf_version: "0.2"
type: Class
title: Data Stewardship
resource: urn:ngm:class:data-stewardship
domain: governance
description: Data stewardship is the operational accountability for managing an organisation's data assets across their lifecycle, ensuring they are accurate, well-documented, secure, and used in line with policy. Data stewards act as the human layer of data governance, owning definitions, resolving quality issues, and curating metadata and lineage. It bridges governance policy and day-to-day data practice, en
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:data-governance
hasPart:
  - urn:ngm:class:data-steward
requires:
  - urn:ngm:class:data-quality
  - urn:ngm:class:metadata-management
enables:
  - urn:ngm:class:data-quality
dependsOn:
  - urn:ngm:class:data-catalogue
implements:
  - urn:ngm:class:data-governance
uses:
  - urn:ngm:class:data-catalogue
  - urn:ngm:class:data-lineage
supports:
  - urn:ngm:class:master-data-management
partOf:
  - urn:ngm:class:data-governance
relatedTo:
  - urn:ngm:class:data-management
  - urn:ngm:class:interoperability
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Data Stewardship

Data stewardship is the operational accountability for managing an organisation's data assets across their lifecycle, ensuring they are accurate, well-documented, secure, and used in line with policy. Data stewards act as the human layer of data governance, owning definitions, resolving quality issues, and curating metadata and lineage. It bridges governance policy and day-to-day data practice, enabling trustworthy, reusable data.
