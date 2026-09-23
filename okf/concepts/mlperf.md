---
okf_version: "0.2"
type: Class
title: Mlperf
resource: urn:ngm:class:mlperf
domain: ai
description: MLPerf is a suite of standardised benchmarks, governed by the MLCommons consortium, that measures the performance of machine learning hardware, software and systems for both training and inference. It defines fixed reference models, datasets, quality targets and submission rules so that results from different vendors are reproducible and directly comparable. MLPerf has become an industry reference
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:performance-benchmarks
hasPart:
  - urn:ngm:class:training
  - urn:ngm:class:inference
requires:
  - urn:ngm:class:reproducibility
  - urn:ngm:class:model-training
implements:
  - urn:ngm:class:benchmark-standard
  - urn:ngm:class:benchmarks
  - urn:ngm:class:benchmarks
uses:
  - urn:ngm:class:gpu
  - urn:ngm:class:hardware-accelerator
supports:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:machine-learning-discipline
standardizedBy:
  - urn:ngm:class:mlcommons
partOf:
  - urn:ngm:class:performance-benchmarks
relatedTo:
  - urn:ngm:class:throughput
  - urn:ngm:class:latency
  - urn:ngm:class:neural-network
  - urn:ngm:class:artificial-intelligence
---

# Mlperf

MLPerf is a suite of standardised benchmarks, governed by the MLCommons consortium, that measures the performance of machine learning hardware, software and systems for both training and inference. It defines fixed reference models, datasets, quality targets and submission rules so that results from different vendors are reproducible and directly comparable. MLPerf has become an industry reference for evaluating accelerators, frameworks and end-to-end systems on representative deep learning workloads.
