- ### Definition
  - The API Layer is the stratum that exposes a system's capabilities as callable, contractually defined endpoints. It sits above the application logic it fronts and below integration and interface strata that connect consumers. It contains endpoint definitions, request and response schemas, authentication hooks, and versioning.

- ### Semantic Classification
  - owl-class:: api:APILayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[REST]], [[OpenAPI Specification]]
  - requires:: [[Application Layer]]
  - enables:: [[Integration Layer]], [[Interface Layer]]

- ### Content
  - The API Layer publishes a system's functions as well-defined endpoints that external code can invoke. Typical members include resource and operation definitions, request and response schemas, authentication and rate-limiting hooks, and version negotiation. It is the controlled doorway through which capabilities are offered.
  - It requires the Application Layer for the behaviour it surfaces, and it enables the Integration and Interface Layers, which connect and contract against it. Stable, documented endpoints here let consumers depend on the system without knowing its internals.
  - The layer bridges to REST and the OpenAPI specification, conventions that standardise how endpoints are described and consumed. Backward-compatibility guarantees made here govern how disruptive change is to integrators.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z