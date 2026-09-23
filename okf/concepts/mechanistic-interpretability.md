---
okf_version: "0.2"
type: Class
title: Mechanistic Interpretability
resource: urn:ngm:class:mechanistic-interpretability
domain: machine-learning
description: Mechanistic interpretability is a research area that seeks to reverse-engineer the internal computations of neural networks into human-understandable algorithms. It studies features, circuits, and representations within model weights and activations to explain how specific behaviours arise. The field aims to make models transparent enough to predict, audit, and align, supporting AI safety.
maturity: experimental
quality: 0.72
is-a:
  - urn:ngm:class:ai-safety
hasPart:
  - urn:ngm:class:sparse-autoencoders
  - urn:ngm:class:activation-patching
requires:
  - urn:ngm:class:neural-network
  - urn:ngm:class:transformer-architecture
enables:
  - urn:ngm:class:ai-alignment
dependsOn:
  - urn:ngm:class:representation-learning
  - urn:ngm:class:attention-mechanism
implements:
  - urn:ngm:class:causal-tracing
contrastsWith:
  - urn:ngm:class:post-hoc-explanation
bridgesTo:
  - urn:ngm:class:governance
  - urn:ngm:class:security
supports:
  - urn:ngm:class:safety-and-alignment
  - urn:ngm:class:ai-risks
partOf:
  - urn:ngm:class:ai-safety
  - urn:ngm:class:explainable-ai
relatedTo:
  - urn:ngm:class:safety-and-alignment
  - urn:ngm:class:ai-risks
  - urn:ngm:class:superposition-hypothesis
  - urn:ngm:class:model-evaluation
---

# Mechanistic Interpretability

Mechanistic interpretability is a research area that seeks to reverse-engineer the internal computations of neural networks into human-understandable algorithms. It studies features, circuits, and representations within model weights and activations to explain how specific behaviours arise. The field aims to make models transparent enough to predict, audit, and align, supporting AI safety.
