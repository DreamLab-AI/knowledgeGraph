---
okf_version: "0.2"
type: Class
title: State Space Model
resource: urn:ngm:class:state-space-model
domain: machine-learning
description: A State Space Model (SSM) is a mathematical framework that represents a dynamical system through a hidden (latent) state vector whose evolution over discrete or continuous time is governed by linear or learnable recurrence equations, paired with an output equation mapping states to observations. Originally formalised in control theory and signal processing — with the Kalman filter as a canonical i
maturity: emerging
quality: 0.75
is-a:
  - urn:ngm:class:ai-model-architecture
  - urn:ngm:class:sequence-model
requires:
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:signal-processing
enables:
  - urn:ngm:class:language-model
  - urn:ngm:class:long-range-dependency-modelling
  - urn:ngm:class:time-series-forecasting
  - urn:ngm:class:audio-generation
dependsOn:
  - urn:ngm:class:probabilistic-model
  - urn:ngm:class:hidden-markov-model
implements:
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:linear-time-invariant-system
contrastsWith:
  - urn:ngm:class:transformer
  - urn:ngm:class:self-attention
  - urn:ngm:class:convolutional-neural-network
bridgesTo:
  - urn:ngm:class:robotics-control
  - urn:ngm:class:autonomous-system
  - urn:ngm:class:autonomous-system
uses:
  - urn:ngm:class:convolution
  - urn:ngm:class:selective-attention
  - urn:ngm:class:hippo-initialisation
relatedTo:
  - urn:ngm:class:sequence-model
  - urn:ngm:class:neural-network
  - urn:ngm:class:control-theory
  - urn:ngm:class:deep-learning
  - urn:ngm:class:sequence-to-sequence-model
---

# State Space Model

A State Space Model (SSM) is a mathematical framework that represents a dynamical system through a hidden (latent) state vector whose evolution over discrete or continuous time is governed by linear or learnable recurrence equations, paired with an output equation mapping states to observations. Originally formalised in control theory and signal processing — with the Kalman filter as a canonical inference algorithm — SSMs have been re-parameterised as structured sequence layers in deep learning, enabling sub-quadratic scaling in sequence length as an alternative to self-attention. Modern deep SSM variants such as S4, Mamba, and RWKV exploit diagonal or low-rank structure in the state transition matrix to achieve hardware-efficient training and inference on long sequences.
