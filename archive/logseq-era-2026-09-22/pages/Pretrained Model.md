public:: true

# Pretrained Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4463ad8f7c6f1ccf8454e8b170276c8c7d7f014beedee9f429c953d18b24d072",
  "@type": "Page",
  "vc:slug": "pretrained-model",
  "title": "Pretrained Model",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:model",
      "vc:label": "Model"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0875"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Pretrained Model"
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
  "@id": "urn:ngm:class:pretrained-model",
  "@type": "Class",
  "label": "Pretrained Model",
  "definition": "A neural network or machine learning model that has been trained on a large dataset (often a broad corpus) before being adapted to a specific downstream task through fine-tuning or prompting. Pretrained models encode general representations—linguistic, visual, or multimodal—that can be efficiently transferred, dramatically reducing the data and compute required for specialised applications.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    },
    {
      "@id": "urn:ngm:class:model",
      "label": "Model"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:pretrained-weights", "label": "Pretrained Weights"},
      {"@id": "urn:ngm:class:checkpoints", "label": "Checkpoints"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:transfer-learning", "label": "Transfer Learning"},
      {"@id": "urn:ngm:class:fine-tuning", "label": "Fine Tuning"},
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:class:domain-adaptation", "label": "Domain Adaptation"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:parameter-efficient-fine-tuning", "label": "Parameter-Efficient Fine-Tuning"},
      {"@id": "urn:ngm:class:lo-ra-fine-tuning", "label": "LoRA Fine-Tuning"},
      {"@id": "urn:ngm:class:neural-network-quantisation", "label": "Neural Network Quantisation"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:pre-training", "label": "Pre Training"}
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:pretrained-model:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4463ad8f7c6f1ccf8454e8b170276c8c7d7f014beedee9f429c953d18b24d072"
  },
  "vc:resolutions": [
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Model]]",
      "resolved": "urn:visionflow:owl:class:model",
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
  - Pretrained Model is a concept within the ai domain.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:PretrainedModel
  - owl-role:: Concept
  - belongs-to-domain:: [[Artificial Intelligence]]

- ### Relationships
  - is-subclass-of:: [[Model]]

- ### Content
  Pretrained Model — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
