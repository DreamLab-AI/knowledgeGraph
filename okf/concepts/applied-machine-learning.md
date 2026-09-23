---
okf_version: "0.2"
type: Class
title: Applied Machine Learning
resource: urn:ngm:class:applied-machine-learning
domain: ai
description: Applied Machine Learning is the deployment-focused discipline of adapting and operationalising machine-learning methods to solve concrete real-world problems under domain constraints of latency, cost, reliability, and compliance. It spans the full lifecycle from problem framing and data acquisition through feature engineering, model selection, rigorous evaluation using cross-validation and holdout
maturity: established
quality: 0.92
is-a:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:ai-research-area
hasPart:
  - urn:ngm:class:feature-engineering
  - urn:ngm:class:model-selection
  - urn:ngm:class:cross-validation
  - urn:ngm:class:mlops
  - urn:ngm:class:data-preprocessing
  - urn:ngm:class:hyperparameter-optimisation
  - urn:ngm:class:feature-selection
  - urn:ngm:class:feature-store
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:data-augmentation
requires:
  - urn:ngm:class:mathematical-foundations
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:loss-function
  - urn:ngm:class:performance-metrics
  - urn:ngm:class:bias-variance-tradeoff
  - urn:ngm:class:applied-mathematics
enables:
  - urn:ngm:class:logistics-optimisation
  - urn:ngm:class:demand-forecasting
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:recommendation-system
  - urn:ngm:class:time-series-analysis
  - urn:ngm:class:computer-vision-domain
  - urn:ngm:class:natural-language-processing
dependsOn:
  - urn:ngm:class:applied-mathematics
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:bias-variance-tradeoff
  - urn:ngm:class:regularisation
  - urn:ngm:class:neural-network
  - urn:ngm:class:ensemble-methods
implements:
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:unsupervised-learning
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:active-learning
contrastsWith:
  - urn:ngm:class:adversarial-machine-learning
  - urn:ngm:class:imbalanced-learning
uses:
  - urn:ngm:class:random-forest
  - urn:ngm:class:boosting
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:bayesian-optimisation
  - urn:ngm:class:auto-ml
supports:
  - urn:ngm:class:explainable-ai
  - urn:ngm:class:fairness-in-machine-learning
  - urn:ngm:class:model-compression
  - urn:ngm:class:federated-learning
standardizedBy:
  - urn:ngm:class:iso-iec-22989-2022
  - urn:ngm:class:nist-ai-standards
relatedTo:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:auto-ml
  - urn:ngm:class:explainable-ai
  - urn:ngm:class:fairness-in-machine-learning
  - urn:ngm:class:federated-learning
  - urn:ngm:class:applied-mathematics
  - urn:ngm:class:mathematical-foundations
---

# Applied Machine Learning

Applied Machine Learning is the deployment-focused discipline of adapting and operationalising machine-learning methods to solve concrete real-world problems under domain constraints of latency, cost, reliability, and compliance. It spans the full lifecycle from problem framing and data acquisition through feature engineering, model selection, rigorous evaluation using cross-validation and holdout sets, and sustained production monitoring via MLOps practices. Unlike theoretical ML research, which focuses on novel algorithmic contributions, Applied ML prioritises practical impact: models must generalise reliably to unseen data, behave predictably under distribution shift, and be maintainable by engineering teams across months or years of operation.
