public:: true

# OpenAPI
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:openapi",
  "@type": "Page",
  "title": "OpenAPI",
  "vc:slug": "openapi",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:openapi",
  "@type": "Class",
  "label": "OpenAPI",
  "definition": "OpenAPI is a language-agnostic, machine-readable specification for describing HTTP-based RESTful APIs. An OpenAPI document defines available endpoints, operations, parameters, request and response schemas, and authentication mechanisms in a single structured file written in YAML or JSON. It enables automated generation of documentation, client SDKs, server stubs, and validation logic, decoupling an API's contract from its implementation.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:api",
      "label": "API"
    }
  ],
  "relations": {
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:standards",
        "label": "Standards"
      },
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:yaml",
        "label": "YAML"
      },
      {
        "@id": "urn:ngm:class:data-format",
        "label": "Data Format"
      },
      {
        "@id": "urn:ngm:class:api",
        "label": "API"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:api-design",
        "label": "API Design"
      },
      {
        "@id": "urn:ngm:class:documentation",
        "label": "Documentation"
      },
      {
        "@id": "urn:ngm:class:software-development",
        "label": "Software Development"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:api-specification",
        "label": "API Specification"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:rest",
        "label": "REST"
      },
      {
        "@id": "urn:ngm:class:rest-api",
        "label": "REST API"
      },
      {
        "@id": "urn:ngm:class:graphql",
        "label": "GraphQL"
      },
      {
        "@id": "urn:ngm:class:api-gateway",
        "label": "API Gateway"
      },
      {
        "@id": "urn:ngm:class:api-versioning",
        "label": "API Versioning"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      },
      {
        "@id": "urn:ngm:class:software-development",
        "label": "Software Development"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:api-specification",
      "label": "API Specification"
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
  - OpenAPI is a language-agnostic, machine-readable specification for describing HTTP-based RESTful APIs. An OpenAPI document defines available endpoints, operations, parameters, request and response schemas, and authentication mechanisms in a single structured file written in YAML or JSON. It enables automated generation of documentation, client SDKs, server stubs, and validation logic, decoupling an API's contract from its implementation.
  - Related concepts: [[API]] [[REST]] [[YAML]] [[API Specification]]
- ### Overview
  - OpenAPI emerged from the Swagger specification, which was donated to the OpenAPI Initiative under the Linux Foundation. The specification establishes a common vocabulary so that tooling, services, and humans can understand an API without access to its source code or additional documentation. Versions of the specification have progressively added support for richer schema descriptions, callbacks, links between operations, and reusable components.
- ### Key aspects
  - An OpenAPI document is a structured object describing servers, paths, operations, components, and security schemes.
  - Schemas are expressed using a superset of JSON Schema, allowing precise validation of request and response payloads.
  - Reusable components reduce duplication across endpoint definitions.
  - Tooling ecosystems generate interactive documentation, mock servers, client libraries, and contract tests directly from the document.
- ### Applications
  - Generating browsable, interactive API reference documentation.
  - Producing strongly typed client SDKs across many programming languages.
  - Scaffolding server stubs and request/response validation middleware.
  - Driving contract testing and API governance in microservice architectures.
- ### Relationships
  - subClassOf:: [[API]]
  - standardizedBy:: [[Standards]]
  - standardizedBy:: [[Interoperability]]
  - uses:: [[YAML]]
  - uses:: [[Data Format]]
  - uses:: [[API]]
  - supports:: [[API Design]]
  - supports:: [[Documentation]]
  - supports:: [[Software Development]]
  - implements:: [[API Specification]]
  - relatedTo:: [[REST]]
  - relatedTo:: [[REST API]]
  - relatedTo:: [[GraphQL]]
  - relatedTo:: [[API Gateway]]
  - relatedTo:: [[API Versioning]]
  - enables:: [[Interoperability]]
  - enables:: [[Software Development]]
  - sameAs:: [[API Specification]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
