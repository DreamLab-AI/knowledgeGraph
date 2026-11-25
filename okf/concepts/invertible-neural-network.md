---
okf_version: "0.2"
type: Class
title: Invertible Neural Network
resource: urn:ngm:class:invertible-neural-network
domain: machine-learning
description: An invertible neural network is a neural network architecture constructed so that its forward mapping has an explicit, tractable inverse, allowing outputs to be mapped back to inputs without approximation. This is achieved through coupling-layer designs that keep the Jacobian easy to compute and invert. Invertible architectures are the structural building block of normalising flows, where exact in
maturity: established
quality: 0.65
is-a:
  - urn:ngm:class:neural-network
relatedTo:
  - urn:ngm:class:normalising-flow
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Invertible Neural Network

An invertible neural network is a neural network architecture constructed so that its forward mapping has an explicit, tractable inverse, allowing outputs to be mapped back to inputs without approximation. This is achieved through coupling-layer designs that keep the Jacobian easy to compute and invert. Invertible architectures are the structural building block of normalising flows, where exact invertibility and tractable Jacobian determinants are required to compute likelihoods in a change-of-variables formulation.
