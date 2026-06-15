public:: true

# Latency Optimisation

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:latency-optimisation",
  "@type": "Page",
  "title": "Latency Optimisation",
  "vc:slug": "latency-optimisation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:latency-optimisation",
  "@type": "Class",
  "label": "Latency Optimisation",
  "definition": "Latency optimisation is the set of techniques used to minimise the time between a request and its corresponding response in networked and distributed systems. It targets propagation, processing, queueing, and serialisation delays through measures such as edge placement, caching, protocol tuning, and concurrency. Low latency is critical for real-time communication, interactive collaboration, and responsive user experiences.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:distributed-collaboration",
      "label": "Distributed Collaboration"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:latency",
        "label": "Latency"
      },
      {
        "@id": "urn:ngm:class:network-latency",
        "label": "Network Latency"
      },
      {
        "@id": "urn:ngm:class:throughput",
        "label": "Throughput"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      },
      {
        "@id": "urn:ngm:class:content-delivery-network",
        "label": "Content Delivery Network"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:caching",
        "label": "Caching"
      },
      {
        "@id": "urn:ngm:class:cdn",
        "label": "CDN"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:real-time-communication",
        "label": "Real-Time Communication"
      },
      {
        "@id": "urn:ngm:class:real-time",
        "label": "Real Time"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:user-experience",
        "label": "User Experience"
      },
      {
        "@id": "urn:ngm:class:quality-of-service",
        "label": "Quality Of Service"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:distributed-collaboration",
        "label": "Distributed Collaboration"
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
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:bandwidth-adaptation",
        "label": "Bandwidth Adaptation"
      },
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
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
  - [[Latency Optimisation]] minimises request-response delay using [[Edge Computing]], [[Caching]] and [[Content Delivery Network]]s to enable [[Real-Time Communication]] within [[Distributed Collaboration]].
- ### Overview
  - Latency optimisation reduces the end-to-end delay experienced by users and services. Total latency is the sum of propagation delay (limited by distance and the speed of light), transmission delay, queueing delay, and processing delay; effective optimisation attacks each component.
  - In collaborative and real-time systems, even tens of milliseconds materially affect perceived responsiveness, making latency a first-class engineering concern alongside [[Throughput]] and correctness.
- ### Key aspects
  - Decomposition of latency into propagation, transmission, queueing, and processing.
  - Proximity strategies: [[Edge Computing]] and geo-distribution.
  - Caching at multiple tiers to avoid repeated work and round trips.
  - Protocol tuning: connection reuse, multiplexing, and reduced handshakes.
  - Tail latency (p99) management versus average latency.
- ### Mechanisms
  - [[Content Delivery Network]] edge nodes serving content near users.
  - [[Caching]] of computed results and static assets.
  - Asynchronous and pipelined processing to hide round-trip time.
  - Adaptive [[Bandwidth Adaptation]] and prefetching for interactive media.
- ### Applications
  - Real-time video conferencing and collaborative editing.
  - Interactive web applications and low-latency APIs.
  - Online gaming and cloud-rendered experiences.
  - Financial trading and other time-sensitive [[Distributed Systems]].
- ### Relationships
  - relatedTo:: [[Latency]]
  - relatedTo:: [[Network Latency]]
  - relatedTo:: [[Throughput]]
  - dependsOn:: [[Edge Computing]]
  - dependsOn:: [[Content Delivery Network]]
  - uses:: [[Caching]]
  - uses:: [[CDN]]
  - enables:: [[Real-Time Communication]]
  - enables:: [[Real Time]]
  - supports:: [[User Experience]]
  - supports:: [[Quality Of Service]]
  - partOf:: [[Distributed Collaboration]]
  - requires:: [[Monitoring]]
  - requires:: [[Observability]]
  - bridgesTo:: [[Bandwidth Adaptation]]
  - bridgesTo:: [[Distributed Systems]]
- ### Provenance
  - source:: GapMaterialisation
  - updated:: 2026-06-15
