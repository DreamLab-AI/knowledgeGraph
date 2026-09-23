---
okf_version: "0.2"
type: Class
title: Score-Based Generative Model
resource: urn:ngm:class:score-based-generative-model
domain: artificial-intelligence
description: A score-based generative model is a class of generative model that learns the gradient of the log probability density of data — the score function — and samples by reversing a noising process using that learned score. Training perturbs data with noise at multiple scales and fits a neural network to estimate the score at each scale, after which Langevin-style or reverse stochastic-differential-equa
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:generative-model
  - urn:ngm:class:ai-model-architecture
enables:
  - urn:ngm:class:diffusion-policy
  - urn:ngm:class:classifier-free-guidance
dependsOn:
  - urn:ngm:class:stochastic-differential-equation
  - urn:ngm:class:neural-network
implements:
  - urn:ngm:class:generative-model
contrastsWith:
  - urn:ngm:class:generative-adversarial-network
  - urn:ngm:class:vae
bridgesTo:
  - urn:ngm:class:flow-matching
  - urn:ngm:class:markov-chain-monte-carlo
uses:
  - urn:ngm:class:deep-learning
relatedTo:
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:latent-diffusion
---

# Score-Based Generative Model

A score-based generative model is a class of generative model that learns the gradient of the log probability density of data — the score function — and samples by reversing a noising process using that learned score. Training perturbs data with noise at multiple scales and fits a neural network to estimate the score at each scale, after which Langevin-style or reverse stochastic-differential-equation dynamics transform noise into samples. The framework provides a unifying continuous-time view that subsumes denoising diffusion models.
