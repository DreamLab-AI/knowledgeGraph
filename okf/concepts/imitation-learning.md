---
okf_version: "0.2"
type: Class
title: Imitation Learning
resource: urn:ngm:class:imitation-learning
domain: artificial-intelligence
description: Imitation Learning (IL), also termed Learning from Demonstration (LfD) or Programming by Demonstration (PbD), is the sequential-decision-making paradigm in which an autonomous agent acquires a policy π(a|s) mapping observations to actions by mimicking expert demonstrations rather than by maximisi...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:ai-agent-system
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:sequential-decision-making
  - urn:ngm:class:policy-learning
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:learning-from-demonstration
hasPart:
  - urn:ngm:class:decoder
  - urn:ngm:class:training-dataset
  - urn:ngm:class:discriminator
  - urn:ngm:class:learning-from-demonstration
  - urn:ngm:class:encoder
  - urn:ngm:class:policy-network
  - urn:ngm:class:teleoperation
  - urn:ngm:class:learning-from-demonstration
  - urn:ngm:class:training-dataset
  - urn:ngm:class:teleoperation
  - urn:ngm:class:decoder
  - urn:ngm:class:encoder
requires:
  - urn:ngm:class:action-space
  - urn:ngm:class:function-approximator
  - urn:ngm:class:observation-space
  - urn:ngm:class:loss-function
  - urn:ngm:class:expert-trajectories
  - urn:ngm:class:state-action-pairs
  - urn:ngm:class:demonstrator
enables:
  - urn:ngm:class:cross-embodiment-transfer
  - urn:ngm:class:reward-free-learning
  - urn:ngm:class:skill-transfer
  - urn:ngm:class:generalist-robot-policies
  - urn:ngm:class:rapid-task-specification
  - urn:ngm:class:sample-efficient-robotics
dependsOn:
  - urn:ngm:class:markov-decision-process
  - urn:ngm:class:statistical-learning-theory
  - urn:ngm:class:no-regret-online-learning
  - urn:ngm:class:maximum-entropy-principle
  - urn:ngm:class:generative-adversarial-networks
  - urn:ngm:class:transformer-architecture
implements:
  - urn:ngm:class:action-chunking-transformer
  - urn:ngm:class:behavioural-cloning
  - urn:ngm:class:diffusion-policy
  - urn:ngm:class:goal-conditioned-behaviour-cloning
  - urn:ngm:class:inverse-reinforcement-learning
  - urn:ngm:class:dagger-ci-pipeline-engine
  - urn:ngm:class:dagger-ci-pipeline-engine
  - urn:ngm:class:gail
  - urn:ngm:class:airl
contrastsWith:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:classical-control
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:model-predictive-control
  - urn:ngm:class:optimal-control
uses:
  - urn:ngm:class:inverse-dynamics-model
  - urn:ngm:class:neural-network
  - urn:ngm:class:transformer
  - urn:ngm:class:vision-language-model
  - urn:ngm:class:diffusion-models
  - urn:ngm:class:teleoperation
  - urn:ngm:class:neural-network
  - urn:ngm:class:transformer
  - urn:ngm:class:vision-language-models
supports:
  - urn:ngm:class:autonomous-driving
  - urn:ngm:class:dexterous-manipulation
  - urn:ngm:class:humanoid-control
  - urn:ngm:class:robot-manipulation
  - urn:ngm:class:surgical-robotics
  - urn:ngm:class:drone-acrobatics
standardizedBy:
  - urn:ngm:class:training-dataset
  - urn:ngm:class:open-x-embodiment
  - urn:ngm:class:training-dataset
  - urn:ngm:class:robomimic-benchmark
  - urn:ngm:class:rlbench
  - urn:ngm:class:calvin
  - urn:ngm:class:libero
relatedTo:
  - urn:ngm:class:apprenticeship-learning
  - urn:ngm:class:meta-learning
  - urn:ngm:class:offline-reinforcement-learning
  - urn:ngm:class:self-supervised-learning
  - urn:ngm:class:sim-to-real-transfer
  - urn:ngm:class:vision-language-action-models
  - urn:ngm:class:large-scale-pretrained-foundation-model
---

# Imitation Learning

Imitation Learning (IL), also termed Learning from Demonstration (LfD) or Programming by Demonstration (PbD), is the sequential-decision-making paradigm in which an autonomous agent acquires a policy π(a|s) mapping observations to actions by mimicking expert demonstrations rather than by maximisi...
