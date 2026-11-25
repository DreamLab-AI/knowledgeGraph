---
okf_version: "0.2"
type: Class
title: Model Scaling
resource: urn:ngm:class:model-scaling
domain: artificial-intelligence
description: Model scaling is the practice of systematically increasing the size of a machine learning model, the volume of training data, and the compute budget to improve performance in line with empirical scaling laws. Predictable power-law relationships link these resources to reductions in loss, guiding decisions about parameter counts and data allocation. Scaling has been a primary driver behind the capa
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:scaling-laws
requires:
  - urn:ngm:class:compute-infrastructure
  - urn:ngm:class:model-training
enables:
  - urn:ngm:class:foundation-model
  - urn:ngm:class:large-language-model
dependsOn:
  - urn:ngm:class:scaling-laws
  - urn:ngm:class:compute-infrastructure
implements:
  - urn:ngm:class:scaling-laws
uses:
  - urn:ngm:class:distributed-training
  - urn:ngm:class:parameter-count
supports:
  - urn:ngm:class:foundation-model
partOf:
  - urn:ngm:class:scaling-laws
relatedTo:
  - urn:ngm:class:transformer
  - urn:ngm:class:deep-learning
  - urn:ngm:class:parameter-count
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Model Scaling

Model scaling is the practice of systematically increasing the size of a machine learning model, the volume of training data, and the compute budget to improve performance in line with empirical scaling laws. Predictable power-law relationships link these resources to reductions in loss, guiding decisions about parameter counts and data allocation. Scaling has been a primary driver behind the capabilities of modern foundation models.
