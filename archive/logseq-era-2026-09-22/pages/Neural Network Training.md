public:: true

# Neural Network Training
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:neural-network-training",
  "@type": "Page",
  "vc:slug": "neural-network-training",
  "title": "Neural Network Training",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:neural-network-training",
  "@type": "Class",
  "label": "Neural Network Training",
  "definition": "Neural network training is the process of iteratively adjusting a model's weights to minimise a loss function over a dataset, typically using gradient descent with backpropagation. Each step computes the gradient of the loss with respect to parameters and updates them via an optimiser, repeating across many batches and epochs. Training quality depends on data, objective design, regularisation, and substantial parallel compute.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:machine-learning-discipline-technique", "label": "Machine Learning Technique"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:training-hardware", "label": "Training Hardware"},
      {"@id": "urn:ngm:class:generative-ai", "label": "Generative AI"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Neural network training adjusts model weights to minimise a loss via backpropagation and gradient descent. It is enabled by specialised [[Training Hardware]] and is required to build [[Generative AI]] systems.
- ### Content
  - Practical training combines an optimiser (such as Adam), learning-rate schedules, and regularisation (dropout, weight decay) to converge stably and generalise. Large models distribute computation across many accelerators using data, tensor, and pipeline parallelism, making memory bandwidth and interconnect performance as decisive as raw FLOPs.
