---
okf_version: "0.2"
type: Class
title: Curriculum Learning
resource: urn:ngm:class:curriculum-learning
domain: machine-learning
description: A training strategy that presents examples to a model in a meaningful order, typically progressing from easy to difficult, mimicking how humans learn. Curriculum learning improves convergence speed, final performance, and generalisation by structuring the learning progression rather than relying on random example ordering.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:self-paced-learning
  - urn:ngm:class:teacher-student-curriculum
  - urn:ngm:class:automatic-curriculum
requires:
  - urn:ngm:class:training-data
  - urn:ngm:class:difficulty-assessment
enables:
  - urn:ngm:class:model-performance
  - urn:ngm:class:computer-vision
  - urn:ngm:class:sample-efficiency
dependsOn:
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:optimisation-algorithm
contrastsWith:
  - urn:ngm:class:random-sampling
  - urn:ngm:class:anti-curriculum
bridgesTo:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:robotics
  - urn:ngm:class:computer-vision
uses:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:difficulty-measure
  - urn:ngm:class:data-ordering
relatedTo:
  - urn:ngm:class:training-strategy
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:contrastive-learning
  - urn:ngm:class:active-learning
  - urn:ngm:class:continual-learning
  - urn:ngm:class:meta-learning
---

# Curriculum Learning

A training strategy that presents examples to a model in a meaningful order, typically progressing from easy to difficult, mimicking how humans learn. Curriculum learning improves convergence speed, final performance, and generalisation by structuring the learning progression rather than relying on random example ordering.
