---
okf_version: "0.2"
type: Class
title: KOHYA Dreambooth and similar
resource: urn:ngm:class:kohya-dreambooth-and-similar
domain: artificial-intelligence
description: Ecosystem of open-source toolchains, training modologies, dataset-preparation pipelines, and community infrastructure enabling efficient fine-tuning of large-scale Diffusion Models — principally Stable Diffusion 1.x/2.x, SDXL, and FLUX.1 — through parameter-efficient adaptation techni...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:ai-model-architecture
  - urn:ngm:class:diffusion-models
  - urn:ngm:class:parameter-efficient-fine-tuning
  - urn:ngm:class:generative-ai
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:transfer-learning
hasPart:
  - urn:ngm:class:hugging-face-accelerate
  - urn:ngm:class:blip-2-captioner
  - urn:ngm:class:do-ra
  - urn:ngm:class:ly-coris
  - urn:ngm:class:noise-schedule
  - urn:ngm:class:resolution-bucketing
  - urn:ngm:class:textual-inversion
  - urn:ngm:class:wd14-tagger
  - urn:ngm:class:lo-ra
  - urn:ngm:class:lo-ra
  - urn:ngm:class:kohya-dreambooth-and-similar
  - urn:ngm:class:dataset-captioner
  - urn:ngm:class:noise-schedule
  - urn:ngm:class:hugging-face-accelerate
requires:
  - urn:ngm:class:cuda
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:py-torch
  - urn:ngm:class:training-dataset
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:base-model
  - urn:ngm:class:caption-files
  - urn:ngm:class:python-environment
enables:
  - urn:ngm:class:ai-art-generation
  - urn:ngm:class:node-based-diffusion-pipeline-interface
  - urn:ngm:class:lo-ra-fine-tuning
  - urn:ngm:class:image-generation
  - urn:ngm:class:style-transfer
  - urn:ngm:class:image-generation
  - urn:ngm:class:subject-fidelity
  - urn:ngm:class:lo-ra-fine-tuning
  - urn:ngm:class:flux-lora
  - urn:ngm:class:lora-marketplace-distribution
  - urn:ngm:class:node-based-diffusion-pipeline-interface
dependsOn:
  - urn:ngm:class:diffusion-models
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:hugging-face-diffusers
  - urn:ngm:class:py-torch
  - urn:ngm:class:cuda
  - urn:ngm:class:hugging-face-accelerate
  - urn:ngm:class:bitsandbytes
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:sdxl
  - urn:ngm:class:flux-1
  - urn:ngm:class:hidream-i1
implements:
  - urn:ngm:class:do-ra
  - urn:ngm:class:lo-ra-fine-tuning
  - urn:ngm:class:low-rank-adaptation
  - urn:ngm:class:ly-coris
  - urn:ngm:class:resolution-bucketing
  - urn:ngm:class:textual-inversion
  - urn:ngm:class:dreambooth-training
  - urn:ngm:class:lo-ra-fine-tuning
  - urn:ngm:class:pivotal-tuning
  - urn:ngm:class:min-snr-gamma-weighting
  - urn:ngm:class:cached-latent-encoding
contrastsWith:
  - urn:ngm:class:gan-training
  - urn:ngm:class:full-model-fine-tuning
  - urn:ngm:class:hypernetwork-training
  - urn:ngm:class:adapter-modules
  - urn:ngm:class:prompt-tuning
uses:
  - urn:ngm:class:adam-optimiser
  - urn:ngm:class:blip-2-captioner
  - urn:ngm:class:flash-attention
  - urn:ngm:class:lla-va
  - urn:ngm:class:safetensors-format
  - urn:ngm:class:wd14-tagger
  - urn:ngm:class:x-formers
  - urn:ngm:class:adam-optimiser
  - urn:ngm:class:adafactor-optimiser
  - urn:ngm:class:prodigy-optimiser
  - urn:ngm:class:xformers
  - urn:ngm:class:flash-attention
  - urn:ngm:class:llava
  - urn:ngm:class:kohya-ss
  - urn:ngm:class:bmaltais-kohya-gui
  - urn:ngm:class:onetrainer
  - urn:ngm:class:ai-toolkit
  - urn:ngm:class:simpletuner
  - urn:ngm:class:ly-coris
  - urn:ngm:class:hcp-diffusion
  - urn:ngm:class:lo-ra
  - urn:ngm:class:kohya-dreambooth-and-similar
  - urn:ngm:class:textual-inversion
  - urn:ngm:class:do-ra
  - urn:ngm:class:loha
  - urn:ngm:class:min-snr-gamma-weighting
  - urn:ngm:class:pivotal-tuning
supports:
  - urn:ngm:class:ai-art-generation
  - urn:ngm:class:automatic1111
  - urn:ngm:class:civitai
  - urn:ngm:class:creative-ai
  - urn:ngm:class:invoke-ai
  - urn:ngm:class:node-based-diffusion-pipeline-interface
  - urn:ngm:class:flux-1
standardizedBy:
  - urn:ngm:class:civitai
  - urn:ngm:class:hugging-face-peft
  - urn:ngm:class:black-forest-labs-flux-api
  - urn:ngm:class:civitai
  - urn:ngm:class:kohya-naming-convention
relatedTo:
  - urn:ngm:class:control-net
  - urn:ngm:class:generative-models
  - urn:ngm:class:temporal-motion-diffusion-adapter
  - urn:ngm:class:node-based-diffusion-pipeline-interface
  - urn:ngm:class:node-based-diffusion-pipeline-interface-workflows
  - urn:ngm:class:flux-1
  - urn:ngm:class:ip-adapter
  - urn:ngm:class:midjourney-text-to-image-service
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:text-to-image
  - urn:ngm:class:generative-models
  - urn:ngm:class:wd14-tagger
  - urn:ngm:class:blip-2
  - urn:ngm:class:llava
  - urn:ngm:class:civitai
  - urn:ngm:class:automatic1111
  - urn:ngm:class:invoke-ai
  - urn:ngm:class:diffusion-models
  - urn:ngm:class:generative-ai
  - urn:ngm:class:computer-vision
  - urn:ngm:class:parameter-efficient-fine-tuning
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:image-generation
  - urn:ngm:class:neural-network
  - urn:ngm:class:deep-learning
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:ai-art-generation
  - urn:ngm:class:creative-ai
---

# KOHYA Dreambooth and similar

Ecosystem of open-source toolchains, training modologies, dataset-preparation pipelines, and community infrastructure enabling efficient fine-tuning of large-scale Diffusion Models — principally Stable Diffusion 1.x/2.x, SDXL, and FLUX.1 — through parameter-efficient adaptation techni...
