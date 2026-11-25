---
okf_version: "0.2"
type: Class
title: Reward Shaping
resource: urn:ngm:class:reward-shaping
domain: machine-learning
description: Reward shaping is a reinforcement-learning technique that augments an environment's native reward signal with additional intermediate rewards to guide and accelerate learning. Potential-based reward shaping provides theoretical guarantees that the optimal policy is preserved, avoiding the introduction of unintended behaviours. It is commonly used to address sparse-reward problems where useful feed
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:reinforcement-learning-algorithm
requires:
  - urn:ngm:class:reward-function
enables:
  - urn:ngm:class:agent-training
implements:
  - urn:ngm:class:potential-based-reward-shaping
contrastsWith:
  - urn:ngm:class:reward-hacking
  - urn:ngm:class:sparse-reward
uses:
  - urn:ngm:class:reward-function
  - urn:ngm:class:markov-decision-process
supports:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:value-function
partOf:
  - urn:ngm:class:reward-engineering
relatedTo:
  - urn:ngm:class:inverse-reinforcement-learning
  - urn:ngm:class:exploration-exploitation
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Reward Shaping

Reward shaping is a reinforcement-learning technique that augments an environment's native reward signal with additional intermediate rewards to guide and accelerate learning. Potential-based reward shaping provides theoretical guarantees that the optimal policy is preserved, avoiding the introduction of unintended behaviours. It is commonly used to address sparse-reward problems where useful feedback is rare.
