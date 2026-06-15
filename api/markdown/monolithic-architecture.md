- ### Definition
  - [[Monolithic Architecture]] is a [[System Architecture]] style in which an application is packaged and deployed as one cohesive unit with tightly coupled layers communicating via [[In-Process Communication]]. It is simple to build and deploy but contrasts with [[Microservices Architecture]] when independent scaling and evolution are required.

- ### Overview
  - A monolith combines all functional concerns — presentation, business logic, and persistence — inside a single executable or deployment artefact. Internal modules invoke one another directly through function or method calls, avoiding the latency, serialisation, and partial-failure complexity of network communication.
  - This style offers strong developer ergonomics for new projects: a single build pipeline, end-to-end transactions across a shared database, straightforward debugging, and no distributed-systems overhead. The trade-offs emerge at scale, where the entire application must be redeployed for any change, resource scaling is coarse-grained, and a fault in one module can compromise the whole process.

- ### Key aspects
  - Single deployable artefact and shared runtime process.
  - Tight coupling between layers with in-process calls.
  - Shared database and unified data model.
  - Coarse-grained, typically vertical, scaling.

- ### Applications
  - Early-stage products and minimum viable products where speed matters most.
  - Internal line-of-business applications with bounded scope.
  - Foundations later refactored into a modular monolith or decomposed via the strangler fig pattern.

- ### Relationships
  - subClassOf:: [[System Architecture]]
  - hasPart:: [[Business Logic Layer]]
  - hasPart:: [[Data Access Layer]]
  - partOf:: [[Software Architecture]]
  - contrastsWith:: [[Microservices Architecture]]
  - contrastsWith:: [[Service-Oriented Architecture]]
  - uses:: [[Shared Database]]
  - enables:: [[Simplified Deployment]]
  - dependsOn:: [[Vertical Scaling]]
  - bridgesTo:: [[Modular Monolith]]
  - bridgesTo:: [[Strangler Fig Pattern]]
  - relatedTo:: [[N-Tier Architecture]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation