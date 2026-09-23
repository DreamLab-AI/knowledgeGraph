---
okf_version: "0.2"
type: Class
title: Data Silo
resource: urn:ngm:class:data-silo
domain: data
description: A data silo is an isolated repository of data controlled by one team, system, or department and not readily accessible to the rest of an organisation. Silos arise from fragmented tooling, organisational boundaries, and incompatible formats, producing duplicated, inconsistent, and underused data. They are the principal obstacle that data integration, governance, and interoperability efforts seek to
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:data-management
requires:
  - urn:ngm:class:data-quality
dependsOn:
  - urn:ngm:class:data-management
implements:
  - urn:ngm:class:data-management
contrastsWith:
  - urn:ngm:class:data-integration
  - urn:ngm:class:data-fabric
  - urn:ngm:class:data-mesh
bridgesTo:
  - urn:ngm:class:interoperability
uses:
  - urn:ngm:class:metadata-management
supports:
  - urn:ngm:class:data-warehouse
partOf:
  - urn:ngm:class:data-management
relatedTo:
  - urn:ngm:class:data-governance
  - urn:ngm:class:enterprise-data
---

# Data Silo

A data silo is an isolated repository of data controlled by one team, system, or department and not readily accessible to the rest of an organisation. Silos arise from fragmented tooling, organisational boundaries, and incompatible formats, producing duplicated, inconsistent, and underused data. They are the principal obstacle that data integration, governance, and interoperability efforts seek to dismantle.
