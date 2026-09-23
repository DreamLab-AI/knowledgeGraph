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
---

# Backpropagation Through Time

Backpropagation through time (BPTT) is the extension of the backpropagation algorithm used to train recurrent neural networks, in which the recurrent network is unrolled across time steps into an equivalent feedforward network so that gradients of the loss can be computed and propagated backward through every step of the sequence. Because gradients must flow through many time steps, BPTT is prone to vanishing and exploding gradients on long sequences, which motivated architectures such as LSTM that mitigate the problem through gating. Truncated BPTT, which limits the number of steps backpropagated, is commonly used in practice to control computational cost on long sequences.
