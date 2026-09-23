---
okf_version: "0.2"
type: Class
title: SwiGLU
resource: urn:ngm:class:swi-glu
domain: ai
description: SwiGLU is a gated activation function for neural networks that combines the Swish (SiLU) nonlinearity with a Gated Linear Unit, computing the element-wise product of a Swish-activated projection and a linear gate projection. It is widely used in the feed-forward sublayers of modern transformer models because it empirically improves quality over ReLU or GELU at comparable cost. Its gating mechanism
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:neural-network
relatedTo:
  - urn:ngm:class:feed-forward-network
  - urn:ngm:class:transformers
---

# SwiGLU

SwiGLU is a gated activation function for neural networks that combines the Swish (SiLU) nonlinearity with a Gated Linear Unit, computing the element-wise product of a Swish-activated projection and a linear gate projection. It is widely used in the feed-forward sublayers of modern transformer models because it empirically improves quality over ReLU or GELU at comparable cost. Its gating mechanism gives the network a learnable, input-dependent pathway through each feed-forward block.
