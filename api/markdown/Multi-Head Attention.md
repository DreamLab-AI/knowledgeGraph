public:: true

# Multi-Head Attention
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8a6c4ce13aa6040a766f5ea60e3a3fd78030b1e13923dc1b91813ed7cf7020e0",
  "@type": "Page",
  "vc:slug": "multi-head-attention",
  "title": "Multi-Head Attention",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "ArtificialIntelligenceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:attention-mechanism",
      "vc:label": "Attention Mechanism"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0810"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Multi-Head Attention"
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
  "@id": "urn:ngm:class:multi-head-attention",
  "@type": "Class",
  "label": "Multi-Head Attention",
  "definition": "An extension of scaled dot-product attention that runs multiple attention operations in parallel over distinct learned projection subspaces, then concatenates and linearly projects the results. Multi-head attention enables Transformer models to capture diverse dependency patterns across positions and representation subspaces simultaneously, and is foundational to modern large language models.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:attention-mechanism",
    "label": "Attention Mechanism"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:attention-head",
        "label": "Attention Head"
      },
      {
        "@id": "urn:ngm:class:scaled-dot-product-attention",
        "label": "Scaled Dot Product Attention"
      },
      {
        "@id": "urn:ngm:class:attention-weight",
        "label": "Attention Weight"
      },
      {
        "@id": "urn:ngm:class:query-key-value",
        "label": "Query Key Value Projection"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:transformer-architecture",
        "label": "Transformer Architecture"
      },
      {
        "@id": "urn:ngm:class:encoder-decoder-architecture",
        "label": "Encoder Decoder Architecture"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:softmax-function",
        "label": "Softmax Function"
      },
      {
        "@id": "urn:ngm:class:linear-projection",
        "label": "Linear Projection"
      },
      {
        "@id": "urn:ngm:class:matrix-multiplication",
        "label": "Matrix Multiplication"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:long-range-dependency-modelling",
        "label": "Long Range Dependency Modelling"
      },
      {
        "@id": "urn:ngm:class:representation-learning",
        "label": "Contextual Representation Learning"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:positional-encoding",
        "label": "Positional Encoding"
      },
      {
        "@id": "urn:ngm:class:layer-normalisation",
        "label": "Layer Normalisation"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:attention-mechanism",
        "label": "Attention Mechanism"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:residual-connection",
        "label": "Residual Connection"
      },
      {
        "@id": "urn:ngm:class:feed-forward-network",
        "label": "Feed Forward Network"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:recurrent-neural-network",
        "label": "Recurrent Neural Network"
      },
      {
        "@id": "urn:ngm:class:convolutional-neural-network",
        "label": "Convolutional Neural Network"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:self-attention",
        "label": "Self Attention"
      },
      {
        "@id": "urn:ngm:class:cross-attention",
        "label": "Cross Attention"
      },
      {
        "@id": "urn:ngm:class:grouped-query-attention",
        "label": "Grouped Query Attention"
      },
      {
        "@id": "urn:ngm:class:flash-attention",
        "label": "Flash Attention"
      },
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
      },
      {
        "@id": "urn:ngm:class:bert",
        "label": "BERT"
      },
      {
        "@id": "urn:ngm:class:vision-transformer",
        "label": "Vision Transformer"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:attention-mechanism",
        "label": "Spatial Attention Mechanism"
      },
      {
        "@id": "urn:ngm:class:graph-attention-network",
        "label": "Graph Attention Network"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:mha",
      "label": "MHA"
    },
    {
      "@id": "urn:ngm:class:multi-head-self-attention",
      "label": "Multi Head Self Attention"
    }
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:multi-head-attention:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8a6c4ce13aa6040a766f5ea60e3a3fd78030b1e13923dc1b91813ed7cf7020e0"
  },
  "vc:resolutions": [
    {
      "raw": "[[ArtificialIntelligenceDomain]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Attention Mechanism]]",
      "resolved": "urn:visionflow:owl:class:attention-mechanism",
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
  - An extension of the attention mechanism that allows the model to jointly attend to information from different representation subspaces at different positions, using multiple attention heads in parallel.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:MultiHeadAttention
  - owl-role:: Concept
  - belongs-to-domain:: [[ArtificialIntelligenceDomain]]

- ### Relationships
  - is-subclass-of:: [[Attention Mechanism]]

- ### Content
  Multi-Head Attention — content pending enrichment.

- ### Current Landscape (2026)
  - The KV-cache memory bottleneck of full multi-head attention has reshaped modern architectures: Grouped-Query Attention (GQA) is now the default across Llama 3/4, Gemma 3, Qwen 3, Mistral Small 3.1 and GPT-OSS, while DeepSeek popularised Multi-head Latent Attention (MLA), which compresses keys/values into a low-rank latent (roughly 512-576 dims per token) for a ~93-96% cache reduction without the quality loss of head-sharing.
  - MLA has moved from novelty to a mainstream choice at large scale, shipping in DeepSeek-V2/V3/R1, Kimi K2, GLM-5, Mistral Large 3 and Sarvam 105B; practitioners report it wins mainly above ~100B parameters, with GQA still easier to tune for smaller models.
  - Kernel-level attention hit new peaks: FlashAttention-3 (Shah et al., NeurIPS 2024) reached ~840 TFLOPs/s on H100, and FlashAttention-4 (Zadouri, Dao et al., arXiv Mar 2026) pushes NVIDIA Blackwell B200 to ~1,613 TFLOPs/s (71% utilisation), using asynchronous MMA pipelines, software-emulated exponentials and conditional softmax rescaling; it installs via `pip install flash-attn-4`.
  - Native Sparse Attention (NSA; DeepSeek, PKU, UW, arXiv:2502.11089, ACL 2025 best paper) made trainable hierarchical sparsity practical - compressed, selected and sliding-window branches fused by a learned gate - matching or beating full attention on 64k contexts with up to 9x forward and 11.6x decode speed-ups.
  - Sparse attention reached production in late 2025: DeepSeek-V3.2-Exp (Sept/Oct 2025) introduced DeepSeek Sparse Attention (a lightning-indexer plus fine-grained token selection) with vLLM Day-0 support on Hopper and Blackwell and reports of up to 50% lower long-context API cost; NVIDIA's April 2026 DeepSeek-V4 preview describes a hybrid of Compressed Sparse Attention and Heavily Compressed Attention.
  - Conversion research now lets existing models adopt these schemes post-hoc: TransMLA (arXiv:2502.07864) proves MLA is strictly more expressive than GQA at equal cache and converts LLaMA/Qwen/Mixtral checkpoints, while MHA2MLA (ACL 2025) recovers performance using only 0.3-1% of data, cutting Llama2-7B KV cache by ~92%.
  - Open challenges as of 2026 include reconciling MLA-style latent compression with tensor parallelism and RoPE (hence decoupled-RoPE and follow-ups such as Grouped-Tied and Grouped Latent Attention), tuning sparse-attention selection without quality regressions on short contexts, and standardising these variants across inference stacks (vLLM, SGLang) still catching up to bespoke DeepSeek kernels.

- ### References
  - 1. Shah, J. et al. (2024). FlashAttention-3: Fast and Accurate Attention with Asynchrony and Low-precision. NeurIPS 2024. https://proceedings.neurips.cc/paper_files/paper/2024/file/7ede97c3e082c6df10a8d6103a2eebd2-Paper-Conference.pdf
  - 2. Zadouri, T., Hoehnerbach, M., Shah, J., Dao, T. et al. (2026). FlashAttention-4: Algorithm and Kernel Pipelining Co-Design for Asymmetric Hardware Scaling. arXiv:2603.05451. https://arxiv.org/abs/2603.05451
  - 3. Yuan, J. et al. / DeepSeek-AI (2025). Native Sparse Attention: Hardware-Aligned and Natively Trainable Sparse Attention. arXiv:2502.11089 (ACL 2025 best paper). https://arxiv.org/pdf/2502.11089
  - 4. Meng, F. et al. (2025). TransMLA: Multi-head Latent Attention Is All You Need. arXiv:2502.07864. https://arxiv.org/html/2502.07864v1
  - 5. Red Hat Developers (2025). DeepSeek-V3.2-Exp on vLLM, Day 0: Sparse Attention for Long-Context Inference. https://developers.redhat.com/articles/2025/10/03/deepseek-v32-exp-vllm-day-0-sparse-attention-long-context-inference
  - 6. Raschka, S. (2026). A Visual Guide to Attention Variants in Modern LLMs. Ahead of AI. https://magazine.sebastianraschka.com/p/visual-attention-variants

- ### Provenance
  - sources:: Vaswani et al., "Attention Is All You Need", arXiv:1706.03762 (2017)
  - migration-date:: 2026-04-26T00:00:00Z
