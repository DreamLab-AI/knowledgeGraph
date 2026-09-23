---
okf_version: "0.2"
type: Class
title: Value Function
resource: urn:ngm:class:value-function
domain: ai
description: A value function in reinforcement learning estimates the expected cumulative future reward obtainable from a given state (state-value) or state-action pair (action-value) under a particular policy. It captures the long-term desirability of situations rather than immediate reward, and satisfies the recursive Bellman equation that relates the value of a state to the values of its successors. Value f
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:ai-technique
uses:
  - urn:ngm:class:markov-decision-process
supports:
  - urn:ngm:class:optimal-control
relatedTo:
  - urn:ngm:class:machine-learning-discipline
---

# Value Function

A value function in reinforcement learning estimates the expected cumulative future reward obtainable from a given state (state-value) or state-action pair (action-value) under a particular policy. It captures the long-term desirability of situations rather than immediate reward, and satisfies the recursive Bellman equation that relates the value of a state to the values of its successors. Value functions are central to dynamic programming, temporal-difference learning, and actor-critic methods, providing the signal that guides an agent toward reward-maximising behaviour.
