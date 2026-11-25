---
okf_version: "0.2"
type: Class
title: LSTM
resource: urn:ngm:class:lstm
domain: machine-learning
description: Long Short-Term Memory (LSTM) is a specialised recurrent neural network architecture introduced by Hochreiter and Schmidhuber in 1997, designed to learn long-range temporal dependencies in sequential data. It employs a gated cell state mechanism—comprising input, forget, and output gates—that allows gradients to flow across many time steps without vanishing or exploding, overcoming the principal f
maturity: mature
quality: 0.75
is-a:
  - urn:ngm:class:recurrent-neural-network
hasPart:
  - urn:ngm:class:cell-state
  - urn:ngm:class:forget-gate
  - urn:ngm:class:input-gate
  - urn:ngm:class:output-gate
requires:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:backpropagation-through-time
  - urn:ngm:class:gradient-descent
enables:
  - urn:ngm:class:speech-recognition
  - urn:ngm:class:machine-translation
  - urn:ngm:class:time-series-forecasting
  - urn:ngm:class:language-modelling
  - urn:ngm:class:handwriting-recognition
contrastsWith:
  - urn:ngm:class:transformer
  - urn:ngm:class:gated-recurrent-unit
  - urn:ngm:class:vanilla-rnn
bridgesTo:
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:edge-inference
uses:
  - urn:ngm:class:dropout
  - urn:ngm:class:sigmoid-activation
  - urn:ngm:class:tanh-activation
  - urn:ngm:class:dropout
partOf:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:sequence-modelling
relatedTo:
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:encoder-decoder
  - urn:ngm:class:vanishing-gradient-problem
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:encoder-decoder
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# LSTM

Long Short-Term Memory (LSTM) is a specialised recurrent neural network architecture introduced by Hochreiter and Schmidhuber in 1997, designed to learn long-range temporal dependencies in sequential data. It employs a gated cell state mechanism—comprising input, forget, and output gates—that allows gradients to flow across many time steps without vanishing or exploding, overcoming the principal failure mode of vanilla recurrent neural networks. LSTMs encode contextual information in a learnable cell state that persists across sequence steps, making them highly effective for variable-length sequence modelling tasks such as language modelling, machine translation, and time-series forecasting. Although largely superseded by Transformer-based architectures for many NLP tasks, LSTMs remain widely deployed in low-latency, resource-constrained, and streaming scenarios.
