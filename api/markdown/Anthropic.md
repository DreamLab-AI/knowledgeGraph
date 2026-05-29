public:: true

# anthropic
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c70eca6b0f88f44d81a41311647e50fda1ac454ec04ffd442b0eb4743a993131",
  "@type": "Page",
  "vc:slug": "anthropic",
  "title": "anthropic",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:anthropic",
  "@type": "Class",
  "label": "Anthropic",
  "definition": "Anthropic is an AI safety company founded in 2021 that develops large language models under the Claude family brand, with research programmes centred on constitutional AI, mechanistic interpretability, and scalable oversight. The company occupies the position of a safety-focused frontier AI laboratory, publishing research on alignment and interpretability while deploying Claude models commercially via API and consumer products. Anthropic's Constitutional AI (CAI) approach trains models to follow a set of principles using AI feedback rather than solely human labelling, aiming to reduce harmful outputs systematically.",
  "domain": "artificial-intelligence",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "relations": {
    "supports": [
      {"@id": "urn:ngm:class:ai-safety-research", "label": "AI Safety Research"},
      {"@id": "urn:ngm:class:constitutional-ai", "label": "Constitutional AI"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:class:rlhf", "label": "RLHF"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:interpretability", "label": "Interpretability"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Anthropic is an AI safety company founded in 2021 that develops large language models under the Claude family brand, with research programmes centred on constitutional AI, mechanistic interpretability, and scalable oversight. The company occupies the position of a safety-focused frontier AI laboratory, publishing research on alignment and interpretability while deploying Claude models commercially via API and consumer products. Anthropic's Constitutional AI (CAI) approach trains models to follow a set of principles using AI feedback rather than solely human labelling, aiming to reduce harmful outputs systematically.

- ### Semantic Classification
  - owl-class:: anthropic:Anthropic
  - owl-role:: Concept

- ### Relationships
  - supports [[AI Safety Research]]
  - supports [[Constitutional AI]]
  - uses [[Large Language Models]]
  - uses [[RLHF]]
  - relatedTo [[Interpretability]]

- ### Content
  - Anthropic was founded by former OpenAI researchers including Dario Amodei and Daniela Amodei, motivated by concerns about the safety trajectory of frontier AI development. The company's research agenda is distinguished by its emphasis on mechanistic interpretability — reverse-engineering the internal representations and computations of transformer models to understand how they produce particular outputs. This work has produced findings on superposition (the ability of networks to represent more features than they have neurons) and has begun mapping circuits responsible for specific model behaviours.
  - The Claude model family, Anthropic's primary commercial offering, is characterised by a strong focus on harmlessness, helpfulness, and honesty — the three properties shaped by the Constitutional AI training process. Constitutional AI adds a self-critique and revision step to the RLHF pipeline, in which a model evaluates its own outputs against a list of principles and refines responses before human preference labelling, improving scalability of safety training.
  - Anthropic participates actively in AI governance: it contributed to the White House Voluntary AI Commitments and the UK AI Safety Summit, and operates an internal model evaluation framework (red-teaming and capability assessments) prior to major model releases. The company maintains a Responsible Scaling Policy (RSP) that commits to enhanced safety evaluations if models reach defined dangerous capability thresholds, establishing a concrete mechanism linking capability advancement to mandatory safety investment.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
