---
okf_version: "0.2"
type: Class
title: Differentiable Function
resource: urn:ngm:class:differentiable-function
domain: machine-learning
description: A differentiable function is one that has a well-defined derivative at every point in its domain, meaning it can be locally approximated by a linear map. Neural network components must be differentiable, or approximated by a differentiable surrogate, for gradient-based optimisation to compute usable error signals. Automatic differentiation and backpropagation both depend on the composed network be
maturity: draft
quality: 0.5
is-a:
  - urn:ngm:class:calculus
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Differentiable Function

A differentiable function is one that has a well-defined derivative at every point in its domain, meaning it can be locally approximated by a linear map. Neural network components must be differentiable, or approximated by a differentiable surrogate, for gradient-based optimisation to compute usable error signals. Automatic differentiation and backpropagation both depend on the composed network being a differentiable function of its parameters.
