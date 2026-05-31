public:: true

# Synchronisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:synchronisation",
  "@type": "Page",
  "vc:slug": "synchronisation",
  "title": "Synchronisation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:synchronisation",
  "@type": "Class",
  "label": "Synchronisation",
  "definition": "Synchronisation is the coordination of multiple processes, devices, or data replicas so that they reach a consistent state or act in a precise temporal relationship. In computing it covers concurrency primitives like locks and barriers; in distributed and robotic systems it covers clock alignment and coordinated motion. Accurate synchronisation is essential wherever independent components must agree on order, timing, or shared state.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:delta-robot", "label": "Delta Robot"},
      {"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Synchronisation coordinates independent processes, clocks, or replicas so they share consistent state or timing, a requirement for both coordinated actuation in a [[Delta Robot]] and consistency across [[Edge Computing]] nodes.
- ### Content
  - At the systems level, synchronisation uses primitives such as mutexes, semaphores, barriers, and consensus protocols to serialise access to shared state and order events. In real-time and robotic control it relies on tight clock alignment and deterministic communication so that actuators move in concert. Distributed deployments add the harder problem of agreeing on time and order across nodes that have no shared clock, addressed by protocols like NTP, PTP, and logical-clock schemes.
