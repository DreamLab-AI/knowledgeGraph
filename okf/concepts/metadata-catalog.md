---
okf_version: "0.2"
type: Class
title: Metadata Catalog
resource: urn:ngm:class:metadata-catalog
domain: data
description: A metadata catalog is a centralised, searchable inventory of an organisation's data assets and their descriptive, technical, operational, and business metadata. It records schemas, locations, ownership, lineage, classifications, and usage, enabling users to discover, understand, trust, and govern data. By unifying metadata across heterogeneous stores, it underpins data discovery, governance, and s
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:data-catalog
hasPart:
  - urn:ngm:class:metadata-management
  - urn:ngm:class:data-lineage
  - urn:ngm:class:schema-registry
requires:
  - urn:ngm:class:metadata-management
  - urn:ngm:class:data-governance
enables:
  - urn:ngm:class:data-discovery
  - urn:ngm:class:data-governance
dependsOn:
  - urn:ngm:class:metadata-management
bridgesTo:
  - urn:ngm:class:data-lake
  - urn:ngm:class:data-warehouse
uses:
  - urn:ngm:class:data-lineage
  - urn:ngm:class:schema-registry
supports:
  - urn:ngm:class:data-management
  - urn:ngm:class:data-quality
partOf:
  - urn:ngm:class:data-catalog
relatedTo:
  - urn:ngm:class:master-data-management
  - urn:ngm:class:data-quality
  - urn:ngm:class:data-discovery
---

# Metadata Catalog

A metadata catalog is a centralised, searchable inventory of an organisation's data assets and their descriptive, technical, operational, and business metadata. It records schemas, locations, ownership, lineage, classifications, and usage, enabling users to discover, understand, trust, and govern data. By unifying metadata across heterogeneous stores, it underpins data discovery, governance, and self-service analytics.
