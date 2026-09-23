---
okf_version: "0.2"
type: Class
title: Transfer Learning
resource: urn:ngm:class:transfer-learning
domain: machine-learning
description: "Transfer learning is a machine learning paradigm in which knowledge encoded in a model trained on a source task or domain is systematically reused to improve learning efficiency and performance on a different but related target task or domain. By exploiting shared representations — such as low-level feature detectors, syntactic structures, or visual hierarchies — the technique drastically reduces "
maturity: mature
quality: 0.76
is-a:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:deep-learning
hasPart:
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:domain-adaptation
  - urn:ngm:class:adapter-modules
  - urn:ngm:class:prompt-tuning
  - urn:ngm:class:adapter-modules
requires:
  - urn:ngm:class:pre-trained-model
  - urn:ngm:class:feature-representation
enables:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:few-shot-learning
  - urn:ngm:class:zero-shot-learning
  - urn:ngm:class:foundation-model
  - urn:ngm:class:foundation-model
dependsOn:
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:representation-learning
contrastsWith:
  - urn:ngm:class:training-from-scratch
  - urn:ngm:class:multitask-learning
bridgesTo:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:computer-vision
  - urn:ngm:class:robotics
uses:
  - urn:ngm:class:neural-network
  - urn:ngm:class:deep-learning
  - urn:ngm:class:model-training
  - urn:ngm:class:backpropagation
relatedTo:
  - urn:ngm:class:meta-learning
  - urn:ngm:class:continual-learning
  - urn:ngm:class:model-compression
---

# Transfer Learning

Transfer learning is a machine learning paradigm in which knowledge encoded in a model trained on a source task or domain is systematically reused to improve learning efficiency and performance on a different but related target task or domain. By exploiting shared representations — such as low-level feature detectors, syntactic structures, or visual hierarchies — the technique drastically reduces the labelled data, compute, and training time required for downstream tasks. It is foundational to modern deep learning practice, underpinning pre-trained large language models, vision transformers, and multi-modal systems that are subsequently adapted via fine-tuning, prompt tuning, or adapter layers. The paradigm bridges the gap between data-rich source domains and data-scarce target settings, enabling deployment in low-resource clinical, scientific, and industrial contexts.
