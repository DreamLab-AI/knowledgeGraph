---
okf_version: "0.2"
type: Class
title: Differentiable Programming
resource: urn:ngm:class:differentiable-programming
domain: machine-learning
description: Differentiable programming is a programming paradigm in which entire programs, not just isolated functions, are constructed so that gradients can be computed automatically through them via automatic differentiation. It treats control flow, loops and composed functions as differentiable building blocks, enabling gradient-based optimisation of arbitrary computational pipelines rather than only fixed
maturity: emerging
quality: 0.55
is-a:
  - urn:ngm:class:programming-paradigm
requires:
  - urn:ngm:class:automatic-differentiation
enables:
  - urn:ngm:class:normalising-flows
partOf:
  - urn:ngm:class:programming-paradigm
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Differentiable Programming

Differentiable programming is a programming paradigm in which entire programs, not just isolated functions, are constructed so that gradients can be computed automatically through them via automatic differentiation. It treats control flow, loops and composed functions as differentiable building blocks, enabling gradient-based optimisation of arbitrary computational pipelines rather than only fixed neural network layers. It underlies techniques such as normalising flows, where a chain of invertible, differentiable transformations must be optimised end-to-end.
