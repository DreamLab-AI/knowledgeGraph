---
okf_version: "0.2"
type: Class
title: Softmax Function
resource: urn:ngm:class:softmax-function
domain: machine-learning
description: The softmax function is a normalising transformation that maps a vector of real-valued scores (logits) into a probability distribution, where each output lies in the open interval (0, 1) and the outputs sum to one. It exponentiates each input and divides by the sum of all exponentials, amplifying larger scores while preserving rank order. Softmax is ubiquitous in machine learning as the final laye
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:activation-function
hasPart:
  - urn:ngm:class:cross-entropy-loss
requires:
  - urn:ngm:class:activation-function
enables:
  - urn:ngm:class:classification
  - urn:ngm:class:attention-mechanism
dependsOn:
  - urn:ngm:class:neural-network
implements:
  - urn:ngm:class:cross-entropy-loss
bridgesTo:
  - urn:ngm:class:transformer
uses:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:backpropagation
supports:
  - urn:ngm:class:transformer
relatedTo:
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:deep-learning
  - urn:ngm:class:classification
---

# Softmax Function

The softmax function is a normalising transformation that maps a vector of real-valued scores (logits) into a probability distribution, where each output lies in the open interval (0, 1) and the outputs sum to one. It exponentiates each input and divides by the sum of all exponentials, amplifying larger scores while preserving rank order. Softmax is ubiquitous in machine learning as the final layer of multi-class classifiers and as the normalisation step inside attention mechanisms, and it pairs naturally with the cross-entropy loss whose gradient simplifies to the difference between predicted and target distributions.
