---
okf_version: "0.2"
type: Class
title: Evaluation Metric
resource: urn:ngm:class:evaluation-metric
domain: ai
description: An evaluation metric is a quantitative or qualitative measure used to assess the performance, quality, or behaviour of a machine learning model, algorithm, or system against a defined objective. Metrics are computed over held-out test data or through human judgement protocols and provide the empirical basis for model comparison, selection, and deployment decisions. The choice of metric directly sh
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:performance-metrics
  - urn:ngm:class:ai-research-area
  - urn:ngm:class:measurement-theory
hasPart:
  - urn:ngm:class:accuracy
  - urn:ngm:class:precision
  - urn:ngm:class:recall
  - urn:ngm:class:f1-score
  - urn:ngm:class:loss-function
  - urn:ngm:class:auc-roc
  - urn:ngm:class:fairness-metrics
  - urn:ngm:class:calibration
  - urn:ngm:class:bertscore
  - urn:ngm:class:bleu-score
  - urn:ngm:class:rouge
  - urn:ngm:class:perplexity-ai-search-platform
  - urn:ngm:class:frechet-inception-distance
requires:
  - urn:ngm:class:ground-truth-labels
  - urn:ngm:class:test-dataset
  - urn:ngm:class:evaluation-harness
  - urn:ngm:class:ground-truth-labels
  - urn:ngm:class:evaluation-harness
  - urn:ngm:class:annotation-schema
enables:
  - urn:ngm:class:model-comparison
  - urn:ngm:class:hyperparameter-tuning
  - urn:ngm:class:model-selection
  - urn:ngm:class:benchmark-standard
  - urn:ngm:class:leaderboard
  - urn:ngm:class:production-monitoring
dependsOn:
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:held-out-data
  - urn:ngm:class:statistical-testing
implements:
  - urn:ngm:class:reproducibility
  - urn:ngm:class:empirical-evaluation
contrastsWith:
  - urn:ngm:class:loss-function
  - urn:ngm:class:objective-function
  - urn:ngm:class:training-signal
bridgesTo:
  - urn:ngm:class:ai-regulation
  - urn:ngm:class:data-governance
  - urn:ngm:class:ai-ethics
uses:
  - urn:ngm:class:confusion-matrix
  - urn:ngm:class:roc-curve
  - urn:ngm:class:inter-annotator-agreement
  - urn:ngm:class:statistical-hypothesis-testing
supports:
  - urn:ngm:class:model-training
  - urn:ngm:class:ai-safety
  - urn:ngm:class:ai-governance
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:responsible-ai
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:ai-model-card
standardizedBy:
  - urn:ngm:class:iso-iec-22989-2022
  - urn:ngm:class:nist-ai-rmf
  - urn:ngm:class:eu-ai-act-regulatory-instrument
  - urn:ngm:class:mlcommons
relatedTo:
  - urn:ngm:class:model-performance
  - urn:ngm:class:benchmark-standard
  - urn:ngm:class:model-evaluation-results
  - urn:ngm:class:goodharts-law
  - urn:ngm:class:calibration
  - urn:ngm:class:ai-model-card
  - urn:ngm:class:goodhart-s-law
  - urn:ngm:class:ai-model-card
  - urn:ngm:class:data-drift
  - urn:ngm:class:distributional-shift
---

# Evaluation Metric

An evaluation metric is a quantitative or qualitative measure used to assess the performance, quality, or behaviour of a machine learning model, algorithm, or system against a defined objective. Metrics are computed over held-out test data or through human judgement protocols and provide the empirical basis for model comparison, selection, and deployment decisions. The choice of metric directly shapes what properties a model optimises for during training and what trade-offs are made between competing objectives such as accuracy, fairness, and calibration. Metric selection is therefore a first-class design decision whose consequences cascade from training dynamics through to safety, governance, and societal impact.
