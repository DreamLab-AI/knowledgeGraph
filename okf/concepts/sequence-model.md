---
okf_version: "0.2"
type: Class
title: Sequence Model
resource: urn:ngm:class:sequence-model
domain: machine-learning
description: Any machine learning model that captures dependencies across ordered data — text, speech, video frames, genomic strings, time series — by assigning probabilities to sequences or mapping input sequences to outputs; the family spans n-gram models and hidden Markov models through recurrent networks (LSTM, GRU) to transformers and modern state space models, and underlies language modelling, speech rec
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:machine-learning-model
uses:
  - urn:ngm:class:beam-search
relatedTo:
  - urn:ngm:class:hidden-markov-model
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:state-space-model
---

# Sequence Model

Any machine learning model that captures dependencies across ordered data — text, speech, video frames, genomic strings, time series — by assigning probabilities to sequences or mapping input sequences to outputs; the family spans n-gram models and hidden Markov models through recurrent networks (LSTM, GRU) to transformers and modern state space models, and underlies language modelling, speech recognition, machine translation and time-series forecasting.
