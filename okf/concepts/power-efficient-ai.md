---
okf_version: "0.2"
type: Class
title: Power-Efficient AI
resource: urn:ngm:class:power-efficient-ai
domain: artificial-intelligence
description: Power-Efficient AI is a design and optimisation discipline that minimises energy consumption during machine learning inference and training, enabling deployment on battery-powered edge devices, IoT sensors, and mobile platforms with constrained power budgets. It combines hardware-level techniques (dynamic voltage and frequency scaling, power gating, specialised neural processing units) with model-
maturity: established
quality: 0
is-a:
  - urn:ngm:class:ai-technique
requires:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:embedded-systems
enables:
  - urn:ngm:class:edge-ai-system
  - urn:ngm:class:embedded-ai-frameworks
  - urn:ngm:class:federated-edge-learning
uses:
  - urn:ngm:class:npu
  - urn:ngm:class:hardware-acceleration
  - urn:ngm:class:knowledge-distillation
  - urn:ngm:class:model-compression-for-edge
  - urn:ngm:class:model-pruning-for-edge-deployment
relatedTo:
  - urn:ngm:class:ai-energy-scarcity
  - urn:ngm:class:sustainable-technology
  - urn:ngm:class:io-t-sensors
  - urn:ngm:class:edge-ai-accelerator
---

# Power-Efficient AI

Power-Efficient AI is a design and optimisation discipline that minimises energy consumption during machine learning inference and training, enabling deployment on battery-powered edge devices, IoT sensors, and mobile platforms with constrained power budgets. It combines hardware-level techniques (dynamic voltage and frequency scaling, power gating, specialised neural processing units) with model-level optimisations (quantisation to INT8/FP16, pruning, knowledge distillation) to achieve high inference throughput per watt. Efficiency is typically measured in TOPS/Watt, and sub-10mW average power envelopes are required for month-to-year deployment lifetimes in wearable and environmental sensing applications.
