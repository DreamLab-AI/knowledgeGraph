---
okf_version: "0.2"
type: Class
title: Real-ESRGAN
resource: urn:ngm:class:real-esrgan
domain: ai
description: Real-ESRGAN is an image super-resolution model that upscales and restores low-quality images, with particular attention to real-world degradations. It extends the ESRGAN architecture using a generative adversarial network trained on synthetic degradation data.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:generative-adversarial-network
requires:
  - urn:ngm:class:generative-adversarial-network
  - urn:ngm:class:convolutional-neural-network
enables:
  - urn:ngm:class:image-generation
bridgesTo:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:deep-learning
---

# Real-ESRGAN

Real-ESRGAN is an image super-resolution model that upscales and restores low-quality images, with particular attention to real-world degradations. It extends the ESRGAN architecture using a generative adversarial network trained on synthetic degradation data.
