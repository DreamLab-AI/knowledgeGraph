---
okf_version: "0.2"
type: Class
title: Self-Supervised Learning
resource: urn:ngm:class:self-supervised-learning
domain: machine-learning
description: Self-Supervised Learning (SSL) is a machine learning paradigm in which a model learns rich representations of data by solving pretext tasks whose supervisory signal is derived automatically from the input data itself, requiring no human-provided labels. The model learns to predict masked or hidden portions of an input, to match different views of the same data, or to distinguish positive from nega
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:machine-learning-discipline-technique
hasPart:
  - urn:ngm:class:masked-language-modelling
  - urn:ngm:class:contrastive-learning
  - urn:ngm:class:masked-image-modelling
enables:
  - urn:ngm:class:large-scale-pretrained-foundation-model
  - urn:ngm:class:parameter-efficient-fine-tuning
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:zero-shot-learning
dependsOn:
  - urn:ngm:class:neural-network
  - urn:ngm:class:data-augmentation
contrastsWith:
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:unsupervised-learning
bridgesTo:
  - urn:ngm:class:robotics-perception
  - urn:ngm:class:spatial-ai
uses:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:pretrained-model
  - urn:ngm:class:encoder-decoder-architecture
supports:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:computer-vision
partOf:
  - urn:ngm:class:representation-learning
relatedTo:
  - urn:ngm:class:semi-supervised-learning
  - urn:ngm:class:generative-adversarial-network
  - urn:ngm:class:multimodal-ai-architecture-learning
---

# Self-Supervised Learning

Self-Supervised Learning (SSL) is a machine learning paradigm in which a model learns rich representations of data by solving pretext tasks whose supervisory signal is derived automatically from the input data itself, requiring no human-provided labels. The model learns to predict masked or hidden portions of an input, to match different views of the same data, or to distinguish positive from negative data pairs, developing features that transfer effectively to downstream supervised tasks with limited labelled data. Self-supervised learning has become the dominant pre-training strategy for large language models, visual foundation models, and multimodal systems, enabling training at scales that would be infeasible with manually annotated datasets.
