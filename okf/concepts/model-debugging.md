---
okf_version: "0.2"
type: Class
title: Model Debugging
resource: urn:ngm:class:model-debugging
domain: artificial-intelligence
description: Model debugging is the systematic process of diagnosing, isolating and correcting faults in the behaviour of a machine-learning model, such as poor accuracy, biased predictions, brittleness to distribution shift, or unexpected outputs on specific inputs. Unlike conventional software debugging, it must reason about statistical behaviour, training data, feature representations and learned parameters
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:ai-infrastructure
requires:
  - urn:ngm:class:error-analysis
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:model-monitoring
enables:
  - urn:ngm:class:model-validation
  - urn:ngm:class:model-quality
dependsOn:
  - urn:ngm:class:data-quality
  - urn:ngm:class:data-drift
contrastsWith:
  - urn:ngm:class:debugging
  - urn:ngm:class:debugging
uses:
  - urn:ngm:class:explainable-ai
  - urn:ngm:class:model-interpretability
  - urn:ngm:class:root-cause-analysis
  - urn:ngm:class:audit-logging
supports:
  - urn:ngm:class:machine-learning-model
  - urn:ngm:class:mlops
  - urn:ngm:class:machine-learning-model
partOf:
  - urn:ngm:class:machine-learning-operations
relatedTo:
  - urn:ngm:class:observability
  - urn:ngm:class:testing
---

# Model Debugging

Model debugging is the systematic process of diagnosing, isolating and correcting faults in the behaviour of a machine-learning model, such as poor accuracy, biased predictions, brittleness to distribution shift, or unexpected outputs on specific inputs. Unlike conventional software debugging, it must reason about statistical behaviour, training data, feature representations and learned parameters rather than deterministic control flow. Practitioners combine error analysis, interpretability tooling, slice-based evaluation and counterfactual probing to trace failures back to data, model architecture or the training procedure.
