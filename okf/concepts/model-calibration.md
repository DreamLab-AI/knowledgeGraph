---
okf_version: "0.2"
type: Class
title: Model Calibration
resource: urn:ngm:class:model-calibration
domain: machine-learning
description: Model calibration is the process of ensuring that the probabilities a predictive model outputs reflect the true likelihood of outcomes, so that, for example, events predicted with 70 per cent confidence occur roughly 70 per cent of the time. A well-calibrated model produces reliable confidence estimates, which is essential when predictions inform risk-sensitive decisions. Calibration is assessed w
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:ai-technique
requires:
  - urn:ngm:class:model-evaluation
enables:
  - urn:ngm:class:trustworthy-ai
  - urn:ngm:class:decision-making
dependsOn:
  - urn:ngm:class:probabilistic-model
bridgesTo:
  - urn:ngm:class:uncertainty-quantification
uses:
  - urn:ngm:class:loss-function
supports:
  - urn:ngm:class:model-deployment
  - urn:ngm:class:trustworthy-ai
partOf:
  - urn:ngm:class:model-evaluation
relatedTo:
  - urn:ngm:class:uncertainty-quantification
  - urn:ngm:class:probabilistic-model
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:loss-function
---

# Model Calibration

Model calibration is the process of ensuring that the probabilities a predictive model outputs reflect the true likelihood of outcomes, so that, for example, events predicted with 70 per cent confidence occur roughly 70 per cent of the time. A well-calibrated model produces reliable confidence estimates, which is essential when predictions inform risk-sensitive decisions. Calibration is assessed with reliability diagrams and metrics such as expected calibration error, and corrected with post-hoc techniques that adjust a model's output probabilities without changing its rankings.
