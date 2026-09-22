public:: true

# Apache Atlas
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:apache-atlas",
  "@type": "Page",
  "vc:slug": "apache-atlas",
  "title": "Apache Atlas",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:apache-atlas",
  "@type": "Class",
  "label": "Apache Atlas",
  "definition": "Apache Atlas is an open-source metadata management and data governance framework, originally built for the Hadoop ecosystem, that catalogs data assets, captures end-to-end lineage, and enforces classification and access policies. It exposes a typed metadata model and search so organizations can discover datasets, trace how data flows between systems, and apply governance tags. Atlas integrates with engines such as Hive, Kafka, and HBase to collect lineage automatically.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:metadata-management", "label": "Metadata Management"}
    ]
  },
  "quality": 0.72
}
```
- ### Definition
  - Apache Atlas is an open-source data-governance and catalog platform that implements [[Metadata Management]] with lineage tracking and classification. It provides the typed metadata model and policy enforcement layer for governed data lakes.
- ### Content
  - Atlas stores a graph of typed entities and their relationships, automatically harvesting lineage from integrated processing engines so analysts can trace a column back to its source. Classification tags drive attribute-based access control and compliance reporting, making Atlas a governance backbone in large Hadoop and hybrid analytics deployments.
