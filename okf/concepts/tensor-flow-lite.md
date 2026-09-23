---
okf_version: "0.2"
type: Class
title: TensorFlow Lite
resource: urn:ngm:class:tensor-flow-lite
domain: machine-learning
description: TensorFlow Lite (now rebranded as LiteRT) is Google's open-source deep learning inference framework designed for on-device execution of machine learning models on mobile, embedded, and IoT edge hardware. It converts full TensorFlow or ONNX models into a FlatBuffers-based .tflite format and provides a lightweight interpreter that minimises memory footprint and latency without requiring network conn
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:machine-learning-discipline-framework
hasPart:
  - urn:ngm:class:tensorflow-lite-micro
  - urn:ngm:class:tflite-converter
  - urn:ngm:class:tflite-interpreter
requires:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:deep-learning
  - urn:ngm:class:machine-learning-discipline
enables:
  - urn:ngm:class:edge-inference
  - urn:ngm:class:on-device-learning
  - urn:ngm:class:real-time-inference
  - urn:ngm:class:privacy-preserving-inference
  - urn:ngm:class:on-device-learning
dependsOn:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:mobile-computing
implements:
  - urn:ngm:class:onnx
  - urn:ngm:class:neural-network-inference
contrastsWith:
  - urn:ngm:class:pytorch-mobile
  - urn:ngm:class:onnx-runtime
  - urn:ngm:class:core-ml
  - urn:ngm:class:ncnn
bridgesTo:
  - urn:ngm:class:internet-of-things
  - urn:ngm:class:augmented-reality
uses:
  - urn:ngm:class:neural-network-quantisation
  - urn:ngm:class:hardware-acceleration
  - urn:ngm:class:neural-network
  - urn:ngm:class:flatbuffers
  - urn:ngm:class:model-quantization
supports:
  - urn:ngm:class:android
  - urn:ngm:class:ios
  - urn:ngm:class:microcontroller
  - urn:ngm:class:coral-edge-tpu
partOf:
  - urn:ngm:class:tensor-flow
relatedTo:
  - urn:ngm:class:model-compression
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:federated-learning
---

# TensorFlow Lite

TensorFlow Lite (now rebranded as LiteRT) is Google's open-source deep learning inference framework designed for on-device execution of machine learning models on mobile, embedded, and IoT edge hardware. It converts full TensorFlow or ONNX models into a FlatBuffers-based .tflite format and provides a lightweight interpreter that minimises memory footprint and latency without requiring network connectivity. The framework supports post-training optimisation techniques including quantisation, pruning, and weight clustering, and exposes hardware-acceleration delegates for GPUs, DSPs, NPUs, and the Coral Edge TPU. Its sister project TensorFlow Lite Micro (TFLite Micro) extends the same programming model to bare-metal microcontrollers with as little as 256 KB of RAM.
