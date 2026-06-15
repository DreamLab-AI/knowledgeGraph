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
    "hasPart": [
      {"@id": "urn:ngm:class:memory-bus", "label": "Memory Bus"},
      {"@id": "urn:ngm:class:memory-channel", "label": "Memory Channel"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:hardware", "label": "Hardware"},
      {"@id": "urn:ngm:class:memory-hierarchy", "label": "Memory Hierarchy"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:high-bandwidth-memory", "label": "High Bandwidth Memory"},
      {"@id": "urn:ngm:class:memory-controller", "label": "Memory Controller"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:gpu-accelerated-computing", "label": "GPU Accelerated Computing"},
      {"@id": "urn:ngm:class:real-time-rendering", "label": "Real-Time Rendering"},
      {"@id": "urn:ngm:class:deep-learning-inference", "label": "Deep Learning Inference"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:dram", "label": "DRAM"},
      {"@id": "urn:ngm:class:cache-memory", "label": "Cache Memory"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:ddr-memory", "label": "DDR Memory"},
      {"@id": "urn:ngm:class:interconnect", "label": "Interconnect"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:neural-network-training", "label": "Neural Network Training"},
      {"@id": "urn:ngm:class:rendering-pipeline", "label": "Rendering Pipeline"},
      {"@id": "urn:ngm:class:hardware-and-edge", "label": "Hardware and Edge"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:compute-throughput", "label": "Compute Throughput"},
      {"@id": "urn:ngm:class:memory-latency", "label": "Memory Latency"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:spatial-computing", "label": "Spatial Computing"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:hardware-and-edge", "label": "Hardware and Edge"},
      {"@id": "urn:ngm:class:rendering-pipeline", "label": "Rendering Pipeline"},
      {"@id": "urn:ngm:class:operator-fusion", "label": "Operator Fusion"},
      {"@id": "urn:ngm:class:quantisation", "label": "Quantisation"},
      {"@id": "urn:ngm:class:on-chip-caching", "label": "On-Chip Caching"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:memory-throughput", "label": "Memory Throughput"}
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - Memory bandwidth is the throughput at which a processor can move data to and from memory. It is a defining constraint for [[Hardware and Edge]] AI accelerators and a limiting factor in the [[Rendering Pipeline]].
- ### Content
  - Many modern workloads are memory-bound rather than compute-bound, so techniques like operator fusion, quantisation, and on-chip caching aim to reduce memory traffic. High-bandwidth memory (HBM) stacks and wide buses raise the ceiling, but bandwidth per FLOP continues to shape the efficiency of AI and graphics systems.
