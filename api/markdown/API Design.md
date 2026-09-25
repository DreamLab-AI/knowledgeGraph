API design is the discipline of specifying the contract, structure, and behaviour of an application programming interface so that it is consistent, intuitive, evolvable, and reliable for the developers who consume it. It covers resource and operation modelling, naming and conventions, request and response schemas, error semantics, authentication, versioning, and documentation, balancing usability against the constraints of the underlying system. Good API design treats the interface as a long-lived product whose contract must remain stable and backward-compatible while still allowing the implementation behind it to evolve.

### Overview

- API design has become a first-class concern as systems decomposed into services and as public APIs turned into products and revenue channels.
- Two architectural styles dominate: resource-oriented [[REST API]] design over HTTP, and query-oriented [[GraphQL]], each suiting different consumer needs.
- A design-first workflow — specifying the contract before implementation, typically in [[OpenAPI]] — improves consistency, enables mocking, and decouples producer and consumer teams.
- The defining constraint is contract stability: once consumers depend on an API, breaking changes are costly, making [[Backward Compatibility]] and [[API Versioning]] central design concerns.

### Key aspects

#### Contract and schema

- Clear request and response schemas, status codes, and error formats define the interface precisely and machine-readably.

#### Consistency and conventions

- Uniform naming, pagination, filtering, and error conventions reduce the cognitive load on consuming developers.

#### Evolvability

- [[API Versioning]] and [[Backward Compatibility]] strategies allow the interface to grow without breaking existing clients.

#### Security

- Authentication, authorisation, input validation, and [[Rate Limiting]] are designed into the contract rather than bolted on.

### Mechanisms

#### Design-first specification

- Authoring an [[OpenAPI]] or schema definition before coding establishes the contract and drives code generation, mocks, and documentation.

#### Style selection

- Choosing between [[REST API]], [[GraphQL]], or RPC styles based on consumer access patterns and coupling tolerance.

#### Gateway enforcement

- An [[API Gateway]] enforces cross-cutting concerns — authentication, [[Rate Limiting]], routing, and observability — consistently across services.

### Applications

- **Microservice interfaces** — well-designed APIs define the boundaries that make [[Microservices]] independently deployable.
- **Public developer platforms** — product APIs prioritise developer experience, stable contracts, and thorough documentation.
- **Partner integrations** — stable, versioned contracts support long-lived B2B [[Interoperability]].
- **Internal platform APIs** — consistent internal interfaces accelerate team-to-team integration behind an [[API Gateway]].
- **Mobile and frontend backends** — query-oriented designs like [[GraphQL]] minimise round trips for rich clients.

### Provenance

