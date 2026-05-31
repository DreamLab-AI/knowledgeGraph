public:: true

# FSDP
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fsdp",
  "@type": "Page",
  "vc:slug": "fsdp",
  "title": "FSDP",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:fsdp",
  "@type": "Class",
  "label": "FSDP",
  "definition": "Fully Sharded Data Parallel (FSDP) is a distributed training technique that shards a model's parameters, gradients, and optimizer states across multiple GPUs to train models too large for a single device's memory. Each worker holds only a fraction of the state and gathers parameters on demand during the forward and backward passes. FSDP underpins memory-efficient training and checkpointing of large neural networks.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-infrastructure", "label": "AI Infrastructure"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:checkpoints", "label": "Checkpoints"}, {"@id": "urn:ngm:class:distributed-computing", "label": "Distributed Computing"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - FSDP (Fully Sharded Data Parallel) shards model state across GPUs to enable large-model training, and it implements sharded [[Checkpoints]] that save and restore each worker's parameter slice.
- ### Content
  - By sharding parameters, gradients, and optimizer state, FSDP cuts per-device memory roughly in proportion to the number of workers, enabling models with billions of parameters. It overlaps communication with computation via all-gather and reduce-scatter collectives. Checkpointing requires careful coordination so that sharded state can be reassembled or resharded across different cluster topologies.
