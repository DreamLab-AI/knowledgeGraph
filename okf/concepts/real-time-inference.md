---
okf_version: "0.2"
type: Class
title: Real-Time Inference
resource: urn:ngm:class:real-time-inference
domain: machine-learning
description: "Real-time inference is the execution of a trained machine-learning model to produce predictions within strict, low-latency time bounds suitable for interactive or streaming applications. It demands optimised serving infrastructure, efficient model formats, and often hardware acceleration to meet sub-second or millisecond response targets. Real-time inference enables responsive AI features such as "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:model-serving
  - urn:ngm:class:model-deployment
hasPart:
  - urn:ngm:class:inference-engine
requires:
  - urn:ngm:class:low-latency
  - urn:ngm:class:gpu-acceleration
enables:
  - urn:ngm:class:real-time-analytics
  - urn:ngm:class:edge-ai
dependsOn:
  - urn:ngm:class:inference
  - urn:ngm:class:model-deployment
implements:
  - urn:ngm:class:inference
contrastsWith:
  - urn:ngm:class:edge-computing
bridgesTo:
  - urn:ngm:class:edge-ai
uses:
  - urn:ngm:class:model-optimization
  - urn:ngm:class:onnx
supports:
  - urn:ngm:class:stream-processing
  - urn:ngm:class:on-device-inference
partOf:
  - urn:ngm:class:model-serving
relatedTo:
  - urn:ngm:class:real-time-processing
  - urn:ngm:class:model-serving
---

# Real-Time Inference

Real-time inference is the execution of a trained machine-learning model to produce predictions within strict, low-latency time bounds suitable for interactive or streaming applications. It demands optimised serving infrastructure, efficient model formats, and often hardware acceleration to meet sub-second or millisecond response targets. Real-time inference enables responsive AI features such as recommendations, fraud scoring, and perception in autonomous systems.
