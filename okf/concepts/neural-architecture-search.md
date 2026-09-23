---
okf_version: "0.2"
type: Class
title: Neural Architecture Search
resource: urn:ngm:class:neural-architecture-search
domain: machine-learning
description: Neural Architecture Search (NAS) is an automated machine learning technique that searches a defined space of neural network designs to discover architectures that maximise predictive performance or satisfy multi-objective constraints such as latency, parameter count, and energy consumption. NAS algorithms explore the architecture search space using strategies that include reinforcement learning, e
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:auto-ml
requires:
  - urn:ngm:class:search-space-definition
  - urn:ngm:class:performance-estimation-strategy
  - urn:ngm:class:gpu-compute
enables:
  - urn:ngm:class:knowledge-distillation-for-edge
  - urn:ngm:class:model-compression-for-edge
  - urn:ngm:class:inference
  - urn:ngm:class:neural-network
dependsOn:
  - urn:ngm:class:neural-network-architecture
  - urn:ngm:class:deep-learning
  - urn:ngm:class:transfer-learning
contrastsWith:
  - urn:ngm:class:architecture
  - urn:ngm:class:feature-engineering
bridgesTo:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:hardware-software-co-design
uses:
  - urn:ngm:class:differentiable-architecture
  - urn:ngm:class:hyperparameter-tuning
  - urn:ngm:class:machine-learning-discipline-framework
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:evolutionary-algorithm
  - urn:ngm:class:bayesian-optimisation
  - urn:ngm:class:weight-sharing
relatedTo:
  - urn:ngm:class:machine-learning-discipline-pipeline
  - urn:ngm:class:zero-cost-proxy
  - urn:ngm:class:mixture-of-experts-architecture
  - urn:ngm:class:foundation-model
---

# Neural Architecture Search

Neural Architecture Search (NAS) is an automated machine learning technique that searches a defined space of neural network designs to discover architectures that maximise predictive performance or satisfy multi-objective constraints such as latency, parameter count, and energy consumption. NAS algorithms explore the architecture search space using strategies that include reinforcement learning, evolutionary algorithms, differentiable relaxations (DARTS), and predictor-based approaches, each making different trade-offs between search cost and solution quality. The field emerged from the observation that hand-designed architectures require substantial expert knowledge and iterative experimentation, and that automated search can discover non-obvious configurations that outperform human-designed baselines on targeted hardware or task distributions.
