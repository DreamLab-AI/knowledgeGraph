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
  - urn:ngm:class:large-language-model
dependsOn:
  - urn:ngm:class:reinforcement-learning-algorithm
uses:
  - urn:ngm:class:reward-model
  - urn:ngm:class:human-feedback
partOf:
  - urn:ngm:class:reinforcement-learning-from-human-feedback
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Proximal Policy Optimisation

A reinforcement learning algorithm that updates policies through incremental steps whilst constraining how much the policy can change via a clipped surrogate objective, preventing destabilising updates. PPO is the dominant RL algorithm used in reinforcement learning from human feedback (RLHF) for fine-tuning language models to align with human preferences.
