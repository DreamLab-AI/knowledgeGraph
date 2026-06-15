- ### Definition
  - [[Metadata Catalog]] is defined in relation to [[Data Catalog]], [[Metadata Management]], [[Data Lineage]], [[Data Governance]], building on [[Data Catalog]].
  - A metadata catalog is a centralised, searchable inventory of an organisation's data assets and their descriptive, technical, operational, and business metadata. It records schemas, locations, ownership, lineage, classifications, and usage, enabling users to discover, understand, trust, and govern data. By unifying metadata across heterogeneous stores, it underpins data discovery, governance, and self-service analytics.

- ### Overview
  - A metadata catalog acts as a single source of truth about data: what exists, where it lives, what it means, who owns it, how fresh and trustworthy it is, and how it relates to other assets. It harvests technical metadata from sources and enriches it with business glossaries, tags, classifications, and lineage.
  - By making this metadata searchable and collaborative, the catalog turns scattered, tribal knowledge into a shared, governed resource. It is the connective tissue of modern data platforms, mediating discovery for analysts and policy enforcement for stewards.

- ### Key aspects
  - Automated harvesting of technical metadata and crawling of sources across lakes, warehouses, and streams.
  - Business context: glossaries, classifications, ownership, certification, and usage popularity.
  - Lineage capture and impact analysis linking upstream sources to downstream consumers.

- ### Applications
  - Self-service data discovery so analysts find trustworthy datasets quickly.
  - Governance: tracking sensitive data, enforcing access policy, and demonstrating compliance.
  - Change-impact analysis before altering schemas or pipelines.

- ### Relationships
  - subClassOf:: [[Data Catalog]]
  - hasPart:: [[Metadata Management]]
  - hasPart:: [[Data Lineage]]
  - hasPart:: [[Schema Registry]]
  - requires:: [[Metadata Management]]
  - requires:: [[Data Governance]]
  - partOf:: [[Data Catalog]]
  - enables:: [[Data Discovery]]
  - enables:: [[Data Governance]]
  - supports:: [[Data Management]]
  - supports:: [[Data Quality]]
  - uses:: [[Data Lineage]]
  - uses:: [[Schema Registry]]
  - dependsOn:: [[Metadata Management]]
  - bridgesTo:: [[Data Lake]]
  - bridgesTo:: [[Data Warehouse]]
  - relatedTo:: [[Master Data Management]]
  - relatedTo:: [[Data Quality]]
  - relatedTo:: [[Data Discovery]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation