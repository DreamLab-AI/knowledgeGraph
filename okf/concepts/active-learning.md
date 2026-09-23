---
okf_version: "0.2"
type: Class
title: Active Learning
resource: urn:ngm:class:active-learning
domain: artificial-intelligence
description: Machine learning paradigm where algorithms actively select which unlabeled examples from large data pools to query for human annotation rather than passively accepting randomly labeled datasets, optimizing informativeness through query strategies (uncertainty sampling selecting least-confident pr...
maturity: established
quality: 0.5
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:data-efficient-learning
  - urn:ngm:class:interactive-learning
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:human-in-the-loop-learning
hasPart:
  - urn:ngm:class:acquisition-function
  - urn:ngm:class:query-strategy
  - urn:ngm:class:early-stopping
  - urn:ngm:class:blockchain-oracle
  - urn:ngm:class:unlabeled-data-pool
  - urn:ngm:class:early-stopping
  - urn:ngm:class:label-budget
  - urn:ngm:class:diversity-measure
requires:
  - urn:ngm:class:base-learner
  - urn:ngm:class:evaluation-metric
  - urn:ngm:class:oracle
  - urn:ngm:class:unlabeled-data
  - urn:ngm:class:oracle
  - urn:ngm:class:query-selection-algorithm
enables:
  - urn:ngm:class:data-annotation
  - urn:ngm:class:rapid-prototyping
  - urn:ngm:class:data-efficient-learning
  - urn:ngm:class:data-annotation
  - urn:ngm:class:rapid-prototyping
  - urn:ngm:class:expert-knowledge-elicitation
  - urn:ngm:class:sample-complexity-reduction
dependsOn:
  - urn:ngm:class:information-theory
  - urn:ngm:class:statistical-learning-theory
  - urn:ngm:class:uncertainty-quantification
  - urn:ngm:class:version-space-learning
  - urn:ngm:class:pac-learning-theory
implements:
  - urn:ngm:class:sampling
  - urn:ngm:class:variance-reduction
  - urn:ngm:class:sampling
  - urn:ngm:class:query-by-committee
  - urn:ngm:class:expected-model-change
  - urn:ngm:class:expected-error-reduction
  - urn:ngm:class:density-weighted-methods
---

# Active Learning

Machine learning paradigm where algorithms actively select which unlabeled examples from large data pools to query for human annotation rather than passively accepting randomly labeled datasets, optimizing informativeness through query strategies (uncertainty sampling selecting least-confident pr...
