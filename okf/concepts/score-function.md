---
okf_version: "0.2"
type: Class
title: Score Function
resource: urn:ngm:class:score-function
domain: artificial-intelligence
description: In score-based generative modelling, the Score Function is the gradient of the log probability density of the data with respect to the input, indicating the direction of increasing data likelihood. Diffusion models learn to estimate this score across noise levels, then use it to iteratively denoise samples drawn from a simple prior. The score function connects diffusion models to Langevin-style sa
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:ai-model-architecture
hasPart:
  - urn:ngm:class:noise-schedule
enables:
  - urn:ngm:class:sampling
  - urn:ngm:class:generative-model
dependsOn:
  - urn:ngm:class:stochastic-differential-equation
uses:
  - urn:ngm:class:probability-distribution
  - urn:ngm:class:maximum-likelihood-estimation
supports:
  - urn:ngm:class:diffusion-model
partOf:
  - urn:ngm:class:diffusion-model
relatedTo:
  - urn:ngm:class:artificial-intelligence
---

# Score Function

In score-based generative modelling, the Score Function is the gradient of the log probability density of the data with respect to the input, indicating the direction of increasing data likelihood. Diffusion models learn to estimate this score across noise levels, then use it to iteratively denoise samples drawn from a simple prior. The score function connects diffusion models to Langevin-style sampling and energy-based formulations.
