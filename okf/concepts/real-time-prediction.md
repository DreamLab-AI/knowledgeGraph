---
okf_version: "0.2"
type: Class
title: Real-Time Prediction
resource: urn:ngm:class:real-time-prediction
domain: machine-learning
description: Real-Time Prediction is the generation of a model's output within a latency budget tight enough to inform an immediate decision, typically single-digit to low double-digit milliseconds, as opposed to batch inference computed ahead of need. It requires a serving infrastructure optimised for low-latency, high-throughput requests rather than raw computational efficiency alone. Applications include fr
maturity: established
quality: 0.55
is-a:
  - urn:ngm:class:model-serving
---

# Real-Time Prediction

Real-Time Prediction is the generation of a model's output within a latency budget tight enough to inform an immediate decision, typically single-digit to low double-digit milliseconds, as opposed to batch inference computed ahead of need. It requires a serving infrastructure optimised for low-latency, high-throughput requests rather than raw computational efficiency alone. Applications include fraud detection, recommendation, and real-time bidding, where the value of a prediction decays rapidly with delay.
