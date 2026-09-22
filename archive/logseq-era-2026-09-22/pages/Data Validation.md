public:: true

# Data Validation

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:data-validation",
  "@type": "Page",
  "title": "Data Validation",
  "vc:slug": "data-validation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-validation",
  "@type": "Class",
  "label": "Data Validation",
  "definition": "Data validation is the process of checking that data conforms to defined rules, formats, ranges and constraints before it is processed, stored or transmitted. It detects errors, inconsistencies and anomalies at ingestion and transformation boundaries, ensuring that only well-formed and trustworthy data enters downstream systems. Validation is enforced through schema checks, type and range assertions, referential integrity rules and business-logic constraints.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infrastructure",
      "label": "Infrastructure"
    },
    {
      "@id": "urn:ngm:class:infra-data-management",
      "label": "Data Management"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:schema-validation",
        "label": "Schema Validation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:data-schema",
        "label": "Data Schema"
      },
      {
        "@id": "urn:ngm:class:verification",
        "label": "Verification"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-quality",
        "label": "Data Quality"
      },
      {
        "@id": "urn:ngm:class:data-integrity",
        "label": "Data Integrity"
      },
      {
        "@id": "urn:ngm:class:reliability",
        "label": "Reliability"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:data-schema",
        "label": "Data Schema"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:error-handling",
        "label": "Error Handling"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:data-pipeline",
        "label": "Data Pipeline"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      },
      {
        "@id": "urn:ngm:class:data-management",
        "label": "Data Management"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:data-quality",
        "label": "Data Quality"
      },
      {
        "@id": "urn:ngm:class:data-cleaning",
        "label": "Data Cleaning"
      },
      {
        "@id": "urn:ngm:class:data-transformation",
        "label": "Data Transformation"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Checks data against a [[Data Schema]]
  - Includes [[Schema Validation]]
  - Ensures [[Data Quality]]
  - Preserves [[Data Integrity]]
- ### Overview
  - Validation acts as a gatekeeper at the boundaries of data ingestion and transformation.
  - Rules range from structural checks to semantic business constraints and cross-field consistency.
  - Early validation prevents the propagation of corrupt data through pipelines and stores.
- ### Mechanisms
  - Schema and type conformance checks
  - Range, format and pattern validation
  - Referential and uniqueness integrity rules
  - Cross-field and business-logic constraints
  - Quarantine, rejection and remediation handling
- ### Applications
  - Form and API input validation
  - ETL and [[Data Pipeline]] quality gates
  - Database constraint enforcement
  - Data governance and compliance checks
- ### Relationships
  - hasPart:: [[Schema Validation]]
  - uses:: [[Data Schema]]
  - uses:: [[Verification]]
  - enables:: [[Data Quality]]
  - enables:: [[Data Integrity]]
  - enables:: [[Reliability]]
  - dependsOn:: [[Data Schema]]
  - requires:: [[Error Handling]]
  - supports:: [[Data Pipeline]]
  - supports:: [[Data Governance]]
  - supports:: [[Compliance]]
  - supports:: [[Data Management]]
  - relatedTo:: [[Data Cleaning]]
  - relatedTo:: [[Data Transformation]]
- ### Provenance
  - updated:: 2026-06-15
