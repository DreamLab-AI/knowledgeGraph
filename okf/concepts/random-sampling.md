---
okf_version: "0.2"
type: Class
title: Random Sampling
resource: urn:ngm:class:random-sampling
domain: artificial-intelligence
description: Random sampling is a method of selecting a subset of items from a population such that every element has a known, non-zero probability of being chosen, with selections governed by chance rather than judgement. It is the foundation of statistical inference, allowing properties of a population to be estimated from a representative sample while quantifying uncertainty. In machine learning it underpin
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:statistics
requires:
  - urn:ngm:class:stochastic-process
enables:
  - urn:ngm:class:inference
  - urn:ngm:class:cross-validation
dependsOn:
  - urn:ngm:class:stochastic-process
implements:
  - urn:ngm:class:sampling
contrastsWith:
  - urn:ngm:class:bias
bridgesTo:
  - urn:ngm:class:cross-validation
uses:
  - urn:ngm:class:random-number-generation
supports:
  - urn:ngm:class:cross-validation
  - urn:ngm:class:simulation
partOf:
  - urn:ngm:class:statistics
relatedTo:
  - urn:ngm:class:variance
  - urn:ngm:class:data-collection
  - urn:ngm:class:sampling
---

# Random Sampling

Random sampling is a method of selecting a subset of items from a population such that every element has a known, non-zero probability of being chosen, with selections governed by chance rather than judgement. It is the foundation of statistical inference, allowing properties of a population to be estimated from a representative sample while quantifying uncertainty. In machine learning it underpins data partitioning, stochastic optimisation and Monte Carlo estimation.
