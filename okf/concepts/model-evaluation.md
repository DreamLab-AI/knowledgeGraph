---
okf_version: "0.2"
type: Class
title: Model Evaluation
resource: urn:ngm:class:model-evaluation
domain: ai
description: Model Evaluation is the systematic process of measuring the performance, reliability, safety, and fitness-for-purpose of machine learning models against defined metrics, held-out datasets, and behavioural benchmarks. It spans quantitative metric computation (accuracy, F1, perplexity, BLEU, AUC-ROC), qualitative red-teaming and adversarial probing, and comparative benchmarking across standardised t
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:ai-technique
requires:
  - urn:ngm:class:labelled-data
  - urn:ngm:class:ground-truth-labels
  - urn:ngm:class:empirical-experimental-design-tracking
  - urn:ngm:class:ground-truth-labels
enables:
  - urn:ngm:class:model-deployment
  - urn:ngm:class:model-selection
  - urn:ngm:class:safety-evaluation
  - urn:ngm:class:ai-governance
  - urn:ngm:class:ai-safety-evaluation
dependsOn:
  - urn:ngm:class:training-data
  - urn:ngm:class:machine-learning-discipline-pipeline
contrastsWith:
  - urn:ngm:class:model-training
  - urn:ngm:class:overfitting
bridgesTo:
  - urn:ngm:class:ai-regulation
  - urn:ngm:class:audit-and-compliance
uses:
  - urn:ngm:class:evaluation-metric
  - urn:ngm:class:benchmarks
  - urn:ngm:class:cross-validation
  - urn:ngm:class:test-dataset
  - urn:ngm:class:confusion-matrix
  - urn:ngm:class:statistical-hypothesis-testing
supports:
  - urn:ngm:class:responsible-ai
  - urn:ngm:class:mlops
relatedTo:
  - urn:ngm:class:performance-metrics
  - urn:ngm:class:hyperparameter-tuning
  - urn:ngm:class:red-teaming
  - urn:ngm:class:interpretability
  - urn:ngm:class:bias-and-fairness
---

# Model Evaluation

Model Evaluation is the systematic process of measuring the performance, reliability, safety, and fitness-for-purpose of machine learning models against defined metrics, held-out datasets, and behavioural benchmarks. It spans quantitative metric computation (accuracy, F1, perplexity, BLEU, AUC-ROC), qualitative red-teaming and adversarial probing, and comparative benchmarking across standardised test suites. Evaluation drives deployment decisions, informs architectural iteration, and increasingly underpins regulatory conformity assessments demanded by AI governance frameworks. Both static offline evaluation and dynamic online evaluation in live production environments are within scope.
