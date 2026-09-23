---
okf_version: "0.2"
type: Class
title: Policy Update Magnitude
resource: urn:ngm:class:policy-update-magnitude
domain: artificial-intelligence
description: "Policy Update Magnitude is a measure of how much a reinforcement learning agent's policy changes between successive gradient update steps, typically quantified as the KL divergence between the old and new policy distributions or as the Euclidean norm of the parameter change vector. Controlling this magnitude is essential to training stability: excessively large updates can cause catastrophic perfo"
maturity: established
quality: 0
is-a:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:reinforcement-learning-algorithm
requires:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:reinforcement-learning
enables:
  - urn:ngm:class:reinforcement-learning-from-human-feedback
uses:
  - urn:ngm:class:learning-rate-schedule
  - urn:ngm:class:gradient-clipping
partOf:
  - urn:ngm:class:reinforcement-learning-algorithm
relatedTo:
  - urn:ngm:class:reinforcement-learning-algorithm
  - urn:ngm:class:proximal-policy-optimisation
  - urn:ngm:class:reward-function
  - urn:ngm:class:loss-function
---

# Policy Update Magnitude

Policy Update Magnitude is a measure of how much a reinforcement learning agent's policy changes between successive gradient update steps, typically quantified as the KL divergence between the old and new policy distributions or as the Euclidean norm of the parameter change vector. Controlling this magnitude is essential to training stability: excessively large updates can cause catastrophic performance collapse, whilst excessively small updates slow convergence. Algorithms such as Proximal Policy Optimisation (PPO) and Trust Region Policy Optimisation (TRPO) impose explicit constraints on policy update magnitude to balance exploration, exploitation, and stability.
