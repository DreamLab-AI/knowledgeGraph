---
okf_version: "0.2"
type: Class
title: Continual Learning
resource: urn:ngm:class:continual-learning
domain: machine-learning
description: Continual Learning is a machine learning paradigm in which a model sequentially learns from a non-stationary stream of tasks or data distributions while retaining competence on previously acquired knowledge. It directly confronts catastrophic forgetting — the tendency of neural networks to overwrite earlier representations when updated on new training distributions. Core strategies span regularisa
maturity: emerging
quality: 0.91
is-a:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:ai-technique
  - urn:ngm:class:online-learning
  - urn:ngm:class:transfer-learning
hasPart:
  - urn:ngm:class:experience-replay
  - urn:ngm:class:elastic-weight-consolidation
  - urn:ngm:class:knowledge-distillation
  - urn:ngm:class:progressive-neural-networks
  - urn:ngm:class:task-incremental-learning
  - urn:ngm:class:class-incremental-learning
  - urn:ngm:class:memory-replay
  - urn:ngm:class:domain-adaptation
requires:
  - urn:ngm:class:online-learning
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:regularisation
  - urn:ngm:class:neural-network
  - urn:ngm:class:neural-network
  - urn:ngm:class:loss-function
  - urn:ngm:class:representation-learning
  - urn:ngm:class:deep-learning
  - urn:ngm:class:attention-mechanism
enables:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:few-shot-learning
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:machine-unlearning
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:federated-learning
  - urn:ngm:class:domain-adaptation
  - urn:ngm:class:curriculum-learning
dependsOn:
  - urn:ngm:class:neural-network
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:loss-function
  - urn:ngm:class:representation-learning
  - urn:ngm:class:neural-network
  - urn:ngm:class:deep-learning
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:fisher-information
contrastsWith:
  - urn:ngm:class:catastrophic-forgetting
  - urn:ngm:class:multi-task-learning
  - urn:ngm:class:batch-learning
bridgesTo:
  - urn:ngm:class:robotics
  - urn:ngm:class:federated-learning
  - urn:ngm:class:machine-unlearning
  - urn:ngm:class:edge-computing
uses:
  - urn:ngm:class:generative-adversarial-networks
  - urn:ngm:class:meta-learning
  - urn:ngm:class:lo-ra
  - urn:ngm:class:parameter-efficient-fine-tuning
  - urn:ngm:class:variational-autoencoders
  - urn:ngm:class:fisher-information
  - urn:ngm:class:knowledge-distillation
supports:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:edge-computing
  - urn:ngm:class:large-language-models
  - urn:ngm:class:foundation-model
  - urn:ngm:class:robotics
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:computer-vision
standardizedBy:
  - urn:ngm:class:continualai
relatedTo:
  - urn:ngm:class:domain-adaptation
  - urn:ngm:class:curriculum-learning
  - urn:ngm:class:neural-plasticity
  - urn:ngm:class:foundation-model
  - urn:ngm:class:computer-vision
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:machine-unlearning
  - urn:ngm:class:federated-learning
---

# Continual Learning

Continual Learning is a machine learning paradigm in which a model sequentially learns from a non-stationary stream of tasks or data distributions while retaining competence on previously acquired knowledge. It directly confronts catastrophic forgetting — the tendency of neural networks to overwrite earlier representations when updated on new training distributions. Core strategies span regularisation-based protection of critical parameters, rehearsal-based replay of past exemplars or synthetic surrogates, and architectural methods that expand or isolate network capacity per task. The field spans both supervised and reinforcement learning settings and is fundamental wherever data arrives incrementally and retraining from scratch is computationally or commercially infeasible.
