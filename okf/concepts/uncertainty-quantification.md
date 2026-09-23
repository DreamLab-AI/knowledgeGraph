---
okf_version: "0.2"
type: Class
title: Uncertainty Quantification
resource: urn:ngm:class:uncertainty-quantification
domain: ai
description: Uncertainty Quantification (UQ) is a discipline concerned with characterising, propagating, and communicating the uncertainties inherent in computational models, predictions, and measurements. It distinguishes between aleatoric uncertainty (irreducible randomness in the data or system) and epistemic uncertainty (reducible uncertainty arising from limited knowledge or data), providing principled me
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:probabilistic-model
enables:
  - urn:ngm:class:trustworthy-ai
  - urn:ngm:class:risk-assessment
  - urn:ngm:class:model-robustness
dependsOn:
  - urn:ngm:class:machine-learning-discipline
contrastsWith:
  - urn:ngm:class:adversarial-robustness
uses:
  - urn:ngm:class:calibration
supports:
  - urn:ngm:class:ai-safety
  - urn:ngm:class:interpretability
  - urn:ngm:class:model-evaluation-results
relatedTo:
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:monte-carlo-methods
  - urn:ngm:class:ensemble-methods
  - urn:ngm:class:probabilistic-model
---

# Uncertainty Quantification

Uncertainty Quantification (UQ) is a discipline concerned with characterising, propagating, and communicating the uncertainties inherent in computational models, predictions, and measurements. It distinguishes between aleatoric uncertainty (irreducible randomness in the data or system) and epistemic uncertainty (reducible uncertainty arising from limited knowledge or data), providing principled methods — including Bayesian inference, Monte Carlo sampling, conformal prediction, and ensemble methods — for producing calibrated probability estimates rather than point predictions. UQ is foundational to trustworthy AI, safety-critical systems engineering, and scientific computing.
