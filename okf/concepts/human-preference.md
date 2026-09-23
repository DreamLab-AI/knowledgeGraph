---
okf_version: "0.2"
type: Class
title: Human Preference
resource: urn:ngm:class:human-preference
domain: artificial-intelligence
description: Human Preference refers to the explicit or implicit judgements made by human evaluators that express which of two or more AI outputs is more aligned with human values, intentions, or quality criteria; these preference signals are collected through comparative annotation tasks and used as training signal to guide reinforcement learning from human feedback (RLHF) and preference optimisation methods.
maturity: established
quality: 0
is-a:
  - urn:ngm:class:ai-governance-and-ethics
  - urn:ngm:class:neural-network-component
requires:
  - urn:ngm:class:human-feedback
  - urn:ngm:class:preference-learning
enables:
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:reward-model
  - urn:ngm:class:value-alignment
uses:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:fine-tuning
supports:
  - urn:ngm:class:ai-alignment
  - urn:ngm:class:ai-safety
relatedTo:
  - urn:ngm:class:rlhf
  - urn:ngm:class:fairness
  - urn:ngm:class:human-computer-interaction
---

# Human Preference

Human Preference refers to the explicit or implicit judgements made by human evaluators that express which of two or more AI outputs is more aligned with human values, intentions, or quality criteria; these preference signals are collected through comparative annotation tasks and used as training signal to guide reinforcement learning from human feedback (RLHF) and preference optimisation methods. The aggregate of human preferences encodes desired model behaviour on dimensions such as helpfulness, harmlessness, and honesty, providing an empirical proxy for human values that is more tractable to collect than hand-crafted reward functions. Preference data quality, evaluator diversity, and annotator agreement rates critically determine the fidelity with which the resulting reward model captures genuine human intent.
