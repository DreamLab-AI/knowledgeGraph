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
  "definition": "Microservices is an architectural style in which a large application is decomposed into a collection of small, independently deployable services, each responsible for a specific business capability and communicating via well-defined APIs. Each service runs in its own process, can be developed and scaled independently, and may use its own data storage technology. This approach contrasts with monolithic architectures and enables continuous delivery, polyglot development, and fine-grained fault isolation.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:microservices-architecture", "label": "Microservices Architecture"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:api-gateway", "label": "API Gateway"},
      {"@id": "urn:ngm:class:service-discovery", "label": "Service Discovery"},
      {"@id": "urn:ngm:class:kubernetes", "label": "Kubernetes"},
      {"@id": "urn:ngm:class:rest-api", "label": "REST API"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:distributed-system", "label": "Distributed System"},
      {"@id": "urn:ngm:class:cloud-native-applications", "label": "Cloud-Native Applications"},
      {"@id": "urn:ngm:class:software-architecture", "label": "Software Architecture"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:cloud-computing", "label": "Cloud Computing"},
      {"@id": "urn:ngm:class:open-telemetry", "label": "OpenTelemetry"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Microservices]] is an architectural pattern that structures an application as a suite of small, independently deployable [[Software Architecture]] units, each encapsulating a discrete business function and communicating through lightweight [[REST API]] or messaging interfaces hosted in a [[Distributed System]] environment.

- ### Relationships
  - [[Microservices]] rely on an [[API Gateway]] to route external traffic to the appropriate service and leverage [[Service Discovery]] so instances can locate each other dynamically. Container orchestration via [[Kubernetes]] manages deployment lifecycles. The pattern is foundational to [[Cloud-Native Applications]] and pairs with [[OpenTelemetry]] for distributed tracing across service boundaries within [[Distributed System]] topologies.

- ### Content
  - The microservices pattern emerged in the early 2010s as organisations like Netflix, Amazon, and Spotify encountered the scaling limits of monolithic Rails and Java EE applications. Martin Fowler and James Lewis codified the defining characteristics in a 2014 article: each service is focused on a single bounded context, owns its data, is independently deployable, and can fail without cascading to the whole system. The term gained rapid traction as Docker and then Kubernetes provided the containerisation and orchestration primitives needed to operate many small services efficiently.

  - Microservices communicate either synchronously via HTTP/gRPC APIs exposed through an [[API Gateway]], or asynchronously via message brokers such as Apache Kafka or RabbitMQ. [[Service Discovery]] mechanisms — either client-side (Consul, Eureka) or server-side (Kubernetes Services) — allow services to find each other without hard-coded endpoints. Each service maintains its own data store, polyglot persistence being a key enabler, and the overall system achieves consistency through eventual consistency patterns like sagas or outbox transactions rather than distributed transactions.

  - The business significance of microservices lies in organisational alignment and deployment velocity. Conway's Law predicts that software architecture mirrors team communication structures; microservices allow teams to own entire vertical slices independently, enabling parallel development streams and reducing coordination overhead. Fault isolation means a single service failure no longer brings down the entire product. This architecture underpins modern SaaS platforms, enabling feature teams to ship multiple times per day through CI/CD pipelines with zero-downtime rolling deployments.

  - By 2024-2025 the industry has refined microservices practice considerably, with service mesh technologies (Istio, Linkerd) absorbing cross-cutting concerns such as mTLS, retries, and circuit-breaking out of application code. Debate continues around granularity — "nano-services" (functions) versus coarser services — with many organisations adopting a modular monolith as a starting point that can be extracted into services as scaling demands dictate. eBPF-based observability is reducing the overhead of [[OpenTelemetry]] instrumentation, and WebAssembly components are emerging as a lighter-weight alternative to containers for certain workloads.

