---
okf_version: "0.2"
type: Class
title: CodeFormer
resource: urn:ngm:class:code-former
domain: ai
description: CodeFormer is a Transformer-based blind face restoration model that combines a discrete codebook prior — learned via a vector-quantised autoencoder — with a controllable fidelity-quality trade-off mechanism, allowing it to recover high-quality facial details from severely degraded inputs such as low-resolution, compressed, or heavily noisy images. Unlike earlier GAN-based restoration approaches, C
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:image-restoration
  - urn:ngm:class:computer-vision
  - urn:ngm:class:generative-ai
  - urn:ngm:class:blind-image-restoration
  - urn:ngm:class:face-recognition
hasPart:
  - urn:ngm:class:vector-quantization
  - urn:ngm:class:transformer
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:codebook-prior
  - urn:ngm:class:fidelity-weight-controller
  - urn:ngm:class:face-detection-module
  - urn:ngm:class:self-attention
  - urn:ngm:class:perceptual-loss-function
  - urn:ngm:class:multi-head-attention
requires:
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:training-data
  - urn:ngm:class:ffhq-dataset
  - urn:ngm:class:face-alignment
  - urn:ngm:class:face-detection
  - urn:ngm:class:backpropagation
enables:
  - urn:ngm:class:generative-ai
  - urn:ngm:class:computer-vision
  - urn:ngm:class:video-restoration
  - urn:ngm:class:old-photo-restoration
  - urn:ngm:class:ai-image-enhancement
  - urn:ngm:class:portrait-enhancement
  - urn:ngm:class:deepfake-detection
dependsOn:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:training-data
  - urn:ngm:class:image-processing
  - urn:ngm:class:neural-network
  - urn:ngm:class:loss-function
implements:
  - urn:ngm:class:blind-image-restoration
  - urn:ngm:class:codebook-lookup
  - urn:ngm:class:discrete-latent-representation
  - urn:ngm:class:vector-quantized-autoencoder
  - urn:ngm:class:transformer-attention
  - urn:ngm:class:image-to-image-translation
contrastsWith:
  - urn:ngm:class:generative-adversarial-network
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:gfpgan
  - urn:ngm:class:real-esrgan
  - urn:ngm:class:vqfr
  - urn:ngm:class:diffbir
  - urn:ngm:class:stylegan
bridgesTo:
  - urn:ngm:class:forensic-imaging
  - urn:ngm:class:medical-imaging
  - urn:ngm:class:cultural-heritage-digitisation
  - urn:ngm:class:on-device-learning
uses:
  - urn:ngm:class:diffusion-transformer
  - urn:ngm:class:image-processing
  - urn:ngm:class:vector-quantization
  - urn:ngm:class:transformer
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:loss-function
  - urn:ngm:class:self-attention
  - urn:ngm:class:perceptual-loss-function
  - urn:ngm:class:vgg
  - urn:ngm:class:arc-face
supports:
  - urn:ngm:class:film-vfx
  - urn:ngm:class:forensic-imaging
  - urn:ngm:class:media-production
  - urn:ngm:class:social-media-image-enhancement
  - urn:ngm:class:archival-photo-restoration
  - urn:ngm:class:cultural-heritage-digitisation
  - urn:ngm:class:medical-imaging
standardizedBy:
  - urn:ngm:class:neurips-2022
  - urn:ngm:class:ntire-2025
  - urn:ngm:class:s-lab-license
relatedTo:
  - urn:ngm:class:ai-upscaling-and-super-resolution
  - urn:ngm:class:super-resolution
  - urn:ngm:class:inpainting
  - urn:ngm:class:generative-adversarial-network
  - urn:ngm:class:vqgan
  - urn:ngm:class:vqfr
  - urn:ngm:class:supir
  - urn:ngm:class:diffbir
  - urn:ngm:class:comfy-ui
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:esrgan
  - urn:ngm:class:image-classification
  - urn:ngm:class:object-detection
---

# CodeFormer

CodeFormer is a Transformer-based blind face restoration model that combines a discrete codebook prior — learned via a vector-quantised autoencoder — with a controllable fidelity-quality trade-off mechanism, allowing it to recover high-quality facial details from severely degraded inputs such as low-resolution, compressed, or heavily noisy images. Unlike earlier GAN-based restoration approaches, CodeFormer's codebook provides rich, semantically plausible facial priors that guide reconstruction without requiring clean reference images, and its fidelity weight parameter lets users tune the balance between realism and fidelity to the original degraded input. The model generalises to face enhancement tasks in AI-generated images, old photo restoration, and video face restoration.
