public:: true

# Schema Validation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:schema-validation", "@type":"Page", "title":"Schema Validation", "vc:slug":"schema-validation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:schema-validation",
  "@type": "Class",
  "label": "Schema Validation",
  "definition": "Schema validation is the process of checking that a data instance conforms to a formally declared structure, asserting required fields, types, value constraints and relationships before the data is accepted or processed. It uses a schema language such as JSON Schema or XML Schema to define the contract and a validator to report conformance and errors. Schema validation enforces data integrity at system boundaries and underpins reliable interoperability.",
  "domain": "standards",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-validation",
      "label": "Data Validation"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:json-schema",
        "label": "JSON Schema"
      },
      {
        "@id": "urn:ngm:class:data-contracts",
        "label": "Data Contract"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-schema",
        "label": "Data Schema"
      },
      {
        "@id": "urn:ngm:class:json-schema",
        "label": "JSON Schema"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:data-validation",
        "label": "Data Validation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:json-schema",
        "label": "JSON Schema"
      },
      {
        "@id": "urn:ngm:class:openapi",
        "label": "OpenAPI"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-quality",
        "label": "Data Quality"
      },
      {
        "@id": "urn:ngm:class:interoperability-standard",
        "label": "Interoperability Standard"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:api-specification",
        "label": "API Specification"
      },
      {
        "@id": "urn:ngm:class:data-contracts",
        "label": "Data Contract"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:data-schema",
        "label": "Data Schema"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:json-schema",
        "label": "JSON Schema"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:asyncapi",
        "label": "AsyncAPI"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:openapi",
        "label": "OpenAPI"
      },
      {
        "@id": "urn:ngm:class:data-quality",
        "label": "Data Quality"
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
	- [[Schema Validation]] checks that a data instance conforms to a declared structure, asserting required fields, types and constraints before the data is accepted.
	- It is a form of [[Data Validation]] expressed through a schema language such as [[JSON Schema]].
	- It enforces [[Data Quality]] at system boundaries and supports an [[API Specification]] contract.
- ### Overview
	- A schema is a machine-readable description of a data shape: which fields exist, their types, which are mandatory and what values they may take.
	- A validator compares an instance against the schema and produces a pass or a structured list of violations, enabling fail-fast handling of malformed input.
	- Schema validation runs at trust boundaries: request and response payloads, message-queue events, configuration files and data-pipeline ingestion.
	- By codifying the contract, validation decouples producers from consumers and makes interfaces self-documenting and testable.
- ### Mechanisms
	- Schema authoring in a declarative language with reusable definitions.
	- Type and constraint checking including formats, ranges and patterns.
	- Structural rules such as required properties and disallowed extras.
	- Reference resolution for composed and nested schemas.
	- Error reporting with paths to offending fields.
- ### Applications
	- API request and response validation.
	- Event payload validation in message-driven systems.
	- Configuration and infrastructure-as-code validation.
	- Data-pipeline ingestion gating and data contracts.
- ### Relationships
	- hasPart:: [[JSON Schema]]
	- hasPart:: [[Data Contract]]
	- requires:: [[Data Schema]]
	- requires:: [[JSON Schema]]
	- implements:: [[Data Validation]]
	- uses:: [[JSON Schema]]
	- uses:: [[OpenAPI]]
	- enables:: [[Data Quality]]
	- enables:: [[Interoperability Standard]]
	- supports:: [[API Specification]]
	- supports:: [[Data Contract]]
	- dependsOn:: [[Data Schema]]
	- standardizedBy:: [[JSON Schema]]
	- contrastsWith:: [[AsyncAPI]]
	- relatedTo:: [[OpenAPI]]
	- relatedTo:: [[Data Quality]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
