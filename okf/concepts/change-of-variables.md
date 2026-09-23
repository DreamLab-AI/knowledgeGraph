---
okf_version: "0.2"
type: Class
title: Change of Variables
resource: urn:ngm:class:change-of-variables
domain: machine-learning
description: Change of variables is a technique for re-expressing an integral or a probability density in terms of a new set of variables related to the original ones by a differentiable, invertible transformation, with the Jacobian determinant of that transformation accounting for the resulting change in volume. Normalising flows apply this principle directly, composing a sequence of invertible transformation
maturity: draft
quality: 0.5
is-a:
  - urn:ngm:class:calculus
---

# Change of Variables

Change of variables is a technique for re-expressing an integral or a probability density in terms of a new set of variables related to the original ones by a differentiable, invertible transformation, with the Jacobian determinant of that transformation accounting for the resulting change in volume. Normalising flows apply this principle directly, composing a sequence of invertible transformations and tracking the accumulated Jacobian determinant to convert a simple base density into a complex target density while keeping the density exactly computable. It is a standard tool wherever a probability distribution must be transported through a differentiable map.
