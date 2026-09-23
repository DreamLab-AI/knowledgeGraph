---
okf_version: "0.2"
type: Class
title: Edge Deployment
resource: urn:ngm:class:edge-deployment
domain: artificial-intelligence
description: Edge deployment is the practice of running machine learning models on or near the devices where data is generated, rather than in a centralised cloud. It reduces inference latency, preserves bandwidth, improves privacy by keeping data local and enables operation under intermittent connectivity. Edge deployment usually depends on model compression and hardware-aware optimisation to fit models withi
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:model-deployment
  - urn:ngm:class:edge-computing
  - urn:ngm:class:edge-ai
hasPart:
  - urn:ngm:class:model-compression
  - urn:ngm:class:model-quantization
  - urn:ngm:class:inference-engine
  - urn:ngm:class:hardware-aware-compilation
  - urn:ngm:class:over-the-air-update
  - urn:ngm:class:model-monitoring
  - urn:ngm:class:device-fleet-management
requires:
  - urn:ngm:class:model-compression
  - urn:ngm:class:pruning
  - urn:ngm:class:model-quantization
  - urn:ngm:class:model-quantization
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:inference-engine
  - urn:ngm:class:knowledge-distillation
enables:
  - urn:ngm:class:on-device-ai
  - urn:ngm:class:edge-ai
  - urn:ngm:class:ultra-low-latency
  - urn:ngm:class:offline-operation
  - urn:ngm:class:privacy-preserving-ai
  - urn:ngm:class:tiny-ml
  - urn:ngm:class:io-t-ai-integration
dependsOn:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:mobile-edge-computing
  - urn:ngm:class:model-compression
  - urn:ngm:class:model-quantization
  - urn:ngm:class:mlops
  - urn:ngm:class:embedded-systems
implements:
  - urn:ngm:class:edge-ai
  - urn:ngm:class:on-device-learning
  - urn:ngm:class:federated-learning
contrastsWith:
  - urn:ngm:class:model-serving
  - urn:ngm:class:cloud-ai
  - urn:ngm:class:centralised-machine-learning
bridgesTo:
  - urn:ngm:class:io-t
  - urn:ngm:class:internet-of-things
  - urn:ngm:class:smart-manufacturing
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:smart-city
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:onnx
  - urn:ngm:class:mlops
  - urn:ngm:class:tflite
  - urn:ngm:class:knowledge-distillation
  - urn:ngm:class:neural-architecture-search
  - urn:ngm:class:inference-engine
  - urn:ngm:class:model-monitoring
supports:
  - urn:ngm:class:tiny-ml
  - urn:ngm:class:inference
  - urn:ngm:class:federated-learning
  - urn:ngm:class:internet-of-things
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:smart-manufacturing
  - urn:ngm:class:smart-city
standardizedBy:
  - urn:ngm:class:etsi-mec
  - urn:ngm:class:mlperf
relatedTo:
  - urn:ngm:class:machine-learning-model
  - urn:ngm:class:latency
  - urn:ngm:class:mobile-computing
  - urn:ngm:class:machine-learning-model
  - urn:ngm:class:edge-ai
  - urn:ngm:class:model-serving
  - urn:ngm:class:mlops
  - urn:ngm:class:over-the-air-update
  - urn:ngm:class:model-monitoring
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:hardware-acceleration
  - urn:ngm:class:neural-processing-unit
---

# Edge Deployment

Edge deployment is the practice of running machine learning models on or near the devices where data is generated, rather than in a centralised cloud. It reduces inference latency, preserves bandwidth, improves privacy by keeping data local and enables operation under intermittent connectivity. Edge deployment usually depends on model compression and hardware-aware optimisation to fit models within the compute, memory and power budgets of edge hardware.
