public:: true

# Mechanistic Interpretability
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:mechanistic-interpretability",
  "@type": "Page",
  "vc:slug": "mechanistic-interpretability",
  "title": "Mechanistic Interpretability",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mechanistic-interpretability",
  "@type": "Class",
  "label": "Mechanistic Interpretability",
  "definition": "Mechanistic interpretability is a research area that seeks to reverse-engineer the internal computations of neural networks into human-understandable algorithms. It studies features, circuits, and representations within model weights and activations to explain how specific behaviours arise. The field aims to make models transparent enough to predict, audit, and align, supporting AI safety.",
  "domain": "machine-learning",
  "maturity": "experimental",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-safety",
      "label": "AI Safety"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:sparse-autoencoders",
        "label": "Sparse Autoencoder"
      },
      {
        "@id": "urn:ngm:class:activation-patching",
        "label": "Activation Patching"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:ai-safety",
        "label": "AI Safety"
      },
      {
        "@id": "urn:ngm:class:explainable-ai",
        "label": "Explainable AI"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      },
      {
        "@id": "urn:ngm:class:transformer-architecture",
        "label": "Transformer Architecture"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:ai-alignment",
        "label": "AI Alignment"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:representation-learning",
        "label": "Representation Learning"
      },
      {
        "@id": "urn:ngm:class:attention-mechanism",
        "label": "Attention Mechanism"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:causal-tracing",
        "label": "Causal Tracing"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:safety-and-alignment",
        "label": "Safety and Alignment"
      },
      {
        "@id": "urn:ngm:class:ai-risks",
        "label": "AI Risks"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:post-hoc-explanation",
        "label": "Post-Hoc Explanation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      },
      {
        "@id": "urn:ngm:class:security",
        "label": "Security"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:safety-and-alignment",
        "label": "Safety and Alignment"
      },
      {
        "@id": "urn:ngm:class:ai-risks",
        "label": "AI Risks"
      },
      {
        "@id": "urn:ngm:class:superposition-hypothesis",
        "label": "Superposition Hypothesis"
      },
      {
        "@id": "urn:ngm:class:model-evaluation",
        "label": "Model Evaluation"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:neural-network-interpretability",
      "label": "Neural Network Interpretability"
    },
    {
      "@id": "urn:ngm:class:reverse-engineering-neural-networks",
      "label": "Reverse Engineering Neural Networks"
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

- ### Definition
  - Mechanistic interpretability reverse-engineers neural networks into legible internal algorithms by analysing features and circuits. It is a component of [[Safety and Alignment]] research and a tool for diagnosing [[AI Risks]].
- ### Content
  - Techniques include activation patching, sparse autoencoders for feature disentanglement, and circuit analysis that traces how attention heads and MLP layers compose to implement a task. The goal is faithful, causal explanations rather than post-hoc rationalisations, enabling auditing of deception, capability, and failure modes in frontier models.
