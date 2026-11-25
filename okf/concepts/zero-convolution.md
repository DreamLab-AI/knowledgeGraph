---
okf_version: "0.2"
type: Class
title: Zero Convolution
resource: urn:ngm:class:zero-convolution
domain: artificial-intelligence
description: "A zero convolution is a 1x1 convolutional layer whose weights and bias are initialised to zero before training. Used in ControlNet, it connects a trainable copy of a diffusion model's encoder blocks to the frozen base network so that, at the start of training, the added conditioning branch contributes nothing and the combined model reproduces the original pretrained behaviour exactly. As training "
maturity: emerging
quality: 0.55
is-a:
  - urn:ngm:class:control-net
partOf:
  - urn:ngm:class:control-net
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Zero Convolution

A zero convolution is a 1x1 convolutional layer whose weights and bias are initialised to zero before training. Used in ControlNet, it connects a trainable copy of a diffusion model's encoder blocks to the frozen base network so that, at the start of training, the added conditioning branch contributes nothing and the combined model reproduces the original pretrained behaviour exactly. As training proceeds, the zero convolution's weights grow away from zero, progressively and stably introducing the effect of the new conditioning signal.
