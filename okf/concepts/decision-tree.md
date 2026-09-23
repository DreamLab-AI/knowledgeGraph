---
okf_version: "0.2"
type: Class
title: Decision Tree
resource: urn:ngm:class:decision-tree
domain: machine-learning
description: A decision tree is a supervised learning model that predicts an outcome by recursively partitioning the feature space into regions, represented as a tree of decision nodes and leaf nodes. Each internal node tests a feature against a threshold and routes an instance down a branch, while leaves assign a class label or numeric value. Decision trees are valued for their interpretability and form the b
maturity: established
quality: 0
is-a:
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:ai-technique
  - urn:ngm:class:interpretable-model
  - urn:ngm:class:explainable-ai
  - urn:ngm:class:machine-learning-discipline
hasPart:
  - urn:ngm:class:classification
  - urn:ngm:class:regression
  - urn:ngm:class:pruning
  - urn:ngm:class:feature-importance
  - urn:ngm:class:decision-path
  - urn:ngm:class:gini-coefficient
  - urn:ngm:class:information-gain
requires:
  - urn:ngm:class:training-data
  - urn:ngm:class:evaluation-metric
  - urn:ngm:class:feature-engineering
  - urn:ngm:class:labelled-dataset
  - urn:ngm:class:cross-validation
enables:
  - urn:ngm:class:ensemble-methods
  - urn:ngm:class:random-forest
  - urn:ngm:class:gradient-boosted-trees
  - urn:ngm:class:decision-transparency
  - urn:ngm:class:explainable-ai
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:interpretability
  - urn:ngm:class:feature-importance
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:responsible-ai
dependsOn:
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:training-data
  - urn:ngm:class:gini-coefficient
  - urn:ngm:class:information-gain
  - urn:ngm:class:bias-variance-tradeoff
implements:
  - urn:ngm:class:classification
  - urn:ngm:class:regression
  - urn:ngm:class:interpretability
  - urn:ngm:class:recursive-partitioning
contrastsWith:
  - urn:ngm:class:neural-network
  - urn:ngm:class:support-vector-machine
  - urn:ngm:class:logistic-regression
  - urn:ngm:class:k-nearest-neighbours
  - urn:ngm:class:naive-bayes
  - urn:ngm:class:deep-learning
uses:
  - urn:ngm:class:gini-coefficient
  - urn:ngm:class:information-gain
  - urn:ngm:class:pruning
  - urn:ngm:class:cross-validation
  - urn:ngm:class:hyperparameter-tuning
  - urn:ngm:class:shap
  - urn:ngm:class:confusion-matrix
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:feature-engineering
supports:
  - urn:ngm:class:interpretability
  - urn:ngm:class:explainability
  - urn:ngm:class:explainable-ai
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:ai-fairness
  - urn:ngm:class:decision-transparency
  - urn:ngm:class:ai-governance
  - urn:ngm:class:responsible-ai
  - urn:ngm:class:algorithmic-accountability
standardizedBy:
  - urn:ngm:class:ieee-p2976-xai
partOf:
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:ensemble-methods
relatedTo:
  - urn:ngm:class:ensemble-methods
  - urn:ngm:class:random-forest
  - urn:ngm:class:gradient-boosted-trees
  - urn:ngm:class:bagging
  - urn:ngm:class:boosting
  - urn:ngm:class:bias-variance-tradeoff
  - urn:ngm:class:overfitting
  - urn:ngm:class:shap
  - urn:ngm:class:ai-fairness
  - urn:ngm:class:ieee-p2976-xai
  - urn:ngm:class:iso-iec-42001
  - urn:ngm:class:post-hoc-explanation
  - urn:ngm:class:counterfactual-explanation
  - urn:ngm:class:feature-engineering
  - urn:ngm:class:hyperparameter-tuning
  - urn:ngm:class:algorithmic-accountability
  - urn:ngm:class:sentiment-analysis
  - urn:ngm:class:text-classification
  - urn:ngm:class:algorithmic-bias
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:data-science
---

# Decision Tree

A decision tree is a supervised learning model that predicts an outcome by recursively partitioning the feature space into regions, represented as a tree of decision nodes and leaf nodes. Each internal node tests a feature against a threshold and routes an instance down a branch, while leaves assign a class label or numeric value. Decision trees are valued for their interpretability and form the building blocks of ensemble methods such as random forests and gradient boosting.
