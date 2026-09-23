---
okf_version: "0.2"
type: Class
title: FID Benchmark Protocol
resource: urn:ngm:class:fid-benchmark-protocol
domain: artificial-intelligence
description: The FID benchmark protocol is the standardised methodology for evaluating generative image models using the Fréchet Inception Distance, which compares the distribution of generated images with that of real images in the feature space of a pretrained Inception network. The protocol fixes the feature extractor, the number of samples, and preprocessing so that scores are comparable across models; low
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:evaluation-metric
  - urn:ngm:class:benchmarks
  - urn:ngm:class:benchmarks
  - urn:ngm:class:image-quality-assessment
  - urn:ngm:class:distributional-similarity-metric
hasPart:
  - urn:ngm:class:inception-v3
  - urn:ngm:class:frechet-distance
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:clean-fid
  - urn:ngm:class:precision-recall-curve
  - urn:ngm:class:fr-chet-distance
  - urn:ngm:class:gaussian-distribution-estimator
  - urn:ngm:class:matrix-square-root
  - urn:ngm:class:reference-statistics-cache
requires:
  - urn:ngm:class:inception-v3
  - urn:ngm:class:image-net
  - urn:ngm:class:probability-theory
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:imagenet
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:deep-learning
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:training-data-distribution
enables:
  - urn:ngm:class:generative-model
  - urn:ngm:class:image-synthesis
  - urn:ngm:class:synthetic-data-generation
  - urn:ngm:class:medical-image-synthesis
  - urn:ngm:class:text-to-image
  - urn:ngm:class:video-synthesis
  - urn:ngm:class:drug-discovery
  - urn:ngm:class:game-asset-generation
dependsOn:
  - urn:ngm:class:inception-v3
  - urn:ngm:class:imagenet
  - urn:ngm:class:deep-learning
  - urn:ngm:class:representation-learning
  - urn:ngm:class:convolutional-neural-network
implements:
  - urn:ngm:class:frechet-distance
  - urn:ngm:class:wasserstein-distance
  - urn:ngm:class:fr-chet-distance
  - urn:ngm:class:optimal-transport
  - urn:ngm:class:kernel-maximum-mean-discrepancy
contrastsWith:
  - urn:ngm:class:inception-score
  - urn:ngm:class:cmmd
  - urn:ngm:class:kernel-inception-distance
  - urn:ngm:class:perceptual-image-patch-similarity
uses:
  - urn:ngm:class:inception-v3
  - urn:ngm:class:clip-encoder
  - urn:ngm:class:representation-learning
  - urn:ngm:class:deep-learning
  - urn:ngm:class:probability-theory
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:neural-network
supports:
  - urn:ngm:class:diffusion-models
  - urn:ngm:class:generative-adversarial-networks
  - urn:ngm:class:vae
  - urn:ngm:class:text-to-image
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:score-based-model
  - urn:ngm:class:flow-matching
  - urn:ngm:class:latent-variable-model
standardizedBy:
  - urn:ngm:class:cvpr
  - urn:ngm:class:neur-ips
  - urn:ngm:class:iclr
  - urn:ngm:class:icml
relatedTo:
  - urn:ngm:class:diffusion-models
  - urn:ngm:class:generative-adversarial-networks
  - urn:ngm:class:computer-vision
  - urn:ngm:class:frechet-audio-distance
  - urn:ngm:class:frechet-video-distance
  - urn:ngm:class:fr-chet-audio-distance
  - urn:ngm:class:fr-chet-video-distance
  - urn:ngm:class:synthetic-media
  - urn:ngm:class:representation-learning
  - urn:ngm:class:deep-generative-model
  - urn:ngm:class:generative-ai
---

# FID Benchmark Protocol

The FID benchmark protocol is the standardised methodology for evaluating generative image models using the Fréchet Inception Distance, which compares the distribution of generated images with that of real images in the feature space of a pretrained Inception network. The protocol fixes the feature extractor, the number of samples, and preprocessing so that scores are comparable across models; lower FID indicates greater similarity to real data. It is the de facto standard for benchmarking GANs and diffusion models.
