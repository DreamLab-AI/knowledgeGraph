---
okf_version: "0.2"
type: Class
title: Matrix Multiplication
resource: urn:ngm:class:matrix-multiplication
domain: machine-learning
description: Matrix multiplication is the binary operation that combines two matrices to produce a third, where each entry of the result is the dot product of a row of the first matrix with a column of the second. It is the fundamental computational primitive of linear algebra and the dominant operation in deep learning, where dense layers, attention and convolutions all reduce to large matrix or tensor produc
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:linear-algebra
requires:
  - urn:ngm:class:hardware-acceleration
enables:
  - urn:ngm:class:neural-network
  - urn:ngm:class:deep-learning
  - urn:ngm:class:transformer
  - urn:ngm:class:backpropagation
dependsOn:
  - urn:ngm:class:gpu-acceleration
implements:
  - urn:ngm:class:convolution
  - urn:ngm:class:multi-head-attention
  - urn:ngm:class:self-attention
uses:
  - urn:ngm:class:tensor-processing-unit
  - urn:ngm:class:tpu
  - urn:ngm:class:gpu
supports:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:embedding
partOf:
  - urn:ngm:class:linear-algebra
---

# Matrix Multiplication

Matrix multiplication is the binary operation that combines two matrices to produce a third, where each entry of the result is the dot product of a row of the first matrix with a column of the second. It is the fundamental computational primitive of linear algebra and the dominant operation in deep learning, where dense layers, attention and convolutions all reduce to large matrix or tensor products executed on parallel hardware such as GPUs and TPUs.
