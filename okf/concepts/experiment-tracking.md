---
okf_version: "0.2"
type: Class
title: ML Experiment Tracking
resource: urn:ngm:class:experiment-tracking
domain: machine-learning
description: The systematic recording of every machine-learning training run — hyperparameters, code version, dataset version, environment, metrics, and resulting artefacts — in a queryable store, so that results can be compared across runs, reproduced exactly, and promoted to production with a complete audit trail linking a deployed model back to the precise conditions that produced it.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:mlops
enables:
  - urn:ngm:class:reproducibility
  - urn:ngm:class:hyperparameter-tuning
uses:
  - urn:ngm:class:data-versioning
  - urn:ngm:class:version-control
partOf:
  - urn:ngm:class:ai-model-development
relatedTo:
  - urn:ngm:class:mlflow
  - urn:ngm:class:weights-and-biases
  - urn:ngm:class:dvc
  - urn:ngm:class:model-registry
---

# ML Experiment Tracking

The systematic recording of every machine-learning training run — hyperparameters, code version, dataset version, environment, metrics, and resulting artefacts — in a queryable store, so that results can be compared across runs, reproduced exactly, and promoted to production with a complete audit trail linking a deployed model back to the precise conditions that produced it.
