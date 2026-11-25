---
okf_version: "0.2"
type: Class
title: Task Specific Head
resource: urn:ngm:class:task-specific-head
domain: spatial-computing
description: A Task-Specific Head is a shallow neural network module appended to a frozen or fine-tuned pre-trained model to adapt its representations for a particular downstream task. Architecturally it may be a single linear projection for classification, start/end span predictors for question answering, or a lightweight decoder for generation; it is randomly initialised and optimised during fine-tuning whil
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:sc-content-and-assets
requires:
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:transfer-learning
enables:
  - urn:ngm:class:ai-technique
uses:
  - urn:ngm:class:neural-network-layer
  - urn:ngm:class:machine-learning-discipline-model
relatedTo:
  - urn:ngm:class:parameter-efficient-fine-tuning
  - urn:ngm:class:knowledge-distillation
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Task Specific Head

A Task-Specific Head is a shallow neural network module appended to a frozen or fine-tuned pre-trained model to adapt its representations for a particular downstream task. Architecturally it may be a single linear projection for classification, start/end span predictors for question answering, or a lightweight decoder for generation; it is randomly initialised and optimised during fine-tuning whilst the shared base model provides task-agnostic representations.
