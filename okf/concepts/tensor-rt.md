---
okf_version: "0.2"
type: Class
title: TensorRT
resource: urn:ngm:class:tensor-rt
domain: machine-learning
description: TensorRT is NVIDIA's high-performance deep learning inference optimisation SDK that takes trained neural network models and compiles them into highly efficient inference engines tuned for specific NVIDIA GPU architectures. It performs a suite of graph-level and kernel-level optimisations including layer fusion, tensor fusion, kernel auto-tuning, precision calibration (FP32, FP16, INT8, FP8), and d
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:inference-engine
requires:
  - urn:ngm:class:hardware-acceleration
  - urn:ngm:class:nvidia-gpu
  - urn:ngm:class:cuda
enables:
  - urn:ngm:class:edge-inference
  - urn:ngm:class:real-time-inference
  - urn:ngm:class:low-latency
  - urn:ngm:class:low-latency
dependsOn:
  - urn:ngm:class:deep-learning-framework
  - urn:ngm:class:cuda
  - urn:ngm:class:cuda
implements:
  - urn:ngm:class:graph-optimisation
  - urn:ngm:class:post-training-quantisation
contrastsWith:
  - urn:ngm:class:onnx-runtime
  - urn:ngm:class:openvino
  - urn:ngm:class:tensor-flow-lite
bridgesTo:
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:robotics-inference
uses:
  - urn:ngm:class:onnx
  - urn:ngm:class:quantisation
  - urn:ngm:class:mixed-precision-training
  - urn:ngm:class:kernel-fusion
supports:
  - urn:ngm:class:model-deployment
  - urn:ngm:class:triton-inference-server
  - urn:ngm:class:autonomous-driving
relatedTo:
  - urn:ngm:class:python-pytorch-deep-learning-stack
  - urn:ngm:class:tensor-flow
  - urn:ngm:class:nvidia-corporation-jetson
  - urn:ngm:class:py-torch
  - urn:ngm:class:nvidia-corporation-jetson
---

# TensorRT

TensorRT is NVIDIA's high-performance deep learning inference optimisation SDK that takes trained neural network models and compiles them into highly efficient inference engines tuned for specific NVIDIA GPU architectures. It performs a suite of graph-level and kernel-level optimisations including layer fusion, tensor fusion, kernel auto-tuning, precision calibration (FP32, FP16, INT8, FP8), and dynamic shape support to maximise throughput and minimise latency. Models from training frameworks are ingested primarily via the ONNX interchange format, then compiled offline into serialised engine files that are loaded at runtime. TensorRT underpins production AI inference across data-centre GPU clusters, autonomous vehicle compute stacks, and NVIDIA Jetson edge platforms.
