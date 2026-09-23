---
okf_version: "0.2"
type: Class
title: Sampling
resource: urn:ngm:class:sampling
domain: artificial-intelligence
description: Sampling is the family of computational and statistical procedures that draw representative or informative values from probability distributions — ranging from classical Markov chain Monte Carlo mods (Metropolis-Hastings, Gibbs, Hamiltonian Monte Carlo, NUTS) and sequential mods (Sequential Monte...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:numerical-methods
  - urn:ngm:class:stochastic-processes
  - urn:ngm:class:probabilistic-model
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:statistical-computing
hasPart:
  - urn:ngm:class:autoregressive-sampling
  - urn:ngm:class:importance-sampling
  - urn:ngm:class:markov-chain-monte-carlo
  - urn:ngm:class:nested-sampling
  - urn:ngm:class:quasi-monte-carlo
  - urn:ngm:class:rejection-sampling
  - urn:ngm:class:sequential-monte-carlo
  - urn:ngm:class:diffusion-models
requires:
  - urn:ngm:class:convergence-criterion
  - urn:ngm:class:probability-distribution
  - urn:ngm:class:proposal-distribution
  - urn:ngm:class:random-number-generator
  - urn:ngm:class:target-density
enables:
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:uncertainty-quantification
  - urn:ngm:class:large-scale-pretrained-foundation-model
  - urn:ngm:class:large-language-models
  - urn:ngm:class:monte-carlo-localization
  - urn:ngm:class:stable-diffusion-image-model
dependsOn:
  - urn:ngm:class:information-theory
  - urn:ngm:class:measure-theory
  - urn:ngm:class:stochastic-processes
  - urn:ngm:class:numerical-methods
  - urn:ngm:class:ergodic-theory
implements:
  - urn:ngm:class:gibbs-sampling
  - urn:ngm:class:hamiltonian-monte-carlo
  - urn:ngm:class:metropolis-hastings-algorithm
  - urn:ngm:class:nucleus-sampling
  - urn:ngm:class:speculative-decoding
  - urn:ngm:class:nuts
  - urn:ngm:class:ddim
  - urn:ngm:class:dpm-solver
contrastsWith:
  - urn:ngm:class:variational-inference
  - urn:ngm:class:deterministic-integration
  - urn:ngm:class:grid-approximation
  - urn:ngm:class:laplace-approximation
uses:
  - urn:ngm:class:entropy
  - urn:ngm:class:gradient-information
  - urn:ngm:class:kullback-leibler-divergence
  - urn:ngm:class:markov-chain-monte-carlo
  - urn:ngm:class:noise-schedule
  - urn:ngm:class:score-function
supports:
  - urn:ngm:class:variational-inference
  - urn:ngm:class:node-based-diffusion-pipeline-interface
  - urn:ngm:class:node-based-diffusion-pipeline-interface-workflows
  - urn:ngm:class:diffusion-models
  - urn:ngm:class:large-language-models
  - urn:ngm:class:monte-carlo-localization
standardizedBy:
  - urn:ngm:class:hugging-face-diffusers
  - urn:ngm:class:py-mc
  - urn:ngm:class:robert-casella-monte-carlo-statistical-methods
  - urn:ngm:class:stan-probabilistic-programming
  - urn:ngm:class:numpyro
  - urn:ngm:class:pymc
relatedTo:
  - urn:ngm:class:monte-carlo-methods
  - urn:ngm:class:attention
  - urn:ngm:class:checkpoints
  - urn:ngm:class:node-based-diffusion-pipeline-interface
  - urn:ngm:class:large-scale-pretrained-foundation-model
  - urn:ngm:class:model-optimisation-and-performance
  - urn:ngm:class:probabilistic-model
  - urn:ngm:class:reasoning
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:training-data
  - urn:ngm:class:transformers
---

# Sampling

Sampling is the family of computational and statistical procedures that draw representative or informative values from probability distributions — ranging from classical Markov chain Monte Carlo mods (Metropolis-Hastings, Gibbs, Hamiltonian Monte Carlo, NUTS) and sequential mods (Sequential Monte...
