---
okf_version: "0.2"
type: Class
title: Temporal Motion Diffusion Adapter
resource: urn:ngm:class:temporal-motion-diffusion-adapter
domain: ai
description: "AnimateDiff is an open-source framework that inserts lightweight motion-module adapters into pre-trained text-to-image diffusion models to generate temporally consistent animated sequences without retraining the base image model. Developed by researchers at CUHK and ByteDance and released in 2023, it enables personalised diffusion model checkpoints to produce video clips by learning motion priors "
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:video-generation
requires:
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:attention-mechanism
enables:
  - urn:ngm:class:video-generation
  - urn:ngm:class:animation-technique
  - urn:ngm:class:image-to-image-translation
contrastsWith:
  - urn:ngm:class:motion-capture-technology
uses:
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:motion-capture
  - urn:ngm:class:generative-model
  - urn:ngm:class:parameter-efficient-fine-tuning
relatedTo:
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:generative-ai
  - urn:ngm:class:3-d-animation
  - urn:ngm:class:computer-vision-video-analysis
---

# Temporal Motion Diffusion Adapter

AnimateDiff is an open-source framework that inserts lightweight motion-module adapters into pre-trained text-to-image diffusion models to generate temporally consistent animated sequences without retraining the base image model. Developed by researchers at CUHK and ByteDance and released in 2023, it enables personalised diffusion model checkpoints to produce video clips by learning motion priors from video data in a plug-and-play manner. AnimateDiff integrates natively with the Stable Diffusion ecosystem, including ControlNet conditioning and LoRA fine-tuning.
