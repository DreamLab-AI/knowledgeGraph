public:: true

# Reasoning Models
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:reasoning-models",
  "@type": "Page",
  "vc:slug": "reasoning-models",
  "title": "Reasoning Models",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:reasoning-models",
  "@type": "Class",
  "label": "Reasoning Models",
  "definition": "Reasoning models are large language models trained or post-trained to generate extended intermediate chains of thought before producing a final answer, trading inference-time compute for higher accuracy on complex tasks. They are typically optimised with reinforcement learning on verifiable problems in mathematics, coding, and logic. By spending more tokens deliberating, they outperform standard models on multi-step problems where single-pass generation fails.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:frontier-models", "label": "Frontier Models"},
      {"@id": "urn:ngm:class:prime-intellect", "label": "Prime Intellect"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Reasoning models are [[Large Language Models]] that produce explicit intermediate reasoning before answering, spending inference-time compute to improve accuracy and underpinning many [[Frontier Models]].
- ### Content
  - These models are usually trained with reinforcement learning against checkable rewards, learning to plan, self-check, and backtrack within a long chain of thought. The approach excels on mathematics, competitive coding, and scientific reasoning, at the cost of higher latency and token consumption per query.
