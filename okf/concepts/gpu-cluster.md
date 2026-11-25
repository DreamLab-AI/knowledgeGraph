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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# GPU Cluster

A GPU cluster is a group of interconnected computers each equipped with graphics processing units, used together for parallel computation. Such clusters are central to training large AI models and high-performance computing.
