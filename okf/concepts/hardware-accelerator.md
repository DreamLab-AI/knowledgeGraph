---
okf_version: "0.2"
type: Class
title: Hardware Accelerator
resource: urn:ngm:class:hardware-accelerator
domain: machine-learning
description: A hardware accelerator is a specialised electronic device designed to perform a particular class of computation far more efficiently than a general-purpose central processing unit. By dedicating silicon to highly parallel arithmetic such as matrix multiplication, accelerators dramatically increase throughput and energy efficiency for workloads like neural network training and inference. Common for
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:hardware-acceleration
hasPart:
  - urn:ngm:class:gpu
  - urn:ngm:class:tpu
  - urn:ngm:class:fpga
  - urn:ngm:class:asic
requires:
  - urn:ngm:class:energy-efficiency
enables:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:model-training
dependsOn:
  - urn:ngm:class:compute-infrastructure
implements:
  - urn:ngm:class:hardware-acceleration
  - urn:ngm:class:parallel-computing
bridgesTo:
  - urn:ngm:class:parallel-computing
supports:
  - urn:ngm:class:inference-engine
  - urn:ngm:class:neural-network
partOf:
  - urn:ngm:class:compute-infrastructure
relatedTo:
  - urn:ngm:class:graphics-processing-unit
  - urn:ngm:class:inference
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Hardware Accelerator

A hardware accelerator is a specialised electronic device designed to perform a particular class of computation far more efficiently than a general-purpose central processing unit. By dedicating silicon to highly parallel arithmetic such as matrix multiplication, accelerators dramatically increase throughput and energy efficiency for workloads like neural network training and inference. Common forms include graphics processing units, tensor processing units, field-programmable gate arrays and application-specific integrated circuits.
