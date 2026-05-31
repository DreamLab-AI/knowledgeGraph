public:: true

# Safety Filter
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:safety-filter",
  "@type": "Page",
  "vc:slug": "safety-filter",
  "title": "Safety Filter",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:safety-filter",
  "@type": "Class",
  "label": "Safety Filter",
  "definition": "A safety filter is a content-moderation component placed around a generative AI model that screens inputs and outputs to block disallowed, harmful, or policy-violating content. It typically combines classifiers, keyword and pattern rules, and policy thresholds to detect unsafe prompts or generations and refuse, redact, or regenerate them. It is a core safeguard in deployed image and conversational AI products.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:ai-companions", "label": "AI Companions"}, {"@id": "urn:ngm:class:proprietary-image-generation", "label": "Proprietary Image Generation"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A safety filter screens generative-AI inputs and outputs to block harmful content, a safeguard component of [[AI Companions]] and [[Proprietary Image Generation]] systems.
- ### Content
  - Filters apply classifiers and policy rules at prompt and output stages, refusing or sanitising violations before content reaches users. Tuning thresholds trades off over-blocking against missed harms, and layered filters provide defence in depth around the base model.
