---
okf_version: "0.2"
type: Class
title: Zero Shot Learning
resource: urn:ngm:class:zero-shot-learning
domain: machine-learning
description: Zero-shot learning is a machine-learning setting in which a model performs a task on classes or instances it has never seen during training, generalising from auxiliary information such as semantic attributes, natural-language descriptions or a shared embedding space. Modern instances exploit large pre-trained language and vision-language models that align inputs and labels in a common representat
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:meta-learning
enables:
  - urn:ngm:class:image-classification
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:classification
dependsOn:
  - urn:ngm:class:transfer-learning
contrastsWith:
  - urn:ngm:class:few-shot-learning
  - urn:ngm:class:supervised-learning
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:representation-learning
  - urn:ngm:class:embedding
  - urn:ngm:class:clip
  - urn:ngm:class:large-language-model
supports:
  - urn:ngm:class:domain-adaptation
relatedTo:
  - urn:ngm:class:meta-learning
  - urn:ngm:class:knowledge-transfer
  - urn:ngm:class:representation-learning
---

# Zero Shot Learning

Zero-shot learning is a machine-learning setting in which a model performs a task on classes or instances it has never seen during training, generalising from auxiliary information such as semantic attributes, natural-language descriptions or a shared embedding space. Modern instances exploit large pre-trained language and vision-language models that align inputs and labels in a common representation, enabling prediction by similarity rather than by fitting task-specific examples. It contrasts with few-shot and supervised learning by requiring no labelled examples of the target classes.
