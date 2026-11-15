---
okf_version: "0.2"
type: Class
title: Gradient Compression
resource: urn:ngm:class:gradient-compression
domain: machine-learning
description: A family of communication-efficiency techniques for distributed and federated machine learning that reduce the volume of gradient data exchanged between workers during training, using quantisation to fewer bits, sparsification of small-magnitude entries, or low-rank decomposition, usually combined with error-feedback so the accumulated compression error is reapplied and convergence is preserved.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:data-compression
enables:
  - urn:ngm:class:federated-learning
uses:
  - urn:ngm:class:quantisation
partOf:
  - urn:ngm:class:distributed-training
relatedTo:
  - urn:ngm:class:gradient-aggregation
  - urn:ngm:class:data-parallelism
generated: {"by":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Gradient Compression

A family of communication-efficiency techniques for distributed and federated machine learning that reduce the volume of gradient data exchanged between workers during training, using quantisation to fewer bits, sparsification of small-magnitude entries, or low-rank decomposition, usually combined with error-feedback so the accumulated compression error is reapplied and convergence is preserved.
