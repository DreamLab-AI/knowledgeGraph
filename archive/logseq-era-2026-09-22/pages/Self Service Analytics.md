public:: true

# Self Service Analytics

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:self-service-analytics", "@type":"Page", "title":"Self Service Analytics", "vc:slug":"self-service-analytics", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:self-service-analytics",
  "@type":"Class",
  "label":"Self Service Analytics",
  "definition":"Self-service analytics is an approach that empowers business users to explore data, build reports, and answer their own questions through governed, accessible tools without depending on specialist data teams for every request. It combines intuitive interfaces, curated and trustworthy data sources, and embedded governance so that broad access does not compromise consistency or security. The aim is to accelerate decision-making and foster data literacy across an organisation.",
  "domain":"data",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:data-analytics","label":"Data Analytics"}],
  "relations":{
    "enables":[{"@id":"urn:ngm:class:decision-support","label":"Decision Support"},{"@id":"urn:ngm:class:business-intelligence","label":"Business Intelligence"},{"@id":"urn:ngm:class:data-visualisation","label":"Data Visualisation"}],
    "relatedTo":[{"@id":"urn:ngm:class:data-catalog","label":"Data Catalog"},{"@id":"urn:ngm:class:metadata-management","label":"Metadata Management"},{"@id":"urn:ngm:class:olap","label":"Olap"}],
    "requires":[{"@id":"urn:ngm:class:data-governance","label":"Data Governance"},{"@id":"urn:ngm:class:data-quality","label":"Data Quality"}],
    "uses":[{"@id":"urn:ngm:class:data-visualisation","label":"Data Visualisation"},{"@id":"urn:ngm:class:sql","label":"SQL"}],
    "dependsOn":[{"@id":"urn:ngm:class:data-warehouse","label":"Data Warehouse"},{"@id":"urn:ngm:class:data-catalog","label":"Data Catalog"}],
    "supports":[{"@id":"urn:ngm:class:data-engineering","label":"Data Engineering"}],
    "partOf":[{"@id":"urn:ngm:class:data-analytics","label":"Data Analytics"}],
    "bridgesTo":[{"@id":"urn:ngm:class:data-governance","label":"Data Governance"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- [[Self Service Analytics]] empowers business users to explore data and answer their own questions through governed, accessible tools without depending on specialist teams for each request.
- It combines intuitive interfaces, curated sources, and embedded [[Data Governance]] so broad access keeps consistency and security.
- The aim is faster decision-making and wider data literacy, complementing [[Business Intelligence]].
- ### Overview
- Self-service analytics shifts routine analytical work from a central team to the people closest to the questions. Business users connect to curated data, build their own queries, reports, and dashboards, and iterate quickly, reducing the bottleneck of ticket-based requests to analysts and engineers.
- The approach only succeeds when freedom is paired with guardrails. Curated, trustworthy data sources, a searchable data catalogue, and clear metadata ensure users find the right data and interpret it correctly, while embedded governance enforces access controls and consistent definitions so different users reach the same numbers.
- Done well, self-service analytics raises organisational data literacy and shortens the path from question to insight. It builds on warehouse and analytical infrastructure, including OLAP-style exploration, and depends on data quality and governance to remain trustworthy as usage scales beyond specialist teams.
- ### Key aspects
- Accessible tooling: intuitive interfaces that non-specialists can use to query and visualise data.
- Curated sources: governed, trustworthy datasets that users can safely build on.
- Embedded governance: access control and consistent definitions enforced behind the scenes.
- Discoverability: catalogues and metadata that help users find and understand data.
- Data literacy: skills and culture that let a broad audience interpret results correctly.
- ### Applications
- Letting business teams build their own [[Data Visualisation]] dashboards and reports.
- Accelerating [[Decision Support]] without queuing requests to central analysts.
- Combining with [[Olap]] exploration over a curated [[Data Warehouse]].
- Relying on a [[Data Catalog]] and [[Metadata Management]] for safe discovery.
- ### Relationships
- enables:: [[Decision Support]]
- enables:: [[Business Intelligence]]
- enables:: [[Data Visualisation]]
- relatedTo:: [[Data Catalog]]
- relatedTo:: [[Metadata Management]]
- relatedTo:: [[Olap]]
- requires:: [[Data Governance]]
- requires:: [[Data Quality]]
- uses:: [[Data Visualisation]]
- uses:: [[SQL]]
- dependsOn:: [[Data Warehouse]]
- dependsOn:: [[Data Catalog]]
- supports:: [[Data Engineering]]
- partOf:: [[Data Analytics]]
- bridgesTo:: [[Data Governance]]
- ### Provenance
- updated:: 2026-06-15
