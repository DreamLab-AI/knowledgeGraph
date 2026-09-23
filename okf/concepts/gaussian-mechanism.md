---
okf_version: "0.2"
type: Class
title: Gaussian Mechanism
resource: urn:ngm:class:gaussian-mechanism
domain: security
description: A differential privacy noise mechanism that releases a numeric query result after adding noise drawn from a normal distribution calibrated to the query's L2 sensitivity, providing approximate (epsilon, delta)-differential privacy; its light tails, per-coordinate efficiency on high-dimensional vectors, and tight composition under Rényi and zero-concentrated accounting make it the mechanism of choic
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:noise-mechanisms
enables:
  - urn:ngm:class:privacy-preserving-analytics
contrastsWith:
  - urn:ngm:class:laplace-mechanism
partOf:
  - urn:ngm:class:differential-privacy
---

# Gaussian Mechanism

A differential privacy noise mechanism that releases a numeric query result after adding noise drawn from a normal distribution calibrated to the query's L2 sensitivity, providing approximate (epsilon, delta)-differential privacy; its light tails, per-coordinate efficiency on high-dimensional vectors, and tight composition under Rényi and zero-concentrated accounting make it the mechanism of choice for iterative computations, most prominently gradient perturbation in differentially private stochastic gradient descent (DP-SGD).
