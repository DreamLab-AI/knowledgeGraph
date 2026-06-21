- ### Definition
  - [[Web Services]] are network-accessible software components that expose functionality to other programs through standardised protocols and machine-readable interface contracts.
  - They make application integration interoperable across different languages, platforms, and organisations, forming the backbone of [[Service-Oriented Architecture]] and [[Microservices]] systems.

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

- ### Relationships
  - hasPart:: [[SOAP]]
  - hasPart:: [[WSDL]]
  - uses:: [[HTTP]]
  - uses:: [[XML]]
  - enables:: [[API]]
  - enables:: [[Service-Oriented Architecture]]
  - relatedTo:: [[REST]]
  - relatedTo:: [[Microservices]]
  - relatedTo:: [[API Specification]]
  - supports:: [[Interoperability]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation