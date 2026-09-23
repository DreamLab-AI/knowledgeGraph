---
okf_version: "0.2"
type: Class
title: Causal Attention
resource: urn:ngm:class:causal-attention
domain: artificial-intelligence
description: Causal Attention (also called masked self-attention) is an attention mechanism where each token position attends only to itself and earlier positions in the sequence, enforced via an upper-triangular mask applied before softmax. This unidirectional constraint is essential for autoregressive language model training and inference, ensuring predictions at position i depend only on positions less than
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:ai-model-architecture
  - urn:ngm:class:attention-mechanism
requires:
  - urn:ngm:class:self-attention
enables:
  - urn:ngm:class:gpt
  - urn:ngm:class:language-modeling
contrastsWith:
  - urn:ngm:class:transformer-architecture
bridgesTo:
  - urn:ngm:class:computer-vision
partOf:
  - urn:ngm:class:transformer
  - urn:ngm:class:decoder
---

# Causal Attention

Causal Attention (also called masked self-attention) is an attention mechanism where each token position attends only to itself and earlier positions in the sequence, enforced via an upper-triangular mask applied before softmax. This unidirectional constraint is essential for autoregressive language model training and inference, ensuring predictions at position i depend only on positions less than i.
