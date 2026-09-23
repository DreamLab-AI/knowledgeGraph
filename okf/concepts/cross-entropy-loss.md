---
okf_version: "0.2"
type: Class
title: Cross-Entropy Loss
resource: urn:ngm:class:cross-entropy-loss
domain: ai
description: Cross-entropy loss is a differentiable scalar objective function that measures the dissimilarity between a model's predicted probability distribution and the true label distribution, computed as the negative log-likelihood of the correct class under the model's output. It is the canonical training objective for classification tasks and language modelling, directly optimising the model to assign ma
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:loss-function
  - urn:ngm:class:maximum-likelihood-estimation
hasPart:
  - urn:ngm:class:softmax-function
  - urn:ngm:class:kl-divergence
  - urn:ngm:class:negative-log-likelihood
requires:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:softmax-function
  - urn:ngm:class:neural-network
enables:
  - urn:ngm:class:language-modeling
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:model-training
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:deep-learning
dependsOn:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:activation-function
implements:
  - urn:ngm:class:maximum-likelihood-estimation
  - urn:ngm:class:information-theory
contrastsWith:
  - urn:ngm:class:mean-squared-error
  - urn:ngm:class:contrastive-loss
  - urn:ngm:class:focal-loss
  - urn:ngm:class:hinge-loss
uses:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:softmax-function
  - urn:ngm:class:maximum-likelihood-estimation
supports:
  - urn:ngm:class:transformer
  - urn:ngm:class:large-language-models
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:natural-language-processing
standardizedBy:
  - urn:ngm:class:ieee
  - urn:ngm:class:nist
relatedTo:
  - urn:ngm:class:transformer
  - urn:ngm:class:large-language-models
  - urn:ngm:class:kl-divergence
  - urn:ngm:class:information-theory
  - urn:ngm:class:perplexity-ai-search-platform
  - urn:ngm:class:direct-preference-optimisation
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:label-smoothing
---

# Cross-Entropy Loss

Cross-entropy loss is a differentiable scalar objective function that measures the dissimilarity between a model's predicted probability distribution and the true label distribution, computed as the negative log-likelihood of the correct class under the model's output. It is the canonical training objective for classification tasks and language modelling, directly optimising the model to assign maximum probability mass to correct outputs. Minimising cross-entropy is equivalent to maximising the likelihood of the training data under the model's parameterised distribution.
