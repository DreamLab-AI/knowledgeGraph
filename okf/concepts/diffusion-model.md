---
okf_version: "0.2"
type: Class
title: Diffusion Model
resource: urn:ngm:class:diffusion-model
domain: artificial-intelligence
description: A Diffusion Model is a class of probabilistic generative model that learns to synthesise data by reversing a learned forward diffusion process in which training examples are progressively corrupted with Gaussian noise across a fixed Markov chain of timesteps. At inference time the model iteratively denoises a sample drawn from pure noise, guided by a parametrised score function or noise-prediction
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:generative-model
  - urn:ngm:class:ai-model-architecture
  - urn:ngm:class:generative-model
  - urn:ngm:class:deep-learning
hasPart:
  - urn:ngm:class:noise-schedule
  - urn:ngm:class:score-function
  - urn:ngm:class:forward-diffusion-process
  - urn:ngm:class:reverse-diffusion-process
  - urn:ngm:class:diffusion-transformer
  - urn:ngm:class:u-net-backbone
  - urn:ngm:class:classifier-free-guidance
  - urn:ngm:class:latent-encoder
  - urn:ngm:class:vae
requires:
  - urn:ngm:class:training-data
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:neural-network-latent-space
  - urn:ngm:class:latent-space
  - urn:ngm:class:backpropagation
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:noise-prediction-network
enables:
  - urn:ngm:class:image-generation
  - urn:ngm:class:text-to-image
  - urn:ngm:class:video-generation
  - urn:ngm:class:audio-synthesis
  - urn:ngm:class:drug-discovery
  - urn:ngm:class:data-augmentation
  - urn:ngm:class:protein-structure-design
  - urn:ngm:class:synthetic-data-generation
  - urn:ngm:class:medical-imaging
  - urn:ngm:class:3d-asset-generation
dependsOn:
  - urn:ngm:class:markov-chain
  - urn:ngm:class:gaussian-distribution
  - urn:ngm:class:stochastic-differential-equation
  - urn:ngm:class:probability-theory
  - urn:ngm:class:information-theory
implements:
  - urn:ngm:class:score-matching
  - urn:ngm:class:variational-lower-bound
  - urn:ngm:class:markov-chain-monte-carlo
  - urn:ngm:class:denoising-objective
contrastsWith:
  - urn:ngm:class:generative-adversarial-network
  - urn:ngm:class:vae
  - urn:ngm:class:normalising-flow
  - urn:ngm:class:autoregressive-model
  - urn:ngm:class:energy-based-model
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:digital-twin
  - urn:ngm:class:synthetic-data
  - urn:ngm:class:drug-discovery
uses:
  - urn:ngm:class:neural-network
  - urn:ngm:class:u-net
  - urn:ngm:class:vision-transformer
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:classifier-free-guidance
  - urn:ngm:class:vae
  - urn:ngm:class:control-net
  - urn:ngm:class:text-encoder
  - urn:ngm:class:rectified-flow
supports:
  - urn:ngm:class:content-provenance
  - urn:ngm:class:c2-pa-standard
  - urn:ngm:class:ai-watermarking
  - urn:ngm:class:responsible-ai
standardizedBy:
  - urn:ngm:class:c2pa-coalition-for-content-provenance-and-authenticity
  - urn:ngm:class:mlcommons
relatedTo:
  - urn:ngm:class:stochastic-differential-equation
  - urn:ngm:class:markov-chain
  - urn:ngm:class:foundation-model
  - urn:ngm:class:multimodal-ai-architecture-models
  - urn:ngm:class:multimodal-model
  - urn:ngm:class:large-language-model
  - urn:ngm:class:flow-matching
  - urn:ngm:class:score-based-generative-model
---

# Diffusion Model

A Diffusion Model is a class of probabilistic generative model that learns to synthesise data by reversing a learned forward diffusion process in which training examples are progressively corrupted with Gaussian noise across a fixed Markov chain of timesteps. At inference time the model iteratively denoises a sample drawn from pure noise, guided by a parametrised score function or noise-prediction network, until a high-fidelity output is recovered. Architecturally, the denoising backbone is typically a U-Net or Vision Transformer conditioned on timestep embeddings and optional guidance signals such as text or class labels. Diffusion models achieve state-of-the-art quality on image, audio, video, and molecular generation tasks and underpin production systems including Stable Diffusion, DALL-E 3, Sora, and AudioLDM.
