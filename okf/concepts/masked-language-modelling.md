---
okf_version: "0.2"
type: Class
title: Masked Language Modelling
resource: urn:ngm:class:masked-language-modelling
domain: machine-learning
description: Masked language modelling is a self-supervised pre-training objective in which random tokens of an input sequence are hidden and the model learns to predict them from the surrounding bidirectional context. By conditioning on both left and right context, it produces deep contextual representations of language. It is the objective popularised by BERT and underpins many encoder-based transformer mode
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:pre-training
hasPart:
  - urn:ngm:class:cross-entropy-loss
requires:
  - urn:ngm:class:contextual-embedding
enables:
  - urn:ngm:class:representation-learning
  - urn:ngm:class:fine-tuning
dependsOn:
  - urn:ngm:class:transformer
implements:
  - urn:ngm:class:self-supervised-learning
contrastsWith:
  - urn:ngm:class:next-token-prediction
  - urn:ngm:class:autoregressive-model
bridgesTo:
  - urn:ngm:class:language-model
uses:
  - urn:ngm:class:transformer
  - urn:ngm:class:self-supervised-learning
supports:
  - urn:ngm:class:bert
partOf:
  - urn:ngm:class:pre-training
relatedTo:
  - urn:ngm:class:word-embedding
  - urn:ngm:class:representation-learning
  - urn:ngm:class:loss-function
---

# Masked Language Modelling

Masked language modelling is a self-supervised pre-training objective in which random tokens of an input sequence are hidden and the model learns to predict them from the surrounding bidirectional context. By conditioning on both left and right context, it produces deep contextual representations of language. It is the objective popularised by BERT and underpins many encoder-based transformer models.
