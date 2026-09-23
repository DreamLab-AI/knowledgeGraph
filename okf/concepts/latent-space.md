---
okf_version: "0.2"
type: Class
title: Latent Space
resource: urn:ngm:class:latent-space
domain: machine-learning
description: Latent space is a learned, typically lower-dimensional continuous space in which a model represents its inputs as vectors, positioning semantically similar inputs closer together. It is produced by an encoder or embedding process and is where operations such as interpolation, arithmetic and sampling are performed before a decoder network reconstructs or generates output in the original data space.
maturity: established
quality: 0.55
is-a:
  - urn:ngm:class:representation-learning
enables:
  - urn:ngm:class:creative-ai
  - urn:ngm:class:decoder-network
partOf:
  - urn:ngm:class:representation-learning
---

# Latent Space

Latent space is a learned, typically lower-dimensional continuous space in which a model represents its inputs as vectors, positioning semantically similar inputs closer together. It is produced by an encoder or embedding process and is where operations such as interpolation, arithmetic and sampling are performed before a decoder network reconstructs or generates output in the original data space. Creative AI systems exploit structure in latent space to generate novel, coherent outputs by sampling or navigating it directly.
