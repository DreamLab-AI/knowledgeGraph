---
okf_version: "0.2"
type: Class
title: Labelled Dataset
resource: urn:ngm:class:labelled-dataset
domain: machine-learning
description: A labelled dataset is a collection of data examples each paired with one or more target annotations that specify the correct output for a learning task. The labels constitute the supervisory signal that allows a model to learn the mapping from inputs to outputs during training. Label quality, coverage and balance strongly determine the performance and fairness of the resulting model.
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:training-data
hasPart:
  - urn:ngm:class:data-annotation
requires:
  - urn:ngm:class:data-annotation
  - urn:ngm:class:data-preprocessing
enables:
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:model-training
dependsOn:
  - urn:ngm:class:data-quality
uses:
  - urn:ngm:class:machine-learning
supports:
  - urn:ngm:class:classification
  - urn:ngm:class:model-evaluation
partOf:
  - urn:ngm:class:training-data
relatedTo:
  - urn:ngm:class:feature-engineering
  - urn:ngm:class:support-vector-machine
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Labelled Dataset

A labelled dataset is a collection of data examples each paired with one or more target annotations that specify the correct output for a learning task. The labels constitute the supervisory signal that allows a model to learn the mapping from inputs to outputs during training. Label quality, coverage and balance strongly determine the performance and fairness of the resulting model.
