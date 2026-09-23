---
okf_version: "0.2"
type: Class
title: Feed Forward Network
resource: urn:ngm:class:feed-forward-network
domain: artificial-intelligence
description: A feed-forward network (FFN) is a class of artificial neural network in which information propagates strictly in one direction — from input nodes through one or more hidden layers to output nodes — with no feedback cycles, recurrent connections, or lateral synapses between units at the same layer.
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:ai-model-architecture
  - urn:ngm:class:neural-network
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:deep-learning
  - urn:ngm:class:parametric-model
  - urn:ngm:class:differentiable-programming
hasPart:
  - urn:ngm:class:bias-vector
  - urn:ngm:class:hidden-layer
  - urn:ngm:class:weight-matrix
  - urn:ngm:class:activation-function
  - urn:ngm:class:backpropagation
  - urn:ngm:class:loss-function
  - urn:ngm:class:input-layer
  - urn:ngm:class:output-layer
requires:
  - urn:ngm:class:automatic-differentiation
  - urn:ngm:class:hyperparameter-tuning
  - urn:ngm:class:weight-initialisation
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:training-data
enables:
  - urn:ngm:class:feature-learning
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:universal-approximation
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:pattern-recognition
dependsOn:
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:calculus
  - urn:ngm:class:information-theory
  - urn:ngm:class:probability-theory
  - urn:ngm:class:optimisation-theory
implements:
  - urn:ngm:class:multilayer-perceptron
  - urn:ngm:class:swi-glu
  - urn:ngm:class:mixture-of-experts-architecture
  - urn:ngm:class:residual-connection
  - urn:ngm:class:multilayer-perceptron
  - urn:ngm:class:position-wise-ffn
contrastsWith:
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:graph-neural-network
  - urn:ngm:class:state-space-model
uses:
  - urn:ngm:class:re-lu-activation
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:dropout
  - urn:ngm:class:layer-normalisation
  - urn:ngm:class:re-lu-activation
  - urn:ngm:class:gelu
supports:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:generative-ai
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:speech-recognition
standardizedBy:
  - urn:ngm:class:iclr
  - urn:ngm:class:icml
  - urn:ngm:class:ieee
  - urn:ngm:class:neur-ips
relatedTo:
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:large-language-models
  - urn:ngm:class:variational-autoencoders
  - urn:ngm:class:autoencoder
  - urn:ngm:class:transformer
  - urn:ngm:class:large-language-model
  - urn:ngm:class:vae
---

# Feed Forward Network

A feed-forward network (FFN) is a class of artificial neural network in which information propagates strictly in one direction — from input nodes through one or more hidden layers to output nodes — with no feedback cycles, recurrent connections, or lateral synapses between units at the same layer.
