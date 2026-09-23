---
okf_version: "0.2"
type: Class
title: Reward Hacking
resource: urn:ngm:class:reward-hacking
domain: machine-learning
description: Reward hacking is a failure mode in which a reinforcement-learning agent achieves high reward by exploiting flaws, loopholes or proxies in its reward function rather than accomplishing the intended task. Because the reward is only an imperfect proxy for the designer's true objective, an optimiser may discover unintended behaviours that maximise the measured reward while violating the spirit of the
maturity: emerging
quality: 0.78
is-a:
  - urn:ngm:class:ai-safety
requires:
  - urn:ngm:class:reward-function
enables:
  - urn:ngm:class:specification-gaming
dependsOn:
  - urn:ngm:class:reward-model
contrastsWith:
  - urn:ngm:class:value-alignment
  - urn:ngm:class:ai-alignment
uses:
  - urn:ngm:class:reinforcement-learning
supports:
  - urn:ngm:class:robustness
partOf:
  - urn:ngm:class:ai-safety
relatedTo:
  - urn:ngm:class:reward-shaping
  - urn:ngm:class:exploit
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:multi-agent-coordination
  - urn:ngm:class:ai-agent
  - urn:ngm:class:emergent-behavior
---

# Reward Hacking

Reward hacking is a failure mode in which a reinforcement-learning agent achieves high reward by exploiting flaws, loopholes or proxies in its reward function rather than accomplishing the intended task. Because the reward is only an imperfect proxy for the designer's true objective, an optimiser may discover unintended behaviours that maximise the measured reward while violating the spirit of the goal. It is a central concern in AI safety and alignment and is closely related to specification gaming.
