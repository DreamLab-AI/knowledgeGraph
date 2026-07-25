public:: true

elevatedFrom:: [[Llama]]
# Meta Llama Model Family
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dfe375ce757af17282bd8167135b3132f362e05a53daa94c6206d0c7391083d8",
  "@type": "Page",
  "vc:slug": "meta-llama-model-family",
  "title": "Meta Llama Model Family",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:transformer",
      "vc:label": "Transformer"
    },
    {
      "@id": "urn:visionflow:linked:large-language-model",
      "vc:label": "Large Language Model"
    },
    {
      "@id": "urn:visionflow:linked:microsoft-copilot",
      "vc:label": "Microsoft Copilot"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning-domain",
      "vc:label": "Machine Learning Domain"
    },
    {
      "@id": "urn:visionflow:linked:touvron-et-al-2023-lla-ma-open-and-efficient-foundation-language-models",
      "vc:label": "Touvron et al. 2023, LLaMA: Open and Efficient Foundation Language Models"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Llama"
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
  "@id": "urn:ngm:class:meta-llama-model-family",
  "@type": "Class",
  "label": "Meta Llama Model Family",
  "definition": "Llama is a family of large language models developed by Meta and released, in large part, with open weights for research and commercial use. First introduced in 2023 with LLaMA, followed by Llama 2, Llama 3 and later versions, the models are transformer-based and trained on large text corpora. By releasing model weights under permissive terms, Meta enabled a wide range of independent fine-tuning and deployment, making Llama a common base for open models. The family spans several parameter sizes to suit different compute and latency requirements.",
  "domain": "ai",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:large-language-model",
      "label": "Large Language Model"
    },
    {
      "@id": "urn:ngm:class:large-language-models",
      "label": "Large Language Models"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:transformer",
        "label": "Transformer"
      },
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
      },
      {
        "@id": "urn:ngm:class:gpu-compute",
        "label": "GPU Compute"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning-from-human-feedback",
        "label": "Reinforcement Learning from Human Feedback"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:meta-llama-model-family-3",
        "label": "Llama 3"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:fine-tuning",
        "label": "Fine Tuning"
      },
      {
        "@id": "urn:ngm:class:retrieval-augmented-generation",
        "label": "Retrieval-Augmented Generation"
      },
      {
        "@id": "urn:ngm:class:on-device-inference",
        "label": "On-Device Inference"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:rotary-position-embedding",
        "label": "Rotary Position Embedding"
      },
      {
        "@id": "urn:ngm:class:grouped-query-attention",
        "label": "Grouped Query Attention"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:instruction-tuning",
        "label": "Instruction Tuning"
      },
      {
        "@id": "urn:ngm:class:byte-pair-encoding",
        "label": "Byte Pair Encoding"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:gpt-4",
        "label": "GPT 4"
      },
      {
        "@id": "urn:ngm:class:google-ai-technology-corporation-gemini",
        "label": "Gemini Model Family"
      },
      {
        "@id": "urn:ngm:class:mistral-ai-open-weight-model-family",
        "label": "Mistral Model Family"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:microsoft-copilot",
        "label": "Microsoft Copilot"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:parameter-efficient-fine-tuning",
        "label": "Parameter-Efficient Fine-Tuning"
      },
      {
        "@id": "urn:ngm:class:quantisation",
        "label": "Quantization"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:llama",
      "label": "Llama"
    },
    {
      "@id": "urn:ngm:class:meta-ai-language-models",
      "label": "Meta AI Language Models"
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
  "@id": "urn:visionflow:annotation:link-resolutions:llama:fc5a1047f591",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:dfe375ce757af17282bd8167135b3132f362e05a53daa94c6206d0c7391083d8"
  },
  "vc:resolutions": [
    {
      "raw": "[[Transformer]]",
      "resolved": "urn:visionflow:linked:transformer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Large Language Model]]",
      "resolved": "urn:visionflow:linked:large-language-model",
      "kind": "StubLink"
    },
    {
      "raw": "[[Microsoft Copilot]]",
      "resolved": "urn:visionflow:linked:microsoft-copilot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Machine Learning Domain]]",
      "resolved": "urn:visionflow:linked:machine-learning-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Touvron et al. 2023, LLaMA: Open and Efficient Foundation Language Models]]",
      "resolved": "urn:visionflow:linked:touvron-et-al-2023-lla-ma-open-and-efficient-foundation-language-models",
      "kind": "StubLink"
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
  - Llama is a family of large language models developed by Meta and released, in large part, with open weights for research and commercial use. First introduced in 2023 with LLaMA, followed by Llama 2, Llama 3 and later versions, the models are transformer-based and trained on large text corpora. By releasing model weights under permissive terms, Meta enabled a wide range of independent fine-tuning and deployment, making Llama a common base for open models. The family spans several parameter sizes to suit different compute and latency requirements.

- ### Semantic Classification
  - owl-class:: ai:Llama
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Machine Learning Domain]]
  - bridges-to:: [[Microsoft Copilot]]
  - requires:: [[Transformer]], [[Large Language Model]]

- ### Content
  - Llama is a series of decoder-only transformer language models from Meta. The initial LLaMA release in early 2023 demonstrated that comparatively smaller models trained on more data could match or exceed larger models on many benchmarks, which influenced subsequent training practice across the field.
  - A defining characteristic of the family is the release of model weights, initially under research terms and later under licences permitting broad commercial use. This availability seeded a large community of fine-tuned derivatives and tooling, and made Llama a default starting point for organisations building on open models.
  - Successive versions improved scale, training data, context length and instruction-following, and added multimodal and larger variants. The models are released in multiple sizes so that practitioners can trade off quality against the compute and memory needed for training and inference.

- ### Provenance
  - sources:: [[Touvron et al. 2023, LLaMA: Open and Efficient Foundation Language Models]]
  - migration-date:: 2026-05-29T00:00:00Z
