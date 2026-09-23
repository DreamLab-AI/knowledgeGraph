---
okf_version: "0.2"
type: Class
title: LyCORIS
resource: urn:ngm:class:ly-coris
domain: ai
description: LyCORIS (Lora beYond Conventional methods, Other Rank adaptation Implementations for Stable diffusion) is an open-source library implementing a family of parameter-efficient fine-tuning methods for diffusion and other models that extend beyond standard low-rank adaptation. It includes techniques such as LoHa (Hadamard-product decomposition), LoKr (Kronecker-product decomposition), and full or conv
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:parameter-efficient-fine-tuning
enables:
  - urn:ngm:class:fine-tuning
uses:
  - urn:ngm:class:low-rank-adaptation
relatedTo:
  - urn:ngm:class:deep-learning
---

# LyCORIS

LyCORIS (Lora beYond Conventional methods, Other Rank adaptation Implementations for Stable diffusion) is an open-source library implementing a family of parameter-efficient fine-tuning methods for diffusion and other models that extend beyond standard low-rank adaptation. It includes techniques such as LoHa (Hadamard-product decomposition), LoKr (Kronecker-product decomposition), and full or convolutional adaptations, giving practitioners a richer set of expressiveness-versus-size trade-offs. LyCORIS is widely used in the image-generation community to train compact, shareable model adapters.
