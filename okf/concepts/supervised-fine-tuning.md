---
okf_version: "0.2"
type: Class
title: Supervised Fine Tuning
resource: urn:ngm:class:supervised-fine-tuning
domain: machine-learning
description: A fine-tuning approach that uses labelled training data to adapt a pre-trained model to specific tasks, optimising performance through supervised learning on input-output pairs. Supervised fine-tuning (SFT) represents the most direct path from general pre-training to task-specific capability, and serves as the foundational first stage in multi-stage alignment pipelines such as InstructGPT and Cons
maturity: emerging
quality: 0.73
is-a:
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:labelled-dataset
  - urn:ngm:class:cross-entropy-loss
requires:
  - urn:ngm:class:human-feedback
  - urn:ngm:class:model-training
  - urn:ngm:class:pre-trained-model
  - urn:ngm:class:labelled-dataset
enables:
  - urn:ngm:class:reward-model
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:instruction-following
  - urn:ngm:class:direct-preference-optimisation
dependsOn:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:large-language-model
  - urn:ngm:class:gradient-descent
implements:
  - urn:ngm:class:supervised-learning
contrastsWith:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:few-shot-learning
  - urn:ngm:class:zero-shot-learning
bridgesTo:
  - urn:ngm:class:data-governance
  - urn:ngm:class:ai-safety
uses:
  - urn:ngm:class:parameter-efficient-fine-tuning
  - urn:ngm:class:lo-ra
partOf:
  - urn:ngm:class:rlhf
relatedTo:
  - urn:ngm:class:instruction-tuning
  - urn:ngm:class:catastrophic-forgetting
  - urn:ngm:class:constitutional-ai-training-methodology
---

# Supervised Fine Tuning

A fine-tuning approach that uses labelled training data to adapt a pre-trained model to specific tasks, optimising performance through supervised learning on input-output pairs. Supervised fine-tuning (SFT) represents the most direct path from general pre-training to task-specific capability, and serves as the foundational first stage in multi-stage alignment pipelines such as InstructGPT and Constitutional AI.
