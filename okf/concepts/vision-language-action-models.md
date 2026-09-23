---
okf_version: "0.2"
type: Class
title: Vision-Language-Action Models
resource: urn:ngm:class:vision-language-action-models
domain: ai
description: Vision-language-action (VLA) models are foundation models that jointly process visual observations and natural-language instructions to produce executable action sequences for embodied agents such as robots. Extending vision-language models with an action-generation head, VLAs are trained on large datasets pairing perception and instructions with demonstrated behaviour, enabling generalisation acr
maturity: emerging
quality: 0.74
is-a:
  - urn:ngm:class:vision-language-model
uses:
  - urn:ngm:class:multimodal-ai-architecture-learning
  - urn:ngm:class:imitation-learning
relatedTo:
  - urn:ngm:class:robot-learning
  - urn:ngm:class:embodied-ai
---

# Vision-Language-Action Models

Vision-language-action (VLA) models are foundation models that jointly process visual observations and natural-language instructions to produce executable action sequences for embodied agents such as robots. Extending vision-language models with an action-generation head, VLAs are trained on large datasets pairing perception and instructions with demonstrated behaviour, enabling generalisation across tasks, objects, and embodiments. They represent a convergence of multimodal learning and robotics, aiming for generalist policies that follow open-ended commands rather than executing narrowly scripted skills.
