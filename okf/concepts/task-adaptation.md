---
okf_version: "0.2"
type: Class
title: Task Adaptation
resource: urn:ngm:class:task-adaptation
domain: artificial-intelligence
description: The process of specialising a pre-trained or general-purpose machine learning model to perform well on a specific downstream task by adjusting its parameters, architecture, or inference behaviour. Task adaptation encompasses techniques such as fine-tuning, instruction tuning, prompt engineering, and parameter-efficient methods (LoRA, adapters) that bridge the gap between a model's pre-training dis
maturity: established
quality: 0
is-a:
  - urn:ngm:class:ai-technique
enables:
  - urn:ngm:class:task-specific-head
  - urn:ngm:class:machine-learning-discipline-pipeline
dependsOn:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:machine-learning-discipline-model
  - urn:ngm:class:model-training
contrastsWith:
  - urn:ngm:class:federated-learning
uses:
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:instruction-tuning
  - urn:ngm:class:prompt-engineering
relatedTo:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:hyperparameter
generated: {"by":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Task Adaptation

The process of specialising a pre-trained or general-purpose machine learning model to perform well on a specific downstream task by adjusting its parameters, architecture, or inference behaviour. Task adaptation encompasses techniques such as fine-tuning, instruction tuning, prompt engineering, and parameter-efficient methods (LoRA, adapters) that bridge the gap between a model's pre-training distribution and the requirements of a target application.
