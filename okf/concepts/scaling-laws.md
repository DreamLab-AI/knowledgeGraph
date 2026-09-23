---
okf_version: "0.2"
type: Class
title: Scaling Laws
resource: urn:ngm:class:scaling-laws
domain: machine-learning
description: "Scaling Laws are empirical power-law relationships describing how the performance of neural networks — typically measured as held-out cross-entropy loss — varies predictably as a function of model parameters (N), training data volume (D), and total compute budget (C). Foundational Kaplan et al. (2020) work established smooth, predictable loss curves across many orders of magnitude, while Hoffmann "
maturity: established
quality: 0.73
is-a:
  - urn:ngm:class:ai-research-area
hasPart:
  - urn:ngm:class:parameter-count
  - urn:ngm:class:token-count
  - urn:ngm:class:power-law-exponent
enables:
  - urn:ngm:class:pre-training
  - urn:ngm:class:large-language-models
  - urn:ngm:class:capability-forecasting
  - urn:ngm:class:compute-optimal-training
dependsOn:
  - urn:ngm:class:model-training
  - urn:ngm:class:training-data
  - urn:ngm:class:cross-entropy-loss
  - urn:ngm:class:compute-budget
contrastsWith:
  - urn:ngm:class:emergent-capabilities
  - urn:ngm:class:emergent-capabilities
  - urn:ngm:class:diminishing-returns
bridgesTo:
  - urn:ngm:class:ai-safety
  - urn:ngm:class:ai-hardware
uses:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:neural-network
  - urn:ngm:class:floating-point-operations
supports:
  - urn:ngm:class:foundation-model
  - urn:ngm:class:neural-architecture-search
  - urn:ngm:class:foundation-model
  - urn:ngm:class:ai-infrastructure-planning
relatedTo:
  - urn:ngm:class:model-compression
  - urn:ngm:class:power-law
  - urn:ngm:class:irreducible-loss
  - urn:ngm:class:data-efficiency
---

# Scaling Laws

Scaling Laws are empirical power-law relationships describing how the performance of neural networks — typically measured as held-out cross-entropy loss — varies predictably as a function of model parameters (N), training data volume (D), and total compute budget (C). Foundational Kaplan et al. (2020) work established smooth, predictable loss curves across many orders of magnitude, while Hoffmann et al. (2022) Chinchilla analyses refined optimal compute allocation to roughly equal scaling of model size and training tokens. These relationships guide architectural decisions, compute budgeting, and capability forecasting for large foundation models. Scaling laws have since been extended beyond language modelling to vision transformers, multimodal architectures, and reinforcement learning from human feedback.
