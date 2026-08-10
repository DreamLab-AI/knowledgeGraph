public:: true

# Low-Rank Adaptation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2babea07310d76324f0527fcc3df345f7ff0a27c5ad06afd2bff1e5069014e2c",
  "@type": "Page",
  "vc:slug": "low-rank-adaptation",
  "title": "Low-Rank Adaptation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:neural-network",
      "vc:label": "Neural Network"
    },
    {
      "@id": "urn:visionflow:linked:transfer-learning",
      "vc:label": "Transfer Learning"
    },
    {
      "@id": "urn:visionflow:linked:gpt",
      "vc:label": "GPT"
    },
    {
      "@id": "urn:visionflow:linked:parameter-efficient-fine-tuning",
      "vc:label": "Parameter-Efficient Fine-Tuning"
    },
    {
      "@id": "urn:visionflow:linked:https-arxiv-org-abs-2106-09685",
      "vc:label": "https://arxiv.org/abs/2106.09685"
    },
    {
      "@id": "urn:visionflow:linked:https-github-com-microsoft-lo-ra",
      "vc:label": "https://github.com/microsoft/LoRA"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Low-Rank Adaptation"
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
  "@id": "urn:ngm:class:low-rank-adaptation",
  "@type": "Class",
  "label": "Low-Rank Adaptation",
  "definition": "Low-Rank Adaptation (LoRA) is a parameter-efficient fine-tuning method that injects trainable low-rank decomposition matrices into the weight matrices of a frozen pre-trained model, enabling task adaptation with a fraction of the trainable parameters required by full fine-tuning.",
  "domain": "machine-learning",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:parameter-efficient-fine-tuning",
      "label": "Parameter-Efficient Fine-Tuning"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      },
      {
        "@id": "urn:ngm:class:pre-trained-model",
        "label": "Pre-Trained Model"
      },
      {
        "@id": "urn:ngm:class:matrix-factorisation",
        "label": "Matrix Decomposition"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:transfer-learning",
        "label": "Transfer Learning"
      },
      {
        "@id": "urn:ngm:class:fine-tuning",
        "label": "Model Fine-Tuning"
      },
      {
        "@id": "urn:ngm:class:multi-task-learning",
        "label": "Multi-Task Learning"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:adapter-modules",
        "label": "Adapter Module"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:parameter-efficient-fine-tuning",
        "label": "Parameter-Efficient Fine-Tuning"
      },
      {
        "@id": "urn:ngm:class:model-adaptation",
        "label": "Model Adaptation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:singular-value-decomposition",
        "label": "Singular Value Decomposition"
      },
      {
        "@id": "urn:ngm:class:attention-mechanism",
        "label": "Attention Mechanism"
      },
      {
        "@id": "urn:ngm:class:gradient-descent",
        "label": "Gradient Descent"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:parameter-efficient-fine-tuning",
        "label": "Parameter-Efficient Fine-Tuning"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
      },
      {
        "@id": "urn:ngm:class:on-device-ai",
        "label": "On-Device AI"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:transformer-architecture",
        "label": "Transformer Architecture"
      },
      {
        "@id": "urn:ngm:class:weight-matrix",
        "label": "Weight Matrix"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:full-fine-tuning",
        "label": "Full Fine-Tuning"
      },
      {
        "@id": "urn:ngm:class:prompt-tuning",
        "label": "Prompt Tuning"
      },
      {
        "@id": "urn:ngm:class:prefix-tuning",
        "label": "Prefix Tuning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:quantisation",
        "label": "Quantization"
      },
      {
        "@id": "urn:ngm:class:knowledge-distillation",
        "label": "Knowledge Distillation"
      },
      {
        "@id": "urn:ngm:class:model-compression",
        "label": "Model Compression"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:federated-learning",
        "label": "Federated Learning"
      },
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      },
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:lora",
      "label": "LoRA"
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
  "@id": "urn:visionflow:annotation:link-resolutions:low-rank-adaptation:86fcdb35bfab",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2babea07310d76324f0527fcc3df345f7ff0a27c5ad06afd2bff1e5069014e2c"
  },
  "vc:resolutions": [
    {
      "raw": "[[Neural Network]]",
      "resolved": "urn:visionflow:linked:neural-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transfer Learning]]",
      "resolved": "urn:visionflow:linked:transfer-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[GPT]]",
      "resolved": "urn:visionflow:linked:gpt",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Parameter-Efficient Fine-Tuning]]",
      "resolved": "urn:visionflow:linked:parameter-efficient-fine-tuning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://arxiv.org/abs/2106.09685]]",
      "resolved": "urn:visionflow:linked:https-arxiv-org-abs-2106-09685",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://github.com/microsoft/LoRA]]",
      "resolved": "urn:visionflow:linked:https-github-com-microsoft-lo-ra",
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
  - Low-Rank Adaptation is a parameter-efficient fine-tuning method that adds small trainable low-rank matrices to a frozen pre-trained model. It reduces the cost of adapting large models.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:LowRankAdaptation
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Parameter-Efficient Fine-Tuning]]
  - bridges-to:: [[GPT]]
  - requires:: [[Neural Network]]
  - enables:: [[Transfer Learning]]

- ### Content
  - Low-Rank Adaptation keeps the original weights of a pre-trained model fixed and learns small additional matrices that represent the change needed for a new task. Because these matrices are low rank, the number of trainable parameters is far smaller than full fine-tuning.
  - The method lowers memory and storage requirements, since only the small adapters need to be trained and stored per task. It is widely used to adapt large language models and other large networks to specific applications.

- ### Current Landscape (2026)
  - Weight-Decomposed Low-Rank Adaptation (DoRA), introduced by NVIDIA Research in 2024, has become the leading drop-in successor to vanilla LoRA, decomposing pre-trained weights into magnitude and direction and consistently beating LoRA (for example +4.4 on Llama 3 8B commonsense reasoning) with no added inference latency; its QDoRA combination with Answer.AI even edges out full fine-tuning.
  - Sakana AI's Text-to-LoRA (T2L, ICML 2025, arXiv:2506.06105) reframed adaptation as generation: a hypernetwork emits a task-specific adapter from a plain-language description in a single sub-second forward pass, and its 2026 successor Doc-to-LoRA (ICML 2026) internalises whole documents into adapters, achieving near-perfect retrieval beyond 4x the base context window.
  - Multi-LoRA serving matured into production infrastructure through 2025-2026: vLLM ships runtime adapter load/unload endpoints and per-batch max_loras controls (documented February 2026), SGLang v0.5.9 added weight-loading overlap cutting time-to-first-token by up to 78%, and S-LoRA-style systems now serve thousands of adapters on one GPU.
  - New serving research targets adapter heterogeneity and scale: InfiniLoRA (2026) disaggregates LoRA execution from base-model inference for 3.05x higher serviceable request rate under SLOs, while LoRAServe (2026) tames rank-diversity skew for up to 2x throughput and 50% fewer GPUs, and Activated LoRA (aLoRA) enables cross-model KV-cache reuse for up to 58x lower end-to-end latency.
  - The variant family has proliferated well past twenty entries (VeRA, rsLoRA, PiSSA, AdaLoRA, MoRA, SingLoRA, X-LoRA, Mixture-of-LoRA-Experts, LoRA-Squeeze and more), with a clear frontier shift toward adaptive-rank allocation methods such as GeLoRA (EMNLP 2025) and LeLoRA (ACL 2026) that learn per-layer ranks from intrinsic data dimensionality.
  - Open challenges as of 2026 centre on serving efficiency under heterogeneous ranks and MoE base models, lossy compression when packing hundreds-to-thousands of adapters, closing the residual gap to full fine-tuning on hard reasoning tasks, and governing the security and provenance of dynamically generated or user-supplied adapters.

- ### References
  - 1. NVIDIA Developer Blog (2024). Introducing DoRA, a High-Performing Alternative to LoRA for Fine-Tuning. https://developer.nvidia.com/blog/introducing-dora-a-high-performing-alternative-to-lora-for-fine-tuning/
  - 2. Charakorn, R., Cetin, E., Tang, Y. & Lange, R. T. (2025). Text-to-LoRA: Instant Transformer Adaption (ICML 2025). https://arxiv.org/abs/2506.06105
  - 3. Sakana AI (2026). Instant LLM Updates with Doc-to-LoRA and Text-to-LoRA. https://pub.sakana.ai/doc-to-lora/
  - 4. vLLM Blog (2026). Efficiently serve dozens of fine-tuned models with vLLM (Multi-LoRA). https://vllm.ai/blog/2026-02-26-multi-lora
  - 5. InfiniLoRA (2026). Disaggregated Multi-LoRA Serving for Large Language Models. https://arxiv.org/html/2604.07173v1
  - 6. Turing Post (2026). The Evolution of LoRA: 15+ Variants You Should Know. https://www.turingpost.com/p/loraevolution

- ### Provenance
  - sources:: [[https://arxiv.org/abs/2106.09685]], [[https://github.com/microsoft/LoRA]]
  - migration-date:: 2026-05-29T00:00:00Z
