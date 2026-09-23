---
okf_version: "0.2"
type: Class
title: Latent Diffusion Model Training
resource: urn:ngm:class:latent-diffusion-model-training
domain: ai
description: Stable Diffusion training is the process of fitting a latent text-to-image diffusion model by teaching a denoising network to reverse a gradual noising process in a compressed latent space, conditioned on text embeddings. Operating in latent rather than pixel space sharply reduces compute and memory, while techniques such as fine-tuning, LoRA, and DreamBooth adapt a base model to new styles or sub
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:generative-model
  - urn:ngm:class:model-training
relatedTo:
  - urn:ngm:class:fast-ai
  - urn:ngm:class:proprietary-ai-video
---

# Latent Diffusion Model Training

Stable Diffusion training is the process of fitting a latent text-to-image diffusion model by teaching a denoising network to reverse a gradual noising process in a compressed latent space, conditioned on text embeddings. Operating in latent rather than pixel space sharply reduces compute and memory, while techniques such as fine-tuning, LoRA, and DreamBooth adapt a base model to new styles or subjects. It underpins much of open-weight generative image and video tooling.
