public:: true

# flash attention
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d45020a4a9f47679ba837f4975301c064ac0e0751059c0a2da55fa75c803d0c9",
  "@type": "Page",
  "vc:slug": "flash-attention",
  "title": "flash attention",
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
  "@id": "urn:ngm:class:flash-attention",
  "@type": "Class",
  "label": "Flash Attention",
  "definition": "Flash Attention is an IO-aware, exact attention algorithm that exploits GPU memory hierarchy by tiling the query, key, and value matrices to keep intermediate activations in fast on-chip SRAM rather than the much slower high-bandwidth DRAM (HBM), eliminating the O(N²) memory materialisation of the standard scaled dot-product attention. Introduced by Dao et al. at Stanford in 2022 and extended in Flash Attention 2 and 3, it achieves the same numerical output as standard attention whilst reducing HBM reads and writes by a factor proportional to the SRAM tile size, yielding 2–4× wall-clock speedups for long sequences with sub-linear memory growth. It is now a standard component of transformer training and inference frameworks including PyTorch, JAX, and vLLM.",
  "domain": "artificial-intelligence",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-infrastructure",
      "label": "AI Infrastructure"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:class:inference", "label": "Inference"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:attention-mechanism", "label": "Attention Mechanism"},
      {"@id": "urn:ngm:class:gpu-compute", "label": "GPU Compute"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:transformer-architecture", "label": "Transformer Architecture"},
      {"@id": "urn:ngm:class:model-training", "label": "Model Training"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Flash Attention is an IO-aware, exact attention algorithm that exploits GPU memory hierarchy by tiling the query, key, and value matrices to keep intermediate activations in fast on-chip SRAM rather than the much slower high-bandwidth DRAM (HBM), eliminating the O(N²) memory materialisation of the standard scaled dot-product attention. Introduced by Dao et al. at Stanford in 2022 and extended in Flash Attention 2 and 3, it achieves the same numerical output as standard attention whilst reducing HBM reads and writes by a factor proportional to the SRAM tile size, yielding 2–4× wall-clock speedups for long sequences with sub-linear memory growth. It is now a standard component of transformer training and inference frameworks including PyTorch, JAX, and vLLM.

- ### Semantic Classification
  - owl-class:: flash-attention:Flash Attention
  - owl-role:: Concept

- ### Relationships
  - enables [[Large Language Models]]
  - enables [[Inference]]
  - requires [[Attention Mechanism]]
  - requires [[GPU Compute]]
  - relatedTo [[Transformer Architecture]]
  - relatedTo [[Model Training]]

- ### Content
  - The core insight of Flash Attention is that the bottleneck of transformer attention is not arithmetic throughput but memory bandwidth: loading the N×N attention matrix from GPU HBM is the dominant cost for long sequences. By decomposing the attention computation into tiles that fit in the GPU's on-chip SRAM, and by using the online softmax trick to compute correct softmax normalisation without materialising the full N×N matrix, Flash Attention performs the entire attention forward pass with O(N) HBM accesses instead of O(N²), at the cost of additional arithmetic (recomputation during the backward pass).
  - Flash Attention 2 improved the original implementation by better partitioning work across GPU thread blocks and warps, reducing non-matrix-multiplication operations, and supporting causal masking with minimal overhead, achieving near-peak hardware utilisation on A100 GPUs. Flash Attention 3 targets Hopper architecture (H100) features including asynchronous data movement, FP8 precision, and warp specialisation, pushing utilisation above 75% of theoretical FP16 peak. These advances directly unlock longer context windows for language models and larger batch sizes for training.
  - Flash Attention is integrated natively into PyTorch's scaled_dot_product_attention function (via the SDPBackend dispatcher), making it transparent to model authors. It is used in training runs for GPT-4, Llama 2, Mistral, and most modern frontier models. Related techniques include linear attention approximations (Performer, Longformer, BigBird) that trade exactness for further memory reduction, and paged attention (used in vLLM) that manages KV-cache memory for continuous batching during inference. Flash Attention forms part of the broader ecosystem of compute-efficient transformer training alongside mixed-precision training and gradient checkpointing.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
