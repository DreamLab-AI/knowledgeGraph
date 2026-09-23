---
okf_version: "0.2"
type: Class
title: Data Architecture
resource: urn:ngm:class:data-architecture
domain: data
description: Data architecture is the discipline of designing the structures, standards, models and integration patterns that govern how an organisation collects, stores, transforms, moves and consumes data. It defines logical and physical data models, storage technologies, data flows, master data strategies and the policies that ensure consistency, quality and security across systems. As a component of enterp
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:enterprise-architecture
hasPart:
  - urn:ngm:class:data-lake
  - urn:ngm:class:data-warehouse
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:master-data-management
requires:
  - urn:ngm:class:data-standards
  - urn:ngm:class:data-quality
dependsOn:
  - urn:ngm:class:data-governance
  - urn:ngm:class:data-management
contrastsWith:
  - urn:ngm:class:information-architecture
bridgesTo:
  - urn:ngm:class:data-management
uses:
  - urn:ngm:class:microservices
supports:
  - urn:ngm:class:data-management
partOf:
  - urn:ngm:class:enterprise-architecture
  - urn:ngm:class:information-architecture
relatedTo:
  - urn:ngm:class:enterprise-architecture
  - urn:ngm:class:data-lake
---

# Data Architecture

Data architecture is the discipline of designing the structures, standards, models and integration patterns that govern how an organisation collects, stores, transforms, moves and consumes data. It defines logical and physical data models, storage technologies, data flows, master data strategies and the policies that ensure consistency, quality and security across systems. As a component of enterprise architecture, it provides the blueprint that aligns data assets with business and analytical requirements.
