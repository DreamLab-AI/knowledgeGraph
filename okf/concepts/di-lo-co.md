---
okf_version: "0.2"
type: Class
title: DiLoCo
resource: urn:ngm:class:di-lo-co
domain: ai
description: DiLoCo (Distributed Low-Communication training) is a method for training large language models across loosely connected, geographically distributed compute clusters with minimal inter-node communication. Workers perform many local optimisation steps before periodically synchronising via an outer optimiser, drastically reducing the bandwidth and latency demands of conventional data-parallel trainin
maturity: active-research
quality: 0.95
is-a:
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:distributed-ai-training
  - urn:ngm:class:federated-learning
  - urn:ngm:class:distributed-training
hasPart:
  - urn:ngm:class:local-sgd
  - urn:ngm:class:pseudo-gradient-aggregation
  - urn:ngm:class:collective-communication
  - urn:ngm:class:checkpoint-recovery
  - urn:ngm:class:gradient-compression
  - urn:ngm:class:synchronisation-barrier
  - urn:ngm:class:global-model-broadcast
requires:
  - urn:ngm:class:adam-optimiser
  - urn:ngm:class:collective-communication
  - urn:ngm:class:checkpoint-recovery
  - urn:ngm:class:nesterov-momentum
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:large-language-models
  - urn:ngm:class:bandwidth-optimization
enables:
  - urn:ngm:class:decentralised-ai
  - urn:ngm:class:compute-democratisation
  - urn:ngm:class:collaborative-model-ownership
  - urn:ngm:class:federated-edge-learning
  - urn:ngm:class:model-training
  - urn:ngm:class:decentralised-science
  - urn:ngm:class:internet-scale-training
dependsOn:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:collective-communication
  - urn:ngm:class:adam-optimiser
  - urn:ngm:class:asynchronous-communication
  - urn:ngm:class:communication-protocol
implements:
  - urn:ngm:class:local-sgd
  - urn:ngm:class:federated-learning
  - urn:ngm:class:data-parallelism
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:nesterov-momentum
contrastsWith:
  - urn:ngm:class:synchronous-data-parallelism
  - urn:ngm:class:centralised-training
  - urn:ngm:class:pipeline-parallelism
  - urn:ngm:class:tensor-parallelism
  - urn:ngm:class:zero-sharding
uses:
  - urn:ngm:class:adam-optimiser
  - urn:ngm:class:nesterov-momentum
  - urn:ngm:class:collective-communication
  - urn:ngm:class:gradient-compression
  - urn:ngm:class:checkpoint-recovery
  - urn:ngm:class:bandwidth-optimization
  - urn:ngm:class:communication-protocol
  - urn:ngm:class:asynchronous-communication
supports:
  - urn:ngm:class:prime-intellect
  - urn:ngm:class:model-training
  - urn:ngm:class:decentralised-science
  - urn:ngm:class:compute-exchange
  - urn:ngm:class:bittensor
  - urn:ngm:class:collaborative-systems-modality
  - urn:ngm:class:federated-edge-learning
standardizedBy:
  - urn:ngm:class:arxiv-preprint-standards
  - urn:ngm:class:apache-license-2-0
relatedTo:
  - urn:ngm:class:prime-intellect
  - urn:ngm:class:distributed-ai-training
  - urn:ngm:class:federated-learning
  - urn:ngm:class:bittensor
  - urn:ngm:class:asynchronous-rl
  - urn:ngm:class:gradient-compression
  - urn:ngm:class:communication-protocol
  - urn:ngm:class:bandwidth-optimization
  - urn:ngm:class:ai-energy-optimisation
  - urn:ngm:class:decentralised-ai
  - urn:ngm:class:federated-edge-learning
  - urn:ngm:class:distributed-training
  - urn:ngm:class:collective-communication
  - urn:ngm:class:asynchronous-communication
  - urn:ngm:class:adam-optimiser
  - urn:ngm:class:ai-energy-scarcity
---

# DiLoCo

DiLoCo (Distributed Low-Communication training) is a method for training large language models across loosely connected, geographically distributed compute clusters with minimal inter-node communication. Workers perform many local optimisation steps before periodically synchronising via an outer optimiser, drastically reducing the bandwidth and latency demands of conventional data-parallel training. It enables collaborative model training over the public internet rather than within a single tightly coupled datacentre.
