---
okf_version: "0.2"
type: Class
title: Triton Inference Server
resource: urn:ngm:class:triton-inference-server
domain: machine-learning
description: Triton Inference Server is NVIDIA's open-source platform for serving machine-learning models in production across CPUs and GPUs. It supports multiple frameworks through a common interface, batches and schedules concurrent requests, and exposes models over HTTP and gRPC. Triton is a standard component of GPU-accelerated inference stacks, often paired with TensorRT-optimised models.
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:inference-serving
  - urn:ngm:class:ai-infrastructure
requires:
  - urn:ngm:class:nvidia-corporation
enables:
  - urn:ngm:class:model-deployment
  - urn:ngm:class:auto-scaling
dependsOn:
  - urn:ngm:class:gpu-acceleration
implements:
  - urn:ngm:class:inference-serving
contrastsWith:
  - urn:ngm:class:model-serving
bridgesTo:
  - urn:ngm:class:kubernetes
uses:
  - urn:ngm:class:gpu-acceleration
  - urn:ngm:class:g-rpc
  - urn:ngm:class:rest-api
supports:
  - urn:ngm:class:tensor-rt
  - urn:ngm:class:onnx-runtime
standardizedBy:
  - urn:ngm:class:onnx
partOf:
  - urn:ngm:class:inference-serving
relatedTo:
  - urn:ngm:class:model-serving
  - urn:ngm:class:model-registry
---

# Triton Inference Server

Triton Inference Server is NVIDIA's open-source platform for serving machine-learning models in production across CPUs and GPUs. It supports multiple frameworks through a common interface, batches and schedules concurrent requests, and exposes models over HTTP and gRPC. Triton is a standard component of GPU-accelerated inference stacks, often paired with TensorRT-optimised models.
