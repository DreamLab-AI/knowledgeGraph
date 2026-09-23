---
okf_version: "0.2"
type: Class
title: RoBERTa
resource: urn:ngm:class:ro-berta
domain: machine-learning
description: RoBERTa (Robustly Optimised BERT Pretraining Approach) is a transformer-based language model that refines BERT by removing the next-sentence-prediction objective, adopting dynamic masking, training on substantially larger corpora (160 GB vs 16 GB), and using larger batch sizes. These training-procedure improvements yield consistent performance gains on NLP benchmarks without altering the underlyin
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:ai-model-architecture
requires:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:language-modeling
  - urn:ngm:class:masked-language-modelling
  - urn:ngm:class:large-scale-corpus
enables:
  - urn:ngm:class:sentiment-analysis
  - urn:ngm:class:named-entity-recognition
  - urn:ngm:class:question-answering
  - urn:ngm:class:text-classification
dependsOn:
  - urn:ngm:class:bert
  - urn:ngm:class:attention-mechanism
implements:
  - urn:ngm:class:self-supervised-learning
  - urn:ngm:class:pretraining
contrastsWith:
  - urn:ngm:class:albert
  - urn:ngm:class:xlnet
  - urn:ngm:class:distilbert
bridgesTo:
  - urn:ngm:class:artificial-intelligence
uses:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:byte-pair-encoding
supports:
  - urn:ngm:class:glue-benchmark
  - urn:ngm:class:natural-language-processing
relatedTo:
  - urn:ngm:class:pre-trained-language-model
---

# RoBERTa

RoBERTa (Robustly Optimised BERT Pretraining Approach) is a transformer-based language model that refines BERT by removing the next-sentence-prediction objective, adopting dynamic masking, training on substantially larger corpora (160 GB vs 16 GB), and using larger batch sizes. These training-procedure improvements yield consistent performance gains on NLP benchmarks without altering the underlying transformer encoder architecture.
