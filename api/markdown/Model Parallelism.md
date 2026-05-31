public:: true

# Model Parallelism
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:model-parallelism",
  "@type": "Page",
  "vc:slug": "model-parallelism",
  "title": "Model Parallelism",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:model-parallelism",
  "@type": "Class",
  "label": "Model Parallelism",
  "definition": "Model parallelism is a distributed training strategy that splits a single neural network's parameters and computation across multiple accelerators when the model is too large to fit in one device's memory. Variants include tensor parallelism (splitting within layers) and pipeline parallelism (splitting across layers into stages). It is essential for training large language models and is often combined with data parallelism.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-infrastructure", "label": "AI Infrastructure"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:deep-speed", "label": "DeepSpeed"},
      {"@id": "urn:ngm:class:compute-infrastructure", "label": "Compute Infrastructure"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Model parallelism splits one large network's parameters and compute across multiple accelerators that cannot individually hold it. Frameworks like [[DeepSpeed]] implement it atop [[Compute Infrastructure]].
- ### Content
  - Tensor parallelism partitions matrix multiplications across devices within a layer, while pipeline parallelism assigns consecutive layers to different devices and overlaps micro-batches to hide bubbles. Communication overhead and load balancing are the central trade-offs, motivating hybrid 3D strategies combining tensor, pipeline, and data parallelism.
