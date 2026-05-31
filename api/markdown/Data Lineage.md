public:: true

# Data Lineage
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:data-lineage",
  "@type": "Page",
  "vc:slug": "data-lineage",
  "title": "Data Lineage",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-lineage",
  "@type": "Class",
  "label": "Data Lineage",
  "definition": "Data lineage is the documented record of data's origins, movements, transformations and consumption as it flows through systems and pipelines. It maps how a data element is derived end to end, supporting impact analysis, debugging, audit and regulatory compliance. As a pillar of data governance and metadata management it makes data trustworthy by exposing its provenance.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-data-management", "label": "Infrastructure Data Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:data-governance-domain", "label": "Data Governance Domain"},
      {"@id": "urn:ngm:class:metadata-management", "label": "Metadata Management"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Data lineage records the origins, transformations and flow of data through systems, a core part of the [[Data Governance Domain]] and [[Metadata Management]] that establishes provenance and trust.
- ### Content
  - Lineage is captured at column or dataset granularity by parsing pipeline code, query logs and metadata, then visualised as a directed graph. It powers impact analysis before changes, root-cause debugging of data errors, and audit trails demanded by regulators.
