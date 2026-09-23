---
okf_version: "0.2"
type: Class
title: Conformal Prediction
resource: urn:ngm:class:conformal-prediction
domain: ai
description: Conformal prediction is a distribution-free, model-agnostic framework for producing statistically valid prediction sets or intervals that are guaranteed to contain the true outcome with a user-specified probability, using only the mild assumption of exchangeability over the data. A held-out calibration set and a nonconformity score function are sufficient to construct finite-sample marginal covera
maturity: emerging
quality: 0.9
is-a:
  - urn:ngm:class:machine-learning-discipline-technique
  - urn:ngm:class:uncertainty-quantification
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:statistical-learning-theory
hasPart:
  - urn:ngm:class:nonconformity-score
  - urn:ngm:class:calibration-set
  - urn:ngm:class:prediction-interval
  - urn:ngm:class:coverage-guarantee
  - urn:ngm:class:calibration
  - urn:ngm:class:exchangeability
  - urn:ngm:class:prediction-set
requires:
  - urn:ngm:class:exchangeability
  - urn:ngm:class:calibration
  - urn:ngm:class:probability-theory
  - urn:ngm:class:cross-validation
enables:
  - urn:ngm:class:trustworthy-ai
  - urn:ngm:class:risk-assessment
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:selective-prediction
  - urn:ngm:class:ai-safety
  - urn:ngm:class:federated-learning
dependsOn:
  - urn:ngm:class:statistical-learning-theory
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:loss-function
  - urn:ngm:class:deep-learning
implements:
  - urn:ngm:class:frequentist-statistics
  - urn:ngm:class:hypothesis-testing
  - urn:ngm:class:online-learning
contrastsWith:
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:gaussian-process
  - urn:ngm:class:bayesian-deep-learning
  - urn:ngm:class:model-calibration
  - urn:ngm:class:semantic-entropy
uses:
  - urn:ngm:class:neural-network
  - urn:ngm:class:deep-learning
  - urn:ngm:class:gaussian-process
  - urn:ngm:class:ensemble-methods
  - urn:ngm:class:monte-carlo-methods
  - urn:ngm:class:foundation-model
  - urn:ngm:class:variational-inference
  - urn:ngm:class:mc-dropout
supports:
  - urn:ngm:class:medical-imaging
  - urn:ngm:class:drug-discovery
  - urn:ngm:class:autonomous-system
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:autonomous-system
  - urn:ngm:class:computer-vision
  - urn:ngm:class:time-series-forecasting
  - urn:ngm:class:multi-label-classification
  - urn:ngm:class:object-detection
  - urn:ngm:class:reinforcement-learning
standardizedBy:
  - urn:ngm:class:eu-ai-act-regulatory-instrument
relatedTo:
  - urn:ngm:class:probabilistic-model
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:bayesian-deep-learning
  - urn:ngm:class:ensemble-methods
  - urn:ngm:class:model-calibration
  - urn:ngm:class:active-learning
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:distribution-shift
  - urn:ngm:class:cross-validation
  - urn:ngm:class:fairness-in-machine-learning
  - urn:ngm:class:interpretability
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:image-segmentation
  - urn:ngm:class:natural-language-inference
  - urn:ngm:class:logistic-regression
  - urn:ngm:class:bayesian-optimisation
---

# Conformal Prediction

Conformal prediction is a distribution-free, model-agnostic framework for producing statistically valid prediction sets or intervals that are guaranteed to contain the true outcome with a user-specified probability, using only the mild assumption of exchangeability over the data. A held-out calibration set and a nonconformity score function are sufficient to construct finite-sample marginal coverage guarantees for any base predictor — ranging from linear models and neural networks to Gaussian processes and large language models. The framework unifies classification (prediction sets), regression (prediction intervals), and sequence generation (conformal risk control), and has become a cornerstone method for trustworthy AI deployment in safety-critical and regulated domains.
