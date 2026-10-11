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
  - urn:ngm:class:ai-infrastructure
hasPart:
  - urn:ngm:class:python-programming-language
requires:
  - urn:ngm:class:cuda
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:numpy
enables:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:neural-network
  - urn:ngm:class:model-training
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:computer-vision
  - urn:ngm:class:transfer-learning
contrastsWith:
  - urn:ngm:class:tensor-flow
  - urn:ngm:class:jax
bridgesTo:
  - urn:ngm:class:robotics
  - urn:ngm:class:spatial-computing
uses:
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:batch-processing
  - urn:ngm:class:machine-learning-discipline-framework
  - urn:ngm:class:hugging-face
supports:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:parameter-efficient-fine-tuning
relatedTo:
  - urn:ngm:class:open-source-framework
  - urn:ngm:class:generative-ai
  - urn:ngm:class:foundation-model
  - urn:ngm:class:model-inference
---

# PyTorch

PyTorch is an open-source deep learning framework developed by Meta AI Research that provides a dynamic computation graph, automatic differentiation via autograd, and tight integration with Python for flexible model development and research. It has become the dominant framework in academic machine learning research and is widely used in production via TorchServe and TorchScript. PyTorch's tensor operations are GPU-accelerated through CUDA, and its ecosystem encompasses libraries such as TorchVision, TorchAudio, and PyTorch Lightning.
