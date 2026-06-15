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
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:model-training", "label": "Model Training"},
      {"@id": "urn:ngm:class:frontier-models", "label": "Frontier Models"},
      {"@id": "urn:ngm:class:scaling-laws", "label": "Scaling Laws"},
      {"@id": "urn:ngm:class:capability-evaluation", "label": "Capability Evaluation"},
      {"@id": "urn:ngm:class:phase-transition", "label": "Phase Transition"},
      {"@id": "urn:ngm:class:grokking", "label": "Grokking"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:large-scale-pretraining", "label": "Large-Scale Pretraining"},
      {"@id": "urn:ngm:class:compute-resources", "label": "Compute Resources"},
      {"@id": "urn:ngm:class:training-data", "label": "Training Data"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:chain-of-thought-reasoning", "label": "Chain-of-Thought Reasoning"},
      {"@id": "urn:ngm:class:in-context-learning", "label": "In-Context Learning"},
      {"@id": "urn:ngm:class:instruction-following", "label": "Instruction Following"},
      {"@id": "urn:ngm:class:tool-use", "label": "Tool Use"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:model-scale", "label": "Model Scale"},
      {"@id": "urn:ngm:class:transformer-architecture", "label": "Transformer Architecture"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:predictable-scaling", "label": "Predictable Scaling"},
      {"@id": "urn:ngm:class:narrow-ai", "label": "Narrow AI"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"},
      {"@id": "urn:ngm:class:capability-forecasting", "label": "Capability Forecasting"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:artificial-general-intelligence", "label": "Artificial General Intelligence"},
      {"@id": "urn:ngm:class:robotics", "label": "Robotics"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:emergent-abilities", "label": "Emergent Abilities"},
    {"@id": "urn:ngm:class:unexpected-capabilities", "label": "Unexpected Capabilities"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - Emergent Capabilities are abilities that appear in large models at scale yet are absent in smaller ones, arising from [[Model Training]] at increasing scale. They are most pronounced in [[Frontier Models]] and complicate capability forecasting.
- ### Content
  - Capabilities such as chain-of-thought reasoning, in-context learning, and tool use often improve sharply past certain scale thresholds, though some apparent discontinuities depend on the metric used. Because emergence is hard to anticipate, it motivates careful evaluation and safety testing before deployment of larger models.
