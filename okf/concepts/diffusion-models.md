---
okf_version: "0.2"
type: Class
title: Diffusion Models
resource: urn:ngm:class:diffusion-models
domain: artificial-intelligence
description: Diffusion Models are a class of deep generative models that learn the data distribution p_data(x) by reversing a fixed forward Markov noising process q(x_t | x_{t-1}) that progressively corrupts data x_0 with Gaussian noise across T timesteps until x_T ≈ N(0,I), then training a neural denoiser ε_...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:ai-model-architecture
  - urn:ngm:class:generative-model
  - urn:ngm:class:deep-generative-model
  - urn:ngm:class:neural-network
  - urn:ngm:class:score-based-model
  - urn:ngm:class:latent-variable-model
  - urn:ngm:class:markov-chain-model
hasPart:
  - urn:ngm:class:noise-schedule
  - urn:ngm:class:text-encoder
  - urn:ngm:class:forward-noising-process
  - urn:ngm:class:reverse-denoising-process
  - urn:ngm:class:score-network
  - urn:ngm:class:sampler
  - urn:ngm:class:variational-lower-bound
requires:
  - urn:ngm:class:differentiable-architecture
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:training-data-distribution
  - urn:ngm:class:variational-inference
  - urn:ngm:class:stochastic-gradient-descent
enables:
  - urn:ngm:class:3-d-content-generation
  - urn:ngm:class:audio-synthesis
  - urn:ngm:class:image-editing
  - urn:ngm:class:image-synthesis
  - urn:ngm:class:video-synthesis
  - urn:ngm:class:inpainting
  - urn:ngm:class:super-resolution
dependsOn:
  - urn:ngm:class:nonequilibrium-thermodynamics
  - urn:ngm:class:stochastic-calculus
  - urn:ngm:class:variational-inference
  - urn:ngm:class:information-theory
  - urn:ngm:class:probability-theory
  - urn:ngm:class:deep-learning
implements:
  - urn:ngm:class:denoising-score-matching
  - urn:ngm:class:flow-matching
  - urn:ngm:class:rectified-flow
  - urn:ngm:class:stochastic-differential-equation
  - urn:ngm:class:variational-lower-bound-maximisation
contrastsWith:
  - urn:ngm:class:generative-adversarial-networks
  - urn:ngm:class:vae
  - urn:ngm:class:autoregressive-model
  - urn:ngm:class:normalising-flow
  - urn:ngm:class:energy-based-model
uses:
  - urn:ngm:class:classifier-free-guidance
  - urn:ngm:class:clip-encoder
  - urn:ngm:class:control-net
  - urn:ngm:class:diffusion-transformer
  - urn:ngm:class:u-net
  - urn:ngm:class:variational-autoencoders
  - urn:ngm:class:cross-attention
  - urn:ngm:class:vae
  - urn:ngm:class:t5-encoder
supports:
  - urn:ngm:class:creative-tools
  - urn:ngm:class:drug-discovery
  - urn:ngm:class:game-asset-generation
  - urn:ngm:class:medical-image-synthesis
  - urn:ngm:class:world-models
  - urn:ngm:class:synthetic-data-generation
standardizedBy:
  - urn:ngm:class:cvpr
  - urn:ngm:class:fid-benchmark-protocol
  - urn:ngm:class:iclr
  - urn:ngm:class:icml
  - urn:ngm:class:neur-ips
relatedTo:
  - urn:ngm:class:representation-learning
  - urn:ngm:class:synthetic-media
  - urn:ngm:class:text-to-video-generation
  - urn:ngm:class:generative-ai
  - urn:ngm:class:text-to-image
  - urn:ngm:class:text-to-video-generation
---

# Diffusion Models

Diffusion Models are a class of deep generative models that learn the data distribution p_data(x) by reversing a fixed forward Markov noising process q(x_t | x_{t-1}) that progressively corrupts data x_0 with Gaussian noise across T timesteps until x_T ≈ N(0,I), then training a neural denoiser ε_...
