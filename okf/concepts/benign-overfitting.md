---
okf_version: "0.2"
type: Class
title: Benign Overfitting
resource: urn:ngm:class:benign-overfitting
domain: ai
description: Benign overfitting is the phenomenon, observed in heavily overparameterised models such as deep neural networks, where a model fits its training data exactly, including noise, yet still generalises well to unseen data. This contradicts the classical bias-variance trade-off, which predicts that interpolating noise should harm generalisation. It is closely associated with the double-descent risk cur
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:ai-research-area
  - urn:ngm:class:statistical-learning-theory
  - urn:ngm:class:generalisation-theory
hasPart:
  - urn:ngm:class:double-descent
  - urn:ngm:class:implicit-bias
  - urn:ngm:class:minimum-norm-interpolator
  - urn:ngm:class:interpolation-threshold
  - urn:ngm:class:overparameterisation
requires:
  - urn:ngm:class:overparameterisation
  - urn:ngm:class:implicit-bias
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:training-data
enables:
  - urn:ngm:class:generalisation
  - urn:ngm:class:interpolation
  - urn:ngm:class:zero-training-error
  - urn:ngm:class:near-optimal-test-error
dependsOn:
  - urn:ngm:class:implicit-bias
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:overparameterisation
  - urn:ngm:class:data-covariance-spectrum
  - urn:ngm:class:statistical-learning-theory
implements:
  - urn:ngm:class:minimum-norm-interpolator
  - urn:ngm:class:implicit-bias
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:stochastic-gradient-descent
contrastsWith:
  - urn:ngm:class:overfitting
  - urn:ngm:class:regularisation
  - urn:ngm:class:early-stopping
  - urn:ngm:class:underfitting
  - urn:ngm:class:classical-bias-variance-tradeoff
bridgesTo:
  - urn:ngm:class:model-governance
  - urn:ngm:class:ai-safety
  - urn:ngm:class:responsible-ai
  - urn:ngm:class:ai-governance
  - urn:ngm:class:eu-ai-act-regulatory-instrument
supports:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:large-language-models
  - urn:ngm:class:neural-network
  - urn:ngm:class:foundation-model
standardizedBy:
  - urn:ngm:class:statistical-learning-theory
partOf:
  - urn:ngm:class:statistical-learning-theory
  - urn:ngm:class:generalisation-theory
  - urn:ngm:class:machine-learning-theory
relatedTo:
  - urn:ngm:class:algorithmic-bias-and-variance
  - urn:ngm:class:cross-validation
  - urn:ngm:class:double-descent
  - urn:ngm:class:overparameterisation
  - urn:ngm:class:statistical-learning-theory
  - urn:ngm:class:deep-learning
  - urn:ngm:class:regularisation
  - urn:ngm:class:grokking
  - urn:ngm:class:model-capacity
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:loss-function
  - urn:ngm:class:benchmarks
  - urn:ngm:class:overfitting
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:transformer
  - urn:ngm:class:kernel-methods
  - urn:ngm:class:empirical-risk-minimisation
  - urn:ngm:class:memorisation
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:foundation-model
  - urn:ngm:class:scaling-laws
  - urn:ngm:class:chinchilla-scaling
  - urn:ngm:class:lo-ra
  - urn:ngm:class:differential-privacy
  - urn:ngm:class:neural-architecture-search
---

# Benign Overfitting

Benign overfitting is the phenomenon, observed in heavily overparameterised models such as deep neural networks, where a model fits its training data exactly, including noise, yet still generalises well to unseen data. This contradicts the classical bias-variance trade-off, which predicts that interpolating noise should harm generalisation. It is closely associated with the double-descent risk curve and is a central puzzle in modern statistical learning theory.
