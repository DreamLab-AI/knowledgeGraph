public:: true

# Data Warehousing
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:data-warehousing",
  "@type": "Page",
  "title": "Data Warehousing",
  "vc:slug": "data-warehousing",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-warehousing",
  "@type": "Class",
  "label": "Data Warehousing",
  "definition": "Data warehousing is the practice of consolidating data from multiple operational and external sources into a central, integrated, subject-oriented repository optimised for query and analysis rather than transaction processing. A data warehouse stores historical, cleansed and conformed data structured for reporting and decision support, typically populated through extract-transform-load pipelines and queried using online analytical processing. It provides the persistent analytical substrate on which business intelligence, dashboards and downstream analytics are built.",
  "domain": "data",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-engineering",
      "label": "Data Engineering"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:data-pipeline",
        "label": "Data Pipeline"
      },
      {
        "@id": "urn:ngm:class:data-warehouse",
        "label": "Data Warehouse"
      },
      {
        "@id": "urn:ngm:class:data-integration",
        "label": "Data Integration"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:data-engineering",
        "label": "Data Engineering"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-quality",
        "label": "Data Quality"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:master-data-management",
        "label": "Master Data Management"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:business-intelligence",
        "label": "Business Intelligence"
      },
      {
        "@id": "urn:ngm:class:predictive-analytics",
        "label": "Predictive Analytics"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:sql",
        "label": "SQL"
      },
      {
        "@id": "urn:ngm:class:relational-database",
        "label": "Relational Database"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:data-catalog",
        "label": "Data Catalog"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:data-lake",
        "label": "Data Lake"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:metadata",
        "label": "Metadata"
      },
      {
        "@id": "urn:ngm:class:data-management",
        "label": "Data Management"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```
- ### Definition
  - Data warehousing is the practice of consolidating data from multiple operational and external sources into a central, integrated, subject-oriented repository optimised for query and analysis rather than transaction processing. A data warehouse stores historical, cleansed and conformed data structured for reporting and decision support, typically populated through extract-transform-load pipelines and queried using online analytical processing. It provides the persistent analytical substrate on which business intelligence, dashboards and downstream analytics are built.
  - Related core concepts: [[Data Engineering]] [[Business Intelligence]] [[Data Integration]] [[Relational Database]]
- ### Overview
  - A data warehouse is a subject-oriented, integrated, time-variant and non-volatile collection of data built to support management decision-making.
  - Source data is ingested through ETL or ELT pipelines that cleanse, conform and load it into a query-optimised schema.
  - Warehouses commonly use dimensional models (star and snowflake schemas) to make analytical queries fast and intuitive for business users.
- ### Key aspects
  - Integration: heterogeneous operational sources are unified into a single conformed model with consistent definitions.
  - Historical retention: data is stored over time to support trend analysis and point-in-time reporting.
  - Read-optimised: storage and indexing favour large analytical scans rather than transactional inserts and updates.
  - Governance: master data management and data quality controls underpin trustworthy analytics.
- ### Applications
  - Enterprise reporting and executive dashboards.
  - Self-service business intelligence and ad-hoc analysis.
  - Feeding predictive analytics and machine-learning feature stores.
  - Regulatory and financial reporting requiring auditable history.
- ### Relationships
  - hasPart:: [[Data Pipeline]]
  - hasPart:: [[Data Warehouse]]
  - hasPart:: [[Data Integration]]
  - partOf:: [[Data Engineering]]
  - requires:: [[Data Quality]]
  - requires:: [[Data Governance]]
  - requires:: [[Master Data Management]]
  - enables:: [[Business Intelligence]]
  - enables:: [[Predictive Analytics]]
  - uses:: [[SQL]]
  - uses:: [[Relational Database]]
  - supports:: [[Data Catalog]]
  - contrastsWith:: [[Data Lake]]
  - relatedTo:: [[Metadata]]
  - relatedTo:: [[Data Management]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - attributedTo:: did:nostr:ontology-mesh
