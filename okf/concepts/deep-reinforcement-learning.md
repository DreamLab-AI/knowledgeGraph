---
okf_version: "0.2"
type: Class
title: Deep Reinforcement Learning
resource: urn:ngm:class:deep-reinforcement-learning
domain: machine-learning
description: Deep Reinforcement Learning (DRL) is a machine learning paradigm that combines deep neural networks with reinforcement learning, enabling agents to learn optimal policies for sequential decision-making tasks by interacting with an environment, receiving scalar reward signals, and updating neural network parameters through gradient-based optimisation. Grounded in the Markov Decision Process framewo
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:artificial-intelligence
hasPart:
  - urn:ngm:class:value-function
  - urn:ngm:class:policy-gradient-methods
  - urn:ngm:class:reward-signal
  - urn:ngm:class:action-space
  - urn:ngm:class:bellman-equation
  - urn:ngm:class:experience-replay
  - urn:ngm:class:exploration-exploitation-tradeoff
  - urn:ngm:class:environment-model
requires:
  - urn:ngm:class:simulation-environment
  - urn:ngm:class:backpropagation
  - urn:ngm:class:experience-replay
  - urn:ngm:class:markov-decision-process
  - urn:ngm:class:gpu-acceleration
  - urn:ngm:class:neural-network
enables:
  - urn:ngm:class:agent
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:robotics
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:multi-agent-reinforcement-learning
  - urn:ngm:class:model-based-reinforcement-learning
  - urn:ngm:class:offline-reinforcement-learning
dependsOn:
  - urn:ngm:class:markov-decision-process
  - urn:ngm:class:bellman-equation
  - urn:ngm:class:backpropagation
  - urn:ngm:class:gpu-acceleration
  - urn:ngm:class:simulation-environment
implements:
  - urn:ngm:class:q-learning
  - urn:ngm:class:temporal-difference-learning
  - urn:ngm:class:proximal-policy-optimisation
  - urn:ngm:class:policy-gradient-methods
  - urn:ngm:class:bellman-equation
contrastsWith:
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:imitation-learning
uses:
  - urn:ngm:class:neural-network
  - urn:ngm:class:action-space
  - urn:ngm:class:environment-model
  - urn:ngm:class:gpu-acceleration
  - urn:ngm:class:policy-gradient-methods
  - urn:ngm:class:reward-signal
  - urn:ngm:class:value-function
  - urn:ngm:class:bellman-equation
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:monte-carlo-tree-search
  - urn:ngm:class:backpropagation
supports:
  - urn:ngm:class:safe-ai
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:large-language-model
  - urn:ngm:class:diffusion-policy
standardizedBy:
  - urn:ngm:class:reinforcement-learning
relatedTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:large-language-model
  - urn:ngm:class:model-based-reinforcement-learning
  - urn:ngm:class:offline-reinforcement-learning
  - urn:ngm:class:diffusion-policy
  - urn:ngm:class:game-theory
  - urn:ngm:class:monte-carlo-tree-search
  - urn:ngm:class:multi-agent-reinforcement-learning
  - urn:ngm:class:exploration-exploitation-tradeoff
  - urn:ngm:class:temporal-difference-learning
---

# Deep Reinforcement Learning

Deep Reinforcement Learning (DRL) is a machine learning paradigm that combines deep neural networks with reinforcement learning, enabling agents to learn optimal policies for sequential decision-making tasks by interacting with an environment, receiving scalar reward signals, and updating neural network parameters through gradient-based optimisation. Grounded in the Markov Decision Process framework, DRL applies the Bellman equation recursively to approximate value functions or directly optimise policies using methods such as DQN, PPO, SAC, and MuZero, achieving superhuman performance in games, robotics control, chip design, and language model alignment.
