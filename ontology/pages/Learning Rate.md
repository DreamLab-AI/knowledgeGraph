public:: true

# Learning Rate

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:learning-rate", "@type":"Page", "title":"Learning Rate", "vc:slug":"learning-rate", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:learning-rate",
  "@type":"Class",
  "label":"Learning Rate",
  "definition":"The learning rate is a hyperparameter in gradient-based optimisation that scales the size of each parameter update applied in the direction of the negative gradient. It governs the trade-off between the speed of convergence and the stability of training: too large a value can cause divergence or oscillation, while too small a value leads to slow progress or stalling in poor regions. It is one of the most consequential settings when training neural networks and is often varied over the course of training by a schedule or adapted per parameter.",
  "domain":"machine-learning",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:hyperparameter","label":"Hyperparameter"}],
  "relations":{
    "requires":[{"@id":"urn:ngm:class:gradient-descent","label":"Gradient Descent"}],
    "relatedTo":[{"@id":"urn:ngm:class:hyperparameter","label":"Hyperparameter"},{"@id":"urn:ngm:class:convergence","label":"Convergence"},{"@id":"urn:ngm:class:loss-function","label":"Loss Function"}],
    "uses":[{"@id":"urn:ngm:class:learning-rate-schedule","label":"Learning Rate Schedule"}],
    "enables":[{"@id":"urn:ngm:class:convergence","label":"Convergence"}],
    "dependsOn":[{"@id":"urn:ngm:class:optimiser","label":"Optimiser"}],
    "supports":[{"@id":"urn:ngm:class:neural-network-training","label":"Neural Network Training"}],
    "implements":[{"@id":"urn:ngm:class:hyperparameter-tuning","label":"Hyperparameter Tuning"}],
    "partOf":[{"@id":"urn:ngm:class:gradient-descent","label":"Gradient Descent"}],
    "bridgesTo":[{"@id":"urn:ngm:class:adam-optimiser","label":"Adam Optimiser"}],
    "contrastsWith":[{"@id":"urn:ngm:class:stochastic-gradient-descent","label":"Stochastic Gradient Descent"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- The learning rate is a [[Hyperparameter]] that scales each parameter update in [[Gradient Descent]]. It controls the balance between convergence speed and stability during [[Neural Network Training]], and is often adjusted by a [[Learning Rate Schedule]] or adapted by the [[Optimiser]].
- ### Overview
- In gradient-based training, parameters move opposite to the gradient of the loss; the learning rate sets how far they move at each step.
- An appropriate value lets the loss decrease steadily towards a good minimum, whereas an inappropriate one causes either divergence or impractically slow progress.
- Because the ideal value depends on the model, data, and optimiser, it is typically searched for and often changed during training.
- ### Key aspects
- A value that is too high can overshoot minima, oscillate, or diverge entirely.
- A value that is too low wastes computation and may stall in flat or poor regions.
- Schedules such as warm-up, step decay, and cosine annealing vary the rate over training.
- Adaptive optimisers adjust an effective per-parameter rate from gradient statistics.
- ### Applications
- Training deep neural networks across vision, language, and other domains.
- Fine-tuning pretrained models, where small rates preserve learned features.
- Hyperparameter searches and learning-rate range tests to find good settings.
- Stabilising large-batch and distributed training regimes.
- ### Relationships
- requires:: [[Gradient Descent]]
- relatedTo:: [[Hyperparameter]]
- relatedTo:: [[Convergence]]
- relatedTo:: [[Loss Function]]
- uses:: [[Learning Rate Schedule]]
- enables:: [[Convergence]]
- dependsOn:: [[Optimiser]]
- supports:: [[Neural Network Training]]
- implements:: [[Hyperparameter Tuning]]
- partOf:: [[Gradient Descent]]
- bridgesTo:: [[Adam Optimiser]]
- ### Provenance
- updated:: 2026-06-15
