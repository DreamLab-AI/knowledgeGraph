---
okf_version: "0.2"
type: Class
title: Hidden Markov Model
resource: urn:ngm:class:hidden-markov-model
domain: machine-learning
description: A hidden Markov model (HMM) is a probabilistic model for sequences in which an unobserved Markov chain of discrete states generates observable outputs, one per state, according to state-dependent emission distributions. The model is defined by transition probabilities between hidden states and emission probabilities for observations, plus an initial state distribution. HMMs support efficient infer
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:graphical-model
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:markov-chain
enables:
  - urn:ngm:class:speech-recognition
  - urn:ngm:class:part-of-speech-tagging
dependsOn:
  - urn:ngm:class:markov-chain
  - urn:ngm:class:graphical-model
implements:
  - urn:ngm:class:sequence-model
contrastsWith:
  - urn:ngm:class:state-machine
uses:
  - urn:ngm:class:dynamic-programming
  - urn:ngm:class:expectation-maximisation
  - urn:ngm:class:bayesian-inference
supports:
  - urn:ngm:class:time-series
partOf:
  - urn:ngm:class:graphical-model
relatedTo:
  - urn:ngm:class:latent-variable-model
  - urn:ngm:class:state-machine
  - urn:ngm:class:time-series
---

# Hidden Markov Model

A hidden Markov model (HMM) is a probabilistic model for sequences in which an unobserved Markov chain of discrete states generates observable outputs, one per state, according to state-dependent emission distributions. The model is defined by transition probabilities between hidden states and emission probabilities for observations, plus an initial state distribution. HMMs support efficient inference for filtering, decoding, and learning over sequential data.
