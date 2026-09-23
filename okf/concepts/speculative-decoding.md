---
okf_version: "0.2"
type: Class
title: Speculative Decoding
resource: urn:ngm:class:speculative-decoding
domain: artificial-intelligence
description: Speculative decoding is an inference acceleration technique for autoregressive language models in which a smaller, faster draft model proposes multiple candidate tokens that a larger target model verifies in a single parallel forward pass. Accepted tokens are committed to the output sequence; rejected tokens trigger a corrected sample from the residual distribution, ensuring the final output is st
maturity: established
quality: 0
is-a:
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:rejection-sampling
  - urn:ngm:class:token-verification
  - urn:ngm:class:acceptance-criterion
requires:
  - urn:ngm:class:inference-hardware
  - urn:ngm:class:draft-model
  - urn:ngm:class:shared-vocabulary
enables:
  - urn:ngm:class:real-time-inference
  - urn:ngm:class:low-latency-inference
  - urn:ngm:class:real-time-text-generation
  - urn:ngm:class:llm-serving
dependsOn:
  - urn:ngm:class:parallel-computing
  - urn:ngm:class:parallel-computing
  - urn:ngm:class:gpu-accelerated-inference
implements:
  - urn:ngm:class:rejection-sampling
contrastsWith:
  - urn:ngm:class:autoregressive-decoding
  - urn:ngm:class:beam-search
  - urn:ngm:class:greedy-decoding
bridgesTo:
  - urn:ngm:class:edge-ai
  - urn:ngm:class:real-time-systems
uses:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:autoregressive-generation
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:kv-cache
relatedTo:
  - urn:ngm:class:neural-network-quantisation
  - urn:ngm:class:knowledge-distillation
  - urn:ngm:class:continuous-batching
  - urn:ngm:class:context-window
  - urn:ngm:class:sampling
  - urn:ngm:class:model-compression-for-edge
  - urn:ngm:class:model-quantization
  - urn:ngm:class:knowledge-distillation
  - urn:ngm:class:sampling
---

# Speculative Decoding

Speculative decoding is an inference acceleration technique for autoregressive language models in which a smaller, faster draft model proposes multiple candidate tokens that a larger target model verifies in a single parallel forward pass. Accepted tokens are committed to the output sequence; rejected tokens trigger a corrected sample from the residual distribution, ensuring the final output is statistically identical to sampling from the target model alone. Because modern GPU accelerators are memory-bandwidth-bound during autoregressive generation, batching verification of several candidate tokens substantially increases arithmetic utilisation and can raise effective throughput two to four times without altering the model's output distribution. The technique is now integrated into mainstream inference frameworks and sits at the intersection of model efficiency, hardware utilisation, and production LLM serving.
