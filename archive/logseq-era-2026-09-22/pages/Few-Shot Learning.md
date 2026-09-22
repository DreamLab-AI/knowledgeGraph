public:: true

# Few-Shot Learning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3082005ae1a690760d384a0f99881c07ac96507f82ae5f7faf8e4db6fa8cb063",
  "@type": "Page",
  "vc:slug": "few-shot-learning",
  "title": "Few-Shot Learning",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:transfer-learning",
      "vc:label": "Transfer Learning"
    },
    {
      "@id": "urn:visionflow:linked:meta-learning",
      "vc:label": "Meta-Learning"
    },
    {
      "@id": "urn:visionflow:linked:in-context-learning",
      "vc:label": "In-Context Learning"
    },
    {
      "@id": "urn:visionflow:linked:foundation-models",
      "vc:label": "Foundation Models"
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
      "vc:value": "Few-Shot Learning"
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
  "@id": "urn:ngm:class:few-shot-learning",
  "@type": "Class",
  "label": "Few-Shot Learning",
  "definition": "A learning setting in which a model is required to generalise to a new task or class from only a small number of labelled examples, typically by leveraging prior knowledge or inductive biases learned across many related tasks.",
  "domain": "machine-learning",
  "maturity": "growing",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:machine-learning-discipline",
      "label": "Machine Learning Discipline"
    },
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:transfer-learning",
        "label": "Transfer Learning"
      },
      {
        "@id": "urn:ngm:class:meta-learning",
        "label": "Meta-Learning"
      },
      {
        "@id": "urn:ngm:class:inductive-bias",
        "label": "Inductive Bias"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:in-context-learning",
        "label": "In-Context Learning"
      },
      {
        "@id": "urn:ngm:class:task-adaptation",
        "label": "Rapid Task Adaptation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:prototypical-networks",
        "label": "Prototypical Networks"
      },
      {
        "@id": "urn:ngm:class:model-agnostic-meta-learning",
        "label": "Model-Agnostic Meta-Learning"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:pre-trained-model",
        "label": "Pre-Trained Model"
      },
      {
        "@id": "urn:ngm:class:embedding-space",
        "label": "Embedding Space"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:supervised-learning",
        "label": "Supervised Learning"
      },
      {
        "@id": "urn:ngm:class:zero-shot-learning",
        "label": "Zero-Shot Learning"
      },
      {
        "@id": "urn:ngm:class:data-augmentation",
        "label": "Data Augmentation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:foundation-model",
        "label": "Foundation Models"
      },
      {
        "@id": "urn:ngm:class:continual-learning",
        "label": "Continual Learning"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      },
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:k-shot-learning",
      "label": "K-Shot Learning"
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
  "@id": "urn:visionflow:annotation:link-resolutions:few-shot-learning:0e41d9c819c1",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3082005ae1a690760d384a0f99881c07ac96507f82ae5f7faf8e4db6fa8cb063"
  },
  "vc:resolutions": [
    {
      "raw": "[[Transfer Learning]]",
      "resolved": "urn:visionflow:linked:transfer-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Meta-Learning]]",
      "resolved": "urn:visionflow:linked:meta-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[In-Context Learning]]",
      "resolved": "urn:visionflow:linked:in-context-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Large-Scale Pretrained Foundation Model]]",
      "resolved": "urn:visionflow:linked:foundation-models",
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
  - A learning setting in which a model is required to generalise to a new task or class from only a small number of labelled examples.

- ### Semantic Classification
  - owl-class:: machine-learning:FewShotLearning
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Machine Learning Discipline]]
  - bridges-to:: [[Large-Scale Pretrained Foundation Model]]
  - requires:: [[Transfer Learning]], [[Meta-Learning]]
  - enables:: [[In-Context Learning]]

- ### Content
  - Few-shot learning addresses tasks where labelled data is scarce, contrasting with conventional supervised learning that assumes many examples per class. Approaches include metric learning, optimisation-based meta-learning and the use of pre-trained representations that transfer to new tasks.
  - Large language models exhibit a related capability through in-context learning, where examples supplied in the prompt guide behaviour without parameter updates. Evaluation typically uses episodes that specify a small support set and a query set drawn from previously unseen classes.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
