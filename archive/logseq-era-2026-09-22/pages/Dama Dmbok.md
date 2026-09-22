public:: true

# Dama Dmbok

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:dama-dmbok", "@type":"Page", "title":"Dama Dmbok", "vc:slug":"dama-dmbok", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:dama-dmbok",
  "@type":"Class",
  "label":"Dama Dmbok",
  "definition":"The DAMA Data Management Body of Knowledge (DAMA-DMBOK) is a reference framework published by DAMA International that codifies the principles, functions, and best practices of enterprise data management. It organises the discipline into knowledge areas such as data governance, data quality, metadata, master data, and data architecture, arranged around a central data governance function. DAMA-DMBOK provides a common vocabulary and standard structure for establishing and assessing data management programmes.",
  "domain":"data",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:data-management","label":"Data Management"}],
  "relations":{
    "standardizedBy":[{"@id":"urn:ngm:class:best-practice","label":"Best Practice"}],
    "hasPart":[{"@id":"urn:ngm:class:data-governance","label":"Data Governance"},{"@id":"urn:ngm:class:data-quality","label":"Data Quality"},{"@id":"urn:ngm:class:metadata-management","label":"Metadata Management"}],
    "supports":[{"@id":"urn:ngm:class:master-data-management","label":"Master Data Management"},{"@id":"urn:ngm:class:data-stewardship","label":"Data Stewardship"}],
    "enables":[{"@id":"urn:ngm:class:data-architecture","label":"Data Architecture"},{"@id":"urn:ngm:class:compliance","label":"Compliance"}],
    "requires":[{"@id":"urn:ngm:class:governance-framework","label":"Governance Framework"}],
    "uses":[{"@id":"urn:ngm:class:data-catalog","label":"Data Catalog"},{"@id":"urn:ngm:class:data-lineage","label":"Data Lineage"}],
    "implements":[{"@id":"urn:ngm:class:knowledge-management","label":"Knowledge Management"}],
    "bridgesTo":[{"@id":"urn:ngm:class:data-security","label":"Data Security"}],
    "relatedTo":[{"@id":"urn:ngm:class:data-infrastructure","label":"Data Infrastructure"},{"@id":"urn:ngm:class:regulatory-compliance","label":"Regulatory Compliance"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- DAMA-DMBOK (the Data Management Body of Knowledge) is a [[Data Management]] reference framework from DAMA International. It codifies the discipline into knowledge areas including [[Data Governance]], [[Data Quality]], and [[Metadata Management]], establishing a shared vocabulary and a [[Best Practice]] standard for data programmes.
- ### Overview
- DMBOK depicts data management as a wheel of interrelated knowledge areas centred on data governance, which sets policy and accountability for all other functions.
- The framework spans architecture, modelling, storage and operations, security, integration, master and reference data, document and content, data warehousing and business intelligence, metadata, and data quality.
- Organisations use DMBOK as a maturity benchmark and curriculum: to scope responsibilities, define roles such as [[Data Stewardship]], and align practices with [[Compliance]] obligations.
- ### Key aspects
- A governance-centred model of interrelated knowledge areas.
- A common vocabulary and taxonomy for the data discipline.
- A basis for maturity assessment and capability planning.
- Underpinning for the CDMP professional certification.
- Alignment of data practice with regulation and accountability.
- ### Applications
- Structuring an enterprise data management programme and roadmap.
- Defining roles, policies, and standards for [[Data Governance]].
- Benchmarking maturity across [[Master Data Management]] and quality.
- Informing the design of [[Data Architecture]] and [[Data Infrastructure]].
- ### Relationships
- subClassOf:: [[Data Management]]
- standardizedBy:: [[Best Practice]]
- hasPart:: [[Data Governance]]
- hasPart:: [[Data Quality]]
- hasPart:: [[Metadata Management]]
- supports:: [[Master Data Management]]
- supports:: [[Data Stewardship]]
- enables:: [[Data Architecture]]
- enables:: [[Compliance]]
- requires:: [[Governance Framework]]
- uses:: [[Data Catalog]]
- uses:: [[Data Lineage]]
- implements:: [[Knowledge Management]]
- bridgesTo:: [[Data Security]]
- relatedTo:: [[Data Infrastructure]]
- relatedTo:: [[Regulatory Compliance]]
- ### Provenance
- updated:: 2026-06-15
- generatedBy:: GapMaterialisation
- attributedTo:: did:nostr:ontology-mesh
