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
  "definition": "Service discovery is the runtime mechanism by which distributed applications automatically locate the network endpoints of services they depend on, without relying on hardcoded addresses or manual configuration. It operates through a service registry that maintains a dynamic catalogue of available service instances alongside their health status, enabling clients to resolve service names to live endpoints at query time. Discovery patterns divide into client-side discovery, where the consumer queries the registry directly and selects from returned healthy instances, and server-side discovery, where a load balancer or API gateway mediates resolution transparently. It is a foundational pattern in microservices and cloud-native architectures, enabling dynamic scaling, zero-downtime rolling updates, and fault-tolerant inter-service communication.",
  "domain": "distributed-systems",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:distributed-system-architecture",
      "label": "Distributed System Architecture"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:service-registry",
        "label": "Service Registry"
      },
      {
        "@id": "urn:ngm:class:health-check",
        "label": "Health Check"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:microservices-architecture",
        "label": "Microservices Architecture"
      },
      {
        "@id": "urn:ngm:class:cloud-native",
        "label": "Cloud-Native Computing"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:service-registry",
        "label": "Service Registry"
      },
      {
        "@id": "urn:ngm:class:network-addressing",
        "label": "Network Addressing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:fault-tolerance",
        "label": "Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:operational-resilience",
        "label": "Operational Resilience"
      },
      {
        "@id": "urn:ngm:class:horizontal-scalability",
        "label": "Horizontal Scaling"
      },
      {
        "@id": "urn:ngm:class:zero-downtime-deployment",
        "label": "Zero-Downtime Deployment"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:dns",
        "label": "DNS"
      },
      {
        "@id": "urn:ngm:class:load-balancing",
        "label": "Load Balancing"
      },
      {
        "@id": "urn:ngm:class:consensus-algorithm",
        "label": "Consensus Algorithm"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:kubernetes",
        "label": "Kubernetes"
      },
      {
        "@id": "urn:ngm:class:api-gateway",
        "label": "API Gateway"
      },
      {
        "@id": "urn:ngm:class:service-mesh",
        "label": "Service Mesh"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:microservices",
        "label": "Microservices"
      },
      {
        "@id": "urn:ngm:class:distributed-system",
        "label": "Distributed System"
      },
      {
        "@id": "urn:ngm:class:container-orchestration",
        "label": "Container Orchestration"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:configuration",
        "label": "Static Configuration"
      },
      {
        "@id": "urn:ngm:class:monolithic-architecture",
        "label": "Monolithic Architecture"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ai-agent",
        "label": "AI Agent"
      },
      {
        "@id": "urn:ngm:class:tool-use",
        "label": "Tool Use"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:orchestration",
        "label": "Orchestration"
      },
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      },
      {
        "@id": "urn:ngm:class:circuit-breaker",
        "label": "Circuit Breaker"
      },
      {
        "@id": "urn:ngm:class:sidecar-proxy",
        "label": "Sidecar Proxy"
      },
      {
        "@id": "urn:ngm:class:configuration-management",
        "label": "Configuration Management"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:dynamic-endpoint-resolution",
      "label": "Dynamic Endpoint Resolution"
    },
    {
      "@id": "urn:ngm:class:service-location",
      "label": "Service Location"
    }
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
  - [[Service Discovery]] is the runtime mechanism by which distributed applications automatically locate live network endpoints of services they depend on, eliminating hardcoded addresses and manual reconfiguration. A [[Service Registry]] stores a continuously updated catalogue of healthy service instances; services self-register on startup, deregister on shutdown, and are evicted when [[Health Check]] probes fail. Clients or intermediaries such as an [[API Gateway]] query the registry to obtain routable endpoints, enabling elastic scaling and fault-tolerant communication across [[Microservices Architecture]] deployments. The pattern is foundational to [[Cloud-Native Computing]], [[Container Orchestration]], and increasingly to dynamic [[AI Agent]] capability registries.

- ### Overview
  - Service discovery emerged as a discipline when service-oriented architectures in the early 2000s replaced monolithic applications with networks of independently deployable services. Early implementations relied on [[DNS]] and static [[Load Balancing]].
  - As deployments moved to elastic cloud infrastructure — where instance IP addresses change continuously due to autoscaling and container restarts — static address books became untenable. Tools such as Consul, Netflix Eureka, Apache ZooKeeper, and etcd became standard centralised registries.
  - The core problem service discovery solves is decoupling service consumers from the physical locations of service producers. Without it, every deployment requires manual reconfiguration of every downstream consumer — an operational impossibility at scale.
  - Modern service discovery is typically embedded in the platform layer ([[Kubernetes]] CoreDNS, [[Container Orchestration]] control planes) or delegated to a [[Service Mesh]] sidecar, making it largely transparent to application code.

- ### Key Components
  - **[[Service Registry]]** — the authoritative, highly available database of service instances, their addresses, ports, metadata, and health status. Must itself be distributed and consensus-backed (e.g. Raft via [[Consensus Algorithm]]) to avoid becoming a single point of failure.
  - **[[Service Registration]]** — the process by which a service instance announces its presence. Two modes:
    - *Self-registration*: the service calls the registry API directly on startup (used by Eureka, Consul).
    - *Third-party registration*: an external agent (e.g. a [[Container Orchestration]] platform) registers instances on the service's behalf.
  - **[[Health Check]]** — periodic probes (TCP connect, HTTP 200, or custom script) used to verify liveness and readiness. Unhealthy instances are marked critical and excluded from query results within seconds of failure, enabling [[Fault Tolerance]].
  - **Query Interface** — the API or protocol clients use to resolve a service name to endpoint list. Common forms: HTTP REST (Consul API), [[DNS]] SRV records (Consul DNS, CoreDNS), or gRPC xDS (Envoy control plane).
  - **[[Load Balancing]]** — client-side discovery delegates selection among returned endpoints to client-side load-balancing logic (round-robin, least-connections, locality-aware). Server-side discovery delegates this to an interposing gateway or load balancer.

- ### Discovery Patterns
  - **Client-Side Discovery** — the service consumer queries the registry, receives a list of healthy instances, and applies local [[Load Balancing]] logic to select one. Used by Spring Cloud + Ribbon (Netflix stack). Couples the consumer to the registry API.
  - **Server-Side Discovery** — the consumer sends a request to a stable [[API Gateway]] or load balancer, which queries the registry and routes internally. Consumer has no awareness of instance topology. Used in [[Kubernetes]] Services, AWS ALB, and Nginx Plus.
  - **DNS-Based Discovery** — service names are resolved via [[DNS]] SRV or A records dynamically populated from the registry. Works with any DNS-capable client; TTL tuning critical for fast failure convergence.
  - **xDS / Control Plane Discovery** — Envoy-based proxies receive real-time endpoint updates via the xDS API (EDS, CDS, LDS) from a control plane such as Istio Pilot or the AWS App Mesh controller. Enables sub-second propagation of topology changes.
  - **Gossip-Based Discovery** — membership and health information propagates peer-to-peer via a gossip protocol (Serf in Consul, SWIM). Scales to thousands of nodes without centralised bottleneck.

- ### Mechanisms
  - **Heartbeat and TTL leases** — registered instances must periodically renew their registration or it expires. This ensures stale registrations from crashed instances are automatically removed.
  - **Watch/Subscribe model** — clients subscribe to registry change events and maintain a local cache, reducing per-request lookup latency. Consul watches and etcd watches implement this.
  - **Namespace isolation** — multi-tenant and multi-environment deployments partition service registries by namespace, environment tag, or data-centre, preventing cross-environment pollution.
  - **Locality-aware routing** — advanced registries expose zone and region metadata, enabling consumers to prefer co-located instances for latency reduction and cost optimisation.

- ### Applications and Use Cases
  - **[[Microservices]] backends** — REST and gRPC microservices discover each other at runtime. Hundreds or thousands of replicas may exist and change constantly; discovery eliminates the need for static host files.
  - **[[Container Orchestration]] (Kubernetes)** — Kubernetes embeds service discovery via CoreDNS, which resolves `<service>.<namespace>.svc.cluster.local` to ClusterIP; the Endpoints/EndpointSlice API tracks healthy pod addresses behind each VIP.
  - **[[Service Mesh]] (Istio, Linkerd)** — sidecar proxies receive endpoint data from the mesh control plane, enabling mTLS, circuit breaking ([[Circuit Breaker]]), and observability without application changes.
  - **Multi-cluster and multi-cloud** — projects such as Skupper, Istio multi-cluster federation, and KubeFed solve cross-boundary discovery where services span distinct networking domains with separate registries.
  - **Edge and IoT deployments** — lightweight discovery (mDNS / Avahi, Zeroconf) enables devices on local networks to find services without a centralised registry.
  - **[[AI Agent]] capability registries** — emerging pattern where AI agents dynamically discover available tools, APIs, and sub-agent capabilities via a registry, enabling runtime composition of agent workflows without hard-coded integrations. Bridges service discovery concepts into the [[Tool Use]] domain.
  - **API marketplaces** — centralised API discovery portals (AWS API Gateway, Azure API Management) are macroscale analogues of service registries for third-party consumers.

- ### Implementations and Tooling
  - **Consul** (HashiCorp) — full-featured registry with health checking, multi-DC federation, KV store, and DNS interface. Lingua franca for non-Kubernetes environments.
  - **Eureka** (Netflix OSS) — AP-mode registry designed for resilience over consistency, widely used in Spring Cloud ecosystems.
  - **etcd** — CP-mode distributed KV store; used as the backing registry for [[Kubernetes]] (not a discovery system per se but underpins all Kubernetes service discovery).
  - **Apache ZooKeeper** — early consensus-backed registry; largely superseded by etcd and Consul for service discovery but still common in the Hadoop/Kafka ecosystem.
  - **CoreDNS** — the default DNS server in [[Kubernetes]], provides DNS-based service discovery via plugin chain (kubernetes, etcd plugins).
  - **Istio / Envoy xDS** — control-plane–based endpoint discovery for [[Service Mesh]] environments; delivers sub-second convergence via streaming gRPC.
  - **Nacos** (Alibaba) — popular in the Java/Spring ecosystem, particularly in China; combines service registry with dynamic [[Configuration Management]].
  - **mDNS / Zeroconf** — zero-configuration DNS multicast for local networks; used in IoT, development environments, and Apple's Bonjour.

- ### Relationships
  - hasPart:: [[Service Registry]]
  - hasPart:: [[Health Check]]
  - hasPart:: [[Service Registration]]
  - partOf:: [[Microservices Architecture]]
  - partOf:: [[Cloud-Native Computing]]
  - requires:: [[Service Registry]]
  - requires:: [[Network Addressing]]
  - enables:: [[Fault Tolerance]]
  - enables:: [[Operational Resilience]]
  - enables:: [[Horizontal Scaling]]
  - enables:: [[Zero-Downtime Deployment]]
  - dependsOn:: [[DNS]]
  - dependsOn:: [[Load Balancing]]
  - dependsOn:: [[Consensus Algorithm]]
  - uses:: [[Kubernetes]]
  - uses:: [[API Gateway]]
  - uses:: [[Service Mesh]]
  - supports:: [[Microservices]]
  - supports:: [[Distributed System]]
  - supports:: [[Container Orchestration]]
  - contrastsWith:: [[Static Configuration]]
  - contrastsWith:: [[Monolithic Architecture]]
  - bridges-to:: [[AI Agent]]
  - bridges-to:: [[Tool Use]]
  - relatedTo:: [[Orchestration]]
  - relatedTo:: [[Distributed Systems]]
  - relatedTo:: [[Circuit Breaker]]
  - relatedTo:: [[Sidecar Proxy]]
  - relatedTo:: [[Configuration Management]]

- ### Standards and Context
  - **DNS-SD (RFC 6763)** — DNS-based service discovery standard; defines how services advertise themselves via PTR, SRV, and TXT DNS records.
  - **mDNS (RFC 6762)** — Multicast DNS for zero-configuration local-network discovery; used by Zeroconf / Bonjour.
  - **xDS API** — de facto standard for programmatic endpoint discovery in the Envoy/service-mesh ecosystem; covers Endpoint Discovery Service (EDS), Cluster Discovery Service (CDS), Listener Discovery Service (LDS).
  - **CNCF Service Mesh Interface (SMI)** — standard API for [[Service Mesh]] behaviour including traffic management and service identity, complementing discovery.
  - **OpenAPI / AsyncAPI** — schema standards for advertising service capabilities; used in API gateway and marketplace service discovery portals.
  - **W3C Web of Things (WoT) Thing Description** — IoT-oriented service description standard enabling discovery and interaction with smart devices.
  - Governed by practices from the **CNCF** (Cloud Native Computing Foundation), **IETF** (DNS-SD, mDNS RFCs), and vendor-driven de facto standards (Consul API, Kubernetes Endpoints API).

- ### Current Landscape (2026)
  - The sidecar-per-pod model that dominated service discovery and mesh dataplanes is being displaced: Istio's ambient mode reached General Availability in v1.24 on 7 November 2024, using a per-node ztunnel for L4 mTLS and identity plus optional per-namespace waypoint proxies for L7, cutting mesh overhead from ~166% (sidecar) to roughly 8% and node memory from ~250MB/pod to ~26MB/node.
  - eBPF-native discovery and routing has matured as the sidecar-free alternative: Cilium (CNCF-graduated October 2023) delivers kube-proxy replacement, identity-based policy and SPIFFE mTLS directly in the kernel, though Istio's 2024 benchmarks still showed ambient handling ~56% more throughput at large scale where Cilium stressed the API server.
  - The Kubernetes Gateway API (v1.0 GA, late 2023) has become the de-facto standard for north-south and, via the GAMMA initiative, east-west service-to-service routing, replacing bespoke per-vendor CRDs; Istio ambient multi-cluster mesh landed as Alpha in Istio 1.27 (August 2025).
  - HashiCorp Consul evolved as the cross-runtime (VM + Kubernetes + bare metal) discovery layer: Consul 1.21 (8 May 2025) is an LTS release that simplified external-service discovery by dropping the Consul ESM agent requirement and added OpenShift 4.16/4.17 support, while Consul 1.22 (2026) added dual IPv4/IPv6 addressing and native multi-port service registration in the catalog and DNS.
  - Ownership consolidated when IBM completed its $6.4bn acquisition of HashiCorp on 27 February 2025 (after FTC and UK CMA clearance), folding Consul into IBM Software alongside Red Hat OpenShift; HashiCorp previewed "Project Infragraph" for agentic infrastructure automation in September 2025.
  - For the common all-Kubernetes single-region case the prevailing 2026 guidance is to stay with native Service + DNS (CoreDNS) and readiness probes, reserving Consul for mixed/multi-datacentre or SPIFFE-grade zero-trust identity needs, and treating direct etcd use as an anti-pattern.
  - Open challenges as of 2026 include production-grade multi-cluster ambient mesh (still largely single-cluster/Alpha), kernel-version and CNI-compatibility constraints for eBPF dataplanes, and reconciling identity-based discovery (SPIFFE/mTLS on every call) with the low-latency, high-cardinality churn of large fleets.

- ### References
  - 1. HashiCorp (2025). Consul 1.21 improves service discovery, Consul on Kubernetes, and supports OpenShift 4.17. https://www.hashicorp.com/en/blog/consul-1-21-service-discovery-consul-kubernetes-openshift-4-17
  - 2. HashiCorp / Consul Docs (2026). Consul v1.22.x Release Notes (IPv6 and multi-port service discovery). https://developer.hashicorp.com/consul/docs/release-notes/consul/v1_22_x
  - 3. Istio (2024). Fast, Secure, and Simple: Istio's Ambient Mode Reaches General Availability in v1.24. https://istio.io/latest/blog/2024/ambient-reaches-ga/
  - 4. Istio (2025). Istio Roadmap for 2025-2026 (multi-cluster ambient Alpha in 1.27, Gateway API to Stable). https://istio.io/latest/blog/2025/roadmap/
  - 5. IBM Newsroom (2025). IBM Completes Acquisition of HashiCorp, Creates Comprehensive, End-to-End Hybrid Cloud Platform. https://newsroom.ibm.com/2025-02-27-ibm-completes-acquisition-of-hashicorp,-creates-comprehensive,-end-to-end-hybrid-cloud-platform

- ### Provenance
  - sources:: RFC 6763 (DNS-SD), RFC 6762 (mDNS), HashiCorp Consul documentation, Kubernetes core DNS documentation, Netflix Eureka GitHub, CNCF Service Mesh Interface specification, Istio xDS control-plane documentation
  - updated:: 2026-06-13
