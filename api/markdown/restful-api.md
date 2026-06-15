- ### Definition
  - A RESTful API is a [[Web API]] that applies the REST style, exposing URI-addressed resources manipulated through uniform [[HTTP]] methods.
  - It is a [[Stateless Protocol]] interaction using representations, status codes and media types, often described with [[OpenAPI]].

- ### Overview
  - REST treats everything as a resource with a stable identifier; clients act on resources by transferring representations of their state.
  - Statelessness means each request carries all context it needs, improving scalability and enabling [[Caching]].
  - A uniform interface and self-descriptive messages let clients and servers evolve independently, with hypermedia ([[HATEOAS]]) guiding navigation.

- ### Key aspects
  - Resource modelling and consistent URI design under [[API Design]].
  - HTTP verbs mapped to create, read, update and delete semantics.
  - Appropriate status codes, content negotiation and [[Idempotency]] guarantees.
  - Cacheability and layered architecture for scalability.

- ### Applications
  - Public and internal web services exposing data and operations.
  - Inter-service communication across [[Microservices]].
  - Backends for web and mobile clients, fronted by an [[API Gateway]].
  - Integration platforms managed via [[API Management]].

- ### Relationships
  - subClassOf:: [[Web API]]
  - hasPart:: [[HTTP]]
  - hasPart:: [[HATEOAS]]
  - partOf:: [[API Design]]
  - requires:: [[Stateless Protocol]]
  - enables:: [[Web Services]]
  - enables:: [[API Management]]
  - implements:: [[REST API]]
  - implements:: [[Idempotency]]
  - uses:: [[Caching]]
  - supports:: [[Microservices]]
  - standardizedBy:: [[OpenAPI]]
  - contrastsWith:: [[GraphQL]]
  - contrastsWith:: [[SOAP]]
  - bridgesTo:: [[API Gateway]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation