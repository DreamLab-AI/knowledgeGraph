public:: true

# Data Warehouse
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:data-warehouse",
  "@type": "Page",
  "vc:slug": "data-warehouse",
  "title": "Data Warehouse",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-warehouse",
  "@type": "Class",
  "label": "Data Warehouse",
  "definition": "A data warehouse is a centralised analytical repository that integrates cleansed, structured data from multiple operational sources into a subject-oriented, historical model optimised for querying and reporting. It supports business intelligence through schemas such as star and snowflake and columnar storage for fast aggregation. It is a core data-engineering asset enabling consistent enterprise analytics.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-data-management", "label": "Infrastructure Data Management"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:etl-pipeline", "label": "ETL Pipeline"},
      {"@id": "urn:ngm:class:dimensional-model", "label": "Dimensional Model"},
      {"@id": "urn:ngm:class:data-mart", "label": "Data Mart"},
      {"@id": "urn:ngm:class:columnar-storage", "label": "Columnar Storage"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"},
      {"@id": "urn:ngm:class:data-quality-management", "label": "Data Quality Management"},
      {"@id": "urn:ngm:class:schema-management", "label": "Schema Management"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:business-intelligence", "label": "Business Intelligence"},
      {"@id": "urn:ngm:class:olap", "label": "OLAP"},
      {"@id": "urn:ngm:class:self-service-analytics", "label": "Self-Service Analytics"},
      {"@id": "urn:ngm:class:executive-dashboard", "label": "Executive Dashboard"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:metadata-management", "label": "Metadata Management"},
      {"@id": "urn:ngm:class:cloud-object-storage", "label": "Cloud Object Storage"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:star-schema", "label": "Star Schema"},
      {"@id": "urn:ngm:class:snowflake-schema", "label": "Snowflake Schema"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:sql", "label": "SQL"},
      {"@id": "urn:ngm:class:data-catalog", "label": "Data Catalog"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:data-lake", "label": "Data Lake"},
      {"@id": "urn:ngm:class:operational-database", "label": "Operational Database"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:machine-learning-platform", "label": "Machine Learning Platform"},
      {"@id": "urn:ngm:class:data-mesh", "label": "Data Mesh"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:data-engineering", "label": "Data Engineering"},
      {"@id": "urn:ngm:class:data-lakehouse", "label": "Data Lakehouse"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:enterprise-data-warehouse", "label": "Enterprise Data Warehouse"},
    {"@id": "urn:ngm:class:analytical-data-store", "label": "Analytical Data Store"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - A data warehouse is a centralised analytical store integrating data from many sources for reporting, a core [[Data Engineering]] asset that depends on [[Metadata Management]] for trust and discovery.
- ### Content
  - Data is loaded through ETL or ELT into dimensional models that separate facts from descriptive dimensions, then served to BI tools. Modern cloud warehouses decouple storage from compute and use columnar formats to scale analytical queries elastically.
