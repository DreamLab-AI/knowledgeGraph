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
    "relatedTo": [{"@id": "urn:ngm:class:service-mesh", "label": "Service Mesh"}, {"@id": "urn:ngm:class:distributed-architecture", "label": "Distributed Architecture"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Load balancing spreads work across resources to maximise throughput and resilience; it is a service used by a [[Service Mesh]] and a structural part of any [[Distributed Architecture]].
- ### Content
  - L4 balancers route by IP and port while L7 balancers inspect application data to make content-aware decisions. Combined with active health checks and connection draining, load balancing enables horizontal scaling and graceful handling of node failures without client disruption.
