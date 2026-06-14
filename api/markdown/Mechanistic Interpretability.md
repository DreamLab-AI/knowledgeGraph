public:: true

# Mechanistic Interpretability
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:mechanistic-interpretability",
  "@type": "Page",
  "vc:slug": "mechanistic-interpretability",
  "title": "Mechanistic Interpretability",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mechanistic-interpretability",
  "@type": "Class",
  "label": "Mechanistic Interpretability",
  "definition": "Mechanistic interpretability is a research area that seeks to reverse-engineer the internal computations of neural networks into human-understandable algorithms. It studies features, circuits, and representations within model weights and activations to explain how specific behaviours arise. The field aims to make models transparent enough to predict, audit, and align, supporting AI safety.",
  "domain": "ai",
  "maturity": "experimental",
  "subClassOf": [{"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:safety-and-alignment", "label": "Safety and alignment"}, {"@id": "urn:ngm:class:ai-risks", "label": "AI Risks"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Mechanistic interpretability reverse-engineers neural networks into legible internal algorithms by analysing features and circuits. It is a component of [[Safety and Alignment]] research and a tool for diagnosing [[AI Risks]].
- ### Content
  - Techniques include activation patching, sparse autoencoders for feature disentanglement, and circuit analysis that traces how attention heads and MLP layers compose to implement a task. The goal is faithful, causal explanations rather than post-hoc rationalisations, enabling auditing of deception, capability, and failure modes in frontier models.
