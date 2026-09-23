---
okf_version: "0.2"
type: Class
title: Model Based Reinforcement Learning
resource: urn:ngm:class:model-based-reinforcement-learning
domain: robotics
description: Model-based reinforcement learning is a class of reinforcement learning in which the agent learns or is given an explicit model of the environment's dynamics and reward, then uses that model to plan or to generate simulated experience for policy improvement. By predicting future states it can be far more sample-efficient than model-free methods, at the cost of vulnerability to model error. It unde
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:reinforcement-learning-for-robotics
requires:
  - urn:ngm:class:markov-decision-process
enables:
  - urn:ngm:class:sample-efficiency
  - urn:ngm:class:planning
dependsOn:
  - urn:ngm:class:world-model
implements:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:planning
contrastsWith:
  - urn:ngm:class:q-learning
uses:
  - urn:ngm:class:world-model
  - urn:ngm:class:planning
  - urn:ngm:class:model-predictive-control
supports:
  - urn:ngm:class:robotics
  - urn:ngm:class:agent
relatedTo:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:world-model
  - urn:ngm:class:markov-decision-process
---

# Model Based Reinforcement Learning

Model-based reinforcement learning is a class of reinforcement learning in which the agent learns or is given an explicit model of the environment's dynamics and reward, then uses that model to plan or to generate simulated experience for policy improvement. By predicting future states it can be far more sample-efficient than model-free methods, at the cost of vulnerability to model error. It underpins planning algorithms, world models and many robotics control approaches.
