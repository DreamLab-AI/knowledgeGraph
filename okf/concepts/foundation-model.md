---
okf_version: "0.2"
type: Class
title: Foundation Model
resource: urn:ngm:class:foundation-model
domain: ai
description: "A Foundation Model is a large-scale machine learning model trained on broad, diverse datasets using self-supervised or semi-supervised objectives, producing a general-purpose parametric representation that can be adapted to a wide range of downstream tasks through fine-tuning, prompting, or retrieval augmentation without retraining from scratch. Introduced as a conceptual category by the Stanford "
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:machine-learning-model
  - urn:ngm:class:ai-model-architecture
hasPart:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:pre-training
  - urn:ngm:class:neural-network
  - urn:ngm:class:context-window
requires:
  - urn:ngm:class:training-data
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:self-supervised-learning
enables:
  - urn:ngm:class:in-context-learning
  - urn:ngm:class:instruction-tuning
  - urn:ngm:class:few-shot-learning
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:emergent-capabilities
dependsOn:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:deep-learning
  - urn:ngm:class:large-language-model-training
contrastsWith:
  - urn:ngm:class:task-specific-model
  - urn:ngm:class:narrow-ai
bridgesTo:
  - urn:ngm:class:compute-governance
  - urn:ngm:class:ai-alignment
  - urn:ngm:class:generative-ai
uses:
  - urn:ngm:class:rlhf
  - urn:ngm:class:domain-adaptation
  - urn:ngm:class:lo-ra-fine-tuning
supports:
  - urn:ngm:class:multimodal-ai-architecture-ai
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:prompt-engineering
relatedTo:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:multimodal-ai-architecture-models
  - urn:ngm:class:benchmark-evaluation
  - urn:ngm:class:ai-safety
---

# Foundation Model

A Foundation Model is a large-scale machine learning model trained on broad, diverse datasets using self-supervised or semi-supervised objectives, producing a general-purpose parametric representation that can be adapted to a wide range of downstream tasks through fine-tuning, prompting, or retrieval augmentation without retraining from scratch. Introduced as a conceptual category by the Stanford HAI Centre for Research on Foundation Models in 2021, the term emphasises the homogenising role such models play across AI research and application domains: a single pre-trained artefact serves as the foundation for specialised systems in natural language processing, computer vision, speech, multimodal reasoning, scientific discovery, and robotics. Foundation models are characterised by emergent capabilities that arise from scale — properties not present in smaller models that appear as parameter count and training-data volume increase — and by their fundamentally transferable representations, which dramatically lower the cost of building capable task-specific systems. The category encompasses large language models, vision-language models, diffusion models, and cross-modal architectures such as GPT-4, BERT, DALL-E, Stable Diffusion, and Segment Anything.
