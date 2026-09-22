public:: true

# Inference Optimisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-inference-optimisation",
  "@type": "Page",
  "vc:slug": "inference-optimisation",
  "title": "Inference Optimisation",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:inference-optimisation",
  "@type": "Class",
  "label": "Inference Optimisation",
  "definition": "Inference Optimisation encompasses techniques and processes for reducing the computational cost, latency, and memory footprint of deploying trained machine learning models at runtime. Methods include quantisation, pruning, knowledge distillation, and hardware-specific kernel fusion. The goal is to make model inference faster and more efficient without significantly degrading predictive accuracy.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:ai-technique", "label": "AI Technique"}
  ],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:model-compression", "label": "Model Compression"}]
  },
  "quality": 0.7
}
```

- ### Definition
  - Inference Optimisation refers to the set of techniques used to reduce the latency, memory usage, and computational cost of running trained AI models in production environments.
