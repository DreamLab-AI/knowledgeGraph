---
okf_version: "0.2"
type: Class
title: Attention Mask
resource: urn:ngm:class:attention-mask
domain: artificial-intelligence
description: A mechanism that controls which positions in a sequence can attend to which other positions, typically implemented by adding large negative values before softmax to zero out unwanted attention weights; used for causal masking in autoregressive decoders and padding masking in batched variable-length sequences.
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:ai-model-architecture
enables:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:albert
bridgesTo:
  - urn:ngm:class:telecollaboration
uses:
  - urn:ngm:class:natural-language-processing
partOf:
  - urn:ngm:class:transformer-architecture
relatedTo:
  - urn:ngm:class:neural-network-architecture
  - urn:ngm:class:bart
---

# Attention Mask

A mechanism that controls which positions in a sequence can attend to which other positions, typically implemented by adding large negative values before softmax to zero out unwanted attention weights; used for causal masking in autoregressive decoders and padding masking in batched variable-length sequences.
