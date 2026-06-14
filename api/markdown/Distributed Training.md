public:: true

# distributed training
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6fb8e5c5d2cb114ac3ee7ec01a69b1c41032c25538f99890982c00fa997388f2",
  "@type": "Page",
  "vc:slug": "distributed-training",
  "title": "distributed training",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:distributed-training",
  "@type": "Class",
  "label": "Distributed Training",
  "definition": "Distributed training is a machine learning paradigm that partitions computation, data, and model parameters across multiple processors, accelerators, or networked nodes so that training jobs too large or too slow for a single device can complete at scale. The four primary parallelism axes are data parallelism (each worker processes a distinct data shard and aggregates gradients), model parallelism (layers assigned to different devices), tensor parallelism (individual weight matrices sharded across devices), and pipeline parallelism (the forward pass staged across devices as a micro-batch pipeline). These strategies are composed into multi-dimensional schemes — commonly called 3D parallelism — that balance compute, memory, and communication trade-offs for workloads ranging from fine-tuning to pre-training frontier models with hundreds of billions of parameters.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:machine-learning-infrastructure",
      "label": "Machine Learning Infrastructure"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:data-parallelism", "label": "Data Parallelism"},
      {"@id": "urn:ngm:class:model-parallelism", "label": "Model Parallelism"},
      {"@id": "urn:ngm:class:tensor-parallelism", "label": "Tensor Parallelism"},
      {"@id": "urn:ngm:class:pipeline-parallelism", "label": "Pipeline Parallelism"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:gpu-compute", "label": "GPU Compute"},
      {"@id": "urn:ngm:class:high-speed-interconnect", "label": "High-Speed Interconnect"},
      {"@id": "urn:ngm:class:gradient-synchronisation", "label": "Gradient Synchronisation"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:large-language-model-training", "label": "Large Language Model Training"},
      {"@id": "urn:ngm:class:foundation-model", "label": "Foundation Model"},
      {"@id": "urn:ngm:class:model-scaling", "label": "Model Scaling"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:distributed-computing", "label": "Distributed Computing"},
      {"@id": "urn:ngm:class:collective-communication", "label": "Collective Communication"},
      {"@id": "urn:ngm:class:mixed-precision-training", "label": "Mixed Precision Training"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:all-reduce-algorithm", "label": "All-Reduce Algorithm"},
      {"@id": "urn:ngm:class:gradient-checkpointing", "label": "Gradient Checkpointing"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:pytorch", "label": "PyTorch"},
      {"@id": "urn:ngm:class:jax", "label": "JAX"},
      {"@id": "urn:ngm:class:nvidia-nccl", "label": "NVIDIA NCCL"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"},
      {"@id": "urn:ngm:class:reinforcement-learning-from-human-feedback", "label": "Reinforcement Learning from Human Feedback"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:single-device-training", "label": "Single-Device Training"},
      {"@id": "urn:ngm:class:federated-learning", "label": "Federated Learning"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:checkpoint-recovery", "label": "Checkpoint Recovery"},
      {"@id": "urn:ngm:class:zero-redundancy-optimiser", "label": "ZeRO Redundancy Optimiser"},
      {"@id": "urn:ngm:class:megatron-lm", "label": "Megatron-LM"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:cloud-computing", "label": "Cloud Computing"},
      {"@id": "urn:ngm:class:hpc-cluster", "label": "HPC Cluster"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:parallel-model-training", "label": "Parallel Model Training"}
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Distributed training is a [[Machine Learning]] paradigm that spreads the computational workload of training a neural network across multiple devices, nodes, or data centres, enabling practitioners to train models that are either too large to fit in the memory of a single [[GPU Compute]] device or that would take prohibitively long to train on one. By coordinating many accelerators through strategies such as [[Data Parallelism]], [[Model Parallelism]], [[Tensor Parallelism]], and [[Pipeline Parallelism]], distributed training dramatically shortens iteration cycles and has been the foundational enabler of [[Foundation Model]] research. It sits at the intersection of [[Deep Learning]], [[Distributed Computing]], and high-performance systems engineering.

- ### Overview
  - Distributed training emerged as the predominant training paradigm once [[Deep Learning]] model sizes began to outpace VRAM capacity on individual accelerators. Training a frontier large language model now routinely requires thousands of GPUs operating in concert over days or weeks, making the engineering of distributed training systems a specialised discipline in its own right.
  - The core challenge is balancing three competing resources: compute throughput, device memory, and inter-device communication bandwidth. Each parallelism strategy makes a different trade-off across these axes, and the art of distributed training lies in choosing and composing strategies that keep accelerators utilised at high MFU (Model FLOP Utilisation) while fitting within memory constraints.
  - Fault tolerance is a critical operational concern: a training run spanning thousands of nodes has a non-trivial probability of hardware failure per day. Robust [[Checkpoint Recovery]] mechanisms, automatic restart logic, and monitoring infrastructure are as important as the parallelism strategy itself.
  - The field has been shaped by a small number of highly influential systems: Megatron-LM from NVIDIA, DeepSpeed from Microsoft, and the XLA-based stack underlying Google's TPU pods. These frameworks expose composable APIs atop lower-level communication libraries such as [[NVIDIA NCCL]] and [[MPI]].

- ### Key Mechanisms
  - #### Data Parallelism
    - Each worker holds a full copy of the model and processes a distinct mini-batch of data.
    - After each forward and backward pass, gradients are aggregated across all workers using an [[All-Reduce Algorithm]] (e.g., ring-allreduce or recursive halving-doubling).
    - Synchronous data parallelism ensures all workers apply the same gradient update; asynchronous variants tolerate stale gradients for higher throughput at the cost of convergence noise.
    - [[PyTorch]] DistributedDataParallel (DDP) and [[JAX]] pmap are canonical implementations.
    - Scales well when the model fits within a single device's memory; communication overhead grows linearly with the number of parameters.
  - #### Model Parallelism
    - The model's layers are partitioned across devices; each device hosts a subset of the computation graph.
    - A tensor flows sequentially through devices, so devices are idle while waiting for their upstream device — a problem mitigated by [[Pipeline Parallelism]].
    - Necessary when a single model layer (e.g., a very large embedding table) exceeds device memory.
    - Early implementations were hand-crafted; modern frameworks offer automated layer assignment.
  - #### Tensor Parallelism
    - Individual weight matrices (e.g., attention projection matrices) are sharded column-wise or row-wise across devices.
    - Each device computes a partial result, and results are combined via all-reduce or all-gather collectives.
    - Megatron-LM popularised this approach for [[Transformer Architecture]] training, partitioning the attention heads and MLP blocks across devices within a node.
    - Communication volume is proportional to hidden dimension size, making high-bandwidth intra-node links like [[NVLink]] essential.
  - #### Pipeline Parallelism
    - The model is split into consecutive stages, each assigned to a device or group of devices.
    - Micro-batches flow through the pipeline so multiple stages process different micro-batches simultaneously, hiding the inter-stage communication latency.
    - The GPipe and PipeDream schedules are foundational reference designs; 1F1B (one-forward-one-backward) scheduling is a common production approach.
    - Residual pipeline bubble (idle time at fill and drain) remains an efficiency challenge.
  - #### 3D Parallelism and Beyond
    - Production-scale training typically combines data, tensor, and pipeline parallelism simultaneously — a configuration called 3D parallelism.
    - [[ZeRO Redundancy Optimiser]] (from Microsoft DeepSpeed) orthogonally partitions optimiser state, gradients, and parameters across data-parallel ranks, dramatically reducing per-device memory without sacrificing data-parallel efficiency.
    - Expert parallelism (used in Mixture-of-Experts models) routes tokens to specialised sub-networks across devices, adding a fourth dimension of parallelism.
  - #### Communication Primitives
    - [[Collective Communication]] operations underpin every parallelism strategy: all-reduce, all-gather, reduce-scatter, broadcast, and point-to-point send/receive.
    - [[NVIDIA NCCL]] (NCCL) is the dominant library for GPU-to-GPU collectives; it auto-selects the most efficient topology (NVLink, PCIe, or InfiniBand) at runtime.
    - InfiniBand with RDMA provides low-latency, high-bandwidth inter-node communication; RoCE (RDMA over Converged Ethernet) is an alternative in cloud environments.

- ### Applications and Use Cases
  - **Pre-training frontier LLMs**: GPT-4, Llama 3, Gemini, and similar models are trained on clusters of thousands of GPUs using multi-dimensional parallelism, making distributed training their primary enabling technology.
  - **Vision model training**: Large vision transformers (ViTs) and multimodal models such as CLIP and Flamingo require distributed training for both the vision and language towers.
  - **Reinforcement Learning from Human Feedback ([[RLHF]])**: The PPO or GRPO training loops used in alignment fine-tuning require coordinating a reference model, a reward model, and a policy model simultaneously — often across distributed devices.
  - **Scientific machine learning**: Molecular dynamics, climate modelling, and protein structure prediction (e.g., AlphaFold) leverage distributed training to handle large datasets and complex model architectures on HPC clusters.
  - **Continual learning and periodic re-training**: Production ML systems regularly re-train on new data; distributed training compresses the re-training window to maintain model freshness.
  - **Hyperparameter search**: Distributed training can be combined with parallel hyperparameter sweeps (e.g., via Ray Tune) so multiple candidate configurations train concurrently.

- ### Relationships
  - hasPart:: [[Data Parallelism]]
  - hasPart:: [[Model Parallelism]]
  - hasPart:: [[Tensor Parallelism]]
  - hasPart:: [[Pipeline Parallelism]]
  - requires:: [[GPU Compute]]
  - requires:: [[High-Speed Interconnect]]
  - requires:: [[Gradient Synchronisation]]
  - enables:: [[Large Language Model Training]]
  - enables:: [[Foundation Model]]
  - enables:: [[Model Scaling]]
  - dependsOn:: [[Distributed Computing]]
  - dependsOn:: [[Collective Communication]]
  - dependsOn:: [[Mixed Precision Training]]
  - implements:: [[All-Reduce Algorithm]]
  - implements:: [[Gradient Checkpointing]]
  - uses:: [[PyTorch]]
  - uses:: [[JAX]]
  - uses:: [[NVIDIA NCCL]]
  - supports:: [[Deep Learning]]
  - supports:: [[Reinforcement Learning from Human Feedback]]
  - contrastsWith:: [[Single-Device Training]]
  - contrastsWith:: [[Federated Learning]]
  - relatedTo:: [[Checkpoint Recovery]]
  - relatedTo:: [[ZeRO Redundancy Optimiser]]
  - relatedTo:: [[Megatron-LM]]
  - bridges-to:: [[Cloud Computing]]
  - bridges-to:: [[HPC Cluster]]

- ### Standards and Context
  - No single formal standards body governs distributed training protocols; the field is shaped by de facto frameworks and industry practice.
  - **NVIDIA Collective Communications Library (NCCL)**: The dominant GPU collective communications library, serving as the practical standard for GPU cluster communication.
  - **MPI (Message Passing Interface)**: The traditional HPC standard for distributed communication; still used in CPU-based and heterogeneous environments.
  - **OpenAI Triton / XLA**: Compiler backends that optimise tensor operations for distributed execution on GPUs and TPUs respectively.
  - **MLCommons / MLPerf**: The MLPerf Training benchmark suite provides standardised measurements of distributed training throughput and convergence, enabling cross-vendor comparison of distributed training systems.
  - **DeepSpeed** and **Megatron-LM**: Open-source frameworks that have become the de facto reference implementations for large-scale distributed training.
  - **PyTorch FSDP** (Fully Sharded Data Parallel): A PyTorch-native implementation of ZeRO-style sharding, integrated into the main framework as of PyTorch 1.12.
  - The scaling laws literature (Kaplan et al.; Hoffmann et al. — Chinchilla) informs how practitioners allocate compute across model size and dataset size, directly shaping how distributed training budgets are structured.

- ### Key Concepts Glossary
  - **All-reduce**: A collective operation where all workers contribute a partial value (typically a gradient), and all receive the reduced (summed or averaged) result.
  - **Ring-allreduce**: An efficient all-reduce topology where each node passes data in a ring, achieving bandwidth-optimal communication.
  - **Micro-batch**: A subdivision of a mini-batch used in pipeline parallelism to keep pipeline stages busy and reduce bubble time.
  - **MFU (Model FLOP Utilisation)**: The fraction of theoretical peak FLOP throughput actually achieved during training; a key efficiency metric for distributed runs.
  - **Bubble**: Idle time at the beginning and end of a pipeline pass where some stages have no work to process.
  - **ZeRO**: Zero Redundancy Optimiser; partitions optimiser state, gradients, and parameters across data-parallel ranks, reducing per-rank memory by up to N× for N ranks.
  - **NVLink**: NVIDIA's proprietary high-bandwidth GPU-to-GPU interconnect, providing substantially more bandwidth than PCIe for intra-node communication.
  - **InfiniBand**: A high-performance networking standard used for inter-node GPU communication in large training clusters.

- ### Provenance
  - sources:: Rajbhandari et al. (ZeRO, 2020); Shoeybi et al. (Megatron-LM, 2019); Huang et al. (GPipe, 2019); Narayanan et al. (PipeDream, 2019); PyTorch DDP documentation; DeepSpeed documentation; MLCommons MLPerf Training benchmarks
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
