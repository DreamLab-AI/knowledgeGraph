---
okf_version: "0.2"
type: Class
title: Local Model
resource: urn:ngm:class:local-model
domain: machine-learning
description: A machine-learning model, typically a language model, whose weights are downloaded and run on hardware controlled by the operator — a personal device, a workstation, or a private server — so that inference happens without sending data to a third-party API. Local models trade the ceiling capability and elastic scale of hosted frontier systems for data locality, predictable per-token cost, offline a
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:language-model
  - urn:ngm:class:languagemodel
enables:
  - urn:ngm:class:selfhostedaiserverinfrastructure
contrastsWith:
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:cloud-computing
uses:
  - urn:ngm:class:on-device-inference
  - urn:ngm:class:model-quantization
  - urn:ngm:class:ondeviceinference
  - urn:ngm:class:modelquantization
---

# Local Model

A machine-learning model, typically a language model, whose weights are downloaded and run on hardware controlled by the operator — a personal device, a workstation, or a private server — so that inference happens without sending data to a third-party API. Local models trade the ceiling capability and elastic scale of hosted frontier systems for data locality, predictable per-token cost, offline availability, and full control over versioning and privacy, and they are commonly used as the cheap or confidential tier in a model-routing strategy.
