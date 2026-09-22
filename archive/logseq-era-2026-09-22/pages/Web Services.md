public:: true

# Web Services

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:web-services",
  "@type": "Page",
  "title": "Web Services",
  "vc:slug": "web-services",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:web-services",
  "@type": "Class",
  "label": "Web Services",
  "definition": "Web services are software components that expose machine-to-machine functionality over a network using standardised protocols and data formats. They enable interoperable application integration across heterogeneous platforms by defining contracts (interface descriptions), message envelopes, and transport bindings independent of the implementing technology. Web services encompass both the older SOAP/WSDL stack and lightweight RESTful styles, and underpin service-oriented and microservice architectures.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-software-engineering", "label": "Software Engineering"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:soap", "label": "SOAP"},
      {"@id": "urn:ngm:class:web-services-description-language", "label": "WSDL"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:http", "label": "HTTP"},
      {"@id": "urn:ngm:class:xml", "label": "XML"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:api", "label": "API"},
      {"@id": "urn:ngm:class:service-oriented-architecture", "label": "Service-Oriented Architecture"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rest", "label": "REST"},
      {"@id": "urn:ngm:class:microservices", "label": "Microservices"},
      {"@id": "urn:ngm:class:api-specification", "label": "API Specification"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:interoperability", "label": "Interoperability"}
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

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
