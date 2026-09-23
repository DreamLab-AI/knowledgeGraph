---
okf_version: "0.2"
type: Class
title: Flash Attention
resource: urn:ngm:class:flash-attention
domain: artificial-intelligence
description: Flash Attention is an IO-aware, exact attention algorithm that exploits the GPU memory hierarchy by tiling query, key, and value matrices to keep intermediate activations in fast on-chip SRAM rather than the much slower high-bandwidth DRAM (HBM), thereby eliminating the O(N²) memory materialisation of standard scaled dot-product attention. By applying an online softmax recomputation strategy, it a
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:attention-mechanism
requires:
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:cuda
  - urn:ngm:class:transformer-architecture
enables:
  - urn:ngm:class:long-context-modelling
  - urn:ngm:class:large-language-models
  - urn:ngm:class:inference
  - urn:ngm:class:multi-head-attention
dependsOn:
  - urn:ngm:class:high-bandwidth-memory
  - urn:ngm:class:model-training
implements:
  - urn:ngm:class:scaled-dot-product-attention
  - urn:ngm:class:online-softmax
contrastsWith:
  - urn:ngm:class:linear-attention
  - urn:ngm:class:sparse-attention
  - urn:ngm:class:gradient-checkpointing
bridgesTo:
  - urn:ngm:class:hardware-accelerator-design
uses:
  - urn:ngm:class:tiling
  - urn:ngm:class:sram
  - urn:ngm:class:kernel-fusion
  - urn:ngm:class:mixed-precision-training
supports:
  - urn:ngm:class:kv-cache
  - urn:ngm:class:continuous-batching
  - urn:ngm:class:speculative-decoding
relatedTo:
  - urn:ngm:class:memory-bandwidth-optimisation
  - urn:ngm:class:paged-attention
  - urn:ngm:class:rotary-position-embedding
  - urn:ngm:class:tensor-parallelism
---

# Flash Attention

Flash Attention is an IO-aware, exact attention algorithm that exploits the GPU memory hierarchy by tiling query, key, and value matrices to keep intermediate activations in fast on-chip SRAM rather than the much slower high-bandwidth DRAM (HBM), thereby eliminating the O(N²) memory materialisation of standard scaled dot-product attention. By applying an online softmax recomputation strategy, it achieves bitwise-identical output to vanilla attention while reducing HBM reads and writes proportionally to the SRAM tile size. Originally introduced by Dao et al. in 2022, it has been extended through FlashAttention-2 (improved thread-block partitioning) and FlashAttention-3 (Hopper-native asynchrony and FP8 support), and is now embedded in PyTorch, JAX, vLLM, and virtually every frontier model training pipeline.
