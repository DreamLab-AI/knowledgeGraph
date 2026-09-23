---
okf_version: "0.2"
type: Class
title: Bfloat16
resource: urn:ngm:class:bfloat16
domain: artificial-intelligence
description: "Bfloat16 (brain floating point) is a 16-bit floating-point format that keeps the same 8-bit exponent as 32-bit IEEE float but truncates the mantissa to 7 bits. It preserves the dynamic range of single precision while halving memory and bandwidth, making it well suited to deep-learning training and inference. Because it trades precision for range, it avoids the overflow and underflow problems that "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:model-compression
  - urn:ngm:class:mixed-precision-training
requires:
  - urn:ngm:class:tensor-core
enables:
  - urn:ngm:class:inference-optimisation
dependsOn:
  - urn:ngm:class:tensor-processing-unit
contrastsWith:
  - urn:ngm:class:quantisation
bridgesTo:
  - urn:ngm:class:memory-bandwidth
uses:
  - urn:ngm:class:tensor-core
supports:
  - urn:ngm:class:gpu-acceleration
partOf:
  - urn:ngm:class:model-compression
relatedTo:
  - urn:ngm:class:quantisation
  - urn:ngm:class:knowledge-distillation
  - urn:ngm:class:pruning
  - urn:ngm:class:throughput
  - urn:ngm:class:transformer-architecture
---

# Bfloat16

Bfloat16 (brain floating point) is a 16-bit floating-point format that keeps the same 8-bit exponent as 32-bit IEEE float but truncates the mantissa to 7 bits. It preserves the dynamic range of single precision while halving memory and bandwidth, making it well suited to deep-learning training and inference. Because it trades precision for range, it avoids the overflow and underflow problems that affect narrower formats during gradient computation.
