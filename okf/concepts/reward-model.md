---
okf_version: "0.2"
type: Class
title: Reward Model
resource: urn:ngm:class:reward-model
domain: machine-learning
description: A neural network trained to predict scalar rewards for model outputs based on human feedback, used to provide learning signals in reinforcement learning from human feedback (RLHF). The reward model serves as a proxy for human preferences, enabling efficient optimisation without constant human evaluation.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:reward-modelling
requires:
  - urn:ngm:class:human-feedback
  - urn:ngm:class:supervised-fine-tuning
  - urn:ngm:class:preference-data
  - urn:ngm:class:pairwise-comparison
enables:
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:ai-alignment
  - urn:ngm:class:policy-optimisation
  - urn:ngm:class:scalable-oversight
dependsOn:
  - urn:ngm:class:human-annotation
contrastsWith:
  - urn:ngm:class:direct-preference-optimisation
  - urn:ngm:class:inverse-reinforcement-learning
bridgesTo:
  - urn:ngm:class:human-computer-interaction
  - urn:ngm:class:ai-safety
uses:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:bradley-terry-model
  - urn:ngm:class:proximal-policy-optimisation
partOf:
  - urn:ngm:class:rlhf
relatedTo:
  - urn:ngm:class:model-performance
  - urn:ngm:class:reward-hacking
  - urn:ngm:class:preference-learning
  - urn:ngm:class:constitutional-ai-training-methodology
---

# Reward Model

A neural network trained to predict scalar rewards for model outputs based on human feedback, used to provide learning signals in reinforcement learning from human feedback (RLHF). The reward model serves as a proxy for human preferences, enabling efficient optimisation without constant human evaluation.
