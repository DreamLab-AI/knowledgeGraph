---
okf_version: "0.2"
type: Class
title: NPU
resource: urn:ngm:class:npu
domain: artificial-intelligence
description: A Neural Processing Unit (NPU) is a dedicated silicon accelerator architected to execute artificial neural network operations — principally matrix multiplications and activation functions — with far greater energy efficiency and throughput than general-purpose CPUs or GPUs. NPUs are integrated into mobile SoCs, edge devices, and data-centre accelerator cards to enable low-latency AI inference on-d
maturity: emerging
quality: 0.75
is-a:
  - urn:ngm:class:ai-infrastructure
  - urn:ngm:class:ai-hardware
  - urn:ngm:class:artificial-intelligence
enables:
  - urn:ngm:class:inference
  - urn:ngm:class:edge-computing
  - urn:ngm:class:deep-learning
uses:
  - urn:ngm:class:neural-network
supports:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:speech-recognition
  - urn:ngm:class:natural-language-processing
partOf:
  - urn:ngm:class:ai-hardware
  - urn:ngm:class:ai-infrastructure
relatedTo:
  - urn:ngm:class:tpu
  - urn:ngm:class:fpga
  - urn:ngm:class:hardware-acceleration
---

# NPU

A Neural Processing Unit (NPU) is a dedicated silicon accelerator architected to execute artificial neural network operations — principally matrix multiplications and activation functions — with far greater energy efficiency and throughput than general-purpose CPUs or GPUs. NPUs are integrated into mobile SoCs, edge devices, and data-centre accelerator cards to enable low-latency AI inference on-device. They are increasingly central to deploying large language models, computer vision pipelines, and speech recognition at the edge without relying on cloud round-trips.
