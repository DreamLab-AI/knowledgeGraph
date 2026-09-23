---
okf_version: "0.2"
type: Class
title: Feature Attribution
resource: urn:ngm:class:feature-attribution
domain: artificial-intelligence
description: A family of explainable AI techniques that assign a contribution score to each input feature, indicating how much it influenced a model's particular prediction.
maturity: established
quality: 0.91
is-a:
  - urn:ngm:class:explainable-ai
  - urn:ngm:class:model-interpretability
hasPart:
  - urn:ngm:class:shap
  - urn:ngm:class:lime
  - urn:ngm:class:integrated-gradients
  - urn:ngm:class:gradient-saliency
  - urn:ngm:class:deeplift
  - urn:ngm:class:grad-cam
  - urn:ngm:class:smoothgrad
  - urn:ngm:class:permutation-importance
requires:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:backpropagation
  - urn:ngm:class:loss-function
  - urn:ngm:class:neural-network
enables:
  - urn:ngm:class:interpretability
  - urn:ngm:class:model-interpretability
  - urn:ngm:class:mechanistic-interpretability
  - urn:ngm:class:ai-safety
  - urn:ngm:class:algorithmic-transparency
  - urn:ngm:class:model-debugging
dependsOn:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:neural-network
  - urn:ngm:class:deep-learning
  - urn:ngm:class:feature-engineering
implements:
  - urn:ngm:class:shapley-value
  - urn:ngm:class:game-theory
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:surrogate-model
contrastsWith:
  - urn:ngm:class:feature-importance
  - urn:ngm:class:global-explanation
  - urn:ngm:class:intrinsic-interpretability
  - urn:ngm:class:black-box-model
uses:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:loss-function
  - urn:ngm:class:convolutional-neural-network
supports:
  - urn:ngm:class:feature-importance
  - urn:ngm:class:feature-engineering
  - urn:ngm:class:feature-selection
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:bias-detection-methods
standardizedBy:
  - urn:ngm:class:ieee-p2976-xai
  - urn:ngm:class:iso-iec-22989-2022
  - urn:ngm:class:eu-ai-act-regulatory-instrument
relatedTo:
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:deep-learning
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:large-language-model
  - urn:ngm:class:sparse-autoencoders
  - urn:ngm:class:activation-patching
---

# Feature Attribution

A family of explainable AI techniques that assign a contribution score to each input feature, indicating how much it influenced a model's particular prediction.
