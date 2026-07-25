public:: true

# Objective
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:369cac2e0505638baa9a9b39b2c1eafcc6aaf411768098d200264c988e3e8ec4",
  "@type": "Page",
  "vc:slug": "objective",
  "title": "Objective",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0835"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Objective"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:objective",
  "@type": "Class",
  "label": "Objective",
  "definition": "A formal specification of the goal or criterion that an AI system, optimisation algorithm, or training procedure is designed to satisfy or maximise. In machine learning this is typically expressed as a loss function or reward signal that guides parameter updates; in planning and reinforcement learning it encodes desired agent behaviour through utility or reward functions.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:loss-function", "label": "Loss Function"},
      {"@id": "urn:ngm:class:reward-function", "label": "Reward Function"},
      {"@id": "urn:ngm:class:optimiser", "label": "Optimiser"},
      {"@id": "urn:ngm:class:gradient-descent", "label": "Gradient Descent"},
      {"@id": "urn:ngm:class:model-training", "label": "Model Training"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:optimization-algorithm", "label": "Optimization Algorithm"},
      {"@id": "urn:ngm:class:training-data", "label": "Training Data"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:model-optimisation-and-performance", "label": "Model Optimisation and Performance"}
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:objective:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:369cac2e0505638baa9a9b39b2c1eafcc6aaf411768098d200264c988e3e8ec4"
  },
  "vc:resolutions": [
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Objective is a concept within the ai domain.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Objective
  - owl-role:: Concept
  - belongs-to-domain:: [[Artificial Intelligence]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  Objective — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
