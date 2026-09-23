---
okf_version: "0.2"
type: Class
title: Edge Inference
resource: urn:ngm:class:edge-inference
domain: machine-learning
description: The execution of machine learning model inference on local edge devices rather than in centralised cloud infrastructure, close to where data is generated, enabling low-latency, privacy-preserving and bandwidth-efficient AI applications.
maturity: growing
quality: 0.72
is-a:
  - urn:ngm:class:edge-ai
  - urn:ngm:class:inference
  - urn:ngm:class:distributed-computing
hasPart:
  - urn:ngm:class:neural-network-quantisation
  - urn:ngm:class:model-pruning
  - urn:ngm:class:model-quantization
  - urn:ngm:class:knowledge-distillation
  - urn:ngm:class:neural-architecture-search
  - urn:ngm:class:inference-engine
  - urn:ngm:class:hardware-accelerator
  - urn:ngm:class:model-compression-pipeline
  - urn:ngm:class:quantisation-aware-training
requires:
  - urn:ngm:class:inference-engine
  - urn:ngm:class:knowledge-distillation
  - urn:ngm:class:neural-network-quantisation
  - urn:ngm:class:hardware-accelerator
  - urn:ngm:class:neural-processing-unit
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:model-compression
  - urn:ngm:class:hardware-acceleration
  - urn:ngm:class:tensor-flow-lite
  - urn:ngm:class:onnx-runtime
enables:
  - urn:ngm:class:real-time-ai
  - urn:ngm:class:on-device-inference
  - urn:ngm:class:edge-ai
  - urn:ngm:class:real-time-ai-inference
  - urn:ngm:class:on-device-inference
  - urn:ngm:class:federated-learning
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:smart-manufacturing
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:on-device-llm
  - urn:ngm:class:healthcare-ai
  - urn:ngm:class:industrial-io-t
dependsOn:
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:neural-processing-unit
  - urn:ngm:class:edge-computing
  - urn:ngm:class:deep-learning
  - urn:ngm:class:internet-of-things
  - urn:ngm:class:hardware-acceleration
implements:
  - urn:ngm:class:inference
  - urn:ngm:class:inference
  - urn:ngm:class:deep-learning
  - urn:ngm:class:forward-pass-computation
contrastsWith:
  - urn:ngm:class:cloud-inference
  - urn:ngm:class:centralised-ai
  - urn:ngm:class:fog-computing
  - urn:ngm:class:cloud-computing
bridgesTo:
  - urn:ngm:class:iot-device
  - urn:ngm:class:federated-learning
  - urn:ngm:class:spatial-computing
uses:
  - urn:ngm:class:onnx-runtime
  - urn:ngm:class:tensor-flow-lite
  - urn:ngm:class:pytorch-mobile
  - urn:ngm:class:executorch
  - urn:ngm:class:apple-core-ml
  - urn:ngm:class:arm-nn
  - urn:ngm:class:llama-cpp
  - urn:ngm:class:openvino
supports:
  - urn:ngm:class:tiny-ml
  - urn:ngm:class:iot-device
  - urn:ngm:class:smart-city
  - urn:ngm:class:digital-twin
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:computer-vision
  - urn:ngm:class:speech-recognition
standardizedBy:
  - urn:ngm:class:mlperf
  - urn:ngm:class:etsi-mec
  - urn:ngm:class:onnx
  - urn:ngm:class:iso-26262
  - urn:ngm:class:eu-ai-act-regulatory-instrument
partOf:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:tiny-ml
relatedTo:
  - urn:ngm:class:latency-optimisation
  - urn:ngm:class:data-privacy
  - urn:ngm:class:bandwidth-efficiency
  - urn:ngm:class:small-language-models
  - urn:ngm:class:on-device-llm
  - urn:ngm:class:computer-vision
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:differential-privacy
  - urn:ngm:class:federated-learning
  - urn:ngm:class:5-g-network
---

# Edge Inference

The execution of machine learning model inference on local edge devices rather than in centralised cloud infrastructure, close to where data is generated, enabling low-latency, privacy-preserving and bandwidth-efficient AI applications.
