---
okf_version: "0.2"
type: Class
title: Image Synthesis
resource: urn:ngm:class:image-synthesis
domain: machine-learning
description: The generation of images from models or descriptions rather than direct capture, including rendering from scene data and machine learning models that produce images from learned distributions. Encompasses classical computer graphics rendering, generative adversarial networks, diffusion models, and other learned generative approaches conditioned on text, semantic maps, or latent codes.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:image-generation
hasPart:
  - urn:ngm:class:text-to-image-generation
  - urn:ngm:class:inpainting
  - urn:ngm:class:super-resolution
requires:
  - urn:ngm:class:generative-model
  - urn:ngm:class:neural-network
  - urn:ngm:class:training-dataset
enables:
  - urn:ngm:class:computer-graphics
  - urn:ngm:class:data-augmentation
  - urn:ngm:class:synthetic-data-generation
  - urn:ngm:class:visual-effects
dependsOn:
  - urn:ngm:class:neural-network-latent-space
  - urn:ngm:class:gpu-computing
implements:
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:generative-adversarial-network
  - urn:ngm:class:vae
contrastsWith:
  - urn:ngm:class:image-recognition
  - urn:ngm:class:image-segmentation
bridgesTo:
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:digital-twin
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:generative-adversarial-network
uses:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:clip
partOf:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:generative-ai
relatedTo:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:prompt-engineering
---

# Image Synthesis

The generation of images from models or descriptions rather than direct capture, including rendering from scene data and machine learning models that produce images from learned distributions. Encompasses classical computer graphics rendering, generative adversarial networks, diffusion models, and other learned generative approaches conditioned on text, semantic maps, or latent codes.
