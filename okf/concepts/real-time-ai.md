---
okf_version: "0.2"
type: Class
title: Real-Time AI
resource: urn:ngm:class:real-time-ai
domain: ai
description: Real-Time AI refers to the application of artificial intelligence inference within strict latency bounds — typically sub-second to sub-millisecond — required for time-sensitive tasks such as autonomous driving, robotics control, live speech processing, financial trading, and augmented reality. It integrates specialised hardware (NPUs, GPUs, FPGAs), optimised model representations (quantisation, pr
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:real-time-computation
enables:
  - urn:ngm:class:real-time-inference-at-edge
  - urn:ngm:class:real-time-monitoring
  - urn:ngm:class:autonomous-vehicle
uses:
  - urn:ngm:class:hardware-acceleration
  - urn:ngm:class:edge-computing
  - urn:ngm:class:inference-engine
  - urn:ngm:class:npu
relatedTo:
  - urn:ngm:class:latency
  - urn:ngm:class:real-time-processing
---

# Real-Time AI

Real-Time AI refers to the application of artificial intelligence inference within strict latency bounds — typically sub-second to sub-millisecond — required for time-sensitive tasks such as autonomous driving, robotics control, live speech processing, financial trading, and augmented reality. It integrates specialised hardware (NPUs, GPUs, FPGAs), optimised model representations (quantisation, pruning, TensorRT/ONNX), and edge deployment architectures to ensure deterministic response times. The distinction from batch AI lies in the hard or soft real-time constraints that govern system correctness.
