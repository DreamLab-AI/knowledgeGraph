---
okf_version: "0.2"
type: Class
title: Multimodal Model
resource: urn:ngm:class:multimodal-model
domain: machine-learning
description: A machine learning model that ingests, aligns, or generates information across two or more modalities — text, images, audio, video, or 3D — within a single architecture, typically by encoding each modality into a shared representation space processed by a transformer backbone. Spanning contrastive dual encoders such as CLIP, text-to-image generators, and natively multimodal frontier models like GP
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:foundation-model
  - urn:ngm:class:multimodal-ai-architecture-ai
hasPart:
  - urn:ngm:class:modality-specific-encoder
  - urn:ngm:class:decoder
  - urn:ngm:class:projection-layer
  - urn:ngm:class:decoder
requires:
  - urn:ngm:class:transformer
  - urn:ngm:class:cross-attention
  - urn:ngm:class:training-data
  - urn:ngm:class:training-data
enables:
  - urn:ngm:class:creative-ai
  - urn:ngm:class:creative-tools
  - urn:ngm:class:text-to-image
  - urn:ngm:class:visual-question-answering
  - urn:ngm:class:image-captioning
  - urn:ngm:class:speech-recognition
  - urn:ngm:class:speech-recognition
  - urn:ngm:class:multimodal-retrieval
contrastsWith:
  - urn:ngm:class:unimodal-models
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:human-computer-interaction
uses:
  - urn:ngm:class:transformer
  - urn:ngm:class:encoder
  - urn:ngm:class:large-language-model
  - urn:ngm:class:contrastive-learning
  - urn:ngm:class:embedding-space
  - urn:ngm:class:encoder
relatedTo:
  - urn:ngm:class:vision-language-model
  - urn:ngm:class:large-language-model
  - urn:ngm:class:clip
  - urn:ngm:class:diffusion-models
  - urn:ngm:class:instruction-tuning
---

# Multimodal Model

A machine learning model that ingests, aligns, or generates information across two or more modalities — text, images, audio, video, or 3D — within a single architecture, typically by encoding each modality into a shared representation space processed by a transformer backbone. Spanning contrastive dual encoders such as CLIP, text-to-image generators, and natively multimodal frontier models like GPT-4o and Gemini, multimodal models underpin image understanding, cross-modal search, and modern creative tooling.
