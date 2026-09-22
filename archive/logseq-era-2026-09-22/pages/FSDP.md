public:: true

# FSDP

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fsdp",
  "@type": "Page",
  "vc:slug": "fsdp",
  "title": "FSDP",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:distributed-training", "vc:label": "Distributed Training"},
    {"@id": "urn:visionflow:linked:checkpoints", "vc:label": "Checkpoints"},
    {"@id": "urn:visionflow:linked:data-parallelism", "vc:label": "Data Parallelism"},
    {"@id": "urn:visionflow:linked:model-parallelism", "vc:label": "Model Parallelism"},
    {"@id": "urn:visionflow:linked:zero-redundancy-optimiser", "vc:label": "ZeRO Redundancy Optimiser"},
    {"@id": "urn:visionflow:linked:deep-speed", "vc:label": "DeepSpeed"},
    {"@id": "urn:visionflow:linked:gpu-compute", "vc:label": "GPU Compute"},
    {"@id": "urn:visionflow:linked:collective-communication", "vc:label": "Collective Communication"},
    {"@id": "urn:visionflow:linked:gradient-checkpointing", "vc:label": "Gradient Checkpointing"},
    {"@id": "urn:visionflow:linked:mixed-precision-training", "vc:label": "Mixed Precision Training"},
    {"@id": "urn:visionflow:linked:large-language-models", "vc:label": "Large Language Models"},
    {"@id": "urn:visionflow:linked:pytorch", "vc:label": "PyTorch"},
    {"@id": "urn:visionflow:linked:megatron-lm", "vc:label": "Megatron-LM"},
    {"@id": "urn:visionflow:linked:pipeline-parallelism", "vc:label": "Pipeline Parallelism"},
    {"@id": "urn:visionflow:linked:tensor-parallelism", "vc:label": "Tensor Parallelism"},
    {"@id": "urn:visionflow:linked:gradient-synchronisation", "vc:label": "Gradient Synchronisation"},
    {"@id": "urn:visionflow:linked:nvidia-nccl", "vc:label": "NVIDIA NCCL"},
    {"@id": "urn:visionflow:linked:fine-tuning", "vc:label": "Fine-tuning"},
    {"@id": "urn:visionflow:linked:foundation-model", "vc:label": "Foundation Model"},
    {"@id": "urn:visionflow:linked:torchtitan", "vc:label": "TorchTitan"}
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:fsdp",
  "@type": "Class",
  "label": "FSDP",
  "definition": "Fully Sharded Data Parallel (FSDP) is a distributed training technique implemented natively in PyTorch that shards a model's parameters, gradients, and optimizer states across multiple GPUs or nodes, enabling training of models too large for a single device's memory. Each worker holds only a fraction of every parameter tensor and gathers the full tensor on demand via all-gather collective operations before each layer's forward computation, immediately discarding the assembled tensor after use so that only the local shard is persistently stored. FSDP implements the ZeRO Stage 3 memory partitioning algorithm as a first-class PyTorch primitive, and integrates with sharded Distributed Checkpointing (DCP) so that each rank writes and reads its own parameter shard independently, enabling checkpoint resharding across different cluster topologies at load time.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:distributed-training", "label": "Distributed Training"},
    {"@id": "urn:ngm:class:cat-ai-infrastructure", "label": "AI Infrastructure"}
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:all-gather-collective", "label": "All-Gather Collective"},
      {"@id": "urn:ngm:class:reduce-scatter-collective", "label": "Reduce-Scatter Collective"},
      {"@id": "urn:ngm:class:sharded-parameter", "label": "Sharded Parameter"},
      {"@id": "urn:ngm:class:sharded-optimiser-state", "label": "Sharded Optimiser State"},
      {"@id": "urn:ngm:class:sharded-gradient", "label": "Sharded Gradient"},
      {"@id": "urn:ngm:class:distributed-checkpointing", "label": "Distributed Checkpointing"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:gpu-compute", "label": "GPU Compute"},
      {"@id": "urn:ngm:class:collective-communication", "label": "Collective Communication"},
      {"@id": "urn:ngm:class:gradient-synchronisation", "label": "Gradient Synchronisation"},
      {"@id": "urn:ngm:class:python-pytorch-deep-learning-stack", "label": "PyTorch"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:large-language-model-training", "label": "Large Language Model Training"},
      {"@id": "urn:ngm:class:foundation-model", "label": "Foundation Model"},
      {"@id": "urn:ngm:class:model-scaling", "label": "Model Scaling"},
      {"@id": "urn:ngm:class:checkpoint-resharding", "label": "Checkpoint Resharding"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:zero-stage-3", "label": "ZeRO Stage 3"},
      {"@id": "urn:ngm:class:data-parallelism", "label": "Data Parallelism"},
      {"@id": "urn:ngm:class:distributed-checkpointing", "label": "Distributed Checkpointing"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:distributed-computing", "label": "Distributed Computing"},
      {"@id": "urn:ngm:class:mixed-precision-training", "label": "Mixed Precision Training"},
      {"@id": "urn:ngm:class:backpropagation", "label": "Backpropagation"},
      {"@id": "urn:ngm:class:gradient-descent", "label": "Gradient Descent"},
      {"@id": "urn:ngm:class:nvidia-nccl", "label": "NVIDIA NCCL"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:python-pytorch-deep-learning-stack", "label": "PyTorch"},
      {"@id": "urn:ngm:class:gradient-checkpointing", "label": "Gradient Checkpointing"},
      {"@id": "urn:ngm:class:mixed-precision-training", "label": "Mixed Precision Training"},
      {"@id": "urn:ngm:class:safetensors", "label": "Safetensors"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"},
      {"@id": "urn:ngm:class:fine-tuning", "label": "Fine-tuning"},
      {"@id": "urn:ngm:class:reinforcement-learning-from-human-feedback", "label": "Reinforcement Learning from Human Feedback"},
      {"@id": "urn:ngm:class:checkpoints", "label": "Checkpoints"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:deep-speed", "label": "DeepSpeed"},
      {"@id": "urn:ngm:class:megatron-lm", "label": "Megatron-LM"},
      {"@id": "urn:ngm:class:distributed-data-parallel", "label": "Distributed Data Parallel"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:checkpoints", "label": "Checkpoints"},
      {"@id": "urn:ngm:class:distributed-computing", "label": "Distributed Computing"},
      {"@id": "urn:ngm:class:zero-redundancy-optimiser", "label": "ZeRO Redundancy Optimiser"},
      {"@id": "urn:ngm:class:torchtitan", "label": "TorchTitan"},
      {"@id": "urn:ngm:class:hugging-face-accelerate", "label": "Hugging Face Accelerate"},
      {"@id": "urn:ngm:class:pipeline-parallelism", "label": "Pipeline Parallelism"},
      {"@id": "urn:ngm:class:tensor-parallelism", "label": "Tensor Parallelism"},
      {"@id": "urn:ngm:class:model-parallelism", "label": "Model Parallelism"},
      {"@id": "urn:ngm:class:distributed-training", "label": "Distributed Training"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:fully-sharded-data-parallel", "label": "Fully Sharded Data Parallel"}
  ],
  "quality": 0.89,
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-21T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:fsdp:enriched2026",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {"@id": "urn:visionflow:page:fsdp"},
  "vc:resolutions": [
    {"raw": "[[Distributed Training]]", "resolved": "urn:visionflow:linked:distributed-training", "kind": "StubLink"},
    {"raw": "[[Checkpoints]]", "resolved": "urn:visionflow:linked:checkpoints", "kind": "StubLink"},
    {"raw": "[[Data Parallelism]]", "resolved": "urn:visionflow:linked:data-parallelism", "kind": "StubLink"},
    {"raw": "[[Model Parallelism]]", "resolved": "urn:visionflow:linked:model-parallelism", "kind": "StubLink"},
    {"raw": "[[ZeRO Redundancy Optimiser]]", "resolved": "urn:visionflow:linked:zero-redundancy-optimiser", "kind": "StubLink"},
    {"raw": "[[DeepSpeed]]", "resolved": "urn:visionflow:linked:deep-speed", "kind": "StubLink"},
    {"raw": "[[GPU Compute]]", "resolved": "urn:visionflow:linked:gpu-compute", "kind": "StubLink"},
    {"raw": "[[Collective Communication]]", "resolved": "urn:visionflow:linked:collective-communication", "kind": "StubLink"},
    {"raw": "[[Gradient Checkpointing]]", "resolved": "urn:visionflow:linked:gradient-checkpointing", "kind": "StubLink"},
    {"raw": "[[Mixed Precision Training]]", "resolved": "urn:visionflow:linked:mixed-precision-training", "kind": "StubLink"},
    {"raw": "[[Large Language Models]]", "resolved": "urn:visionflow:linked:large-language-models", "kind": "StubLink"},
    {"raw": "[[PyTorch]]", "resolved": "urn:visionflow:linked:pytorch", "kind": "StubLink"},
    {"raw": "[[Megatron-LM]]", "resolved": "urn:visionflow:linked:megatron-lm", "kind": "StubLink"},
    {"raw": "[[Pipeline Parallelism]]", "resolved": "urn:visionflow:linked:pipeline-parallelism", "kind": "StubLink"},
    {"raw": "[[Tensor Parallelism]]", "resolved": "urn:visionflow:linked:tensor-parallelism", "kind": "StubLink"},
    {"raw": "[[Gradient Synchronisation]]", "resolved": "urn:visionflow:linked:gradient-synchronisation", "kind": "StubLink"},
    {"raw": "[[NVIDIA NCCL]]", "resolved": "urn:visionflow:linked:nvidia-nccl", "kind": "StubLink"},
    {"raw": "[[Fine-tuning]]", "resolved": "urn:visionflow:linked:fine-tuning", "kind": "StubLink"},
    {"raw": "[[Foundation Model]]", "resolved": "urn:visionflow:linked:foundation-model", "kind": "StubLink"},
    {"raw": "[[TorchTitan]]", "resolved": "urn:visionflow:linked:torchtitan", "kind": "StubLink"}
  ],
  "prov:wasAttributedTo": {"@id": "did:nostr:enrichment-swarm"},
  "prov:generatedAtTime": {"@value": "2026-06-21T00:00:00Z", "@type": "xsd:dateTime"}
}
```

- ### Definition
  - Fully Sharded Data Parallel ([[FSDP]]) is a [[PyTorch]]-native [[Distributed Training]] technique that implements the [[ZeRO Redundancy Optimiser]] Stage 3 memory partitioning algorithm as a first-class framework primitive, sharding every model parameter tensor, its corresponding gradient tensor, and its associated [[Mixed Precision Training|optimiser]] state (Adam first and second moments plus FP32 master copy) across all data-parallel workers so that each rank persistently stores only a 1/N slice of the full model state, where N is the data-parallel world size. During the forward pass, the full parameter tensor for each module unit (FlatParameter or DTensor in FSDP2) is transiently reconstructed on every device via an all-gather collective operation from [[NVIDIA NCCL]], used for the local forward computation, and then immediately discarded so that only the shard is retained in [[GPU Compute]] memory; the backward pass mirrors this with a reduce-scatter collective to sum gradients across ranks and return each rank's gradient shard to its owning device. This all-gather-before-compute and reduce-scatter-after-backward pattern reduces per-device model state memory from O(N) — where standard [[Data Parallelism]] replicates the full model on every rank — to O(N/d) for d data-parallel ranks, enabling training of [[Large Language Models]] with tens to hundreds of billions of parameters on clusters where no single device could hold the full model. FSDP integrates natively with [[PyTorch]]'s autograd engine, [[Gradient Checkpointing|activation checkpointing]], [[Mixed Precision Training]], and the torch.distributed.checkpoint (DCP) API for sharded [[Checkpoints]], allowing each rank to write its parameter shard independently to a shared filesystem or object store and reload with flexible resharding at inference or fine-tuning time even when the target cluster has a different number of GPUs. FSDP2, released in [[PyTorch]] 2.3 and stabilised in PyTorch 2.6, replaced the FlatParameter sharding representation with a per-parameter DTensor representation, achieving improved composability with [[Tensor Parallelism]], [[Pipeline Parallelism]], and torch.compile, reducing per-GPU memory requirements by approximately 7% over FSDP1, and improving multi-node scaling efficiency for 70B and 405B parameter models to levels competitive with [[DeepSpeed]] ZeRO Stage 3 while eliminating the external dependency. [[TorchTitan]], Meta's reference implementation for production-scale [[Large Language Models]] pre-training, uses FSDP2 as its default 1D parallelism strategy and combines it with tensor and pipeline parallelism (4D parallelism) for models exceeding single-node capacity, using DCP-based asynchronous sharded checkpointing that reduces checkpoint overhead by five to fifteen times versus synchronous single-rank serialisation. FSDP's sharded checkpointing capability — the ability to save and restore training state across different cluster sizes — is its most practically distinctive feature relative to [[DeepSpeed]] ZeRO Stage 3, making it the preferred tool for workflows where models must move between training clusters of different sizes, between training and serving environments, or between pre-training and [[Fine-tuning]] stages with different degrees of parallelism.

- ### Semantic Classification
  - owl-class:: ml:FSDP
  - owl-role:: DistributedTrainingPrimitive | MemoryOptimisationSystem | ExecutableProtocol
  - owl-inferred:: ml:ZeROStage3Implementation, ml:ShardsDataParallelTraining, ml:CheckpointReshardingSystem, ml:PyTorchNativeParallelism
  - belongs-to-domain:: [[Distributed Training]], [[AI Infrastructure]], [[Machine Learning]]
  - implemented-in-layer:: [[InfrastructureLayer]], [[ComputeLayer]]

- ### Relationships
  - is-subclass-of:: [[Distributed Training]], [[Data Parallelism]], [[AI Infrastructure]], [[Machine Learning]]
  - has-part:: [[All-Gather Collective]], [[Reduce-Scatter Collective]], [[Sharded Parameter]], [[Sharded Optimiser State]], [[Sharded Gradient]], [[Distributed Checkpointing]], [[Gradient Synchronisation]]
  - requires:: [[GPU Compute]], [[Collective Communication]], [[Gradient Synchronisation]], [[PyTorch]], [[NVIDIA NCCL]], [[Mixed Precision Training]]
  - enables:: [[Large Language Models]], [[Foundation Model]], [[Model Scaling]], [[Checkpoint Resharding]], [[Fine-tuning]], [[Reinforcement Learning from Human Feedback]], [[Distributed Inference]]
  - implements:: [[ZeRO Redundancy Optimiser]], [[Data Parallelism]], [[Distributed Checkpointing]], [[Mixed Precision Training]], [[Gradient Checkpointing]]
  - depends-on:: [[Distributed Computing]], [[Mixed Precision Training]], [[Backpropagation]], [[Gradient Descent]], [[NVIDIA NCCL]], [[PyTorch]]
  - supports:: [[Deep Learning]], [[Fine-tuning]], [[Reinforcement Learning from Human Feedback]], [[Checkpoints]], [[Foundation Model]], [[Large Language Models]]
  - uses:: [[PyTorch]], [[Gradient Checkpointing]], [[Mixed Precision Training]], [[Safetensors]], [[NVIDIA NCCL]], [[Distributed Training]]
  - contrasts-with:: [[DeepSpeed]], [[Megatron-LM]], [[Distributed Data Parallel]], [[Horovod]], [[Pipeline Parallelism]]
  - related-to:: [[Checkpoints]], [[Distributed Computing]], [[ZeRO Redundancy Optimiser]], [[TorchTitan]], [[Hugging Face Accelerate]], [[Pipeline Parallelism]], [[Tensor Parallelism]], [[Model Parallelism]], [[Distributed Training]], [[DeepSpeed]], [[Gradient Checkpointing]], [[Isambard-AI]]
  - standardized-by:: [[PyTorch Foundation]], [[Meta AI Research]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ml:FSDP
        ObjectSomeValuesFrom(ml:hasPart ml:AllGatherCollective))
      SubClassOf(ml:FSDP
        ObjectSomeValuesFrom(ml:hasPart ml:ReduceScatterCollective))
      SubClassOf(ml:FSDP
        ObjectSomeValuesFrom(ml:hasPart ml:ShardedParameter))
      SubClassOf(ml:FSDP
        ObjectSomeValuesFrom(ml:hasPart ml:ShardedOptimiserState))
      SubClassOf(ml:FSDP
        ObjectSomeValuesFrom(ml:hasPart ml:ShardedGradient))
      SubClassOf(ml:FSDP
        ObjectSomeValuesFrom(ml:hasPart ml:DistributedCheckpointing))
      SubClassOf(ml:FSDP
        ObjectSomeValuesFrom(ml:hasPart ml:GradientSynchronisation))

  ## Dependency Relationships
      SubClassOf(ml:FSDP
        ObjectSomeValuesFrom(ml:requires ml:GPUCompute))
      SubClassOf(ml:FSDP
        ObjectSomeValuesFrom(ml:requires ml:CollectiveCommunication))
      SubClassOf(ml:FSDP
        ObjectSomeValuesFrom(ml:requires ml:GradientSynchronisation))
      SubClassOf(ml:FSDP
        ObjectSomeValuesFrom(ml:requires ml:PyTorch))
      SubClassOf(ml:FSDP
        ObjectSomeValuesFrom(ml:requires ml:NVIDIANCCL))
      SubClassOf(ml:FSDP
        ObjectSomeValuesFrom(ml:dependsOn ml:DistributedComputing))
      SubClassOf(ml:FSDP
        ObjectSomeValuesFrom(ml:dependsOn ml:Backpropagation))
      SubClassOf(ml:FSDP
        ObjectSomeValuesFrom(ml:dependsOn ml:GradientDescent))
      SubClassOf(ml:FSDP
        ObjectSomeValuesFrom(ml:dependsOn ml:MixedPrecisionTraining))

  ## Capability Relationships
      SubClassOf(ml:FSDP
        ObjectSomeValuesFrom(ml:enables ml:LargeLanguageModelTraining))
      SubClassOf(ml:FSDP
        ObjectSomeValuesFrom(ml:enables ml:FoundationModel))
      SubClassOf(ml:FSDP
        ObjectSomeValuesFrom(ml:enables ml:ModelScaling))
      SubClassOf(ml:FSDP
        ObjectSomeValuesFrom(ml:enables ml:CheckpointResharding))
      SubClassOf(ml:FSDP
        ObjectSomeValuesFrom(ml:enables ml:FineTuning))
      SubClassOf(ml:FSDP
        ObjectSomeValuesFrom(ml:supports ml:DeepLearning))
      SubClassOf(ml:FSDP
        ObjectSomeValuesFrom(ml:supports ml:ReinforcementLearningFromHumanFeedback))

  ## Implementation Relationships
      SubClassOf(ml:FSDP
        ObjectSomeValuesFrom(ml:implements ml:ZeROStage3))
      SubClassOf(ml:FSDP
        ObjectSomeValuesFrom(ml:implements ml:DataParallelism))
      SubClassOf(ml:FSDP
        ObjectSomeValuesFrom(ml:implements ml:DistributedCheckpointing))
      SubClassOf(ml:FSDP
        ObjectSomeValuesFrom(ml:implements ml:MixedPrecisionTraining))
      SubClassOf(ml:FSDP
        ObjectSomeValuesFrom(ml:uses ml:PyTorch))
      SubClassOf(ml:FSDP
        ObjectSomeValuesFrom(ml:uses ml:GradientCheckpointing))
      SubClassOf(ml:FSDP
        ObjectSomeValuesFrom(ml:uses ml:NVIDIANCCL))

  ## Reduction Relationships
      SubClassOf(ml:FSDP
        ObjectSomeValuesFrom(ml:reducesTo ml:DataParallelism))
      SubClassOf(ml:FSDP
        ObjectSomeValuesFrom(ml:reducesTo ml:DistributedTraining))
      SubClassOf(ml:FSDP
        ObjectSomeValuesFrom(ml:contrastsWith ml:DeepSpeed))
      SubClassOf(ml:FSDP
        ObjectSomeValuesFrom(ml:contrastsWith ml:DistributedDataParallel))
      SubClassOf(ml:FSDP
        ObjectSomeValuesFrom(ml:bridgesTo ml:TorchTitan))

  ## About

  FSDP (Fully Sharded Data Parallel) is [[PyTorch]]'s native answer to the memory problem that defines large-scale [[Deep Learning]] training: as [[Large Language Models]] and [[Foundation Model|foundation models]] have grown from tens of millions to hundreds of billions of parameters, the assumption underlying vanilla [[Data Parallelism]] — that each worker can hold a complete replica of the model — has become increasingly untenable. Standard [[Data Parallelism]] (as implemented in [[PyTorch]] DistributedDataParallel, DDP) replicates the full model on every device, uses ring-allreduce to aggregate gradients, and applies identical parameter updates to all replicas, achieving excellent scaling efficiency for models that fit in GPU memory. FSDP extends this paradigm to models that do not fit on a single device, replacing the replicated model with a sharded model where each worker holds only 1/d of each parameter tensor (for d data-parallel ranks) and uses all-gather operations to temporarily assemble full parameter tensors when needed for computation, immediately discarding the assembled tensors after use to reclaim memory.

  The intellectual heritage of FSDP traces directly to the ZeRO (Zero Redundancy Optimizer) algorithm introduced by Microsoft Research's DeepSpeed team (Rajbhandari et al., SC 2020). ZeRO's key insight was that standard data parallelism maintains three redundant copies of model state across all workers — optimiser states (8 bytes per parameter for Adam), gradients (4 bytes), and parameters (4 bytes in FP32 or 2 bytes in BF16) — and that partitioning these redundant copies across workers reduces per-device memory from 16Ψ bytes (for Ψ parameters) to 16Ψ/d bytes with only a 1.5× increase in total communication volume. Microsoft implemented ZeRO in [[DeepSpeed]], and FairScale (Meta's distributed training library, later superseded by FSDP) provided an early open-source implementation. [[PyTorch]] integrated a native FSDP implementation in version 1.12 (mid-2022, lead implementation by the Meta PyTorch team with contributions from Microsoft and Google), providing the same Stage 3 memory partitioning as ZeRO without requiring an external dependency, with tighter integration into [[PyTorch]]'s autograd engine, custom operators, and compile pipeline.

  The relationship between FSDP and [[DeepSpeed]] ZeRO Stage 3 is one of functional equivalence at the algorithm level but meaningful difference at the API and ecosystem level. Both implement the same gather-before-compute, scatter-after-backward communication pattern for parameter sharding. FSDP's advantages are: zero additional dependencies (it is part of [[PyTorch]] itself), better composability with [[PyTorch]] features including torch.compile, custom CUDA extensions, and per-module configuration, and native DCP-based sharded checkpointing that handles topology-flexible resharding without external conversion utilities. [[DeepSpeed]]'s advantages are: a more mature pipeline and [[Tensor Parallelism]] engine, ZeRO-Infinity for NVMe offloading, broader hardware backend support, and the complete [[DeepSpeed]] inference engine. The two frameworks have gradually converged: FSDP2 (PyTorch 2.3+) addresses most of FSDP's prior composability gaps, and Meta's [[TorchTitan]] now provides native 3D parallelism combining FSDP2, tensor parallelism, and pipeline parallelism in a unified configuration — the capability that previously required the [[DeepSpeed]] + [[Megatron-LM]] combination.

  The FSDP sharding implementation operates on the concept of a sharding unit: a contiguous chunk of parameters that is always sharded and gathered together. In FSDP1, the default sharding unit was the FlatParameter — a flattened concatenation of all parameters within one FSDP module wrapper, enabling large contiguous all-gather operations that amortise the per-call overhead of NCCL collective launches. In FSDP2, the per-parameter DTensor representation replaces FlatParameter, enabling each parameter to be independently sharded as a distributed tensor, significantly improving composability with [[Tensor Parallelism]] (which requires different sharding specifications for different parameters) and with torch.compile's graph capturing.

  ## Historical Development

  The lineage of FSDP within [[PyTorch]] spans several distinct implementation generations:

  - **2021 (Q2)**: FairScale library (Meta) ships OSS FSDP as an experimental PyTorch extension, closely following the ZeRO Stage 3 algorithm. Used internally at Meta for OPT model training.

  - **2022 (Q2, PyTorch 1.12)**: PyTorch FSDP integrated as `torch.distributed.fsdp`. Initial release establishes the FlatParameter-based sharding model, wrapping entire FSDP units. Published in the PyTorch FSDP systems paper (Zhao et al., VLDB 2023).

  - **2022 (Q4, PyTorch 1.13)**: FSDP stability improvements; `mixed_precision` argument added for native BF16/FP16 parameter and gradient casting; `cpu_offload` option for parameter offloading to CPU DRAM.

  - **2023 (Q1–Q3, PyTorch 2.0–2.1)**: torch.compile initial FSDP support (limited); `activation_checkpointing_policy` API for selective recomputation; sharded DCP (Distributed Checkpointing) stabilised for topology-flexible save/restore.

  - **2023 (Q4, PyTorch 2.2)**: FSDP + torch.compile improved composability; `forward_prefetch` for overlapping all-gather of next module with current module computation; `limit_all_gathers` option to control memory consumption from prefetching.

  - **2024 (Q1, PyTorch 2.3)**: FSDP2 lands as a new API (`torch.distributed._composable.fsdp`), using per-parameter DTensor representation. Composable with `torch.nn.parallel.DistributedDataParallel` and tensor-parallel modules via DTensor API. Average 7% lower per-GPU memory vs FSDP1; 1.5% average throughput improvement on LLaMA benchmarks.

  - **2024 (Q3, PyTorch 2.4–2.5)**: FSDP2 stabilised; HSDP2 (Hybrid Sharded Data Parallel) enables sharding within a node and replication across nodes, combining FSDP2's memory efficiency with DDP's communication efficiency for models in the 7B–30B range on multi-node clusters.

  - **2025 (PyTorch 2.6)**: FSDP2 fully replaces FSDP1 as the recommended path; FSDP1 deprecated but maintained. [[TorchTitan]] 1.0 released using FSDP2 as default 1D parallelism; torchft (fault-tolerant training) integration providing automatic node failure detection and replacement without full job restart.

  - **2026 (PyTorch 2.7+)**: SimpleFSDP — a graph-level FSDP variant implemented purely through graph transformations on the torch.compile FX graph, without custom FSDP module wrappers — enters experimental status, enabling FSDP semantics to be applied to arbitrary model architectures through compiler transformation rather than explicit module wrapping.

  ## Components / Architecture

  **Sharding Strategy**

  FSDP2 supports three sharding strategies selectable per module:

  - **FULL_SHARD** (ZeRO Stage 3): shards parameters, gradients, and optimiser states across all data-parallel ranks. Provides maximum memory reduction at the cost of all-gather traffic on both forward and backward passes.
  - **SHARD_GRAD_OP** (ZeRO Stage 2 equivalent): parameters are sharded only during the forward pass and gathered at the start of each training step; gradients and optimiser states are sharded. Reduces communication vs FULL_SHARD because parameters are kept gathered during the backward pass.
  - **NO_SHARD**: parameter replication (equivalent to DDP); no sharding overhead; used for small modules or the final layers of a model where the memory saving does not justify the communication overhead.
  - **HYBRID_SHARD** (HSDP2): Full shard within a node group (e.g. 8 GPUs per node), with DDP replication across node groups; exploits high intra-node NVLink bandwidth for sharding while using cheaper reduce-scatter instead of full all-gather for cross-node gradient aggregation.

  **Communication Primitives**

  FSDP communicates entirely through two [[NVIDIA NCCL]] collective operations:

  - **all-gather**: Before each module's forward pass (FULL_SHARD and SHARD_GRAD_OP), FSDP launches an NCCL all-gather to reconstruct the full parameter tensor from all shards. With `forward_prefetch=True`, the all-gather for the next module is overlapped with the current module's computation.
  - **reduce-scatter**: After each module's backward pass, FSDP launches an NCCL reduce-scatter to sum gradient shards and return each rank's portion of the summed gradient. This replaces the all-reduce used in standard DDP, producing the same aggregate result while distributing the output across ranks rather than replicating it.

  **Distributed Checkpointing (DCP)**

  `torch.distributed.checkpoint` (DCP), introduced in [[PyTorch]] 2.0 and stabilised in 2.3–2.5, is FSDP's native checkpointing backend. Key properties:

  - **Per-rank sharded writes**: Each rank saves its own DTensor shards independently, enabling fully parallel write throughput proportional to the number of ranks.
  - **Topology flexibility**: Metadata files record shard boundaries and shapes, enabling a checkpoint saved with d₁ ranks to be loaded with d₂ ranks (where d₂ ≠ d₁) via a resharding operation at load time. This is FSDP's most practically important differentiator from [[DeepSpeed]] ZeRO Stage 3 checkpointing.
  - **Async DCP**: [[TorchTitan]]'s asynchronous DCP offloads checkpoint serialisation to CPU threads, overlapping storage I/O with the next training step. This reduces checkpoint overhead from several minutes (for a 70B model) to tens of seconds, enabling more frequent checkpointing and faster recovery.
  - **Safetensors backend**: DCP supports writing shards as [[Safetensors]] files, enabling checkpoint shards to be loaded with standard HuggingFace tooling for evaluation, inference, or further fine-tuning outside the [[PyTorch]] training framework.

  **Memory Analysis**

  For a model with Ψ parameters trained with the Adam optimiser in BF16/FP32 mixed precision, FSDP FULL_SHARD on d devices achieves:

  | Component | No sharding (DDP) | FSDP (FULL_SHARD, d ranks) |
  |---|---|---|
  | BF16 parameters | 2Ψ bytes | 2Ψ/d bytes |
  | BF16 gradients | 2Ψ bytes | 2Ψ/d bytes |
  | FP32 master params | 4Ψ bytes | 4Ψ/d bytes |
  | Adam first moment | 4Ψ bytes | 4Ψ/d bytes |
  | Adam second moment | 4Ψ bytes | 4Ψ/d bytes |
  | Total model state | 16Ψ bytes | 16Ψ/d bytes |
  | Peak transient (forward) | +2Ψ bytes (gathered params) | — (discarded immediately) |

  At d=64, FSDP reduces model state memory from 16Ψ to 0.25Ψ bytes — a 64× reduction enabling training of models at 64× the scale of what DDP supports on the same hardware. For a 70B parameter model (Llama 3 70B), this means approximately 1.12 TB of model state in DDP versus 17.5 GB in FSDP with d=64, fitting comfortably on a single 80 GB H100 GPU's local shard.

  Communication volume per training step for FSDP FULL_SHARD is 3Ψ × (d-1)/d × 2 bytes ≈ 3Ψ × 2 bytes = 6Ψ bytes total across all ranks (all-gather forward: 2Ψ bytes; all-gather backward: 2Ψ bytes; reduce-scatter: 2Ψ bytes), compared to 4Ψ bytes for DDP all-reduce (ring-allreduce is 2(d-1)/d × Ψ × 2 bytes ≈ 4Ψ bytes). FSDP thus imposes approximately 1.5× the communication volume of DDP, consistent with the ZeRO Stage 3 theoretical analysis.

  ## Use Cases / Major Families

  **Fine-tuning 7B–70B Parameter Models (Single Node)**

  The most common practical use of FSDP is fine-tuning pre-trained open-weight models (Llama 3, Mistral, Qwen) on 8-GPU nodes where the model does not fit on a single GPU in full precision. FSDP FULL_SHARD with BF16 parameters and activation checkpointing enables full fine-tuning of Llama 3 70B on a single 8×H100 80GB server (640 GB aggregate VRAM), with each GPU holding approximately 17.5 GB of model state. This use case dominates academic and enterprise adoption of FSDP.

  **Pre-training 70B–405B Parameter Models (Multi-Node)**

  [[TorchTitan]] uses FSDP2 in combination with [[Tensor Parallelism]] and [[Pipeline Parallelism]] for pre-training Llama 3.1 405B on 8–512 GPU configurations. The reference [[TorchTitan]] configuration for Llama 3.1 405B uses FSDP2 with FULL_SHARD across 64 data-parallel ranks, 8-way tensor parallelism within each 8-GPU NVLink node, and 8-way pipeline parallelism across node groups — forming a 64×8×8 = 4,096 GPU 3D parallelism configuration. FSDP2's DTensor representation enables correct gradient accumulation and parameter updates across the combined data-parallel and tensor-parallel sharding.

  **RLHF and Post-Training Alignment**

  Post-training alignment via [[Reinforcement Learning from Human Feedback]] (RLHF) requires managing multiple models simultaneously (actor, reference, reward, critic) with a combined parameter count several times that of any individual model. FSDP's per-module sharding configuration enables different FSDP strategies for each model in the RLHF loop: the frozen reference model can use SHARD_GRAD_OP (no gradient storage), the actor uses FULL_SHARD with gradient accumulation, and the reward model uses NO_SHARD if it is small enough to fit in replicated GPU memory. TRL (Transformers Reinforcement Learning, Hugging Face), OpenRLHF, and Meta's RLHF pipelines use FSDP as the primary distributed training primitive for post-training workflows.

  **Distributed Inference Preparation (Checkpoint Resharding)**

  A distinctive FSDP use case is checkpoint resharding for inference deployment. A model pre-trained with FSDP on 512 GPUs (with each GPU holding Ψ/512 of each parameter) must be converted to inference format for deployment on 1, 2, or 8 GPUs. DCP's topology-flexible resharding enables loading the 512-shard checkpoint with any target number of ranks, reconstructing the full model without requiring a separate offline conversion step or sufficient CPU DRAM to hold the full 512×(Ψ/512) assembled model.

  **Fault-Tolerant Training with TorchFT**

  [[TorchTitan]]'s integration with torchft (PyTorch fault-tolerant training) implements HSDP2-based fault tolerance: when a node fails, the remaining nodes' FSDP shards can continue training without the failed rank by treating the node group containing the failed rank as a DDP replica group that has temporarily lost one member. The surviving node's DDP replica serves as the fault-tolerant continuation, pending restart of the failed node. This fault model — enabled by HSDP2's combination of intra-group sharding with inter-group replication — tolerates individual node failures without full job restart.

  ## Academic Context

  FSDP's academic lineage connects [[PyTorch]] distributed training engineering with the systems research tradition of the SC (Supercomputing) and VLDB conferences. The foundational ZeRO paper (Rajbhandari et al., SC 2020) established the theoretical memory analysis that FSDP implements; the PyTorch FSDP paper (Zhao et al., VLDB 2023) provides the systems-level implementation analysis including communication overlap strategies, bucketing policies, and performance benchmarks on industrial-scale models.

  FairScale, the Meta project that preceded FSDP's integration into [[PyTorch]], implemented OSS FSDP as part of the OPT-175B training infrastructure (Zhang et al., 2022). The OPT paper documented FSDP's role in enabling the training of a 175B parameter model with a smaller GPU fleet than GPT-3 used, making OPT one of the first open-source replication attempts for a frontier language model.

  The SimpleFSDP approach (Gu et al., arXiv 2411.00284, 2024) represents a research-driven reimplementation of FSDP semantics at the compiler graph level using torch.compile FX transformations rather than custom module wrappers. SimpleFSDP demonstrates that the all-gather-reduce-scatter communication pattern of FSDP can be expressed as pure graph transformations on the model's computation graph, opening the path to hardware-agnostic FSDP implementations that do not depend on NCCL directly.

  Research on gradient compression in the context of FSDP-sharded training — including LoCo (Low-Bit Communication Adaptor, arXiv 2407.04480, 2024) and TAGC (Transformer-Aware Gradient Compression, 2025) — addresses the observation that FSDP's 3Ψ communication volume (1.5× DDP) can become a bottleneck on clusters with heterogeneous bandwidth. These techniques apply lossy or lossless gradient compression to the reduce-scatter collective, potentially reducing FSDP's communication overhead to below DDP's baseline at the cost of minor convergence degradation.

  Key research institutions active in FSDP development and application: Meta AI Research (core [[PyTorch]] FSDP implementation and [[TorchTitan]]); Microsoft Research (ZeRO algorithm and [[DeepSpeed]], which FSDP implements); University of Edinburgh (applied FSDP for scientific machine learning on ARCHER2); Imperial College London (biomedical foundation model training with FSDP on national compute); and Carnegie Mellon University Systems Group (distributed training systems theory and benchmark analysis).

  ## Current Landscape (2026)

  As of mid-2026, FSDP2 is the recommended distributed training API for [[PyTorch]]-based training in the 7B–405B parameter range on GPU clusters of 8–512+ GPUs. FSDP1 is deprecated but maintained. [[TorchTitan]] 1.0 represents the state-of-the-art in PyTorch-native pre-training, combining FSDP2 (1D data parallelism), [[Tensor Parallelism]] (TP), [[Pipeline Parallelism]] (PP), and context parallelism (CP) into a 4D parallelism framework with composable APIs, reference training recipes for LLaMA 3 and Gemma 2 model families, and DCP-based async sharded checkpointing.

  The competitive landscape in 2026 positions FSDP2 as the preferred choice for PyTorch-native teams, [[DeepSpeed]] ZeRO Stage 3 as the choice when ZeRO-Infinity (NVMe offloading) or more mature pipeline parallelism is required, and [[Megatron-LM]] / Megatron-Core as the choice for NVIDIA-hardware frontier pre-training at maximum throughput. [[Hugging Face Accelerate]] wraps all three backends under a common API, enabling research groups to switch between FSDP2, DeepSpeed, and DDP without code changes.

  SimpleFSDP (arXiv 2411.00284) represents a significant research direction: by implementing FSDP semantics as a torch.compile graph transformation, it enables FSDP to work on models written in any [[PyTorch]] style (including models that use custom CUDA extensions or non-standard module structures) without manual FSDP wrapping, and potentially to run on non-CUDA hardware backends through XLA or other compiler backends.

  The NVIDIA Blackwell GB200 NVL72 architecture (shipping through 2025–2026) substantially changes FSDP's communication efficiency characteristics by providing 57.6 TB/s total NVLink bandwidth across 72 GPUs in a flat fabric — enabling FSDP with d=72 on a single rack with NVLink bandwidth comparable to intra-node NVLink on prior-generation clusters, eliminating the InfiniBand bandwidth bottleneck for the all-gather and reduce-scatter operations up to 72-rank FSDP configurations.

  Fault-tolerant FSDP (via torchft integration with HSDP2) is emerging as a standard feature for frontier training runs, motivated by the observation that a cluster of 10,000 GPUs faces an expected hardware failure event approximately every 5 wall-clock hours, making the ability to continue training through node failures without full job restart an operational necessity for multi-week pre-training runs.

  ## UK Context

  FSDP is actively deployed at all major UK national AI compute facilities. **Isambard-AI** at the University of Bristol — 5,400 NVIDIA GH200 Grace Hopper Superchips, launched July 2025 — supports [[PyTorch]] FSDP2 and [[TorchTitan]] workflows for UK academic and industry users under the AI Research Resource (AIRR) programme. The GH200's NVLink-C2C (Chip-to-Chip) interconnect between the Grace CPU and Hopper GPU reduces PCIe bottlenecks for FSDP's CPU offloading operations and checkpoint serialisation, making ZeRO-Offload-style CPU-tier parameter offloading more efficient than on conventional GPU servers. AIRR access opened in July 2025, with awards of up to 1 million GPU-hours for AI research projects including distributed foundation model training.

  **JADE-2** (Joint Academic Data science Endeavour 2), operating at the University of Oxford and funded by EPSRC, provides a 63-node NVIDIA DGX A100 system (504 × 80GB A100 GPUs) for UK academic [[Deep Learning]] training. FSDP is one of the primary distributed training frameworks supported on JADE-2, used by groups at University of Edinburgh (Language Technology Group, biomedical NLP), University College London (Medical Physics and Biomedical Engineering, large-scale medical imaging models), University of Manchester (natural language processing and knowledge graph completion), and Imperial College London (clinical AI and drug discovery foundation models).

  **Baskerville** at the University of Birmingham (192 × 80GB A100 GPUs, 24 nodes) and **Sulis** at the University of Warwick (168 × 40GB A100 GPUs) serve as smaller national facilities where FSDP FULL_SHARD is the primary mechanism for enabling 30B–70B parameter model fine-tuning within the VRAM constraints of their GPU configurations.

  **University of Edinburgh** EPCC (Edinburgh Parallel Computing Centre) has published FSDP training guides and ARCHER2-compatible distributed training tutorials covering FSDP configuration, NCCL environment variables for InfiniBand, and sharded checkpoint management, serving UK academic users who lack distributed training systems expertise.

  **Alan Turing Institute** projects on federated biomedical model training (NHS Secure Data Environment programme) explore the connection between FSDP sharded parameter updates and federated gradient aggregation — specifically whether FSDP's reduce-scatter communication pattern can be adapted for privacy-preserving distributed fine-tuning across geographically distributed NHS trusts without centralising patient data.

  **Graphcore** (Bristol), the UK AI hardware company, has worked on FSDP-equivalent memory partitioning for its Intelligence Processing Unit (IPU) architecture, demonstrating that the all-gather-reduce-scatter sharding pattern generalises to non-GPU accelerator architectures. Graphcore's research into FSDP-like sharding on IPUs informs the hardware-agnostic SimpleFSDP direction.

  Northern England's AI ecosystem — centered in Manchester and Leeds — benefits from JADE-2 allocations for larger training jobs and from FSDP's accessibility through [[Hugging Face Accelerate]] for research groups without dedicated GPU clusters, enabling FSDP fine-tuning workflows on shared university compute nodes.

  ## Future Directions (2026-2030)

  **SimpleFSDP and Compiler-Native Sharding**: The SimpleFSDP approach (pure graph transformation, no module wrappers) is expected to become the default FSDP path in [[PyTorch]] 3.x, enabling seamless application of FSDP sharding to any [[PyTorch]] model, including models using `torch.export`, JAX-to-PyTorch bridges, and third-party model zoo architectures without FSDP-specific modification.

  **NVLink Domain Expansion**: NVIDIA's NVLink roadmap (GB200 NVL72 → potential GX200 NVL144 or larger in future generations) is expanding the maximum FSDP world size achievable with NVLink bandwidth from 72 to potentially 144+ GPUs, reducing the bandwidth advantage of intra-node vs. inter-node communication and enabling larger FSDP world sizes without InfiniBand.

  **CXL-Augmented FSDP**: CXL (Compute Express Link) 3.0 memory pooling enables shared DRAM accessible across multiple servers, potentially enabling a new tier in FSDP's memory hierarchy between HBM and NVMe: CXL-attached pooled DRAM could serve as the parameter shard store for ranks that have insufficient local HBM for their FSDP slice, without the latency penalty of NVMe.

  **Float8 FSDP**: [[PyTorch]]'s Float8 training support (FP8 for activations and weights in attention and MLP layers, while maintaining BF16 for master weights) is being integrated with FSDP2 to enable FP8 all-gather communication, reducing communication volume by 2× vs. BF16 all-gather and approximately matching the communication volume of DDP all-reduce at the same model precision.

  **Federated FSDP**: Research on bridging FSDP's intra-cluster parameter sharding with [[Federated Learning]] across organisationally distinct sites (NHS trusts, financial institutions) is active at the Alan Turing Institute and Imperial College London. Federated FSDP would shard parameters within each site's local cluster using standard FSDP while federating only low-bandwidth adapter updates (LoRA, DoRA) between sites, combining FSDP's memory efficiency with federated learning's privacy guarantees.

  **Automated Topology Search**: [[TorchTitan]]'s 4D parallelism API (FSDP2 + TP + PP + CP) requires expert configuration of the world size allocation across parallelism dimensions. Automated topology search — profiling model memory and communication characteristics and selecting the optimal T×P×D×CP configuration for a given cluster topology — is an active research direction likely to reach production quality in 2027–2028.

  ## Formal Algorithms

  ### All-Gather-Before-Compute / Reduce-Scatter-After-Backward

  Given N ranks each holding parameter shard P_i (of size Ψ/N elements), the FSDP FULL_SHARD forward pass for one module layer proceeds as follows:

  1. **All-gather** (NCCL): Rank i receives shards P_j from all j ≠ i; assembles full parameter tensor P = concat(P_0, ..., P_{N-1}) of size Ψ elements. Communication: Ψ × (N-1)/N elements received per rank ≈ Ψ elements.

  2. **Forward computation**: Rank i computes layer output using the full assembled P and local input activation A_i. Computation: identical to standard forward pass; memory: P is held transiently during computation.

  3. **Discard gathered parameters**: After forward computation, rank i frees the assembled P, retaining only its shard P_i. Memory: returns to Ψ/N per rank.

  4. **Backward computation**: Rank i computes gradient of loss w.r.t. layer input (dL/dA_i) and gradient of loss w.r.t. parameters (dL/dP_i_full). During backward, a second all-gather re-assembles P for the module (necessary to compute dL/dA_i via the chain rule). Communication: second all-gather ≈ Ψ elements.

  5. **Reduce-scatter** (NCCL): Each rank contributes its local gradient tensor dL/dP (of size Ψ elements) to a reduce-scatter that sums all contributions and returns the summed gradient shard dL/dP_i (of size Ψ/N elements) to rank i. Communication: Ψ × (N-1)/N elements sent per rank ≈ Ψ elements.

  6. **Optimiser step**: Rank i applies the Adam update to P_i using the gradient shard dL/dP_i and its locally stored optimiser state (first and second moments for P_i), updating P_i in place without inter-rank communication.

  Total communication per layer per step: ≈ 3Ψ elements (2 all-gathers + 1 reduce-scatter), vs 2Ψ for DDP ring-allreduce. The 1.5× communication overhead is the cost of zero per-rank memory redundancy.

  ### Sharded Checkpoint Save / Restore

  FSDP DCP save protocol (with d₁ ranks, model parameters Ψ):

  1. Each rank i saves its DTensor shards {P_0_i, P_1_i, ..., P_L_i} (the i-th slice of each parameter tensor) to shard file `checkpoint_rank_{i}_of_{d1}.distcp` plus metadata file `checkpoint.metadata` containing tensor names, shapes, global dtypes, and shard offsets.

  DCP restore with d₂ ranks (d₂ ≠ d₁):

  2. All d₂ ranks read the metadata file to learn the full tensor shapes and the d₁ shard layout.
  3. Each rank j computes which shard files contain the elements of the parameter tensors that belong to its d₂-sized slice, and reads only those portions of the relevant d₁ shards (potentially reading partial shards from multiple d₁ rank files via byte-range requests).
  4. After resharding, each rank j holds its d₂-sized parameter slices, enabling training or inference to proceed immediately without assembling the full model on any single node.

  This topology-flexible resharding is FSDP's key advantage over [[DeepSpeed]] ZeRO Stage 3 checkpoints, which require offline conversion with the `zero_to_fp32.py` utility when changing the number of data-parallel ranks.

  ## Research and Literature

  1. Rajbhandari, S., Rasley, J., Ruwase, O., & He, Y. (2020). ZeRO: Memory optimizations toward training trillion parameter models. *Proceedings of SC '20*. https://arxiv.org/abs/1910.02054 (Foundational ZeRO algorithm that FSDP implements)

  2. Zhao, Y., Gu, A., Varma, R., Luo, L., Huang, C. C., Xu, L., Wright, L., Shojanazeri, H., Ott, M., Shleifer, S., & Sze, V. (2023). PyTorch FSDP: Experiences on scaling fully sharded data parallel. *Proceedings of VLDB 2023*. https://arxiv.org/abs/2304.11277

  3. Meta AI. (2022). Introducing PyTorch Fully Sharded Data Parallel (FSDP) API. *PyTorch Blog*. https://pytorch.org/blog/introducing-pytorch-fully-sharded-data-parallel-api/

  4. Gu, A., Zhao, Y., Gashkov, I., Zhang, R., Pupyrev, S., Feng, T., Xu, L., Shojanazeri, H., & Ott, M. (2024). SimpleFSDP: Simpler Fully Sharded Data Parallel with torch.compile. *arXiv:2411.00284*. https://arxiv.org/pdf/2411.00284

  5. Liu, Y., Hu, T., Feng, T., Wen, X., Zhao, Z., Zhao, Y., Gu, A., Gupta, A., Ho, J., & Lerer, A. (2024). TorchTitan: One-stop PyTorch native solution for production ready LLM pre-training. *arXiv:2410.06511*. https://arxiv.org/abs/2410.06511

  6. Rajbhandari, S., Ruwase, O., Rasley, J., Smith, S., & He, Y. (2021). ZeRO-Infinity: Breaking the GPU memory wall for extreme scale deep learning. *Proceedings of SC '21*. https://arxiv.org/abs/2104.07857

  7. Li, S., Zhao, Y., Varma, R., Salpekar, O., Noordhuis, P., Li, T., Paszke, A., Smith, J., Vaughan, B., Damania, P., & Chintala, S. (2020). PyTorch distributed: Experiences on accelerating data parallel training. *Proceedings of VLDB 2020*.

  8. Zhang, S., Roller, S., Goyal, N., Artetxe, M., Chen, M., Chen, S., Dewan, C., Diab, M., Li, X., Lin, X. V., Mihaylov, T., Ott, M., Shleifer, S., Shuster, K., Simber, V., Koura, P. S., Srambhavi, H., Szlam, A., Zettlemoyer, L., & Stoyanov, V. (2022). OPT: Open Pre-trained Transformer language models. *arXiv:2205.01068*. (First large-scale FSDP deployment)

  9. Shoeybi, M., Patwary, M., Puri, R., LeGresley, P., Casper, J., & Catanzaro, B. (2019). Megatron-LM: Training multi-billion parameter language models using model parallelism. *arXiv:1909.08053*.

  10. Narayanan, D., Shoeybi, M., Casper, J., LeGresley, P., Patwary, M., Korthikanti, V., Vainbrand, D., Kashinkunti, P., Bernauer, J., Catanzaro, B., Phanishayee, A., & Zaharia, M. (2021). Efficient large-scale language model training on GPU clusters using Megatron-LM. *Proceedings of SC '21*.

  11. Korthikanti, V., Casper, J., Lym, S., McAfee, L., Andersch, M., Shoeybi, M., & Catanzaro, B. (2022). Reducing activation recomputation in large transformer models. *MLSys 2022*. (Sequence parallelism integrated with FSDP training)

  12. Dao, T., Fu, D. Y., Ermon, S., Rudra, A., & Ré, C. (2022). FlashAttention: Fast and memory-efficient exact attention with IO-awareness. *NeurIPS 2022*.

  13. Smith, S., Patwary, M., Norick, B., LeGresley, P., Rajbhandari, S., Casper, J., Liu, Z., Prabhumoye, S., Zerveas, G., Korthikanti, V., Zhang, E., Child, R., Aminabadi, R. Y., Bernauer, J., Song, X., Shoeybi, M., He, Y., Houston, M., Tiwary, S., & Catanzaro, B. (2022). Using DeepSpeed and Megatron to train Megatron-Turing NLG 530B. *arXiv:2201.11990*.

  14. Huang, C. C., Gu, A., Zhao, Y., Varma, R., Li, L., & Ott, M. (2024). Torchft: Fault tolerant training through async collective communication. *PyTorch Blog*. https://pytorch.org/blog/fault-tolerant-llama-training-with-2000-synthetic-failures-every-15-seconds-and-no-checkpoints-on-crusoe-l40s/

  15. Chen, T., Xu, B., Zhang, C., & Guestrin, C. (2016). Training deep nets with sublinear memory cost. *arXiv:1604.06174*. (Gradient checkpointing, integrated with FSDP)

  16. Micikevicius, P., Narang, S., Alben, J., Diamos, G., Elsen, E., Garcia, D., Ginsburg, B., Houston, M., Kuchaiev, O., Venkatesh, G., & Wu, H. (2018). Mixed precision training. *ICLR 2018*. (Mixed precision, native FSDP feature)

  17. Sergeev, A., & Del Balso, M. (2018). Horovod: Fast and easy distributed deep learning in TensorFlow. *arXiv:1802.05799*.

  18. Luo, S., et al. (2024). LoCo: Low-bit communication adaptor for large-scale model training. *arXiv:2407.04480*. (Gradient compression for FSDP communication overhead reduction)

  19. MLCommons. (2025). MLPerf Training v5.0 Results. https://mlcommons.org/ (Llama 3.1 405B benchmark using FSDP-based PyTorch training)

  20. AWS Machine Learning. (2024). Efficient pre-training of Llama 3-like model architectures using TorchTitan on Amazon SageMaker. *AWS Blog*. https://aws.amazon.com/blogs/machine-learning/efficient-pre-training-of-llama-3-like-model-architectures-using-torchtitan-on-amazon-sagemaker/

  21. Hugging Face. (2022). Accelerate large model training using PyTorch Fully Sharded Data Parallel. *Hugging Face Blog*. https://huggingface.co/blog/pytorch-fsdp

  22. University of Bristol. (2025). Isambard-AI launches July 2025. https://www.bristol.ac.uk/research/centres/bristol-supercomputing/articles/2025/isambard-ai-launches-july-2025.html

  23. NVIDIA. (2025). Isambard-AI, the UK's most powerful AI supercomputer, goes live. *NVIDIA Blog*. https://blogs.nvidia.com/blog/isambard-ai/

  24. PyTorch Documentation. (2025). Getting started with Fully Sharded Data Parallel (FSDP). https://docs.pytorch.org/tutorials/intermediate/FSDP1_tutorial.html

  25. Edge AI and Vision Alliance. (2024). Fully Sharded Data Parallelism (FSDP). https://www.edge-ai-vision.com/2024/05/fully-sharded-data-parallelism-fsdp/

  26. Continuum Labs. (2025). PyTorch Fully Sharded Data Parallel (FSDP). https://training.continuumlabs.ai/training/the-fine-tuning-process/training-processes/pytorch-fully-sharded-data-parallel-fsdp

  27. PyTorch. (2021). Fault-tolerant Llama training with 2000 synthetic failures every ~15 seconds and no checkpoints on Crusoe L40S. *PyTorch Blog*. https://pytorch.org/blog/fault-tolerant-llama-training-with-2000-synthetic-failures-every-15-seconds-and-no-checkpoints-on-crusoe-l40s/

  28. Jiang, Z., Lin, H., Zhong, Y., Deng, Y., Chen, C., Zhang, Y., Li, C., Lin, Y., Zhang, H., Zhang, M., Shang, Z., Wu, X., Yan, Z., Li, H., Li, W., Shi, X., & Wang, H. (2024). MegaScale: Scaling large language model training to more than 10,000 GPUs. *NSDI 2024*.

  ## Key Terminology Glossary

  - **FSDP (Fully Sharded Data Parallel)**: [[PyTorch]]'s native implementation of [[ZeRO Redundancy Optimiser]] Stage 3; shards all model state (parameters, gradients, optimiser states) across data-parallel ranks, gathering transiently for computation.
  - **FSDP2**: The per-parameter DTensor-based redesign of FSDP (PyTorch 2.3+), replacing the FlatParameter sharding unit; improves composability with tensor parallelism, torch.compile, and per-parameter configuration.
  - **FlatParameter**: The contiguous buffer used in FSDP1 to concatenate all parameters within an FSDP unit for sharding; replaced by per-parameter DTensors in FSDP2.
  - **DTensor (Distributed Tensor)**: [[PyTorch]]'s first-class distributed tensor type, carrying both local data and global shape/sharding specification; the FSDP2 sharding representation.
  - **FULL_SHARD**: FSDP sharding strategy implementing ZeRO Stage 3 — shards parameters, gradients, and optimiser states; maximum memory reduction, 3Ψ communication.
  - **SHARD_GRAD_OP**: FSDP sharding strategy implementing ZeRO Stage 2 — parameters kept gathered after forward; only gradients and optimiser states sharded; less communication overhead than FULL_SHARD.
  - **HYBRID_SHARD (HSDP2)**: FSDP sharding within a node group combined with DDP replication across node groups; exploits NVLink intra-node bandwidth for sharding while using cheaper cross-node gradient aggregation.
  - **DCP (Distributed Checkpointing)**: [[PyTorch]]'s `torch.distributed.checkpoint` API for per-rank sharded checkpoint I/O with topology-flexible resharding; FSDP's native checkpointing backend.
  - **All-gather**: NCCL collective operation that reconstructs the full parameter tensor from all ranks' shards before each layer's forward computation; runs twice per training step per module in FULL_SHARD.
  - **Reduce-scatter**: NCCL collective operation that sums gradient contributions across ranks and returns each rank's gradient shard; replaces DDP's all-reduce in FSDP's backward pass.
  - **TorchTitan**: Meta's production-quality reference implementation for [[Large Language Models]] pre-training on [[PyTorch]]; uses FSDP2 as its 1D parallelism primitive combined with TP, PP, and CP for 4D parallelism.
  - **torchft**: [[PyTorch]] fault-tolerant training library; integrates with HSDP2 to enable FSDP training to continue through node failures without full job restart.
  - **SimpleFSDP**: Graph-level FSDP implementation via torch.compile FX transformations; enables FSDP semantics on any model without FSDP module wrappers; experimental in PyTorch 2.7+.
  - **ZeRO Stage 3**: [[DeepSpeed]]'s memory partitioning algorithm implemented by FSDP; partitions all model state across data-parallel ranks with gather-before-compute semantics.
  - **Checkpoint resharding**: The ability to load a checkpoint saved with d₁ data-parallel ranks into a training or inference job with d₂ ≠ d₁ ranks; enabled by DCP's shard metadata format.
  - **Activation checkpointing**: Technique integrated with FSDP that recomputes discarded intermediate activations during the backward pass instead of storing them, trading compute for activation memory.
  - **FP8 FSDP**: Emerging [[PyTorch]] feature using FP8-precision all-gather communication for FSDP parameters, reducing communication volume by 2× vs BF16 all-gather.
  - **AIRR (AI Research Resource)**: UK Government national AI compute programme providing access to Isambard-AI, Dawn, and cloud GPU capacity under DSIT governance; primary source of FSDP compute for UK academic training.

- ### Provenance
  - sources:: PyTorch FSDP paper (Zhao et al., VLDB 2023) https://arxiv.org/abs/2304.11277; ZeRO paper (Rajbhandari et al., SC 2020) https://arxiv.org/abs/1910.02054; TorchTitan paper https://arxiv.org/abs/2410.06511; SimpleFSDP paper https://arxiv.org/pdf/2411.00284; PyTorch FSDP API introduction https://pytorch.org/blog/introducing-pytorch-fully-sharded-data-parallel-api/; Hugging Face FSDP blog https://huggingface.co/blog/pytorch-fsdp; Edge AI FSDP overview https://www.edge-ai-vision.com/2024/05/fully-sharded-data-parallelism-fsdp/; AWS TorchTitan SageMaker https://aws.amazon.com/blogs/machine-learning/efficient-pre-training-of-llama-3-like-model-architectures-using-torchtitan-on-amazon-sagemaker/; PyTorch fault-tolerant training blog https://pytorch.org/blog/fault-tolerant-llama-training-with-2000-synthetic-failures-every-15-seconds-and-no-checkpoints-on-crusoe-l40s/; Isambard-AI launch https://www.bristol.ac.uk/research/centres/bristol-supercomputing/articles/2025/isambard-ai-launches-july-2025.html; MLCommons MLPerf v5.0 https://mlcommons.org/; PyTorch FSDP tutorial docs https://docs.pytorch.org/tutorials/intermediate/FSDP1_tutorial.html
  - web-searches-performed:: 4
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
