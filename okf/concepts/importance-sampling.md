---
okf_version: "0.2"
type: Class
title: Importance Sampling
resource: urn:ngm:class:importance-sampling
domain: machine-learning
description: Importance sampling is a variance-reduction technique in Monte Carlo estimation that draws samples from a proposal distribution that concentrates probability mass in regions contributing most to the quantity being estimated, then corrects for the distributional mismatch using importance weights. It is foundational to Bayesian inference, reinforcement learning, path-tracing renderers, and off-polic
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:monte-carlo-methods
requires:
  - urn:ngm:class:probability-distribution
enables:
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:variance-reduction
contrastsWith:
  - urn:ngm:class:rejection-sampling
bridgesTo:
  - urn:ngm:class:path-tracing
  - urn:ngm:class:particle-filter
uses:
  - urn:ngm:class:sampling
  - urn:ngm:class:probabilistic-model
  - urn:ngm:class:variational-inference
  - urn:ngm:class:proposal-distribution
supports:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:policy-gradient-methods
  - urn:ngm:class:sequential-monte-carlo
relatedTo:
  - urn:ngm:class:monte-carlo-tree-search
  - urn:ngm:class:optimisation-algorithm
  - urn:ngm:class:state-estimation
  - urn:ngm:class:markov-chain-monte-carlo
  - urn:ngm:class:effective-sample-size
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Importance Sampling

Importance sampling is a variance-reduction technique in Monte Carlo estimation that draws samples from a proposal distribution that concentrates probability mass in regions contributing most to the quantity being estimated, then corrects for the distributional mismatch using importance weights. It is foundational to Bayesian inference, reinforcement learning, path-tracing renderers, and off-policy evaluation. Importance sampling allows tractable estimation of expectations under distributions that are difficult or impossible to sample from directly. Poor choice of proposal distribution can however lead to high-variance or even infinite-variance estimators, necessitating careful design.
