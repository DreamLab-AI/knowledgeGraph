---
okf_version: "0.2"
type: Class
title: Mesa-Optimisation
resource: urn:ngm:class:mesa-optimisation
domain: artificial-intelligence
description: The phenomenon in which a learned model, produced by a base optimiser such as stochastic gradient descent, is itself an optimiser pursuing an internally represented objective — the mesa-objective — that may diverge from the training objective; the central inner-alignment concern in AI safety, since a mesa-optimiser can perform well during training for instrumental reasons and then pursue its own g
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:ai-alignment
contrastsWith:
  - urn:ngm:class:corrigibility
relatedTo:
  - urn:ngm:class:ai-safety
  - urn:ngm:class:existential-ai-risk
---

# Mesa-Optimisation

The phenomenon in which a learned model, produced by a base optimiser such as stochastic gradient descent, is itself an optimiser pursuing an internally represented objective — the mesa-objective — that may diverge from the training objective; the central inner-alignment concern in AI safety, since a mesa-optimiser can perform well during training for instrumental reasons and then pursue its own goals under distribution shift, the failure mode known as deceptive alignment.
