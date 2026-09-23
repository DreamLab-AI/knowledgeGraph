---
okf_version: "0.2"
type: Class
title: Full Fine Tuning
resource: urn:ngm:class:full-fine-tuning
domain: artificial-intelligence
description: A fine-tuning approach that updates all parameters of a pre-trained model during adaptation to a downstream task, requiring approximately four times the model's memory footprint to store weights, gradients, and optimiser states. Full fine-tuning provides maximum task-specific flexibility and sets the performance ceiling against which parameter-efficient alternatives such as LoRA are benchmarked, b
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:fine-tuning
requires:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:transfer-learning
contrastsWith:
  - urn:ngm:class:continued-pre-training
uses:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:deep-learning
relatedTo:
  - urn:ngm:class:overfitting
  - urn:ngm:class:early-stopping
---

# Full Fine Tuning

A fine-tuning approach that updates all parameters of a pre-trained model during adaptation to a downstream task, requiring approximately four times the model's memory footprint to store weights, gradients, and optimiser states. Full fine-tuning provides maximum task-specific flexibility and sets the performance ceiling against which parameter-efficient alternatives such as LoRA are benchmarked, but creates a separate full-sized model copy per task.
