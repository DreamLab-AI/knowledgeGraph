---
okf_version: "0.2"
type: Class
title: On Device Ai
resource: urn:ngm:class:on-device-ai
domain: machine-learning
description: On-device AI is the execution of machine-learning inference, and increasingly some training, directly on an end-user device such as a phone, wearable or embedded sensor, rather than sending data to remote servers. Keeping computation local reduces latency, removes network dependence and improves privacy because raw data need not leave the device. It relies on model compression, quantisation and ha
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:edge-ai
requires:
  - urn:ngm:class:model-compression
  - urn:ngm:class:hardware-acceleration
  - urn:ngm:class:embedded-systems
enables:
  - urn:ngm:class:privacy-preserving-machine-learning
  - urn:ngm:class:inference
dependsOn:
  - urn:ngm:class:hardware-acceleration
contrastsWith:
  - urn:ngm:class:cloud-computing
bridgesTo:
  - urn:ngm:class:federated-learning
uses:
  - urn:ngm:class:model-optimization
  - urn:ngm:class:tiny-ml
  - urn:ngm:class:neural-network
supports:
  - urn:ngm:class:mobile-computing
  - urn:ngm:class:data-privacy
partOf:
  - urn:ngm:class:edge-computing
relatedTo:
  - urn:ngm:class:latency
  - urn:ngm:class:edge-ai
---

# On Device Ai

On-device AI is the execution of machine-learning inference, and increasingly some training, directly on an end-user device such as a phone, wearable or embedded sensor, rather than sending data to remote servers. Keeping computation local reduces latency, removes network dependence and improves privacy because raw data need not leave the device. It relies on model compression, quantisation and hardware acceleration to fit capable models within tight power, memory and compute budgets, and it is a cornerstone of edge AI and privacy-preserving machine learning.
