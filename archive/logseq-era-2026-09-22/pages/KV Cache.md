public:: true

# KV Cache
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:kv-cache",
  "@type": "Page",
  "vc:slug": "kv-cache",
  "title": "KV Cache",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:kv-cache",
  "@type": "Class",
  "label": "KV Cache",
  "definition": "A KV Cache (Key-Value Cache) in transformer-based language models is a memory structure that stores the computed key and value projection tensors from the multi-head self-attention mechanism for all previously processed tokens in a sequence, allowing autoregressive decoding to reuse these intermediate results rather than recomputing them at every generation step, thereby reducing the per-token computational cost from O(N²) to O(N) in generation. Each decoder layer maintains its own KV cache, which grows linearly with sequence length and model width, making memory bandwidth and GPU HBM capacity the primary constraints on inference throughput for long-context models. KV cache management strategies — including paged allocation (PagedAttention), prefix sharing, quantisation, and off-loading — are critical determinants of serving efficiency and cost.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:inference-engine",
    "label": "Inference Engine"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:transformer-architecture",
        "label": "Transformer Architecture"
      },
      {
        "@id": "urn:ngm:class:inference-engine",
        "label": "Inference Engine"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:gpu-memory",
        "label": "GPU Memory"
      },
      {
        "@id": "urn:ngm:class:high-bandwidth-memory",
        "label": "High Bandwidth Memory"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:speculative-decoding",
        "label": "Speculative Decoding"
      },
      {
        "@id": "urn:ngm:class:inference",
        "label": "Inference"
      },
      {
        "@id": "urn:ngm:class:autoregressive-decoding",
        "label": "Autoregressive Decoding"
      },
      {
        "@id": "urn:ngm:class:prompt-caching",
        "label": "Prompt Caching"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:attention-mechanism",
        "label": "Attention Mechanism"
      },
      {
        "@id": "urn:ngm:class:self-attention",
        "label": "Self Attention"
      },
      {
        "@id": "urn:ngm:class:query-key-value",
        "label": "Query Key Value"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:paged-attention",
        "label": "PagedAttention"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:flash-attention",
        "label": "Flash Attention"
      },
      {
        "@id": "urn:ngm:class:gpu-compute",
        "label": "GPU Compute"
      },
      {
        "@id": "urn:ngm:class:hardware-acceleration",
        "label": "Hardware Acceleration"
      },
      {
        "@id": "urn:ngm:class:quantisation",
        "label": "Quantisation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:linear-attention",
        "label": "Linear Attention"
      },
      {
        "@id": "urn:ngm:class:state-space-model",
        "label": "State Space Model"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:context-window",
        "label": "Context Window"
      },
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Models"
      },
      {
        "@id": "urn:ngm:class:grouped-query-attention",
        "label": "Grouped Query Attention"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:virtual-memory-management",
        "label": "Virtual Memory Management"
      },
      {
        "@id": "urn:ngm:class:distributed-inference",
        "label": "Distributed Inference"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:key-value-cache",
      "label": "Key Value Cache"
    },
    {
      "@id": "urn:ngm:class:attention-cache",
      "label": "Attention Cache"
    }
  ],
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - A KV Cache is the per-layer storage of pre-computed key and value tensors from the [[Attention Mechanism]] of transformer decoders, enabling autoregressive token generation in [[Large Language Models]] to reuse prior computation across decoding steps and thereby convert quadratic per-step attention cost into linear amortised cost over the [[Context Window]].

- ### Relationships
  - The KV Cache is an optimisation artefact of the [[Self Attention]] mechanism: at each new token, the model queries all prior keys and values via dot-product attention over [[Query Key Value]] projections; caching these projections avoids re-running the entire prefix through all layers. [[Flash Attention]] reformulates the attention kernel with tiled computation to reduce memory reads and writes, complementing KV caching. As [[Context Window]] lengths extend to 128K–1M tokens, KV cache memory footprint becomes the dominant [[GPU Compute]] constraint, driving techniques such as grouped-query attention (sharing KV heads across query heads) and sliding-window attention. [[Speculative Decoding]] relies on a shared KV cache between draft and target models to achieve speedups. [[Hardware Acceleration]] via high-bandwidth memory (HBM3) on H100/H200 GPUs is essential for sustaining the memory-bandwidth-bound KV cache read throughput.

- ### Content
  - The KV cache is an immediate consequence of the transformer architecture introduced by Vaswani et al. (2017). In training, full self-attention over the sequence is computed in one pass using masking; in autoregressive generation, however, each new token must attend to all previous tokens. Without caching, this requires recomputing key and value projections for the entire prefix at every decoding step — an O(N²) operation for a sequence of length N. The KV cache stores the result of these projections after they are computed, making each subsequent decoding step O(N) in attention operations (though still O(N) in memory accesses for reading the cache).

  - Memory management for KV caches became a research frontier as context lengths grew from 2K (GPT-2) to 128K (Claude 3, GPT-4 Turbo) and beyond. A single 128K-token context in a 70B-parameter model with FP16 storage requires roughly 32 GB of KV cache alone — exceeding a single H100 GPU's HBM. PagedAttention (vLLM, 2023) solved this by treating KV cache memory as virtualised OS-style pages, allocating cache blocks non-contiguously and enabling copy-on-write for prefix sharing across concurrent requests. Prefix caching (also called prompt caching, as offered by Anthropic and OpenAI APIs) stores the KV cache for static system-prompt prefixes across requests, reducing time-to-first-token for chatbots with long system prompts from O(N) to O(1). KV cache quantisation (INT8, FP8, INT4) trades slight precision for halving or quartering memory footprint.

  - The significance of KV cache engineering for practical LLM deployment is enormous. A naive implementation serving 100 concurrent users with 8K-token contexts requires the same memory as a second model instantiation. PagedAttention and similar systems typically increase GPU utilisation from 20-40% (under naive memory management) to 60-80%, reducing inference cost proportionately. For long-document applications — legal analysis, code review of large repositories, RAG over book-length documents — KV cache efficiency determines whether the application is economically viable at all. Anthropic's prompt caching feature (2024) demonstrated that sharing KV cache for identical prefixes can reduce costs by up to 90% for applications with stable system prompts.

  - By 2024-2025, KV cache management has become a distinct systems engineering sub-field. Disaggregated serving (separating prefill and decode phases across different GPU pools) exploits the different compute-bandwidth profiles of each phase. Cascade inference pipelines use small KV caches on-chip and larger KV caches on CPU DRAM or SSDs for ultra-long contexts (10M+ tokens). Multi-query attention (MQA) and grouped-query attention (GQA) reduce KV cache size by sharing key/value heads across multiple query heads with minimal accuracy loss. Research into linear attention and state-space models (Mamba, RWKV) aims to replace the quadratically-growing KV cache with fixed-size recurrent state, though at the cost of full attention expressivity.

