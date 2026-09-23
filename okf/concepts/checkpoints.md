---
okf_version: "0.2"
type: Class
title: Checkpoints
resource: urn:ngm:class:checkpoints
domain: artificial-intelligence
description: Checkpoints are serialised snapshots of a machine-learning model's complete trainable state — weight tensors, optimiser moment accumulators, learning-rate schedules, gradient scalers, random-number-generator seeds, and epoch/step counters — persisted to durable storage at regular intervals during...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:training
  - urn:ngm:class:model-serialisation
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:model-versioning
hasPart:
  - urn:ngm:class:learning-rate-schedule
  - urn:ngm:class:weight-tensor
  - urn:ngm:class:optimiser-state
  - urn:ngm:class:rng-state
  - urn:ngm:class:step-counter
  - urn:ngm:class:ema-shadow-weights
  - urn:ngm:class:shard-metadata
  - urn:ngm:class:checkpoint-index
requires:
  - urn:ngm:class:file-system
  - urn:ngm:class:persistent-storage
  - urn:ngm:class:serialisation-format
  - urn:ngm:class:training-loop
  - urn:ngm:class:model-architecture
  - urn:ngm:class:checkpoint-frequency-policy
enables:
  - urn:ngm:class:distributed-training
  - urn:ngm:class:empirical-experimental-design
  - urn:ngm:class:model-serving
  - urn:ngm:class:model-versioning
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:training-resumption
  - urn:ngm:class:checkpoint-averaging
  - urn:ngm:class:distributed-training
  - urn:ngm:class:empirical-experimental-design
dependsOn:
  - urn:ngm:class:distributed-training
  - urn:ngm:class:file-system
  - urn:ngm:class:serialisation
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:model-registry
  - urn:ngm:class:optimiser
implements:
  - urn:ngm:class:deep-speed
  - urn:ngm:class:fsdp
  - urn:ngm:class:hugging-face-hub
  - urn:ngm:class:mlflow
  - urn:ngm:class:py-torch
  - urn:ngm:class:safetensors
  - urn:ngm:class:tensor-flow
  - urn:ngm:class:weights-and-biases
  - urn:ngm:class:hugging-face-hub
contrastsWith:
  - urn:ngm:class:inference
  - urn:ngm:class:on-the-fly-training
  - urn:ngm:class:stateless-execution
  - urn:ngm:class:knowledge-distillation
bridgesTo:
  - urn:ngm:class:model-versioning
  - urn:ngm:class:ai-infrastructure
  - urn:ngm:class:blockchain
  - urn:ngm:class:federated-learning
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:quantum-computation-paradigm
uses:
  - urn:ngm:class:dvc
  - urn:ngm:class:fsdp
  - urn:ngm:class:gguf-format
  - urn:ngm:class:onnx
  - urn:ngm:class:pickle
  - urn:ngm:class:safetensors
  - urn:ngm:class:ze-ro
  - urn:ngm:class:savedmodel
  - urn:ngm:class:gguf-format
  - urn:ngm:class:zero
supports:
  - urn:ngm:class:mlops
  - urn:ngm:class:model-serving
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:diffusion-models
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:large-scale-pretrained-foundation-model
  - urn:ngm:class:large-language-models
  - urn:ngm:class:reinforcement-learning
standardizedBy:
  - urn:ngm:class:deep-speed
  - urn:ngm:class:hugging-face
  - urn:ngm:class:linux-foundation
  - urn:ngm:class:py-torch-foundation
  - urn:ngm:class:tensor-flow
  - urn:ngm:class:pytorch-foundation
relatedTo:
  - urn:ngm:class:dvc
  - urn:ngm:class:empirical-experimental-design-tracking
  - urn:ngm:class:hugging-face-hub
  - urn:ngm:class:mlflow
  - urn:ngm:class:model-registry
  - urn:ngm:class:onnx
  - urn:ngm:class:peft
  - urn:ngm:class:quantisation
  - urn:ngm:class:py-torch
  - urn:ngm:class:weights-and-biases
  - urn:ngm:class:lo-ra
  - urn:ngm:class:hugging-face-hub
  - urn:ngm:class:py-torch
  - urn:ngm:class:lo-ra
---

# Checkpoints

Checkpoints are serialised snapshots of a machine-learning model's complete trainable state — weight tensors, optimiser moment accumulators, learning-rate schedules, gradient scalers, random-number-generator seeds, and epoch/step counters — persisted to durable storage at regular intervals during...
