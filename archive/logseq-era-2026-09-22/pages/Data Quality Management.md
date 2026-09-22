public:: true

# Data Quality Management

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:data-quality-management", "@type":"Page", "title":"Data Quality Management", "vc:slug":"data-quality-management", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:data-quality-management",
  "@type":"Class",
  "label":"Data Quality Management",
  "definition":"Data quality management is the discipline of measuring, monitoring, and improving the accuracy, completeness, consistency, and timeliness of data across its lifecycle. It combines profiling, validation, cleansing, and continuous monitoring with governance policies that define quality expectations. Reliable data quality is a precondition for trustworthy analytics, machine learning, and regulatory reporting.",
  "domain":"data",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:data-quality","label":"Data Quality"}],
  "relations":{
    "hasPart":[{"@id":"urn:ngm:class:data-cleaning","label":"Data Cleaning"},{"@id":"urn:ngm:class:data-integrity","label":"Data Integrity"}],
    "partOf":[{"@id":"urn:ngm:class:data-governance","label":"Data Governance"}],
    "requires":[{"@id":"urn:ngm:class:metadata-management","label":"Metadata Management"},{"@id":"urn:ngm:class:data-lineage","label":"Data Lineage"}],
    "enables":[{"@id":"urn:ngm:class:data-integrity","label":"Data Integrity"},{"@id":"urn:ngm:class:master-data-management","label":"Master Data Management"}],
    "dependsOn":[{"@id":"urn:ngm:class:data-governance","label":"Data Governance"}],
    "implements":[{"@id":"urn:ngm:class:data-governance","label":"Data Governance"}],
    "uses":[{"@id":"urn:ngm:class:data-observability","label":"Data Observability"},{"@id":"urn:ngm:class:data-catalog","label":"Data Catalog"}],
    "supports":[{"@id":"urn:ngm:class:data-analytics","label":"Data Analytics"},{"@id":"urn:ngm:class:machine-learning","label":"Machine Learning"}],
    "relatedTo":[{"@id":"urn:ngm:class:data-pipeline","label":"Data Pipeline"},{"@id":"urn:ngm:class:data-management","label":"Data Management"}],
    "bridgesTo":[{"@id":"urn:ngm:class:data-observability","label":"Data Observability"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Data quality management measures, monitors and improves the accuracy, completeness, consistency and timeliness of data across its lifecycle, combining profiling, [[Data Cleaning]] and continuous monitoring.
- It is a facet of [[Data Quality]], operates within [[Data Governance]], and is a precondition for trustworthy [[Data Analytics]] and [[Machine Learning]].
- ### Overview
- Data quality management begins by defining what "good" data means for a given use — the dimensions of accuracy, completeness, consistency, validity, uniqueness and timeliness.
- Profiling establishes a baseline; validation rules then enforce expectations as data flows through a [[Data Pipeline]].
- When defects are found, [[Data Cleaning]] corrects or quarantines records, while [[Data Observability]] tooling continuously watches for drift and freshness failures.
- Sustained quality requires governance: clear ownership, documented rules in a [[Data Catalog]], and traceability via [[Data Lineage]].
- ### Key aspects
- Quality dimensions: accuracy, completeness, consistency, validity and timeliness as measurable targets.
- Validation: rule-based checks applied as data enters and moves through pipelines.
- Cleansing: correcting, standardising and deduplicating records through [[Data Cleaning]].
- Monitoring: ongoing [[Data Observability]] to detect regressions in quality over time.
- Governance integration: aligning quality rules with [[Data Governance]] policies and ownership.
- ### Mechanisms
- Profiling computes statistics and detects outliers to establish a quality baseline.
- Validation gates enforce constraints, supporting [[Data Integrity]] within the [[Data Pipeline]].
- [[Metadata Management]] and [[Data Lineage]] make quality issues traceable to their source.
- Remediation workflows route defects for correction and feed back into [[Master Data Management]].
- ### Applications
- Preparing reliable inputs for [[Data Analytics]] and [[Machine Learning]] models.
- Regulatory and financial reporting that demands auditable, accurate data.
- Consolidating golden records through [[Master Data Management]].
- Cataloguing trusted datasets in a [[Data Catalog]] for self-service use.
- ### Relationships
- hasPart:: [[Data Cleaning]]
- hasPart:: [[Data Integrity]]
- partOf:: [[Data Governance]]
- requires:: [[Metadata Management]]
- requires:: [[Data Lineage]]
- enables:: [[Data Integrity]]
- enables:: [[Master Data Management]]
- dependsOn:: [[Data Governance]]
- implements:: [[Data Governance]]
- uses:: [[Data Observability]]
- uses:: [[Data Catalog]]
- supports:: [[Data Analytics]]
- supports:: [[Machine Learning]]
- relatedTo:: [[Data Pipeline]]
- relatedTo:: [[Data Management]]
- bridgesTo:: [[Data Observability]]
- ### Provenance
- updated:: 2026-06-15
- inferenceRule:: GapMaterialisation
- attributedTo:: did:nostr:ontology-mesh
