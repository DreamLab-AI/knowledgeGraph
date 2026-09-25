An API contract is the agreed, machine-readable specification of how a service may be called and what it will return, covering endpoints, request and response schemas, data types, status codes and error semantics. It functions as a formal agreement between the provider and consumers of an interface, allowing each side to develop and test independently against a shared definition. Expressed in formats such as OpenAPI or GraphQL schemas, the contract enables tooling for validation, mocking, code generation and compatibility checking across versions.

- An API contract is the formal, machine-readable agreement between a service and its callers, defining endpoints, [[Schema]] for requests and responses, status codes and errors. It is a specialised [[Data Schema]] central to [[API Design]] and to enabling independent development on either side of an interface.

### Overview

- By fixing the shape of every interaction, the contract lets providers and consumers work in parallel: consumers code against the agreed definition while the provider implements it, and both validate against the same source of truth. Contracts expressed in [[OpenAPI]] or [[GraphQL]] schemas unlock automated tooling for mocking, validation and client generation.
- A disciplined contract is the basis of safe evolution: additive changes preserve [[Backward Compatibility]], while breaking changes are signalled through [[API Versioning]] and [[Semantic Versioning]].

### Key aspects

- Endpoint, method, request and response definitions with explicit data types.
- Error and status-code semantics that callers can rely on.
- Versioning and compatibility rules governing change.
- Machine-readable formats enabling generation, mocking and validation.
- Contract testing that verifies provider and consumer stay in agreement.

### Applications

- Coordinating [[Microservices]] that integrate through stable interfaces.
- Generating client SDKs and server stubs from a single definition.
- Enforcing [[Data Validation]] at the boundary via the agreed schema.
- Routing and policy enforcement at an [[API Gateway]].

### Provenance

