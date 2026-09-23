---
okf_version: "0.2"
type: Class
title: Reinforcement Learning from Human Feedback
resource: urn:ngm:class:reinforcement-learning-from-human-feedback
domain: machine-learning
description: A technique for aligning language models with human preferences by training a reward model from human rankings of outputs and using reinforcement learning (typically PPO) to optimise the policy towards maximising predicted human preference. RLHF enables models to learn complex alignment objectives that are difficult to specify explicitly, forming a three-stage pipeline of supervised fine-tuning, r
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:ai-alignment
requires:
  - urn:ngm:class:reward-model
  - urn:ngm:class:human-feedback
  - urn:ngm:class:supervised-fine-tuning
  - urn:ngm:class:proximal-policy-optimisation
  - urn:ngm:class:preference-learning
enables:
  - urn:ngm:class:ai-alignment
  - urn:ngm:class:large-language-models
  - urn:ngm:class:instruction-following
  - urn:ngm:class:ai-safety
implements:
  - urn:ngm:class:reinforcement-learning
contrastsWith:
  - urn:ngm:class:direct-preference-optimisation
  - urn:ngm:class:reward-modelling
bridgesTo:
  - urn:ngm:class:human-computer-interaction
  - urn:ngm:class:ai-governance
uses:
  - urn:ngm:class:bradley-terry-model
  - urn:ngm:class:kl-divergence-penalty
  - urn:ngm:class:pairwise-comparison
  - urn:ngm:class:policy-gradient-methods
supports:
  - urn:ngm:class:constitutional-ai-training-methodology
  - urn:ngm:class:scalable-oversight
  - urn:ngm:class:harmlessness-alignment
relatedTo:
  - urn:ngm:class:instruct-gpt
  - urn:ngm:class:reward-hacking
  - urn:ngm:class:human-in-the-loop
---

# Reinforcement Learning from Human Feedback

A technique for aligning language models with human preferences by training a reward model from human rankings of outputs and using reinforcement learning (typically PPO) to optimise the policy towards maximising predicted human preference. RLHF enables models to learn complex alignment objectives that are difficult to specify explicitly, forming a three-stage pipeline of supervised fine-tuning, reward model training, and RL optimisation.
