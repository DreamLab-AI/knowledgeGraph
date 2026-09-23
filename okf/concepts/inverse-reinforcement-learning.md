---
okf_version: "0.2"
type: Class
title: Inverse Reinforcement Learning
resource: urn:ngm:class:inverse-reinforcement-learning
domain: machine-learning
description: "Inverse reinforcement learning (IRL) is a machine-learning approach that infers the reward function an agent appears to be optimising from observations of its behaviour, rather than being told the reward in advance. It inverts the usual reinforcement-learning problem: instead of finding a policy that maximises a known reward, it recovers the reward that best explains demonstrated, near-optimal tra"
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:imitation-learning
requires:
  - urn:ngm:class:reward-function
  - urn:ngm:class:markov-decision-process
enables:
  - urn:ngm:class:apprenticeship-learning
  - urn:ngm:class:robot-perception
  - urn:ngm:class:robot-learning
dependsOn:
  - urn:ngm:class:markov-decision-process
implements:
  - urn:ngm:class:imitation-learning
contrastsWith:
  - urn:ngm:class:reinforcement-learning
bridgesTo:
  - urn:ngm:class:apprenticeship-learning
uses:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:neural-network
supports:
  - urn:ngm:class:robotics
  - urn:ngm:class:reward-function
relatedTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:model-evaluation
---

# Inverse Reinforcement Learning

Inverse reinforcement learning (IRL) is a machine-learning approach that infers the reward function an agent appears to be optimising from observations of its behaviour, rather than being told the reward in advance. It inverts the usual reinforcement-learning problem: instead of finding a policy that maximises a known reward, it recovers the reward that best explains demonstrated, near-optimal trajectories. The recovered reward can then be used to train new policies that generalise the demonstrated intent to unseen situations, making IRL central to learning complex objectives that are hard to specify by hand.
