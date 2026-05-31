public:: true

# Distributed AI Training
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:distributed-ai-training",
  "@type": "Page",
  "vc:slug": "distributed-ai-training",
  "title": "Distributed AI Training",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:distributed-ai-training",
  "@type": "Class",
  "label": "Distributed AI Training",
  "definition": "Distributed AI training is the practice of training machine-learning models across many compute nodes in parallel to handle datasets and model sizes that exceed a single machine. It uses strategies such as data parallelism, model and tensor parallelism, and pipeline parallelism, coordinated by collective communication and gradient synchronisation. It is essential for training large neural networks within feasible time and memory budgets.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-infrastructure", "label": "AI Infrastructure"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:distributed-computing", "label": "Distributed Computing"},
      {"@id": "urn:ngm:class:di-lo-co", "label": "DiLoCo"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Distributed AI training spreads model training across multiple nodes and accelerators to scale beyond single-machine limits. It is enabled by [[Distributed Computing]] infrastructure and includes low-communication methods such as [[DiLoCo]].
- ### Content
  - Data parallelism replicates the model and averages gradients (e.g. via all-reduce), while tensor and pipeline parallelism shard the model itself across devices. Throughput is bounded by interconnect bandwidth and synchronisation overhead, motivating techniques like gradient compression, ZeRO sharding, and asynchronous or low-frequency communication for geographically distributed clusters.
