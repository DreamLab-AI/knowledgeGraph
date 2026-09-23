---
okf_version: "0.2"
type: Class
title: Edge AI System
resource: urn:ngm:class:edge-ai-system
domain: artificial-intelligence
description: An Edge AI System is a distributed computing architecture that deploys trained machine learning models directly onto edge devices, sensors, and gateways at the network periphery, enabling local inference without requiring continuous cloud connectivity. Processing occurs close to the data source, achieving sub-millisecond latency, reduced bandwidth consumption, and enhanced data privacy. Edge AI Sy
maturity: established
quality: 0
is-a:
  - urn:ngm:class:ai-infrastructure
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:embedded-systems
hasPart:
  - urn:ngm:class:edge-ai-accelerator
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:sensor
  - urn:ngm:class:neural-processing-unit
  - urn:ngm:class:iot-gateway
  - urn:ngm:class:model-compression-for-edge
  - urn:ngm:class:on-device-learning
requires:
  - urn:ngm:class:neural-network-quantisation
  - urn:ngm:class:model-compression-for-edge
  - urn:ngm:class:real-time-inference-at-edge
  - urn:ngm:class:knowledge-distillation
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:embedded-ai-frameworks
enables:
  - urn:ngm:class:autonomous-system
  - urn:ngm:class:latency-aware-edge-ai
  - urn:ngm:class:on-device-learning
  - urn:ngm:class:autonomous-robot
  - urn:ngm:class:predictive-maintenance
  - urn:ngm:class:smart-city
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:federated-learning
  - urn:ngm:class:computer-vision
  - urn:ngm:class:natural-language-processing
dependsOn:
  - urn:ngm:class:edge-computing-architecture
  - urn:ngm:class:machine-learning-model
  - urn:ngm:class:edge-computing
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:neural-network-quantisation
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:cloud-computing
implements:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:tiny-ml
  - urn:ngm:class:model-compression-for-edge
  - urn:ngm:class:privacy-preserving-ai
contrastsWith:
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:centralised-ai-inference
  - urn:ngm:class:data-centre-ai
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:federated-learning
  - urn:ngm:class:digital-twin
  - urn:ngm:class:cyber-physical-systems
  - urn:ngm:class:5-g
uses:
  - urn:ngm:class:embedded-ai-frameworks
  - urn:ngm:class:federated-edge-learning
  - urn:ngm:class:federated-learning
  - urn:ngm:class:neural-network-quantisation
  - urn:ngm:class:knowledge-distillation
  - urn:ngm:class:tensor-flow-lite
  - urn:ngm:class:onnx-runtime
  - urn:ngm:class:openvino
supports:
  - urn:ngm:class:internet-of-things
  - urn:ngm:class:autonomous-robot
  - urn:ngm:class:digital-twin
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:smart-city
  - urn:ngm:class:healthcare-ai
standardizedBy:
  - urn:ngm:class:ieee
  - urn:ngm:class:etsi
  - urn:ngm:class:arm-holdings
relatedTo:
  - urn:ngm:class:internet-of-things
  - urn:ngm:class:edge-cloud-collaboration
  - urn:ngm:class:computer-vision
  - urn:ngm:class:aiethicsdomain
  - urn:ngm:class:fog-computing
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:wearable-technology
---

# Edge AI System

An Edge AI System is a distributed computing architecture that deploys trained machine learning models directly onto edge devices, sensors, and gateways at the network periphery, enabling local inference without requiring continuous cloud connectivity. Processing occurs close to the data source, achieving sub-millisecond latency, reduced bandwidth consumption, and enhanced data privacy. Edge AI Systems must fit within the memory, power, and computational constraints of embedded hardware through model compression techniques such as quantisation, pruning, and knowledge distillation.
