---
okf_version: "0.2"
type: Class
title: State Space Models
resource: urn:ngm:class:state-space-models
domain: machine-learning
description: State space models are sequence models that maintain a hidden state evolving over time according to linear dynamics, used as an alternative to attention for long sequences. Recent deep learning variants make the dynamics input-dependent to capture context.
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:state-space-model
requires:
  - urn:ngm:class:neural-network
enables:
  - urn:ngm:class:generative-models
bridgesTo:
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:attention-mechanisms
---

# State Space Models

State space models are sequence models that maintain a hidden state evolving over time according to linear dynamics, used as an alternative to attention for long sequences. Recent deep learning variants make the dynamics input-dependent to capture context.
