public:: true

# Envoy Proxy

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:envoy-proxy",
  "@type": "Page",
  "title": "Envoy Proxy",
  "vc:slug": "envoy-proxy",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:envoy-proxy",
  "@type": "Class",
  "label": "Envoy Proxy",
  "definition": "Envoy is a high-performance, open-source edge and service proxy designed for cloud-native applications, originally built at Lyft and graduated under the CNCF. It provides L3/L4 and L7 traffic management, dynamic configuration via the xDS APIs, observability, and resilience features such as retries, circuit breaking, and rate limiting. Envoy is the default data plane for many service meshes, where it runs as a sidecar alongside each workload.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:reverse-proxy",
      "label": "Reverse Proxy"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:service-mesh",
        "label": "Service Mesh"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:circuit-breaker",
        "label": "Circuit Breaker"
      },
      {
        "@id": "urn:ngm:class:rate-limiting",
        "label": "Rate Limiting"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:http",
        "label": "HTTP"
      },
      {
        "@id": "urn:ngm:class:mutual-tls",
        "label": "Mutual TLS"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:traffic-management",
        "label": "Traffic Management"
      },
      {
        "@id": "urn:ngm:class:load-balancing",
        "label": "Load Balancing"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:observability",
        "label": "Observability"
      },
      {
        "@id": "urn:ngm:class:telemetry",
        "label": "Telemetry"
      },
      {
        "@id": "urn:ngm:class:api-gateway",
        "label": "API Gateway"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:reverse-proxy",
        "label": "Reverse Proxy"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:cncf",
        "label": "Cloud Native Computing Foundation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:kubernetes",
        "label": "Kubernetes"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:microservices",
        "label": "Microservices"
      },
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Service Mesh]]
  - [[Reverse Proxy]]
  - [[Load Balancing]]
  - [[API Gateway]]
  - [[CNCF]]
- ### Overview
  - Acts as a uniform, programmable network substrate so applications stay oblivious to networking concerns.
  - Configured dynamically through the xDS protocol, allowing control planes to push routes and policy at runtime.
  - Pervasive as a sidecar data plane, decoupling resilience and security from business logic.
- ### Key aspects
  - L7-aware routing for HTTP, gRPC, and TCP with rich matching and transformation.
  - Resilience primitives including retries, timeouts, circuit breaking, and outlier detection.
  - Built-in observability via structured logs, metrics, and distributed tracing.
  - Dynamic xDS configuration for clusters, listeners, routes, and endpoints.
  - Mutual-TLS termination and origination for zero-trust service communication.
- ### Applications
  - Sidecar data plane in service meshes such as Istio and Consul.
  - Edge and ingress gateways fronting microservice fleets.
  - API gateways enforcing authentication, rate limiting, and routing.
  - Traffic shifting for canary and blue-green deployments.
- ### Relationships
  - partOf:: [[Service Mesh]]
  - hasPart:: [[Circuit Breaker]]
  - hasPart:: [[Rate Limiting]]
  - uses:: [[HTTP]]
  - uses:: [[Mutual TLS]]
  - enables:: [[Traffic Management]]
  - enables:: [[Load Balancing]]
  - supports:: [[Observability]]
  - supports:: [[Telemetry]]
  - supports:: [[API Gateway]]
  - implements:: [[Reverse Proxy]]
  - standardizedBy:: [[Cloud Native Computing Foundation]]
  - dependsOn:: [[Kubernetes]]
  - relatedTo:: [[Microservices]]
  - relatedTo:: [[Infrastructure]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
