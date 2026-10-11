OpenAPI is a language-agnostic, machine-readable specification for describing HTTP-based RESTful APIs. An OpenAPI document defines available endpoints, operations, parameters, request and response schemas, and authentication mechanisms in a single structured file written in YAML or JSON. It enables automated generation of documentation, client SDKs, server stubs, and validation logic, decoupling an API's contract from its implementation.

### Overview

- OpenAPI emerged from the Swagger specification, which was donated to the OpenAPI Initiative under the Linux Foundation. The specification establishes a common vocabulary so that tooling, services, and humans can understand an API without access to its source code or additional documentation. Versions of the specification have progressively added support for richer schema descriptions, callbacks, links between operations, and reusable components.

### Key aspects

- An OpenAPI document is a structured object describing servers, paths, operations, components, and security schemes.
- Schemas are expressed using a superset of JSON Schema, allowing precise validation of request and response payloads.
- Reusable components reduce duplication across endpoint definitions.
- Tooling ecosystems generate interactive documentation, mock servers, client libraries, and contract tests directly from the document.

### Applications

- Generating browsable, interactive API reference documentation.
- Producing strongly typed client SDKs across many programming languages.
- Scaffolding server stubs and request/response validation middleware.
- Driving contract testing and API governance in microservice architectures.

### Provenance

## Merged from OpenAPI Specification (needs reconciliation)
The OpenAPI Specification (OAS) is a language-agnostic, machine-readable standard for describing RESTful HTTP APIs using a structured JSON or YAML document that defines endpoints, request/response schemas, authentication methods, and parameter types. Governed by the OpenAPI Initiative (a Linux Foundation project), it enables automated generation of client SDKs, server stubs, interactive documentation, and contract-based testing from a single source of truth. Originally derived from the Swagger specification, OAS version 3.x is now the dominant industry standard for API description. It promotes interoperability by allowing API consumers to understand a service's capabilities without access to its source code.

### Content

- The OpenAPI Specification traces its lineage to the Swagger framework created by Wordnik in 2011 as a way to describe their internal REST APIs and generate interactive documentation automatically. SmartBear acquired Swagger in 2015 and promptly donated the specification to the newly formed OpenAPI Initiative under the Linux Foundation, with founding members including Google, IBM, Microsoft, and PayPal. The rebranding to OpenAPI Specification 2.0 followed in 2016, and version 3.0 — a significant architectural redesign — was released in 2017.
- An OAS document is a YAML or JSON file structured around a set of top-level objects: `info` (metadata), `servers` (base URLs), `paths` (endpoint definitions with HTTP methods), `components` (reusable schemas, parameters, and security schemes), and `tags` (organisational groupings). Each path item describes the accepted request parameters and body, possible response codes and their schemas, and any security requirements. The Schema Object borrows heavily from JSON Schema, allowing precise type constraints, validation rules, and examples. Tooling such as Swagger UI, Redoc, and Stoplight renders these documents as interactive developer portals.
- The significance of OAS lies in its role as the contract layer of API-first development. Teams that design the specification before writing code can parallelise front-end, back-end, and testing workstreams. Mock servers generated from OAS documents allow consumers to develop integrations before the real API is built. Contract testing frameworks such as Pact and Dredd validate that implementations conform to the published specification, catching breaking changes before deployment. In the enterprise, OAS is the primary input to API governance processes that enforce naming conventions, versioning policies, and security standards.
- OpenAPI 3.1.0, released in 2021, achieved full alignment with JSON Schema 2020-12, resolving years of subtle incompatibilities between OAS Schema Objects and the JSON Schema standard. By 2024–2025, OAS is being extended to describe asynchronous APIs (alongside AsyncAPI), AI tool interfaces for LLM function-calling, and event-driven architectures. The specification is also being integrated into AI coding assistants and API design copilots that generate OAS documents from natural-language descriptions, lowering the barrier to well-documented API design.

