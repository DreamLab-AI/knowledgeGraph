---
okf_version: "0.2"
type: Class
title: Hugging Face
resource: urn:ngm:class:hugging-face
domain: artificial-intelligence
description: Hugging Face is an AI company and open-source platform that operates the Transformers, Diffusers, Datasets, PEFT, and TRL libraries alongside the Hugging Face Hub — a centralised model and dataset repository hosting hundreds of thousands of community-contributed checkpoints spanning natural language processing, computer vision, audio, multimodal, and reinforcement learning domains. The Hub standar
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:ai-infrastructure
hasPart:
  - urn:ngm:class:transformers-library
  - urn:ngm:class:hugging-face-diffusers
  - urn:ngm:class:hugging-face-hub
  - urn:ngm:class:parameter-efficient-fine-tuning
  - urn:ngm:class:hugging-face-diffusers
  - urn:ngm:class:hugging-face-hub
requires:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:gpu-computing
enables:
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:model-sharing
  - urn:ngm:class:open-source-ai
contrastsWith:
  - urn:ngm:class:openai-research-organisation-api
  - urn:ngm:class:google-vertex-ai
bridgesTo:
  - urn:ngm:class:cloud-infrastructure
  - urn:ngm:class:edge-ai
uses:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:python-pytorch-deep-learning-stack
  - urn:ngm:class:ai-model-card
  - urn:ngm:class:py-torch
  - urn:ngm:class:ai-model-card
supports:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:multimodal-ai-architecture-ai
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:transfer-learning
relatedTo:
  - urn:ngm:class:bert
  - urn:ngm:class:low-rank-adaptation
  - urn:ngm:class:hugging-face-model-hub
  - urn:ngm:class:responsible-ai
  - urn:ngm:class:hugging-face-model-hub
---

# Hugging Face

Hugging Face is an AI company and open-source platform that operates the Transformers, Diffusers, Datasets, PEFT, and TRL libraries alongside the Hugging Face Hub — a centralised model and dataset repository hosting hundreds of thousands of community-contributed checkpoints spanning natural language processing, computer vision, audio, multimodal, and reinforcement learning domains. The Hub standardises model cards, dataset cards, and Spaces (interactive Gradio or Streamlit demos), and has become the de facto distribution platform for open-weight large language models and their fine-tuned derivatives. Through its inference API, AutoTrain service, and parameter-efficient fine-tuning tooling, Hugging Face significantly lowers the barrier to deploying and adapting state-of-the-art machine learning models for research and production use.
