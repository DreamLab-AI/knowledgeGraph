---
okf_version: "0.2"
type: Class
title: IP-Adapter
resource: urn:ngm:class:ip-adapter
domain: ai
description: IP-Adapter (Image Prompt Adapter) is a lightweight adapter module for pre-trained text-to-image diffusion models that enables image-conditioned generation by injecting reference image features via a decoupled cross-attention mechanism. Introduced by Tencent AI Lab in 2023, it allows users to supply a reference image alongside a text prompt to control style, subject identity, or composition without
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:adapter-modules
enables:
  - urn:ngm:class:generative-ai
  - urn:ngm:class:computer-vision
dependsOn:
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:cross-attention
  - urn:ngm:class:attention-mechanism
contrastsWith:
  - urn:ngm:class:fine-tuning
uses:
  - urn:ngm:class:image-generation
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:hugging-face-diffusers
relatedTo:
  - urn:ngm:class:style-transfer
  - urn:ngm:class:control-net
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:inpainting
  - urn:ngm:class:image-to-image-translation
---

# IP-Adapter

IP-Adapter (Image Prompt Adapter) is a lightweight adapter module for pre-trained text-to-image diffusion models that enables image-conditioned generation by injecting reference image features via a decoupled cross-attention mechanism. Introduced by Tencent AI Lab in 2023, it allows users to supply a reference image alongside a text prompt to control style, subject identity, or composition without fine-tuning the base diffusion model. The adapter architecture inserts parallel cross-attention layers that process image embeddings from a pre-trained image encoder such as CLIP, keeping base model weights frozen.
