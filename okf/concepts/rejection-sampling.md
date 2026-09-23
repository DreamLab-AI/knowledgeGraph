---
okf_version: "0.2"
type: Class
title: Rejection Sampling
resource: urn:ngm:class:rejection-sampling
domain: artificial-intelligence
description: Rejection sampling is a Monte Carlo technique for drawing samples from a target probability distribution by sampling from a simpler proposal distribution and accepting or rejecting each draw according to a ratio test. It requires a proposal that bounds the target up to a constant and yields exact samples from the target when accepted. In machine learning it also names a practical method of generat
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:sampling
hasPart:
  - urn:ngm:class:probability-distribution
  - urn:ngm:class:sampling
requires:
  - urn:ngm:class:probability-distribution
  - urn:ngm:class:probabilistic-model
enables:
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:inference
dependsOn:
  - urn:ngm:class:probability-distribution
implements:
  - urn:ngm:class:sampling
contrastsWith:
  - urn:ngm:class:importance-sampling
  - urn:ngm:class:markov-chain-monte-carlo
uses:
  - urn:ngm:class:generative-model
supports:
  - urn:ngm:class:bayesian-inference
relatedTo:
  - urn:ngm:class:normalising-flow
  - urn:ngm:class:inference
  - urn:ngm:class:normalising-flow
---

# Rejection Sampling

Rejection sampling is a Monte Carlo technique for drawing samples from a target probability distribution by sampling from a simpler proposal distribution and accepting or rejecting each draw according to a ratio test. It requires a proposal that bounds the target up to a constant and yields exact samples from the target when accepted. In machine learning it also names a practical method of generating candidate model outputs, scoring them and keeping only those that pass a quality or reward threshold.
