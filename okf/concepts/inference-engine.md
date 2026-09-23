---
okf_version: "0.2"
type: Class
title: Inference Engine
resource: urn:ngm:class:inference-engine
domain: ai
description: An Inference Engine is a specialised software runtime optimised for executing trained machine learning models in production environments, transforming input data into predictions, classifications, embeddings, or generated content with primary objectives of minimising latency, maximising throughput, and efficiently utilising hardware accelerators such as GPUs, TPUs, and NPUs. Inference engines appl
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:inference
hasPart:
  - urn:ngm:class:operator-fusion
  - urn:ngm:class:kernel-auto-tuning
  - urn:ngm:class:dynamic-batching
  - urn:ngm:class:quantisation
requires:
  - urn:ngm:class:machine-learning-model
  - urn:ngm:class:hardware-acceleration
enables:
  - urn:ngm:class:real-time-inference-at-edge
  - urn:ngm:class:model-serving
  - urn:ngm:class:ai-deployment
  - urn:ngm:class:model-serving
dependsOn:
  - urn:ngm:class:gpu-computing
  - urn:ngm:class:tensor-processing-unit
  - urn:ngm:class:inference-hardware
contrastsWith:
  - urn:ngm:class:training-framework
  - urn:ngm:class:eager-execution
uses:
  - urn:ngm:class:onnx
  - urn:ngm:class:cuda
  - urn:ngm:class:speculative-decoding
supports:
  - urn:ngm:class:mlops
  - urn:ngm:class:edge-computing
partOf:
  - urn:ngm:class:mlops
  - urn:ngm:class:ai-deployment
relatedTo:
  - urn:ngm:class:latency
  - urn:ngm:class:throughput
  - urn:ngm:class:model-compression
  - urn:ngm:class:neural-processing-unit
  - urn:ngm:class:kv-cache
---

# Inference Engine

An Inference Engine is a specialised software runtime optimised for executing trained machine learning models in production environments, transforming input data into predictions, classifications, embeddings, or generated content with primary objectives of minimising latency, maximising throughput, and efficiently utilising hardware accelerators such as GPUs, TPUs, and NPUs. Inference engines apply techniques including operator fusion, kernel auto-tuning, mixed-precision quantisation, and memory layout optimisation to close the performance gap between a training-time model representation and optimal hardware utilisation. They typically accept models in portable interchange formats such as ONNX or TensorRT engine plans, decoupling model architecture from the serving runtime, and are deployed within MLOps pipelines to serve AI applications at production scale. Modern inference engines address both traditional deep learning models (CNNs, transformers for classification and detection) and large language model serving, where techniques such as continuous batching, paged KV-cache management, and speculative decoding are critical to economic viability.
