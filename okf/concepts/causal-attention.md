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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Causal Attention

Causal Attention (also called masked self-attention) is an attention mechanism where each token position attends only to itself and earlier positions in the sequence, enforced via an upper-triangular mask applied before softmax. This unidirectional constraint is essential for autoregressive language model training and inference, ensuring predictions at position i depend only on positions less than i.
