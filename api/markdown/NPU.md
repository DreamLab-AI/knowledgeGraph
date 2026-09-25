A Neural Processing Unit (NPU) is a dedicated silicon accelerator architected to execute artificial neural network operations — principally matrix multiplications and activation functions — with far greater energy efficiency and throughput than general-purpose CPUs or GPUs. NPUs are integrated into mobile SoCs, edge devices, and data-centre accelerator cards to enable low-latency AI inference on-device. They are increasingly central to deploying large language models, computer vision pipelines, and speech recognition at the edge without relying on cloud round-trips.

### Semantic Classification

### Content

## Overview

A Neural Processing Unit (NPU) is a fixed-function silicon block optimised for the tensor operations that underpin modern AI workloads — primarily dense matrix multiplications, convolutions, and element-wise activations. Unlike CPUs (designed for sequential scalar workloads) or GPUs (designed for massively parallel floating-point graphics pipelines), NPUs incorporate large systolic arrays, on-chip SRAM buffers, and quantisation-aware datapaths that minimise data movement and maximise operations per watt.

## Deployment Contexts

NPUs appear in three distinct form factors. On-device NPUs embedded in smartphone and laptop SoCs (Apple Neural Engine, Qualcomm Hexagon, MediaTek APU) allow real-time inference for tasks such as face detection, speech recognition, and on-device language models without cloud latency. Edge NPUs in industrial and automotive hardware (Hailo-8, Google Coral, Intel Movidius) support computer vision pipelines in bandwidth-constrained environments. Data-centre NPUs (Google TPU, AWS Inferentia, Graphcore IPU) handle high-throughput batch inference for large-scale services. Each tier differs in power envelope, memory bandwidth, and supported precision formats (FP32, BF16, INT8, INT4).

## Relevance to Spatial and Immersive Computing

NPUs are increasingly important for XR headsets and spatial computing devices, where sub-millisecond latency for scene understanding, hand-tracking, eye-tracking, and on-device AI assistants is critical and power budgets are tight. Devices such as the Apple Vision Pro integrate dedicated NPU silicon to run real-time neural rendering and context-aware features without offloading to a host machine.

### Provenance

