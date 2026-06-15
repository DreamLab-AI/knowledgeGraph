public:: true

# Graceful Degradation

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:graceful-degradation",
  "@type": "Page",
  "title": "Graceful Degradation",
  "vc:slug": "graceful-degradation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:graceful-degradation",
  "@type": "Class",
  "label": "Graceful Degradation",
  "definition": "Graceful degradation is a design property whereby a system continues to provide reduced but acceptable functionality when some of its components fail or operate under stress, rather than failing completely. It prioritises essential services, sheds non-critical load, and offers fallback behaviours so that partial failure does not cascade into total outage. It is a cornerstone of resilient, fault-tolerant infrastructure.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:reliability-engineering",
      "label": "Reliability Engineering"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:resilience",
        "label": "Resilience"
      },
      {
        "@id": "urn:ngm:class:fault-tolerance",
        "label": "Fault Tolerance"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:reliability-engineering",
        "label": "Reliability Engineering"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:circuit-breaker",
        "label": "Circuit Breaker"
      },
      {
        "@id": "urn:ngm:class:failover",
        "label": "Failover"
      },
      {
        "@id": "urn:ngm:class:redundancy",
        "label": "Redundancy"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:quality-of-service",
        "label": "Quality Of Service"
      },
      {
        "@id": "urn:ngm:class:user-experience",
        "label": "User Experience"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:monitoring",
        "label": "Monitoring"
      },
      {
        "@id": "urn:ngm:class:observability",
        "label": "Observability"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:chaos-engineering",
        "label": "Chaos Engineering"
      },
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:bandwidth-adaptation",
        "label": "Bandwidth Adaptation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:reliability",
        "label": "Reliability"
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
  - [[Graceful Degradation]] preserves essential function under partial failure, enabling [[Resilience]] and [[Fault Tolerance]] through [[Circuit Breaker]]s, [[Failover]] and [[Redundancy]] within [[Reliability Engineering]].
- ### Overview
  - Graceful degradation ensures that when a system loses capacity, resources, or dependencies, it continues to deliver its most important functions at a reduced level instead of failing outright. The design assumes that failure is inevitable and plans for it explicitly.
  - In [[Distributed Systems]] this means isolating failures, providing fallbacks, and degrading non-essential features first so that the user-facing service remains usable.
- ### Key aspects
  - Prioritisation of critical versus non-critical functionality.
  - Fallback paths, default responses, and cached or stale data.
  - Load shedding and admission control under overload.
  - Failure isolation to prevent cascading outages.
  - Continuous [[Monitoring]] and [[Observability]] to detect degradation.
- ### Mechanisms
  - [[Circuit Breaker]] patterns that trip on downstream failure.
  - Bulkheads isolating resource pools per dependency.
  - Timeouts, retries with backoff, and rate limiting.
  - Feature flags and adaptive [[Bandwidth Adaptation]] to scale quality down.
- ### Applications
  - Streaming services lowering quality rather than buffering to a stop.
  - E-commerce sites disabling recommendations to protect checkout.
  - Microservice meshes shedding non-essential calls under load.
  - Embedded and safety-critical systems entering safe limp-home modes.
- ### Relationships
  - enables:: [[Resilience]]
  - enables:: [[Fault Tolerance]]
  - partOf:: [[Reliability Engineering]]
  - uses:: [[Circuit Breaker]]
  - uses:: [[Failover]]
  - uses:: [[Redundancy]]
  - supports:: [[Quality Of Service]]
  - supports:: [[User Experience]]
  - requires:: [[Monitoring]]
  - requires:: [[Observability]]
  - relatedTo:: [[Chaos Engineering]]
  - relatedTo:: [[Distributed Systems]]
  - bridgesTo:: [[Bandwidth Adaptation]]
  - dependsOn:: [[Reliability]]
- ### Provenance
  - source:: GapMaterialisation
  - updated:: 2026-06-15
