---
okf_version: "0.2"
type: Class
title: Modality-Specific Encoder
resource: urn:ngm:class:modality-specific-encoder
domain: machine-learning
description: A neural network component within a multimodal architecture that transforms raw input from one particular modality — text, image, audio, video, depth, or sensor streams — into a dense embedding using an architecture suited to that modality's structure, such as a Transformer for tokenised text or a Vision Transformer for image patches. The resulting per-modality representations are projected into a
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:encoder
enables:
  - urn:ngm:class:embedding
  - urn:ngm:class:contrastive-learning
uses:
  - urn:ngm:class:transformer
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:attention-mechanism
partOf:
  - urn:ngm:class:cross-modal-conditioning
relatedTo:
  - urn:ngm:class:clip
  - urn:ngm:class:vision-transformer
---

# Modality-Specific Encoder

A neural network component within a multimodal architecture that transforms raw input from one particular modality — text, image, audio, video, depth, or sensor streams — into a dense embedding using an architecture suited to that modality's structure, such as a Transformer for tokenised text or a Vision Transformer for image patches. The resulting per-modality representations are projected into a shared latent space where fusion, alignment, or cross-modal conditioning can occur.
