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
      "@id": "urn:ngm:class:cat-ai-infrastructure",
      "label": "AI Infrastructure"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:data-parallelism",
        "label": "Data Parallelism"
      },
      {
        "@id": "urn:ngm:class:model-parallelism",
        "label": "Model Parallelism"
      },
      {
        "@id": "urn:ngm:class:tensor-parallelism",
        "label": "Tensor Parallelism"
      },
      {
        "@id": "urn:ngm:class:pipeline-parallelism",
        "label": "Pipeline Parallelism"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:gpu-compute",
        "label": "GPU Compute"
      },
      {
        "@id": "urn:ngm:class:gradient-synchronisation",
        "label": "Gradient Synchronisation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:large-language-model-training",
        "label": "Large Language Model Training"
      },
      {
        "@id": "urn:ngm:class:foundation-model",
        "label": "Foundation Model"
      },
      {
        "@id": "urn:ngm:class:model-scaling",
        "label": "Model Scaling"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:distributed-computing",
        "label": "Distributed Computing"
      },
      {
        "@id": "urn:ngm:class:collective-communication",
        "label": "Collective Communication"
      },
      {
        "@id": "urn:ngm:class:mixed-precision-training",
        "label": "Mixed Precision Training"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:gradient-checkpointing",
        "label": "Gradient Checkpointing"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:python-pytorch-deep-learning-stack",
        "label": "PyTorch"
      },
      {
        "@id": "urn:ngm:class:jax",
        "label": "JAX"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning-from-human-feedback",
        "label": "Reinforcement Learning from Human Feedback"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:federated-learning",
        "label": "Federated Learning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:checkpoint-recovery",
        "label": "Checkpoint Recovery"
      },
      {
        "@id": "urn:ngm:class:megatron-lm",
        "label": "Megatron-LM"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:cloud-computing",
        "label": "Cloud Computing"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:parallel-model-training",
      "label": "Parallel Model Training"
    }
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
  - Distributed training is a [[Machine Learning]] paradigm that spreads the computational workload of training a [[Neural Network]] across multiple devices, nodes, or data centres, enabling practitioners to train models that are either too large to fit in the memory of a single [[GPU Compute]] device or that would take prohibitively long to complete on one accelerator. The technique partitions work along four orthogonal parallelism axes — [[Data Parallelism]], [[Model Parallelism]], [[Tensor Parallelism]], and [[Pipeline Parallelism]] — which can be composed into multi-dimensional schemes (commonly called 3D parallelism) to simultaneously address memory, compute, and inter-device communication bottlenecks. Data parallelism replicates the entire model across workers, each of which processes a distinct shard of the training corpus and aggregates gradients across all replicas via [[Collective Communication]] primitives such as all-reduce; this approach scales well when the model fits on a single device but saturates when parameter count exceeds per-device VRAM. Model parallelism assigns non-overlapping subsets of the model's layers to different devices, allowing models whose total parameter storage exceeds any single accelerator's memory to be trained; its principal liability is that devices must wait for upstream computation, introducing idle time. Tensor parallelism (as popularised by Megatron-LM from NVIDIA) shards individual weight matrices — for example the attention projection and MLP layers of a [[Transformer Architecture]] — across devices within a node, exploiting the high-bandwidth NVLink interconnect and combining partial results through all-reduce or all-gather operations. Pipeline parallelism divides the model into sequential stages assigned to different devices, then fills the pipeline with a stream of micro-batches so that multiple stages operate concurrently on different micro-batches; the principal inefficiency is the residual pipeline bubble at fill and drain phases. The [[ZeRO Redundancy Optimiser]] from Microsoft DeepSpeed provides an orthogonal approach to [[Data Parallelism]] that partitions optimiser state, gradients, and parameters across ranks, reducing per-device memory by a factor equal to the number of data-parallel workers without sacrificing throughput. Distributed training sits at the intersection of [[Deep Learning]] research, [[High-Performance Computing]], and systems engineering; it is the foundational infrastructure that has made [[Foundation Model]] pre-training at scale economically feasible, enabling models such as GPT-4, Llama 3, Gemini 2.0, and DeepSeek-V3 to be trained on clusters of thousands of accelerators over weeks to months, and it is the necessary substrate upon which [[Scaling Laws]] for neural language models could be experimentally validated.

- ### Semantic Classification
  - owl-class:: ai:DistributedTraining
  - owl-role:: ExecutableProtocol | ComputationalParadigm
  - owl-inferred:: ai:ScalableTrainingMethod, ai:MLInfrastructureComponent, ai:ParallelComputingStrategy
  - belongs-to-domain:: [[AI Infrastructure]], [[High-Performance Computing]], [[Machine Learning]]
  - implemented-in-layer:: [[ComputeLayer]], [[InfrastructureLayer]]

- ### Relationships
  - is-subclass-of:: [[Machine Learning]], [[High-Performance Computing]], [[AI Infrastructure]]
  - has-part:: [[Data Parallelism]], [[Model Parallelism]], [[Tensor Parallelism]], [[Pipeline Parallelism]], [[ZeRO Redundancy Optimiser]], [[Gradient Synchronisation]], [[All-Reduce Algorithm]]
  - requires:: [[GPU Compute]], [[High-Speed Interconnect]], [[Gradient Synchronisation]], [[Mixed Precision Training]], [[Collective Communication]]
  - enables:: [[Large Language Models]], [[Foundation Model]], [[Model Scaling]], [[Reinforcement Learning from Human Feedback]], [[Scientific Machine Learning]]
  - implements:: [[All-Reduce Algorithm]], [[Gradient Checkpointing]], [[Ring-Allreduce]], [[Flash Attention]], [[Sequence Parallelism]]
  - depends-on:: [[Distributed Computing]], [[Collective Communication]], [[Mixed Precision Training]], [[Backpropagation]], [[Gradient Descent]]
  - supports:: [[Deep Learning]], [[Reinforcement Learning from Human Feedback]], [[Natural Language Processing]], [[Computer Vision]]
  - uses:: [[PyTorch]], [[JAX]], [[NVIDIA NCCL]], [[DeepSpeed]], [[Megatron-LM]], [[TorchTitan]]
  - contrasts-with:: [[Single-Device Training]], [[Federated Learning]], [[Transfer Learning]]
  - related-to:: [[Checkpoint Recovery]], [[ZeRO Redundancy Optimiser]], [[Megatron-LM]], [[Cloud Computing]], [[HPC Cluster]], [[Scaling Laws]], [[MLPerf]]
  - standardized-by:: [[MLCommons]], [[MPI Standard]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:DistributedTraining
        ObjectSomeValuesFrom(ai:hasPart ai:DataParallelism))
      SubClassOf(ai:DistributedTraining
        ObjectSomeValuesFrom(ai:hasPart ai:ModelParallelism))
      SubClassOf(ai:DistributedTraining
        ObjectSomeValuesFrom(ai:hasPart ai:TensorParallelism))
      SubClassOf(ai:DistributedTraining
        ObjectSomeValuesFrom(ai:hasPart ai:PipelineParallelism))
      SubClassOf(ai:DistributedTraining
        ObjectSomeValuesFrom(ai:hasPart ai:ZeRORedundancyOptimiser))
      SubClassOf(ai:DistributedTraining
        ObjectSomeValuesFrom(ai:hasPart ai:GradientSynchronisation))
      SubClassOf(ai:DistributedTraining
        ObjectSomeValuesFrom(ai:hasPart ai:AllReduceAlgorithm))
  ## Dependency Relationships
      SubClassOf(ai:DistributedTraining
        ObjectSomeValuesFrom(ai:requires ai:GPUCompute))
      SubClassOf(ai:DistributedTraining
        ObjectSomeValuesFrom(ai:requires ai:HighSpeedInterconnect))
      SubClassOf(ai:DistributedTraining
        ObjectSomeValuesFrom(ai:requires ai:CollectiveCommunication))
      SubClassOf(ai:DistributedTraining
        ObjectSomeValuesFrom(ai:requires ai:MixedPrecisionTraining))
      SubClassOf(ai:DistributedTraining
        ObjectSomeValuesFrom(ai:dependsOn ai:Backpropagation))
      SubClassOf(ai:DistributedTraining
        ObjectSomeValuesFrom(ai:dependsOn ai:GradientDescent))
      SubClassOf(ai:DistributedTraining
        ObjectSomeValuesFrom(ai:dependsOn ai:DistributedComputing))
  ## Capability Relationships
      SubClassOf(ai:DistributedTraining
        ObjectSomeValuesFrom(ai:enables ai:LargeLanguageModel))
      SubClassOf(ai:DistributedTraining
        ObjectSomeValuesFrom(ai:enables ai:FoundationModel))
      SubClassOf(ai:DistributedTraining
        ObjectSomeValuesFrom(ai:enables ai:ModelScaling))
      SubClassOf(ai:DistributedTraining
        ObjectSomeValuesFrom(ai:enables ai:ReinforcementLearningFromHumanFeedback))
      SubClassOf(ai:DistributedTraining
        ObjectSomeValuesFrom(ai:supports ai:DeepLearning))
      SubClassOf(ai:DistributedTraining
        ObjectSomeValuesFrom(ai:supports ai:ScientificMachineLearning))
  ## Implementation Relationships
      SubClassOf(ai:DistributedTraining
        ObjectSomeValuesFrom(ai:implements ai:AllReduceAlgorithm))
      SubClassOf(ai:DistributedTraining
        ObjectSomeValuesFrom(ai:implements ai:GradientCheckpointing))
      SubClassOf(ai:DistributedTraining
        ObjectSomeValuesFrom(ai:implements ai:RingAllreduce))
      SubClassOf(ai:DistributedTraining
        ObjectSomeValuesFrom(ai:implements ai:FlashAttention))
      SubClassOf(ai:DistributedTraining
        ObjectSomeValuesFrom(ai:implements ai:SequenceParallelism))
      SubClassOf(ai:DistributedTraining
        ObjectSomeValuesFrom(ai:implements ai:MixedPrecisionTraining))
      SubClassOf(ai:DistributedTraining
        ObjectSomeValuesFrom(ai:uses ai:PyTorch))
      SubClassOf(ai:DistributedTraining
        ObjectSomeValuesFrom(ai:uses ai:DeepSpeed))
      SubClassOf(ai:DistributedTraining
        ObjectSomeValuesFrom(ai:uses ai:MegatronLM))
      SubClassOf(ai:DistributedTraining
        ObjectSomeValuesFrom(ai:uses ai:NVIDIANCCL))
      SubClassOf(ai:DistributedTraining
        ObjectSomeValuesFrom(ai:uses ai:JAX))
      SubClassOf(ai:DistributedTraining
        ObjectSomeValuesFrom(ai:uses ai:TorchTitan))
  ## Reduction Relationships
      SubClassOf(ai:DistributedTraining
        ObjectSomeValuesFrom(ai:reducesTo ai:DistributedComputing))
      SubClassOf(ai:DistributedTraining
        ObjectSomeValuesFrom(ai:reducesTo ai:NumericalOptimisation))
      SubClassOf(ai:DistributedTraining
        ObjectSomeValuesFrom(ai:contrastsWith ai:FederatedLearning))
      SubClassOf(ai:DistributedTraining
        ObjectSomeValuesFrom(ai:bridges ai:CloudComputing))

  ## About

  Distributed training emerged as a necessity rather than an optimisation choice: the trajectory of [[Deep Learning]] model sizes crossed the memory ceiling of individual [[GPU Compute]] devices in the early 2010s, and has continued to outpace single-device capacity ever since. The first widely cited multi-GPU neural network training was AlexNet (Krizhevsky, Sutskever & Hinton, 2012), which was split across two NVIDIA GTX 580 GPUs because neither device had sufficient VRAM to hold the full model — an early and involuntary instance of model parallelism. By 2020, GPT-3's 175 billion parameters required approximately 700 GB of parameter storage alone, far exceeding the 40 GB of a single A100 GPU, making distributed training across hundreds of devices mandatory. The pre-training of frontier models in 2025–2026 typically employs clusters of 2,000 to 32,000 GPUs or TPUs operating continuously for weeks, consuming megawatts of power and requiring sophisticated fault-tolerance infrastructure to survive the non-trivial probability of hardware failure that accumulates across very large fleets.

  The central engineering challenge in distributed training is maintaining high Model FLOP Utilisation (MFU) — the fraction of the system's theoretical peak compute that is actually performing useful arithmetic — while simultaneously fitting the model within per-device memory constraints and keeping inter-device communication from becoming the throughput bottleneck. The [[Backpropagation]] algorithm must communicate gradient tensors across all devices, and for a 70-billion-parameter model with bfloat16 precision (2 bytes per parameter), a single gradient all-reduce transmits approximately 140 GB of data. At typical InfiniBand NDR bandwidths of 400 Gb/s per port, this transmission occupies tens of milliseconds per step; overlapping it with backward computation is therefore not merely desirable but essential for competitive training efficiency. Modern frameworks implement sophisticated overlap and bucketing schemes that launch collective operations as soon as partial gradients are ready, hiding the majority of communication latency behind the computation of remaining gradient tensors.

  The [[ZeRO Redundancy Optimiser]] (Rajbhandari et al., SC 2020) represented a conceptual breakthrough by recognising that standard data parallelism unnecessarily replicates three separate data structures across every data-parallel rank: optimiser states (for Adam, these are the first and second moment estimates, consuming 8 bytes per parameter at full precision), gradients (2–4 bytes per parameter), and the model parameters themselves (2 bytes per parameter in bfloat16). ZeRO Stage 1 partitions only optimiser states across ranks, Stage 2 additionally partitions gradients, and Stage 3 additionally partitions parameters. All stages use gather-before-use semantics ensuring that each rank can still execute a full forward and backward pass on its assigned micro-batch; the difference is that each rank only persistently stores its assigned shard and gathers the full tensors transiently when needed. Stage 1 reduces per-device optimiser state memory by a factor of N (the data-parallel world size), Stage 2 additionally reduces gradient memory by N, and Stage 3 reduces parameter memory by N, enabling training of models far larger than unsharded VRAM would permit. ZeRO-Infinity (Rajbhandari et al., SC 2021) extends this principle to NVMe storage, offloading optimiser states and parameters to CPU RAM and NVMe SSDs through a bandwidth-efficient access protocol, enabling training of models with trillions of parameters on clusters of modest GPU servers without access to high-end interconnects between every node pair.

  Fault tolerance is a first-class concern in large-scale training that is often under-appreciated in academic treatments of the subject. A cluster of 10,000 GPUs experiencing a mean time between failures (MTBF) of 50,000 hours per GPU faces an expected cluster-level failure event every 5 hours of wall-clock time. Pre-training a frontier model takes 20–90 days; even with generous MTBF figures, a run of that duration will almost certainly encounter multiple hardware faults, network errors, or software crashes. The standard mitigation is checkpoint-and-restart: training state (model weights, optimiser state, [[Gradient Descent]] algorithm's momentum buffers, random number generator states, and the data loader's position in the dataset) is serialised to distributed storage at regular intervals, typically every 5–30 minutes. The TRANSOM system (2023) and Oobleck (2023) represent research into more resilient approaches that use pipeline-template-based recovery protocols capable of resuming after node failure without full cluster restart, substantially reducing the overhead of fault recovery in pipelines with large numbers of stages.

  ## Data Parallelism

  Data parallelism is the simplest and most widely used strategy. Each worker holds a complete replica of the model's parameters and processes a distinct mini-batch of [[Training Data]]. After each backward pass, workers aggregate their local gradients via [[All-Reduce Algorithm]] so that all replicas apply an identical parameter update and remain synchronised. The ring-allreduce algorithm (Gibiansky, Baidu, 2017) achieves this with optimal bandwidth utilisation: each node simultaneously sends one chunk of its gradient tensor to the next node in a ring and receives one chunk from the previous node, completing the full aggregate in 2(N−1)/N communication rounds while transmitting 2(N−1)/N × B total bytes per parameter for N workers and B bytes per parameter. [[PyTorch]] DistributedDataParallel (DDP) implements synchronous ring-allreduce with gradient bucketing: gradients are accumulated into 25 MB buckets and all-reduce operations are launched as soon as each bucket fills during the backward pass, maximally overlapping communication with the remaining backward computation.

  Asynchronous data parallelism, used in the early DistBelief system (Dean et al., 2012), allows workers to compute updates based on potentially stale parameter values, trading convergence noise for reduced synchronisation overhead. This approach is rarely used in frontier model training today because the convergence degradation from staleness at very large scale outweighs the throughput gains, and because gradient compression techniques (1-bit Adam, PowerSGD, error-feedback sketching) can reduce the all-reduce communication volume substantially without introducing staleness.

  Fully Sharded Data Parallel (FSDP), introduced in [[PyTorch]] as a native implementation of ZeRO Stage 3, extends data parallelism to models that cannot fit on a single device. Each rank holds a shard of every parameter tensor; before each forward layer, the full parameter tensor is reconstructed via an all-gather collective, used for computation, and then immediately discarded so that only the shard is retained. After each backward layer, gradient shards are reduced across ranks and optimiser states are updated on the owning rank. FSDP2, released in [[PyTorch]] 2.6, substantially improved the API clarity and multi-node performance for 70B and 405B parameter models, making it the recommended approach for large-scale pre-training within the PyTorch ecosystem.

  ## Model Parallelism

  Model parallelism assigns disjoint sets of a model's layers to different devices, allowing training of models that exceed the combined VRAM of a single device. In the simplest form, a transformer with L layers might assign layers 1 through L/K to device 0, layers L/K+1 through 2L/K to device 1, and so on across K devices. An activation tensor flows sequentially through devices, crossing a device boundary between each group of layers. The primary inefficiency is that only one device is active at any given time during a sequential forward or backward pass — all others are idle — which severely limits GPU utilisation in naive implementations.

  Pipeline parallelism (described below) was developed specifically to address this serial bottleneck by introducing multiple concurrent micro-batches that keep all pipeline stages busy simultaneously. When pipeline parallelism is used, the term "model parallelism" typically refers to the layer assignment structure, while "pipeline parallelism" refers to the scheduling strategy that fills the pipeline with multiple concurrent micro-batches. In practice, model parallelism is rarely used without pipeline scheduling in production training systems.

  ## Tensor Parallelism

  Tensor parallelism shards individual weight matrices across devices rather than assigning whole layers. The Megatron-LM formulation (Shoeybi et al., 2019) applies this to each [[Transformer Architecture]] sub-layer. The multi-head attention sub-layer's query, key, and value projection matrices are split column-wise across T devices, so that each device computes projections for T/T of the heads; the output projection is then split row-wise, and the partial outputs are summed via an all-reduce across the T devices. The MLP sub-layer follows the same column-wise / row-wise split pattern. Each transformer block therefore requires exactly two all-reduce operations — one at the end of the attention sub-layer and one at the end of the MLP sub-layer — regardless of the number of attention heads or the MLP hidden dimension.

  Tensor parallelism requires very high-bandwidth intra-node interconnects because the all-reduce communication must complete synchronously between the two parts of each sub-layer computation: there is no opportunity to overlap it with other useful computation. The NVLink interconnect on NVIDIA H100 GPUs provides 900 GB/s of bidirectional bandwidth per GPU in NVLink 4.0, making intra-node tensor parallelism with T=8 practical. Between nodes, InfiniBand bandwidths are 10–50× lower, making tensor parallelism degrees higher than the number of GPUs per node (typically 8) economically impractical.

  ## Pipeline Parallelism

  Pipeline parallelism addresses the device idle-time problem of model parallelism by introducing micro-batch scheduling. The model is divided into P sequential pipeline stages, each assigned to one or more devices. Instead of sending a single large batch through all stages sequentially, the batch is divided into M micro-batches that enter the pipeline in sequence: stage 0 processes micro-batch 1, then immediately begins micro-batch 2 while stage 1 begins micro-batch 1, and so on. Once the pipeline is filled (after P micro-batches have entered), all P stages are simultaneously processing different micro-batches, maximising utilisation.

  The 1F1B (one-forward-one-backward) schedule (Narayanan et al., PipeDream-Flush) is the production standard: each device alternates between one forward micro-batch pass and one backward micro-batch pass in steady state. The pipeline bubble — idle time during the fill and drain phases — is (P−1)/M of total compute time; with M ≫ P this approaches zero. Interleaved pipeline schedules (Narayanan et al., Megatron-v2, 2021) further reduce bubble fraction by assigning each device multiple non-contiguous stage chunks at the cost of more inter-stage communication. The Chinchilla-era insight that larger token budgets are more compute-efficient than larger models per FLOP has increased M relative to P in recent training configurations, making bubble overhead less significant than in earlier transformer pre-training runs.

  ## 3D Parallelism and Expert Parallelism

  Production-scale training combines data parallelism, tensor parallelism, and pipeline parallelism simultaneously in a configuration sometimes called 3D parallelism. A typical production configuration for a 530-billion-parameter model (circa 2022, as demonstrated in Narayanan et al.'s Megatron-Turing NLG paper) used 8-way tensor parallelism within each physical node (exploiting NVLink intra-node bandwidth), 35-way pipeline parallelism across node groups (each stage consisting of one group of 8 GPUs), and data parallelism across the remaining dimension of the 560-node cluster.

  Sequence parallelism (Korthikanti et al., MLSys 2022) adds a fourth axis by sharding the sequence dimension at layer normalisation and dropout operations, which are independent across positions and therefore admit sequence-parallel execution. This reduces activation memory proportionally to the sequence parallel degree, enabling training at longer context lengths without proportionally increasing [[Gradient Checkpointing]] recomputation overhead.

  Expert parallelism, used in Mixture-of-Experts (MoE) architectures such as GPT-4, Mixtral 8×7B, DeepSeek-V3, and Gemini 2.0, adds yet another dimension: each input token is routed to a subset of expert sub-networks that are distributed across devices. An all-to-all collective routes tokens to their assigned experts and gathers the outputs back, introducing a new communication pattern distinct from the all-reduce and all-gather used in the other parallelism axes. Load balancing (ensuring all experts receive approximately equal numbers of tokens) is a critical training stability concern for MoE distributed training.

  ## Communication Libraries and Hardware Interconnects

  [[NVIDIA NCCL]] (NVIDIA Collective Communications Library) is the dominant library for GPU-to-GPU collective communication. It implements all-reduce, all-gather, reduce-scatter, broadcast, and point-to-point send/receive operations, and automatically selects the optimal algorithm and topology (NVLink for intra-node GPU communication, InfiniBand or RoCE for inter-node communication) at runtime based on the observed cluster topology. NCCL is deeply integrated into [[PyTorch]], [[JAX]], and [[DeepSpeed]], making it the de facto standard for GPU cluster collective communication.

  InfiniBand High Data Rate (HDR, 200 Gb/s per port) and Non-Blocking Data Rate (NDR, 400 Gb/s per port) provide the inter-node backbone in dedicated AI training clusters. RDMA (Remote Direct Memory Access) over InfiniBand bypasses the CPU and transfers data directly between GPU memory on different nodes, minimising latency and CPU overhead. RoCE (RDMA over Converged Ethernet) provides an alternative inter-node fabric in cloud environments and Ethernet-based clusters where InfiniBand is not available, with somewhat higher latency but similar throughput in high-bandwidth Ethernet deployments.

  The NVIDIA GB200 NVL72 architecture, introduced in 2024–2025, eliminates the InfiniBand boundary for tensor-parallel communication within a rack: 72 Grace Hopper Superchips are connected in a single flat NVLink fabric with 57.6 TB/s of total bandwidth, operating as a single NVLink domain without any inter-node InfiniBand crossing for intra-domain communication. This enables tensor parallelism degrees of 72 within a single rack, a radical expansion from the previous intra-node limit of 8 GPUs per NVLink switch group.

  MPI (Message Passing Interface), the traditional HPC standard for distributed communication (standardised 1994), remains relevant in CPU-based and heterogeneous HPC environments including ARCHER2 and older supercomputer installations where GPU-native libraries are not applicable. The Horovod framework (Sergeev & Del Balso, 2018) provides a high-level MPI-like API over NCCL for deep learning distributed training.

  ## Mixed Precision Training and Memory Efficiency

  Modern distributed training universally employs [[Mixed Precision Training]]: weights, activations, and gradients are stored in bfloat16 (brain floating point 16) or float16 during the forward and backward passes, while a full-precision float32 master copy of weights is maintained for the optimiser update step to avoid precision loss accumulation over many gradient steps. The master copy can be optionally sharded across ranks using ZeRO Stage 1, which eliminates the dominant memory cost of the optimiser state without requiring parameter or gradient sharding.

  [[Gradient Checkpointing]] (also called activation checkpointing or selective recomputation) is a technique that trades compute for activation memory: rather than retaining all intermediate activations throughout the forward pass for use in the backward pass, only a subset of checkpoint activations is retained, and the intervening activations are recomputed during the backward pass when needed. This reduces activation memory from O(L) in layers to O(sqrt(L)) at the cost of approximately one additional forward pass per training step. For very long context lengths, gradient checkpointing is essential for maintaining feasible activation memory requirements.

  FlashAttention (Dao et al., 2022) and FlashAttention-2 (Dao, 2024) are IO-aware attention algorithms that restructure the attention computation to minimise reads and writes to GPU DRAM, reducing attention memory from O(n²) to O(n) in the context length n and improving throughput substantially. DistFlashAttn and Ring Attention extend FlashAttention to sequence-parallel configurations, partitioning the query, key, and value tensors across devices along the sequence dimension and passing KV tensors around a ring of devices to compute the full attention without materialising the O(n²) attention matrix globally, enabling training on sequences exceeding 100 million tokens.

  ## Use Cases / Major Families

  ### Pre-Training Frontier Language Models

  The most resource-intensive and high-profile application of distributed training is the pre-training of large language models from scratch on internet-scale text corpora. GPT-3 (175B parameters, OpenAI, 2020) was trained on a custom GPU cluster; GPT-4 (estimated 1.8 trillion parameters across a mixture-of-experts architecture, OpenAI, 2023) was trained on a significantly larger cluster over several months. Meta's Llama 3.1 405B (2024) was trained on 24,000 H100 GPUs using 3D parallelism combined with sequence parallelism. Google's Gemini 2.0 Ultra (2025) was trained on TPU v5p pods using Google's proprietary GSPMD sharding framework. DeepSeek-V3 (671B MoE parameters, 2024) was notably trained at lower cost than comparable models, reporting approximately 2.8 million H800 GPU-hours for a 14.8 trillion token pre-training run, demonstrating that efficient distributed training engineering can substantially reduce training costs.

  ### Vision and Multimodal Model Training

  Distributed training is equally essential for large vision and multimodal models. OpenCLIP (LAION, 2022) trained CLIP variants on billions of image-text pairs across multi-GPU clusters. Stability AI's Stable Diffusion XL (2023) and Sora (OpenAI, 2024) required distributed training on thousands of GPUs for the video diffusion architecture. LLaVA-1.6, InternVL2, and similar vision-language models combine vision encoder pre-training with joint vision-language instruction fine-tuning, each stage requiring distributed training. AlphaFold 3 (Google DeepMind, 2024) was trained on TPU pods using distributed training over protein structure and molecular data, achieving sub-Ångström accuracy on protein-ligand docking prediction.

  ### Reinforcement Learning from Human Feedback (RLHF)

  Post-training alignment via [[Reinforcement Learning from Human Feedback]] introduces additional distributed training complexity because the RLHF training loop requires simultaneously managing at least three models: a reference policy (the original pre-trained or SFT model, frozen), a reward model (trained on human preference data), and the actor/policy model being updated. In PPO-based RLHF, a critic model (a copy of the policy with a value head) may additionally be required. TRL (Transformer Reinforcement Learning Library from Hugging Face), OpenRLHF, and Tulu 3 implement distributed RLHF pipelines that schedule these models across GPU cluster resources, sometimes co-locating multiple model roles on the same device to minimise inter-node data transfer. GRPO (Group Relative Policy Optimisation, DeepSeek-R1, 2025) simplifies the RLHF loop by eliminating the critic model, reducing the distributed training footprint for alignment procedures.

  ### Scientific Machine Learning on HPC

  Scientific machine learning leverages distributed training infrastructure originally developed for AI to train models on scientific datasets at scales that would be impractical on single devices. AlphaFold 2 and 3 (DeepMind) trained on the Protein Data Bank plus predicted structures; GraphCast (DeepMind, 2023) trained a graph neural network on 40 years of ERA5 weather reanalysis data, achieving global weather prediction accuracy competitive with numerical weather prediction at a fraction of the inference cost. The GNoME (Graph Networks for Materials Exploration, DeepMind, 2023) system trained on the Materials Project database, identifying 2.2 million new stable crystal structures — more than all previously known stable crystals combined. Physics-informed neural networks (PINNs), neural operator methods (FNO, DeepONet), and molecular dynamics surrogate models all leverage distributed training for their increasingly large model and dataset scales.

  ### Hyperparameter Search and Neural Architecture Search

  Distributed training infrastructure can be repurposed for parallel hyperparameter search: instead of running one large training job, a scheduler (Ray Tune, Optuna, Weights & Biases Sweeps, or DeepSpeed's Autotuning) launches many smaller training jobs across a shared cluster, each with a different hyperparameter configuration. Population-based training (PBT, DeepMind, 2017) uses a distributed training pool where poorly performing jobs are terminated early and their hyperparameters replaced with perturbed versions of better-performing jobs' hyperparameters, achieving competitive performance with much less total compute than grid or random search.

  ## Academic Context

  The intellectual lineage of distributed training traces through several distinct research communities. In HPC, the development of MPI (Message Passing Interface, 1994) and the ScaLAPACK library established the conceptual vocabulary and collective communication primitives (reduce, broadcast, scatter, gather, all-reduce, all-to-all) that deep learning distributed training frameworks later adopted or re-derived. In the neural network community, early multi-GPU training was ad hoc; the DistBelief system (Dean et al., NeurIPS 2012) was the first large-scale distributed deep learning system, using a parameter server architecture with asynchronous SGD across thousands of CPU cores to train a 1-billion-parameter network — large for its time. The parameter server approach (Ho et al., 2013; Li et al., OSDI 2014) was influential but introduced staleness in gradients and consistency challenges.

  NVIDIA's development of CUDA (2007) and the cuDNN library (2014) made single-GPU training feasible and fast; NCCL (NVIDIA Collective Communications Library, 2016) made multi-GPU communication efficient. The Baidu ring-allreduce paper (Gibiansky, 2017) provided an accessible treatment of bandwidth-optimal all-reduce that motivated the widespread adoption of synchronous data parallelism. Horovod (Sergeev & Del Balso, Uber, 2018) packaged ring-allreduce for [[TensorFlow]] and later [[PyTorch]], dramatically lowering the engineering barrier to multi-GPU training.

  The Megatron-LM paper (Shoeybi et al., NVIDIA, 2019) introduced tensor parallelism for GPT-2 scale models and demonstrated training of 8.3B parameter models on 512 V100 GPUs — at the time, the largest neural language model trained. The ZeRO paper (Rajbhandari et al., Microsoft, SC 2020) provided the memory-partitioning analysis that enabled trillion-parameter model training, and was rapidly incorporated into the DeepSpeed library alongside other efficiency innovations including communication compression, sparse attention, and 1-bit Adam. Narayanan et al. (SC 2021) demonstrated the combination of all three parallelism axes at 3,072 A100 GPUs for the 1T-parameter Megatron-Turing NLG model. The MegaScale paper (Jiang et al., NSDI 2024) described NVIDIA and ByteDance's engineering of a 10,000+ GPU training infrastructure with detailed accounts of the system-level failure modes and reliability engineering required at that scale.

  Key research organisations active in distributed training systems include NVIDIA Research (Megatron-LM, NCCL, TensorRT), Microsoft Research (DeepSpeed, ZeRO, Phi series training infrastructure), Google Research / DeepMind (XLA compiler, GSPMD sharding, TPU systems), Meta AI Research (FairScale, FSDP, Llama training infrastructure, PyTorch DDP), and academic groups at CMU, MIT, Stanford, UC Berkeley, University of Washington, University of Edinburgh, and UCL.

  ## Current Landscape (2026)

  As of mid-2026, the dominant frameworks for distributed LLM training are [[PyTorch]] FSDP2 (for fine-tuning and mid-scale pre-training on 2–512 GPU configurations), Microsoft DeepSpeed ZeRO-3 (for large-scale pre-training where per-device VRAM is the binding constraint), and Megatron-Core (for frontier-scale pre-training combining all three parallelism axes). TorchTitan, introduced by Meta as [[PyTorch]]'s native multi-dimensional parallelism solution, has gained rapid adoption for its composable FSDP, tensor parallelism, and pipeline parallelism APIs and its reference training recipes for LLaMA and Gemma model families.

  NVIDIA's Blackwell GB200 NVL72 architecture — shipping in volume from late 2024 through 2025 — delivers approximately 3× the training throughput of H100 for frontier LLM workloads, validated by MLPerf Training v5.0 (June 2025) benchmarks. A 2,496-GPU GB200 cluster achieved 1,829 teraFLOPS (roughly 1.8 petaFLOPS) of application throughput on Llama 3.1 405B training at 90% scaling efficiency, and was the only submission to complete the full MLPerf Training suite including the new 405B parameter benchmark. GB200 NVL72 delivers almost 2× the performance per dollar of H100 on the Llama 3.1 405B benchmark. Microsoft's MLPerf Training v4.1 submission using a 512-H200 GPU cluster demonstrated a 28% speedup over comparable H100 runs, confirming H200 as a meaningful intermediate option in the transition to Blackwell.

  DeepSpeed released several significant capabilities in 2025–2026: Arctic Long Sequence Training (ALST, June 2025) for scalable and efficient multi-million-token sequence training; ZenFlow stall-free offloading engine (August 2025) for stall-free LLM training via temporal computation-communication decoupling; SuperOffload for training on superchip architectures including GB200 (October 2025); DeepSpeed Core API updates with PyTorch-style backward and low-precision master states (December 2025); and SDMA (System DMA) for ZeRO-3 collective offloading on AMD GPUs (May 2026). AMD ROCm 6.x has improved distributed training support substantially, making MI300X clusters a viable alternative to NVIDIA H100 for ZeRO-based training at competitive cost per FLOP.

  The MLCommons MLPerf Training suite continues to be the authoritative cross-vendor benchmark for distributed training performance. MLPerf Training v5.0 (June 2025) added a 405-billion-parameter Llama 3.1 training benchmark as the headline workload, reflecting the shift in industry practice towards training at this scale. MLPerf Training v5.1 (September 2025) expanded participation and added inference benchmarks for long-context and multimodal models, with record participation from cloud providers, hardware vendors, and system integrators.

  In the framework ecosystem, [[JAX]] with its pjit and shard_map APIs (now consolidated in the jax.sharding module) is the primary alternative to the PyTorch ecosystem for distributed training, used extensively at Google (via XLA compilation targeting TPUs) and gaining adoption in non-Google academic research. JAX's functional programming model and automatic differentiation through arbitrary Python code makes it attractive for research involving custom parallelism patterns that are difficult to express in PyTorch's eager execution model.

  ## UK Context

  The United Kingdom's distributed training infrastructure expanded substantially in 2024–2026. Isambard-AI at the University of Bristol — built in partnership with HPE using 5,400 NVIDIA GH200 Grace Hopper Superchips in an HPE Cray EX chassis with a Slingshot high-speed fabric — launched in July 2025. By November 2025 it ranked 11th in the world on the TOP500 supercomputer list and 4th on the Green500 list for energy efficiency, running exclusively on zero-carbon electricity sourced from hydroelectric generation. The Dawn supercomputer at the University of Cambridge complements Isambard-AI; together they bring the UK to 23 AI ExaFLOPs of national AI compute capacity, a substantial increase from the approximately 2 ExaFLOPs available in 2023.

  DSIT extended ARCHER2 at Edinburgh University until November 2026 while planning its successor under the AI Research Resource (AIRR) programme. The UK Government's AI Opportunities Action Plan (January 2025) committed to scaling AIRR capacity by at least 20× by 2030, with a £1 billion allocation to GPU compute expansion and a concurrent £250 million procurement of cloud AI compute capacity from hyperscalers (AWS, Azure, Google Cloud) to supplement on-premises national infrastructure. AIRR access opened to academia and industry via a competitive allocation process from July 2025, with further access extended to start-ups and innovators through the Sovereign AI Fund.

  UK academic institutions are active contributors to distributed training research and deployment. Edinburgh's EPCC (Edinburgh Parallel Computing Centre) brings HPC expertise to AI training pipelines at ARCHER2 and provides training and support for distributed training workflows for the UK academic community. UCL's Centre for Artificial Intelligence and Manchester's £120 million AI research hub (opened 2024) conduct research into efficient distributed training algorithms, communication-computation overlap, and heterogeneous cluster scheduling for mixed CPU/GPU workloads. The Alan Turing Institute coordinates distributed training research across its network of universities, with particular focus on [[Federated Learning]] and privacy-preserving training relevant to NHS data governance.

  The NHS Long-Term Plan and the Health Data Research Service (£600 million commitment from DHSC and Wellcome Trust) are motivating investment in federated and distributed training infrastructure capable of training models across geographically distributed NHS trusts without centralising patient data at a single training facility. Imperial College London's Department of Computing applies distributed training to medical imaging at scale across multi-site clinical data. The UK Biobank (>500,000 participants, genotypic and phenotypic data) and the NHS Secure Data Environment programme provide UK-specific large-scale scientific datasets that motivate distributed training infrastructure development for biomedical research.

  UK industry has also made substantial distributed training investments. Google DeepMind London (>1,500 staff) uses TPU pods and GPU clusters for training Gemini and specialist scientific models including AlphaFold 3. Wayve (autonomous vehicle AI, Cambridge) and Graphcore (bespoke Intelligence Processing Unit hardware for training, Bristol) represent indigenous UK AI hardware and training infrastructure companies. ARM Holdings (Cambridge) designs the Grace CPU architecture used in the GH200 superchip that underpins Isambard-AI, with UK-designed processor cores at the heart of the UK's own national AI computing infrastructure.

  ## Future Directions (2026–2030)

  Several technical trajectories will shape distributed training over the next four years. Wafer-scale integration, exemplified by Cerebras WSE-3 and Groq TSP, offers an alternative in which entire large models fit within the interconnect fabric of a single chip or tray, eliminating inter-device communication for models of up to tens of billions of parameters. The NVLink domain expansion trajectory (from 8 GPUs per node in 2022 to 72 per NVL72 rack in 2025) indicates that this boundary will continue moving, potentially reaching 288 or more GPUs in a single flat NVLink fabric in future product generations.

  Sequence length scaling is an emerging axis of distributed training complexity. Training on contexts exceeding 1 million tokens requires ring attention, flash attention with distributed KV sharing, or other sequence-parallel techniques beyond the standard sequence parallelism at layer norm boundaries. As frontier models are expected to natively support 1–10 million token contexts by 2028–2030 for document-level reasoning and multi-hour video processing, the distributed training infrastructure must scale accordingly.

  Mixture-of-Experts architectures add a fourth expert parallelism axis to 3D parallelism, and load balancing across heterogeneous expert populations in distributed settings remains an open research problem. Structured sparsity (2:4 sparsity native to NVIDIA Hopper and Blackwell) and quantisation-aware distributed training (QAT at bfloat8 or int8 precision for weights) are emerging techniques that reduce the volume of data requiring communication and the memory footprint of optimiser states. Post-training scaling via inference-time compute (test-time training, chain-of-thought reasoning with MCTS search) partially redistributes compute budgets from pre-training towards inference, potentially moderating the growth of individual pre-training run sizes while increasing aggregate inference-time compute demand.

  [[Federated Learning]] research is maturing to bridge the gap between distributed training on homogeneous GPU clusters and privacy-preserving distributed fine-tuning over non-IID data at health trusts, financial institutions, and enterprise data silos. FedProx, FedNova, and Flower-based frameworks are being deployed in UK NHS pilot programmes for cross-trust model training under information governance constraints. The convergence of [[Federated Learning]] techniques with PEFT methods (LoRA-based federated fine-tuning, as in the FLoRA and FedPEFT literature) may make large foundation model adaptation across distributed data silos practical without the communication overhead of full-parameter federated training.

  ## Implementation Checklist and Best Practices

  Practitioners setting up distributed training for the first time on a multi-GPU cluster frequently encounter a predictable set of configuration pitfalls and tuning decisions. The following structured checklist reflects accumulated community experience:

  **Step 1 — Verify cluster connectivity before writing code:**
  - Confirm NCCL all-reduce bandwidth with the nccl-tests benchmark (allreduce_perf)
  - Target bandwidth should be ≥70% of theoretical InfiniBand link bandwidth
  - Check NVLink bandwidth with nvidia-smi nvlink --status
  - Verify NVLink connectivity topology with nvidia-smi topo --matrix

  **Step 2 — Choose parallelism strategy based on model size and hardware:**
  - Single node (1–8 GPUs), model fits on one GPU: use DDP (PyTorch DistributedDataParallel)
  - Single node (1–8 GPUs), model does not fit on one GPU: use FSDP Stage 3 or DeepSpeed ZeRO-3
  - Multi-node (8–512 GPUs), moderate model size (7B–70B): use FSDP2 or DeepSpeed ZeRO-3 with gradient accumulation
  - Multi-node (512+ GPUs), very large model (70B+): use 3D parallelism via Megatron-Core or TorchTitan

  **Step 3 — Configure NCCL environment variables for your cluster:**
  - NCCL_IB_HCA: specify which InfiniBand HCA devices to use for inter-node communication
  - NCCL_SOCKET_IFNAME: specify which network interface for fallback communication
  - NCCL_P2P_DISABLE=1 for environments where NVLink P2P is unavailable (PCIe-only nodes)
  - NCCL_NET_GDR_LEVEL: set GPU-Direct RDMA level based on interconnect topology
  - CUDA_VISIBLE_DEVICES: control GPU assignment to avoid PCIe-bridging performance issues

  **Step 4 — Set learning rate and batch size for distributed scale:**
  - Global batch size = local batch size × gradient accumulation steps × number of data-parallel ranks
  - Apply linear scaling rule: learning rate scales proportionally with global batch size
  - Apply warmup: 1000–4000 steps from 0 to peak learning rate
  - Apply cosine decay or linear decay: from peak to 10% of peak over training duration
  - Apply gradient norm clipping: max_norm = 1.0 for transformer architectures

  **Step 5 — Configure checkpointing and monitoring:**
  - Checkpoint every 500–1000 steps to shared parallel filesystem or object storage
  - Log at least: loss, learning rate, gradient norm, tokens/second throughput, GPU utilisation
  - Configure DCGM for hardware health monitoring (temperature, power, NVLink error counts)
  - Set up automatic checkpoint validation (load and forward pass a test batch after checkpoint write)

  **Step 6 — Profile before full scale:**
  - Use PyTorch Profiler or NVIDIA Nsight Systems to profile a small-scale run (1 node, 8 GPUs)
  - Identify whether the training step is compute-bound or communication-bound
  - Adjust bucketing size, gradient accumulation, and overlap settings to balance
  - Target MFU > 35% as a baseline; well-tuned runs achieve 50–65% on H100 clusters

  ## Formal Algorithms

  ### Ring-Allreduce

  Given N workers each holding a gradient tensor g_i of K elements, ring-allreduce proceeds in two phases. In the scatter-reduce phase (N−1 steps), each worker simultaneously sends a chunk of size K/N to the next worker in the ring and receives a chunk from the previous worker, accumulating partial sums. After N−1 steps, each worker holds a partial sum of the full gradient across all N workers for its assigned chunk. In the allgather phase (N−1 steps), each worker distributes its fully-reduced chunk to all other workers. Total communication per worker is 2(N−1)/N × K elements — approximately 2K elements for large N, independent of N — achieving bandwidth-optimal performance. This contrasts with parameter-server all-reduce where the server becomes a bottleneck and total communication scales as 2K × N.

  ### ZeRO Stage 3 Memory Analysis

  For a model with Φ parameters trained with Adam optimiser at mixed precision:
  - Standard data parallelism memory per GPU: 16Φ bytes (2 for fp16 params, 2 for fp16 grad, 4 for fp32 master param, 8 for Adam first+second moments)
  - ZeRO Stage 1 (optimiser state partition): 4Φ + 12Φ/N bytes
  - ZeRO Stage 2 (+ gradient partition): 2Φ + 14Φ/N bytes
  - ZeRO Stage 3 (+ parameter partition): 16Φ/N bytes
  For N=1024 data-parallel ranks, Stage 3 reduces per-GPU memory from 16Φ to 16Φ/1024 — a 1024× reduction — enabling trillion-parameter training on clusters with modest per-GPU VRAM.

  ## Benchmark Datasets and Evaluation Metrics

  - **MLPerf Training**: The authoritative industry benchmark for distributed training performance. Workloads in v5.0 (2025) include BERT pre-training, ResNet-50 image classification, Mask R-CNN object detection, 3D-UNet medical image segmentation, DLRM recommendation model, GPT-3 6.7B language model, and Llama 3.1 405B (new in v5.0). Metrics: time-to-train to a target quality threshold.
  - **MFU (Model FLOP Utilisation)**: Fraction of theoretical peak FLOP throughput attained; typically 35–60% for well-tuned distributed training runs on H100 clusters. GB200 NVL72 clusters have demonstrated up to 68–72% MFU on transformer workloads.
  - **Scaling efficiency**: (Throughput on N GPUs) / (N × Throughput on 1 GPU); well-tuned 3D parallel runs achieve 88–95% scaling efficiency up to thousands of GPUs.
  - **Cost per FLOP**: USD per petaFLOP-second of training compute; a key economic metric shaping hardware procurement decisions for distributed training clusters.
  - **Communication-to-computation ratio**: Ratio of time spent in collective operations to time spent in GEMM/attention kernels; a diagnostic metric for identifying communication bottlenecks.

  ## Theoretical Foundations and Scaling Laws

  The distributed training paradigm is inseparably connected to the empirical discovery of neural [[Scaling Laws]], which describe how model performance improves predictably with increases in model parameters N, training dataset size D (in tokens), and compute budget C = 6ND (FLOPs). Kaplan et al. (OpenAI, 2020) demonstrated smooth power-law scaling L(N, D) ∝ N^{-α_N} + D^{-α_D} + L_∞ for language model loss L with exponents α_N ≈ 0.076 and α_D ≈ 0.095, suggesting that both more data and more parameters reliably improve performance with diminishing but consistent returns. This relationship is only observable — and exploitable — through distributed training, since the scale required to observe clean scaling behaviour far exceeds what any single device can host or process.

  The Chinchilla scaling law analysis (Hoffmann et al., Google DeepMind, NeurIPS 2022) revised the Kaplan et al. recommendations significantly: optimal compute allocation requires training for approximately D ≈ 20N tokens (roughly equal scaling of parameters and data tokens), rather than the larger-N-than-data regime that characterised the GPT-3 era. This finding reshaped how large-scale distributed training budgets are allocated: rather than training very large models for fewer steps, Chinchilla-optimal training allocates a given compute budget more evenly between model scale and data scale. Llama 3.1 (Meta, 2024), trained on 15 trillion tokens with 405B parameters, and DeepSeek-V3 (2024), trained on 14.8 trillion tokens with 671B MoE parameters, both exemplify the Chinchilla-derived approach to compute-optimal pre-training.

  The downstream implication for distributed training systems is significant: Chinchilla-optimal runs require not just more GPUs to host a larger model, but also a longer training horizon with more steps through a larger dataset, increasing total cluster-hours required and correspondingly increasing the probability of hardware failure events. Data pipeline engineering (high-throughput dataset loading, shuffling, and deduplication across trillion-token corpora) becomes as important as the model parallelism strategy for maintaining GPU utilisation and avoiding I/O bottlenecks.

  Inference-time compute scaling — exemplified by OpenAI's o3/o4-mini reasoning models and DeepSeek-R1's long chain-of-thought approach — is an emerging alternative to pre-training scale as a route to improved benchmark performance. These models are trained with reinforcement learning on reasoning traces, requiring distributed GRPO or PPO training that differs structurally from standard pre-training: the effective batch size is smaller, gradient variance is higher, and the training objective is non-stationary. Distributed training systems must adapt to these requirements, with frameworks like TRL, OpenRLHF, and NeMo-Aligner specifically engineered for scalable RL-based post-training.

  ## Standards and Ecosystem

  The distributed training ecosystem lacks a single formal governing body, but several de facto standards and community resources shape practice. The MLCommons consortium (founded 2019 by Google, Intel, Microsoft, NVIDIA, and others) administers the MLPerf benchmarking suite, which has become the dominant cross-vendor performance standard for both training and inference. MLPerf Training results are published biannually and are widely cited in hardware procurement decisions, academic systems papers, and cloud provider marketing.

  The MPI Standard (Message Passing Interface, versions 1.0 through 4.1) provides the formal specification for collective communication primitives that underpin distributed training. NCCL implements a subset of MPI's collective operations optimised for GPU-to-GPU communication. The OpenAI Triton compiler (open-sourced 2021) provides a Python-embedded DSL for writing GPU kernels at higher abstraction than CUDA C, enabling researchers to implement custom collective kernels without GPU assembly programming. XLA (Accelerated Linear Algebra), Google's compiler backend for JAX and TensorFlow, provides the GSPMD (General and Scalable Parallelism for ML Computation) framework that automatically partitions computation graphs across TPU or GPU meshes given a user-specified device mesh and partition specification.

  PyTorch 2.x (released 2023–2025) introduced significant distributed training improvements including torch.compile for ahead-of-time kernel fusion (reducing kernel launch overhead in distributed settings), FSDP2 for improved multi-node parameter sharding, and the DTensor (Distributed Tensor) abstraction for expressing tensor parallelism without framework-specific workarounds. TorchTitan integrates these primitives into a reference implementation for frontier LLM pre-training. JAX 0.4.x with its jax.sharding.NamedSharding and shard_map APIs provides equivalent expressibility for the JAX-XLA ecosystem.

  The Hugging Face Accelerate library provides a high-level abstraction layer over PyTorch DDP, FSDP, and DeepSpeed, enabling the same training script to run across single-GPU, multi-GPU, and multi-node configurations with minimal code changes. This democratisation of distributed training access has been significant for the research community, where many groups lack systems engineering expertise to directly configure low-level parallelism strategies. Similarly, Hugging Face Transformers SFTTrainer and TRL integration with FSDP and DeepSpeed reduces the barrier to distributed RLHF training for academic groups.

  ## Hardware Architecture Generations and Their Distributed Training Impact

  The history of distributed training is inseparable from the evolution of GPU hardware generations, each of which opened new scales of model and cluster size. The NVIDIA Tesla V100 (2017, 32 GB HBM2, 125 TFLOPS bfloat16) enabled the first experiments with very large transformer models including GPT-2, T5-11B, and the original Megatron-LM 8.3B. The NVIDIA A100 (2020, 80 GB HBM2e, 312 TFLOPS bfloat16) enabled the frontier model pre-training era: GPT-3 (175B), PaLM (540B), Chinchilla (70B), and the early Llama family were all trained on A100 clusters. The NVLink 3.0 interconnect on A100 provided 600 GB/s intra-node bandwidth, enabling 8-way tensor parallelism within a node.

  The NVIDIA H100 (2022, 80 GB HBM3, 989 TFLOPS bfloat16 with sparsity, NVLink 4.0 at 900 GB/s intra-node, 3.35 TB/s HBM3 bandwidth) represented a generational leap: roughly 3× the tensor parallelism bandwidth and 3× the compute throughput of A100, enabling the LLaMA 2 and 3 era models and making 70B parameter models trainable on a single 8×H100 DGX H100 server (640 GB aggregate VRAM). H100 SXM5 in NVLink Switch System configurations (NVL8 and DGX SuperPOD) enabled 8-GPU NVLink domains as the standard intra-node tensor-parallel group. H200 (2024) upgraded to 141 GB HBM3e with 4.8 TB/s memory bandwidth, providing the memory headroom for longer context training.

  The NVIDIA Blackwell B200/GB200 (2024–2025) further advances the capability envelope: 192 GB HBM3e, 4.7 TB/s memory bandwidth, 20 PFLOPS bfloat16 (with FP8 and structured sparsity), and the GB200 NVL72 rack architecture that connects 72 B200 GPUs in a single NVLink 5.0 fabric (57.6 TB/s total bandwidth, 1.8 TB/s per GPU switch bandwidth). This architecture eliminates the need for InfiniBand between GPUs within a rack for tensor-parallel communication, enabling 72-way tensor parallelism with NVLink bandwidth — more than an order of magnitude more intra-domain bandwidth than the 8-way limit of prior generation NVLink switch groups. The MLPerf Training v5.0 result of 1.8 petaFLOPS application throughput at 90% scaling efficiency on a 2,496-GPU GB200 cluster demonstrates the practical impact of this architecture.

  AMD's MI300X (2023, 192 GB HBM3, 5.3 TB/s memory bandwidth) provides a competitive alternative to NVIDIA H100 for distributed training workloads, particularly for inference-adjacent tasks where HBM bandwidth is the primary bottleneck. AMD ROCm 6.x compatibility with PyTorch, DeepSpeed ZeRO, and NCCL-equivalent RCCL collective operations has substantially improved MI300X adoption for distributed training in 2024–2026. Several cloud providers (Microsoft Azure ND MI300X v5, Oracle OCI, CoreWeave) offer MI300X clusters as an alternative to NVIDIA-based training infrastructure.

  Google's TPU (Tensor Processing Unit) represents an alternative architecture trajectory for distributed training. TPU v5p (2023), deployed in Google's data centres for Gemini training, provides 918 TFLOPS bfloat16 per chip with 95 GB HBM at 2.76 TB/s bandwidth, interconnected in a 3D torus mesh topology with 4.8 TB/s inter-chip bandwidth per chip — substantially higher than comparable InfiniBand inter-node bandwidth. The XLA compiler and GSPMD (General and Scalable Parallelism for ML Computation) sharding framework provide the distributed training infrastructure, enabling training of Gemini 2.0 Ultra across TPU pods of thousands of chips with near-linear scaling efficiency.

  ## Economic and Environmental Context

  The economics of distributed training have evolved dramatically as model scales have grown. In 2020, GPT-3 training was estimated at approximately $4–12 million in cloud compute costs using A100 GPUs. By 2024, training a frontier model comparable to GPT-4 was estimated at $50–100 million or more. Meta reported approximately 6.4 million H100 GPU-hours for Llama 3.1 405B pre-training in 2024. DeepSeek reported 2.8 million H800 GPU-hours for DeepSeek-V3 (approximately $5.5 million at cloud rates), demonstrating that engineering efficiency can substantially reduce training cost relative to naively scaling parameter count and training duration.

  Energy consumption and carbon footprint of distributed training are increasingly scrutinised. A single frontier model pre-training run consumes energy equivalent to hundreds of trans-Atlantic flights. The Isambard-AI supercomputer at Bristol, which uses zero-carbon electricity, is one example of how UK compute infrastructure is addressing this concern. Microsoft's commitment to 100% renewable energy for Azure data centres, Google's carbon-matching programme, and NVIDIA's energy efficiency improvements across GPU generations (GB200 delivers 3× training throughput at roughly comparable power per GPU to H100, implying 3× better energy efficiency per training FLOP) are industry responses to the sustainability challenge. The MLPerf Green500 metric (performance per watt) is an emerging complementary benchmark to raw training throughput.

  ## Infrastructure Design Patterns and Operational Considerations

  Large-scale distributed training systems require careful co-design of hardware topology, networking, storage, and software to achieve maximum efficiency. A well-designed training cluster for frontier model pre-training typically follows a hierarchical architecture: within each server, 8 GPUs are connected by NVLink for intra-node high-bandwidth communication; servers are interconnected by InfiniBand NDR (400 Gb/s per port) in a fat-tree or dragonfly topology for inter-node communication; and a parallel file system (Lustre, GPFS, or AWS S3/GCS for cloud clusters) provides the high-throughput storage substrate for dataset access and checkpoint writing.

  Data pipeline engineering — loading training tokens from storage, applying tokenisation and data augmentation, and delivering them to GPUs fast enough to avoid I/O-bound idle time — is a frequently underestimated challenge. For a cluster training at 100,000 tokens per second, the data loader must sustain approximately 200 MB/s of compressed dataset reads (assuming 2 bytes per token and 50% compression). With trillion-token datasets stored in sharded WebDataset or MDS format across distributed object storage, this requires careful data loader design with asynchronous pre-fetching, buffer management, and dataset sharding aligned with the number of data-parallel workers. NVIDIA's DALI (Data Augmentation Library) and the MosaicML StreamingDataset library address this for GPU-native distributed data loading.

  Checkpoint writing at scale presents a complementary challenge: writing a 70B parameter model checkpoint (140 GB in bfloat16) every 10 minutes requires 14 MB/s sustained write bandwidth from all training nodes. On large clusters, checkpoint writing is typically parallelised across all ranks writing separate shards simultaneously to a high-bandwidth parallel file system, then atomically committed as a complete checkpoint. The TRANSOM and Oobleck systems described in the academic context address the complementary challenge of fault recovery without full checkpoint restart.

  Learning rate scheduling and numerical stability are critical engineering concerns at distributed training scale. The standard approach uses a linear warmup from 0 to peak learning rate over the first 1,000–4,000 steps (to avoid early divergence when gradients are large and noisy), followed by a cosine decay to 10% of peak learning rate over the remaining training duration. Weight decay regularisation (L2 penalty on parameter magnitudes, typically 0.1) prevents weight explosion in long training runs. Gradient norm clipping (maximum gradient L2 norm of 1.0) prevents individual large-gradient steps from destabilising training, a particularly important safeguard in distributed training where gradient synchronisation errors or numerical outliers in activation tensors can produce abnormally large gradients in rare cases.

  Distributed training monitoring requires sophisticated observability infrastructure. Weights & Biases, Aim, MLflow, and TensorBoard are widely used for logging training metrics (loss, perplexity, gradient norm, learning rate, throughput in tokens/second) from distributed runs. NVIDIA DCGM (Data Centre GPU Manager) provides GPU health monitoring including temperature, utilisation, memory usage, NVLink error rates, and power consumption. Prometheus and Grafana are used for cluster-level infrastructure monitoring. Anomaly detection in training metrics — loss spikes, sudden throughput drops, NVLink error rate increases — is a critical operational capability for identifying and recovering from silent hardware degradation before it produces a full-run failure.

  ## Relationship to Federated Learning

  Distributed training and [[Federated Learning]] are related but distinct paradigms that are frequently conflated. Standard distributed training assumes that all compute nodes have access to the complete training dataset and communicate frequently (every training step) over a high-bandwidth dedicated interconnect. [[Federated Learning]] distributes training across nodes that hold private local datasets that cannot be shared, communicates only aggregate gradient updates (typically at lower frequency than per-step synchronisation), and must tolerate heterogeneous data distributions (non-IID data across nodes) and much higher communication latency (since federating across organisations typically involves consumer internet rather than InfiniBand).

  The convergence between distributed training and [[Federated Learning]] is occurring at the fine-tuning layer: organisations with sensitive data (NHS trusts, financial institutions, research universities) can use PEFT methods (LoRA, DoRA) to fine-tune a small adapter on their local data and federate only the small adapter parameters — rather than a full model gradient — to an aggregation server. This federated PEFT approach (FLoRA, FedPEFT) reduces the communication volume of federated fine-tuning dramatically compared to full-gradient federation, potentially making communication overhead comparable to standard distributed training rather than orders of magnitude higher.

  ## Relationship to Cloud Computing and MLOps

  Cloud computing platforms (AWS SageMaker, Google Cloud Vertex AI, Microsoft Azure ML) provide managed distributed training infrastructure that abstracts away much of the low-level cluster management while preserving access to GPU clusters of thousands of nodes. Spot instance preemption in cloud environments introduces an additional source of training interruption beyond hardware failure, making robust [[Checkpoint Recovery]] and job restart automation even more important in cloud-based distributed training than in on-premises cluster settings.

  The MLOps practice of treating model training as a reproducible, versioned pipeline — with dataset versioning (DVC), training configuration management (Hydra, OmegaConf), experiment tracking (W&B, MLflow), and model registry (MLflow Model Registry, Hugging Face Hub) — extends naturally to distributed training. Reproducibility at distributed training scale is challenging because non-deterministic floating-point operations in collective communication (the order of reduction across ranks can vary) and stochastic data loading introduce sources of run-to-run variation that must be explicitly controlled for full reproducibility, typically through fixed random seeds, deterministic CUDA operations, and dataset ordering specifications.

  ## Research and Literature

  1. Dean, J., Corrado, G., Monga, R., et al. (2012). Large scale distributed deep networks. *NeurIPS 2012*.
  2. Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). ImageNet classification with deep convolutional neural networks. *NeurIPS 2012*.
  3. Message Passing Interface Forum. (1994). MPI: A message-passing interface standard. Technical Report, University of Tennessee.
  4. Gibiansky, A. (2017). Bringing HPC techniques to deep learning. Baidu Research Blog. https://andrew.gibiansky.com/blog/machine-learning/baidu-allreduce/
  5. Sergeev, A., & Del Balso, M. (2018). Horovod: fast and easy distributed deep learning in TensorFlow. *arXiv:1802.05799*.
  6. Huang, Y., Cheng, Y., Bapna, A., et al. (2019). GPipe: Efficient training of giant neural networks using pipeline parallelism. *NeurIPS 2019*.
  7. Narayanan, D., Harlap, A., Phanishayee, A., et al. (2019). PipeDream: Generalised pipeline parallelism for DNN training. *SOSP 2019*.
  8. Shoeybi, M., Patwary, M., Puri, R., et al. (2019). Megatron-LM: Training multi-billion parameter language models using model parallelism. *arXiv:1909.08053*.
  9. Rajbhandari, S., Rasley, J., Ruwase, O., & He, Y. (2020). ZeRO: Memory optimizations toward training trillion parameter models. *SC20*.
  10. Li, S., Zhao, Y., Varma, R., et al. (2020). PyTorch distributed: Experiences on accelerating data parallel training. *PVLDB 2020*.
  11. Narayanan, D., Shoeybi, M., Casper, J., et al. (2021). Efficient large-scale language model training on GPU clusters using Megatron-LM. *SC21*.
  12. Rajbhandari, S., Ruwase, O., Rasley, J., Smith, S., & He, Y. (2021). ZeRO-Infinity: Breaking the GPU memory wall for extreme scale deep learning. *SC21*.
  13. Korthikanti, V., Casper, J., Lym, S., et al. (2022). Reducing activation recomputation in large transformer models. *MLSys 2022*.
  14. Dao, T., Fu, D. Y., Ermon, S., Rudra, A., & Ré, C. (2022). FlashAttention: Fast and memory-efficient exact attention with IO-awareness. *NeurIPS 2022*.
  15. Dao, T. (2023). FlashAttention-2: Faster attention with better parallelism and work partitioning. *ICLR 2024*.
  16. Jiang, Z., Lin, H., Zhong, Y., et al. (2024). MegaScale: Scaling large language model training to more than 10,000 GPUs. *NSDI 2024*.
  17. Luo, S., Zhou, J., He, S., et al. (2023). TRANSOM: An efficient fault-tolerant system for training LLMs. *arXiv:2310.10046*.
  18. Jiang, Y., Zhu, Y., Lan, C., et al. (2023). Oobleck: Resilient distributed training of large models using pipeline templates. *SOSP 2023*.
  19. MLCommons. (2025). MLPerf Training v5.0 Results. https://mlcommons.org/
  20. NVIDIA. (2025). NVIDIA Blackwell enables 3× faster training. NVIDIA Technical Blog. https://developer.nvidia.com/blog/nvidia-blackwell-enables-3x-faster-training/
  21. Microsoft Research. (2025). DeepSpeed updates: SDMA, ZenFlow, SuperOffload. https://www.deepspeed.ai/
  22. Nebius. (2025). MLPerf Training v5.1: Leading results on NVIDIA Blackwell and Blackwell Ultra systems. https://nebius.com/blog/posts/mlperf-training-v5-1-results
  23. UK Government. (2025). AI Opportunities Action Plan: Government response. DSIT. https://assets.publishing.service.gov.uk/media/678639913a9388161c5d2376/ai_opportunities_action_plan_government_repsonse.pdf
  24. University of Bristol. (2025). Isambard-AI launches July 2025. https://www.bristol.ac.uk/research/centres/bristol-supercomputing/articles/2025/isambard-ai-launches-july-2025.html
  25. NVIDIA. (2025). Isambard-AI, the UK's most powerful AI supercomputer, goes live. NVIDIA Blog. https://blogs.nvidia.com/blog/isambard-ai/
  26. Kaplan, J., McCandlish, S., Henighan, T., et al. (2020). Scaling laws for neural language models. *arXiv:2001.08361*.
  27. Hoffmann, J., Borgeaud, S., Mensch, A., et al. (2022). Training compute-optimal large language models. *NeurIPS 2022* (Chinchilla). arXiv:2203.15556.
  28. HPCwire. (2025). Blackwell GPUs lift NVIDIA to the top of MLPerf Training Rankings. https://www.hpcwire.com/2025/06/04/blackwell-gpus-lift-nvidia-to-the-top-of-mlperf-training-rankings/

  ## Case Studies and Notable Training Runs

  ### GPT-3 (OpenAI, 2020)
  GPT-3 with 175 billion parameters was trained on a custom cluster of approximately 10,000 V100 GPUs managed by Microsoft Azure. The training used data parallelism as the primary strategy, with 96-way tensor parallelism within transformer blocks and 8-way pipeline parallelism across 8-GPU node groups, combined with the Adam optimiser in mixed precision. Total compute was approximately 3.14×10²³ FLOPs across the full training run of approximately 300 billion tokens. The training demonstrated that model performance continued to scale smoothly with compute, directly motivating the scaling laws research programme.

  ### Megatron-Turing NLG 530B (Microsoft & NVIDIA, 2021)
  The 530-billion-parameter Megatron-Turing NLG model was trained on 2,240 A100 80GB SXM4 GPUs using Megatron-LM's 3D parallelism: 8-way tensor parallelism within each node (NVLink), 35-way pipeline parallelism across node groups, and data parallelism across the remaining cluster dimension. Each node had 8 GPUs connected by 4th generation NVLink (600 GB/s). Inter-node communication used InfiniBand HDR (200 Gb/s). The training run required careful calibration of the 1F1B pipeline schedule and gradient accumulation to achieve the target global batch size of approximately 1.9 million tokens. MFU achieved was approximately 38% of theoretical peak.

  ### Llama 3.1 405B (Meta, 2024)
  Meta's Llama 3.1 405B was trained on approximately 24,576 H100 80GB SXM5 GPUs across Meta's data centres using a combination of 8-way tensor parallelism, 16-way pipeline parallelism, and data parallelism, with FSDP applied at the data-parallel level. The training corpus comprised approximately 15.6 trillion tokens of curated multilingual text. Meta reported a series of training instabilities at large scale — loss spikes requiring checkpoint rollback — and described architectural modifications (z-loss regularisation, attention QK normalisation) that improved stability. The total compute was approximately 3.8×10²⁵ FLOPs, making it one of the most compute-intensive publicly described training runs.

  ### DeepSeek-V3 (DeepSeek AI, 2024)
  DeepSeek-V3 with 671 billion MoE parameters (37B active parameters per token) was trained on 2,048 H800 80GB GPUs over approximately 54 days, consuming approximately 2.788 million H800 GPU-hours at an estimated cost of $5.5 million USD at prevailing cloud rates. The training used 16-way expert parallelism (each expert distributed across 16 GPUs), 8-way tensor parallelism, and pipeline parallelism. The efficiency of DeepSeek-V3's training relative to comparable models demonstrated that careful algorithmic and engineering choices — including their Multi-head Latent Attention (MLA) and auxiliary-loss-free load balancing for MoE — can achieve frontier model performance at substantially lower training cost.

  ### Isambard-AI Training Workloads (UK, 2025–2026)
  Since opening in July 2025, Isambard-AI at the University of Bristol has hosted distributed training workloads from UK universities and industry users under the AIRR programme. Representative workloads include: protein structure prediction model fine-tuning for UK Biobank genomic data (University of Oxford and UCL); climate model emulator training on ERA5 reanalysis data (UK Met Office and University of Reading); biomedical named entity recognition LLM fine-tuning for NHS clinical coding (Imperial College London and NHS AI Lab); and foundation model pre-training for materials science (Edinburgh, Cambridge, and NPL). The system's 5,400 GH200 Grace Hopper Superchips with NVLink-C2C CPU-GPU interconnects enable efficient distributed training with reduced CPU-GPU data transfer bottlenecks relative to conventional PCIe-connected GPU servers.

  ## Security, Governance, and Access Controls

  Large-scale distributed training clusters handling sensitive datasets or proprietary model weights require careful security architecture. Training clusters are typically isolated from the public internet behind strict egress controls, with dataset access mediated through authenticated storage APIs and model checkpoint access restricted to authorised personnel. In the UK context, NHS data processed for clinical AI training must comply with the Data Security and Protection (DSP) Toolkit and the NHS Secure Data Environment programme requirements, which mandate end-to-end encryption of data at rest and in transit, comprehensive audit logging of all data access events, and formal information governance approval for each training workload.

  Model weight theft during distributed training is a non-trivial concern: gradient tensors communicated between nodes during training encode information about the training data (gradient inversion attacks, Zhu et al., 2019, demonstrated reconstruction of training images from gradients). For sensitive biomedical or financial training data, differential privacy (DP-SGD, Abadi et al., 2016) can be applied during distributed training by adding calibrated Gaussian noise to gradients before all-reduce, provably bounding the information leakage about any individual training example at the cost of some model quality. The DP privacy budget (ε, δ) must be tracked across the entire training run, as each training step consumes a small fraction of the budget.

  UK Government cloud procurement for AI training under the AI Opportunities Action Plan requires compliance with the UK Government Cloud Security Principles (CSP) and the Cyber Essentials Plus certification for approved training infrastructure providers. The AIRR programme (AI Research Resource) administered by DSIT includes governance frameworks specifying acceptable use policies, data governance requirements, and access control procedures for national AI compute infrastructure, including Isambard-AI.

  ## Key Terminology Glossary

  - **All-reduce**: Collective operation summing gradient tensors across all workers so every worker receives the same aggregate; the fundamental synchronisation primitive of data parallelism.
  - **Ring-allreduce**: Bandwidth-optimal all-reduce topology where each node sends and receives one chunk per step in a ring, achieving 2(N−1)/N × B communication volume per parameter for N workers and B bytes per parameter.
  - **MFU (Model FLOP Utilisation)**: Fraction of theoretical peak FLOP throughput attained during training; typically 35–70% for well-tuned distributed training; the primary efficiency metric for distributed runs.
  - **Pipeline bubble**: Idle compute time at the fill and drain phases of a pipeline; fraction equals (P−1)/M where P is pipeline depth and M is micro-batch count; minimised by interleaved schedules and large M.
  - **ZeRO**: Zero Redundancy Optimiser; partitions optimiser state, gradients, and/or parameters across data-parallel ranks, reducing per-device memory by up to N× for N ranks.
  - **NVLink**: NVIDIA's GPU-to-GPU interconnect; 900 GB/s bidirectional in NVLink 4.0 (H100); 57.6 TB/s total in GB200 NVL72.
  - **InfiniBand NDR**: 400 Gb/s per port network standard used for inter-node GPU communication in training clusters.
  - **FSDP**: Fully Sharded Data Parallel; PyTorch-native ZeRO Stage 3 implementation using all-gather and reduce-scatter operators; FSDP2 in PyTorch 2.6 improves multi-node performance.
  - **Micro-batch**: A sub-division of a mini-batch used in pipeline parallelism to keep all pipeline stages occupied and reduce bubble fraction.
  - **Gradient checkpointing**: Recomputing activations during the backward pass rather than storing them, trading compute (~33% overhead) for activation memory reduction (~sqrt(L) for L layers).
  - **Tensor parallelism**: Sharding individual weight matrices across devices within a node, requiring two all-reduce operations per transformer block; limited to intra-node GPU count by bandwidth requirements.
  - **Sequence parallelism**: Sharding the input sequence across devices at layer normalisation and dropout operations; reduces activation memory proportional to sequence parallel degree.
  - **MoE expert parallelism**: Routing tokens to expert sub-networks distributed across devices; requires all-to-all collective communication for token routing and output aggregation.
  - **3D parallelism**: Simultaneous use of data, tensor, and pipeline parallelism; the production standard for frontier model pre-training on multi-thousand GPU clusters.
  - **DP-SGD**: Differentially private stochastic gradient descent; adds calibrated Gaussian noise to gradients before all-reduce to bound per-example information leakage in privacy-sensitive training.
  - **AIRR**: AI Research Resource; UK Government national AI compute programme administering access to Isambard-AI, Dawn, and cloud AI compute capacity under DSIT governance.
  - **MegaScale**: Engineering system paper (ByteDance & NVIDIA, NSDI 2024) documenting the engineering challenges and solutions for distributed LLM training at 10,000+ GPU scale.
  - **TorchTitan**: Meta's PyTorch-native reference implementation for frontier LLM pre-training combining FSDP, tensor parallelism, and pipeline parallelism in a composable API.
  - **Horovod**: Uber's open-source distributed deep learning framework that provides an MPI-like ring-allreduce API over NCCL for PyTorch and TensorFlow.
  - **DCGM**: NVIDIA Data Centre GPU Manager; provides hardware health monitoring, telemetry, and health checks for GPU cluster nodes in production training environments.
  - **GSPMD**: General and Scalable Parallelism for ML Computation; Google's XLA-based automatic sharding framework for distributed training on TPU and GPU meshes.
  - **Checkpoint-and-restart**: The standard fault-tolerance mechanism for distributed training; serialises training state to persistent storage periodically so that training can resume after failure without restarting from the beginning.
  - **pjit / shard_map**: JAX APIs for specifying how computations and tensors are distributed across a device mesh; the primary distributed training abstraction in the JAX ecosystem.
  - **bfloat16**: 16-bit floating point format with 8 exponent bits and 7 mantissa bits; preferred over float16 for neural network training because its larger dynamic range prevents gradient underflow; standard for modern distributed training.
  - **Communication overlap**: Technique of launching collective communication operations during the backward pass before the corresponding computation completes, hiding communication latency; central to maintaining high MFU in data-parallel distributed training.
  - **Activation recomputation**: Alternative term for gradient checkpointing; describes the action of recomputing discarded activations rather than their storage aspect.

- ### Provenance
  - sources:: Rajbhandari et al. (ZeRO, 2020) https://arxiv.org/abs/1910.02054; Shoeybi et al. (Megatron-LM, 2019) https://arxiv.org/abs/1909.08053; Huang et al. (GPipe, 2019); Narayanan et al. (PipeDream, 2019); Li et al. (PyTorch DDP, 2020); Jiang et al. (MegaScale, 2024); MLCommons MLPerf Training v5.0 https://mlcommons.org/; NVIDIA Blackwell blog https://developer.nvidia.com/blog/nvidia-blackwell-enables-3x-faster-training/; DeepSpeed https://www.deepspeed.ai/; Isambard-AI https://www.bristol.ac.uk/research/centres/bristol-supercomputing/articles/2025/isambard-ai-launches-july-2025.html; UK AI Opportunities Action Plan https://assets.publishing.service.gov.uk/media/678639913a9388161c5d2376/ai_opportunities_action_plan_government_repsonse.pdf; HPCwire MLPerf Training Rankings https://www.hpcwire.com/2025/06/04/blackwell-gpus-lift-nvidia-to-the-top-of-mlperf-training-rankings/
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
