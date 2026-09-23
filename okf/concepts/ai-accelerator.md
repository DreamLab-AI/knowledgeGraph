---
okf_version: "0.2"
type: Class
title: AI Accelerator
resource: urn:ngm:class:ai-accelerator
domain: infrastructure
description: An AI accelerator is a class of specialised hardware designed to speed up machine learning workloads, particularly the dense linear algebra of neural network training and inference. Common forms include GPUs, tensor processing units, neural processing units, and custom application-specific integrated circuits that exploit massive parallelism, reduced-precision arithmetic, and high-bandwidth memory
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:hardware-accelerator
hasPart:
  - urn:ngm:class:high-bandwidth-memory
  - urn:ngm:class:systolic-array
requires:
  - urn:ngm:class:data-centre
enables:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:neural-network
  - urn:ngm:class:distributed-training
bridgesTo:
  - urn:ngm:class:compute-infrastructure
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:matrix-multiplication
supports:
  - urn:ngm:class:cloud-computing
partOf:
  - urn:ngm:class:compute-infrastructure
  - urn:ngm:class:gpu-cluster
relatedTo:
  - urn:ngm:class:gpu
  - urn:ngm:class:tpu
  - urn:ngm:class:nvidia-corporation
  - urn:ngm:class:nvlink
---

# AI Accelerator

An AI accelerator is a class of specialised hardware designed to speed up machine learning workloads, particularly the dense linear algebra of neural network training and inference. Common forms include GPUs, tensor processing units, neural processing units, and custom application-specific integrated circuits that exploit massive parallelism, reduced-precision arithmetic, and high-bandwidth memory. By offloading matrix and tensor operations from general-purpose CPUs, AI accelerators deliver order-of-magnitude gains in throughput and energy efficiency for deep learning.
