---
okf_version: "0.2"
type: Class
title: Conditional Random Field
resource: urn:ngm:class:conditional-random-field
domain: artificial-intelligence
description: A Conditional Random Field (CRF) is a discriminative probabilistic graphical model used for structured prediction tasks such as sequence labelling, where the model directly estimates the conditional probability P(y|x) of an output label sequence y given an observed input sequence x. CRFs overcome the label bias problem of maximum-entropy Markov models by considering the entire output sequence join
maturity: established
quality: 0
is-a:
  - urn:ngm:class:ai-technique
requires:
  - urn:ngm:class:probabilistic-model
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:feature-extraction
enables:
  - urn:ngm:class:named-entity-recognition
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:speech-recognition
contrastsWith:
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:transformer
  - urn:ngm:class:convolutional-neural-network
uses:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:machine-learning-model
relatedTo:
  - urn:ngm:class:natural-language-understanding
  - urn:ngm:class:named-entity
  - urn:ngm:class:machine-learning-discipline-technique
---

# Conditional Random Field

A Conditional Random Field (CRF) is a discriminative probabilistic graphical model used for structured prediction tasks such as sequence labelling, where the model directly estimates the conditional probability P(y|x) of an output label sequence y given an observed input sequence x. CRFs overcome the label bias problem of maximum-entropy Markov models by considering the entire output sequence jointly, making them effective for named entity recognition, part-of-speech tagging, and image segmentation.
