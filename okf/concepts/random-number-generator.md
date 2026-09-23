---
okf_version: "0.2"
type: Class
title: Random Number Generator
resource: urn:ngm:class:random-number-generator
domain: infrastructure
description: A random number generator (RNG) produces sequences of numbers that lack predictable pattern, either through deterministic algorithms seeded from an initial state (pseudo-random) or from physical entropy sources (true random). RNGs are essential to stochastic sampling, Monte Carlo methods, simulation, and cryptographic key generation. Quality is judged by statistical uniformity, period length, and,
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:software-development
relatedTo:
  - urn:ngm:class:sampling
  - urn:ngm:class:monte-carlo-localization
---

# Random Number Generator

A random number generator (RNG) produces sequences of numbers that lack predictable pattern, either through deterministic algorithms seeded from an initial state (pseudo-random) or from physical entropy sources (true random). RNGs are essential to stochastic sampling, Monte Carlo methods, simulation, and cryptographic key generation. Quality is judged by statistical uniformity, period length, and, for security uses, unpredictability.
