public:: true

# Data Dictionary

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:data-dictionary", "@type":"Page", "title":"Data Dictionary", "vc:slug":"data-dictionary", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:data-dictionary",
  "@type":"Class",
  "label":"Data Dictionary",
  "definition":"A data dictionary is a centralised, structured repository that describes the data elements of an information system, recording each element's name, definition, data type, format, allowable values, relationships and ownership. It serves as an authoritative reference for the meaning and structure of data, distinct from the data itself, enabling consistent understanding across teams and systems. Data dictionaries underpin data governance, integration and quality assurance by making the semantics of stored data explicit.",
  "domain":"data",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:metadata-management","label":"Metadata Management"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:data-management","label":"Data Management"},{"@id":"urn:ngm:class:data-governance","label":"Data Governance"}],
    "hasPart":[{"@id":"urn:ngm:class:schema","label":"Schema"},{"@id":"urn:ngm:class:metadata","label":"Metadata"}],
    "contrastsWith":[{"@id":"urn:ngm:class:data-catalogue","label":"Data Catalogue"},{"@id":"urn:ngm:class:data-lineage","label":"Data Lineage"}],
    "supports":[{"@id":"urn:ngm:class:data-quality","label":"Data Quality"},{"@id":"urn:ngm:class:data-governance","label":"Data Governance"}],
    "enables":[{"@id":"urn:ngm:class:data-quality","label":"Data Quality"}],
    "uses":[{"@id":"urn:ngm:class:metadata","label":"Metadata"},{"@id":"urn:ngm:class:schema","label":"Schema"}],
    "requires":[{"@id":"urn:ngm:class:metadata-management","label":"Metadata Management"}],
    "relatedTo":[{"@id":"urn:ngm:class:data-catalogue","label":"Data Catalogue"},{"@id":"urn:ngm:class:data-lineage","label":"Data Lineage"},{"@id":"urn:ngm:class:data-quality","label":"Data Quality"}],
    "bridgesTo":[{"@id":"urn:ngm:class:data-governance","label":"Data Governance"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- A [[Data Dictionary]] is a structured reference that documents the meaning, structure and constraints of every data element in a system. It is a form of [[Metadata Management]] that captures definitions, [[Data Type]]s, formats and ownership for fields stored in databases and pipelines.
- It is part of [[Data Governance]] and [[Data Management]], complementing the broader [[Data Catalogue]] by focusing on element-level semantics rather than dataset-level discovery.
- ### Overview
- The data dictionary answers the question "what does this field mean?" for analysts, engineers and stewards. Where a [[Schema]] describes the technical shape of data, a data dictionary adds business definitions, units, valid value ranges, derivation rules and stewardship.
- Historically data dictionaries originated in relational database systems as the system catalog, but the term now spans business glossaries, ETL documentation and machine-readable specifications.
- A well-maintained dictionary reduces ambiguity, prevents semantic drift across teams, and accelerates onboarding by giving a single source of truth for terminology.
- ### Key aspects
- Element definitions: each attribute is described in plain language, removing reliance on tribal knowledge.
- Type and format: storage type, length, precision and display format are recorded for validation.
- Allowable values: enumerations, ranges and code lists constrain valid content and support [[Data Quality]] checks.
- Relationships: foreign keys, dependencies and derivations link elements across tables and systems.
- Ownership and stewardship: each element has an accountable owner, supporting [[Data Governance]].
- Versioning: changes to definitions are tracked over time to preserve historical meaning.
- ### Applications
- Data integration projects rely on dictionaries to reconcile fields from disparate sources.
- Regulatory reporting uses dictionaries to evidence the provenance and meaning of reported figures.
- Analytics and BI teams use them to ensure consistent metric definitions across dashboards.
- Migration and modernisation efforts use dictionaries to map legacy fields to target models.
- ### Relationships
- partOf:: [[Data Management]]
- partOf:: [[Data Governance]]
- hasPart:: [[Schema]]
- hasPart:: [[Metadata]]
- contrastsWith:: [[Data Catalogue]]
- contrastsWith:: [[Data Lineage]]
- supports:: [[Data Quality]]
- supports:: [[Data Governance]]
- enables:: [[Data Quality]]
- uses:: [[Metadata]]
- uses:: [[Schema]]
- requires:: [[Metadata Management]]
- relatedTo:: [[Data Catalogue]]
- relatedTo:: [[Data Lineage]]
- relatedTo:: [[Data Quality]]
- bridgesTo:: [[Data Governance]]
- ### Provenance
- updated:: 2026-06-15
