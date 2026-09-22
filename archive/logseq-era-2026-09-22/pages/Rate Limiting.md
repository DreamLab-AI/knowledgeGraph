public:: true

# Rate Limiting

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:rate-limiting",
  "@type": "Page",
  "title": "Rate Limiting",
  "vc:slug": "rate-limiting",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:rate-limiting",
  "@type": "Class",
  "label": "Rate Limiting",
  "definition": "Rate limiting is a traffic-management technique that controls the number of requests a client may make to a service within a defined time window, rejecting or queuing excess requests. It protects backend resources from overload, enforces fair usage and quota policies, and mitigates abuse such as brute-force and denial-of-service attacks. Commonly implemented at API gateways using token-bucket or sliding-window algorithms, it is a core mechanism for the resilience and stability of networked systems.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infrastructure",
      "label": "Infrastructure"
    },
    {
      "@id": "urn:ngm:class:network-infrastructure",
      "label": "Network Infrastructure"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:scalability",
        "label": "Scalability"
      },
      {
        "@id": "urn:ngm:class:resilience",
        "label": "Resilience"
      },
      {
        "@id": "urn:ngm:class:fault-tolerance",
        "label": "Fault Tolerance"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:caching",
        "label": "Caching"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:api-gateway",
        "label": "API Gateway"
      },
      {
        "@id": "urn:ngm:class:api-management",
        "label": "API Management"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:load-balancing",
        "label": "Load Balancing"
      },
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:microservices",
        "label": "Microservices"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:security",
        "label": "Security"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:api",
        "label": "API"
      },
      {
        "@id": "urn:ngm:class:caching",
        "label": "Caching"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:api-gateway",
        "label": "API Gateway"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:api-management",
        "label": "API Management"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:service-mesh",
        "label": "Service Mesh"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:load-balancing",
        "label": "Load Balancing"
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
- [[Rate Limiting]] caps how many requests a client can make to a service within a time window, shedding or queuing the excess. It is enforced at the [[API Gateway]] and within [[API Management]] to protect resources and uphold [[Resilience]] and [[Security]].
- ### Overview
- Rate limiting transforms an unbounded stream of incoming requests into a controlled flow that backend services can sustain, trading a small fraction of rejected traffic for overall stability.
- Algorithms differ in how they account for time. Token-bucket and leaky-bucket smooth bursts, while fixed- and sliding-window counters give precise per-interval ceilings. The choice trades burst tolerance against accuracy.
- Limits are typically scoped per client, per API key, or per endpoint, and are paired with informative responses so well-behaved callers can back off and retry, supporting graceful [[Fault Tolerance]].
- ### Mechanisms
- Token bucket: tokens refill at a fixed rate and each request consumes one, permitting controlled bursts.
- Sliding window: request timestamps within a moving interval are counted for precise enforcement.
- Distributed counters: shared state, often in a cache, coordinates limits across [[Microservices]] replicas.
- Response signalling: status codes and retry hints let clients adapt, complementing [[Load Balancing]].
- ### Applications
- Protecting public APIs through an [[API Gateway]] from overload and scraping.
- Enforcing tiered quotas in [[API Management]] for monetised access.
- Mitigating brute-force and denial-of-service abuse as a [[Security]] control.
- Preserving [[Scalability]] of shared backend services under spiky demand.
- ### Relationships
- partOf:: [[Infrastructure]]
- enables:: [[Scalability]]
- enables:: [[Resilience]]
- enables:: [[Fault Tolerance]]
- hasPart:: [[Caching]]
- implements:: [[API Gateway]]
- implements:: [[API Management]]
- relatedTo:: [[Load Balancing]]
- relatedTo:: [[Authentication]]
- relatedTo:: [[Microservices]]
- supports:: [[Security]]
- uses:: [[API]]
- uses:: [[Caching]]
- requires:: [[API Gateway]]
- dependsOn:: [[API Management]]
- bridgesTo:: [[Service Mesh]]
- contrastsWith:: [[Load Balancing]]
- ### Provenance
- updated:: 2026-06-15
