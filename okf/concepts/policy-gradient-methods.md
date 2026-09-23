---
okf_version: "0.2"
type: Class
title: Policy Gradient Methods
resource: urn:ngm:class:policy-gradient-methods
domain: machine-learning
description: Policy Gradient Methods are a class of reinforcement-learning algorithms that directly optimise a parameterised policy by ascending the gradient of expected cumulative reward. Rather than deriving a policy from a learned value function, they adjust action probabilities to make rewarding behaviour more likely, using estimators such as REINFORCE and actor-critic variants. They naturally handle conti
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:value-function
  - urn:ngm:class:reward-function
requires:
  - urn:ngm:class:markov-decision-process
  - urn:ngm:class:reward-function
enables:
  - urn:ngm:class:proximal-policy-optimisation
dependsOn:
  - urn:ngm:class:value-function
implements:
  - urn:ngm:class:policy-optimisation
uses:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:neural-network
supports:
  - urn:ngm:class:deep-reinforcement-learning
partOf:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:policy-optimisation
relatedTo:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:machine-learning-discipline
---

# Policy Gradient Methods

Policy Gradient Methods are a class of reinforcement-learning algorithms that directly optimise a parameterised policy by ascending the gradient of expected cumulative reward. Rather than deriving a policy from a learned value function, they adjust action probabilities to make rewarding behaviour more likely, using estimators such as REINFORCE and actor-critic variants. They naturally handle continuous and stochastic action spaces and underpin modern algorithms like proximal policy optimisation.
