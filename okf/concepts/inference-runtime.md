---
okf_version: "0.2"
type: Class
title: Inference Runtime
resource: urn:ngm:class:inference-runtime
domain: artificial-intelligence
description: An inference runtime is the software layer that loads a trained machine-learning model and executes its forward pass to produce predictions on new inputs. It schedules computation across CPUs, GPUs or accelerators, applies graph optimisations such as operator fusion and quantisation, and manages memory, batching and concurrency for low-latency serving. Inference runtimes are the execution engine b
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:ai-infrastructure
hasPart:
  - urn:ngm:class:onnx
  - urn:ngm:class:model-serving
requires:
  - urn:ngm:class:gpu
  - urn:ngm:class:model-deployment
enables:
  - urn:ngm:class:inference
  - urn:ngm:class:edge-computing
dependsOn:
  - urn:ngm:class:neural-network
implements:
  - urn:ngm:class:inference
contrastsWith:
  - urn:ngm:class:model-training
uses:
  - urn:ngm:class:onnx
  - urn:ngm:class:container
supports:
  - urn:ngm:class:model-serving
  - urn:ngm:class:model-deployment
partOf:
  - urn:ngm:class:ai-system
relatedTo:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:edge-computing
---

# Inference Runtime

An inference runtime is the software layer that loads a trained machine-learning model and executes its forward pass to produce predictions on new inputs. It schedules computation across CPUs, GPUs or accelerators, applies graph optimisations such as operator fusion and quantisation, and manages memory, batching and concurrency for low-latency serving. Inference runtimes are the execution engine beneath model-serving infrastructure.
