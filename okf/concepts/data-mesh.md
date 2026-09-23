---
okf_version: "0.2"
type: Class
title: Data Mesh
resource: urn:ngm:class:data-mesh
domain: data
description: "Data Mesh is a socio-technical paradigm for large-scale analytical data architecture, coined by Zhamak Dehghani (2020), that decentralises data ownership to domain-aligned teams who treat their analytical datasets as first-class products accessible via standardised interfaces. It rests on four principles: domain-oriented decentralised data ownership, data as a product, self-serve data infrastructu"
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:data-governance-framework
requires:
  - urn:ngm:class:domain-driven-design
  - urn:ngm:class:schema-registry
enables:
  - urn:ngm:class:data-analytics
  - urn:ngm:class:distributed-system
contrastsWith:
  - urn:ngm:class:data-warehouse
  - urn:ngm:class:data-fabric-architecture
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:platform-engineering
uses:
  - urn:ngm:class:microservices-architecture
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:api-gateway
  - urn:ngm:class:policy-as-code
supports:
  - urn:ngm:class:event-driven-architecture
  - urn:ngm:class:data-lake
relatedTo:
  - urn:ngm:class:data-governance
  - urn:ngm:class:data-catalog
  - urn:ngm:class:data-lineage
---

# Data Mesh

Data Mesh is a socio-technical paradigm for large-scale analytical data architecture, coined by Zhamak Dehghani (2020), that decentralises data ownership to domain-aligned teams who treat their analytical datasets as first-class products accessible via standardised interfaces. It rests on four principles: domain-oriented decentralised data ownership, data as a product, self-serve data infrastructure as a platform, and federated computational governance. Unlike monolithic data lakes or warehouses governed by a central data engineering team, a Data Mesh distributes accountability so that the teams who generate data also maintain its quality, documentation, and SLAs as discoverable data products. The model draws on domain-driven design and microservices thinking applied to analytical rather than operational data flows.
