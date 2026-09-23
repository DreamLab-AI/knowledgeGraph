---
okf_version: "0.2"
type: Class
title: Next Token Prediction
resource: urn:ngm:class:next-token-prediction
domain: machine-learning
description: "Next token prediction is the autoregressive language-modelling objective in which a model predicts the next token in a sequence given all preceding tokens. Trained by maximising the likelihood of each token conditioned on its left context, it requires no explicit labels and scales to vast text corpora. It is the core pre-training objective behind generative transformer language models such as the "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:pre-training
hasPart:
  - urn:ngm:class:cross-entropy-loss
requires:
  - urn:ngm:class:self-supervised-learning
enables:
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:language-model
dependsOn:
  - urn:ngm:class:transformer
implements:
  - urn:ngm:class:autoregressive-model
contrastsWith:
  - urn:ngm:class:masked-language-modelling
bridgesTo:
  - urn:ngm:class:representation-learning
uses:
  - urn:ngm:class:transformer
  - urn:ngm:class:self-supervised-learning
supports:
  - urn:ngm:class:gpt
partOf:
  - urn:ngm:class:pre-training
relatedTo:
  - urn:ngm:class:language-model
  - urn:ngm:class:representation-learning
  - urn:ngm:class:loss-function
---

# Next Token Prediction

Next token prediction is the autoregressive language-modelling objective in which a model predicts the next token in a sequence given all preceding tokens. Trained by maximising the likelihood of each token conditioned on its left context, it requires no explicit labels and scales to vast text corpora. It is the core pre-training objective behind generative transformer language models such as the GPT family.
