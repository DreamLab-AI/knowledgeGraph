---
okf_version: "0.2"
type: Class
title: Temporal Difference Learning
resource: urn:ngm:class:temporal-difference-learning
domain: machine-learning
description: "Temporal difference (TD) learning is a class of model-free reinforcement learning methods that estimate value functions by bootstrapping: each value estimate is updated towards a target composed of the immediate reward plus the discounted estimate of the successor state, rather than waiting for a full episode return. The TD error, the difference between the bootstrapped target and the current esti"
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:reinforcement-learning-algorithm
hasPart:
  - urn:ngm:class:value-function
  - urn:ngm:class:reward-signal
enables:
  - urn:ngm:class:policy-gradient
  - urn:ngm:class:deep-learning
dependsOn:
  - urn:ngm:class:reward-signal
implements:
  - urn:ngm:class:q-learning
  - urn:ngm:class:sarsa
contrastsWith:
  - urn:ngm:class:monte-carlo-methods
  - urn:ngm:class:monte-carlo-methods
uses:
  - urn:ngm:class:bellman-equation
  - urn:ngm:class:markov-decision-process
  - urn:ngm:class:value-function
partOf:
  - urn:ngm:class:reinforcement-learning
relatedTo:
  - urn:ngm:class:monte-carlo-methods
  - urn:ngm:class:bellman-equation
  - urn:ngm:class:monte-carlo-methods
---

# Temporal Difference Learning

Temporal difference (TD) learning is a class of model-free reinforcement learning methods that estimate value functions by bootstrapping: each value estimate is updated towards a target composed of the immediate reward plus the discounted estimate of the successor state, rather than waiting for a full episode return. The TD error, the difference between the bootstrapped target and the current estimate, drives incremental updates and underpins algorithms such as TD(0), TD(lambda), SARSA, and Q-learning. By combining the sampling of Monte Carlo methods with the bootstrapping of dynamic programming, TD learning enables online, incremental learning from incomplete sequences.
