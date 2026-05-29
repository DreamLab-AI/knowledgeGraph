public:: true

# Service Discovery
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:service-discovery",
  "@type": "Page",
  "vc:slug": "service-discovery",
  "title": "Service Discovery",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:service-discovery",
  "@type": "Class",
  "label": "Service Discovery",
  "definition": "Service discovery is the mechanism by which distributed applications automatically locate the network endpoints of services they depend on, without relying on hardcoded addresses or manual configuration. It operates through a service registry that maintains a dynamic catalogue of available service instances with their health status, enabling clients to resolve service names to live endpoints at runtime. Service discovery patterns divide into client-side discovery, where the consumer queries the registry directly, and server-side discovery, where a load balancer or gateway mediates resolution. It is a foundational pattern in microservices architectures, enabling dynamic scaling, rolling updates, and fault-tolerant inter-service communication.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:distributed-system-architecture", "label": "Distributed System Architecture"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:microservices-architecture", "label": "Microservices Architecture"},
      {"@id": "urn:ngm:class:kubernetes", "label": "Kubernetes"},
      {"@id": "urn:ngm:class:api-gateway", "label": "API Gateway"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:fault-tolerance", "label": "Fault Tolerance"},
      {"@id": "urn:ngm:class:operational-resilience", "label": "Operational Resilience"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:orchestration", "label": "Orchestration"},
      {"@id": "urn:ngm:class:microservices", "label": "Microservices"},
      {"@id": "urn:ngm:class:distributed-system", "label": "Distributed System"},
      {"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Service Discovery]] is the runtime mechanism by which distributed applications dynamically resolve service names to live network endpoints via a service registry, enabling [[Microservices Architecture]] deployments to scale elastically and recover from failures without operator intervention.

- ### Relationships
  - Service discovery underpins [[Microservices]] by decoupling consumers from hardcoded addresses, integrates with [[Kubernetes]] native DNS-based and endpoint-slice mechanisms, sits behind [[API Gateway]] routing layers that perform server-side resolution, and collectively enables [[Fault Tolerance]] and [[Operational Resilience]] by removing stale endpoints from the registry when health checks fail; [[Orchestration]] systems coordinate the lifecycle of service instances whose addresses are published through service discovery.

- ### Content
  - Service discovery emerged as a discipline when service-oriented architectures in the early 2000s replaced monolithic applications with networks of independently deployable services. Early implementations relied on DNS and static load balancers. As deployments moved to elastic cloud infrastructure where instance IP addresses change continuously, tools such as Consul, Eureka (Netflix OSS), and ZooKeeper became standard centralised registries.

  - A service discovery system has three components: a registry storing service metadata and health status; a registration mechanism by which services announce themselves on start-up and deregister on shutdown or failure; and a query interface through which clients or load balancers resolve names to healthy endpoint lists. Health checks — TCP, HTTP, or custom script probes — run on configurable intervals to evict unhealthy instances from the registry within seconds of failure.

  - Kubernetes internalised service discovery through CoreDNS, which resolves Kubernetes Service names to virtual IP addresses, and the Endpoints API, which maps those VIPs to healthy pod addresses. Service meshes such as Istio and Linkerd extend this with mTLS, circuit breaking, and fine-grained observability, pushing discovery logic into a per-pod sidecar proxy that intercepts all inter-service traffic.

  - In 2024-2025, service discovery is evolving to handle multi-cluster and multi-cloud topologies, where services span environments with distinct networking domains. Projects such as Skupper and Istio's multi-cluster federation solve cross-boundary discovery. In AI and agent-based systems, service discovery is being applied to dynamic registries of AI capabilities and tool APIs, enabling agents to discover and compose services at runtime without pre-coded integrations.
