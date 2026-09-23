---
okf_version: "0.2"
type: Class
title: Soft Prompt Embedding
resource: urn:ngm:class:soft-prompt-embedding
domain: artificial-intelligence
description: "Soft Prompt Embedding is a parameter-efficient fine-tuning technique in which a small set of continuous, learnable token vectors (soft prompts) are prepended to the model's input embedding sequence and optimised via gradient descent, conditioning a frozen large language model's behaviour without modifying its weights. Unlike discrete (hard) prompts composed of natural-language tokens, soft prompt "
maturity: established
quality: 0
is-a:
  - urn:ngm:class:parameter-efficient-fine-tuning
hasPart:
  - urn:ngm:class:token-embedding
  - urn:ngm:class:parameter
requires:
  - urn:ngm:class:embedding-model
  - urn:ngm:class:large-language-models
enables:
  - urn:ngm:class:instruction-tuning
  - urn:ngm:class:fine-tuning
dependsOn:
  - urn:ngm:class:model-parameters
  - urn:ngm:class:attention-mechanism
contrastsWith:
  - urn:ngm:class:instruction-following
uses:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:backpropagation
relatedTo:
  - urn:ngm:class:prompt-tuning
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:model-training
---

# Soft Prompt Embedding

Soft Prompt Embedding is a parameter-efficient fine-tuning technique in which a small set of continuous, learnable token vectors (soft prompts) are prepended to the model's input embedding sequence and optimised via gradient descent, conditioning a frozen large language model's behaviour without modifying its weights. Unlike discrete (hard) prompts composed of natural-language tokens, soft prompt embeddings exist solely in the continuous embedding space and have no direct human-interpretable form. This approach enables task-specific adaptation of large models at a fraction of the computational and storage cost of full fine-tuning.
