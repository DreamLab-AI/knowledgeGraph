---
okf_version: "0.2"
type: Class
title: Differentiability
resource: urn:ngm:class:differentiability
domain: machine-learning
description: "Differentiability is the mathematical property of a function having a well-defined derivative at every point in its domain, allowing gradients to be computed via calculus. In machine learning it is a prerequisite for gradient-based optimisation: activation and cost functions must be differentiable, or approximately so, for backpropagation to compute parameter updates. Non-differentiable operations"
maturity: established
quality: 0.55
is-a:
  - urn:ngm:class:calculus
generated: {"by":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Differentiability

Differentiability is the mathematical property of a function having a well-defined derivative at every point in its domain, allowing gradients to be computed via calculus. In machine learning it is a prerequisite for gradient-based optimisation: activation and cost functions must be differentiable, or approximately so, for backpropagation to compute parameter updates. Non-differentiable operations require relaxations, subgradients, or surrogate approximations to remain trainable.
