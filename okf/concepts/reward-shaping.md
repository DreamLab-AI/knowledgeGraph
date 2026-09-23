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
---

# Reward Shaping

Reward shaping is a reinforcement-learning technique that augments an environment's native reward signal with additional intermediate rewards to guide and accelerate learning. Potential-based reward shaping provides theoretical guarantees that the optimal policy is preserved, avoiding the introduction of unintended behaviours. It is commonly used to address sparse-reward problems where useful feedback is rare.
