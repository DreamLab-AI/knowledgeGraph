public:: true

# Learning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:48cb8de2a269a0e2ce3ff4bb715e9886fb07c24e14a3945c807fc63e00f6d56a",
  "@type": "Page",
  "vc:slug": "learning",
  "title": "Learning",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
    },
    {
      "@id": "urn:visionflow:linked:deep-learning",
      "vc:label": "Deep Learning"
    },
    {
      "@id": "urn:visionflow:linked:reinforcement-learning",
      "vc:label": "Reinforcement Learning"
    },
    {
      "@id": "urn:visionflow:linked:neural-network",
      "vc:label": "Neural Network"
    },
    {
      "@id": "urn:visionflow:linked:imitation-learning",
      "vc:label": "Imitation Learning"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Learning"
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
  "@id": "urn:ngm:class:learning",
  "@type": "Class",
  "label": "Learning",
  "definition": "Learning is the process by which a system improves its performance on a task through experience or data. In artificial intelligence it refers to algorithms that adjust internal parameters or rules from observations.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:machine-learning-discipline",
      "label": "Machine Learning Discipline"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:machine-learning-discipline",
        "label": "Machine Learning Discipline"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
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
  "@id": "urn:visionflow:annotation:link-resolutions:learning:edd95740e339",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:48cb8de2a269a0e2ce3ff4bb715e9886fb07c24e14a3945c807fc63e00f6d56a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Machine Learning Discipline]]",
      "resolved": "urn:visionflow:linked:machine-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Deep Learning]]",
      "resolved": "urn:visionflow:linked:deep-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Reinforcement Learning]]",
      "resolved": "urn:visionflow:linked:reinforcement-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Neural Network]]",
      "resolved": "urn:visionflow:linked:neural-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Imitation Learning]]",
      "resolved": "urn:visionflow:linked:imitation-learning",
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
  - Learning is the process by which a system improves its performance on a task through experience or data. In artificial intelligence it refers to algorithms that adjust internal parameters or rules from observations.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Learning
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Machine Learning Discipline]]
  - bridges-to:: [[Neural Network]], [[Imitation Learning]]
  - requires:: [[Machine Learning Discipline]]
  - enables:: [[Deep Learning]], [[Reinforcement Learning]]

- ### Content
  - Learning in the computational sense covers any procedure that lets a system change its behaviour based on data or feedback rather than fixed programming. The major families include supervised learning from labelled examples, unsupervised learning from structure in data and reinforcement learning from reward signals.
  - The concept underpins machine learning and its subfields, including deep learning with neural networks. Different settings vary in what experience is available, whether labels exist and whether the system interacts with an environment.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
