public:: true

# Schema

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:schema",
  "@type": "Page",
  "title": "Schema",
  "vc:slug": "schema",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:schema",
  "@type": "Class",
  "label": "Schema",
  "definition": "A schema is a formal specification of the structure, types and constraints that valid data must satisfy within a given system. It defines entities, their attributes, relationships and permissible values, acting as a contract between data producers and consumers. Schemas underpin validation, interoperability and the reliable exchange of structured data across applications.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-model",
      "label": "Data Model"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:data-model",
        "label": "Data Model"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:type-system",
        "label": "Type System"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-validation",
        "label": "Data Validation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-validation",
        "label": "Data Validation"
      },
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:structured-data",
        "label": "Structured Data"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:data-management",
        "label": "Data Management"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:data-schema",
        "label": "Data Schema"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:type-system",
        "label": "Type System"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:xml-schema",
        "label": "XML Schema"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:data-format",
        "label": "Data Format"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:metadata",
        "label": "Metadata"
      },
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      },
      {
        "@id": "urn:ngm:class:data-format",
        "label": "Data Format"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:data-schema",
      "label": "Data Schema"
    }
  ],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A schema is a formal specification of the structure, types and constraints that valid data must satisfy within a given system. It defines entities, their attributes, relationships and permissible values, acting as a contract between data producers and consumers. Schemas underpin validation, interoperability and the reliable exchange of structured data across applications.
  - Related concepts: [[Data Model]] [[Data Validation]] [[Type System]] [[Structured Data]] [[Metadata]]
- ### Overview
  - Schema is situated within the [[Data Model]] area of the data domain.
  - It connects a number of established concepts in the knowledge graph, anchoring edges that previously referenced it without a defining page.
- ### Key aspects
  - Type System (hasPart)
  - Data Model (partOf)
  - Data Schema (implements)
  - Structured Data (uses)
- ### Mechanisms
  - Operates through its relationships with [[Data Model]] and [[Data Validation]].
  - Provides capabilities consumed by dependent and enabled classes listed under Relationships.
- ### Applications
  - Supports [[Data Validation]]
  - Supports [[Interoperability]]
  - Supports [[Data Management]]
- ### Relationships
  - subClassOf:: [[Data Model]]
  - partOf:: [[Data Model]]
  - hasPart:: [[Type System]]
  - requires:: [[Data Validation]]
  - enables:: [[Data Validation]]
  - enables:: [[Interoperability]]
  - uses:: [[Structured Data]]
  - supports:: [[Data Management]]
  - implements:: [[Data Schema]]
  - dependsOn:: [[Type System]]
  - standardizedBy:: [[XML Schema]]
  - contrastsWith:: [[Data Format]]
  - relatedTo:: [[Metadata]]
  - relatedTo:: [[Ontology]]
  - relatedTo:: [[Data Format]]
  - bridgesTo:: [[Knowledge Graph]]
  - sameAs:: [[Data Schema]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
