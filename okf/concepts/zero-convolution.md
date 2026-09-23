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
---

# Zero Convolution

A zero convolution is a 1x1 convolutional layer whose weights and bias are initialised to zero before training. Used in ControlNet, it connects a trainable copy of a diffusion model's encoder blocks to the frozen base network so that, at the start of training, the added conditioning branch contributes nothing and the combined model reproduces the original pretrained behaviour exactly. As training proceeds, the zero convolution's weights grow away from zero, progressively and stably introducing the effect of the new conditioning signal.
