---
okf_version: "0.2"
type: Class
title: GPU Cluster
resource: urn:ngm:class:gpu-cluster
domain: infrastructure
description: A GPU cluster is a group of interconnected computers each equipped with graphics processing units, used together for parallel computation. Such clusters are central to training large AI models and high-performance computing.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:gpu-computing
requires:
  - urn:ngm:class:gpu
  - urn:ngm:class:nvidia-corporation-h-100
enables:
  - urn:ngm:class:deep-learning
bridgesTo:
  - urn:ngm:class:gpu-computing
---

# GPU Cluster

A GPU cluster is a group of interconnected computers each equipped with graphics processing units, used together for parallel computation. Such clusters are central to training large AI models and high-performance computing.
