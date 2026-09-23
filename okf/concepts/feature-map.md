---
okf_version: "0.2"
type: Class
title: Feature Map
resource: urn:ngm:class:feature-map
domain: machine-learning
description: A feature map (or activation map) is the output produced when a convolutional filter is applied across an input in a convolutional neural network, encoding the spatial response of a learned feature. Each channel of a feature map highlights where a particular pattern, such as an edge or texture, occurs in the input. Stacks of feature maps form the intermediate representations that deeper layers com
maturity: established
quality: 0.91
is-a:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:deep-neural-network
hasPart:
  - urn:ngm:class:filter-kernel
  - urn:ngm:class:receptive-field
  - urn:ngm:class:channel
  - urn:ngm:class:spatial-activation
requires:
  - urn:ngm:class:convolution
  - urn:ngm:class:filter-kernel
  - urn:ngm:class:activation-function
  - urn:ngm:class:backpropagation
enables:
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:feature-detection
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:interpretability
  - urn:ngm:class:grad-cam
dependsOn:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:deep-learning
  - urn:ngm:class:loss-function
implements:
  - urn:ngm:class:convolution
  - urn:ngm:class:spatial-hierarchy
  - urn:ngm:class:weight-sharing
contrastsWith:
  - urn:ngm:class:pooling-layer
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:fully-connected-layer
uses:
  - urn:ngm:class:convolution
  - urn:ngm:class:activation-function
  - urn:ngm:class:tensor
  - urn:ngm:class:re-lu-activation
  - urn:ngm:class:batch-normalisation
supports:
  - urn:ngm:class:image-recognition
  - urn:ngm:class:object-detection
  - urn:ngm:class:semantic-segmentation
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:feature-attribution
standardizedBy:
  - urn:ngm:class:iso-iec-22989-2022
  - urn:ngm:class:nist-ai-100-3
partOf:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:feature-pyramid-network
relatedTo:
  - urn:ngm:class:tensor
  - urn:ngm:class:spatial-hierarchy
  - urn:ngm:class:feature-pyramid-network
  - urn:ngm:class:grad-cam
  - urn:ngm:class:receptive-field
  - urn:ngm:class:residual-connection
---

# Feature Map

A feature map (or activation map) is the output produced when a convolutional filter is applied across an input in a convolutional neural network, encoding the spatial response of a learned feature. Each channel of a feature map highlights where a particular pattern, such as an edge or texture, occurs in the input. Stacks of feature maps form the intermediate representations that deeper layers compose into higher-level concepts.
