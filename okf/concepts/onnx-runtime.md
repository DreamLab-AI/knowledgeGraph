---
okf_version: "0.2"
type: Class
title: ONNX Runtime
resource: urn:ngm:class:onnx-runtime
domain: ai
description: ONNX Runtime is an open-source, cross-platform inference and training acceleration engine developed by Microsoft that executes models represented in the Open Neural Network Exchange (ONNX) format. It applies a multi-pass graph optimisation pipeline—including operator fusion, constant folding, and common subexpression elimination—before routing computation through hardware-specific execution provid
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:inference-engine
requires:
  - urn:ngm:class:onnx
  - urn:ngm:class:onnx-model-format
enables:
  - urn:ngm:class:model-deployment
  - urn:ngm:class:edge-inference
  - urn:ngm:class:real-time-inference
  - urn:ngm:class:large-language-model-inference
  - urn:ngm:class:mixed-precision-inference
dependsOn:
  - urn:ngm:class:cuda
  - urn:ngm:class:directml
implements:
  - urn:ngm:class:onnx-standard
  - urn:ngm:class:onnx-operator-set
contrastsWith:
  - urn:ngm:class:tensor-rt
  - urn:ngm:class:openvino
  - urn:ngm:class:tensorrt-llm
  - urn:ngm:class:v-llm
  - urn:ngm:class:llama-cpp
bridgesTo:
  - urn:ngm:class:windows-copilot
  - urn:ngm:class:mobile-machine-learning
uses:
  - urn:ngm:class:graph-optimisation
  - urn:ngm:class:operator-fusion
  - urn:ngm:class:neural-network-quantisation
  - urn:ngm:class:kv-cache
  - urn:ngm:class:model-quantization
  - urn:ngm:class:execution-provider
supports:
  - urn:ngm:class:python-pytorch-deep-learning-stack
  - urn:ngm:class:tensor-flow
  - urn:ngm:class:transformers
  - urn:ngm:class:scikit-learn
  - urn:ngm:class:py-torch
  - urn:ngm:class:transformers
standardizedBy:
  - urn:ngm:class:onnx
  - urn:ngm:class:onnx
relatedTo:
  - urn:ngm:class:model-optimisation-and-performance
  - urn:ngm:class:mlops
  - urn:ngm:class:model-optimisation-and-performance
  - urn:ngm:class:neural-network-compilation
---

# ONNX Runtime

ONNX Runtime is an open-source, cross-platform inference and training acceleration engine developed by Microsoft that executes models represented in the Open Neural Network Exchange (ONNX) format. It applies a multi-pass graph optimisation pipeline—including operator fusion, constant folding, and common subexpression elimination—before routing computation through hardware-specific execution providers such as CUDA, TensorRT, DirectML, OpenVINO, CoreML, and QNN to maximise throughput and minimise latency. The runtime decouples training-time framework choice from deployment-time execution environment, allowing models trained in PyTorch, TensorFlow, or scikit-learn to be deployed with a single, vendor-neutral API. In 2024–2025 it extended into large language model inference via the onnxruntime-genai extensions, adding KV-cache management and autoregressive decoding primitives.
