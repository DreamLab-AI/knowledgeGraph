---
okf_version: "0.2"
type: Class
title: Human Feedback
resource: urn:ngm:class:human-feedback
domain: artificial-intelligence
description: Information provided by human evaluators about model outputs, typically in the form of rankings, ratings, demonstrations, or corrections. Human feedback serves as the training signal for aligning AI systems with human preferences and values, enabling learning of complex objectives that are difficult to specify formally.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:demonstration-data
  - urn:ngm:class:preference-dataset
requires:
  - urn:ngm:class:supervised-fine-tuning
  - urn:ngm:class:human-annotator
enables:
  - urn:ngm:class:reward-model
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:ai-alignment
  - urn:ngm:class:preference-learning
  - urn:ngm:class:constitutional-ai-training-methodology
dependsOn:
  - urn:ngm:class:large-language-model
contrastsWith:
  - urn:ngm:class:ai-feedback
  - urn:ngm:class:implicit-feedback
bridgesTo:
  - urn:ngm:class:human-computer-interaction
  - urn:ngm:class:data-governance
uses:
  - urn:ngm:class:active-learning
  - urn:ngm:class:inter-annotator-agreement
supports:
  - urn:ngm:class:ai-safety
  - urn:ngm:class:model-evaluation
relatedTo:
  - urn:ngm:class:model-performance
  - urn:ngm:class:bias-mitigation-techniques
  - urn:ngm:class:instruction-following
---

# Human Feedback

Information provided by human evaluators about model outputs, typically in the form of rankings, ratings, demonstrations, or corrections. Human feedback serves as the training signal for aligning AI systems with human preferences and values, enabling learning of complex objectives that are difficult to specify formally.
