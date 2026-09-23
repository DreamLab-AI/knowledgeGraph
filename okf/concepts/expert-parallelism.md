---
okf_version: "0.2"
type: Class
title: Expert Parallelism
resource: urn:ngm:class:expert-parallelism
domain: machine-learning
description: Expert parallelism is a distributed-training strategy for mixture-of-experts models that places different expert sub-networks on different accelerators and routes each token to its selected experts via all-to-all communication. Because only a sparse subset of experts is activated per token, expert parallelism scales total parameter count without a proportional rise in per-token compute. It is typi
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:model-parallelism
  - urn:ngm:class:distributed-training
  - urn:ngm:class:ai-infrastructure
hasPart:
  - urn:ngm:class:routing-network
  - urn:ngm:class:all-to-all-communication
  - urn:ngm:class:sparse-activation
  - urn:ngm:class:capacity-factor
  - urn:ngm:class:auxiliary-load-balancing-loss
  - urn:ngm:class:token-dispatch-tensor
  - urn:ngm:class:expert-combine-operation
requires:
  - urn:ngm:class:gpu-cluster
  - urn:ngm:class:load-balancing
  - urn:ngm:class:high-speed-interconnect
  - urn:ngm:class:collective-communication
  - urn:ngm:class:routing-network
  - urn:ngm:class:nvidia-nccl
enables:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:foundation-model
  - urn:ngm:class:trillion-parameter-model
  - urn:ngm:class:sparse-language-model
  - urn:ngm:class:conditional-computation
dependsOn:
  - urn:ngm:class:model-parallelism
  - urn:ngm:class:all-to-all-communication
  - urn:ngm:class:collective-communication
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:nvidia-nccl
implements:
  - urn:ngm:class:mixture-of-experts-architecture
  - urn:ngm:class:mixture-of-experts
  - urn:ngm:class:sparse-activation
  - urn:ngm:class:conditional-computation
  - urn:ngm:class:token-routing
contrastsWith:
  - urn:ngm:class:tensor-parallelism
  - urn:ngm:class:data-parallelism
  - urn:ngm:class:pipeline-parallelism
  - urn:ngm:class:dense-model-training
bridgesTo:
  - urn:ngm:class:distributed-training
uses:
  - urn:ngm:class:sparse-activation
  - urn:ngm:class:collective-communication
  - urn:ngm:class:deep-speed
  - urn:ngm:class:megatron-core
  - urn:ngm:class:py-torch
  - urn:ngm:class:deepep
supports:
  - urn:ngm:class:distributed-training
  - urn:ngm:class:deep-learning
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:large-language-models
standardizedBy:
  - urn:ngm:class:mlcommons
  - urn:ngm:class:nvidia-nccl
partOf:
  - urn:ngm:class:distributed-training
relatedTo:
  - urn:ngm:class:pipeline-parallelism
  - urn:ngm:class:model-parallelism
  - urn:ngm:class:data-parallelism
  - urn:ngm:class:tensor-parallelism
  - urn:ngm:class:zero-redundancy-optimiser
  - urn:ngm:class:gradient-checkpointing
  - urn:ngm:class:mixed-precision-training
  - urn:ngm:class:scaling-laws
  - urn:ngm:class:nvlink
---

# Expert Parallelism

Expert parallelism is a distributed-training strategy for mixture-of-experts models that places different expert sub-networks on different accelerators and routes each token to its selected experts via all-to-all communication. Because only a sparse subset of experts is activated per token, expert parallelism scales total parameter count without a proportional rise in per-token compute. It is typically combined with data, tensor, and pipeline parallelism, and its efficiency hinges on balanced routing and low-latency interconnects.
