---
okf_version: "0.2"
type: Class
title: Inception v3
resource: urn:ngm:class:inception-v3
domain: artificial-intelligence
description: "Inception v3 is a convolutional neural network architecture from Google that refined the earlier Inception design with factorised convolutions, auxiliary classifiers, and label smoothing to improve accuracy and reduce computational cost on image classification tasks. It replaces large convolutional filters with sequences of smaller asymmetric convolutions, cutting parameter count while preserving "
maturity: established
quality: 0
is-a:
  - urn:ngm:class:convolutional-neural-network
---

# Inception v3

Inception v3 is a convolutional neural network architecture from Google that refined the earlier Inception design with factorised convolutions, auxiliary classifiers, and label smoothing to improve accuracy and reduce computational cost on image classification tasks. It replaces large convolutional filters with sequences of smaller asymmetric convolutions, cutting parameter count while preserving representational capacity. Pretrained on ImageNet, its penultimate-layer activations are the standard feature extractor used to compute the Fréchet Inception Distance and Inception Score for evaluating generative image models. It remains a common baseline and building block in computer vision pipelines despite the emergence of newer architectures.
