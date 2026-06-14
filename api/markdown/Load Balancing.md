public:: true

# Load Balancing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:load-balancing",
  "@type": "Page",
  "vc:slug": "load-balancing",
  "title": "Load Balancing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:load-balancing",
  "@type": "Class",
  "label": "Load Balancing",
  "definition": "Load balancing is the distribution of incoming work across multiple compute resources to maximise throughput, minimise latency, and avoid overloading any single node. It operates at network layers from L4 transport to L7 application routing, using algorithms such as round-robin, least-connections, and consistent hashing. Health checking and failover make it foundational to scalable, resilient distributed systems.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:health-check", "label": "Health Check"},
      {"@id": "urn:ngm:class:connection-draining", "label": "Connection Draining"},
      {"@id": "urn:ngm:class:load-balancing-algorithm", "label": "Load Balancing Algorithm"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:distributed-architecture", "label": "Distributed Architecture"},
      {"@id": "urn:ngm:class:service-mesh", "label": "Service Mesh"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:network-infrastructure", "label": "Network Infrastructure"},
      {"@id": "urn:ngm:class:health-monitoring", "label": "Health Monitoring"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:horizontal-scaling", "label": "Horizontal Scaling"},
      {"@id": "urn:ngm:class:high-availability", "label": "High Availability"},
      {"@id": "urn:ngm:class:fault-tolerance", "label": "Fault Tolerance"},
      {"@id": "urn:ngm:class:zero-downtime-deployment", "label": "Zero Downtime Deployment"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:dns", "label": "DNS"},
      {"@id": "urn:ngm:class:reverse-proxy", "label": "Reverse Proxy"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:round-robin-scheduling", "label": "Round-Robin Scheduling"},
      {"@id": "urn:ngm:class:consistent-hashing", "label": "Consistent Hashing"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:ssl-termination", "label": "SSL Termination"},
      {"@id": "urn:ngm:class:session-persistence", "label": "Session Persistence"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:microservices-architecture", "label": "Microservices Architecture"},
      {"@id": "urn:ngm:class:content-delivery-network", "label": "Content Delivery Network"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:single-point-of-failure", "label": "Single Point of Failure"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:federated-learning", "label": "Federated Learning"},
      {"@id": "urn:ngm:class:distributed-inference", "label": "Distributed Inference"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:auto-scaling", "label": "Auto Scaling"},
      {"@id": "urn:ngm:class:traffic-management", "label": "Traffic Management"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:network-load-balancing", "label": "Network Load Balancing"},
    {"@id": "urn:ngm:class:request-distribution", "label": "Request Distribution"}
  ],
  "quality": 0.73,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - Load balancing spreads work across resources to maximise throughput and resilience; it is a service used by a [[Service Mesh]] and a structural part of any [[Distributed Architecture]].
- ### Content
  - L4 balancers route by IP and port while L7 balancers inspect application data to make content-aware decisions. Combined with active health checks and connection draining, load balancing enables horizontal scaling and graceful handling of node failures without client disruption.
