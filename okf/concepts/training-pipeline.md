---
okf_version: "0.2"
type: Class
title: Training Pipeline
resource: urn:ngm:class:training-pipeline
domain: machine-learning
description: "The orchestrated, repeatable sequence of stages that turns raw data into a trained machine-learning model: ingestion and validation, preprocessing and augmentation, batching, the optimisation loop itself, evaluation against held-out data, and registration of versioned artefacts. Treating training as a pipeline rather than a script makes runs reproducible, resumable, and automatable, and is the pre"
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:data-pipeline
hasPart:
  - urn:ngm:class:data-augmentation
  - urn:ngm:class:hyperparameter-tuning
enables:
  - urn:ngm:class:model-deployment
uses:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:distributed-training
partOf:
  - urn:ngm:class:mlops
relatedTo:
  - urn:ngm:class:neural-network-training
  - urn:ngm:class:model-training
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Training Pipeline

The orchestrated, repeatable sequence of stages that turns raw data into a trained machine-learning model: ingestion and validation, preprocessing and augmentation, batching, the optimisation loop itself, evaluation against held-out data, and registration of versioned artefacts. Treating training as a pipeline rather than a script makes runs reproducible, resumable, and automatable, and is the precondition for continuous retraining and reliable model deployment within MLOps practice.
