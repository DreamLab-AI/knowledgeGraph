---
okf_version: "0.2"
type: Class
title: Tensor Decomposition
resource: urn:ngm:class:tensor-decomposition
domain: machine-learning
description: Tensor decomposition factorises a multi-dimensional array, or tensor, into a combination of simpler, typically lower-rank components, such as in CP or Tucker decomposition, that approximate the original tensor while using far fewer parameters. It is used to compress large weight tensors in neural networks, revealing latent structure and reducing memory and compute cost. It is a key technique under
maturity: draft
quality: 0.55
is-a:
  - urn:ngm:class:tensor-computation
uses:
  - urn:ngm:class:tensor-computation
relatedTo:
  - urn:ngm:class:quantisation
---

# Tensor Decomposition

Tensor decomposition factorises a multi-dimensional array, or tensor, into a combination of simpler, typically lower-rank components, such as in CP or Tucker decomposition, that approximate the original tensor while using far fewer parameters. It is used to compress large weight tensors in neural networks, revealing latent structure and reducing memory and compute cost. It is a key technique underlying model quantisation and hardware-efficient inference pipelines.
