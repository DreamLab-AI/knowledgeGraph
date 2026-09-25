An application programming interface (API) is a formally specified contract that defines how software components request services and exchange data with one another. It abstracts an implementation behind a stable set of operations, data types, and protocols, decoupling callers from internal details. APIs span in-process library interfaces, inter-process and network endpoints, and platform service boundaries.

- An application programming interface is a published contract through which software requests services without knowing the callee's internals. It is a kind of [[Interface]] central to [[Software Architecture]], typically delivered over [[HTTP]] for networked services.

### Overview

- APIs establish a boundary: a producer commits to a set of operations and data shapes, and consumers code against that commitment rather than the implementation.
- This decoupling lets each side evolve independently, supports reuse across teams and organisations, and is the connective tissue of modern distributed systems.
- Styles range from in-process function and class interfaces to network APIs such as REST, RPC, and event-driven contracts.

### Key aspects

- A contract specifies endpoints or methods, parameters, return types, error semantics, and authentication.
- Versioning and backward compatibility govern how an API may change without breaking consumers.
- [[REST API]] design, schema definitions, and machine-readable specifications make APIs discoverable and testable.
- Rate limiting, authentication, and observability are operational concerns layered around the contract.

### Applications

- Service-to-service communication within [[Microservices]] architectures.
- Third-party platform [[Integration]] and developer ecosystems.
- Abstraction of cloud, payment, and AI capabilities behind stable endpoints.
- Internal libraries exposing reusable functionality across [[Software Engineering]] teams.

### Provenance

