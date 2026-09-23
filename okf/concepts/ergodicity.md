---
okf_version: "0.2"
type: Class
title: Ergodicity
resource: urn:ngm:class:ergodicity
domain: machine-learning
description: Ergodicity is the property of a stochastic process whereby its long-run time average, computed along a single sufficiently long trajectory, converges to its ensemble average across all possible states. It is a required condition for Markov chain Monte Carlo methods to converge to the target distribution, since it guarantees that a chain will eventually visit all reachable states in proportion to t
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:stochastic-process
partOf:
  - urn:ngm:class:stochastic-process
---

# Ergodicity

Ergodicity is the property of a stochastic process whereby its long-run time average, computed along a single sufficiently long trajectory, converges to its ensemble average across all possible states. It is a required condition for Markov chain Monte Carlo methods to converge to the target distribution, since it guarantees that a chain will eventually visit all reachable states in proportion to their stationary probability. Non-ergodic chains can become trapped in subsets of the state space and yield biased samples.
