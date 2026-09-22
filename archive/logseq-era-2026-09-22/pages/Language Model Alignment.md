public:: true

# Language Model Alignment
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:language-model-alignment",
  "@type": "Page",
  "vc:slug": "language-model-alignment",
  "title": "Language Model Alignment",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:language-model-alignment",
  "@type": "Class",
  "label": "Language Model Alignment",
  "definition": "Language model alignment is the set of techniques used to make a language model's behaviour conform to human intentions, values and safety constraints. It typically follows pretraining with supervised fine-tuning and preference-based optimisation so that outputs are helpful, honest and harmless. Methods include reinforcement learning from human feedback and direct preference optimization.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:direct-preference-optimisation", "label": "Direct Preference Optimization"},
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Language model alignment is an [[AI Safety]] discipline that shapes model behaviour toward human intent; [[Direct Preference Optimisation]] is a key alignment method, and alignment is central to deploying [[Large Language Models]] responsibly.
- ### Content
  - The dominant pipeline combines instruction tuning with preference optimisation derived from human or AI feedback, optionally augmented by constitutional rules and red-teaming. Alignment addresses both capability shaping (following instructions) and safety (refusing harmful requests, avoiding deception), and remains an active research frontier as models grow more capable.
