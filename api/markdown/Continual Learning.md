public:: true

# Continual Learning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:279ccd490f46125b43bdb4809c8d5f8011027153b0fc4c0a805c854c9b22c910",
  "@type": "Page",
  "vc:slug": "continual-learning",
  "title": "Continual Learning",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:online-learning",
      "vc:label": "Online Learning"
    },
    {
      "@id": "urn:visionflow:linked:transfer-learning",
      "vc:label": "Transfer Learning"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning-domain",
      "vc:label": "Machine Learning Domain"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Continual Learning"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:continual-learning",
  "@type": "Class",
  "label": "Continual Learning",
  "definition": "A learning paradigm in which a model learns from a stream of tasks or data over time while retaining performance on previously learned tasks.",
  "domain": "machine-learning",
  "maturity": "growing",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:machine-learning-discipline",
      "label": "Machine Learning"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:online-learning",
        "label": "Online Learning"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:transfer-learning",
        "label": "Transfer Learning"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:continual-learning:73e87299af1b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:279ccd490f46125b43bdb4809c8d5f8011027153b0fc4c0a805c854c9b22c910"
  },
  "vc:resolutions": [
    {
      "raw": "[[Online Learning]]",
      "resolved": "urn:visionflow:linked:online-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transfer Learning]]",
      "resolved": "urn:visionflow:linked:transfer-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Machine Learning Domain]]",
      "resolved": "urn:visionflow:linked:machine-learning-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Machine Learning Discipline]]",
      "resolved": "urn:visionflow:linked:machine-learning",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A learning paradigm in which a model learns from a stream of tasks or data over time while retaining performance on previously learned tasks.

- ### Semantic Classification
  - owl-class:: machine-learning:ContinualLearning
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Machine Learning Discipline]]
  - bridges-to:: [[Machine Learning Domain]]
  - requires:: [[Online Learning]]
  - enables:: [[Transfer Learning]]

- ### Content
  - Continual learning, also called lifelong or incremental learning, addresses the tendency of neural networks to forget earlier knowledge when trained on new data, a phenomenon known as catastrophic forgetting. The aim is to accumulate knowledge across a sequence of tasks without storing or revisiting all past data.
  - Approaches include regularisation that protects important parameters, rehearsal that replays stored or generated examples, and architectural methods that allocate capacity to new tasks. Continual learning is relevant where data arrives over time or where retraining from scratch is too costly.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
