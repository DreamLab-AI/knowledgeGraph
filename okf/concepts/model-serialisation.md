---
okf_version: "0.2"
type: Class
title: Model Serialisation
resource: urn:ngm:class:model-serialisation
domain: artificial-intelligence
description: Model serialisation is the process of converting a trained machine learning model — including its architecture definition, learned weights, and associated metadata — into a persistent, portable file format that can be stored, transferred, and subsequently loaded to restore the model to an operational state. Serialisation enables reproducibility, deployment across different environments, and sharin
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:ai-infrastructure
hasPart:
  - urn:ngm:class:checkpoints
  - urn:ngm:class:model-metadata
  - urn:ngm:class:checkpoints
requires:
  - urn:ngm:class:data-format
  - urn:ngm:class:model-architecture
  - urn:ngm:class:weight-storage
enables:
  - urn:ngm:class:model-portability
  - urn:ngm:class:model-versioning
  - urn:ngm:class:inference-engine
dependsOn:
  - urn:ngm:class:storage-systems
  - urn:ngm:class:storage-systems
contrastsWith:
  - urn:ngm:class:just-in-time-compilation
uses:
  - urn:ngm:class:onnx
  - urn:ngm:class:safetensors
  - urn:ngm:class:pickle-format
supports:
  - urn:ngm:class:model-serving
  - urn:ngm:class:experiment-reproducibility
standardizedBy:
  - urn:ngm:class:onnx
relatedTo:
  - urn:ngm:class:model-deployment
  - urn:ngm:class:model-registry
  - urn:ngm:class:mlops
  - urn:ngm:class:transfer-learning
---

# Model Serialisation

Model serialisation is the process of converting a trained machine learning model — including its architecture definition, learned weights, and associated metadata — into a persistent, portable file format that can be stored, transferred, and subsequently loaded to restore the model to an operational state. Serialisation enables reproducibility, deployment across different environments, and sharing of pre-trained models through repositories. Common formats include ONNX for cross-framework portability, SafeTensors for security, PyTorch checkpoint files, and framework-native formats such as TensorFlow SavedModel.
