public:: true

# Data Transformation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:data-transformation", "@type":"Page", "title":"Data Transformation", "vc:slug":"data-transformation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:data-transformation",
  "@type":"Class",
  "label":"Data Transformation",
  "definition":"Data transformation is the process of converting data from one structure, format or representation into another to make it suitable for storage, integration or analysis. It includes cleansing, type conversion, normalisation, aggregation, enrichment, schema mapping and serialisation, and is typically expressed as declarative or programmatic steps within a pipeline. Transformation reconciles heterogeneous sources, enforces quality and conformance rules, and shapes raw inputs into the canonical forms required by downstream systems.",
  "domain":"infrastructure",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:data-processing","label":"Data Processing"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:data-pipeline","label":"Data Pipeline"}],
    "hasPart":[{"@id":"urn:ngm:class:data-cleaning","label":"Data Cleaning"},{"@id":"urn:ngm:class:data-serialization","label":"Data Serialization"}],
    "uses":[{"@id":"urn:ngm:class:schema","label":"Schema"},{"@id":"urn:ngm:class:data-validation","label":"Data Validation"}],
    "requires":[{"@id":"urn:ngm:class:data-quality","label":"Data Quality"}],
    "implements":[{"@id":"urn:ngm:class:etl","label":"ETL"}],
    "enables":[{"@id":"urn:ngm:class:data-integration","label":"Data Integration"},{"@id":"urn:ngm:class:data-analytics","label":"Data Analytics"}],
    "supports":[{"@id":"urn:ngm:class:feature-engineering","label":"Feature Engineering"},{"@id":"urn:ngm:class:data-warehouse","label":"Data Warehouse"}],
    "dependsOn":[{"@id":"urn:ngm:class:data-engineering","label":"Data Engineering"}],
    "relatedTo":[{"@id":"urn:ngm:class:data-processing","label":"Data Processing"},{"@id":"urn:ngm:class:data-lake","label":"Data Lake"}],
    "bridgesTo":[{"@id":"urn:ngm:class:data-integration","label":"Data Integration"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- [[Data Transformation]] converts data from one structure or format into another so it can be stored, integrated and analysed. It is a core stage of [[Data Processing]].
- It covers [[Data Cleaning]], type conversion, normalisation, aggregation, enrichment and [[Data Serialization]].
- Within a [[Data Pipeline]] it reconciles heterogeneous sources against a target [[Schema]] while enforcing [[Data Validation]] rules.
- It is the operational heart of [[ETL]] and the precondition for trustworthy [[Data Analytics]].
- ### Overview
- Raw data rarely arrives in the shape downstream systems expect. Sources differ in encoding, units, granularity, naming and completeness. Data transformation is the disciplined reshaping that bridges that gap.
- Transformations may be value-level (parsing, casting, rounding, deduplication) or structure-level (pivoting, flattening, joining, schema mapping). Both are routinely composed into multi-stage flows.
- Modern practice favours declarative transformation expressed in SQL or domain-specific languages, with lineage and tests attached, so that logic is auditable and reproducible.
- The classic ETL ordering performs transformation before loading; the ELT pattern defers it to a warehouse, exploiting elastic compute. The conceptual transformation step is identical in both.
- ### Key aspects
- Cleansing: removing duplicates, correcting errors and handling missing values to raise data quality.
- Conversion: changing types, encodings, units and date formats to a canonical representation.
- Normalisation and denormalisation: restructuring relations for integrity or for query performance.
- Aggregation and enrichment: summarising records and augmenting them with derived or external attributes.
- Schema mapping: aligning source fields to a target model so disparate systems interoperate.
- Lineage and testing: tracking provenance and asserting expectations to guarantee correctness over time.
- ### Applications
- Preparing operational data for loading into a [[Data Warehouse]] or [[Data Lake]].
- Harmonising records from many systems during [[Data Integration]] projects.
- Producing model-ready inputs through [[Feature Engineering]] for machine learning.
- Standardising telemetry and logs before observability and analytics.
- Reconciling formats across APIs, message buses and batch exports.
- Enforcing governance and conformance rules as data crosses trust boundaries.
- ### Relationships
- partOf:: [[Data Pipeline]]
- hasPart:: [[Data Cleaning]]
- hasPart:: [[Data Serialization]]
- uses:: [[Schema]]
- uses:: [[Data Validation]]
- requires:: [[Data Quality]]
- implements:: [[ETL]]
- enables:: [[Data Integration]]
- enables:: [[Data Analytics]]
- supports:: [[Feature Engineering]]
- supports:: [[Data Warehouse]]
- dependsOn:: [[Data Engineering]]
- relatedTo:: [[Data Processing]]
- relatedTo:: [[Data Lake]]
- bridgesTo:: [[Data Integration]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
