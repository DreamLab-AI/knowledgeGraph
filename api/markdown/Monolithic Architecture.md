Monolithic architecture is a software design style in which an application is built and deployed as a single, self-contained unit where the user interface, business logic, and data-access layers are tightly coupled within one codebase and process. Components communicate through in-process function calls rather than network protocols, simplifying development, testing, and deployment for small to medium systems. As applications grow, the monolith can become difficult to scale selectively, evolve independently, or deploy without full redeployment, which motivates migration toward modular or microservices architectures.

### Overview

- A monolith combines all functional concerns — presentation, business logic, and persistence — inside a single executable or deployment artefact. Internal modules invoke one another directly through function or method calls, avoiding the latency, serialisation, and partial-failure complexity of network communication.
- This style offers strong developer ergonomics for new projects: a single build pipeline, end-to-end transactions across a shared database, straightforward debugging, and no distributed-systems overhead. The trade-offs emerge at scale, where the entire application must be redeployed for any change, resource scaling is coarse-grained, and a fault in one module can compromise the whole process.

### Key aspects

- Single deployable artefact and shared runtime process.
- Tight coupling between layers with in-process calls.
- Shared database and unified data model.
- Coarse-grained, typically vertical, scaling.

### Applications

- Early-stage products and minimum viable products where speed matters most.
- Internal line-of-business applications with bounded scope.
- Foundations later refactored into a modular monolith or decomposed via the strangler fig pattern.

### Provenance

