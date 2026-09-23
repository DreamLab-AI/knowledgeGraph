---
okf_version: "0.2"
type: Class
title: Hugging Face Diffusers
resource: urn:ngm:class:hugging-face-diffusers
domain: artificial-intelligence
description: Hugging Face Diffusers is an open-source Python library that provides a modular, composable toolkit for training, fine-tuning, and running inference with state-of-the-art diffusion models for image, audio, and video generation. The library abstracts the scheduling, noise prediction, and decoder stages of diffusion pipelines behind a consistent API, exposing interchangeable components — noise sched
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:ai-infrastructure
hasPart:
  - urn:ngm:class:noise-schedule
  - urn:ngm:class:vae
  - urn:ngm:class:u-net
  - urn:ngm:class:noise-schedule
enables:
  - urn:ngm:class:image-generation
  - urn:ngm:class:text-to-image
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:audio-generation
  - urn:ngm:class:video-generation
  - urn:ngm:class:inpainting
dependsOn:
  - urn:ngm:class:hugging-face-hub
  - urn:ngm:class:transformers-library
  - urn:ngm:class:hugging-face-hub
implements:
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:score-based-generative-model
  - urn:ngm:class:latent-diffusion
contrastsWith:
  - urn:ngm:class:generative-adversarial-network
  - urn:ngm:class:vae
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:augmented-reality-content-creation
uses:
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:python-pytorch-deep-learning-stack
  - urn:ngm:class:jax
  - urn:ngm:class:hugging-face-accelerate
  - urn:ngm:class:py-torch
  - urn:ngm:class:xformers
  - urn:ngm:class:hugging-face-accelerate
supports:
  - urn:ngm:class:kohya-dreambooth-and-similar
  - urn:ngm:class:lo-ra
  - urn:ngm:class:control-net
  - urn:ngm:class:textual-inversion
  - urn:ngm:class:kohya-dreambooth-and-similar
relatedTo:
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:generative-ai
  - urn:ngm:class:clip
  - urn:ngm:class:hugging-face-model-hub
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:hugging-face-model-hub
---

# Hugging Face Diffusers

Hugging Face Diffusers is an open-source Python library that provides a modular, composable toolkit for training, fine-tuning, and running inference with state-of-the-art diffusion models for image, audio, and video generation. The library abstracts the scheduling, noise prediction, and decoder stages of diffusion pipelines behind a consistent API, exposing interchangeable components — noise schedulers (DDPM, DDIM, DPM-Solver), denoising U-Net or Diffusion Transformer (DiT) backbones, and variational autoencoders — that researchers can recombine freely. It integrates natively with the Hugging Face Hub for model discovery, versioning, and model-card governance, and supports PyTorch and JAX as compute backends with optional xFormers memory-efficient attention and Accelerate-based distributed training.
