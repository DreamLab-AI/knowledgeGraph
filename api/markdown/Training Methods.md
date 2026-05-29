public:: true

# Training Methods
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:78eeca1f0accf201d69082051d7abb3798abe16789572a5ad2a64e42c844db84",
  "@type": "Page",
  "vc:slug": "training-methods",
  "title": "Training Methods",
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
      "vc:value": "AI-0601"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Training Methods"
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
  "@id": "urn:ngm:class:training-methods",
  "@type": "Class",
  "label": "Training Methods",
  "definition": "Training Methods encompass the algorithms and procedures used to optimise machine learning model parameters against training data, including supervised, unsupervised, semi-supervised, reinforcement, transfer, curriculum, and contrastive learning paradigms. The choice of method fundamentally determines model capability, data efficiency, and generalisation behaviour.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:supervised-learning", "label": "Supervised Learning"},
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"},
      {"@id": "urn:ngm:class:transfer-learning", "label": "Transfer Learning"},
      {"@id": "urn:ngm:class:contrastive-learning", "label": "Contrastive Learning"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:training-data", "label": "Training Data"},
      {"@id": "urn:ngm:class:machine-learning-model", "label": "Machine Learning Model"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:fine-tuning", "label": "Fine Tuning"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:training-methods:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:78eeca1f0accf201d69082051d7abb3798abe16789572a5ad2a64e42c844db84"
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
  Training Methods encompass the algorithms and procedures used to optimise machine learning model parameters against training data, including supervised, unsupervised, semi-supervised, reinforcement, transfer, curriculum, and contrastive learning paradigms. The choice of method fundamentally determines model capability, data efficiency, and generalisation behaviour.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:TrainingMethod
  - owl-role:: Concept
  - belongs-to-domain:: [[Artificial Intelligence]]

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence]]
  - **hasPart**: Supervised Learning, Reinforcement Learning, Transfer Learning, Contrastive Learning
  - **requires**: Training Data, Machine Learning Model
  - **enables**: Fine Tuning

- ### Content
  Training Methods — content pending enrichment.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
