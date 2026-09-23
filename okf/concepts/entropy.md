---
okf_version: "0.2"
type: Class
title: Entropy
resource: urn:ngm:class:entropy
domain: machine-learning
description: A measure of disorder or uncertainty. In thermodynamics it quantifies the unavailable energy in a system, and in information theory it quantifies the average uncertainty or information content of a source.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:information-theory
  - urn:ngm:class:probability-theory
  - urn:ngm:class:statistical-mechanics
hasPart:
  - urn:ngm:class:shannon-entropy
  - urn:ngm:class:differential-entropy
  - urn:ngm:class:joint-entropy
  - urn:ngm:class:conditional-entropy
  - urn:ngm:class:von-neumann-entropy
  - urn:ngm:class:r-nyi-entropy
  - urn:ngm:class:min-entropy
requires:
  - urn:ngm:class:probability-theory
  - urn:ngm:class:random-variable
  - urn:ngm:class:probability-distribution
  - urn:ngm:class:logarithm
enables:
  - urn:ngm:class:random-number-generation
  - urn:ngm:class:data-compression
  - urn:ngm:class:cryptography
  - urn:ngm:class:lossless-coding
  - urn:ngm:class:feature-selection
  - urn:ngm:class:channel-capacity
  - urn:ngm:class:information-gain
dependsOn:
  - urn:ngm:class:probability-theory
  - urn:ngm:class:statistics
  - urn:ngm:class:logarithm
  - urn:ngm:class:expectation
implements:
  - urn:ngm:class:cross-entropy-loss
  - urn:ngm:class:kl-divergence
  - urn:ngm:class:mutual-information
  - urn:ngm:class:information-gain
  - urn:ngm:class:information-bottleneck
  - urn:ngm:class:evidence-lower-bound
contrastsWith:
  - urn:ngm:class:redundancy
  - urn:ngm:class:negentropy
  - urn:ngm:class:algorithmic-information-theory
bridgesTo:
  - urn:ngm:class:cryptography
  - urn:ngm:class:quantum-information
  - urn:ngm:class:thermodynamics
  - urn:ngm:class:statistical-physics
  - urn:ngm:class:statistical-learning-theory
uses:
  - urn:ngm:class:probability-distribution
  - urn:ngm:class:random-variable
  - urn:ngm:class:logarithm
  - urn:ngm:class:expectation-operator
supports:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:deep-learning
  - urn:ngm:class:decision-tree
  - urn:ngm:class:vae
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:neural-network
standardizedBy:
  - urn:ngm:class:ieee-information-theory-society
  - urn:ngm:class:shannon-1948-a-mathematical-theory-of-communication
relatedTo:
  - urn:ngm:class:channel-capacity
  - urn:ngm:class:mutual-information
  - urn:ngm:class:kl-divergence
  - urn:ngm:class:thermodynamics
  - urn:ngm:class:statistical-mechanics
  - urn:ngm:class:coding-theory
  - urn:ngm:class:rate-distortion-theory
---

# Entropy

A measure of disorder or uncertainty. In thermodynamics it quantifies the unavailable energy in a system, and in information theory it quantifies the average uncertainty or information content of a source.
