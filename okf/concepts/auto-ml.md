---
okf_version: "0.2"
type: Class
title: AutoML
resource: urn:ngm:class:auto-ml
domain: artificial-intelligence
description: Automated Machine Learning (AutoML) is the discipline and associated tooling that automates the end-to-end pipeline of applying machine learning to real-world problems — encompassing automated data pre-processing, feature engineering, algorithm selection, Neural Architecture Search (NAS), hyp...
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:ai-agent-system
  - urn:ngm:class:machine-learning-discipline-pipeline
  - urn:ngm:class:automated-optimisation-system
hasPart:
  - urn:ngm:class:algorithm-selection
  - urn:ngm:class:feature-engineering
  - urn:ngm:class:hyperparameter-optimisation
  - urn:ngm:class:meta-learning
  - urn:ngm:class:neural-architecture-search
  - urn:ngm:class:optimisation
  - urn:ngm:class:feature-engineering
  - urn:ngm:class:optimisation
requires:
  - urn:ngm:class:computational-budget
  - urn:ngm:class:evaluation-metric
  - urn:ngm:class:search-space-definition
  - urn:ngm:class:training-dataset
enables:
  - urn:ngm:class:reproducible-research
  - urn:ngm:class:resource-efficiency
  - urn:ngm:class:democratised-ml-development
  - urn:ngm:class:rapid-model-iteration
  - urn:ngm:class:resource-efficiency
  - urn:ngm:class:reproducible-experiments
dependsOn:
  - urn:ngm:class:py-torch
  - urn:ngm:class:tensor-flow
  - urn:ngm:class:optuna-hpo-framework
  - urn:ngm:class:ray-tune
implements:
  - urn:ngm:class:bayesian-optimisation
  - urn:ngm:class:differentiable-architecture
  - urn:ngm:class:neural-architecture-search
  - urn:ngm:class:neural-architecture-search
  - urn:ngm:class:differentiable-architecture
bridgesTo:
  - urn:ngm:class:machine-learning-discipline-pipeline
  - urn:ngm:class:ai-infrastructure
  - urn:ngm:class:lang-chain
  - urn:ngm:class:gazebo-simulator
  - urn:ngm:class:web-assembly
partOf:
  - urn:ngm:class:ai-lifecycle
  - urn:ngm:class:mlops
  - urn:ngm:class:ai-lifecycle
  - urn:ngm:class:mlops
---

# AutoML

Automated Machine Learning (AutoML) is the discipline and associated tooling that automates the end-to-end pipeline of applying machine learning to real-world problems — encompassing automated data pre-processing, feature engineering, algorithm selection, Neural Architecture Search (NAS), hyp...
