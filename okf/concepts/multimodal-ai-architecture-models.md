---
okf_version: "0.2"
type: Class
title: Multimodal Models
resource: urn:ngm:class:multimodal-ai-architecture-models
domain: ai
description: Multimodal models are machine learning architectures that jointly process, align, and reason over information from two or more distinct data modalities — such as text, images, audio, video, or depth — within a unified model. They learn shared or bridged representations that enable cross-modal tasks including visual question answering, image captioning, speech recognition conditioned on vision, and
maturity: established
quality: 0.74
is-a:
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
  - urn:ngm:class:text-to-image
  - urn:ngm:class:visual-question-answering
  - urn:ngm:class:image-captioning
  - urn:ngm:class:speech-recognition
  - urn:ngm:class:speech-recognition
  - urn:ngm:class:multimodal-retrieval
dependsOn:
  - urn:ngm:class:foundation-model
  - urn:ngm:class:self-supervised-learning
  - urn:ngm:class:foundation-model
contrastsWith:
  - urn:ngm:class:unimodal-models
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:human-computer-interaction
uses:
  - urn:ngm:class:encoder
  - urn:ngm:class:large-language-model
  - urn:ngm:class:contrastive-learning
  - urn:ngm:class:embedding-space
  - urn:ngm:class:encoder
relatedTo:
  - urn:ngm:class:clip
  - urn:ngm:class:diffusion-models
  - urn:ngm:class:instruction-tuning
---

# Multimodal Models

Multimodal models are machine learning architectures that jointly process, align, and reason over information from two or more distinct data modalities — such as text, images, audio, video, or depth — within a unified model. They learn shared or bridged representations that enable cross-modal tasks including visual question answering, image captioning, speech recognition conditioned on vision, and text-to-image synthesis. These models extend unimodal foundations (typically large language models or vision encoders) by integrating modality-specific encoders or tokenisers with cross-attention or projection layers that align heterogeneous feature spaces. Multimodal models represent the convergence of natural language processing, computer vision, and speech processing into a single, generalist AI paradigm.
