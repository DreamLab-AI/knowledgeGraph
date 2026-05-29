public:: true

# data discovery
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c31452a5e68203c44d5fb0df4f424ca6cb2db69ae48c55084f158a15a59a13a2",
  "@type": "Page",
  "vc:slug": "data-discovery",
  "title": "data discovery",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-discovery",
  "@type": "Class",
  "label": "Data Discovery",
  "definition": "Data Discovery is the iterative process of locating, profiling, cataloguing, and contextualising data assets distributed across an organisation's storage systems, databases, data lakes, SaaS applications, and streaming pipelines to make them findable, understandable, and trustworthy for analytics, governance, and compliance purposes. It encompasses automated metadata extraction, schema inference, data profiling (statistical characterisation), lineage tracing (upstream/downstream dependencies), and classification (sensitivity tagging). Data Discovery is foundational to implementing Data Governance frameworks and enabling self-service analytics in data mesh and data fabric architectures.",
  "domain": "infrastructure",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-data-management",
      "label": "Infra Data Management"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"},
      {"@id": "urn:ngm:class:metadata-management", "label": "Metadata Management"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:metadata-registry", "label": "Metadata Registry"},
      {"@id": "urn:ngm:class:data-lake", "label": "Data Lake"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:data-management", "label": "Data Management"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Data Discovery is the iterative process of locating, profiling, cataloguing, and contextualising data assets distributed across an organisation's storage systems, databases, data lakes, SaaS applications, and streaming pipelines to make them findable, understandable, and trustworthy for analytics, governance, and compliance purposes. It encompasses automated metadata extraction, schema inference, data profiling (statistical characterisation), lineage tracing (upstream/downstream dependencies), and classification (sensitivity tagging). Data Discovery is foundational to implementing Data Governance frameworks and enabling self-service analytics in data mesh and data fabric architectures.

- ### Semantic Classification
  - owl-class:: data-discovery:Data Discovery
  - owl-role:: Concept

- ### Relationships
  - enables [[Data Governance]]
  - enables [[Metadata Management]]
  - uses [[Metadata Registry]]
  - uses [[Data Lake]]
  - supports [[Data Management]]

- ### Content
  - Data Discovery addresses a critical operational challenge in modern enterprises: as data proliferates across cloud storage, relational databases, data lakes, SaaS platforms, and event streaming systems, individual analysts and data consumers cannot efficiently locate datasets relevant to their use case. Data catalogue platforms — such as Apache Atlas, Alation, Collibra, and DataHub — automate the ingestion of technical metadata (schema, table names, column types, row counts) from connected data sources, enriching it with business metadata (descriptions, ownership, glossary terms, usage statistics) curated by domain stewards.
  - Data profiling generates statistical summaries — null rates, cardinality, value distributions, format patterns — that help consumers assess data quality before use. Data lineage graphs trace the transformation path from raw sources to derived datasets, enabling impact analysis (what downstream consumers are affected by an upstream schema change) and root-cause diagnosis of data quality issues. These capabilities feed directly into Data Governance processes: privacy classification flags PII columns for access control and masking; regulatory lineage documents data flows for GDPR or CCPA compliance audits.
  - In Data Fabric and data mesh architectures, Data Discovery is decentralised: each domain team publishes their data products to a federated catalogue with standardised metadata schemas, and a global search layer aggregates these product entries. Metadata Registry infrastructure provides the shared vocabulary and identifier namespace for cross-domain discovery. Standards such as DCAT (W3C Data Catalogue Vocabulary) and Schema.org's Dataset type provide semantic interoperability for discovery across organisations and open data portals.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
