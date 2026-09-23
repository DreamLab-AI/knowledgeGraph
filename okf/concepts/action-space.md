---
okf_version: "0.2"
type: Class
title: Action Space
resource: urn:ngm:class:action-space
domain: ai
description: The action space in reinforcement learning and control theory is the complete set of actions available to an agent at any given decision step, defining the boundaries of what the agent may do when interacting with its environment. It may be discrete—a finite enumeration of choices—or continuous—a real-valued manifold such as joint torques or steering angles—and its structure fundamentally determin
maturity: established
quality: 0.87
is-a:
  - urn:ngm:class:state-space
  - urn:ngm:class:markov-decision-process
  - urn:ngm:class:control-theory
  - urn:ngm:class:optimisation
hasPart:
  - urn:ngm:class:discrete-action
  - urn:ngm:class:continuous-action
  - urn:ngm:class:policy-gradient-methods
  - urn:ngm:class:value-function
  - urn:ngm:class:exploration-exploitation
  - urn:ngm:class:action-masking
  - urn:ngm:class:action-factorisation
  - urn:ngm:class:action-embedding
  - urn:ngm:class:parameterised-action
requires:
  - urn:ngm:class:environment-model
  - urn:ngm:class:simulation-environment
  - urn:ngm:class:reward-function
  - urn:ngm:class:markov-decision-process
  - urn:ngm:class:transition-dynamics
enables:
  - urn:ngm:class:policy-optimisation
  - urn:ngm:class:reinforcement-learning-algorithm
  - urn:ngm:class:deep-reinforcement-learning
  - urn:ngm:class:safe-reinforcement-learning
  - urn:ngm:class:hierarchical-reinforcement-learning
  - urn:ngm:class:multi-agent-reinforcement-learning
  - urn:ngm:class:combinatorial-optimisation
  - urn:ngm:class:autonomous-robot
dependsOn:
  - urn:ngm:class:environment-model
  - urn:ngm:class:simulation-environment
  - urn:ngm:class:gpu-acceleration
  - urn:ngm:class:neural-network
implements:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:model-based-reinforcement-learning
  - urn:ngm:class:control-theory
  - urn:ngm:class:deep-learning
contrastsWith:
  - urn:ngm:class:inverse-reinforcement-learning
  - urn:ngm:class:curriculum-learning
  - urn:ngm:class:transfer-learning
uses:
  - urn:ngm:class:reinforcement-learning-for-robotics
  - urn:ngm:class:policy-gradient-methods
  - urn:ngm:class:proximal-policy-optimisation
  - urn:ngm:class:temporal-difference
  - urn:ngm:class:neural-network
  - urn:ngm:class:graph-neural-network
  - urn:ngm:class:value-function
  - urn:ngm:class:reward-function
supports:
  - urn:ngm:class:reinforcement-learning-for-robotics
  - urn:ngm:class:game-ai
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:combinatorial-optimisation
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:large-language-models
  - urn:ngm:class:natural-language-processing
standardizedBy:
  - urn:ngm:class:markov-decision-process
  - urn:ngm:class:gymnasium
relatedTo:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:reward-function
  - urn:ngm:class:markov-decision-process
  - urn:ngm:class:control-theory
  - urn:ngm:class:exploration-exploitation
  - urn:ngm:class:reward-shaping
  - urn:ngm:class:sample-efficiency
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:domain-randomisation
  - urn:ngm:class:large-language-models
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:multi-agent-reinforcement-learning
  - urn:ngm:class:computer-vision
  - urn:ngm:class:deep-reinforcement-learning
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:hierarchical-reinforcement-learning
  - urn:ngm:class:state-space
---

# Action Space

The action space in reinforcement learning and control theory is the complete set of actions available to an agent at any given decision step, defining the boundaries of what the agent may do when interacting with its environment. It may be discrete—a finite enumeration of choices—or continuous—a real-valued manifold such as joint torques or steering angles—and its structure fundamentally determines which learning algorithms are applicable and how efficiently a policy can be discovered.
