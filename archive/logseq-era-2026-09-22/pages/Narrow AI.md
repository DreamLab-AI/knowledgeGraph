public:: true

# Narrow AI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7a7efd3257ba0ca3d01c3fd257936d37d6d74452ff7db62f5ef58baacec9e1ec",
  "@type": "Page",
  "vc:slug": "narrow-ai",
  "title": "Narrow AI",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
    },
    {
      "@id": "urn:visionflow:linked:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:linked:deep-learning",
      "vc:label": "Deep Learning"
    },
    {
      "@id": "urn:visionflow:linked:artificial-general-intelligence",
      "vc:label": "Artificial General Intelligence"
    },
    {
      "@id": "urn:visionflow:linked:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Narrow AI"
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
  "@id": "urn:ngm:class:narrow-ai",
  "@type": "Class",
  "label": "Narrow AI",
  "definition": "Narrow AI refers to systems engineered to perform a specific task or bounded set of tasks, achieving strong performance within their domain without the general adaptability associated with artificial general intelligence.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:artificial-intelligence",
      "label": "Artificial Intelligence"
    },
    {
      "@id": "urn:ngm:class:ai-research-area",
      "label": "AI Research Area"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:recommendation-engine",
        "label": "Recommendation Engine"
      },
      {
        "@id": "urn:ngm:class:automatic-speech-recognition",
        "label": "Speech Recogniser"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:machine-learning-discipline",
        "label": "Machine Learning Discipline"
      },
      {
        "@id": "urn:ngm:class:training-data",
        "label": "Training Data"
      },
      {
        "@id": "urn:ngm:class:supervised-learning",
        "label": "Supervised Learning"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      },
      {
        "@id": "urn:ngm:class:autonomous-system",
        "label": "Autonomous Systems"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:task-specific-model",
        "label": "Task-Specific Model"
      },
      {
        "@id": "urn:ngm:class:domain-adaptation",
        "label": "Domain Adaptation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:transfer-learning",
        "label": "Transfer Learning"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:artificial-general-intelligence",
        "label": "Artificial General Intelligence"
      },
      {
        "@id": "urn:ngm:class:superintelligence",
        "label": "Artificial Superintelligence"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      },
      {
        "@id": "urn:ngm:class:explainable-ai",
        "label": "Explainable AI"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:model-deployment",
        "label": "Model Deployment"
      },
      {
        "@id": "urn:ngm:class:ai-safety",
        "label": "AI Safety"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:weak-ai",
      "label": "Weak AI"
    },
    {
      "@id": "urn:ngm:class:applied-ai",
      "label": "Applied AI"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:narrow-ai:38b58a4f9dec",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7a7efd3257ba0ca3d01c3fd257936d37d6d74452ff7db62f5ef58baacec9e1ec"
  },
  "vc:resolutions": [
    {
      "raw": "[[Machine Learning Discipline]]",
      "resolved": "urn:visionflow:linked:machine-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:linked:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Deep Learning]]",
      "resolved": "urn:visionflow:linked:deep-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Artificial General Intelligence]]",
      "resolved": "urn:visionflow:linked:artificial-general-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:linked:artificial-intelligence",
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
  - Narrow AI refers to systems engineered to perform a specific task or bounded set of tasks, achieving strong performance within their domain without the general adaptability associated with artificial general intelligence.

- ### Semantic Classification
  - owl-class:: metaverse:NarrowAI
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence]]
  - bridges-to:: [[Deep Learning]], [[Artificial General Intelligence]]
  - requires:: [[Machine Learning Discipline]]
  - enables:: [[Computer Vision]]

- ### Content
  - Narrow AI covers nearly all deployed systems, including image classifiers, recommendation engines and speech recognisers, each optimised for a particular objective. Performance does not transfer beyond the domain the system was trained for.
  - The term contrasts with artificial general intelligence, which would generalise across tasks at human breadth. Most metaverse and XR applications use narrow models for vision, tracking and content generation rather than general systems.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
