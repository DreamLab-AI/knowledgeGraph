public:: true
alias:: Open API Specification

# OpenAPI Specification
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:open-api-specification",
  "@type": "Page",
  "vc:slug": "open-api-specification",
  "title": "OpenAPI Specification",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:open-api-specification",
  "@type": "Class",
  "label": "OpenAPI Specification",
  "definition": "The OpenAPI Specification (OAS) is a language-agnostic, machine-readable standard for describing RESTful HTTP APIs using a structured JSON or YAML document that defines endpoints, request/response schemas, authentication methods, and parameter types. Governed by the OpenAPI Initiative (a Linux Foundation project), it enables automated generation of client SDKs, server stubs, interactive documentation, and contract-based testing from a single source of truth. Originally derived from the Swagger specification, OAS version 3.x is now the dominant industry standard for API description. It promotes interoperability by allowing API consumers to understand a service's capabilities without access to its source code.",
  "domain": "web",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:api-standard", "label": "API Standard"}],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:api-integration", "label": "API Integration"},
      {"@id": "urn:ngm:class:documentation-generation", "label": "Documentation Generation"},
      {"@id": "urn:ngm:class:microservices", "label": "Microservices"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:rest-api", "label": "REST API"},
      {"@id": "urn:ngm:class:json", "label": "json"},
      {"@id": "urn:ngm:class:data-schema", "label": "Data Schema"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:api-management", "label": "API Management"},
      {"@id": "urn:ngm:class:api-gateway", "label": "API Gateway"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - The [[OpenAPI Specification]] is a machine-readable [[API Standard]] for describing [[REST API]]s in [[json]] or YAML, enabling automated [[Documentation Generation]], SDK generation, and contract testing from a single canonical description document.

- ### Relationships
  - The OpenAPI Specification formalises the contract between [[REST API]] producers and consumers, driving [[API Integration]] workflows and powering [[Documentation Generation]] toolchains. It is the lingua franca of [[API Management]] platforms and [[API Gateway]] products, which use OAS documents to configure routing, rate limiting, and security policies. Its schema layer directly enables [[Microservices]] ecosystems to validate inter-service communication at build and runtime.

- ### Content
  - The OpenAPI Specification traces its lineage to the Swagger framework created by Wordnik in 2011 as a way to describe their internal REST APIs and generate interactive documentation automatically. SmartBear acquired Swagger in 2015 and promptly donated the specification to the newly formed OpenAPI Initiative under the Linux Foundation, with founding members including Google, IBM, Microsoft, and PayPal. The rebranding to OpenAPI Specification 2.0 followed in 2016, and version 3.0 — a significant architectural redesign — was released in 2017.

  - An OAS document is a YAML or JSON file structured around a set of top-level objects: `info` (metadata), `servers` (base URLs), `paths` (endpoint definitions with HTTP methods), `components` (reusable schemas, parameters, and security schemes), and `tags` (organisational groupings). Each path item describes the accepted request parameters and body, possible response codes and their schemas, and any security requirements. The Schema Object borrows heavily from JSON Schema, allowing precise type constraints, validation rules, and examples. Tooling such as Swagger UI, Redoc, and Stoplight renders these documents as interactive developer portals.

  - The significance of OAS lies in its role as the contract layer of API-first development. Teams that design the specification before writing code can parallelise front-end, back-end, and testing workstreams. Mock servers generated from OAS documents allow consumers to develop integrations before the real API is built. Contract testing frameworks such as Pact and Dredd validate that implementations conform to the published specification, catching breaking changes before deployment. In the enterprise, OAS is the primary input to API governance processes that enforce naming conventions, versioning policies, and security standards.

  - OpenAPI 3.1.0, released in 2021, achieved full alignment with JSON Schema 2020-12, resolving years of subtle incompatibilities between OAS Schema Objects and the JSON Schema standard. By 2024–2025, OAS is being extended to describe asynchronous APIs (alongside AsyncAPI), AI tool interfaces for LLM function-calling, and event-driven architectures. The specification is also being integrated into AI coding assistants and API design copilots that generate OAS documents from natural-language descriptions, lowering the barrier to well-documented API design.

