---
okf_version: "0.2"
type: Class
title: Machine Learning Infrastructure
resource: urn:ngm:class:machine-learning-discipline-infrastructure
domain: machine-learning
description: Hardware and software systems that support machine learning workloads, including GPU clusters, cloud computing platforms, distributed storage systems, and orchestration tools required for training and deploying AI models at scale.
maturity: draft
quality: 0.68
is-a:
  - urn:ngm:class:ai-infrastructure
  - urn:ngm:class:computing-infrastructure
hasPart:
  - urn:ngm:class:gpu-cluster
  - urn:ngm:class:distributed-storage
  - urn:ngm:class:model-serving
requires:
  - urn:ngm:class:container-orchestration
  - urn:ngm:class:data-pipeline
enables:
  - urn:ngm:class:model-inference
  - urn:ngm:class:federated-learning
  - urn:ngm:class:scalable-ai-training
dependsOn:
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:gpu-computing
implements:
  - urn:ngm:class:mlops
contrastsWith:
  - urn:ngm:class:edge-computing
bridgesTo:
  - urn:ngm:class:computing-infrastructure
  - urn:ngm:class:data-centre
uses:
  - urn:ngm:class:kubernetes
  - urn:ngm:class:cuda
  - urn:ngm:class:object-storage
supports:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:deep-learning
  - urn:ngm:class:reinforcement-learning
partOf:
  - urn:ngm:class:ai-infrastructure
relatedTo:
  - urn:ngm:class:hyperscale-computing
  - urn:ngm:class:tensor-processing-unit
---

# Machine Learning Infrastructure

Hardware and software systems that support machine learning workloads, including GPU clusters, cloud computing platforms, distributed storage systems, and orchestration tools required for training and deploying AI models at scale.
