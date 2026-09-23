---
okf_version: "0.2"
type: Class
title: Classification
resource: urn:ngm:class:classification
domain: machine-learning
description: Classification is a supervised machine learning task in which a model learns a mapping from input features to a discrete set of predefined category labels, using labelled training examples to optimise decision boundaries or probabilistic scoring rules. At inference time the model assigns each unseen input to one or more categories by applying a learned discriminant function or probabilistic scorin
maturity: mature
quality: 0.9
is-a:
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:ai-technique
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:pattern-recognition
hasPart:
  - urn:ngm:class:classification
  - urn:ngm:class:multi-class-classification
  - urn:ngm:class:multi-label-classification
  - urn:ngm:class:ordinal-classification
  - urn:ngm:class:hierarchical-classification
  - urn:ngm:class:classification-threshold
requires:
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:labelled-dataset
  - urn:ngm:class:feature-engineering
  - urn:ngm:class:loss-function
  - urn:ngm:class:training-data
  - urn:ngm:class:model-evaluation
enables:
  - urn:ngm:class:object-detection
  - urn:ngm:class:sentiment-analysis
  - urn:ngm:class:image-recognition
  - urn:ngm:class:medical-diagnosis-ai
  - urn:ngm:class:spam-filtering
  - urn:ngm:class:fraud-detection
  - urn:ngm:class:robotics-perception
  - urn:ngm:class:text-classification
  - urn:ngm:class:named-entity-recognition
  - urn:ngm:class:intent-recognition
dependsOn:
  - urn:ngm:class:training-data
  - urn:ngm:class:cross-validation
  - urn:ngm:class:hyperparameter-tuning
  - urn:ngm:class:probability-calibration
  - urn:ngm:class:classification-threshold
implements:
  - urn:ngm:class:pac-learning
  - urn:ngm:class:statistical-decision-theory
  - urn:ngm:class:empirical-risk-minimisation
contrastsWith:
  - urn:ngm:class:regression
  - urn:ngm:class:clustering
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:generative-model
bridgesTo:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:robotics-perception
  - urn:ngm:class:robotics-perception
  - urn:ngm:class:computer-vision
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:bioinformatics
uses:
  - urn:ngm:class:decision-tree
  - urn:ngm:class:support-vector-machine
  - urn:ngm:class:neural-network
  - urn:ngm:class:random-forest
  - urn:ngm:class:gradient-boosted-trees
  - urn:ngm:class:logistic-regression
  - urn:ngm:class:naive-bayes
  - urn:ngm:class:k-nearest-neighbours
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:convolutional-neural-network
supports:
  - urn:ngm:class:ai-governance
  - urn:ngm:class:ai-fairness
  - urn:ngm:class:explainable-ai
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:autonomous-system
standardizedBy:
  - urn:ngm:class:iso-iec-22989-2022
  - urn:ngm:class:iso-iec-23053
  - urn:ngm:class:nist-ai-rmf
  - urn:ngm:class:eu-ai-act-regulatory-instrument
relatedTo:
  - urn:ngm:class:statistical-learning-theory
  - urn:ngm:class:probabilistic-inference
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:meta-learning
  - urn:ngm:class:representation-learning
  - urn:ngm:class:zero-shot-learning
  - urn:ngm:class:few-shot-learning
  - urn:ngm:class:class-imbalance
  - urn:ngm:class:confusion-matrix
  - urn:ngm:class:roc-curve
  - urn:ngm:class:conformal-prediction
  - urn:ngm:class:active-learning
  - urn:ngm:class:semi-supervised-learning
  - urn:ngm:class:continual-learning
  - urn:ngm:class:auto-ml
  - urn:ngm:class:ensemble-methods
---

# Classification

Classification is a supervised machine learning task in which a model learns a mapping from input features to a discrete set of predefined category labels, using labelled training examples to optimise decision boundaries or probabilistic scoring rules. At inference time the model assigns each unseen input to one or more categories by applying a learned discriminant function or probabilistic scoring rule. The task encompasses binary, multi-class, and multi-label variants, and underpins applications ranging from image recognition and natural language understanding to medical diagnosis and fraud detection. Performance is evaluated with metrics such as accuracy, precision, recall, F1-score, and the area under the receiver-operating-characteristic curve, selected according to class imbalance and the relative cost of false positives versus false negatives.
