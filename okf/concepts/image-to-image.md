---
okf_version: "0.2"
type: Class
title: Image-to-Image
resource: urn:ngm:class:image-to-image
domain: ai
description: Image-to-image is a class of generative tasks where a model transforms an input image into an output image, conditioned on the input and often a text prompt. Examples include style transfer, editing and translation between domains.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:image-generation
requires:
  - urn:ngm:class:diffusion-model
enables:
  - urn:ngm:class:inpainting
bridgesTo:
  - urn:ngm:class:stable-diffusion-image-model
---

# Image-to-Image

Image-to-image is a class of generative tasks where a model transforms an input image into an output image, conditioned on the input and often a text prompt. Examples include style transfer, editing and translation between domains.
