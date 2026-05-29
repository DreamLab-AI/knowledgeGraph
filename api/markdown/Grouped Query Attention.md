public:: true

# grouped query attention
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e4f4cc89d5f38d59122d4cb8da50375987d4fdb979103504c0808099c3bbdd91",
  "@type": "Page",
  "vc:slug": "grouped-query-attention",
  "title": "grouped query attention",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:grouped-query-attention",
  "@type": "Class",
  "label": "Grouped Query Attention",
  "definition": "Grouped Query Attention (GQA) is a transformer attention variant that partitions the set of query heads into G groups, each group sharing a single pair of key and value heads, thereby interpolating between Multi-Head Attention (MHA, where each query head has its own KV head) and Multi-Query Attention (MQA, where all query heads share one KV head). GQA reduces the key-value cache memory footprint during autoregressive inference—proportionally to the number of groups—while preserving model quality closer to MHA than MQA. It has been adopted in production LLMs including Llama 2, Mistral, and Gemma.",
  "domain": "artificial-intelligence",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-model-architecture",
      "label": "AI Model Architecture"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:attention-mechanism", "label": "Attention Mechanism"},
      {"@id": "urn:ngm:class:transformer-architecture", "label": "Transformer Architecture"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:multi-head-attention", "label": "Multi-Head Attention"},
      {"@id": "urn:ngm:class:flash-attention", "label": "Flash Attention"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:inference", "label": "Inference"},
      {"@id": "urn:ngm:class:speculative-decoding", "label": "Speculative Decoding"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Grouped Query Attention (GQA) is a transformer attention variant that partitions the set of query heads into G groups, each group sharing a single pair of key and value heads, thereby interpolating between Multi-Head Attention (MHA, where each query head has its own KV head) and Multi-Query Attention (MQA, where all query heads share one KV head). GQA reduces the key-value cache memory footprint during autoregressive inference—proportionally to the number of groups—while preserving model quality closer to MHA than MQA. It has been adopted in production LLMs including Llama 2, Mistral, and Gemma.

- ### Semantic Classification
  - owl-class:: grouped-query-attention:Grouped Query Attention
  - owl-role:: Concept

- ### Relationships
  - uses [[Attention Mechanism]]
  - uses [[Transformer Architecture]]
  - contrastsWith [[Multi-Head Attention]]
  - contrastsWith [[Flash Attention]]
  - enables [[Inference]]
  - enables [[Speculative Decoding]]

- ### Content
  The computational bottleneck during autoregressive LLM generation is memory bandwidth: at each decoding step, the full key-value (KV) cache from all prior tokens must be loaded from GPU HBM into SRAM for the attention computation. In standard Multi-Head Attention with H heads, the KV cache scales as 2 × H × d_head × L bytes (where L is sequence length), which becomes prohibitive for long contexts and large batch sizes.

  Grouped Query Attention addresses this by reducing KV heads from H to G (where 1 ≤ G < H). For G groups, each of the G key-value head pairs is shared across H/G query heads. The effective KV cache size shrinks by a factor of H/G, directly reducing memory bandwidth requirements at inference time and enabling larger effective batch sizes on fixed GPU memory budgets.

  The technique was introduced alongside uptraining experiments showing that existing MHA checkpoints could be converted to GQA by mean-pooling the H key-value projections into G groups, recovering near-original quality at a fraction of the cache cost. Flash Attention complements GQA by optimising the SRAM access pattern during the attention kernel itself, whereas GQA reduces the total data volume that must be loaded. Together they are key inference efficiency techniques in production LLM serving.

  Speculative Decoding benefits from GQA because the draft model's KV cache is smaller, reducing memory pressure when running both draft and target models simultaneously. GQA is now standard in publicly released LLM families and is typically specified as a hyperparameter (number of KV heads) in model architecture cards.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
