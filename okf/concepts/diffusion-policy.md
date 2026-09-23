---
okf_version: "0.2"
type: Class
title: Diffusion Policy
resource: urn:ngm:class:diffusion-policy
domain: robotics
description: Diffusion Policy is a class of robot learning algorithms that represent robot action sequences as the output of a conditional denoising diffusion process, treating action prediction as iterative noise removal conditioned on sensor observations rather than as direct regression or classification. By leveraging the expressiveness of diffusion models to capture multi-modal action distributions, Diffus
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:robot-learning
requires:
  - urn:ngm:class:demonstration-data
  - urn:ngm:class:proprioception
enables:
  - urn:ngm:class:robot-manipulation
  - urn:ngm:class:teleoperation
  - urn:ngm:class:embodied-ai
  - urn:ngm:class:dexterous-manipulation
  - urn:ngm:class:robot-control
implements:
  - urn:ngm:class:behavioural-cloning
contrastsWith:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:gaussian-mixture-model
bridgesTo:
  - urn:ngm:class:generative-ai
  - urn:ngm:class:vision-language-model
uses:
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:imitation-learning
  - urn:ngm:class:flow-matching
  - urn:ngm:class:denoising-score-matching
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:convolutional-neural-network
relatedTo:
  - urn:ngm:class:end-effector
  - urn:ngm:class:score-based-generative-model
---

# Diffusion Policy

Diffusion Policy is a class of robot learning algorithms that represent robot action sequences as the output of a conditional denoising diffusion process, treating action prediction as iterative noise removal conditioned on sensor observations rather than as direct regression or classification. By leveraging the expressiveness of diffusion models to capture multi-modal action distributions, Diffusion Policy can represent one-to-many mappings from observation to action — a critical capability for dexterous manipulation tasks where multiple valid action trajectories exist. The approach, introduced by Chi et al. (2023), achieves state-of-the-art performance on imitation learning benchmarks and generalises across diverse manipulation settings.
