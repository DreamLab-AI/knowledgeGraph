public:: true

# Model Collapse
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:model-collapse",
  "@type": "Page",
  "vc:slug": "model-collapse",
  "title": "Model Collapse",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:model-collapse",
  "@type": "Class",
  "label": "Model Collapse",
  "definition": "Model collapse is a degenerative process in which generative models trained recursively on their own (or other models') synthetic outputs progressively lose information about the true data distribution. Tails of the distribution disappear first, leading to reduced diversity, amplified biases, and eventual convergence on degenerate outputs. It is a key risk as AI-generated content increasingly contaminates web-scale training corpora.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:death-of-the-internet", "label": "Death of the Internet"},
      {"@id": "urn:ngm:class:feedback-loop", "label": "Feedback Loop"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Model collapse is the distributional degeneration that occurs when models train recursively on synthetic data, eroding rare modes and diversity. It is linked to the [[Death of the Internet]] thesis and is driven by a [[Feedback Loop]] of model-generated content.
- ### Content
  - Each generation of training on prior model outputs narrows the learned distribution, first dropping low-probability events then collapsing toward the mean, so accuracy and variety decay. Mitigations include preserving provenance, retaining a fraction of genuine human data, and watermarking or filtering synthetic content.
