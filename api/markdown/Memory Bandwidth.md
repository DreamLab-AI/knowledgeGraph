public:: true

# Memory Bandwidth
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:memory-bandwidth",
  "@type": "Page",
  "vc:slug": "memory-bandwidth",
  "title": "Memory Bandwidth",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:memory-bandwidth",
  "@type": "Class",
  "label": "Memory Bandwidth",
  "definition": "Memory bandwidth is the rate at which data can be read from or written to memory, typically measured in gigabytes per second. It is a primary performance constraint for data-intensive workloads such as deep-learning inference and real-time rendering, where compute units stall waiting for data. High-bandwidth memory technologies are deployed precisely to relieve this bottleneck on accelerators and edge hardware.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:hardware", "label": "Hardware"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:hardware-and-edge", "label": "Hardware and Edge"}, {"@id": "urn:ngm:class:rendering-pipeline", "label": "Rendering Pipeline"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Memory bandwidth is the throughput at which a processor can move data to and from memory. It is a defining constraint for [[Hardware and Edge]] AI accelerators and a limiting factor in the [[Rendering Pipeline]].
- ### Content
  - Many modern workloads are memory-bound rather than compute-bound, so techniques like operator fusion, quantisation, and on-chip caching aim to reduce memory traffic. High-bandwidth memory (HBM) stacks and wide buses raise the ceiling, but bandwidth per FLOP continues to shape the efficiency of AI and graphics systems.
