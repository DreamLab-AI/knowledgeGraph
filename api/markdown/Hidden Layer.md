public:: true

# Hidden Layer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:hidden-layer",
  "@type": "Page",
  "vc:slug": "hidden-layer",
  "title": "Hidden Layer",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hidden-layer",
  "@type": "Class",
  "label": "Hidden Layer",
  "definition": "A hidden layer is an intermediate layer of neurons in a neural network situated between the input and output layers, whose activations are not directly observed. Each hidden layer applies a learned linear transformation followed by a non-linear activation, building increasingly abstract feature representations. Stacking multiple hidden layers is what gives deep networks their representational power.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:neural-network", "label": "Neural Network"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:feed-forward-network", "label": "Feed-Forward Network"},
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A hidden layer is an internal computational layer of a neural network; it is a component of a [[Feed-Forward Network]] and the defining building block of [[Deep Learning]] depth.
- ### Content
  - Each hidden unit computes a weighted sum of its inputs plus a bias, passed through a non-linearity such as ReLU, enabling the network to model non-linear functions. The number and width of hidden layers control capacity, with deeper stacks learning hierarchical features but requiring careful initialisation, normalisation, and regularisation to train stably.
