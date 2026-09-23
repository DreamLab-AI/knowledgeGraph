---
okf_version: "0.2"
type: Class
title: Supervised Learning
resource: urn:ngm:class:supervised-learning
domain: machine-learning
description: Supervised Learning is the machine learning paradigm where models learn from labeled training data to predict outputs for new, unseen inputs. The learning algorithm finds patterns mapping input features to target labels, guided by a loss function measuring prediction errors. Key tasks include classification (discrete labels) and regression (continuous values), spanning linear models, decision tree
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:classification
  - urn:ngm:class:regression
  - urn:ngm:class:model-evaluation
requires:
  - urn:ngm:class:training-data
  - urn:ngm:class:loss-function
  - urn:ngm:class:training-dataset
  - urn:ngm:class:feature-engineering
enables:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:predictive-modelling
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:computer-vision
implements:
  - urn:ngm:class:neural-network
  - urn:ngm:class:decision-tree
  - urn:ngm:class:support-vector-machine
contrastsWith:
  - urn:ngm:class:unsupervised-learning
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:semi-supervised-learning
bridgesTo:
  - urn:ngm:class:data-governance
  - urn:ngm:class:ai-safety
uses:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:cross-validation
  - urn:ngm:class:regularisation
partOf:
  - urn:ngm:class:machine-learning-discipline
relatedTo:
  - urn:ngm:class:overfitting
  - urn:ngm:class:bias-variance-tradeoff
---

# Supervised Learning

Supervised Learning is the machine learning paradigm where models learn from labeled training data to predict outputs for new, unseen inputs. The learning algorithm finds patterns mapping input features to target labels, guided by a loss function measuring prediction errors. Key tasks include classification (discrete labels) and regression (continuous values), spanning linear models, decision trees, support vector machines, neural networks, and ensemble methods.
