---
okf_version: "0.2"
type: Class
title: World Models
resource: urn:ngm:class:world-models
domain: machine-learning
description: World models are learned internal representations of an environment that predict how it evolves in response to actions. They let an agent plan and reason by simulating outcomes rather than acting directly in the world.
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:world-model
requires:
  - urn:ngm:class:neural-network
  - urn:ngm:class:reinforcement-learning
enables:
  - urn:ngm:class:planning
bridgesTo:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:generative-models
---

# World Models

World models are learned internal representations of an environment that predict how it evolves in response to actions. They let an agent plan and reason by simulating outcomes rather than acting directly in the world.
