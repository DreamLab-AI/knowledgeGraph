---
okf_version: "0.2"
type: Class
title: Prompt Tuning
resource: urn:ngm:class:prompt-tuning
domain: machine-learning
description: Prompt Tuning is a parameter-efficient fine-tuning method that learns continuous soft prompt embeddings prepended to the input sequence, whilst keeping all pre-trained model weights frozen. It optimises task-specific prompts in the embedding space using gradient descent, requiring as little as 0.01% of model parameters and enabling efficient multi-task deployment from a single frozen backbone.
maturity: emerging
quality: 0.68
is-a:
  - urn:ngm:class:parameter-efficient-fine-tuning
hasPart:
  - urn:ngm:class:soft-prompt-embedding
  - urn:ngm:class:gradient-descent
requires:
  - urn:ngm:class:pre-trained-language-model
enables:
  - urn:ngm:class:model-deployment
  - urn:ngm:class:few-shot-learning
dependsOn:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:embedding-space
contrastsWith:
  - urn:ngm:class:prefix-tuning
  - urn:ngm:class:adapter-modules
  - urn:ngm:class:lo-ra
  - urn:ngm:class:full-fine-tuning
bridgesTo:
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:in-context-learning
uses:
  - urn:ngm:class:language-modeling
  - urn:ngm:class:backpropagation
  - urn:ngm:class:natural-language-processing
supports:
  - urn:ngm:class:instruction-tuning
  - urn:ngm:class:retrieval-augmented-generation
partOf:
  - urn:ngm:class:parameter-efficient-fine-tuning
  - urn:ngm:class:transfer-learning
relatedTo:
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:foundation-model
  - urn:ngm:class:chain-of-thought
---

# Prompt Tuning

Prompt Tuning is a parameter-efficient fine-tuning method that learns continuous soft prompt embeddings prepended to the input sequence, whilst keeping all pre-trained model weights frozen. It optimises task-specific prompts in the embedding space using gradient descent, requiring as little as 0.01% of model parameters and enabling efficient multi-task deployment from a single frozen backbone.
