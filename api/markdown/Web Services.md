
Web services are software components that expose machine-to-machine functionality over a network using standardised protocols and data formats. They enable interoperable application integration across heterogeneous platforms by defining contracts (interface descriptions), message envelopes, and transport bindings independent of the implementing technology. Web services encompass both the older SOAP/WSDL stack and lightweight RESTful styles, and underpin service-oriented and microservice architectures.

- ### Overview
  - The classic web services stack pairs [[SOAP]] message envelopes with WSDL interface descriptions and is transported over [[HTTP]], using [[XML]] for structured payloads.
  - Lightweight [[REST]] styles later became dominant for public [[API]]s, trading rigid contracts for simplicity and cache-friendly resource semantics.
  - Both styles share the central goal of interoperable, contract-driven machine-to-machine communication.

- ### Key Aspects
  - **Interface contracts** — formal descriptions (WSDL, OpenAPI) let clients generate bindings and validate messages.
  - **Transport independence** — the same service logic can be bound to multiple transports and encodings.
  - **Statelessness** — RESTful web services favour stateless interactions for horizontal scalability.
  - **Discoverability** — registries and specifications allow services to be located and consumed programmatically.

- ### Applications
  - Enterprise application integration across heterogeneous back-office systems.
  - Public and partner [[API]]s exposing platform capabilities to third-party developers.
  - Service-to-service communication within [[Microservices]] architectures.

- ### Provenance

