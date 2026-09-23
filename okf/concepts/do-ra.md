---
okf_version: "0.2"
type: Class
title: DoRA
resource: urn:ngm:class:do-ra
domain: ai
description: DoRA (Weight-Decomposed Low-Rank Adaptation) is a parameter-efficient fine-tuning method that decomposes pretrained weights into separate magnitude and direction components, applying low-rank updates only to the directional component while learning the magnitude independently. By separating these two degrees of freedom, DoRA more closely mirrors the learning dynamics of full fine-tuning than stand
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:parameter-efficient-fine-tuning
  - urn:ngm:class:low-rank-adaptation
  - urn:ngm:class:transfer-learning
hasPart:
  - urn:ngm:class:magnitude-component
  - urn:ngm:class:directional-component
  - urn:ngm:class:low-rank-adaptation
  - urn:ngm:class:weight-decomposition
requires:
  - urn:ngm:class:pretrained-model
  - urn:ngm:class:low-rank-adaptation
  - urn:ngm:class:backpropagation
  - urn:ngm:class:gradient-descent
enables:
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:large-language-models
  - urn:ngm:class:vision-language-model
  - urn:ngm:class:model-adaptation
  - urn:ngm:class:task-specific-fine-tuning
dependsOn:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:neural-network
  - urn:ngm:class:backpropagation
  - urn:ngm:class:gradient-descent
implements:
  - urn:ngm:class:weight-decomposition
  - urn:ngm:class:low-rank-adaptation
  - urn:ngm:class:column-wise-normalisation
contrastsWith:
  - urn:ngm:class:full-fine-tuning
  - urn:ngm:class:low-rank-adaptation
  - urn:ngm:class:prompt-tuning
  - urn:ngm:class:adapter-modules
uses:
  - urn:ngm:class:low-rank-adaptation
  - urn:ngm:class:py-torch
  - urn:ngm:class:hugging-face-peft
  - urn:ngm:class:qlo-ra
  - urn:ngm:class:lo-ra
supports:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:computer-vision
  - urn:ngm:class:multimodal-ai-architecture-learning
  - urn:ngm:class:text-to-image-generation
standardizedBy:
  - urn:ngm:class:hugging-face-peft
relatedTo:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:transformer
  - urn:ngm:class:qdora
  - urn:ngm:class:dvora
  - urn:ngm:class:lo-ra
  - urn:ngm:class:qlo-ra
  - urn:ngm:class:ia3
  - urn:ngm:class:adapter-modules
  - urn:ngm:class:prefix-tuning
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:foundation-model
  - urn:ngm:class:scaling-laws
---

# DoRA

DoRA (Weight-Decomposed Low-Rank Adaptation) is a parameter-efficient fine-tuning method that decomposes pretrained weights into separate magnitude and direction components, applying low-rank updates only to the directional component while learning the magnitude independently. By separating these two degrees of freedom, DoRA more closely mirrors the learning dynamics of full fine-tuning than standard LoRA, improving accuracy on many tasks at comparable parameter cost and without added inference latency once merged. It is used to adapt large language and vision models efficiently.
