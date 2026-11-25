---
okf_version: "0.2"
type: Class
title: TPU
resource: urn:ngm:class:tpu
domain: artificial-intelligence
description: Tensor Processing Unit — Google's custom ASIC optimised for the dense matrix multiplications that dominate neural network training and inference. TPUs use systolic arrays to achieve high throughput on 8-bit and 16-bit arithmetic at significantly lower energy per FLOP than general-purpose GPUs, and are available via Google Cloud as Cloud TPUs for large-scale model training.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:ai-infrastructure
  - urn:ngm:class:ai-hardware
  - urn:ngm:class:artificial-intelligence
enables:
  - urn:ngm:class:distributed-training
  - urn:ngm:class:large-language-model
uses:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:model-training
relatedTo:
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:hardware-acceleration
  - urn:ngm:class:edge-ai-accelerator
  - urn:ngm:class:fpga
  - urn:ngm:class:npu
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# TPU

Tensor Processing Unit — Google's custom ASIC optimised for the dense matrix multiplications that dominate neural network training and inference. TPUs use systolic arrays to achieve high throughput on 8-bit and 16-bit arithmetic at significantly lower energy per FLOP than general-purpose GPUs, and are available via Google Cloud as Cloud TPUs for large-scale model training.
