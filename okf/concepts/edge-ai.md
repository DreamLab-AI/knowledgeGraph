---
okf_version: "0.2"
type: Class
title: Edge AI
resource: urn:ngm:class:edge-ai
domain: ai
description: Edge AI is the deployment and execution of artificial intelligence inference workloads directly on edge devices—such as smartphones, IoT sensors, surveillance cameras, and embedded systems—close to the data source, rather than in centralised cloud data centres. It reduces latency, preserves data privacy, enables offline operation, and cuts bandwidth costs by processing data locally using optimised
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:on-device-learning
hasPart:
  - urn:ngm:class:model-compression
  - urn:ngm:class:inference-engine
  - urn:ngm:class:neural-processing-unit
  - urn:ngm:class:federated-learning
  - urn:ngm:class:hardware-acceleration
  - urn:ngm:class:model-quantization
  - urn:ngm:class:knowledge-distillation
  - urn:ngm:class:edge-deployment
requires:
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:neural-processing-unit
  - urn:ngm:class:model-compression
  - urn:ngm:class:model-quantization
  - urn:ngm:class:knowledge-distillation
enables:
  - urn:ngm:class:real-time-inference-at-edge
  - urn:ngm:class:io-t-ai-integration
  - urn:ngm:class:federated-learning
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:smart-manufacturing
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:privacy-preserving-ai
  - urn:ngm:class:offline-operation
  - urn:ngm:class:edge-deployment
dependsOn:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:internet-of-things
  - urn:ngm:class:deep-learning
  - urn:ngm:class:model-quantization
  - urn:ngm:class:knowledge-distillation
  - urn:ngm:class:neural-architecture-search
implements:
  - urn:ngm:class:on-device-learning
  - urn:ngm:class:edge-deployment
  - urn:ngm:class:tiny-ml
contrastsWith:
  - urn:ngm:class:fog-computing
  - urn:ngm:class:cloud-ai
  - urn:ngm:class:centralised-machine-learning
bridgesTo:
  - urn:ngm:class:smart-city
  - urn:ngm:class:digital-twin
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:smart-manufacturing
uses:
  - urn:ngm:class:inference-engine
  - urn:ngm:class:knowledge-distillation
  - urn:ngm:class:hardware-acceleration
  - urn:ngm:class:onnx
  - urn:ngm:class:neural-network-quantisation
  - urn:ngm:class:neural-architecture-search
  - urn:ngm:class:model-quantization
  - urn:ngm:class:tflite
  - urn:ngm:class:mlops
supports:
  - urn:ngm:class:smart-city
  - urn:ngm:class:digital-twin
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:computer-vision
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:mlops
standardizedBy:
  - urn:ngm:class:mlperf
  - urn:ngm:class:etsi-mec
relatedTo:
  - urn:ngm:class:tiny-ml
  - urn:ngm:class:on-device-learning
  - urn:ngm:class:computer-vision
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:small-language-models
  - urn:ngm:class:on-device-learning
  - urn:ngm:class:federated-learning
  - urn:ngm:class:mlops
  - urn:ngm:class:edge-deployment
  - urn:ngm:class:model-serving
---

# Edge AI

Edge AI is the deployment and execution of artificial intelligence inference workloads directly on edge devices—such as smartphones, IoT sensors, surveillance cameras, and embedded systems—close to the data source, rather than in centralised cloud data centres. It reduces latency, preserves data privacy, enables offline operation, and cuts bandwidth costs by processing data locally using optimised neural network models and dedicated hardware accelerators such as neural processing units (NPUs). Edge AI encompasses model compression techniques (quantisation, pruning, knowledge distillation), specialised deployment runtimes, and on-device training paradigms such as federated learning. It bridges the domains of machine learning, embedded systems, and distributed computing to enable intelligent applications at the network periphery.
