public:: true

# Olap

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:olap", "@type":"Page", "title":"Olap", "vc:slug":"olap", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:olap",
  "@type":"Class",
  "label":"Olap",
  "definition":"Online Analytical Processing (OLAP) is a category of data processing optimised for fast, multidimensional analysis of large volumes of historical and aggregated data. It organises measures along dimensions such as time, geography, and product, allowing analysts to slice, dice, roll up, and drill down through data cubes interactively. OLAP underpins business intelligence and decision support by enabling complex aggregate queries that contrast with the row-oriented, transactional focus of operational systems.",
  "domain":"data",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:data-analytics","label":"Data Analytics"}],
  "relations":{
    "enables":[{"@id":"urn:ngm:class:business-intelligence","label":"Business Intelligence"},{"@id":"urn:ngm:class:decision-support","label":"Decision Support"},{"@id":"urn:ngm:class:data-visualisation","label":"Data Visualisation"}],
    "hasPart":[{"@id":"urn:ngm:class:data-warehouse","label":"Data Warehouse"},{"@id":"urn:ngm:class:data-analytics","label":"Data Analytics"}],
    "requires":[{"@id":"urn:ngm:class:data-warehouse","label":"Data Warehouse"},{"@id":"urn:ngm:class:data-architecture","label":"Data Architecture"}],
    "uses":[{"@id":"urn:ngm:class:sql","label":"SQL"},{"@id":"urn:ngm:class:data-pipeline","label":"Data Pipeline"}],
    "supports":[{"@id":"urn:ngm:class:self-service-analytics","label":"Self Service Analytics"},{"@id":"urn:ngm:class:data-engineering","label":"Data Engineering"}],
    "relatedTo":[{"@id":"urn:ngm:class:data-pipeline","label":"Data Pipeline"},{"@id":"urn:ngm:class:metadata","label":"Metadata"},{"@id":"urn:ngm:class:data-architecture","label":"Data Architecture"}],
    "contrastsWith":[{"@id":"urn:ngm:class:data-pipeline","label":"Data Pipeline"}],
    "bridgesTo":[{"@id":"urn:ngm:class:business-intelligence","label":"Business Intelligence"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- [[Olap]], Online Analytical Processing, is a category of data processing optimised for fast multidimensional analysis of large historical and aggregated data sets.
- It organises measures along dimensions so analysts can slice, roll up, and drill down through data cubes interactively.
- OLAP underpins [[Business Intelligence]] and [[Decision Support]] as a form of [[Data Analytics]].
- ### Overview
- OLAP arranges data as cubes whose cells hold measures, indexed by dimensions such as time, region, and product category. This multidimensional model matches how analysts reason about a business and lets them navigate aggregates fluidly rather than writing a new query for each question.
- Typical operations include roll-up to higher levels of aggregation, drill-down to finer detail, slicing to fix a dimension to a single value, and dicing to select a sub-cube across several dimensions. These interactive manoeuvres make exploratory analysis fast even over very large fact tables.
- OLAP contrasts with online transaction processing, which favours many small row-level writes for operational workloads; OLAP instead serves read-heavy, aggregate-heavy analytical queries. It is typically fed from a data warehouse populated by data pipelines, and it underpins dashboards, reports, and self-service analytics across an organisation.
- ### Key aspects
- Multidimensional model: measures organised along dimensions to form data cubes.
- Aggregation navigation: roll-up and drill-down between summary and detail.
- Slicing and dicing: selecting sub-cubes by fixing or filtering dimensions.
- Read-optimised performance: structures and indexes tuned for aggregate queries.
- Warehouse sourcing: cubes built from curated warehouse data.
- ### Applications
- Powering interactive [[Business Intelligence]] dashboards and reports.
- Supporting [[Decision Support]] through fast exploration of historical metrics.
- Feeding [[Self Service Analytics]] over curated [[Data Warehouse]] content.
- Enabling rich [[Data Visualisation]] of multidimensional results.
- ### Relationships
- enables:: [[Business Intelligence]]
- enables:: [[Decision Support]]
- enables:: [[Data Visualisation]]
- hasPart:: [[Data Warehouse]]
- hasPart:: [[Data Analytics]]
- requires:: [[Data Warehouse]]
- requires:: [[Data Architecture]]
- uses:: [[SQL]]
- uses:: [[Data Pipeline]]
- supports:: [[Self Service Analytics]]
- supports:: [[Data Engineering]]
- relatedTo:: [[Data Pipeline]]
- relatedTo:: [[Metadata]]
- relatedTo:: [[Data Architecture]]
- contrastsWith:: [[Data Pipeline]]
- bridgesTo:: [[Business Intelligence]]
- ### Provenance
- updated:: 2026-06-15
