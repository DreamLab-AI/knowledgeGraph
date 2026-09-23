---
okf_version: "0.2"
type: Class
title: Jacobian Determinant
resource: urn:ngm:class:jacobian-determinant
domain: machine-learning
description: "The Jacobian determinant is the scalar determinant of the Jacobian matrix of a differentiable vector-valued function, measuring the local factor by which the function expands or contracts volume around a point. In probability and machine learning it provides the change-of-variables correction needed to transform a probability density through an invertible mapping, ensuring the transformed density "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:jacobian-matrix
hasPart:
  - urn:ngm:class:jacobian-matrix
  - urn:ngm:class:linear-algebra
requires:
  - urn:ngm:class:differential-equations
enables:
  - urn:ngm:class:normalising-flows
bridgesTo:
  - urn:ngm:class:normalising-flows
uses:
  - urn:ngm:class:linear-algebra
supports:
  - urn:ngm:class:normalising-flows
  - urn:ngm:class:deep-learning
partOf:
  - urn:ngm:class:jacobian-matrix
relatedTo:
  - urn:ngm:class:optimisation
  - urn:ngm:class:information-theory
---

# Jacobian Determinant

The Jacobian determinant is the scalar determinant of the Jacobian matrix of a differentiable vector-valued function, measuring the local factor by which the function expands or contracts volume around a point. In probability and machine learning it provides the change-of-variables correction needed to transform a probability density through an invertible mapping, ensuring the transformed density integrates to one. Its sign indicates whether the transformation preserves or reverses orientation, and its magnitude governs local volume scaling.
