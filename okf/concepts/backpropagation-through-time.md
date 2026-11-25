---
okf_version: "0.2"
type: Class
title: Backpropagation Through Time
resource: urn:ngm:class:backpropagation-through-time
domain: machine-learning
description: "Backpropagation through time (BPTT) is the extension of the backpropagation algorithm used to train recurrent neural networks, in which the recurrent network is unrolled across time steps into an equivalent feedforward network so that gradients of the loss can be computed and propagated backward through every step of the sequence. Because gradients must flow through many time steps, BPTT is prone "
maturity: established
quality: 0.55
is-a:
  - urn:ngm:class:backpropagation
partOf:
  - urn:ngm:class:backpropagation
relatedTo:
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:lstm
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Backpropagation Through Time

Backpropagation through time (BPTT) is the extension of the backpropagation algorithm used to train recurrent neural networks, in which the recurrent network is unrolled across time steps into an equivalent feedforward network so that gradients of the loss can be computed and propagated backward through every step of the sequence. Because gradients must flow through many time steps, BPTT is prone to vanishing and exploding gradients on long sequences, which motivated architectures such as LSTM that mitigate the problem through gating. Truncated BPTT, which limits the number of steps backpropagated, is commonly used in practice to control computational cost on long sequences.
