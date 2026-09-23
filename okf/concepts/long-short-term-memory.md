---
okf_version: "0.2"
type: Class
title: Long Short Term Memory
resource: urn:ngm:class:long-short-term-memory
domain: artificial-intelligence
description: Long Short-Term Memory (LSTM) is a specialised recurrent neural network architecture introduced by Hochreiter and Schmidhuber (1997) that mitigates the vanishing gradient problem through gating mechanisms—input, forget, and output gates—enabling selective retention or forgetting of information across long sequences. LSTMs underpin sequence modelling tasks in natural language processing, time-serie
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:ai-model-architecture
  - urn:ngm:class:recurrent-neural-network
requires:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:deep-learning
enables:
  - urn:ngm:class:natural-language-processing
contrastsWith:
  - urn:ngm:class:transformer
  - urn:ngm:class:attention
partOf:
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:ai-model-architecture
---

# Long Short Term Memory

Long Short-Term Memory (LSTM) is a specialised recurrent neural network architecture introduced by Hochreiter and Schmidhuber (1997) that mitigates the vanishing gradient problem through gating mechanisms—input, forget, and output gates—enabling selective retention or forgetting of information across long sequences. LSTMs underpin sequence modelling tasks in natural language processing, time-series forecasting, and speech recognition, though they have largely been superseded by Transformer architectures for large-scale language tasks.
