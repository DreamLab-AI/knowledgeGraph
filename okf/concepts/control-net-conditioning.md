---
okf_version: "0.2"
type: Class
title: ControlNet Conditioning
resource: urn:ngm:class:control-net-conditioning
domain: ai
description: "ControlNet conditioning is a technique that augments a pretrained diffusion model with an auxiliary network so generation can be steered by spatial control signals such as edge maps, depth, pose, or segmentation. The ControlNet branch copies the encoder of the base model and injects conditioning through zero-initialised connections, preserving the original weights while adding controllability. It "
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:generative-model
  - urn:ngm:class:ai-technique
  - urn:ngm:class:parameter-efficient-fine-tuning
  - urn:ngm:class:adapter-tuning
  - urn:ngm:class:spatial-conditioning
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:control-net
hasPart:
  - urn:ngm:class:zero-convolution
  - urn:ngm:class:u-net-encoder-copy
  - urn:ngm:class:conditioning-signal
  - urn:ngm:class:skip-connection-injection
  - urn:ngm:class:u-net
  - urn:ngm:class:conditioning-preprocessor
  - urn:ngm:class:image-conditioning
requires:
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:neural-network-architecture
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:training-data
  - urn:ngm:class:backpropagation
  - urn:ngm:class:fine-tuning
enables:
  - urn:ngm:class:image-generation
  - urn:ngm:class:text-to-image
  - urn:ngm:class:conditional-image-generation
  - urn:ngm:class:pose-guided-image-generation
  - urn:ngm:class:video-generation
  - urn:ngm:class:inpainting
  - urn:ngm:class:image-synthesis
  - urn:ngm:class:architectural-visualisation
  - urn:ngm:class:medical-imaging
  - urn:ngm:class:synthetic-data
dependsOn:
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:classifier-free-guidance
  - urn:ngm:class:noise-schedule
  - urn:ngm:class:vae
implements:
  - urn:ngm:class:adapter-tuning
  - urn:ngm:class:spatial-conditioning
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:zero-initialisation-protocol
contrastsWith:
  - urn:ngm:class:lo-ra
  - urn:ngm:class:ip-adapter
  - urn:ngm:class:textual-inversion
  - urn:ngm:class:adapter-modules
  - urn:ngm:class:generative-adversarial-network
bridgesTo:
  - urn:ngm:class:medical-imaging
  - urn:ngm:class:synthetic-data
  - urn:ngm:class:architectural-visualisation
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:drug-discovery
uses:
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:u-net
  - urn:ngm:class:zero-convolution
  - urn:ngm:class:classifier-free-guidance
  - urn:ngm:class:open-pose
  - urn:ngm:class:dwpose
  - urn:ngm:class:midas
  - urn:ngm:class:midas-depth-estimation
  - urn:ngm:class:canny-edge-detection
  - urn:ngm:class:edge-detection
  - urn:ngm:class:depth-estimation
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:attention-mechanism
supports:
  - urn:ngm:class:node-based-diffusion-pipeline-interface-workflows
  - urn:ngm:class:automatic1111
  - urn:ngm:class:architectural-visualisation
  - urn:ngm:class:image-to-image
  - urn:ngm:class:fooocus
  - urn:ngm:class:animatediff
  - urn:ngm:class:sdxl
  - urn:ngm:class:node-based-diffusion-pipeline-interface
standardizedBy:
  - urn:ngm:class:hugging-face-diffusers
relatedTo:
  - urn:ngm:class:control-net
  - urn:ngm:class:control-net-and-similar-spatial-conditioning-systems
  - urn:ngm:class:edge-detection
  - urn:ngm:class:depth-estimation
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:semantic-segmentation
  - urn:ngm:class:animatediff
  - urn:ngm:class:flux-1
  - urn:ngm:class:controlnet-plus-plus
  - urn:ngm:class:controlnet-xs
  - urn:ngm:class:sdxl
  - urn:ngm:class:computer-vision
  - urn:ngm:class:generative-ai
  - urn:ngm:class:hugging-face-diffusers
  - urn:ngm:class:vae
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:foundation-model
  - urn:ngm:class:training-data
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:lo-ra
  - urn:ngm:class:ip-adapter
  - urn:ngm:class:textual-inversion
  - urn:ngm:class:zero-convolution
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:u-net
  - urn:ngm:class:skip-connection-injection
  - urn:ngm:class:conditioning-signal
  - urn:ngm:class:adapter-tuning
  - urn:ngm:class:classifier-free-guidance
  - urn:ngm:class:backpropagation
  - urn:ngm:class:conditional-image-generation
  - urn:ngm:class:spatial-conditioning
---

# ControlNet Conditioning

ControlNet conditioning is a technique that augments a pretrained diffusion model with an auxiliary network so generation can be steered by spatial control signals such as edge maps, depth, pose, or segmentation. The ControlNet branch copies the encoder of the base model and injects conditioning through zero-initialised connections, preserving the original weights while adding controllability. It gives image-generation pipelines precise structural control without retraining the base model.
