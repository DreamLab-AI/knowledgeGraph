public:: true

# Paged Attention

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:paged-attention", "@type":"Page", "title":"Paged Attention", "vc:slug":"paged-attention", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:paged-attention",
  "@type":"Class",
  "label":"Paged Attention",
  "definition":"Paged attention is a memory management technique for large language model inference that partitions the key-value cache into fixed-size blocks managed like virtual memory pages. By decoupling logical token positions from physical memory layout it eliminates fragmentation, enables near-zero waste in cache allocation and allows sharing of cached prefixes across requests. Introduced in the vLLM serving system, it substantially increases throughput for high-concurrency inference.",
  "domain":"artificial-intelligence",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:kv-cache","label":"KV Cache"}],
  "relations":{
    "implements":[{"@id":"urn:ngm:class:memory-management","label":"Memory Management"},{"@id":"urn:ngm:class:continuous-batching","label":"Continuous Batching"}],
    "hasPart":[{"@id":"urn:ngm:class:kv-cache","label":"KV Cache"}],
    "requires":[{"@id":"urn:ngm:class:gpu-memory","label":"GPU Memory"},{"@id":"urn:ngm:class:attention-mechanism","label":"Attention Mechanism"}],
    "enables":[{"@id":"urn:ngm:class:model-serving","label":"Model Serving"},{"@id":"urn:ngm:class:throughput","label":"Throughput"}],
    "supports":[{"@id":"urn:ngm:class:inference","label":"Inference"},{"@id":"urn:ngm:class:large-language-model","label":"Large Language Model"}],
    "dependsOn":[{"@id":"urn:ngm:class:transformer","label":"Transformer"}],
    "contrastsWith":[{"@id":"urn:ngm:class:flash-attention","label":"Flash Attention"}],
    "relatedTo":[{"@id":"urn:ngm:class:speculative-decoding","label":"Speculative Decoding"},{"@id":"urn:ngm:class:model-optimisation-and-performance","label":"Model Optimisation and Performance"}],
    "bridgesTo":[{"@id":"urn:ngm:class:gpu","label":"GPU"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Paged attention is a memory management technique for large language model inference that partitions the [[KV Cache]] into fixed-size blocks managed like virtual memory pages.
- It decouples logical token positions from physical [[GPU Memory]] layout, eliminating fragmentation.
- It allows cached prefixes to be shared across requests, reducing redundant computation.
- Introduced in the vLLM serving system, it lifts [[Throughput]] for high-concurrency [[Inference]].
- ### Overview
- Autoregressive transformer inference caches the keys and values of previous tokens so each new token need not recompute attention over the full history. This KV cache grows with sequence length and quickly dominates memory.
- Naive contiguous allocation of the KV cache wastes memory through internal and external fragmentation, especially when serving many requests of varying and unpredictable lengths.
- Paged attention borrows the operating-system idea of paging: the cache is split into small fixed-size blocks, and a block table maps each request's logical tokens to physical blocks scattered across memory.
- Because blocks are uniform and indirected through a table, memory waste falls to a few per cent, and identical prefixes such as shared system prompts can point to the same physical blocks via copy-on-write.
- ### Key aspects
- Block-based partitioning of the key-value cache.
- A per-request block table mapping logical to physical blocks.
- Near-zero internal fragmentation and high memory utilisation.
- Prefix sharing and copy-on-write across requests.
- Tight coupling with continuous batching for serving efficiency.
- ### Mechanisms
- Allocation of KV cache in fixed-size physical blocks.
- Indirection through block tables during attention computation.
- Dynamic block allocation as sequences grow during decoding.
- Copy-on-write sharing of common prefixes between requests.
- ### Applications
- High-throughput LLM serving under heavy concurrency.
- Cost-efficient inference on constrained GPU memory.
- Serving long-context models without prohibitive memory waste.
- Multi-tenant inference where prompt prefixes are shared.
- ### Relationships
- implements:: [[Memory Management]]
- implements:: [[Continuous Batching]]
- hasPart:: [[KV Cache]]
- requires:: [[GPU Memory]]
- requires:: [[Attention Mechanism]]
- enables:: [[Model Serving]]
- enables:: [[Throughput]]
- supports:: [[Inference]]
- supports:: [[Large Language Model]]
- dependsOn:: [[Transformer]]
- contrastsWith:: [[Flash Attention]]
- relatedTo:: [[Speculative Decoding]]
- relatedTo:: [[Model Optimisation and Performance]]
- bridgesTo:: [[GPU]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
