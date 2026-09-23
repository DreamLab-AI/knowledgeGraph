---
okf_version: "0.2"
type: Class
title: Classifier-Free Guidance
resource: urn:ngm:class:classifier-free-guidance
domain: artificial-intelligence
description: Classifier-Free Guidance (CFG) is a conditional generation technique for diffusion models that steers the denoising trajectory towards a specified condition by computing a weighted extrapolation between a conditional score estimate and an unconditional score estimate produced by the same single model. Unlike classifier guidance, which requires a separately trained differentiable classifier, CFG tr
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:generative-ai
  - urn:ngm:class:score-based-generative-model
  - urn:ngm:class:conditional-generation
hasPart:
  - urn:ngm:class:guidance-scale
  - urn:ngm:class:null-conditioning
  - urn:ngm:class:score-function
  - urn:ngm:class:noise-schedule
  - urn:ngm:class:negative-prompting
  - urn:ngm:class:conditioning-signal
requires:
  - urn:ngm:class:probabilistic-model
  - urn:ngm:class:conditioning-signal
  - urn:ngm:class:probabilistic-model
  - urn:ngm:class:score-based-generative-model
  - urn:ngm:class:noise-schedule
  - urn:ngm:class:u-net
enables:
  - urn:ngm:class:text-to-image
  - urn:ngm:class:image-generation
  - urn:ngm:class:text-to-video-generation
  - urn:ngm:class:audio-generation
  - urn:ngm:class:negative-prompting
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:score-distillation-sampling
  - urn:ngm:class:image-editing
  - urn:ngm:class:neural-radiance-field
dependsOn:
  - urn:ngm:class:score-based-generative-model
  - urn:ngm:class:dropout
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:variational-inference
  - urn:ngm:class:stochastic-differential-equation
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:vae
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:markov-chain
implements:
  - urn:ngm:class:score-based-generative-model
  - urn:ngm:class:conditional-generation
  - urn:ngm:class:bayesian-inference
contrastsWith:
  - urn:ngm:class:classifier-guidance
  - urn:ngm:class:unconditional-generation
  - urn:ngm:class:generative-adversarial-network
  - urn:ngm:class:flow-matching
  - urn:ngm:class:autoregressive-model
  - urn:ngm:class:energy-based-model
bridgesTo:
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:reward-model
uses:
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:score-function
  - urn:ngm:class:vae
  - urn:ngm:class:null-conditioning
  - urn:ngm:class:clip
  - urn:ngm:class:sampling
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:diffusion-transformer
  - urn:ngm:class:knowledge-distillation
supports:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:generative-ai
  - urn:ngm:class:reward-model
  - urn:ngm:class:ai-governance
  - urn:ngm:class:content-authentication
  - urn:ngm:class:multimodal-ai-architecture-learning
standardizedBy:
  - urn:ngm:class:generative-ai
partOf:
  - urn:ngm:class:generative-ai
relatedTo:
  - urn:ngm:class:generative-model
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:control-net
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:sampling
  - urn:ngm:class:clip
  - urn:ngm:class:ai-governance
  - urn:ngm:class:content-authentication
  - urn:ngm:class:conditioning-signal
  - urn:ngm:class:multimodal-ai-architecture-learning
  - urn:ngm:class:generative-ai
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:reward-model
  - urn:ngm:class:stochastic-differential-equation
  - urn:ngm:class:markov-chain
  - urn:ngm:class:flow-matching
  - urn:ngm:class:dall-e-3
  - urn:ngm:class:diffusion-transformer
  - urn:ngm:class:image-editing
  - urn:ngm:class:neural-radiance-field
  - urn:ngm:class:score-distillation-sampling
  - urn:ngm:class:energy-based-model
  - urn:ngm:class:bayesian-inference
---

# Classifier-Free Guidance

Classifier-Free Guidance (CFG) is a conditional generation technique for diffusion models that steers the denoising trajectory towards a specified condition by computing a weighted extrapolation between a conditional score estimate and an unconditional score estimate produced by the same single model. Unlike classifier guidance, which requires a separately trained differentiable classifier, CFG trains one network jointly on conditional and unconditional objectives by randomly replacing conditioning inputs with a null embedding during training. At inference, the guided score is: score_guided = score_unconditional + w * (score_conditional - score_unconditional), where w is the guidance scale hyperparameter controlling the trade-off between sample diversity and condition alignment. CFG has become the dominant conditioning mechanism across text-to-image, text-to-video, and audio generation systems.
