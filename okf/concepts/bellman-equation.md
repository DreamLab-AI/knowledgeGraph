---
okf_version: "0.2"
type: Class
title: Bellman Equation
resource: urn:ngm:class:bellman-equation
domain: machine-learning
description: The Bellman equation is a recursive relationship that expresses the value of a state as the immediate reward plus the discounted value of successor states under a given policy. It is the mathematical foundation of dynamic programming and reinforcement learning, characterising optimal behaviour through the principle of optimality. Solving or approximating the Bellman equation yields value functions
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:dynamic-programming
enables:
  - urn:ngm:class:q-learning
  - urn:ngm:class:reinforcement-learning
dependsOn:
  - urn:ngm:class:markov-decision-process
implements:
  - urn:ngm:class:dynamic-programming
bridgesTo:
  - urn:ngm:class:q-learning
uses:
  - urn:ngm:class:value-function
  - urn:ngm:class:reward-function
supports:
  - urn:ngm:class:optimal-control
  - urn:ngm:class:planning
partOf:
  - urn:ngm:class:markov-decision-process
relatedTo:
  - urn:ngm:class:value-function
  - urn:ngm:class:policy
  - urn:ngm:class:state-space
---

# Bellman Equation

The Bellman equation is a recursive relationship that expresses the value of a state as the immediate reward plus the discounted value of successor states under a given policy. It is the mathematical foundation of dynamic programming and reinforcement learning, characterising optimal behaviour through the principle of optimality. Solving or approximating the Bellman equation yields value functions and optimal policies for sequential decision problems.
