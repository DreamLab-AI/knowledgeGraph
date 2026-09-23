---
okf_version: "0.2"
type: Class
title: Inpainting
resource: urn:ngm:class:inpainting
domain: artificial-intelligence
description: Inpainting is the computational task of plausibly reconstructing missing, occluded, masked or unwanted regions of an image or video so the completed output appears coherent with the surrounding (known) context, originally formalised in the digital domain by Bertalmio, Sapiro, Caselles and Ballest...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:computer-vision
  - urn:ngm:class:image-editing
  - urn:ngm:class:image-synthesis
  - urn:ngm:class:image-restoration
  - urn:ngm:class:computer-vision-task
  - urn:ngm:class:generative-ai
hasPart:
  - urn:ngm:class:generator-network
  - urn:ngm:class:sampling-procedure
  - urn:ngm:class:loss-function
  - urn:ngm:class:mask
  - urn:ngm:class:context-region
  - urn:ngm:class:conditioning-encoder
requires:
  - urn:ngm:class:differentiable-architecture
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:training-data-distribution
  - urn:ngm:class:mask-specification
  - urn:ngm:class:pretrained-generative-prior
enables:
  - urn:ngm:class:generative-fill
  - urn:ngm:class:outpainting
  - urn:ngm:class:image-and-video-restoration
  - urn:ngm:class:object-removal
  - urn:ngm:class:image-and-video-restoration
  - urn:ngm:class:disocclusion
  - urn:ngm:class:garment-removal
  - urn:ngm:class:scene-completion
dependsOn:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:image-segmentation
implements:
  - urn:ngm:class:conditional-generation
  - urn:ngm:class:variational-inference
  - urn:ngm:class:diffusion-reverse-process
  - urn:ngm:class:patch-synthesis
  - urn:ngm:class:pde-anisotropic-diffusion
contrastsWith:
  - urn:ngm:class:text-to-image-generation
  - urn:ngm:class:super-resolution
  - urn:ngm:class:image-denoising
  - urn:ngm:class:clone-stamp-tool
  - urn:ngm:class:outpainting
bridgesTo:
  - urn:ngm:class:image-editing
uses:
  - urn:ngm:class:classifier-free-guidance
  - urn:ngm:class:control-net
  - urn:ngm:class:convolution
  - urn:ngm:class:cross-attention
  - urn:ngm:class:partial-convolution
  - urn:ngm:class:gated-convolution
  - urn:ngm:class:convolution
supports:
  - urn:ngm:class:cultural-heritage-preservation
  - urn:ngm:class:digital-forensics
  - urn:ngm:class:image-editing
  - urn:ngm:class:video-production-pipeline
  - urn:ngm:class:image-editing
  - urn:ngm:class:video-production-pipeline
  - urn:ngm:class:cultural-heritage-preservation
  - urn:ngm:class:medical-image-reconstruction
standardizedBy:
  - urn:ngm:class:c2-pa
  - urn:ngm:class:cvpr
  - urn:ngm:class:eccv
  - urn:ngm:class:iccv
  - urn:ngm:class:siggraph
  - urn:ngm:class:uk-online-safety-act
  - urn:ngm:class:eu-ai-act-regulatory-instrument
relatedTo:
  - urn:ngm:class:adobe-firefly
  - urn:ngm:class:apple-inc-technology-corporation
  - urn:ngm:class:deepfakes-and-fraudulent-content
  - urn:ngm:class:generative-ai
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:apple-inc-technology-corporation
---

# Inpainting

Inpainting is the computational task of plausibly reconstructing missing, occluded, masked or unwanted regions of an image or video so the completed output appears coherent with the surrounding (known) context, originally formalised in the digital domain by Bertalmio, Sapiro, Caselles and Ballest...
