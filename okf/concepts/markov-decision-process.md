---
okf_version: "0.2"
type: Class
title: Markov Decision Process
resource: urn:ngm:class:markov-decision-process
domain: machine-learning
description: A mathematical framework for modelling sequential decision-making where outcomes are partly random and partly under the control of a decision maker, comprising states, actions, transition probabilities, and a reward function, solved by computing a policy that maximises expected cumulative reward.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:markov-chain
hasPart:
  - urn:ngm:class:transition-probability-function
  - urn:ngm:class:reward-function
  - urn:ngm:class:discount-factor
  - urn:ngm:class:policy
  - urn:ngm:class:value-function
requires:
  - urn:ngm:class:markov-chain
  - urn:ngm:class:probability-theory
  - urn:ngm:class:reward-function
  - urn:ngm:class:state-space
  - urn:ngm:class:action-space
enables:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:dynamic-programming
  - urn:ngm:class:optimal-control
  - urn:ngm:class:policy-gradient-methods
contrastsWith:
  - urn:ngm:class:partially-observable-markov-decision-process
  - urn:ngm:class:multi-armed-bandit
bridgesTo:
  - urn:ngm:class:robotics-planning
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:optimisation
uses:
  - urn:ngm:class:bellman-equation
  - urn:ngm:class:optimisation
  - urn:ngm:class:expected-utility-theory
relatedTo:
  - urn:ngm:class:q-learning
  - urn:ngm:class:temporal-difference-learning
---

# Markov Decision Process

A mathematical framework for modelling sequential decision-making where outcomes are partly random and partly under the control of a decision maker, comprising states, actions, transition probabilities, and a reward function, solved by computing a policy that maximises expected cumulative reward.
