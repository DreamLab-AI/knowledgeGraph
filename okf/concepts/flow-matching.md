---
okf_version: "0.2"
type: Class
title: Flow Matching
resource: urn:ngm:class:flow-matching
domain: machine-learning
description: Flow Matching is a generative modelling framework that trains a neural network to parameterise the vector field of a continuous normalising flow by directly regressing on analytically tractable target vector fields defined along conditional flow paths between a source distribution (typically Gaussian noise) and a data distribution. Unlike score-based diffusion models, which require simulating a st
maturity: emerging
quality: 0.74
is-a:
  - urn:ngm:class:generative-model
  - urn:ngm:class:ai-model-architecture
hasPart:
  - urn:ngm:class:conditional-flow-matching
  - urn:ngm:class:vector-field
  - urn:ngm:class:ode-solver
requires:
  - urn:ngm:class:neural-network
  - urn:ngm:class:probability-distribution
  - urn:ngm:class:ordinary-differential-equation
enables:
  - urn:ngm:class:image-synthesis
  - urn:ngm:class:audio-generation
  - urn:ngm:class:protein-structure-prediction
  - urn:ngm:class:molecular-generation
contrastsWith:
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:generative-adversarial-network
  - urn:ngm:class:vae
  - urn:ngm:class:normalising-flow
bridgesTo:
  - urn:ngm:class:computational-biology
  - urn:ngm:class:drug-discovery
uses:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:score-matching
  - urn:ngm:class:optimal-transport
  - urn:ngm:class:stochastic-interpolant
partOf:
  - urn:ngm:class:normalising-flow
  - urn:ngm:class:normalising-flow
relatedTo:
  - urn:ngm:class:probabilistic-model
  - urn:ngm:class:score-based-generative-model
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:rectified-flow
  - urn:ngm:class:probabilistic-model
  - urn:ngm:class:latent-diffusion
---

# Flow Matching

Flow Matching is a generative modelling framework that trains a neural network to parameterise the vector field of a continuous normalising flow by directly regressing on analytically tractable target vector fields defined along conditional flow paths between a source distribution (typically Gaussian noise) and a data distribution. Unlike score-based diffusion models, which require simulating a stochastic differential equation during training, flow matching uses deterministic conditional flow paths that can be computed in closed form via Conditional Flow Matching (CFM), yielding stable and efficient training without ODE simulation at training time. At inference the learned vector field is integrated with an ODE solver to transport samples from noise to data, enabling high-quality generation with fewer neural function evaluations than diffusion alternatives. The framework unifies and generalises prior work on continuous normalising flows, score matching, and diffusion probabilistic models under a single regression objective.
