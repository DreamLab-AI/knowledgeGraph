---
okf_version: "0.2"
type: Class
title: Reward Function
resource: urn:ngm:class:reward-function
domain: machine-learning
description: A mathematical formulation in reinforcement learning that maps state-action pairs to scalar values, guiding AI agent behaviour toward desired outcomes through feedback signals; central to policy optimisation, agent training, and objective specification in machine learning systems.
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:sc-content-and-assets
  - urn:ngm:class:reinforcement-learning
hasPart:
  - urn:ngm:class:reward-signal
  - urn:ngm:class:discount-factor
requires:
  - urn:ngm:class:state-space
  - urn:ngm:class:action-space
  - urn:ngm:class:environment-model
enables:
  - urn:ngm:class:policy-optimisation
  - urn:ngm:class:autonomous-agent-learning
implements:
  - urn:ngm:class:bellman-equation
contrastsWith:
  - urn:ngm:class:loss-function
  - urn:ngm:class:heuristic-function
bridgesTo:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:robotics
  - urn:ngm:class:artificial-intelligence
uses:
  - urn:ngm:class:value-function
  - urn:ngm:class:temporal-difference-learning
supports:
  - urn:ngm:class:inverse-reinforcement-learning
  - urn:ngm:class:reward-shaping
  - urn:ngm:class:multi-objective-optimisation
partOf:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:markov-decision-process
relatedTo:
  - urn:ngm:class:reward-hacking
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:alignment
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Reward Function

A mathematical formulation in reinforcement learning that maps state-action pairs to scalar values, guiding AI agent behaviour toward desired outcomes through feedback signals; central to policy optimisation, agent training, and objective specification in machine learning systems.
