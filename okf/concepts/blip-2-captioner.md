---
okf_version: "0.2"
type: Class
title: BLIP-2 Captioner
resource: urn:ngm:class:blip-2-captioner
domain: ai
description: BLIP-2 is a vision-language model that bridges a frozen image encoder and a frozen large language model with a lightweight Querying Transformer (Q-Former), and a BLIP-2 captioner uses this model to generate natural-language descriptions of images. It produces high-quality captions efficiently because only the Q-Former is trained, leaving the heavy backbones fixed. Such captioners are commonly used
maturity: established
quality: 0.93
is-a:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:multimodal-ai-architecture
  - urn:ngm:class:multimodal-ai-architecture-learning
hasPart:
  - urn:ngm:class:q-former
  - urn:ngm:class:vision-transformer
  - urn:ngm:class:large-language-model
  - urn:ngm:class:linear-projection-layer
  - urn:ngm:class:learnable-query-tokens
  - urn:ngm:class:image-text-contrastive-loss
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:causal-language-modelling
  - urn:ngm:class:contrastive-learning
requires:
  - urn:ngm:class:frozen-image-encoder
  - urn:ngm:class:training-data
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:image-text-paired-corpus
  - urn:ngm:class:clip-encoder
enables:
  - urn:ngm:class:image-captioning
  - urn:ngm:class:visual-question-answering
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:zero-shot-learning
  - urn:ngm:class:multimodal-ai-architecture-reasoning
  - urn:ngm:class:cross-modal-retrieval
  - urn:ngm:class:multimodal-ai-architecture-understanding
dependsOn:
  - urn:ngm:class:clip-encoder
  - urn:ngm:class:contrastive-learning
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:vision-transformer
implements:
  - urn:ngm:class:parameter-efficient-fine-tuning
  - urn:ngm:class:causal-language-modelling
  - urn:ngm:class:contrastive-learning
  - urn:ngm:class:transformer-architecture
contrastsWith:
  - urn:ngm:class:flamingo
  - urn:ngm:class:minigpt-4
  - urn:ngm:class:llava
  - urn:ngm:class:full-fine-tuning
  - urn:ngm:class:gemini-multimodal-language-model
uses:
  - urn:ngm:class:clip-encoder
  - urn:ngm:class:contrastive-learning
  - urn:ngm:class:parameter-efficient-fine-tuning
  - urn:ngm:class:causal-language-modelling
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:vision-transformer
  - urn:ngm:class:attention-mechanism
supports:
  - urn:ngm:class:kohya-dreambooth-and-similar
  - urn:ngm:class:lo-ra-fine-tuning
  - urn:ngm:class:lo-ra-do-ra-etc
  - urn:ngm:class:diffusion-models
  - urn:ngm:class:diffusion-transformer
standardizedBy:
  - urn:ngm:class:salesforce-research
  - urn:ngm:class:lavis-library
  - urn:ngm:class:huggingface-transformers
relatedTo:
  - urn:ngm:class:kohya-dreambooth-and-similar
  - urn:ngm:class:clip
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:lo-ra-fine-tuning
  - urn:ngm:class:instruct-blip
  - urn:ngm:class:multimodal-ai-architecture-understanding
  - urn:ngm:class:gemini-multimodal-language-model
  - urn:ngm:class:multimodal-ai-architecture
  - urn:ngm:class:multimodal-ai-architecture-reasoning
  - urn:ngm:class:multimodal-ai-architecture-learning
  - urn:ngm:class:cross-modal-retrieval
---

# BLIP-2 Captioner

BLIP-2 is a vision-language model that bridges a frozen image encoder and a frozen large language model with a lightweight Querying Transformer (Q-Former), and a BLIP-2 captioner uses this model to generate natural-language descriptions of images. It produces high-quality captions efficiently because only the Q-Former is trained, leaving the heavy backbones fixed. Such captioners are commonly used to auto-label image datasets for training diffusion models and fine-tuning pipelines.
