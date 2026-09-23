---
okf_version: "0.2"
type: Class
title: Large-Scale Pretraining
resource: urn:ngm:class:large-scale-pretraining
domain: artificial-intelligence
description: Large-scale pretraining is the training of a high-capacity neural network on a very large, broad corpus using a self-supervised objective, producing a general-purpose foundation model before any task-specific adaptation. It typically optimises an objective such as next-token prediction over web-scale text or paired multimodal data, learning transferable representations. The resulting model is late
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:neural-network-training
requires:
  - urn:ngm:class:dataset
  - urn:ngm:class:compute-cluster
  - urn:ngm:class:gpu
enables:
  - urn:ngm:class:foundation-model
  - urn:ngm:class:fine-tuning
dependsOn:
  - urn:ngm:class:scaling-laws
  - urn:ngm:class:scaling-laws
implements:
  - urn:ngm:class:neural-network-training
bridgesTo:
  - urn:ngm:class:fine-tuning
uses:
  - urn:ngm:class:self-supervised-learning
  - urn:ngm:class:transformer-architecture
supports:
  - urn:ngm:class:transfer-learning
relatedTo:
  - urn:ngm:class:emergent-capabilities
  - urn:ngm:class:generalisation
---

# Large-Scale Pretraining

Large-scale pretraining is the training of a high-capacity neural network on a very large, broad corpus using a self-supervised objective, producing a general-purpose foundation model before any task-specific adaptation. It typically optimises an objective such as next-token prediction over web-scale text or paired multimodal data, learning transferable representations. The resulting model is later fine-tuned or prompted for downstream tasks.
