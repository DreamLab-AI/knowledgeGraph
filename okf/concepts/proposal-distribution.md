---
okf_version: "0.2"
type: Class
title: Proposal Distribution
resource: urn:ngm:class:proposal-distribution
domain: ai
description: A proposal distribution is an auxiliary distribution used in Monte Carlo methods to generate candidate samples when sampling directly from a target distribution is infeasible. In importance sampling, Metropolis-Hastings, and particle filters it determines where samples are drawn, and its closeness to the target governs efficiency and variance. A poorly chosen proposal causes sample degeneracy or s
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:machine-learning
  - urn:ngm:class:monte-carlo-methods
relatedTo:
  - urn:ngm:class:sampling
  - urn:ngm:class:particle-filter
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Proposal Distribution

A proposal distribution is an auxiliary distribution used in Monte Carlo methods to generate candidate samples when sampling directly from a target distribution is infeasible. In importance sampling, Metropolis-Hastings, and particle filters it determines where samples are drawn, and its closeness to the target governs efficiency and variance. A poorly chosen proposal causes sample degeneracy or slow mixing.
