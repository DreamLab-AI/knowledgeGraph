public:: true

# Emergent Capabilities
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:emergent-capabilities",
  "@type": "Page",
  "vc:slug": "emergent-capabilities",
  "title": "Emergent Capabilities",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:emergent-capabilities",
  "@type": "Class",
  "label": "Emergent Capabilities",
  "definition": "Emergent Capabilities are abilities that appear in large language models at scale but are absent or near-random in smaller models, seemingly arising abruptly as parameters, data, or compute increase. Examples include multi-step reasoning, in-context learning, and instruction following. Their unpredictability complicates capability forecasting and is central to debates about scaling and AI safety.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:model-training", "label": "Model Training"}, {"@id": "urn:ngm:class:frontier-models", "label": "Frontier Models"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Emergent Capabilities are abilities that appear in large models at scale yet are absent in smaller ones, arising from [[Model Training]] at increasing scale. They are most pronounced in [[Frontier Models]] and complicate capability forecasting.
- ### Content
  - Capabilities such as chain-of-thought reasoning, in-context learning, and tool use often improve sharply past certain scale thresholds, though some apparent discontinuities depend on the metric used. Because emergence is hard to anticipate, it motivates careful evaluation and safety testing before deployment of larger models.
