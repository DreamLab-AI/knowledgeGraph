---
okf_version: "0.2"
type: Class
title: Multilayer Perceptron
resource: urn:ngm:class:multilayer-perceptron
domain: machine-learning
description: A multilayer perceptron (MLP) is a feedforward neural network composed of an input layer, one or more hidden layers of fully connected neurons with nonlinear activations, and an output layer, trained by backpropagation. It is a canonical universal function approximator underlying deeper architectures, and is frequently used as a lightweight decoder or coordinate-based function in implicit neural r
maturity: mature
quality: 0.55
is-a:
  - urn:ngm:class:neural-network
enables:
  - urn:ngm:class:implicit-neural-representation
  - urn:ngm:class:ne-rf
partOf:
  - urn:ngm:class:neural-network
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Multilayer Perceptron

A multilayer perceptron (MLP) is a feedforward neural network composed of an input layer, one or more hidden layers of fully connected neurons with nonlinear activations, and an output layer, trained by backpropagation. It is a canonical universal function approximator underlying deeper architectures, and is frequently used as a lightweight decoder or coordinate-based function in implicit neural representations. NeRF and related implicit neural representation methods use an MLP to map spatial coordinates directly to colour and density values.
