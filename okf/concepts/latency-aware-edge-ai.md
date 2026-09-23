---
okf_version: "0.2"
type: Class
title: Latency-Aware Edge AI
resource: urn:ngm:class:latency-aware-edge-ai
domain: artificial-intelligence
description: Latency-Aware Edge AI is a design paradigm for machine learning systems deployed at the network edge that dynamically adapts inference strategies, model selection, and compute offloading decisions to satisfy hard or soft real-time response-time deadlines. Such systems continuously monitor available time budgets, device load, and network conditions, trading accuracy for speed when necessary to main
maturity: established
quality: 0
is-a:
  - urn:ngm:class:ai-infrastructure
requires:
  - urn:ngm:class:inference-hardware
  - urn:ngm:class:edge-computing
enables:
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:augmented-reality
contrastsWith:
  - urn:ngm:class:gpu-compute
uses:
  - urn:ngm:class:inference
  - urn:ngm:class:deep-learning
  - urn:ngm:class:edge-ai-accelerators
relatedTo:
  - urn:ngm:class:edge-ai-system
  - urn:ngm:class:bandwidth-adaptation
  - urn:ngm:class:computer-vision
---

# Latency-Aware Edge AI

Latency-Aware Edge AI is a design paradigm for machine learning systems deployed at the network edge that dynamically adapts inference strategies, model selection, and compute offloading decisions to satisfy hard or soft real-time response-time deadlines. Such systems continuously monitor available time budgets, device load, and network conditions, trading accuracy for speed when necessary to maintain service-level objectives. Applications span autonomous vehicles, mobile augmented reality, and industrial robotics, where missed deadlines carry safety or quality consequences.
