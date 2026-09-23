---
okf_version: "0.2"
type: Class
title: Model Checkpoint
resource: urn:ngm:class:model-checkpoint
domain: ai
description: A model checkpoint is a serialised snapshot of a machine learning model's learned parameters (weights), often including optimiser state, captured at a point during or after training. Checkpoints allow training to resume after interruption, enable model sharing and deployment, and support evaluation of intermediate states. They are typically stored in formats such as safetensors, PyTorch .pt, or fr
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:ai-infrastructure
relatedTo:
  - urn:ngm:class:safetensors
  - urn:ngm:class:node-based-diffusion-pipeline-interface-workflows
---

# Model Checkpoint

A model checkpoint is a serialised snapshot of a machine learning model's learned parameters (weights), often including optimiser state, captured at a point during or after training. Checkpoints allow training to resume after interruption, enable model sharing and deployment, and support evaluation of intermediate states. They are typically stored in formats such as safetensors, PyTorch .pt, or framework-native files.
