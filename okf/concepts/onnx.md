---
okf_version: "0.2"
type: Class
title: ONNX
resource: urn:ngm:class:onnx
domain: ai
description: ONNX (Open Neural Network Exchange) is an open, vendor-neutral interchange format and operator specification for representing machine learning models as directed acyclic computation graphs serialised via Protocol Buffers, enabling trained models to be exported from one deep learning framework (e.g. PyTorch, TensorFlow, MXNet) and executed on any compatible runtime or hardware accelerator without r
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:interoperability-standard
hasPart:
  - urn:ngm:class:onnx-operator-set
  - urn:ngm:class:onnx-runtime
  - urn:ngm:class:onnx-model-zoo
requires:
  - urn:ngm:class:protocol-buffer
  - urn:ngm:class:computation-graph
  - urn:ngm:class:protobuf
enables:
  - urn:ngm:class:model-deployment
  - urn:ngm:class:hardware-acceleration
  - urn:ngm:class:model-optimization
  - urn:ngm:class:edge-inference
implements:
  - urn:ngm:class:open-standard
contrastsWith:
  - urn:ngm:class:tensorflow-savedmodel
  - urn:ngm:class:py-torch
bridgesTo:
  - urn:ngm:class:neural-processing-unit
  - urn:ngm:class:mlops
uses:
  - urn:ngm:class:deep-learning-framework
  - urn:ngm:class:quantisation
  - urn:ngm:class:graph-optimisation
supports:
  - urn:ngm:class:neural-network
  - urn:ngm:class:large-language-model
  - urn:ngm:class:transformer-architecture
relatedTo:
  - urn:ngm:class:model-serialisation
  - urn:ngm:class:inference-engine
  - urn:ngm:class:knowledge-distillation
---

# ONNX

ONNX (Open Neural Network Exchange) is an open, vendor-neutral interchange format and operator specification for representing machine learning models as directed acyclic computation graphs serialised via Protocol Buffers, enabling trained models to be exported from one deep learning framework (e.g. PyTorch, TensorFlow, MXNet) and executed on any compatible runtime or hardware accelerator without retraining. The ONNX ecosystem encompasses the format specification, versioned opset definitions, a model zoo of pretrained models, and the ONNX Runtime (ORT) inference engine with pluggable hardware execution providers. Originally co-created by Meta and Microsoft in 2017 and later adopted under Linux Foundation AI and Data governance, ONNX addresses framework fragmentation by providing a common intermediate representation (IR) that bridges the training-deployment gap in production ML systems. The specification supports standard neural network operations, control flow constructs, sparse tensors, dynamic shapes, and extended data types needed for large language model and on-device AI inference workloads.
