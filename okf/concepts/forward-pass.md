---
okf_version: "0.2"
type: Class
title: Forward Pass
resource: urn:ngm:class:forward-pass
domain: machine-learning
description: The forward pass is the computation that propagates input data through the layers of a neural network to produce an output, applying weighted sums, biases and activation functions in sequence. It evaluates the network's current function and, during training, produces the predictions against which the loss is measured. The intermediate activations it computes are retained so that the subsequent bac
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:neural-network
hasPart:
  - urn:ngm:class:activation-function
  - urn:ngm:class:matrix-multiplication
requires:
  - urn:ngm:class:parameter
  - urn:ngm:class:activation-function
enables:
  - urn:ngm:class:inference
  - urn:ngm:class:model-inference
dependsOn:
  - urn:ngm:class:deep-learning
contrastsWith:
  - urn:ngm:class:backpropagation
uses:
  - urn:ngm:class:matrix-multiplication
  - urn:ngm:class:gpu-acceleration
supports:
  - urn:ngm:class:loss-function
partOf:
  - urn:ngm:class:neural-network
  - urn:ngm:class:training
relatedTo:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:batch-processing
---

# Forward Pass

The forward pass is the computation that propagates input data through the layers of a neural network to produce an output, applying weighted sums, biases and activation functions in sequence. It evaluates the network's current function and, during training, produces the predictions against which the loss is measured. The intermediate activations it computes are retained so that the subsequent backward pass can calculate gradients.
