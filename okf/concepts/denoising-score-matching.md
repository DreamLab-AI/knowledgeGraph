---
okf_version: "0.2"
type: Class
title: Denoising Score Matching
resource: urn:ngm:class:denoising-score-matching
domain: artificial-intelligence
description: Denoising score matching is a training objective for learning the score function, the gradient of the log probability density, of a data distribution. Rather than estimating the score directly, it perturbs data with known Gaussian noise and trains a model to predict the noise, which is equivalent to estimating the score of the noise-perturbed distribution. This objective avoids the intractable nor
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:generative-model
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:sampling
requires:
  - urn:ngm:class:probability-distribution
  - urn:ngm:class:stochastic-process
enables:
  - urn:ngm:class:diffusion-model
dependsOn:
  - urn:ngm:class:stochastic-differential-equation
implements:
  - urn:ngm:class:generative-model
contrastsWith:
  - urn:ngm:class:vae
  - urn:ngm:class:vae
bridgesTo:
  - urn:ngm:class:deep-learning
uses:
  - urn:ngm:class:neural-network
  - urn:ngm:class:gradient-descent
supports:
  - urn:ngm:class:deep-learning
partOf:
  - urn:ngm:class:diffusion-model
relatedTo:
  - urn:ngm:class:probabilistic-model
  - urn:ngm:class:markov-chain
  - urn:ngm:class:diffusion-model
---

# Denoising Score Matching

Denoising score matching is a training objective for learning the score function, the gradient of the log probability density, of a data distribution. Rather than estimating the score directly, it perturbs data with known Gaussian noise and trains a model to predict the noise, which is equivalent to estimating the score of the noise-perturbed distribution. This objective avoids the intractable normalising constant of energy-based models and underpins score-based generative models and diffusion models, where the learned score guides iterative sampling from noise back to data.
