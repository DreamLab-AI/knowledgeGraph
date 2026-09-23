---
okf_version: "0.2"
type: Class
title: Proximal Policy Optimisation
resource: urn:ngm:class:proximal-policy-optimisation
domain: artificial-intelligence
description: A reinforcement learning algorithm that updates policies through incremental steps whilst constraining how much the policy can change via a clipped surrogate objective, preventing destabilising updates. PPO is the dominant RL algorithm used in reinforcement learning from human feedback (RLHF) for fine-tuning language models to align with human preferences.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:reinforcement-learning
enables:
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:large-language-models
dependsOn:
  - urn:ngm:class:reinforcement-learning-algorithm
uses:
  - urn:ngm:class:reward-model
  - urn:ngm:class:human-feedback
partOf:
  - urn:ngm:class:reinforcement-learning-from-human-feedback
---

# Proximal Policy Optimisation

A reinforcement learning algorithm that updates policies through incremental steps whilst constraining how much the policy can change via a clipped surrogate objective, preventing destabilising updates. PPO is the dominant RL algorithm used in reinforcement learning from human feedback (RLHF) for fine-tuning language models to align with human preferences.
