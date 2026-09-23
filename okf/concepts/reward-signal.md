---
okf_version: "0.2"
type: Class
title: Reward Signal
resource: urn:ngm:class:reward-signal
domain: machine-learning
description: A reward signal is the scalar feedback an agent receives from its environment in reinforcement learning, indicating the immediate desirability of the state-action pair just experienced. It is the primary mechanism by which goals are communicated to a learning agent, which seeks to maximise the cumulative reward it accumulates over time rather than any single immediate value. The design of the rewa
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:reward-function
requires:
  - urn:ngm:class:agent
enables:
  - urn:ngm:class:value-function
dependsOn:
  - urn:ngm:class:markov-decision-process
uses:
  - urn:ngm:class:reward-function
supports:
  - urn:ngm:class:value-function
  - urn:ngm:class:temporal-difference-learning
partOf:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:markov-decision-process
relatedTo:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:agent
  - urn:ngm:class:temporal-difference-learning
  - urn:ngm:class:decision-making
---

# Reward Signal

A reward signal is the scalar feedback an agent receives from its environment in reinforcement learning, indicating the immediate desirability of the state-action pair just experienced. It is the primary mechanism by which goals are communicated to a learning agent, which seeks to maximise the cumulative reward it accumulates over time rather than any single immediate value. The design of the reward signal strongly shapes learned behaviour, and poorly specified rewards can lead to unintended or degenerate strategies.
