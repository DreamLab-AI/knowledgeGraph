public:: true

# Sparse Autoencoders
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:sparse-autoencoders",
  "@type": "Page",
  "vc:slug": "sparse-autoencoders",
  "title": "Sparse Autoencoders",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sparse-autoencoders",
  "@type": "Class",
  "label": "Sparse Autoencoders",
  "definition": "Sparse autoencoders are neural networks trained to reconstruct their input through a wide hidden layer subject to a sparsity penalty, so that only a small number of latent units activate for any given input. In mechanistic interpretability they are applied to the activations of large language models to decompose dense, polysemantic representations into more monosemantic, human-interpretable features. They have become a leading tool for understanding what concepts a model internally represents.",
  "domain": "ai",
  "maturity": "experimental",
  "subClassOf": [{"@id": "urn:ngm:class:neural-network", "label": "Neural Network"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:safety-and-alignment", "label": "Safety and alignment"},
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Sparse autoencoders are [[Neural Network]] models that reconstruct inputs through an over-complete hidden layer with a sparsity constraint, so only few latent units fire per input, yielding interpretable features.
- ### Content
  - Applied to the internal activations of large language models, they disentangle dense polysemantic representations into more monosemantic features that map onto human-understandable concepts. This makes them a central technique in [[Safety and Alignment]] research, where understanding and steering a model's internal representations is a prerequisite for reliable oversight and intervention.
