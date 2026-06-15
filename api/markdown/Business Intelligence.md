public:: true

# Business Intelligence
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:business-intelligence",
  "@type": "Page",
  "vc:slug": "business-intelligence",
  "title": "Business Intelligence",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:business-intelligence",
  "@type": "Class",
  "label": "Business Intelligence",
  "definition": "Business intelligence is the set of technologies, processes, and practices for collecting, integrating, analysing, and presenting business data to support managerial decision-making. It encompasses data warehousing, reporting, dashboards, online analytical processing (OLAP), and ad-hoc querying that turn raw operational records into actionable insight. BI matters because it converts dispersed enterprise data into a coherent, queryable foundation for performance monitoring and strategic planning.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-management",
      "label": "Data Management"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:data-warehousing",
        "label": "Data Warehousing"
      },
      {
        "@id": "urn:ngm:class:olap",
        "label": "OLAP"
      },
      {
        "@id": "urn:ngm:class:dashboard",
        "label": "Dashboard"
      },
      {
        "@id": "urn:ngm:class:etl-pipeline",
        "label": "ETL"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:data-quality",
        "label": "Data Quality"
      },
      {
        "@id": "urn:ngm:class:data-integration",
        "label": "Data Integration"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decision-support",
        "label": "Decision Support"
      },
      {
        "@id": "urn:ngm:class:performance-management",
        "label": "Performance Management"
      },
      {
        "@id": "urn:ngm:class:kpi-monitoring",
        "label": "KPI Monitoring"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:data-engineering",
        "label": "Data Engineering"
      },
      {
        "@id": "urn:ngm:class:metadata-management",
        "label": "Metadata Management"
      },
      {
        "@id": "urn:ngm:class:data-lake",
        "label": "Data Lake"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:sql",
        "label": "SQL"
      },
      {
        "@id": "urn:ngm:class:semantic-layer",
        "label": "Semantic Layer"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:data-science",
        "label": "Data Science"
      },
      {
        "@id": "urn:ngm:class:advanced-analytics",
        "label": "Advanced Analytics"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      },
      {
        "@id": "urn:ngm:class:enterprise-resource-planning",
        "label": "Enterprise Resource Planning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:data-engineering",
        "label": "Data Engineering"
      },
      {
        "@id": "urn:ngm:class:metadata-management",
        "label": "Metadata Management"
      },
      {
        "@id": "urn:ngm:class:self-service-analytics",
        "label": "Self-Service Analytics"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:bi",
      "label": "BI"
    },
    {
      "@id": "urn:ngm:class:enterprise-analytics",
      "label": "Enterprise Analytics"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "quality": 0.72
}
```

- ### Definition
  - Business Intelligence is a discipline combining [[Data Engineering]] pipelines and [[Metadata Management]] to deliver reporting, dashboards, and analytics that inform organisational decisions.
- ### Content
  - A BI stack typically layers a data warehouse or lakehouse, an OLAP/semantic model, and a presentation tier of reports and interactive dashboards. Modern BI emphasises self-service exploration and governed metric definitions so that analysts and business users share consistent measures across the enterprise.
