---
okf_version: "0.2"
type: Class
title: NVIDIA Jetson
resource: urn:ngm:class:nvidia-corporation-jetson
domain: robotics
description: NVIDIA Jetson is a family of system-on-module (SoM) and developer kit edge computing platforms that combine NVIDIA GPU cores with ARM-based CPU clusters, purpose-built for deploying deep learning inference, computer vision, and robotics workloads at the edge with constrained power budgets. Modules in the Jetson family — including Nano, TX2, Xavier, and Orin — span from entry-level embedded devices
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:edge-ai-accelerator
requires:
  - urn:ngm:class:operating-system
enables:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:inference-engine
  - urn:ngm:class:real-time-inference
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:autonomous-navigation
contrastsWith:
  - urn:ngm:class:neural-processing-unit
bridgesTo:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:cuda
  - urn:ngm:class:tensor-rt
supports:
  - urn:ngm:class:inference-hardware
  - urn:ngm:class:edge-computing-node
  - urn:ngm:class:ros
  - urn:ngm:class:deep-learning
relatedTo:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:gpu-computing
  - urn:ngm:class:autonomous-mobile-robots
---

# NVIDIA Jetson

NVIDIA Jetson is a family of system-on-module (SoM) and developer kit edge computing platforms that combine NVIDIA GPU cores with ARM-based CPU clusters, purpose-built for deploying deep learning inference, computer vision, and robotics workloads at the edge with constrained power budgets. Modules in the Jetson family — including Nano, TX2, Xavier, and Orin — span from entry-level embedded devices to high-performance autonomous machine platforms, all running NVIDIA's JetPack SDK which provides CUDA, cuDNN, TensorRT, and ROS integration.
