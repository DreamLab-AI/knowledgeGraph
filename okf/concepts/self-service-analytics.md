---
okf_version: "0.2"
type: Class
title: Self Service Analytics
resource: urn:ngm:class:self-service-analytics
domain: data
description: "Self-service analytics is an approach that empowers business users to explore data, build reports, and answer their own questions through governed, accessible tools without depending on specialist data teams for every request. It combines intuitive interfaces, curated and trustworthy data sources, and embedded governance so that broad access does not compromise consistency or security. The aim is "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:data-analytics
requires:
  - urn:ngm:class:data-governance
  - urn:ngm:class:data-quality
enables:
  - urn:ngm:class:decision-support
  - urn:ngm:class:business-intelligence
  - urn:ngm:class:data-visualisation
dependsOn:
  - urn:ngm:class:data-warehouse
  - urn:ngm:class:data-catalog
bridgesTo:
  - urn:ngm:class:data-governance
uses:
  - urn:ngm:class:data-visualisation
  - urn:ngm:class:sql
supports:
  - urn:ngm:class:data-engineering
partOf:
  - urn:ngm:class:data-analytics
relatedTo:
  - urn:ngm:class:data-catalog
  - urn:ngm:class:metadata-management
  - urn:ngm:class:olap
---

# Self Service Analytics

Self-service analytics is an approach that empowers business users to explore data, build reports, and answer their own questions through governed, accessible tools without depending on specialist data teams for every request. It combines intuitive interfaces, curated and trustworthy data sources, and embedded governance so that broad access does not compromise consistency or security. The aim is to accelerate decision-making and foster data literacy across an organisation.
