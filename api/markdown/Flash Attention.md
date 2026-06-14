public:: true
alias:: FlashAttention

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
  "definition": "Flash Attention is an IO-aware, exact attention algorithm that exploits the GPU memory hierarchy by tiling query, key, and value matrices to keep intermediate activations in fast on-chip SRAM rather than the much slower high-bandwidth DRAM (HBM), thereby eliminating the O(N²) memory materialisation of standard scaled dot-product attention. By applying an online softmax recomputation strategy, it achieves bitwise-identical output to vanilla attention while reducing HBM reads and writes proportionally to the SRAM tile size. Originally introduced by Dao et al. in 2022, it has been extended through FlashAttention-2 (improved thread-block partitioning) and FlashAttention-3 (Hopper-native asynchrony and FP8 support), and is now embedded in PyTorch, JAX, vLLM, and virtually every frontier model training pipeline.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:attention-mechanism",
      "label": "Attention Mechanism"
    }
  ],
  "relations": {
    "implements": [
      {"@id": "urn:ngm:class:scaled-dot-product-attention", "label": "Scaled Dot-Product Attention"},
      {"@id": "urn:ngm:class:online-softmax", "label": "Online Softmax"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:tiling", "label": "Tiling"},
      {"@id": "urn:ngm:class:sram", "label": "SRAM"},
      {"@id": "urn:ngm:class:kernel-fusion", "label": "Kernel Fusion"},
      {"@id": "urn:ngm:class:mixed-precision-training", "label": "Mixed Precision Training"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:gpu-compute", "label": "GPU Compute"},
      {"@id": "urn:ngm:class:cuda", "label": "CUDA"},
      {"@id": "urn:ngm:class:transformer-architecture", "label": "Transformer Architecture"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:long-context-modelling", "label": "Long Context Modelling"},
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:class:inference", "label": "Inference"},
      {"@id": "urn:ngm:class:multi-head-attention", "label": "Multi-Head Attention"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:high-bandwidth-memory", "label": "High-Bandwidth Memory"},
      {"@id": "urn:ngm:class:model-training", "label": "Model Training"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:linear-attention", "label": "Linear Attention"},
      {"@id": "urn:ngm:class:sparse-attention", "label": "Sparse Attention"},
      {"@id": "urn:ngm:class:gradient-checkpointing", "label": "Gradient Checkpointing"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:kv-cache", "label": "KV Cache"},
      {"@id": "urn:ngm:class:continuous-batching", "label": "Continuous Batching"},
      {"@id": "urn:ngm:class:speculative-decoding", "label": "Speculative Decoding"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:memory-bandwidth-optimisation", "label": "Memory Bandwidth Optimisation"},
      {"@id": "urn:ngm:class:paged-attention", "label": "Paged Attention"},
      {"@id": "urn:ngm:class:rotary-position-embedding", "label": "Rotary Position Embedding"},
      {"@id": "urn:ngm:class:tensor-parallelism", "label": "Tensor Parallelism"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:hardware-accelerator-design", "label": "Hardware Accelerator Design"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:flashattention", "label": "FlashAttention"}
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Flash Attention is an IO-aware, exact [[Attention Mechanism]] algorithm designed to overcome the [[Memory Bandwidth Optimisation]] bottleneck inherent in standard [[Scaled Dot-Product Attention]]. Rather than materialising the full N×N attention matrix in [[High-Bandwidth Memory]] (HBM), it tiles the query, key, and value matrices into blocks that reside entirely in the GPU's fast on-chip [[SRAM]], using an [[Online Softmax]] accumulation trick to produce numerically identical results with far fewer HBM reads and writes. First published by Tri Dao and colleagues at Stanford in 2022, Flash Attention has become the de facto standard kernel used across [[Transformer Architecture]] training and [[Inference]] pipelines worldwide.

- ### Overview
  - The standard [[Scaled Dot-Product Attention]] formulation requires materialising an N×N matrix of attention scores (where N is sequence length), then applying [[Online Softmax]] row-wise, then multiplying by value vectors. For long sequences this matrix alone can consume tens of gigabytes of [[High-Bandwidth Memory]], making memory bandwidth — not arithmetic throughput — the true bottleneck on modern [[GPU Compute]] hardware.
  - Flash Attention reframes the computation as an IO complexity problem: the goal is to minimise the number of bytes transferred between HBM and on-chip [[SRAM]], not just minimise floating-point operations. By processing attention in small tiles that fit in SRAM and maintaining running softmax statistics (max and sum) to merge tile-level results, the algorithm achieves O(N) HBM accesses for the forward pass instead of O(N²).
  - The backward pass avoids storing the N×N attention matrix by recomputing it tile by tile from the saved Q, K, V tensors — a form of selective [[Gradient Checkpointing]] that trades arithmetic for memory. This insight makes Flash Attention both faster and more memory-efficient than standard attention at long sequence lengths.
  - The algorithm is exact: its output is bitwise-identical (up to floating-point rounding) to that of the naive attention implementation, unlike approximate methods such as [[Linear Attention]] or [[Sparse Attention]].

- ### Key Mechanisms
  - **Tiling** — Q, K, V matrices are divided into blocks sized to fit the GPU's on-chip [[SRAM]]. Each block pair (Q_i, K_j) is loaded once, attention scores are accumulated, and the block is discarded. [[Tiling]] eliminates repeated HBM traffic.
  - **Online Softmax** — Stable, incremental softmax computation using a running maximum and normalisation sum, pioneered by Milakov & Gimelshein (2018). Flash Attention applies this per tile so that global softmax can be computed without ever storing the full N×N score matrix.
  - **Kernel Fusion** — The entire attention forward pass (QK^T matmul, scale, optional mask, softmax, dropout, V matmul) is fused into a single [[CUDA]] kernel, eliminating intermediate HBM round-trips and the kernel-launch overhead of separate ops.
  - **Backward Recomputation** — During the backward pass, the attention matrix is not stored from the forward pass; it is recomputed on-the-fly from Q, K, V, reducing the memory footprint of training long sequences.
  - **Causal Masking** — Autoregressive [[Large Language Models]] require causal (lower-triangular) attention masks. Flash Attention handles this efficiently by skipping upper-triangular tile pairs entirely, roughly halving FLOPs for decoder-only models.
  - **Multi-Head Support** — Each head of [[Multi-Head Attention]] is processed independently in parallel, allowing the tiling strategy to scale with the number of attention heads.

- ### Versions and Evolution
  - **FlashAttention v1 (2022)** — Original Dao et al. paper. Demonstrated 2–4× end-to-end training speedup on [[Large Language Models]] with O(N) memory scaling. Supported A100 and V100 GPUs.
  - **FlashAttention-2 (2023)** — Rewrote the CUDA kernel to better exploit GPU parallelism: improved work partitioning across thread blocks and warps, reduced non-matmul operations in the inner loop, and added explicit support for [[Multi-Query Attention]] and [[Grouped Query Attention]]. Achieved near-peak FP16 throughput on A100.
  - **FlashAttention-3 (2024)** — Targeted NVIDIA Hopper (H100) architecture features: warp specialisation for overlapping computation and memory transfers, asynchronous data movement using the TMA unit, and [[Mixed Precision Training]] with FP8. Pushed utilisation above 75% of theoretical FP16 peak and above 1.2 PFLOPs/s on H100.
  - Vendor libraries including cuDNN (NVIDIA), ROCm/HIP (AMD), and XLA (Google) have incorporated Flash Attention kernels or equivalent IO-aware implementations.

- ### Applications and Use Cases
  - **Foundation Model Training** — Flash Attention is used in training of GPT-4, Llama 2 and 3, Mistral, Falcon, Gemma, and virtually every frontier [[Large Language Models]] released since 2023. It enables practical training on sequences of 4k–128k tokens.
  - **Long-Context Modelling** — The sub-linear memory growth of Flash Attention is the primary enabler of [[Long Context Modelling]] (32k–1M token context windows) without prohibitive memory cost. Models like Claude 3, Gemini 1.5 Pro, and GPT-4o exploit this.
  - **[[Inference]] Serving** — Flash Attention accelerates prefill (processing the input prompt) in LLM serving stacks like vLLM, TGI, and TensorRT-LLM. Combined with [[KV Cache]] management and [[Paged Attention]], it underpins high-throughput [[Continuous Batching]] inference.
  - **Multimodal Models** — Vision transformers (ViT) and multimodal architectures (CLIP, Flamingo, LLaVA) also benefit from Flash Attention for image patch sequences, particularly at high resolutions.
  - **[[Speculative Decoding]]** — Efficient verification steps during speculative decoding depend on fast attention for the draft and target model, making Flash Attention relevant to latency-optimised serving.
  - **Retrieval-Augmented Generation** — Long retrieval contexts (many retrieved documents concatenated) are feasible at inference time only with IO-aware attention; Flash Attention makes this practical.
  - **Scientific Sequence Modelling** — Protein language models (ESM-2, AlphaFold 3), genomics transformers, and climate models working on long sequences all leverage Flash Attention.

- ### Integration in Frameworks
  - **PyTorch** — `torch.nn.functional.scaled_dot_product_attention` (PyTorch 2.0+) dispatches to Flash Attention via the `SDPBackend.FLASH_ATTENTION` backend automatically when input shapes and dtypes are compatible.
  - **JAX / XLA** — `jax.nn.dot_product_attention` (JAX 0.4.1+) provides a Flash Attention-equivalent that compiles to XLA's IO-aware fused kernel on TPUs and GPUs.
  - **Hugging Face Transformers** — Flash Attention is enabled via `attn_implementation="flash_attention_2"` argument on supported model classes.
  - **vLLM** — Uses Flash Attention for prefill and a [[Paged Attention]] variant for the decode step to efficiently manage the [[KV Cache]] across concurrent requests.
  - **Triton** — The Triton open-source GPU programming language was used by the Flash Attention authors to write portable, high-performance kernels that run on non-CUDA hardware.

- ### Relationships
  - implements:: [[Scaled Dot-Product Attention]]
  - implements:: [[Online Softmax]]
  - uses:: [[Tiling]]
  - uses:: [[SRAM]]
  - uses:: [[Kernel Fusion]]
  - uses:: [[Mixed Precision Training]]
  - requires:: [[GPU Compute]]
  - requires:: [[CUDA]]
  - requires:: [[Transformer Architecture]]
  - enables:: [[Long Context Modelling]]
  - enables:: [[Large Language Models]]
  - enables:: [[Inference]]
  - enables:: [[Multi-Head Attention]]
  - dependsOn:: [[High-Bandwidth Memory]]
  - dependsOn:: [[Model Training]]
  - contrastsWith:: [[Linear Attention]]
  - contrastsWith:: [[Sparse Attention]]
  - contrastsWith:: [[Gradient Checkpointing]]
  - supports:: [[KV Cache]]
  - supports:: [[Continuous Batching]]
  - supports:: [[Speculative Decoding]]
  - relatedTo:: [[Memory Bandwidth Optimisation]]
  - relatedTo:: [[Paged Attention]]
  - relatedTo:: [[Rotary Position Embedding]]
  - relatedTo:: [[Tensor Parallelism]]
  - bridges-to:: [[Hardware Accelerator Design]]

- ### Standards and Context
  - Flash Attention does not correspond to a formal standards-body specification; it is an open-source research artefact (Apache 2.0 licence) hosted at `github.com/Dao-AILab/flash-attention`.
  - The underlying mathematical primitives ([[Scaled Dot-Product Attention]] and softmax normalisation) are specified in the original "Attention is All You Need" (Vaswani et al., 2017) paper and are incorporated into the ONNX operator set and PyTorch's ATen library.
  - Hardware vendors (NVIDIA via cuDNN, AMD via ROCm, Intel via oneDNN) incorporate IO-aware attention kernels inspired by Flash Attention in their deep learning primitive libraries, creating de facto hardware support across the industry.
  - The [[CUDA]] programming model, specifically the shared memory (SRAM) hierarchy and warp/thread-block execution model, is the primary target platform. Hopper-generation features (TMA, warp specialisation) exploited in FlashAttention-3 are documented in NVIDIA's PTX ISA and CUDA programming guide.
  - Related community standards include the OpenAI Triton language (for portable GPU kernel authorship) and the MLIR/Linalg dialect in LLVM, both of which have been used to port Flash Attention patterns to non-CUDA backends.

- ### Provenance
  - sources:: Tri Dao et al. "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness" (NeurIPS 2022); Dao "FlashAttention-2" (ICLR 2024); Shah et al. "FlashAttention-3" (2024 preprint); PyTorch 2.0 release notes; NVIDIA cuDNN documentation
  - updated:: 2026-06-13
