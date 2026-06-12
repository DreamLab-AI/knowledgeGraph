public:: true

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6d98c2e5ab4349fef2aadcbbdbfc013494f4f22e1356ffed1963905663b3910c",
  "@type": "Page",
  "vc:slug": "infra-data-management",
  "title": "Data Management",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T19:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@type": "Class",
  "@id": "urn:ngm:class:infra-data-management",
  "label": "Data Management",
  "definition": "Taxonomy hub covering the storage, movement, governance, and quality of data assets within the infrastructure domain, spanning databases, data lakes, ETL pipelines, metadata registries, and data governance frameworks. It provides the structural substrate on which analytics, machine learning, and application workloads depend.",
  "domain": "infrastructure",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:technology-infrastructure-domain",
      "label": "Infrastructure"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:data-lake", "label": "Data Lake"},
      {"@id": "urn:ngm:class:database-system", "label": "Database System"},
      {"@id": "urn:ngm:class:vector-database", "label": "Vector Database"},
      {"@id": "urn:ngm:class:graph-database", "label": "Graph Database"},
      {"@id": "urn:ngm:class:data-pipeline", "label": "Data Pipeline"},
      {"@id": "urn:ngm:class:etl-pipeline", "label": "ETL Pipeline"},
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"},
      {"@id": "urn:ngm:class:metadata-management", "label": "Metadata Management"},
      {"@id": "urn:ngm:class:data-integration", "label": "Data Integration"},
      {"@id": "urn:ngm:class:data-storage", "label": "Data Storage"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:infra-computing-and-cloud", "label": "Computing and Cloud"},
      {"@id": "urn:ngm:class:infra-software-engineering", "label": "Software Engineering"}
    ]
  },
  "quality": 0.8,
  "qualityScore": 0.8,
  "maturity": "established"
}
```
