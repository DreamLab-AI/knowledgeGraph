---
okf_version: "0.2"
type: Class
title: Likelihood Function
resource: urn:ngm:class:likelihood-function
domain: ai
description: A likelihood function expresses the probability of observed data as a function of the parameters of a statistical model, treating the data as fixed and the parameters as variable. It is the central object in maximum-likelihood estimation and Bayesian inference, where it weights how well candidate parameter values explain the evidence. In sequential filtering it scores how consistent each hypothesi
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:machine-learning
  - urn:ngm:class:probability-distribution
relatedTo:
  - urn:ngm:class:particle-filter
  - urn:ngm:class:probabilistic-model
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Likelihood Function

A likelihood function expresses the probability of observed data as a function of the parameters of a statistical model, treating the data as fixed and the parameters as variable. It is the central object in maximum-likelihood estimation and Bayesian inference, where it weights how well candidate parameter values explain the evidence. In sequential filtering it scores how consistent each hypothesis is with a new measurement.
