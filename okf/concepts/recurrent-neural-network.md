---
okf_version: "0.2"
type: Class
title: Recurrent Neural Network
resource: urn:ngm:class:recurrent-neural-network
domain: machine-learning
description: A neural network architecture that processes sequential data by maintaining a hidden state across time steps, allowing information from earlier inputs to influence later outputs. Key variants include Long Short-Term Memory networks and Gated Recurrent Units, which address vanishing gradient problems and underpin sequence modelling tasks such as speech recognition, language modelling, and time-seri
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:ai-model-architecture
hasPart:
  - urn:ngm:class:long-short-term-memory
  - urn:ngm:class:gated-recurrent-unit
  - urn:ngm:class:hidden-state
  - urn:ngm:class:encoder-decoder-architecture
  - urn:ngm:class:cell-state
requires:
  - urn:ngm:class:backpropagation-through-time
  - urn:ngm:class:gradient-clipping
  - urn:ngm:class:activation-function
enables:
  - urn:ngm:class:language-modeling
  - urn:ngm:class:automatic-speech-recognition
  - urn:ngm:class:time-series-forecasting
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:machine-translation
dependsOn:
  - urn:ngm:class:sequential-data
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:loss-function
contrastsWith:
  - urn:ngm:class:feedforward-neural-network
  - urn:ngm:class:transformer
  - urn:ngm:class:convolutional-neural-network
bridgesTo:
  - urn:ngm:class:neuromorphic-computing
  - urn:ngm:class:speech-recognition
relatedTo:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:backpropagation
  - urn:ngm:class:vanishing-gradient-problem
  - urn:ngm:class:teacher-forcing
  - urn:ngm:class:state-space-model
---

# Recurrent Neural Network

A neural network architecture that processes sequential data by maintaining a hidden state across time steps, allowing information from earlier inputs to influence later outputs. Key variants include Long Short-Term Memory networks and Gated Recurrent Units, which address vanishing gradient problems and underpin sequence modelling tasks such as speech recognition, language modelling, and time-series forecasting.
