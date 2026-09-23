---
okf_version: "0.2"
type: Class
title: AI Model Development
resource: urn:ngm:class:ai-model-development
domain: ai
description: "The end-to-end engineering discipline of designing, training, evaluating, and deploying machine learning models, encompassing dataset curation, architecture selection, optimisation, and lifecycle management. It integrates software engineering, statistical modelling, and domain expertise to produce AI systems capable of performing specified tasks at scale. The discipline spans research prototyping "
maturity: established
quality: 0.92
is-a:
  - urn:ngm:class:ai-system
  - urn:ngm:class:machine-learning-discipline
hasPart:
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:experiment-tracking
  - urn:ngm:class:hyperparameter-optimisation
  - urn:ngm:class:empirical-experimental-design-tracking
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:feature-engineering
requires:
  - urn:ngm:class:compute-resources
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:training-data
  - urn:ngm:class:gpu-acceleration
enables:
  - urn:ngm:class:ai-model
  - urn:ngm:class:ai-inference
  - urn:ngm:class:ai-deployment
  - urn:ngm:class:large-language-models
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:computer-vision
dependsOn:
  - urn:ngm:class:neural-network
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:loss-function
  - urn:ngm:class:regularisation
  - urn:ngm:class:benchmark-dataset
implements:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:backpropagation
  - urn:ngm:class:distributed-training
contrastsWith:
  - urn:ngm:class:ai-inference
  - urn:ngm:class:frontier-model-training
uses:
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:deep-learning
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:backpropagation
  - urn:ngm:class:lo-ra-fine-tuning
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:quantisation
  - urn:ngm:class:adversarial-training
supports:
  - urn:ngm:class:mlops
  - urn:ngm:class:ai-model-card
  - urn:ngm:class:model-registry
  - urn:ngm:class:empirical-experimental-design-tracking
standardizedBy:
  - urn:ngm:class:eu-ai-act-regulatory-instrument
  - urn:ngm:class:mlops
relatedTo:
  - urn:ngm:class:ai-risk-assessment
  - urn:ngm:class:mlops
  - urn:ngm:class:ai-governance
  - urn:ngm:class:foundation-model
  - urn:ngm:class:model-deployment
  - urn:ngm:class:data-versioning
  - urn:ngm:class:model-weights
---

# AI Model Development

The end-to-end engineering discipline of designing, training, evaluating, and deploying machine learning models, encompassing dataset curation, architecture selection, optimisation, and lifecycle management. It integrates software engineering, statistical modelling, and domain expertise to produce AI systems capable of performing specified tasks at scale. The discipline spans research prototyping through production deployment and ongoing maintenance.
