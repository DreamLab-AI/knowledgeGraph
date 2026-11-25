---
okf_version: "0.2"
type: Class
title: Stability AI
resource: urn:ngm:class:stability-ai
domain: ai
description: Stability AI is a British AI company founded in 2019 (publicly prominent from 2022) that develops and releases open-weight generative models across image, audio, language, and video modalities, most notably the Stable Diffusion family of latent diffusion models for text-to-image synthesis. The company's open-weight release strategy, in which model weights are made freely downloadable rather than a
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:generative-ai
hasPart:
  - urn:ngm:class:stable-diffusion
  - urn:ngm:class:stable-diffusion
  - urn:ngm:class:stable-audio
  - urn:ngm:class:stable-video-diffusion
  - urn:ngm:class:stablelm
requires:
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:training-data
enables:
  - urn:ngm:class:text-to-image
  - urn:ngm:class:image-generation
  - urn:ngm:class:open-weight-model
  - urn:ngm:class:fine-tuning
contrastsWith:
  - urn:ngm:class:openai-research-organisation
  - urn:ngm:class:midjourney-text-to-image-service
  - urn:ngm:class:adobe-firefly
  - urn:ngm:class:openai-research-organisation
  - urn:ngm:class:midjourney-text-to-image-service
bridgesTo:
  - urn:ngm:class:creative-ai
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:content-moderation
uses:
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:clip
  - urn:ngm:class:variational-autoencoder
  - urn:ngm:class:u-net
  - urn:ngm:class:latent-diffusion
relatedTo:
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:foundation-model
  - urn:ngm:class:ai-safety
  - urn:ngm:class:data-provenance
  - urn:ngm:class:data-provenance
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Stability AI

Stability AI is a British AI company founded in 2019 (publicly prominent from 2022) that develops and releases open-weight generative models across image, audio, language, and video modalities, most notably the Stable Diffusion family of latent diffusion models for text-to-image synthesis. The company's open-weight release strategy, in which model weights are made freely downloadable rather than accessed only via hosted APIs, catalysed a large ecosystem of fine-tuned variants, community tools, and downstream commercial products. Stability AI also supports research into multimodal generation, efficient inference, and safety mechanisms for open foundation models.
