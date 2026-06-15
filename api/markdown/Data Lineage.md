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
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-data-management",
      "label": "Data Management"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:data-provenance",
        "label": "Data Provenance"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:metadata-management",
        "label": "Metadata Management"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:metadata-catalog",
        "label": "Metadata Catalog"
      },
      {
        "@id": "urn:ngm:class:data-pipeline",
        "label": "Data Pipeline"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      },
      {
        "@id": "urn:ngm:class:root-cause-analysis",
        "label": "Root Cause Analysis"
      },
      {
        "@id": "urn:ngm:class:audit-trail",
        "label": "Audit Trail"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:directed-acyclic-graph",
        "label": "Directed Acyclic Graph"
      },
      {
        "@id": "urn:ngm:class:data-schema",
        "label": "Data Schema"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:graph-database",
        "label": "Graph Database"
      },
      {
        "@id": "urn:ngm:class:apache-atlas",
        "label": "Apache Atlas"
      },
      {
        "@id": "urn:ngm:class:open-lineage",
        "label": "OpenLineage"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:data-quality-management",
        "label": "Data Quality Management"
      },
      {
        "@id": "urn:ngm:class:gdpr-compliance",
        "label": "GDPR Compliance"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:open-lineage",
        "label": "OpenLineage"
      },
      {
        "@id": "urn:ngm:class:w3-c-prov",
        "label": "W3C PROV"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:data-catalog",
        "label": "Data Catalog"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain-provenance",
        "label": "Blockchain Provenance"
      },
      {
        "@id": "urn:ngm:class:supply-chain-transparency",
        "label": "Supply Chain Transparency"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:data-observability",
        "label": "Data Observability"
      },
      {
        "@id": "urn:ngm:class:etl-pipeline",
        "label": "ETL Process"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:data-provenance-tracking",
      "label": "Data Provenance Tracking"
    },
    {
      "@id": "urn:ngm:class:data-flow-tracing",
      "label": "Data Flow Tracing"
    }
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
  - Data lineage records the origins, transformations and flow of data through systems, a core part of the [[Data Governance Domain]] and [[Metadata Management]] that establishes provenance and trust.
- ### Content
  - Lineage is captured at column or dataset granularity by parsing pipeline code, query logs and metadata, then visualised as a directed graph. It powers impact analysis before changes, root-cause debugging of data errors, and audit trails demanded by regulators.
