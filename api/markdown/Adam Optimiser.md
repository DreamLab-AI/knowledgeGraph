public:: true

# adam optimiser
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:107125ffbb1f2fa798fc80d3d0788eb03a95916a95d482dcc5f3771f94df9a83",
  "@type": "Page",
  "vc:slug": "adam-optimiser",
  "title": "adam optimiser",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:adam-optimiser",
  "@type": "Class",
  "label": "Adam Optimiser",
  "definition": "The Adam optimiser (Adaptive Moment Estimation) is a first-order gradient-based optimisation algorithm that maintains exponentially decaying moving averages of both past gradients (first moment) and past squared gradients (second moment) to compute per-parameter adaptive learning rates. It combines the advantages of momentum-based optimisation and the RMSProp algorithm, making it robust to sparse gradients and non-stationary objectives. Adam is the de-facto default optimiser for training transformer-based large language models and deep neural networks across most domains.",
  "domain": "artificial-intelligence",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:gradient-descent", "label": "Gradient Descent"},
      {"@id": "urn:ngm:class:backpropagation", "label": "Backpropagation"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:model-training", "label": "Model Training"},
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:loss-function", "label": "Loss Function"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - The Adam optimiser (Adaptive Moment Estimation) is a first-order gradient-based optimisation algorithm that maintains exponentially decaying moving averages of both past gradients (first moment) and past squared gradients (second moment) to compute per-parameter adaptive learning rates. It combines the advantages of momentum-based optimisation and the RMSProp algorithm, making it robust to sparse gradients and non-stationary objectives. Adam is the de-facto default optimiser for training transformer-based large language models and deep neural networks across most domains.

- ### Semantic Classification
  - owl-class:: adam-optimiser:Adam Optimiser
  - owl-role:: Concept

- ### Relationships
  - requires [[Gradient Descent]]
  - requires [[Backpropagation]]
  - enables [[Model Training]]
  - enables [[Deep Learning]]
  - relatedTo [[Loss Function]]

- ### Content
  - Adam was introduced to address the shortcomings of plain stochastic gradient descent and its variants. The algorithm tracks two moment estimates: the first moment vector (mean of gradients) and the second moment vector (uncentred variance of gradients), both initialised at zero and subject to bias correction during early training iterations to prevent systematic underestimation.
  - Two key hyperparameters — β₁ (typically 0.9) controlling momentum decay and β₂ (typically 0.999) controlling the squared-gradient decay — govern the balance between exploiting recent gradient information and smoothing over historical noise. The effective learning rate for each parameter is scaled inversely by the square root of the second moment, meaning parameters with consistently large gradients receive smaller updates and vice versa, which aids convergence in saddle-point-rich loss landscapes.
  - Variants such as AdamW (weight decay decoupled from the gradient update), AdaFactor (memory-efficient for large embedding tables), and Lion (EvoLved Sign Momentum) have since emerged to address known weaknesses including Adam's tendency to generalise poorly versus SGD with momentum on some image classification benchmarks. Despite this, Adam and AdamW remain dominant for transformer pre-training and fine-tuning pipelines.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
