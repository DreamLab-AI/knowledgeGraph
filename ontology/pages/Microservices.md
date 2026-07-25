public:: true

# Microservices
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:microservices",
  "@type": "Page",
  "vc:slug": "microservices",
  "title": "Microservices",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:microservices",
  "@type": "Class",
  "label": "Microservices",
  "definition": "Microservices is an architectural style in which a large application is decomposed into a suite of small, independently deployable services, each responsible for a distinct bounded business capability and communicating through well-defined lightweight APIs or message channels. Each service runs in its own process, manages its own data store, and can be developed, deployed, scaled, and retired independently of other services. The pattern contrasts with monolithic architectures by enabling polyglot development, fine-grained fault isolation, and organisational alignment of teams with service ownership, at the cost of increased operational and distributed-systems complexity.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:software-architecture",
      "label": "Software Architecture"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:api-gateway",
        "label": "API Gateway"
      },
      {
        "@id": "urn:ngm:class:service-discovery",
        "label": "Service Discovery"
      },
      {
        "@id": "urn:ngm:class:service-mesh",
        "label": "Service Mesh"
      },
      {
        "@id": "urn:ngm:class:circuit-breaker",
        "label": "Circuit Breaker"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:cloud-native-applications",
        "label": "Cloud-Native Applications"
      },
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:container-orchestration",
        "label": "Container Orchestration"
      },
      {
        "@id": "urn:ngm:class:continuous-delivery",
        "label": "Continuous Delivery"
      },
      {
        "@id": "urn:ngm:class:observability",
        "label": "Observability"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:devops",
        "label": "DevOps"
      },
      {
        "@id": "urn:ngm:class:scalability",
        "label": "Scalability"
      },
      {
        "@id": "urn:ngm:class:fault-tolerance",
        "label": "Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:persistence",
        "label": "Polyglot Persistence"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:kubernetes",
        "label": "Kubernetes"
      },
      {
        "@id": "urn:ngm:class:rest-api",
        "label": "REST API"
      },
      {
        "@id": "urn:ngm:class:g-rpc",
        "label": "gRPC"
      },
      {
        "@id": "urn:ngm:class:message-broker",
        "label": "Message Broker"
      },
      {
        "@id": "urn:ngm:class:open-telemetry",
        "label": "OpenTelemetry"
      },
      {
        "@id": "urn:ngm:class:docker-containerisation-platform",
        "label": "Docker"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:monolithic-architecture",
        "label": "Monolithic Architecture"
      },
      {
        "@id": "urn:ngm:class:service-oriented-architecture",
        "label": "Service Oriented Architecture"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:domain-driven-design",
        "label": "Domain-Driven Design"
      },
      {
        "@id": "urn:ngm:class:event-driven-architecture",
        "label": "Event Driven Architecture"
      },
      {
        "@id": "urn:ngm:class:twelve-factor-app",
        "label": "Twelve-Factor App"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:serverless-architecture",
        "label": "Serverless Computing"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:microservice-architecture",
      "label": "Microservice Architecture"
    }
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - [[Microservices]] is an architectural style in which a large application is decomposed into a suite of small, independently deployable services, each encapsulating a distinct [[Domain-Driven Design]] bounded context and communicating through lightweight [[REST API]], [[gRPC]], or [[Message Broker]] interfaces. This contrasts directly with [[Monolithic Architecture]] and enables teams to ship, scale, and retire individual capabilities without coordinating the full application release cycle. The pattern is foundational to [[Cloud-Native Applications]] and shapes how modern organisations structure their [[DevOps]] practices and engineering teams.

- ### Overview
  - The microservices pattern emerged in the early 2010s as organisations such as Netflix, Amazon, and Spotify encountered the scaling and coordination limits of monolithic Java EE and Rails applications.
  - Martin Fowler and James Lewis codified the defining characteristics in a widely-cited 2014 article: each service focused on a single [[Domain-Driven Design]] bounded context, owns its data, is independently deployable, and can fail without cascading to the whole system.
  - The term gained rapid traction as [[Docker]] provided lightweight container packaging and [[Kubernetes]] provided the orchestration primitives needed to operate many small services efficiently at scale.
  - Microservices shifts system complexity from inside the application monolith outward into the infrastructure layer — inter-process communication, distributed tracing, and network resilience all become first-class operational concerns.
  - The pattern is most beneficial when different parts of a system have significantly different load profiles, release cadences, or team ownership boundaries.

- ### Key Components
  - **[[API Gateway]]** — single entry point routing external HTTP/gRPC traffic to downstream services; handles authentication, rate-limiting, and SSL termination.
  - **[[Service Discovery]]** — enables services to locate one another dynamically without hard-coded endpoints; implemented client-side (Consul, Eureka) or server-side (Kubernetes Services and DNS).
  - **[[Service Mesh]]** — infrastructure layer (Istio, Linkerd, Cilium) handling mTLS, retries, load balancing, and [[Circuit Breaker]] logic transparently at the sidecar or eBPF level.
  - **[[Circuit Breaker]]** — failure-detection pattern preventing cascading failures when a downstream service becomes unavailable or slow; popularised by Netflix Hystrix, now commonly implemented in service meshes.
  - **[[Message Broker]]** — asynchronous communication backbone (Apache Kafka, RabbitMQ, AWS SQS) allowing services to exchange events without tight temporal coupling.
  - **[[Container Orchestration]]** — platforms such as [[Kubernetes]] schedule, scale, and health-check containerised services; essential operational prerequisite for running microservices at production scale.
  - **[[Observability]]** — distributed tracing, structured logging, and metrics aggregation, standardised through [[OpenTelemetry]], are necessary to reason about request flows spanning many services.
  - **[[Polyglot Persistence]]** — each service may select the most appropriate data store for its workload (relational, document, key-value, graph) without forcing a shared schema.

- ### Architectural Patterns
  - **Strangler Fig** — incrementally extract functionality from a [[Monolithic Architecture]] into services, routing traffic through a facade that forwards to either the legacy system or the new service.
  - **Saga Pattern** — distributed transaction alternative using a sequence of local service transactions coordinated through choreography (events) or orchestration (central coordinator), ensuring eventual consistency without two-phase commit.
  - **Outbox Pattern** — reliably publish events alongside database writes in a single local transaction, consumed by the [[Message Broker]] asynchronously, preventing dual-write inconsistencies.
  - **BFF (Backend for Frontend)** — dedicated [[API Gateway]] tailored to the needs of a specific client type (mobile, web, partner API), reducing over-fetching and simplifying client logic.
  - **Sidecar** — attach ancillary containers (proxy, log shipper, config fetcher) to each service pod to handle cross-cutting concerns without modifying service code.
  - **CQRS (Command Query Responsibility Segregation)** — separate read and write models per service, enabling independent [[Scalability]] of query and command paths and supporting [[Event-Driven Architecture]].

- ### Communication Patterns
  - **Synchronous** — [[REST API]] over HTTP/1.1 or HTTP/2, [[gRPC]] with Protocol Buffers for strongly-typed binary RPC; suitable for request/response interactions requiring immediate answers.
  - **Asynchronous** — [[Event-Driven Architecture]] via [[Message Broker]]; services publish domain events and subscribe to topics; enables loose coupling and temporal decoupling.
  - **GraphQL Federation** — compose a unified graph API from per-service subgraphs, reducing round trips for complex queries in front-end-heavy architectures.
  - **gRPC streaming** — bidirectional streaming over HTTP/2 for high-throughput, low-latency inter-service data pipelines where REST overhead is prohibitive.

- ### Applications and Use Cases
  - **E-commerce platforms** — independent product catalogue, inventory, order, payment, and recommendation services; each scaled according to peak load profile (search far heavier than checkout).
  - **Streaming media** — separate services for content ingestion, transcoding, rights management, recommendation, and delivery; used by Netflix, Spotify, and similar platforms.
  - **Financial services** — isolated services for account management, fraud detection, payment processing, and reporting; enables compliance boundary enforcement between domains.
  - **SaaS multi-tenancy** — tenant management, billing, identity, and product services owned by separate teams; permits per-team release autonomy and independent SLA management.
  - **IoT and edge deployments** — lightweight service deployments on gateway hardware, with [[Edge Computing]] bridging to cloud back-ends using event-based messaging.
  - **AI/ML pipelines** — model serving, feature computation, and data ingestion encapsulated as independent services, enabling independent versioning of model artefacts from business logic.

- ### Relationships
  - hasPart:: [[API Gateway]]
  - hasPart:: [[Service Discovery]]
  - hasPart:: [[Service Mesh]]
  - hasPart:: [[Circuit Breaker]]
  - partOf:: [[Cloud-Native Applications]]
  - partOf:: [[Distributed Systems]]
  - requires:: [[Container Orchestration]]
  - requires:: [[Continuous Delivery]]
  - requires:: [[Observability]]
  - enables:: [[DevOps]]
  - enables:: [[Scalability]]
  - enables:: [[Fault Tolerance]]
  - enables:: [[Polyglot Persistence]]
  - uses:: [[Kubernetes]]
  - uses:: [[REST API]]
  - uses:: [[gRPC]]
  - uses:: [[Message Broker]]
  - uses:: [[OpenTelemetry]]
  - uses:: [[Docker]]
  - contrastsWith:: [[Monolithic Architecture]]
  - contrastsWith:: [[Service-Oriented Architecture]]
  - relatedTo:: [[Domain-Driven Design]]
  - relatedTo:: [[Event-Driven Architecture]]
  - relatedTo:: [[Twelve-Factor App]]
  - bridgesTo:: [[Serverless Computing]]
  - bridgesTo:: [[Edge Computing]]

- ### Organisational Considerations
  - **Conway's Law alignment** — microservices boundaries should mirror team communication structures; each team owns one or more services end-to-end from code to production.
  - **Team topology** — stream-aligned teams own services directly; platform engineering teams own shared infrastructure (service mesh, observability, CI/CD tooling).
  - **Developer experience** — local development is significantly harder than in a monolith; tools like Docker Compose, Telepresence, and development service stubs are commonly used to run subsets of services.
  - **Operational overhead** — each service introduces its own deployment, monitoring, and support burden; many organisations adopt a "modular monolith first" strategy before splitting into services.
  - **Granularity trade-offs** — over-decomposition into "nano-services" increases network latency and operational costs; under-decomposition recreates monolith coupling across service boundaries.

- ### Standards and Context
  - **[[Twelve-Factor App]]** — methodology documenting practices (config via environment, stateless processes, disposable instances) that underpin well-behaved microservices.
  - **[[OpenTelemetry]]** — CNCF standard for distributed tracing, metrics, and logs; provides vendor-neutral instrumentation for cross-service observability.
  - **Open Application Model (OAM)** — specification for describing cloud-native application deployment independent of platform; supports microservice deployment descriptors.
  - **Cloud Native Computing Foundation (CNCF)** — stewards key microservices tooling including [[Kubernetes]], Envoy, Argo CD, Prometheus, and Jaeger.
  - **gRPC** — CNCF-hosted RPC framework; the predominant typed inter-service communication protocol for latency-sensitive internal service communication.
  - **AsyncAPI** — specification for event-driven and message-based APIs, complementing OpenAPI for asynchronous microservice interfaces.

- ### Evolution and Trends
  - **Service mesh maturity** — Istio, Linkerd, and Cilium (eBPF-based) absorb mTLS, retries, and observability out of application code, reducing per-service boilerplate.
  - **WebAssembly components** — emerging as a lighter-weight alternative to OCI containers for embedding small, polyglot service logic with strong isolation guarantees.
  - **Modular monolith resurgence** — many teams now prefer starting with a well-modularised single deployment unit that can be extracted into services later, deferring premature distribution costs.
  - **Platform engineering** — dedicated internal developer platforms (IDPs) abstract the complexity of service deployment, secret management, and [[Observability]] configuration from service teams.
  - **[[Serverless Computing]] convergence** — function-as-a-service platforms and container-based microservices are converging; WASM-based FaaS runtimes (SpinKube, wasmCloud) blur the boundary.
  - **AI/ML integration** — microservice architectures are increasingly hosting [[Observability]]-instrumented model inference services, bridging traditional software systems with [[Serverless Computing]] and ML pipelines.

- ### Provenance
  - sources:: Martin Fowler & James Lewis (martinfowler.com/articles/microservices.html); CNCF Landscape; Sam Newman "Building Microservices" (O'Reilly); Netflix Tech Blog; Richardson Microservices Patterns
  - updated:: 2026-06-13
