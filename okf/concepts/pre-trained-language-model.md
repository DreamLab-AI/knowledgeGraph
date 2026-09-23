---
okf_version: "0.2"
type: Class
title: Pre Trained Language Model
resource: urn:ngm:class:pre-trained-language-model
domain: machine-learning
description: A pre-trained language model is a neural language model that has first been trained on a large, general corpus using self-supervised objectives such as masked or next-token prediction, then reused as a foundation for many downstream tasks. By learning broadly transferable linguistic and world knowledge during pre-training, it can be adapted with comparatively little task-specific data through fine
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:language-model
  - urn:ngm:class:ai-model-architecture
hasPart:
  - urn:ngm:class:transformer
requires:
  - urn:ngm:class:self-supervised-learning
  - urn:ngm:class:deep-learning
enables:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:natural-language-processing
dependsOn:
  - urn:ngm:class:transfer-learning
implements:
  - urn:ngm:class:bert
  - urn:ngm:class:gpt
  - urn:ngm:class:ro-berta
uses:
  - urn:ngm:class:transformer
  - urn:ngm:class:self-supervised-learning
  - urn:ngm:class:neural-network
partOf:
  - urn:ngm:class:language-model
relatedTo:
  - urn:ngm:class:foundation-model
  - urn:ngm:class:pretrained-model
---

# Pre Trained Language Model

A pre-trained language model is a neural language model that has first been trained on a large, general corpus using self-supervised objectives such as masked or next-token prediction, then reused as a foundation for many downstream tasks. By learning broadly transferable linguistic and world knowledge during pre-training, it can be adapted with comparatively little task-specific data through fine-tuning, prompting, or instruction tuning. This pre-train-then-adapt paradigm, exemplified by BERT and the GPT family, is the foundation of modern natural language processing.
