public:: true

# rest api
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d2609a8f60a2f494e5e3adefb6ace7f9da994aaeef719fb9e09e10cf1e1881b5",
  "@type": "Page",
  "vc:slug": "rest-api",
  "title": "rest api",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:rest-api",
  "@type": "Class",
  "label": "REST API",
  "definition": "A REST API (Representational State Transfer Application Programming Interface) is a web service interface conforming to Roy Fielding's six architectural constraints — client–server separation, statelessness, cacheability, uniform interface, layered system, and optional code-on-demand — originally formalised in his 2000 doctoral dissertation. Resources are uniquely addressed by URIs, manipulated through standard HTTP verbs (GET, POST, PUT, PATCH, DELETE), and represented in negotiated formats such as JSON or XML. The uniform interface constraint — encompassing resource identification, manipulation through representations, self-descriptive messages, and hypermedia as the engine of application state (HATEOAS) — is the defining characteristic that separates REST from earlier RPC and SOAP-based architectures. REST APIs have become the dominant integration surface across cloud platforms, AI model serving, microservices ecosystems, and public developer APIs precisely because they align with existing HTTP infrastructure including caches, proxies, load balancers, and API gateways.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:web-api",
      "label": "Web API"
    }
  ],
  "relations": {
    "implements": [
      {"@id": "urn:ngm:class:http", "label": "HTTP"},
      {"@id": "urn:ngm:class:representational-state-transfer", "label": "Representational State Transfer"},
      {"@id": "urn:ngm:class:openapi-specification", "label": "OpenAPI Specification"},
      {"@id": "urn:ngm:class:hateoas", "label": "HATEOAS"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:microservices-architecture", "label": "Microservices Architecture"},
      {"@id": "urn:ngm:class:service-oriented-architecture", "label": "Service-Oriented Architecture"},
      {"@id": "urn:ngm:class:cloud-native-computing", "label": "Cloud Native Computing"},
      {"@id": "urn:ngm:class:api-economy", "label": "API Economy"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:json-data-interchange-format", "label": "JSON"},
      {"@id": "urn:ngm:class:xml", "label": "XML"},
      {"@id": "urn:ngm:class:oauth2", "label": "OAuth 2.0"},
      {"@id": "urn:ngm:class:tls", "label": "TLS"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:http-server", "label": "HTTP Server"},
      {"@id": "urn:ngm:class:uri", "label": "URI"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:graphql", "label": "GraphQL"},
      {"@id": "urn:ngm:class:grpc", "label": "gRPC"},
      {"@id": "urn:ngm:class:simple-object-access-protocol", "label": "SOAP"},
      {"@id": "urn:ngm:class:websocket", "label": "WebSocket"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:api-gateway", "label": "API Gateway"},
      {"@id": "urn:ngm:class:rate-limiting", "label": "Rate Limiting"},
      {"@id": "urn:ngm:class:content-negotiation", "label": "Content Negotiation"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:llm-inference-api", "label": "LLM Inference API"},
      {"@id": "urn:ngm:class:model-serving", "label": "Model Serving"},
      {"@id": "urn:ngm:class:federated-learning", "label": "Federated Learning"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:api-design", "label": "API Design"},
      {"@id": "urn:ngm:class:hypermedia", "label": "Hypermedia"},
      {"@id": "urn:ngm:class:stateless-protocol", "label": "Stateless Protocol"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:restful-api", "label": "RESTful API"},
    {"@id": "urn:ngm:class:restful-web-service", "label": "RESTful Web Service"}
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - A REST API (Representational State Transfer Application Programming Interface) is a web service interface conforming to Roy Fielding's six architectural constraints, first described in his 2000 doctoral dissertation at UC Irvine. Resources are uniquely addressed by [[URI]]s and manipulated through standard [[HTTP]] verbs (GET, POST, PUT, PATCH, DELETE), with representations typically serialised as [[JSON]] or [[XML]]. The [[Uniform Interface]] constraint — encompassing resource identification, representation-based manipulation, self-descriptive messages, and [[HATEOAS]] — distinguishes REST from earlier [[SOAP]] and [[RPC]] paradigms. REST APIs have become the dominant integration surface for [[Cloud Native Computing]], [[Microservices Architecture]], and [[AI Infrastructure]] precisely because they align with existing HTTP infrastructure including caches, proxies, load balancers, and [[API Gateway]]s.

- ### Overview
  - REST (Representational State Transfer) is an architectural style, not a protocol. It was formulated by Roy Fielding as part of the design rationale for HTTP/1.1 and published in his 2000 dissertation. The term "REST API" denotes any HTTP API that claims to adhere to these constraints, though in practice many omit the [[HATEOAS]] requirement, a pragmatic simplification that trades evolvability for implementation simplicity.
  - REST APIs matter because they:
    - Align naturally with the HTTP/TCP/IP stack ubiquitous in all internet infrastructure
    - Enable stateless, horizontally scalable server deployments favoured in [[Cloud Native Computing]]
    - Are supported by vast tooling ecosystems: [[OpenAPI Specification]], Swagger UI, Postman, curl, and every programming language's HTTP client library
    - Provide a language-agnostic integration surface that allows polyglot microservices to interoperate without shared runtime dependencies
    - Form the default public API pattern for virtually all major cloud providers (AWS, Google Cloud, Azure) and AI service providers ([[LLM Inference API]]s)
  - The six Fieldingian constraints that define REST are:
    - **Client–server separation**: UI concerns are separated from data storage and logic, enabling independent evolution of client and server
    - **Statelessness**: each request from a client contains all the information needed to service it; no client session state is held on the server between requests
    - **Cacheability**: responses must define themselves as cacheable or non-cacheable, enabling [[HTTP Caching]] layers to reduce latency and server load
    - **Uniform interface**: the central REST constraint, comprising four sub-constraints (resource identification via URI, manipulation via representations, self-descriptive messages, HATEOAS)
    - **Layered system**: clients cannot ordinarily tell whether they are connected directly to the end server or through an intermediary such as a [[Load Balancer]] or [[API Gateway]]
    - **Code on demand** (optional): servers may extend client functionality by transferring executable code (e.g., JavaScript)

- ### Key Components
  - **Resources and URIs**
    - Every addressable entity is a resource, uniquely identified by a [[URI]]
    - URI design is a critical API design concern: hierarchical paths (`/users/{id}/orders`), query parameters for filtering, and fragment identifiers for intra-document navigation
    - Resources are nouns; HTTP verbs encode the action — e.g. `GET /users` retrieves a collection, `POST /users` creates a new resource
  - **HTTP Verbs and Semantics**
    - `GET`: safe and idempotent; retrieves a resource representation without side effects
    - `POST`: non-idempotent; creates a subordinate resource or triggers a non-CRUD operation
    - `PUT`: idempotent; replaces the entire resource representation
    - `PATCH`: partial update of a resource; semantics defined by the patch format (RFC 6902 JSON Patch, RFC 7396 JSON Merge Patch)
    - `DELETE`: removes the resource; idempotent in terms of resource state
    - `HEAD` / `OPTIONS`: metadata and capability discovery, used by [[CORS]] preflight
  - **Representations and Content Negotiation**
    - A resource may have multiple representations ([[JSON]], [[XML]], [[Protocol Buffers]], HTML)
    - [[Content Negotiation]] via `Accept` and `Content-Type` headers allows client and server to agree on format without URI changes
    - JSON is the overwhelmingly dominant representation format for modern REST APIs
  - **HTTP Status Codes**
    - 2xx: success (200 OK, 201 Created, 204 No Content)
    - 3xx: redirection (301 Moved Permanently, 304 Not Modified for cache revalidation)
    - 4xx: client errors (400 Bad Request, 401 Unauthorised, 403 Forbidden, 404 Not Found, 429 Too Many Requests)
    - 5xx: server errors (500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable)
  - **Hypermedia and HATEOAS**
    - [[HATEOAS]] (Hypermedia as the Engine of Application State) requires that responses include links to related actions and resources, enabling dynamic client navigation without out-of-band documentation
    - In practice widely omitted; [[HAL (Hypertext Application Language)]], [[JSON:API]], and [[Siren]] are hypertext-oriented REST formats that implement it
  - **Authentication and Authorisation**
    - [[OAuth 2.0]] / [[OpenID Connect]] — the standard authorisation delegation framework for public REST APIs
    - [[API Key]] — simpler, less granular; used for server-to-server integrations
    - [[JWT (JSON Web Token)]] — compact, self-contained tokens transmitted in `Authorization: Bearer` headers
    - [[mTLS (Mutual TLS)]] — certificate-based authentication at the transport layer for high-assurance service-to-service calls
  - **API Description Languages**
    - [[OpenAPI Specification]] (formerly Swagger): the dominant machine-readable REST API description format; enables automatic SDK generation, interactive documentation (Swagger UI, Redoc), and contract-first development
    - [[RAML]]: REST API Modelling Language, a YAML-based alternative
    - [[API Blueprint]]: Markdown-based description language

- ### Applications and Use Cases
  - **AI Model Serving**
    - Virtually all hosted AI inference is exposed via REST: [[LLM Inference API]]s (OpenAI Chat Completions, Anthropic Messages API), image generation, speech-to-text, and embedding endpoints
    - The OpenAI Chat Completions API has become a de facto industry-standard REST interface shape adopted by many alternative inference providers as a compatibility target
    - [[Model Serving]] frameworks (TorchServe, BentoML, Triton Inference Server, vLLM) expose standardised REST endpoints for synchronous and streaming prediction requests
    - [[MLflow]], [[Kubeflow Pipelines]], and [[MLOps]] platforms expose REST APIs for experiment tracking, pipeline management, and model registry operations
  - **Microservices and Cloud Platforms**
    - [[Microservices Architecture]] decomposes applications into independently deployable services that communicate primarily via REST (or [[gRPC]] for high-throughput internal paths)
    - Public [[Cloud Native Computing]] platforms (AWS, Google Cloud, Azure) expose their control planes as REST APIs; infrastructure-as-code tools (Terraform, Pulumi) call these APIs programmatically
    - [[Kubernetes]] API server is a REST API; `kubectl` is a REST client
  - **Web and Mobile Applications**
    - Single-page applications (React, Vue, Angular) consume REST APIs via the browser's Fetch API
    - Mobile applications communicate with backend services exclusively through REST APIs
    - [[API Gateway]]s (AWS API Gateway, Kong, Apigee) mediate REST traffic between frontend clients and backend services, adding [[Rate Limiting]], authentication, and [[Observability]]
  - **IoT and Edge**
    - REST APIs are used for device management and telemetry ingestion in [[Internet of Things]] architectures; lightweight variants use CoAP (Constrained Application Protocol), which mirrors REST constraints over UDP
  - **Data and Analytics Pipelines**
    - [[Data Pipeline]] orchestrators (Apache Airflow, Prefect) provide REST APIs for triggering DAG runs and monitoring task state
    - [[Data Catalogue]]s and [[Metadata Management]] platforms expose discovery and lineage REST APIs
  - **Federated and Distributed AI**
    - [[Federated Learning]] coordination servers expose REST APIs for model update aggregation and round management
    - Multi-agent AI systems use REST APIs as the integration fabric between [[Agent]] modules and external tool endpoints

- ### Relationships
  - implements:: [[HTTP]]
  - implements:: [[Representational State Transfer]]
  - implements:: [[OpenAPI Specification]]
  - implements:: [[HATEOAS]]
  - enables:: [[Microservices Architecture]]
  - enables:: [[Service-Oriented Architecture]]
  - enables:: [[Cloud Native Computing]]
  - enables:: [[API Economy]]
  - uses:: [[JSON]]
  - uses:: [[XML]]
  - uses:: [[OAuth 2.0]]
  - uses:: [[TLS]]
  - requires:: [[HTTP Server]]
  - requires:: [[URI]]
  - contrastsWith:: [[GraphQL]]
  - contrastsWith:: [[gRPC]]
  - contrastsWith:: [[SOAP]]
  - contrastsWith:: [[WebSocket]]
  - supports:: [[API Gateway]]
  - supports:: [[Rate Limiting]]
  - supports:: [[Content Negotiation]]
  - bridges-to:: [[LLM Inference API]]
  - bridges-to:: [[Model Serving]]
  - bridges-to:: [[Federated Learning]]
  - relatedTo:: [[API Design]]
  - relatedTo:: [[Hypermedia]]
  - relatedTo:: [[Stateless Protocol]]

- ### Standards and Context
  - **IETF RFCs**
    - RFC 7230–7235: HTTP/1.1 specification suite (message syntax, semantics, conditional requests, range requests, authentication, caching)
    - RFC 7540: HTTP/2 — binary framing, header compression (HPACK), multiplexing; supported by all modern REST API frameworks
    - RFC 9110–9114: HTTP Semantics, Caching, and HTTP/3 (QUIC-based transport)
    - RFC 6749: [[OAuth 2.0]] Authorisation Framework
    - RFC 7519: [[JWT (JSON Web Token)]]
    - RFC 6902: JSON Patch; RFC 7396: JSON Merge Patch
    - RFC 8259: [[JSON]] data interchange format
  - **W3C**
    - [[CORS]] (Cross-Origin Resource Sharing) — W3C specification governing browser-initiated cross-origin REST requests
  - **OpenAPI Initiative (Linux Foundation)**
    - [[OpenAPI Specification]] v3.1 (aligned with JSON Schema draft 2020-12) is the current standard for REST API description; governed by the OpenAPI Initiative under the Linux Foundation
  - **Industry de facto standards**
    - OpenAI Chat Completions API shape — widely adopted as a compatibility target for [[LLM Inference API]] providers
    - [[JSON:API]] (jsonapi.org) — a specification for REST APIs using JSON that prescribes document structure, compound documents, and HATEOAS linking
    - [[HAL (Hypertext Application Language)]] — a simple format for embedding hyperlinks in JSON and XML REST responses
    - [[Problem Details for HTTP APIs]] (RFC 7807) — standardised JSON error response format
  - **Governance and maturity**
    - REST APIs are universally `mature`; the architectural style has been stable since 2000, HTTP tooling is pervasive, and REST remains the dominant API paradigm despite competition from [[GraphQL]] and [[gRPC]]
    - [[API Management]] platforms (Apigee, MuleSoft, Kong, AWS API Gateway) have evolved around REST as the primary managed API style

- ### Semantic Classification
  - owl-class:: rest-api:REST API
  - owl-role:: Concept

- ### Provenance
  - sources:: Fielding R.T. (2000) Architectural Styles and the Design of Network-based Software Architectures (UC Irvine dissertation); RFC 7230–7235; RFC 9110–9114; OpenAPI Initiative v3.1 specification
  - updated:: 2026-06-13
