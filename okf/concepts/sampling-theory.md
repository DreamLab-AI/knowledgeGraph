---
okf_version: "0.2"
type: Class
title: Sampling Theory
resource: urn:ngm:class:sampling-theory
domain: data
description: Sampling theory is the body of statistical and signal-processing principles governing how a subset of observations is selected from a larger population or continuous signal so that valid inferences can be drawn about the whole. In statistics it formalises how representative samples are drawn, how estimator variance and bias behave, and how confidence in conclusions scales with sample size. In sign
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:statistics
hasPart:
  - urn:ngm:class:random-sampling
  - urn:ngm:class:sampling
requires:
  - urn:ngm:class:probability-theory
  - urn:ngm:class:random-sampling
enables:
  - urn:ngm:class:data-collection
  - urn:ngm:class:signal-processing
dependsOn:
  - urn:ngm:class:central-limit-theorem
  - urn:ngm:class:probability-theory
contrastsWith:
  - urn:ngm:class:bias
uses:
  - urn:ngm:class:probability-theory
supports:
  - urn:ngm:class:statistics
  - urn:ngm:class:data-quality
relatedTo:
  - urn:ngm:class:central-limit-theorem
  - urn:ngm:class:data-quality
  - urn:ngm:class:signal-processing
---

# Sampling Theory

Sampling theory is the body of statistical and signal-processing principles governing how a subset of observations is selected from a larger population or continuous signal so that valid inferences can be drawn about the whole. In statistics it formalises how representative samples are drawn, how estimator variance and bias behave, and how confidence in conclusions scales with sample size. In signal processing it specifies the conditions under which a continuous signal can be reconstructed without loss from discrete samples. The discipline underpins survey design, experimental design, digital signal acquisition, and Monte Carlo estimation.
