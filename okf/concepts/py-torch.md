---
okf_version: "0.2"
type: Class
title: PyTorch
resource: urn:ngm:class:py-torch
domain: ai
description: PyTorch is an open-source deep learning framework developed by Meta AI Research that provides a dynamic computation graph, automatic differentiation via autograd, and tight integration with Python for flexible model development and research. It has become the dominant framework in academic machine learning research and is widely used in production via TorchServe and TorchScript. PyTorch's tensor o
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:machine-learning-discipline-framework
requires:
  - urn:ngm:class:cuda
  - urn:ngm:class:gpu-compute
enables:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:neural-network
uses:
  - urn:ngm:class:python-pytorch-deep-learning-stack
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:batch-processing
supports:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:parameter-efficient-fine-tuning
relatedTo:
  - urn:ngm:class:open-source-framework
  - urn:ngm:class:generative-ai
  - urn:ngm:class:large-scale-pretrained-foundation-model
---

# PyTorch

PyTorch is an open-source deep learning framework developed by Meta AI Research that provides a dynamic computation graph, automatic differentiation via autograd, and tight integration with Python for flexible model development and research. It has become the dominant framework in academic machine learning research and is widely used in production via TorchServe and TorchScript. PyTorch's tensor operations are GPU-accelerated through CUDA, and its ecosystem encompasses libraries such as TorchVision, TorchAudio, and PyTorch Lightning.
