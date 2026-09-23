---
okf_version: "0.2"
type: Class
title: Random Forest
resource: urn:ngm:class:random-forest
domain: machine-learning
description: A random forest is an ensemble learning method that constructs many decision trees and aggregates their predictions, typically by majority vote for classification or averaging for regression. Each tree is trained on a bootstrap sample of the data and considers a random subset of features at each split, which decorrelates the trees and reduces variance. The resulting model is robust, resistant to o
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:decision-tree
  - urn:ngm:class:ai-technique
requires:
  - urn:ngm:class:model-training
enables:
  - urn:ngm:class:feature-importance
  - urn:ngm:class:interpretability
dependsOn:
  - urn:ngm:class:cross-validation
contrastsWith:
  - urn:ngm:class:boosting
  - urn:ngm:class:neural-network
bridgesTo:
  - urn:ngm:class:supervised-learning
uses:
  - urn:ngm:class:decision-tree
  - urn:ngm:class:bagging
  - urn:ngm:class:feature-selection
supports:
  - urn:ngm:class:feature-engineering
partOf:
  - urn:ngm:class:supervised-learning
relatedTo:
  - urn:ngm:class:decision-tree
  - urn:ngm:class:feature-importance
  - urn:ngm:class:cross-validation
---

# Random Forest

A random forest is an ensemble learning method that constructs many decision trees and aggregates their predictions, typically by majority vote for classification or averaging for regression. Each tree is trained on a bootstrap sample of the data and considers a random subset of features at each split, which decorrelates the trees and reduces variance. The resulting model is robust, resistant to overfitting, and provides built-in estimates of feature importance.
