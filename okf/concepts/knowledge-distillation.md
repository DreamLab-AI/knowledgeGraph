---
okf_version: "0.2"
type: Class
title: Knowledge Distillation
resource: urn:ngm:class:knowledge-distillation
domain: machine-learning
description: A model compression technique where a smaller "student" model is trained to mimic the behaviour of a larger "teacher" model, transferring knowledge through soft targets. The student learns from the teacher's output probability distributions (soft targets) rather than ground-truth hard labels, enabling competitive performance at a fraction of the computational cost.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:teacher-student-training
requires:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:training-data
  - urn:ngm:class:neural-network
enables:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:model-compression-for-edge
  - urn:ngm:class:on-device-inference
  - urn:ngm:class:ai-inference
contrastsWith:
  - urn:ngm:class:parameter-efficient-fine-tuning
  - urn:ngm:class:model-pruning
  - urn:ngm:class:quantisation
bridgesTo:
  - urn:ngm:class:federated-learning
uses:
  - urn:ngm:class:kullback-leibler-divergence
  - urn:ngm:class:cross-entropy-loss
partOf:
  - urn:ngm:class:model-compression
  - urn:ngm:class:neural-network
relatedTo:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:distilbert
  - urn:ngm:class:reinforcement-learning-from-human-feedback
---

# Knowledge Distillation

A model compression technique where a smaller "student" model is trained to mimic the behaviour of a larger "teacher" model, transferring knowledge through soft targets. The student learns from the teacher's output probability distributions (soft targets) rather than ground-truth hard labels, enabling competitive performance at a fraction of the computational cost.
