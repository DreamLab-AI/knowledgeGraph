---
okf_version: "0.2"
type: Class
title: Multi-Armed Bandit
resource: urn:ngm:class:multi-armed-bandit
domain: machine-learning
description: A sequential decision-making framework in which an agent repeatedly chooses among a fixed set of actions ('arms') with unknown reward distributions, observing only the reward of the chosen arm, and seeks to maximise cumulative reward — equivalently, to minimise regret against the best arm in hindsight; it isolates the exploration–exploitation trade-off in its purest form, since unlike a full Marko
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:reinforcement-learning
enables:
  - urn:ngm:class:recommendation-systems
  - urn:ngm:class:a-b-testing
dependsOn:
  - urn:ngm:class:exploration-exploitation-tradeoff
contrastsWith:
  - urn:ngm:class:markov-decision-process
relatedTo:
  - urn:ngm:class:online-learning
---

# Multi-Armed Bandit

A sequential decision-making framework in which an agent repeatedly chooses among a fixed set of actions ('arms') with unknown reward distributions, observing only the reward of the chosen arm, and seeks to maximise cumulative reward — equivalently, to minimise regret against the best arm in hindsight; it isolates the exploration–exploitation trade-off in its purest form, since unlike a full Markov decision process the environment has no state transitions, and underpins algorithms such as epsilon-greedy, UCB, and Thompson sampling used in A/B testing, recommendation, and adaptive experimentation.
