---
okf_version: "0.2"
type: Class
title: Quasi Monte Carlo
resource: urn:ngm:class:quasi-monte-carlo
domain: artificial-intelligence
description: "Quasi-Monte Carlo (QMC) is a family of numerical integration and sampling methods that replace the pseudo-random points of classical Monte Carlo with deterministic low-discrepancy sequences. By spreading sample points more evenly across the integration domain, QMC achieves faster asymptotic convergence than standard Monte Carlo for many smooth, moderate-dimensional integrals. It is widely used in "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:numerical-methods
hasPart:
  - urn:ngm:class:variance-reduction
enables:
  - urn:ngm:class:variance-reduction
dependsOn:
  - urn:ngm:class:sampling
implements:
  - urn:ngm:class:simulation
contrastsWith:
  - urn:ngm:class:monte-carlo-integration
bridgesTo:
  - urn:ngm:class:computer-graphics
uses:
  - urn:ngm:class:sampling
  - urn:ngm:class:random-sampling
supports:
  - urn:ngm:class:numerical-methods
  - urn:ngm:class:uncertainty-quantification
partOf:
  - urn:ngm:class:numerical-methods
relatedTo:
  - urn:ngm:class:importance-sampling
  - urn:ngm:class:statistics
  - urn:ngm:class:stochastic-process
---

# Quasi Monte Carlo

Quasi-Monte Carlo (QMC) is a family of numerical integration and sampling methods that replace the pseudo-random points of classical Monte Carlo with deterministic low-discrepancy sequences. By spreading sample points more evenly across the integration domain, QMC achieves faster asymptotic convergence than standard Monte Carlo for many smooth, moderate-dimensional integrals. It is widely used in computational finance, computer graphics, and uncertainty quantification.
