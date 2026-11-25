---
okf_version: "0.2"
type: Class
title: Q Learning
resource: urn:ngm:class:q-learning
domain: machine-learning
description: Q-learning is a model-free, off-policy reinforcement learning algorithm that learns the value of taking a given action in a given state by iteratively updating an action-value (Q) function towards a bootstrapped Bellman target. Because it learns the optimal action-value function regardless of the policy being followed, it converges to optimal behaviour without requiring a model of the environment'
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:reinforcement-learning-algorithm
hasPart:
  - urn:ngm:class:value-function
enables:
  - urn:ngm:class:deep-reinforcement-learning
dependsOn:
  - urn:ngm:class:markov-decision-process
implements:
  - urn:ngm:class:bellman-equation
bridgesTo:
  - urn:ngm:class:deep-reinforcement-learning
uses:
  - urn:ngm:class:reward-function
  - urn:ngm:class:neural-network
supports:
  - urn:ngm:class:policy
partOf:
  - urn:ngm:class:reinforcement-learning
relatedTo:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:value-function
  - urn:ngm:class:agent
  - urn:ngm:class:dynamic-programming
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Q Learning

Q-learning is a model-free, off-policy reinforcement learning algorithm that learns the value of taking a given action in a given state by iteratively updating an action-value (Q) function towards a bootstrapped Bellman target. Because it learns the optimal action-value function regardless of the policy being followed, it converges to optimal behaviour without requiring a model of the environment's dynamics. It is a foundational algorithm extended by deep Q-networks for high-dimensional problems.
