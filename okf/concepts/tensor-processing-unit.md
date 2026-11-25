---
okf_version: "0.2"
type: Class
title: Tensor Processing Unit
resource: urn:ngm:class:tensor-processing-unit
domain: artificial-intelligence
description: A Tensor Processing Unit (TPU) is Google's custom application-specific integrated circuit (ASIC) designed to accelerate machine learning workloads, particularly tensor operations in deep neural network training and inference. Built around a systolic array architecture for highly efficient matrix multiplication, TPUs prioritise throughput and power efficiency over general-purpose flexibility, and h
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:inference-hardware
hasPart:
  - urn:ngm:class:systolic-array
  - urn:ngm:class:high-bandwidth-memory
  - urn:ngm:class:matrix-multiply-unit
requires:
  - urn:ngm:class:tensor-flow
  - urn:ngm:class:compiler
enables:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:deep-learning
  - urn:ngm:class:neural-network-inference
  - urn:ngm:class:transformer
dependsOn:
  - urn:ngm:class:bfloat16
  - urn:ngm:class:google-ai-technology-corporation-cloud
implements:
  - urn:ngm:class:asic
  - urn:ngm:class:matrix-multiplication
contrastsWith:
  - urn:ngm:class:graphics-processing-unit
  - urn:ngm:class:field-programmable-gate-array
  - urn:ngm:class:intelligence-processing-unit
bridgesTo:
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:edge-computing
uses:
  - urn:ngm:class:jax
  - urn:ngm:class:inter-chip-interconnect
supports:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:natural-language-processing
partOf:
  - urn:ngm:class:tpu-pod
  - urn:ngm:class:ai-infrastructure
relatedTo:
  - urn:ngm:class:neural-processing-unit
  - urn:ngm:class:model-parallelism
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Tensor Processing Unit

A Tensor Processing Unit (TPU) is Google's custom application-specific integrated circuit (ASIC) designed to accelerate machine learning workloads, particularly tensor operations in deep neural network training and inference. Built around a systolic array architecture for highly efficient matrix multiplication, TPUs prioritise throughput and power efficiency over general-purpose flexibility, and have been instrumental in training large-scale models such as BERT, PaLM, and Gemini.
