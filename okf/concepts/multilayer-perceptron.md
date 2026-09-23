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
---

# Multilayer Perceptron

A multilayer perceptron (MLP) is a feedforward neural network composed of an input layer, one or more hidden layers of fully connected neurons with nonlinear activations, and an output layer, trained by backpropagation. It is a canonical universal function approximator underlying deeper architectures, and is frequently used as a lightweight decoder or coordinate-based function in implicit neural representations. NeRF and related implicit neural representation methods use an MLP to map spatial coordinates directly to colour and density values.
