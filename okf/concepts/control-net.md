---
okf_version: "0.2"
type: Class
title: ControlNet
resource: urn:ngm:class:control-net
domain: artificial-intelligence
description: ControlNet is a trainable adapter architecture that attaches conditional spatial control to pre-trained text-to-image diffusion models by duplicating the U-Net encoder into a locked copy and a trainable copy, connecting them through zero-convolution layers initialised to exactly zero weight and bias. The zero initialisation guarantees that at the start of training no gradient noise corrupts the pr
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:adapter-tuning
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:generative-model
  - urn:ngm:class:neural-network-architecture
hasPart:
  - urn:ngm:class:zero-convolution
  - urn:ngm:class:u-net
  - urn:ngm:class:image-conditioning
  - urn:ngm:class:skip-connection-injection
  - urn:ngm:class:conditioning-signal
  - urn:ngm:class:conditioning-preprocessor
requires:
  - urn:ngm:class:neural-network-architecture
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:training-data
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:backpropagation
  - urn:ngm:class:latent-diffusion
enables:
  - urn:ngm:class:image-generation
  - urn:ngm:class:text-to-image
  - urn:ngm:class:image-synthesis
  - urn:ngm:class:video-generation
  - urn:ngm:class:data-augmentation
  - urn:ngm:class:medical-imaging
  - urn:ngm:class:image-synthesis
  - urn:ngm:class:spatially-guided-generation
  - urn:ngm:class:inpainting
  - urn:ngm:class:image-generation
  - urn:ngm:class:architectural-visualisation
  - urn:ngm:class:conditional-image-generation
dependsOn:
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:vae
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:classifier-free-guidance
  - urn:ngm:class:noise-schedule
implements:
  - urn:ngm:class:adapter-tuning
  - urn:ngm:class:spatial-conditioning
  - urn:ngm:class:zero-initialisation-protocol
  - urn:ngm:class:weighted-feature-addition
contrastsWith:
  - urn:ngm:class:lo-ra
  - urn:ngm:class:ip-adapter
  - urn:ngm:class:textual-inversion
  - urn:ngm:class:generative-adversarial-network
  - urn:ngm:class:adapter-modules
bridgesTo:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:generative-ai
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:drug-discovery
  - urn:ngm:class:medical-imaging
uses:
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:u-net
  - urn:ngm:class:zero-convolution
  - urn:ngm:class:classifier-free-guidance
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:open-pose
  - urn:ngm:class:depth-estimation
  - urn:ngm:class:edge-detection
  - urn:ngm:class:semantic-segmentation
  - urn:ngm:class:backpropagation
supports:
  - urn:ngm:class:comfy-ui
  - urn:ngm:class:automatic1111
  - urn:ngm:class:hugging-face-diffusers
  - urn:ngm:class:fooocus
  - urn:ngm:class:animatediff
  - urn:ngm:class:sdxl
  - urn:ngm:class:node-based-diffusion-pipeline-interface
standardizedBy:
  - urn:ngm:class:hugging-face-diffusers
relatedTo:
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:depth-estimation
  - urn:ngm:class:edge-detection
  - urn:ngm:class:semantic-segmentation
  - urn:ngm:class:adapter-tuning
  - urn:ngm:class:noise-schedule
  - urn:ngm:class:foundation-model
  - urn:ngm:class:multimodal-model
  - urn:ngm:class:synthetic-data
  - urn:ngm:class:control-net-conditioning
  - urn:ngm:class:controlnet
  - urn:ngm:class:controlnet-xs
  - urn:ngm:class:flux-1
  - urn:ngm:class:canny-edge-detection
  - urn:ngm:class:midas-depth-estimation
  - urn:ngm:class:zero-convolution
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:u-net
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:generative-ai
---

# ControlNet

ControlNet is a trainable adapter architecture that attaches conditional spatial control to pre-trained text-to-image diffusion models by duplicating the U-Net encoder into a locked copy and a trainable copy, connecting them through zero-convolution layers initialised to exactly zero weight and bias. The zero initialisation guarantees that at the start of training no gradient noise corrupts the pre-trained backbone, allowing fine-tuning on relatively small paired datasets of (control map, image) pairs. Input control maps include Canny edge maps, depth maps, human pose skeletons, semantic segmentation masks, surface normal maps, line-art, and scribbles, each producing spatially precise, prompt-steerable image generation. The result is a modular conditioning mechanism that can be composed — multiple ControlNets with weighted merging — and transplanted across base diffusion model checkpoints without retraining.
