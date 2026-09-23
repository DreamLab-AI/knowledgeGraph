---
okf_version: "0.2"
type: Class
title: Cross-Validation
resource: urn:ngm:class:cross-validation
domain: machine-learning
description: Cross-validation is a statistical resampling technique for evaluating machine learning model performance by partitioning available data into complementary training and validation subsets, training the model on each partition in turn, and averaging the resulting error estimates. It provides a less optimistic and more generalisable estimate of out-of-sample predictive performance than a single train
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:ai-technique
  - urn:ngm:class:statistical-learning-theory
  - urn:ngm:class:resampling
hasPart:
  - urn:ngm:class:sampling
  - urn:ngm:class:k-fold
  - urn:ngm:class:leave-one-out
  - urn:ngm:class:nested-cv
  - urn:ngm:class:bias-variance-tradeoff
  - urn:ngm:class:hyperparameter-tuning
  - urn:ngm:class:feature-selection
  - urn:ngm:class:model-selection
requires:
  - urn:ngm:class:labelled-dataset
  - urn:ngm:class:resampling
  - urn:ngm:class:performance-metrics
  - urn:ngm:class:annotated-training-data
  - urn:ngm:class:performance-metrics
  - urn:ngm:class:loss-function
enables:
  - urn:ngm:class:hyperparameter-tuning
  - urn:ngm:class:bias-variance-tradeoff
  - urn:ngm:class:model-comparison
  - urn:ngm:class:feature-selection
  - urn:ngm:class:model-selection
  - urn:ngm:class:overfitting
  - urn:ngm:class:generalisation-error
  - urn:ngm:class:auto-ml
dependsOn:
  - urn:ngm:class:statistical-estimation
  - urn:ngm:class:statistical-learning-theory
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:ai-machine-learning
implements:
  - urn:ngm:class:statistical-inference
  - urn:ngm:class:resampling
contrastsWith:
  - urn:ngm:class:annotated-training-data
  - urn:ngm:class:holdout-validation
  - urn:ngm:class:benign-overfitting
bridgesTo:
  - urn:ngm:class:statistical-inference
  - urn:ngm:class:data-governance
uses:
  - urn:ngm:class:performance-metrics
  - urn:ngm:class:loss-function
  - urn:ngm:class:performance-metrics
  - urn:ngm:class:random-forest
  - urn:ngm:class:boosting
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:decision-tree
  - urn:ngm:class:support-vector-machine
supports:
  - urn:ngm:class:applied-machine-learning
  - urn:ngm:class:model-comparison
  - urn:ngm:class:overfitting-prevention
  - urn:ngm:class:auto-ml
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:ensemble-methods
  - urn:ngm:class:regularisation
  - urn:ngm:class:bias-variance-tradeoff
partOf:
  - urn:ngm:class:model-selection
  - urn:ngm:class:applied-machine-learning
relatedTo:
  - urn:ngm:class:benign-overfitting
  - urn:ngm:class:regularisation
  - urn:ngm:class:ensemble-methods
  - urn:ngm:class:data-augmentation
  - urn:ngm:class:bayesian-optimisation
  - urn:ngm:class:auto-ml
  - urn:ngm:class:deep-learning
---

# Cross-Validation

Cross-validation is a statistical resampling technique for evaluating machine learning model performance by partitioning available data into complementary training and validation subsets, training the model on each partition in turn, and averaging the resulting error estimates. It provides a less optimistic and more generalisable estimate of out-of-sample predictive performance than a single train–test split.
