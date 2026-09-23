---
okf_version: "0.2"
type: Class
title: CLIP
resource: urn:ngm:class:clip
domain: artificial-intelligence
description: CLIP (Contrastive Language-Image Pre-training) is a dual-encoder neural network architecture developed by OpenAI in which a vision encoder (Vision Transformer or CNN) and a text encoder (Transformer) are jointly trained on large-scale internet-sourced image-text pairs using an InfoNCE contrastive objective. The training maximises cosine similarity between embeddings of matched image-text pairs and
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:ai-model-architecture
  - urn:ngm:class:foundation-model
  - urn:ngm:class:multimodal-ai-architecture-ai
hasPart:
  - urn:ngm:class:vision-transformer
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:infonce-loss
  - urn:ngm:class:embedding-space
  - urn:ngm:class:cosine-similarity
requires:
  - urn:ngm:class:large-scale-datasets
  - urn:ngm:class:self-supervised-learning
  - urn:ngm:class:embedding-space
  - urn:ngm:class:large-scale-datasets
  - urn:ngm:class:contrastive-learning
enables:
  - urn:ngm:class:zero-shot-learning
  - urn:ngm:class:image-classification
  - urn:ngm:class:cross-modal-retrieval
  - urn:ngm:class:open-vocabulary-detection
  - urn:ngm:class:image-text-retrieval
  - urn:ngm:class:multimodal-search
  - urn:ngm:class:text-to-image-generation
dependsOn:
  - urn:ngm:class:embedding-model
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:vision-transformer
implements:
  - urn:ngm:class:contrastive-learning
  - urn:ngm:class:dual-encoder-architecture
contrastsWith:
  - urn:ngm:class:align
  - urn:ngm:class:florence
  - urn:ngm:class:coca
  - urn:ngm:class:siglip
  - urn:ngm:class:metaclip
bridgesTo:
  - urn:ngm:class:spatial-anchor
  - urn:ngm:class:augmented-reality
uses:
  - urn:ngm:class:contrastive-learning
  - urn:ngm:class:vision-transformer
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:infonce-loss
  - urn:ngm:class:cosine-similarity
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:self-supervised-learning
supports:
  - urn:ngm:class:text-to-image
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:multimodal-search
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:text-to-image-generation
  - urn:ngm:class:vision-language-model
standardizedBy:
  - urn:ngm:class:openai-research-organisation
  - urn:ngm:class:laion
  - urn:ngm:class:openclip
partOf:
  - urn:ngm:class:foundation-model
relatedTo:
  - urn:ngm:class:vision-language-model
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:multimodal-ai-architecture-ai
  - urn:ngm:class:foundation-model
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:spatial-anchor
  - urn:ngm:class:openclip
  - urn:ngm:class:zero-shot-learning
---

# CLIP

CLIP (Contrastive Language-Image Pre-training) is a dual-encoder neural network architecture developed by OpenAI in which a vision encoder (Vision Transformer or CNN) and a text encoder (Transformer) are jointly trained on large-scale internet-sourced image-text pairs using an InfoNCE contrastive objective. The training maximises cosine similarity between embeddings of matched image-text pairs and minimises it for unmatched pairs within a batch, yielding a shared multimodal embedding space where semantically related images and text are geometrically proximate. This shared space enables zero-shot image classification by comparing image embeddings to natural language class descriptions without task-specific fine-tuning, and has become a foundational component in text-to-image diffusion models, open-vocabulary object detection, and cross-modal retrieval systems.
