- ### Definition
  - Distributed AI training is the systematic practice of training [[Deep Learning]] models and other large [[Machine Learning]] systems across multiple compute nodes, accelerators, and — increasingly — geographically dispersed clusters, in order to overcome the memory and compute constraints of any single machine. The fundamental challenge it addresses is straightforward: frontier-scale neural networks such as [[Large Language Models]] with hundreds of billions of parameters cannot fit in the memory of a single GPU, their training datasets span trillions of tokens that no single machine could process within acceptable timeframes, and the iteration cycles needed for research exploration demand parallelism to remain feasible. Distributed training achieves scale through four complementary strategies. Data parallelism replicates the full model on every worker and partitions the training data, averaging gradients across workers via all-reduce collectives after each backward pass — the dominant approach when the model fits on a single device. Tensor parallelism (or model parallelism) shards the model's weight tensors across devices, so each device holds and computes only a fraction of the computation graph; this is necessary when individual model layers exceed device memory. Pipeline parallelism partitions the model's layers into sequential stages across devices, running micro-batches through the pipeline to maintain utilisation despite the sequential dependency between stages. Sequence parallelism distributes the sequence dimension of attention computations across devices, enabling longer context windows. Modern frontier training stacks combine all four strategies — sometimes called 3D or 4D parallelism — orchestrated by frameworks such as [[DeepSpeed]], Megatron-LM, and PyTorch FSDP2. Gradient communication efficiency is critical: bandwidth between nodes limits throughput, motivating gradient compression, [[ZeRO]] sharding, asynchronous updates, and low-communication methods such as [[DiLoCo]] for geographically distributed clusters connected by commodity internet links rather than InfiniBand fabrics. The UK's [[Isambard-AI]] supercomputer (5,448 NVIDIA GH200 superchips at the University of Bristol, launched 2025) and the AIRR (AI Research Resource) programme represent the national infrastructure built specifically to support distributed AI training at scale.

- ### Semantic Classification
  - owl-class:: ai:DistributedAITraining
  - owl-role:: ExecutableProtocol | InfrastructureComponent | TrainingParadigm
  - owl-inferred:: ai:ParallelMLTraining, ai:ScalableNeuralTraining, ai:FaultTolerantTraining, ai:MultiNodeTraining
  - belongs-to-domain:: [[AI Infrastructure]]
  - implemented-in-layer:: [[ComputeLayer]]

- ### Relationships
  - is-subclass-of:: [[AI Infrastructure]], [[Distributed Computing]], [[Machine Learning]]
  - has-part:: [[Data Parallelism]], [[Tensor Parallelism]], [[Pipeline Parallelism]], [[Sequence Parallelism]], [[Gradient Synchronisation]], [[All-Reduce]], [[ZeRO Optimiser]], [[Gradient Compression]]
  - requires:: [[GPU Cluster]], [[High-Speed Interconnect]], [[Gradient Descent]], [[Backpropagation]], [[Loss Function]], [[Collective Communication]]
  - enables:: [[Large Language Models]], [[Foundation Models]], [[Deep Learning]], [[Model Training]], [[Neural Architecture Search]], [[Reinforcement Learning from Human Feedback]]
  - implements:: [[Data Parallelism]], [[Model Parallelism]], [[Pipeline Parallelism]], [[Federated Learning]], [[DiLoCo]]
  - depends-on:: [[NCCL]], [[InfiniBand]], [[NVLink]], [[PyTorch]], [[DeepSpeed]], [[Megatron-LM]]
  - supports:: [[Transformer Architecture]], [[Convolutional Neural Network]], [[Mixture of Experts]], [[Diffusion Models]]
  - uses:: [[ZeRO Optimiser]], [[FSDP]], [[Ring-AllReduce]], [[Mixed Precision Training]], [[Gradient Checkpointing]], [[Activation Recomputation]]
  - contrasts-with:: [[Single-Device Training]], [[Federated Learning]], [[Edge AI Training]]
  - related-to:: [[DiLoCo]], [[Distributed Computing]], [[Cloud Computing]], [[High-Performance Computing]], [[MLOps]], [[Model Compression]], [[Transfer Learning]]
  - standardized-by:: [[MLPerf Training Benchmark]], [[NeurIPS Systems Track]], [[MLSys Conference]]

- ### Content
  ## Compositional Relationships (Components)
  ```
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:hasPart ai:DataParallelism))
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:hasPart ai:TensorParallelism))
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:hasPart ai:PipelineParallelism))
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:hasPart ai:GradientSynchronisation))
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:hasPart ai:AllReduceCommunication))
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:hasPart ai:ZeroRedundancyOptimiser))
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:hasPart ai:GradientCompression))
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:hasPart ai:SequenceParallelism))
  ```
  ## Dependency Relationships
  ```
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:requires ai:GPUCluster))
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:requires ai:HighSpeedInterconnect))
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:requires ai:GradientDescent))
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:requires ai:Backpropagation))
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:dependsOn ai:NCCL))
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:dependsOn ai:PyTorch))
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:dependsOn ai:NVLink))
  ```
  ## Capability Relationships
  ```
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:enables ai:LargeLanguageModels))
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:enables ai:FoundationModels))
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:enables ai:DeepLearning))
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:enables ai:NeuralArchitectureSearch))
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:enables ai:ReinforcementLearningFromHumanFeedback))
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:enables ai:MultimodalTraining))
  ```
  ## Implementation Relationships
  ```
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:implements ai:DataParallelism))
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:implements ai:ModelParallelism))
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:implements ai:PipelineParallelism))
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:implements ai:FaultTolerantDistributedComputing))
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:implements ai:CollectiveCommunicationProtocol))
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:implements ai:DiLoCo))
  ```
  ## Reduction Relationships
  ```
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:reducesTo ai:DataParallelSGD))
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:reducesTo ai:AllReduceTraining))
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:reducesTo ai:SingleNodeTraining))
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:reducesTo ai:FederatedLearning))
  ```
  ## Contrastive Relationships
  ```
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:contrastsWith ai:SingleDeviceTraining))
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:contrastsWith ai:FederatedLearning))
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:contrastsWith ai:EdgeAITraining))
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:contrastsWith ai:TransferLearning))
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:bridges ai:DecentralisedCompute))
  SubClassOf(ai:DistributedAITraining
    ObjectSomeValuesFrom(ai:bridges ai:HighPerformanceComputing))
  ```

  ## Formal Algorithms

  ### Synchronous Data-Parallel Training (AllReduce SGD)
  ```
  Input: Model f_θ, loss L, dataset D, learning rate η, batch size B, workers N
  Initialise: θ identically on all N workers
  For each training step:
    1. Each worker i samples mini-batch D_i ⊆ D (|D_i| = B/N)
    2. Each worker i computes local gradient: g_i = ∇_θ L(f_θ(D_i))
    3. AllReduce (ring): g = (1/N) Σ_i g_i    [bandwidth-optimal O(2(N-1)/N × |θ|)]
    4. Each worker updates: θ ← θ - η · g
  Result: Mathematically equivalent to single-device training with batch size B
  ```

  ### ZeRO-3 Memory Partitioning
  ```
  Partition: Parameters θ, gradients g, optimizer states {m, v} across N workers
    Worker i owns: θ[i*|θ|/N : (i+1)*|θ|/N], g[...], {m[...], v[...]}
  Forward pass for layer l requiring θ_l:
    1. AllGather: each worker broadcasts its parameter shard → all workers hold θ_l temporarily
    2. Compute forward activation using θ_l
    3. Free θ_l from non-owning workers (keep only owned shard)
  Backward pass for layer l:
    1. AllGather θ_l again for gradient computation
    2. Compute local gradient contribution
    3. ReduceScatter: aggregate gradient contributions → each worker holds g_l[owned shard]
    4. Free θ_l; update owned shard: θ[owned] ← θ[owned] - η · Adam(g[owned], m[owned], v[owned])
  Memory per worker: (|θ| + |g| + |m| + |v|) / N  ← N-fold reduction vs. standard DP
  ```

  ### DiLoCo Outer-Inner Loop
  ```
  Input: H (local steps), outer optimiser (Nesterov), inner optimiser (AdamW)
  Initialise: Global parameters θ_0; each worker initialises local copy θ_i^(0) = θ_0
  For each synchronisation round t = 1, 2, ...:
    For each worker i in parallel:
      1. Run H steps of inner AdamW on local data:
         θ_i^(t) = InnerOptimiser(θ_i^(t-1), local_data, H steps)
      2. Compute pseudo-gradient: Δ_i = θ_i^(t-1) - θ_i^(t)
                                        [positive = direction of improvement]
    3. AllReduce: Δ = (1/N) Σ_i Δ_i    [only 1 communication per H local steps]
    4. Apply outer Nesterov momentum step: θ_{new} = θ_{old} + outer_lr × Δ
    5. Each worker resets to: θ_i^(t) ← θ_{new}
  Communication reduction: 1/H = 1/500 relative to AllReduce SGD
  ```

  ### Ring-AllReduce Algorithm
  ```
  Input: Each worker i holds gradient tensor g_i of S elements, N workers
  Phase 1 — Reduce-Scatter (N-1 rounds):
    Round k: Worker i sends chunk[(i-k) mod N] to worker (i+1) mod N
             Worker i receives chunk[(i-k-1) mod N] from worker (i-1) mod N
             Worker i accumulates received chunk into its local copy
    After N-1 rounds: Each worker holds the reduced (summed) value for one chunk
  Phase 2 — AllGather (N-1 rounds):
    Round k: Worker i sends its reduced chunk to worker (i+1) mod N
             Worker i receives reduced chunk from worker (i-1) mod N
    After N-1 rounds: Each worker holds the fully reduced tensor
  Total data communicated per worker: 2 × (N-1)/N × S ≈ 2S (bandwidth-optimal)
  ```

  ## About

  Distributed AI training emerged as a practical necessity in the mid-2010s when [[Deep Learning]] models grew beyond the capacity of individual GPUs and when the scale of training data required to achieve state-of-the-art performance exceeded what could be processed in reasonable time on a single machine. The field traces its roots to the parameter server architecture proposed by Li et al. (CMU/Google, 2014), which allowed gradient computation to be distributed across many workers while a central server aggregated and broadcast updated parameters. This architecture proved effective but created a communication bottleneck at the parameter server as model size and worker count scaled. The transition to decentralised all-reduce topologies — where each worker communicates gradients directly with its peers via ring or tree collectives — removed this bottleneck and became the dominant synchronous distributed training pattern, adopted in essentially all serious training infrastructure by 2018.

  The scaling laws of deep learning (Kaplan et al., OpenAI, 2020; Hoffmann et al., DeepMind, 2022) established that model performance scales predictably with training compute budget (model size × training tokens × compute per token), creating a continuous economic incentive to train ever-larger models on ever-more compute. This scaling pressure drove the development of increasingly sophisticated parallelism strategies. Google's paper "Megatron-LM: Training Multi-Billion Parameter Language Models Using Model Parallelism" (2019) demonstrated that tensor parallelism could scale [[Transformer Architecture|transformer]] training to billions of parameters by sharding weight matrices across GPUs within a node connected by NVLink. Microsoft's DeepSpeed project (Rajbhandari et al., 2020) introduced the ZeRO (Zero Redundancy Optimizer) memory optimisation family, which partitions optimizer states, gradients, and parameters across data-parallel workers, eliminating the redundant copies of these tensors that conventional data parallelism requires and thereby enabling training of models that could not fit in GPU memory even with tensor parallelism. The combination of these techniques — 3D parallelism (data + tensor + pipeline) with ZeRO sharding — is the engineering backbone behind the largest models trained as of 2026.

  The communication infrastructure required for distributed training is as important as the software stack. Within a node, NVIDIA NVLink provides 600 GB/s bidirectional bandwidth (NVLink 4.0 on H100/GH200), enabling efficient intra-node tensor parallelism without communication bottlenecks. Between nodes, InfiniBand HDR (200 Gb/s) or NDR (400 Gb/s) provides the high-bandwidth, low-latency fabric required for gradient synchronisation across hundreds of nodes. NVIDIA's NCCL (NVIDIA Collective Communications Library) implements the ring-allreduce, broadcast, allgather, and reduce-scatter collectives over these fabrics with topology-aware routing that maximises available bandwidth. The ring-allreduce algorithm, independently introduced by Baidu Research and Uber in 2017, divides the gradient tensor into chunks and routes each chunk around a ring of workers, achieving bandwidth-optimal communication with complexity O(N) in the number of elements regardless of the number of workers — making it the default collective for synchronous data-parallel training.

  ## Components / Architecture

  ### Parallelism Strategies

  - **Data Parallelism (DP):** Each worker holds a complete model replica and processes a different mini-batch of training data. After the backward pass, workers synchronise gradients via all-reduce — either synchronously (all workers wait for the collective before updating) or asynchronously (workers update locally with stale gradients from others). Synchronous data parallelism with ring-allreduce is the standard for tightly coupled clusters; it is implemented in PyTorch DDP (DistributedDataParallel) and Horovod. Asynchronous methods (Hogwild!, parameter server) tolerate node failures and slow workers at the cost of convergence noise from stale gradients.
  - **ZeRO (Zero Redundancy Optimizer):** Microsoft's memory optimisation framework that eliminates the three main sources of redundancy in data parallelism. ZeRO-1 shards optimizer states (e.g., Adam moment vectors) across data-parallel workers, reducing optimizer memory by the data-parallel degree (e.g., 8x for 8 GPUs). ZeRO-2 additionally shards gradients, reducing gradient memory by the same factor. ZeRO-3 also shards model parameters, so each worker holds only 1/N of the parameters but gathers the needed partition for each forward/backward operation. PyTorch FSDP (Fully Sharded Data Parallel) implements ZeRO-3 natively; FSDP2 (PyTorch v2.4+) adds improved performance, CPU offloading, and composability with tensor parallelism.
  - **Tensor Parallelism (TP):** Shards individual weight tensors across multiple GPUs within a node. For a linear layer Y = XW, tensor parallelism may split W column-wise across GPUs (each GPU computes XW_i for its partition and the results are concatenated) or row-wise (each GPU computes X_iW for its partition and the results are reduced). Megatron-LM's 1D tensor parallelism is the standard for [[Transformer Architecture|transformer]] MLP and attention layers; 2D and 3D tensor parallelism variants (used in Colossal-AI, Megatron-LM v3+) further optimise memory and communication trade-offs. Tensor parallelism requires high intra-node bandwidth (NVLink) because it introduces communication in the critical forward path.
  - **Pipeline Parallelism (PP):** Partitions the model's layers into sequential stages, with each stage assigned to a different set of GPUs. A micro-batch flows through stages sequentially: stage 1 processes the micro-batch and passes activations to stage 2, which processes and passes to stage 3, etc. Multiple micro-batches are interleaved (pipelining) to maintain GPU utilisation during the activation and gradient wait periods. Pipeline parallelism reduces inter-node communication to only the activation tensors at stage boundaries, which is much smaller than gradient tensors, making it suitable for slower inter-node connections. DeepSpeed's pipeline implementation supports 1F1B (one forward, one backward) scheduling; Megatron-LM's virtual pipeline stages further reduce the pipeline bubble (idle time waiting for preceding stages).
  - **Sequence Parallelism (SP):** Distributes the sequence dimension of attention and normalisation computations across tensor-parallel workers, enabling training on longer context windows than fit on a single device. Required for training models with context lengths of 128K+ tokens, as the attention KV cache and activation memory scale quadratically with sequence length.
  - **Expert Parallelism (EP):** For [[Mixture of Experts]] models (GPT-4, Mixtral, Switch Transformer), routes different tokens to different expert networks distributed across GPUs. Expert parallelism communicates token representations between expert-assignment GPUs and expert-hosting GPUs via all-to-all collectives, enabling massive effective model size without scaling all-expert inference cost proportionally.

  ### Communication Primitives

  - **All-Reduce:** The central collective for synchronous data parallelism. Every worker contributes a tensor; after all-reduce, every worker holds the element-wise sum (or average) of all contributions. Ring-allreduce achieves this in O(2(N-1)/N × S) communication per worker for tensor size S and N workers, asymptotically bandwidth-optimal. Implemented in NCCL, Gloo (CPU), and MPI.
  - **Reduce-Scatter + AllGather:** ZeRO's decomposition of all-reduce into two steps: reduce-scatter sends the gradient sum to the owning shard, and allgather reconstructs the full parameter tensor when needed. This allows memory-efficient parameter sharding while preserving gradient synchronisation correctness.
  - **All-to-All:** Used in expert parallelism to route token representations to the correct expert GPUs and back. O(N × S/N) per worker, where routing is determined by the gating network.
  - **Point-to-Point (send/recv):** Used in pipeline parallelism to pass activations and gradients between adjacent pipeline stages. Implemented as asynchronous non-blocking operations to maximise overlap with computation.

  ### Key Software Frameworks

  - **PyTorch DDP + FSDP2:** The standard open-source distributed training infrastructure. DDP wraps any PyTorch module for synchronous data parallelism; FSDP2 adds ZeRO-3 sharding. Composable with Megatron-LM tensor parallelism via the DeviceMesh and DTensor APIs introduced in PyTorch 2.0+.
  - **DeepSpeed:** Microsoft Research's comprehensive distributed training library, providing ZeRO-1/2/3, pipeline parallelism, gradient compression (1-bit Adam, ZeRO-Infinity), CPU/NVMe offloading, and inference optimisation. Used extensively in research and industry, including Megatron-Turing NLG 530B training.
  - **Megatron-LM (NVIDIA):** Specialised framework for tensor and pipeline parallelism in transformer models, providing high-performance fused kernel implementations (FlashAttention integration, fused layer norms) and Megatron-DeepSpeed integration for 3D parallelism.
  - **Colossal-AI:** Academic framework exploring advanced parallelism strategies including 2D/2.5D/3D tensor parallelism and sequence parallelism, often used for research into novel communication patterns.
  - **JAX + XLA:** Google's functional framework with first-class support for distributed computation via pjit/jit and GSPMD (General and Scalable Parallelism for ML Compiler Deployments), used for training PaLM, Gemini, and other Google models.

  ## Low-Communication and Decentralised Training

  Standard synchronous distributed training assumes tightly coupled clusters with high-bandwidth, low-latency interconnects — InfiniBand or NVLink fabrics that are expensive to provision and limit training to co-located infrastructure. Two emerging paradigms relax this requirement:

  **Federated Learning** distributes training across many edge devices or institutional data silos without centralising raw data, communicating only model updates. The standard federated averaging algorithm (McMahan et al., 2017) aggregates model updates from participating clients periodically, tolerating heterogeneous devices and intermittent connectivity. However, federated learning incurs significant communication overhead relative to the number of local steps, limiting its applicability to large models.

  **DiLoCo (Distributed Low-Communication)** is a communication-efficient training paradigm specifically designed for geographically distributed clusters with limited inter-site bandwidth. Each worker (or worker cluster) independently runs many local optimisation steps — typically 500 with an inner AdamW optimiser — then synchronises only the accumulated pseudo-gradients (parameter differences) via an outer optimiser (Nesterov momentum). This architecture reduces communication frequency by 500× compared to standard synchronous training, making training feasible over commodity internet links. DiLoCo was introduced by Douillard et al. at Google DeepMind (2023) and implemented at production scale by Prime Intellect's OpenDiLoCo framework for their INTELLECT-1 10B parameter model, trained across five countries on three continents in 2024. A NeurIPS 2025 paper demonstrated DiLoCo training of LLaMA 8B with performance on par with centralised training, despite workers being connected via standard internet links. Combined with Prime Intellect's custom int8 all-reduce implementation, DiLoCo achieves approximately 400× reduction in communication bandwidth compared to conventional data-parallel training.

  ## Use Cases / Major Families

  - **Frontier LLM pre-training:** The primary driver of distributed AI training infrastructure investment. Training GPT-4 class models (100B+ parameters) on multi-trillion-token corpora requires thousands of GPUs running for months. Megatron-LM 3D parallelism on NVIDIA A100/H100 clusters with InfiniBand NDR (400 Gb/s) is the standard architecture. Communication overhead is managed by overlapping allreduce with backward computation, using tensor + pipeline parallelism within nodes and data parallelism across node groups.
  - **Fine-tuning and [[Reinforcement Learning from Human Feedback]] (RLHF):** Large pre-trained models are fine-tuned on task-specific data or human preference signals. RLHF (Ouyang et al., 2022 — InstructGPT) requires simultaneous training of multiple model copies (actor, critic, reference) with synchronous updates, making distributed coordination essential. Frameworks like TRL (Hugging Face), OpenRLHF, and Prime Intellect's PRIME-RL support multi-node RLHF training.
  - **[[Mixture of Experts]] training:** MoE architectures (GPT-4, Mixtral 8x22B, Switch Transformer) have large total parameter counts but activate only a fraction of parameters per token. Distributed training requires expert parallelism in addition to data and tensor parallelism, with all-to-all routing collectives between expert assignment and expert computation.
  - **[[Diffusion Models]] and multimodal training:** Stability AI (Stable Diffusion 3), Black Forest Labs (FLUX), and Google DeepMind (Imagen 3) train large diffusion models on multi-node GPU clusters. Multi-modal training (vision + language, as in CLIP, ALIGN, and Flamingo) requires coordinated data loading across modalities and often larger effective batch sizes than text-only training, motivating larger cluster deployments.
  - **Decentralised internet-scale training:** The OpenDiLoCo/DiLoCo paradigm enables training large models using heterogeneous volunteer or market-priced compute distributed globally, coordinated by a blockchain-style incentive mechanism. Prime Intellect's INTELLECT-1 demonstrated this is practical for 10B parameter models as of 2024; scaling to 100B+ models with acceptable convergence is an active research challenge.
  - **Continual pre-training and domain adaptation:** Large pre-trained models are continually updated with new data without full retraining — a distributed training workload with different parallelism requirements from initial pre-training (typically smaller cluster, longer time horizon, more frequent checkpoint evaluation).

  ## Academic Context

  Distributed machine learning research has deep roots in parallel computing and optimisation theory. The parallel gradient descent idea traces to the early 2000s, with Dean et al.'s DistBelief system (Google, NIPS 2012) being the first large-scale industrial deployment — training a 1 billion parameter neural network on 16,000 cores. The parameter server paradigm was formalised by Li et al.'s CMU paper (2014), which proposed a flexible key-value store for distributed model state management. The ring-allreduce algorithm, crucial for communication-efficient gradient aggregation, was independently developed and published by Baidu's SVAIL group (2017) and Horovod from Uber Engineering (Sergeev and Del Balso, 2018).

  Microsoft Research's ZeRO paper series (Rajbhandari et al., 2020; ZeRO-Infinity 2021) addressed memory efficiency in data parallelism, enabling single-copy parameter storage across hundreds of GPUs. NVIDIA's Megatron-LM (Shoeybi et al., 2019; Narayanan et al., 2021) established tensor and pipeline parallelism for transformers, demonstrating training of 530B parameter models in conjunction with ZeRO. Google's GSPMD and GShard (1.6 trillion parameter MoE model, 2021) extended parallelism to compiler-level automatic partitioning, removing the manual parallelism annotation burden. The scaling laws papers — Kaplan et al. (2020) from OpenAI and Hoffmann et al. ("Chinchilla", 2022) from DeepMind — provided the compute-optimal training formulae that continue to guide distributed training budgets, establishing that compute should be split roughly equally between model size and training tokens for optimal performance at fixed compute.

  DiLoCo (Douillard et al., DeepMind 2023, arXiv:2311.08105) introduced the outer-inner optimiser decomposition for low-communication distributed training, showing competitive convergence with 500× fewer communication rounds. Prime Intellect's INTELLECT-1 technical report (2024, arXiv:2412.01152) demonstrated DiLoCo at 10B parameter scale across geographically distributed infrastructure with custom fault tolerance and bandwidth-adaptive aggregation. A 2025 NeurIPS paper on decentralised LLaMA 8B training confirmed DiLoCo's viability for models an order of magnitude larger than previous demonstrations.

  The field's primary academic venues are MLSys (ML systems), NeurIPS, ICML, and SC (Supercomputing). The MLPerf Training benchmark provides standardised wall-clock time measurements for training standard models (ResNet, BERT, GPT-3, Llama 2) to target accuracy, enabling cross-vendor infrastructure comparison. The 2025 MLPerf Training results saw NVIDIA H100 clusters dominating time-to-train metrics, with AMD MI300X and Intel Gaudi 3 emerging as viable alternatives.

  ## Current Landscape (2026)

  As of 2026, distributed AI training is characterised by several converging trends:

  **3D/4D parallelism is the universal production standard.** Every major frontier model training run uses some combination of data parallelism (with ZeRO or FSDP2 sharding), tensor parallelism (within NVLink-connected node groups), and pipeline parallelism (across node groups), often supplemented by sequence parallelism for long-context models and expert parallelism for MoE architectures. The specific configuration (tensor parallel degree, pipeline stages, data parallel groups) is tuned empirically per model architecture and cluster topology.

  **InfiniBand NDR (400 Gb/s) and NVIDIA GH200/H200 are the reference hardware.** NVIDIA's GH200 Grace-Hopper Superchip, combining an ARM CPU and H100 GPU with NVLink-C2C interconnect and 96GB HBM3e memory, provides substantially better memory capacity and bandwidth per chip than the H100 SXM5. Large clusters of GH200s (such as Isambard-AI's 5,448-chip installation) use NVLink 4.0 within nodes and InfiniBand NDR between nodes, achieving effective training throughput for GPT-4 scale models that would have required 5× the hardware on the previous generation.

  **PyTorch FSDP2 has displaced Megatron-LM as the standard for medium-scale training.** FSDP2 (released PyTorch 2.4, 2024) provides ZeRO-3 sharding with improved composability and performance, making full model sharding accessible without adopting Megatron-LM's more complex infrastructure. For the largest frontier runs (10,000+ GPUs), Megatron-LM or JAX/GSPMD custom solutions remain necessary for maximum throughput.

  **Decentralised and internet-scale training is moving from research to production.** Following INTELLECT-1 (2024), Prime Intellect and similar organisations are building permissionless compute networks where anyone contributing GPU resources can participate in model training. The INTELLECT-2 run (announced 2025) targets 32B parameter models trained across globally distributed contributor nodes using DiLoCo with improved fault tolerance and dynamic worker joining/leaving. Epoch AI's analysis (2025) suggests that internet-scale decentralised training can in principle match centralised training efficiency for models up to 70B parameters, with the 400× bandwidth reduction being the key enabler.

  **Communication-compute overlap is now mandatory.** Modern distributed training frameworks overlap gradient all-reduce with backward computation (communicating earlier layers' gradients while later layers are still computing) using asynchronous NCCL operations. This overlap masks communication latency behind computation, making effective throughput nearly independent of communication time for well-configured runs. Gradient compression (PowerSGD, 1-bit Adam, ZeRO++ quantised gradients) provides additional bandwidth reduction at the cost of numerical precision.

  **UK infrastructure:** The UK's AIRR programme, offering access to Isambard-AI (University of Bristol, 5,448 NVIDIA GH200 chips) and Dawn (University of Cambridge, 1,024 Intel Data Centre GPU Max 1550 GPUs), provides UK academic and industrial researchers with frontier-class distributed training infrastructure. Following launch in July 2025, access is allocated in tiers from 10,000 GPU hours (gateway access) to 1.4 million GPU hours (system takeover). The government committed to £1.34 billion in AI compute infrastructure and pledged a 20× capacity expansion by 2030.

  ## UK Context

  The United Kingdom has invested substantially in distributed AI training infrastructure and produced foundational research in the field. The Isambard-AI supercomputer, housed at the University of Bristol's National Composites Centre and operated by UKRI and the University of Bristol, is the UK's most powerful public AI compute facility as of 2025–2026. Its 5,448 NVIDIA GH200 Grace-Hopper superchips, connected via InfiniBand NDR fabric and optimised specifically for transformer model training, place it among the top public research compute facilities globally. The companion Dawn facility at the University of Cambridge, with 1,024 Intel Data Centre GPU Max 1550 GPUs, specialises in energy-efficient training workloads. Both facilities operate under the AIRR programme, providing UK researchers with access to frontier distributed training capacity for pre-training, fine-tuning, and scaling experiments.

  UK universities have made substantive research contributions to distributed training. The University of Edinburgh's School of Informatics is a leading centre for distributed systems research with active work on communication-efficient gradient aggregation and federated learning. The Alan Turing Institute coordinates UK research in large-scale AI training, including projects on training efficiency, carbon footprint of distributed training, and open-weight model development (Turing-LLM initiative). Imperial College London's machine learning group contributes to multi-node training optimisation and research on gradient compression for bandwidth-constrained settings. The University of Manchester's Advanced Processor Technologies group has contributed to custom hardware design for distributed AI inference and training accelerators.

  Google DeepMind (London HQ) is the most prominent UK-based contributor to distributed training research. The DiLoCo algorithm (Douillard et al., 2023), which enables efficient training across loosely connected distributed clusters via an outer-inner optimiser decomposition, originated at DeepMind's London lab. DeepMind's work on [[Mixture of Experts]] scaling (GShard, Switch Transformer contributions) and on training infrastructure for Gemini's multimodal training runs constitutes some of the most significant industrial distributed training research of the 2020s. Wayve, the autonomous driving startup headquartered in London, uses distributed training across custom GPU clusters for large-scale simulation-based [[Reinforcement Learning]] training of its autonomous driving models.

  The UK's Catapult networks — specifically the Digital Catapult and the High-Value Manufacturing Catapult — have run distributed training workshops and applied projects connecting UK SMEs with AIRR compute and distributed training expertise. Northern England academic institutions have also engaged with distributed training: the University of Sheffield uses distributed computing for large-scale NLP training experiments; the N8 Research Partnership (universities of Durham, Lancaster, Leeds, Liverpool, Manchester, Newcastle, Sheffield, York) provides shared HPC infrastructure including GPU clusters used for distributed training workloads.

  The UK's National AI Strategy and the AI for Science Strategy (2025) specifically identify distributed training capacity as a national priority, citing compute access as the primary bottleneck limiting UK academic AI research relative to US and Chinese counterparts. The £1 billion additional AIRR investment announced in January 2025, targeting a 20× capacity expansion by 2030, is the direct policy response.

  ## Future Directions (2026–2030)

  - **Heterogeneous and fault-tolerant training at internet scale:** Extending DiLoCo-style low-communication training to heterogeneous node types (mixing GPUs, TPUs, and emerging accelerators), with fully automated fault tolerance that handles node failures, network partitions, and stragglers without halting training. Elastic training (dynamic worker joining/leaving) and checkpoint-free recovery are key enabling techniques.
  - **Communication-free training via local loss functions:** Forward-forward algorithms (Hinton, 2022) and local contrastive learning (Noci et al., 2022) train layers with local objectives that do not require global backward passes, eliminating the gradient communication bottleneck entirely. These approaches trade off some model quality for radical reductions in inter-layer and inter-node communication.
  - **Photonic and optical interconnects for training clusters:** Reconfigurable optical networks (RON) for inter-node communication achieve orders of magnitude higher bandwidth than copper-based InfiniBand, with dramatically lower power consumption. Microsoft and Google are deploying optical interconnects in training clusters; by 2028, they may displace InfiniBand for frontier training runs.
  - **Energy-efficient distributed training:** The environmental cost of large-scale distributed training (estimated at hundreds to thousands of tonnes of CO₂ per frontier model) is driving research into training-time carbon optimisation — scheduling distributed training runs during periods of high renewable energy supply, using lower-precision arithmetic to reduce FLOPs, and exploiting early stopping criteria informed by scaling laws to avoid training beyond the compute-optimal point.
  - **Neuromorphic and in-memory computing for training:** Spike-based neuromorphic hardware and in-memory analogue computing could enable energy-efficient local learning rules (STDP, Hebbian plasticity) that bypass the communication overhead of gradient-based distributed training entirely. Commercial maturity is likely post-2030, but DARPA-funded and UK EPSRC-funded research programmes are actively pursuing this direction.
  - **Automated parallelism via compiler-level partitioning:** The manual specification of tensor, pipeline, and data parallelism degrees is error-prone and requires deep expertise. Compiler-driven automatic parallelism (JAX/XLA's GSPMD, Alpa from UCB/OctoAI) determines optimal parallelism configurations automatically given hardware topology and model architecture, eliminating the manual tuning burden. Broader adoption of these approaches is expected to democratise distributed training beyond the handful of organisations with expert infrastructure teams.
  - **Formal verification and correctness guarantees:** As distributed training becomes critical infrastructure, formal methods for verifying correctness of communication patterns, gradient accumulation, and numerical precision under partial failures are emerging. This is particularly relevant for safety-critical applications where training runs must provably converge to specified objectives.
  - **Privacy-preserving distributed training:** Combining [[Federated Learning]] with differential privacy, secure aggregation, and multi-party computation to enable distributed training on sensitive data (clinical records, financial data) without centralising raw data or leaking gradient information. The UK's GCHQ and NCSC have specific interests in provably private distributed training for sensitive government AI applications.

  ## Memory Management and Efficiency Techniques

  Training a frontier-scale model is as much a memory management problem as a compute problem. The memory required to train a model with P parameters includes:

  - **Model weights:** 4 bytes per parameter in float32, 2 bytes in bfloat16/float16. A 70B parameter model requires 280GB in float32 or 140GB in bfloat16 — far exceeding a single GPU's memory (80GB for H100 SXM5).
  - **Gradients:** Same size as model weights — another 140GB for bfloat16.
  - **Optimiser states:** Adam requires two moment vectors per parameter (mean and variance), each the same size as parameters — another 280GB in float32 or 140GB in mixed precision.
  - **Activations:** Forward pass activations needed for [[Backpropagation|backward computation]] scale with batch size, sequence length, and model depth. For a 70B [[Transformer Architecture|transformer]] with sequence length 4096 and batch size 1, activations require approximately 100GB; with full gradient checkpointing (recomputing activations at each transformer block boundary), this reduces to approximately 2GB at the cost of 30% additional compute.

  The total memory required for Adam training of a 70B model in mixed precision is approximately 1.4TB — far beyond any single GPU, and even beyond any single 8-GPU node (8 × 80GB = 640GB). Distributed training is thus mandatory, not optional, for frontier-scale models.

  Key techniques for memory reduction:

  **Gradient checkpointing (activation recomputation):** Instead of storing all forward-pass activations in memory, recompute them from saved checkpoints during the backward pass. The standard strategy checkpoints at every transformer block boundary, reducing activation memory from O(sequence_length × n_layers × d_model) to O(d_model) at the cost of one additional forward pass per backward pass. Flash Attention (Dao et al., 2022) provides an efficient fused implementation that recomputes attention scores rather than storing them, reducing attention memory from O(n² × n_heads) to O(n) in sequence length.

  **Mixed precision training:** Store model weights and activations in bfloat16 (16-bit brain floating point) while maintaining a full float32 master copy of weights for accumulation. This halves activation and gradient memory and doubles compute throughput on Tensor Core hardware (NVIDIA A100, H100 support bf16 natively). The float32 master copy is essential to avoid precision loss in optimizer state accumulation; the master weights are typically kept only by the ZeRO-3 owning shard to avoid duplicating them across all data-parallel workers.

  **ZeRO-Infinity (CPU and NVMe offloading):** Extends ZeRO-3 to offload optimizer states, gradients, or even parameters to CPU RAM or NVMe SSDs when GPU memory is insufficient. CPU RAM (typically 1-2TB per node) and NVMe SSDs (tens of TB per node) provide memory capacity orders of magnitude larger than GPU memory, at the cost of PCIe bandwidth bottlenecks for data movement between CPU and GPU. DeepSpeed's ZeRO-Infinity implementation uses bandwidth-optimal communication scheduling to overlap offload transfers with GPU computation, partially hiding the PCIe latency penalty.

  **Gradient accumulation:** Simulates a larger effective batch size by accumulating gradients over multiple micro-batches before performing an optimizer step, without increasing memory proportionally. For distributed training, gradient accumulation reduces communication frequency by the accumulation factor, decreasing the all-reduce overhead per optimizer step.

  **Activation partitioning (sequence parallelism):** In Megatron-LM and related frameworks, sequence parallelism distributes the sequence dimension of activation tensors across tensor-parallel workers, reducing per-device activation memory by the tensor parallel degree. This is particularly effective for long-context training where activation memory would otherwise be dominated by the KV cache and attention score tensors.

  ## Numerical Precision and Stability

  Distributed training at scale introduces numerical precision challenges beyond those encountered in single-device training:

  **Gradient aggregation precision:** When averaging gradients from thousands of workers via ring-allreduce, numerical rounding errors in floating-point summation can accumulate. For float16 (FP16) gradient accumulation, the limited dynamic range (maximum representable value ~65504) can cause gradient overflow when many large gradients are summed. BFloat16 (BF16) has the same exponent range as float32 but only 7 mantissa bits, making it more resilient to overflow while less numerically precise than FP16 for small-scale arithmetic. Most frontier training now uses BF16 rather than FP16 for gradient accumulation.

  **Loss scaling for FP16:** When training in FP16 (which has limited dynamic range), underflow (gradients rounding to zero) is common. Dynamic loss scaling multiplies the loss by a large scale factor (typically 2^16 = 65536) before [[Backpropagation|backward pass]], scaling up gradients to avoid underflow, then divides by the same factor before the optimiser step. The scale factor is dynamically adjusted upward when no overflow is detected and downward when overflow occurs.

  **Synchronous vs. asynchronous numerical divergence:** Synchronous data parallelism maintains mathematically identical results to single-device training (assuming deterministic forward pass), because all workers see the same averaged gradient. Asynchronous training with stale gradients introduces a controlled numerical divergence whose magnitude depends on the staleness bound and learning rate; theoretical analysis shows convergence guarantees under mild staleness assumptions, but empirical results are more sensitive to learning rate and gradient staleness calibration.

  **Determinism and reproducibility:** Distributed training runs are typically non-deterministic due to race conditions in floating-point summation order during all-reduce operations. Different runs with the same seed may produce different models, complicating debugging and scientific reproducibility. NVIDIA NCCL provides a "deterministic mode" (NCCL_DETERMINISTIC=1) at the cost of reduced throughput; most production training accepts non-determinism for throughput.

  ## Benchmarks and Performance Metrics

  The standard performance metric for distributed training is **throughput** measured in tokens per second (for [[Large Language Models|LLM]] pre-training) or images per second (for vision model training), and **time-to-train** to reach a target accuracy. Efficiency is characterised by:

  - **Hardware FLOPs utilisation (HFU):** The fraction of peak hardware FLOP/s actually achieved by the training run. GPT-style transformer training on NVIDIA H100s typically achieves 30–45% HFU due to memory bandwidth bottlenecks, communication overhead, and pipeline bubbles. Optimal configurations may reach 55–60% HFU.
  - **Model FLOPs utilisation (MFU):** The fraction of peak hardware FLOP/s used for forward/backward computation on the model, excluding activation recomputation overhead and communication. MFU is always ≤ HFU and provides a hardware-independent measure of how efficiently the model computation uses the cluster.
  - **Scaling efficiency:** The ratio of achieved throughput at N devices to N times the throughput at 1 device. Perfect linear scaling would give 100% efficiency; communication and pipeline overhead typically reduce this to 70–90% for well-optimised configurations at hundreds of nodes.

  The **MLPerf Training benchmark** (mlperf.org/training) provides the primary industry-standard wall-clock time comparison for distributed training. The 2025 MLPerf Training results (v4.0) showed:
  - NVIDIA H100 8-GPU systems achieving ResNet-50 training to 75.9% ImageNet accuracy in under 1.6 minutes
  - BERT-large pre-training to masked language model accuracy target completed in under 2 minutes on 2048 H100 GPUs
  - LLaMA 2 70B pre-training benchmarks being introduced as a new workload in the 2025 MLPerf Training suite

  AMD's MI300X GPUs and Intel's Gaudi 3 accelerators are emerging alternatives to NVIDIA H100/GH200 in distributed training, with AMD achieving competitive MLPerf results on ResNet-50 and BERT. The competition between accelerator vendors is intensifying, with Google's TPU v5p, Cerebras CS-3, and Graphcore Bow-Pod all offering alternative distributed training architectures that trade off inter-device bandwidth, memory capacity, and programmability differently from the GPU standard.

  ## Data Pipeline and Infrastructure

  The compute cluster is only half of the distributed training system; the data pipeline that feeds training tokens or images to the GPUs at sufficient throughput is equally critical:

  - **Streaming data loading:** Training datasets for [[Large Language Models]] are measured in petabytes (the Pile, RedPajama, Dolma, and FineWeb training corpora each contain trillions of tokens compressed into terabytes of text). These datasets cannot be loaded into CPU RAM; they are streamed from distributed file systems (Lustre, GPFS, AWS S3) during training. The data loading throughput must match the GPU's token consumption rate; for a 1000-GPU cluster training an 8B model on 4096-token sequences with micro-batch size 2, the required data loading throughput is approximately 1000 × 2 × 4096 × training iterations per second = millions of tokens per second.
  - **Tokenisation and preprocessing:** Raw text is tokenised offline using byte-pair encoding (BPE) or unigram tokenisers (SentencePiece), with the token IDs stored as binary arrays for fast loading. Preprocessing pipelines run on CPU clusters separate from the GPU training cluster, producing pre-tokenised shards that are loaded sequentially during training.
  - **Checkpoint management:** Training runs checkpoint model weights, optimiser states, and learning rate scheduler state regularly (typically every few hundred steps) to recover from node failures. Checkpoint sizes can be enormous: a 70B parameter model in float32 with Adam optimiser states requires approximately 840GB per checkpoint. Distributed checkpointing frameworks (PyTorch Distributed Checkpoint, DeepSpeed ZeRO checkpoint) write checkpoints in parallel across all workers to distributed storage, reducing checkpoint write time from hours (serial) to minutes (parallel).
  - **Fault tolerance:** Large training runs on thousands of GPUs encounter hardware failures (GPU faults, network partition, cooling failures) regularly — at 1000 GPUs, even 99.9% individual reliability gives expected failure frequency of one failure per 1000/0.1% = 1 failure per ~4 hours. Robust distributed training frameworks detect failures, restart from the most recent checkpoint on available hardware, and rebalance workloads. Prime Intellect's ElasticDeviceMesh enables dynamic addition and removal of training workers without interrupting the training run.

  ## Convergence Theory and Optimisation Considerations

  The mathematical foundations of distributed training convergence differ importantly from single-device training, and understanding these differences is necessary for configuring distributed runs correctly:

  **Synchronous SGD convergence:** Standard synchronous data parallelism with all-reduce gradient averaging is mathematically equivalent to single-device training with a batch size of (per-device batch size × number of workers). The well-known linear scaling rule for SGD (Goyal et al., Facebook 2017) states that to maintain the same convergence trajectory when multiplying batch size by k, the learning rate should also be multiplied by k, with a linear warmup period of k steps. This rule holds approximately for large-batch training up to batch sizes of 8192–16384, after which diminishing returns and increased noise in the gradient estimate require additional learning rate tuning.

  **Gradient noise scale:** The gradient noise scale (GNS) measures the ratio of gradient variance to gradient magnitude, providing a principled criterion for whether increasing batch size improves efficiency. At the critical batch size B_crit (where GNS = 1), further increases in batch size provide diminishing returns on convergence speed. For [[Large Language Models|LLM]] pre-training, B_crit is typically in the range of 1M–4M tokens (McCandlish et al., 2018), meaning that for batch sizes above this threshold, increasing the number of GPU workers no longer improves tokens-per-second scaling efficiency. Training runs for frontier LLMs typically operate at or below B_crit to maintain efficient compute utilisation.

  **Asynchronous SGD convergence:** Asynchronous distributed training (parameter server architecture with stale gradient updates) converges under weaker conditions than synchronous training — specifically, when the gradient staleness τ satisfies τ < 1/(2η L) where η is the learning rate and L is the Lipschitz constant of the loss. Asynchronous training can be faster in wall-clock time when synchronisation delays dominate synchronous training, but at the cost of lower effective gradient quality and increased sensitivity to hyperparameter tuning.

  **DiLoCo convergence analysis:** The convergence of DiLoCo's outer-inner optimiser decomposition was analysed in the original paper (Douillard et al., 2023) under standard non-convex SGD assumptions. The key result shows that with H local steps between synchronisations, the convergence rate degrades by a factor approximately proportional to H × η_inner² relative to synchronous training, where η_inner is the inner learning rate. In practice, with H = 500 and carefully tuned inner/outer learning rates, DiLoCo achieves within 1–2% of synchronous training perplexity while reducing communication by 500×.

  **Scaling laws and compute-optimal training:** The Chinchilla scaling laws (Hoffmann et al., 2022) established that for a compute budget of C FLOPs, the compute-optimal model size is N* ∝ C^0.5 and the optimal training token count is D* ∝ C^0.5, with the ratio D*/N* ≈ 20 (train for approximately 20 tokens per parameter). These laws directly determine the parallelism strategy for a given training run: with the compute budget C and target model size N*, the number of training tokens D* = C / (6N) and the number of training steps S = D* / (B_tokens per step) determine the training duration and thus the required cluster size to complete training in a target wall-clock time.

  ## Environmental and Economic Sustainability

  The environmental impact of large-scale distributed AI training is a growing concern and active research topic. A frontier-scale training run (100B+ parameter model) is estimated to consume 500,000–1,000,000 kWh of electricity, producing approximately 250–500 tonnes of CO₂e at average UK grid carbon intensity (200 gCO₂e/kWh as of 2026), or substantially less if run on renewable energy. For context, the UK's annual per-capita electricity consumption is approximately 4,500 kWh, so a single frontier training run consumes approximately 100-200 years of individual electricity.

  Carbon-aware training scheduling — selecting times and locations for distributed training based on grid carbon intensity — is an emerging practice. Microsoft's carbon-aware AI training research schedules large training jobs to times of low grid carbon intensity, achieving 10–20% CO₂ reductions without changing model quality. The UK's grid, with approximately 35% renewable generation in 2025 and rapid solar and wind expansion, has relatively low and declining carbon intensity, making UK-hosted distributed training increasingly competitive on carbon footprint compared to regions with coal-heavy generation.

  Training efficiency research is partly motivated by sustainability concerns. [[Mixed Precision Training|Mixed precision]], gradient compression, efficient attention (FlashAttention), and compute-optimal training protocols all reduce total FLOPs for a given model quality target, directly reducing energy consumption. The Efficient AI research agenda (Schwartz et al., "Green AI", CACM 2020) explicitly advocates for reporting energy efficiency alongside accuracy in AI research, a practice increasingly adopted in MLSys and NeurIPS systems papers.

  The economic cost of distributed training is a significant barrier to participation in frontier model development. As of 2026, NVIDIA H100 GPU-hours on major cloud providers cost approximately $2.50–$4.00 per GPU-hour; training a 70B parameter model on 1024 H100s for 21 days costs approximately $1.5–2.5 million. The Isambard-AI AIRR programme provides subsidised access to UK academic researchers at zero marginal cost for approved projects, with allocation processes ranging from small gateway grants (10,000 GPU hours) to major awards (>1 million GPU hours). This reduces the effective cost barrier for UK academic distributed training substantially, though industry-scale compute budgets remain out of reach for most academic groups.

  ## Security and Adversarial Considerations

  Distributed AI training introduces security attack surfaces beyond those of single-device training, which are important for understanding the governance implications of decentralised training paradigms:

  **Gradient poisoning:** In federated or decentralised distributed training, malicious workers can manipulate the shared model by submitting crafted gradients that bias the model toward adversarial objectives. Byzantine-robust aggregation methods (Krum, Coordinate-wise Median, FLTrust) aggregate worker gradients in ways that are provably robust to a bounded fraction of Byzantine (arbitrarily malicious) workers, but at the cost of reduced convergence speed and statistical efficiency compared to simple averaging.

  **Model poisoning and backdoor attacks:** More subtle than gradient poisoning, model poisoning injects trigger-pattern backdoors during distributed training by contributing gradients that encode a hidden behaviour (e.g., misclassifying inputs that contain a specific pattern while behaving normally otherwise). Distributed training frameworks with unconstrained worker participation (internet-scale decentralised training) are particularly vulnerable, as verifying worker gradient integrity requires access to the training data distribution that workers are supposed to represent.

  **Data privacy leakage from gradients:** Gradient inversion attacks (Zhu et al., NeurIPS 2019) demonstrated that shared gradients in federated learning can be used to reconstruct training data — including private text passages or personal images — with high fidelity. This is a fundamental tension in federated distributed training: the gradients needed for model improvement contain information about the training data, and that information can be extracted by a malicious aggregator or other workers. Differential privacy mechanisms (Abadi et al., Google 2016) add calibrated noise to gradients before sharing, providing provable privacy guarantees at the cost of reduced model quality.

  **Compute supply chain security:** The hardware supply chains for distributed AI training (NVIDIA GPUs, InfiniBand switches, AMD CPUs) are concentrated in a small number of manufacturers, many with international dependencies that create national security concerns. UK policy has identified domestic compute security as a priority; AIRR infrastructure procurement explicitly favours supply chains with UK or allied-nation manufacture for critical components.

  ## Key Terminology

  - **Data parallelism:** The dominant distributed training strategy, replicating the full model on every worker and synchronising gradients via all-reduce after each backward pass. Scales effectively to thousands of workers when the model fits on a single device.
  - **Tensor parallelism:** Shards individual weight tensors across multiple GPUs within a node. Essential when individual layers exceed device memory. Requires high-bandwidth NVLink intra-node interconnect.
  - **Pipeline parallelism:** Partitions model layers into sequential stages across node groups. Reduces inter-node communication to activation tensors at stage boundaries. Pipeline bubbles (idle GPU time between micro-batches) reduce efficiency; advanced scheduling (1F1B, virtual stages) minimises bubble fraction.
  - **ZeRO (Zero Redundancy Optimizer):** Microsoft's memory optimisation framework that partitions optimizer states (ZeRO-1), gradients (ZeRO-2), and parameters (ZeRO-3) across data-parallel workers, eliminating redundant copies and enabling training of models far exceeding single-GPU memory.
  - **FSDP2 (Fully Sharded Data Parallel):** PyTorch's native implementation of ZeRO-3, providing composable model sharding, CPU offloading, and compatibility with tensor parallelism via DeviceMesh. The standard medium-scale distributed training backend as of 2026.
  - **All-reduce:** The central collective communication primitive for synchronous data parallelism, computing the element-wise sum or average of a tensor across all workers and distributing the result. Ring-allreduce is the bandwidth-optimal implementation.
  - **Ring-allreduce:** A communication algorithm that divides the gradient tensor into N chunks and routes each chunk around a ring of N workers, achieving O(2(N-1)/N × S) communication — bandwidth-optimal regardless of worker count. The standard gradient aggregation algorithm in NCCL.
  - **[[DiLoCo]]:** Distributed Low-Communication training paradigm that performs 500 local optimisation steps between global synchronisations via an outer Nesterov optimiser, reducing bandwidth requirements by 500× and enabling training over commodity internet links.
  - **NCCL:** NVIDIA Collective Communications Library; provides topology-aware, hardware-accelerated implementations of all-reduce, broadcast, allgather, reduce-scatter, and all-to-all collectives over NVLink and InfiniBand fabrics.
  - **InfiniBand NDR:** 400 Gb/s bidirectional InfiniBand interconnect fabric used between nodes in frontier-scale GPU clusters. The primary inter-node communication substrate for distributed [[Large Language Models|LLM]] training as of 2026.
  - **NVLink:** NVIDIA's high-bandwidth intra-node GPU interconnect (NVLink 4.0: 600 GB/s bidirectional on H100/GH200). Enables efficient tensor parallelism within a multi-GPU node without InfiniBand overhead.
  - **Gradient compression:** Techniques for reducing gradient communication volume, including sparsification (transmitting only top-k% of gradient elements), quantisation (1-bit Adam, ZeRO++ int8 gradients), and low-rank approximation (PowerSGD). Reduces bandwidth requirements at the cost of gradient noise.
  - **Pipeline bubble:** The fraction of pipeline stages that are idle (not processing a micro-batch) at any given time, reducing GPU utilisation below 100%. For a pipeline with p stages, the bubble fraction is (p-1)/(m+p-1) for m micro-batches; increasing m reduces the bubble fraction.
  - **3D parallelism:** The combination of data parallelism (across replica groups), tensor parallelism (within NVLink-connected nodes), and pipeline parallelism (across node groups), forming the backbone of frontier-scale [[Large Language Models|LLM]] training.
  - **Expert parallelism:** Distributed routing of tokens to expert networks in [[Mixture of Experts]] models, using all-to-all communication between expert-assignment and expert-computation GPUs. Enables massive effective parameter counts without scaling per-token inference cost.
  - **Activation recomputation:** Recomputing forward-pass activations during the backward pass rather than storing them, reducing activation memory from O(n_layers × sequence_length × d_model) to O(d_model) at the cost of 33% additional compute. Also called gradient checkpointing.
  - **Mixed precision training:** Training in bfloat16 or float16 for model weights and activations, with a float32 master copy maintained for optimizer state accumulation. Halves memory usage and doubles compute throughput on Tensor Core hardware.
  - **Scaling laws:** Empirical power-law relationships between model quality (perplexity) and training compute (model size × training tokens), established by Kaplan et al. (2020) and Hoffmann et al. (2022), that predict the compute-optimal model size and dataset size for a given training budget. Fundamental to planning distributed training runs.

  ## Cross-References to Related Ontology Pages

  The following pages in this knowledge graph are directly related to Distributed AI Training and should be consulted for adjacent concepts:

  - [[Gradient Descent]] — the optimisation algorithm at the core of every distributed training run; all-reduce synchronises gradients for a distributed gradient descent step
  - [[Backpropagation]] — the algorithm that computes gradients for [[Gradient Descent]]; distributed training partitions the backprop computation across workers
  - [[Large Language Models]] — the primary beneficiary of distributed training infrastructure; frontier LLMs require thousands of GPUs for weeks to pre-train
  - [[Transformer Architecture]] — the dominant model architecture trained on distributed clusters; tensor and pipeline parallelism are specifically designed for transformer layer structure
  - [[Mixture of Experts]] — requires expert parallelism in addition to standard 3D parallelism; distributed training for MoE requires coordinating token routing across GPUs
  - [[DiLoCo]] — the low-communication distributed training paradigm that enables training across geographically distributed clusters and the internet
  - [[Federated Learning]] — a complementary paradigm for distributed training on private, non-centralised data; trades communication efficiency for data privacy
  - [[Deep Learning]] — the field whose computational requirements motivated distributed training; scaling laws connect model quality to distributed training compute
  - [[Reinforcement Learning from Human Feedback]] — a fine-tuning paradigm requiring distributed training of actor, critic, and reference policy models simultaneously
  - [[GPU Cluster]] — the physical infrastructure on which distributed AI training runs; NVLink and InfiniBand fabric topology determine parallelism configurations
  - [[Cloud Computing]] — the provider of on-demand distributed training infrastructure; AWS, Azure, and GCP provide managed distributed training services
  - [[Mixed Precision Training]] — the numerical precision strategy that halves memory usage and doubles compute throughput for distributed training
  - [[Reinforcement Learning]] — used in Wayve's autonomous driving training and in RLHF fine-tuning; requires distributed compute for large-scale simulation and policy training
  - [[Natural Language Processing]] — the application domain that drives the majority of frontier distributed training investment; LLM pre-training at scale is the defining NLP workload of the 2020s

  ## Research and Literature

  1. Dean, J., Corrado, G., Monga, R., et al. (2012). "Large Scale Distributed Deep Networks." *NeurIPS 2012.* (DistBelief.)
  2. Li, M., Andersen, D.G., Park, J.W., et al. (2014). "Scaling Distributed Machine Learning with the Parameter Server." *OSDI 2014.*
  3. Sergeev, A., Del Balso, M. (2018). "Horovod: Fast and Easy Distributed Deep Learning in TensorFlow." arXiv:1802.05799
  4. Shoeybi, M., Patwary, M., Puri, R., et al. (2019). "Megatron-LM: Training Multi-Billion Parameter Language Models Using Model Parallelism." arXiv:1909.08053
  5. Rajbhandari, S., Rasley, J., Ruwase, O., He, Y. (2020). "ZeRO: Memory Optimizations Toward Training Trillion Parameter Models." *SC20.* arXiv:1910.02054
  6. Narayanan, D., Shoeybi, M., Casper, J., et al. (2021). "Efficient Large-Scale Language Model Training on GPU Clusters Using Megatron-LM." *SC21.* arXiv:2104.04473
  7. Kaplan, J., McCandlish, S., Henighan, T., et al. (2020). "Scaling Laws for Neural Language Models." arXiv:2001.08361 (OpenAI.)
  8. Hoffmann, J., Borgeaud, S., Mensch, A., et al. (2022). "Training Compute-Optimal Large Language Models." *NeurIPS 2022.* arXiv:2203.15556 (Chinchilla, DeepMind.)
  9. Rajbhandari, S., Ruwase, O., Rasley, J., Smith, S., He, Y. (2021). "ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning." *SC21.* arXiv:2104.07857
  10. Lepikhin, D., Lee, H., Xu, Y., et al. (2021). "GShard: Scaling Giant Models with Conditional Computation and Automatic Sharding." *ICLR 2021.* arXiv:2006.16668
  11. Fedus, W., Zoph, B., Shazeer, N. (2021). "Switch Transformers: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity." *JMLR 2022.* arXiv:2101.03961
  12. Ouyang, L., Wu, J., Jiang, X., et al. (2022). "Training language models to follow instructions with human feedback." *NeurIPS 2022.* arXiv:2203.02155 (InstructGPT / RLHF.)
  13. Jiang, Z., et al. (2022). "Galvatron: Efficient Transformer Training over Multiple GPUs Using Automatic Parallelism." *VLDB 2023.* arXiv:2211.13878
  14. Douillard, A., et al. (2023). "DiLoCo: Distributed Low-Communication Training of Language Models." arXiv:2311.08105 (Google DeepMind.)
  15. Prime Intellect. (2024). "INTELLECT-1 Technical Report." arXiv:2412.01152
  16. McMahan, H.B., Moore, E., Ramage, D., et al. (2017). "Communication-Efficient Learning of Deep Networks from Decentralized Data." *AISTATS 2017.* (Federated averaging.)
  17. Hinton, G. (2022). "The Forward-Forward Algorithm: Some Preliminary Investigations." arXiv:2212.13345
  18. Ren, J., Rajbhandari, S., Aminabadi, R.Y., et al. (2021). "ZeRO-Offload: Democratizing Billion-Scale Model Training." *ATC 2021.* arXiv:2101.06840
  19. Zhao, Y., Gu, A., Varma, R., et al. (2023). "PyTorch FSDP: Experiences on Scaling Fully Sharded Data Parallel." *VLDB 2023.* arXiv:2304.11277
  20. Zheng, L., Li, Z., Zhang, H., et al. (2022). "Alpa: Automating Inter- and Intra-Operator Parallelism for Distributed Deep Learning." *OSDI 2022.*
  21. Pan, R., et al. (2024). "Decentralized Training of Foundation Models in Heterogeneous Environments." arXiv:2206.01288 (updated 2024.)
  22. Isambard-AI. (2025). "Isambard-AI: A Leadership-Class Supercomputer Optimised Specifically for Artificial Intelligence." *Proceedings of the Cray User Group (CUG 2025).*
  23. UKRI. (2025). "£300 Million to Launch First Phase of New AI Research Resource." UKRI Press Release, January 2025.
  24. "Distributed and Decentralised Training: Technical Governance Challenges in a Shifting AI Landscape." (2025). arXiv:2507.07765
  25. Towards Understanding Bugs in Distributed Training and Inference Frameworks for Large Language Models. (2025). arXiv:2506.10426
  26. Domino: Eliminating Communication in LLM Training via Generic Tensor Slicing and Overlapping. (2024). arXiv:2409.15241
  27. A Survey on Memory-Efficient Transformer-Based Model Training in AI for Science. (2025). arXiv:2501.11847
  28. Epoch AI. (2025). "How Far Can Decentralized Training Over the Internet Scale?" Gradient Updates, Epoch AI.

  ## Distributed Training for Non-Language Modalities

  While LLM pre-training dominates discussion of distributed training, the paradigm is equally critical for large-scale training across other modalities:

  **Computer vision:** ResNet, ViT (Vision Transformer), and DINOv2 training on ImageNet-21k, JFT-300M, or LAION-5B datasets requires multi-node GPU training. ViT-22B (Google, 2023) — the largest vision transformer at 22 billion parameters — was trained on 64 TPU v4 pods using JAX/XLA tensor and data parallelism. Vision model training typically has higher per-sample compute than LLM training but shorter sequence lengths, making it amenable to larger per-device batch sizes and less reliant on sequence parallelism.

  **[[Diffusion Models]] for image and video generation:** Stable Diffusion 3 (Stability AI), FLUX (Black Forest Labs), and Sora-class video diffusion models require distributed training over massive image and video datasets. Video diffusion training introduces a temporal dimension to the sequence parallelism challenge — video tokens at 24fps produce far more tokens per sample than text, requiring aggressive sequence parallelism or frame-level sub-sampling strategies. The high memory requirements of video diffusion (storing temporal attention across many frames) have driven interest in ring-attention and distributed FlashAttention implementations that shard the sequence dimension across GPUs.

  **Multimodal models:** CLIP, ALIGN, Flamingo, and their successors train joint encoder networks over paired image-text (or other modality pair) datasets. Multimodal distributed training requires synchronised data loading across modalities (ensuring that paired samples from different storage systems arrive at the same worker at the same time) and may require different parallelism strategies for different modality encoders (a ViT image encoder and a [[Transformer Architecture|transformer]] text encoder within the same training run). The Gemini 1.5 training run (Google DeepMind, 2024) represents the state of the art in multi-modal distributed training, combining video, audio, and text inputs in a single training run across thousands of TPU v4 pods.

  **Protein structure prediction:** AlphaFold 2 (DeepMind, 2021) and ESMFold (Meta, 2022) trained on protein sequence databases require distributed training over large sequence datasets with expensive multiple sequence alignment (MSA) preprocessing. The MSA step is embarrassingly parallel (independent for each protein), enabling effective dataset-level distribution; the model training itself uses standard data parallelism with bfloat16 mixed precision on TPU/GPU clusters.

  **[[Reinforcement Learning]] at scale:** Large-scale RL training for games (AlphaGo Zero, MuZero) and for autonomous systems (Wayve's world model, OpenAI Five for Dota 2) requires distributed training across both actor workers (generating environment experience) and learner workers (updating the policy). The IMPALA (Importance Weighted Actor-Learner Architecture, Espeholt et al., 2018) and Ape-X architectures decouple actor and learner processes across nodes, enabling massively parallel environment interaction while maintaining a synchronised policy update on central GPU learners.

  ## Practical Configuration Guide for Distributed Training

  Configuring a distributed training run for a given model architecture, dataset, and cluster requires systematic reasoning about memory, compute, and communication constraints. The following is a practical decision tree for selecting parallelism configuration:

  **Step 1 — Does the model fit on a single GPU?** For models with fewer than approximately 20B parameters in bfloat16 (20B × 2 bytes = 40GB, leaving 40GB headroom for activations and optimizer states on an 80GB H100), single-GPU or DDP-only training may suffice. ZeRO-1 or ZeRO-2 can extend this by sharding optimizer states and gradients without the communication overhead of ZeRO-3 parameter sharding.

  **Step 2 — If model does not fit on a single GPU, choose tensor parallelism degree.** Set tensor parallel (TP) degree to 2, 4, or 8 based on the number of GPUs per NVLink-connected node and the size of the largest individual layer. A single [[Transformer Architecture|transformer]] attention layer with hidden size 8192 and 128 attention heads in bfloat16 occupies approximately 8192 × 8192 × 3 × 2 bytes ≈ 400MB of parameter storage; TP-8 across 8 H100s reduces this to 50MB per GPU, comfortably within memory limits while incurring one all-reduce per forward attention computation.

  **Step 3 — If model still does not fit, add pipeline parallelism.** Partition the model's transformer blocks into PP stages (PP = 2, 4, 8, or 16), with each stage holding approximately n_layers/PP layers. The pipeline bubble fraction with micro-batch scheduling is approximately (PP-1)/m for m micro-batches per pipeline step; choose m ≥ 4 × PP to keep bubble fraction below 25%.

  **Step 4 — Scale out with data parallelism.** With TP and PP degrees fixed, increase the data parallel (DP) degree by increasing the total cluster size (number of TP × PP groups). ZeRO-3 sharding within each DP group can reduce per-GPU memory linearly with DP degree, enabling larger micro-batches per DP group or longer sequence lengths. The global batch size = DP × micro-batch size × sequence length / tokens_per_batch; adjust DP to achieve the target global batch size consistent with scaling law recommendations.

  **Step 5 — Set learning rate and schedule per scaling rule.** With global batch size B_global and a baseline learning rate η_base at batch size B_base, set η = η_base × (B_global / B_base) with a warmup of B_global / B_base steps. Monitor training loss curves; if loss diverges, reduce learning rate; if convergence is slow, reduce warmup duration or use a cosine annealing schedule.

  **Step 6 — Enable activation recomputation and mixed precision.** Gradient checkpointing at transformer block boundaries reduces activation memory by the number of layers at 33% compute overhead. BFloat16 mixed precision is enabled by default in modern frameworks; ensure the float32 master weight copy is maintained for optimizer states (handled automatically by [[DeepSpeed]], FSDP2, and Megatron-LM).

  ## Hardware Architecture for Distributed Training

  The physical hardware architecture of a distributed AI training cluster is as important as the software parallelism strategy; hardware topology directly constrains which parallelism configurations are efficient:

  **GPU architecture for training:** NVIDIA H100 SXM5 (80GB HBM3, 3.35 TB/s memory bandwidth, 989 TFLOPS bf16 with sparsity), GH200 Grace-Hopper (96GB HBM3e per GPU die + ARM CPU, connected via NVLink-C2C at 900 GB/s), and AMD MI300X (192GB unified HBM3, 5.3 TB/s memory bandwidth) are the primary accelerators for 2025–2026 distributed training. Larger HBM capacity per GPU reduces the data-parallel degree needed to train a given model size, simplifying the parallelism configuration and reducing communication overhead.

  **NVLink within a node:** NVIDIA's NVLink 4.0 fabric provides 900 GB/s aggregate bidirectional bandwidth between GPUs within a node (NVLink Switch for DGX H100 8-GPU nodes). This enables tensor parallelism at degree 8 within a single DGX node without InfiniBand communication overhead. NVLink Switch NVL72 (announced 2024) extends NVLink connectivity to 72 H100 GPUs in a single rack with 1.8 TB/s all-to-all bandwidth, enabling tensor parallel degrees of 16–32 without InfiniBand for very large single-node deployments.

  **InfiniBand between nodes:** NVIDIA Quantum-2 InfiniBand (200 Gb/s HDR per port) and Quantum-3 (400 Gb/s NDR per port) provide the inter-node fabric for distributed gradient synchronisation in large GPU clusters. Rail-optimised fat-tree topologies with 2:1 oversubscription are typical for training clusters of 256–2048 nodes; non-blocking fat-tree topologies (no oversubscription) are used for the largest frontier training runs where communication bandwidth is the critical bottleneck. NVIDIA's Quantum-X800 (800 Gb/s XDR) is announced for 2026 deployment, further reducing the per-GPU communication overhead for all-reduce operations.

  **Alternative interconnects:** Ethernet (400GbE, RoCEv2) is increasingly competitive with InfiniBand for training workloads where gradient communication latency is less critical than cost — particularly for DiLoCo-style training where inter-node communication is infrequent. Meta's AI Research SuperCluster (RSC) demonstrated that 400GbE with RoCEv2 could support efficient LLM training, and AWS's EFA (Elastic Fabric Adapter) provides InfiniBand-like latency on Ethernet for GPU clusters built with EC2 instances. Google's Jupiter optical network fabric, deployed in its TPU pods, achieves 100 Pb/s bisection bandwidth through reconfigurable optical switching — orders of magnitude higher than InfiniBand at datacenter scale.

  **TPU architecture (Google):** Google's Tensor Processing Units are ASICs custom-designed for distributed transformer training, with deterministic systolic array compute, 4096-chip "pods" connected by high-bandwidth inter-chip interconnects (ICI), and JAX/XLA-based programming model. TPU v4 pods provide 1.1 exaFLOPS (10^18 FLOP/s) aggregate bf16 throughput per pod. The TPU architecture is optimised for large-batch synchronous training at fixed shapes, making it less flexible than GPUs for research but highly efficient for production pre-training at Google scale.

  **Custom accelerators:** Graphcore (Bristol, UK) Intelligence Processing Units (IPUs) use a bulk synchronous parallel (BSP) communication model where all-reduce happens implicitly at a fixed "exchange" phase between compute phases, eliminating the asynchronous NCCL communication overhead. Cerebras CS-3 uses a 900,000-core wafer-scale chip that can hold entire LLMs in on-chip SRAM, eliminating inter-chip communication for models that fit — enabling single-chip training for models up to approximately 20B parameters. These architectural alternatives to the NVIDIA GPU standard represent significant engineering bets on different distributed training trade-offs.

  ## Governance and Policy Implications

  Distributed AI training at frontier scale has significant governance implications that are increasingly the subject of national and international policy:

  **Compute governance:** The ability to train frontier AI models is limited by access to large GPU clusters, creating a concentration of AI development capability among a small number of well-resourced organisations. UK and US AI policy initiatives have identified compute access as a key lever for AI governance: limiting access to frontier compute (via export controls on NVIDIA A100/H100/GH200 chips to certain destinations, implemented through US Commerce Department BIS rules) is the primary mechanism for preventing adversarial nation-states from training the most powerful AI systems. The UK's AI Safety Institute has developed frameworks for compute threshold-based safety evaluations, requiring organisations training models above a compute threshold (10^26 FLOPs, approximately equivalent to GPT-4 scale) to undergo pre-deployment safety assessments.

  **Transparency and auditability:** As distributed training produces models deployed in high-stakes applications (clinical decision support, autonomous vehicles, financial trading), questions of training data provenance, training compute budget, and hardware configuration become relevant for audits and regulatory compliance. The EU AI Act (effective August 2024) requires documentation of training compute, dataset composition, and fine-tuning methodology for "general-purpose AI models with systemic risk" (≥10^25 FLOPs training compute). Distributed training logs, checkpoint versioning, and data pipeline provenance systems are becoming compliance infrastructure requirements rather than purely engineering concerns.

  **National security and supply chain:** The distributed training hardware supply chain — NVIDIA GPUs, TSMC-fabricated chips, CoWoS packaging, HBM3e memory from Samsung/SK Hynix/Micron, Mellanox/NVIDIA InfiniBand switches — has significant geopolitical dependencies. UK policy has prioritised domestic and allied-nation AI hardware procurement for government and national security applications; the AIRR programme procurement specifications reflect these requirements. The emergence of ARM-architecture server CPUs (Ampere, NVIDIA Grace, AWS Graviton) and UK domestic GPU design (Graphcore, Arm Holdings) as components of distributed training nodes represents a partial diversification of the supply chain dependency.

  **Open vs. closed model development:** The tension between open-weight model development (Llama 3, Mistral, Falcon from UAE TII) and proprietary frontier model development (GPT-4, Gemini, Claude) has distributed training implications. Open-weight models are typically trained on smaller compute budgets at a single organisation and released for fine-tuning and deployment by others; proprietary models use the largest compute budgets and are accessible only via API. The UK's AI Safety Institute has developed evaluation methodologies applicable to both open and closed models, requiring that models above the compute threshold be submitted for evaluation regardless of their deployment model.

  ## Notable Distributed Training Runs (Historical Record)

  The progression of distributed training scale illustrates the engineering advances that made each generation of frontier models possible:

  - **AlexNet (2012, Krizhevsky et al., University of Toronto):** First to use two GPUs (GTX 580, 3GB VRAM) connected via MPI to train a deep convolutional network on ImageNet. The inter-GPU split was motivated purely by memory constraints: the model did not fit on a single 3GB GPU. Though modest by modern standards, this was the first practical demonstration that multi-GPU training was feasible for deep learning.
  - **DistBelief GPT-2 equivalent (2012, Google):** Dean et al.'s DistBelief system trained a 1 billion parameter neural network on 16,000 CPU cores via parameter server architecture, demonstrating that massive-scale distributed training was possible before GPUs became the dominant accelerator.
  - **Megatron-LM (2019, NVIDIA):** 8.3 billion parameter GPT-style model trained on 512 NVIDIA V100 GPUs in 9.2 days using tensor and pipeline parallelism. First practical demonstration that model parallelism could scale transformer training beyond single-node memory limits.
  - **Megatron-Turing NLG 530B (2021, Microsoft/NVIDIA):** 530 billion parameter [[Transformer Architecture|transformer]] trained on 4,480 A100 GPUs using ZeRO + tensor + pipeline (3D) parallelism. Demonstrated 3D parallelism at production scale and held the record for largest dense language model for over a year.
  - **PaLM (2022, Google):** 540 billion parameter model trained on 6,144 TPU v4 chips using JAX/XLA GSPMD automatic partitioning. Notable for scaling [[Reinforcement Learning from Human Feedback|chain-of-thought reasoning]] capabilities and demonstrating that TPU-based training could match GPU-based training at extreme scale.
  - **GPT-4 (2023, OpenAI):** Estimated 1.8 trillion parameter [[Mixture of Experts]] model (unconfirmed) trained on approximately 25,000 A100 GPUs for 90–100 days. The largest training run to date in terms of total compute, with an estimated cost of $50–100 million.
  - **Llama 3 405B (2024, Meta):** 405 billion parameter [[Large Language Models|LLM]] trained on 16,000 H100 GPUs using Megatron-LM 4D parallelism (data + tensor + pipeline + sequence). Meta open-sourced the model weights, making frontier-scale [[Transformer Architecture|transformer]] architectures accessible for fine-tuning and research.
  - **INTELLECT-1 (2024, Prime Intellect):** 10 billion parameter model trained across five countries using [[DiLoCo]] with int8 gradient compression, demonstrating internet-scale decentralised training for the first time at meaningful model scale.

  ## Monitoring and Observability in Distributed Training

  Monitoring distributed training runs is significantly more complex than monitoring single-device training, requiring observability across hundreds or thousands of devices, communication layers, and software components simultaneously:

  **Training loss and throughput monitoring:** The primary signals for a healthy distributed training run are: (1) loss curve showing smooth convergence without spikes (loss spikes indicate gradient explosion, usually from a bad batch or numerical instability); (2) tokens per second (TPS) staying consistent (drops indicate hardware failures, stragglers, or communication bottlenecks); (3) GPU utilisation staying above 80% (drops indicate pipeline bubbles, data loading bottlenecks, or synchronisation delays). Weights & Biases (W&B), MLflow, and TensorBoard are the dominant monitoring platforms, with W&B being most widely adopted for large-scale distributed runs.

  **Gradient norm tracking:** The L2 norm of the global gradient (after allreduce aggregation) is a critical diagnostic: abnormally large gradient norms indicate loss spikes or instability; gradient norms that are systematically zero indicate dead neurons or vanishing gradient pathologies; sudden jumps in gradient norm signal data quality issues. Gradient norm clipping (torch.nn.utils.clip_grad_norm_ with max norm 1.0 is standard) prevents individual bad batches from causing parameter updates large enough to destabilise training, but the pre-clip gradient norm should be monitored to detect when clipping is occurring too frequently.

  **Hardware fault detection:** In a 2000-GPU training run with 99.9% individual GPU reliability, the expected time to the first GPU fault is approximately 2000 / (0.001 × 24 hours) ≈ 21 hours — meaning hardware faults should be expected multiple times per week for large runs. DCGM (Data Center GPU Manager) monitors GPU temperature, ECC memory errors, PCIe link health, and NVLink connectivity, generating alerts before critical failures. NVLink link errors that do not cause immediate failures but degrade bandwidth are particularly insidious, as they reduce throughput without triggering obvious failure signals.

  **Checkpoint integrity:** Checkpoints written during training must be verified for integrity (not corrupted by filesystem errors, network failures, or GPU hardware faults during write). Checksumming checkpoint files and validating that checkpoint loading produces expected training loss values are standard practices. Some teams maintain two rolling checkpoints (current and previous) to ensure recovery from checkpoint corruption.

  ## Distributed Inference: The Other Side of Scale

  While this page focuses on distributed training, distributed inference — serving trained models to users at scale — is an equally important engineering challenge that shares many of the same parallelism techniques:

  **Tensor parallelism for inference:** Large models that do not fit on a single GPU at inference time use the same tensor parallelism approach as training. NVIDIA's TensorRT-LLM and vLLM (Kwon et al., 2023) support multi-GPU tensor parallelism for inference with pipeline parallelism for extreme model sizes. The key difference from training is that inference is bandwidth-bound (loading weights from HBM) rather than compute-bound, so inference hardware optimisation focuses on memory bandwidth and KV cache management rather than raw FLOP throughput.

  **PagedAttention and KV cache sharding:** vLLM's PagedAttention (Kwon et al., UCB 2023) applies virtual memory and paging concepts to the KV cache in [[Transformer Architecture|transformer]] attention, enabling near-optimal GPU memory utilisation for concurrent inference requests. For very long context windows (128K+ tokens), the KV cache alone can exceed device memory, motivating distributed KV cache sharding across multiple GPUs — an inference-time form of sequence parallelism.

  **Speculative decoding at scale:** Speculative decoding (Leviathan et al., Google 2023) uses a small draft model to propose multiple tokens per step, which are verified in parallel by the large target model. The draft model and target model can be distributed across different GPUs or nodes, enabling parallelism within a single inference request rather than across batch items. Speculative decoding is increasingly deployed in production LLM serving as a way to reduce latency without increasing per-token compute.

  **Distributed inference for world models:** Wayve's GAIA-1 world model and similar autonomous driving foundation models require real-time distributed inference across multiple onboard compute modules (GPUs + NPUs), with tight latency requirements that differ fundamentally from datacenter LLM serving. This edge-distributed inference domain is an active engineering frontier distinct from datacenter-scale distributed training.

  ## Distributed Training and the Open-Source Ecosystem

  The open-source software ecosystem for distributed AI training is rich and rapidly evolving, enabling researchers and smaller organisations to run sophisticated distributed training without proprietary vendor lock-in:

  **Hugging Face Accelerate** provides a high-level abstraction over PyTorch DDP, FSDP, and DeepSpeed, enabling single-script training that runs on 1 GPU, 8 GPUs, or multi-node clusters with minimal code changes. Accelerate integrates with W&B for logging and supports [[Mixed Precision Training]] and gradient accumulation natively.

  **LlamaFactory** (Zheng et al., 2024) provides a unified fine-tuning framework for [[Large Language Models]] supporting QLoRA, LoRA, full fine-tuning, RLHF, and DPO across single-GPU and multi-GPU configurations. It has become the dominant open-source [[Deep Learning]] fine-tuning framework for academic and small-team applications.

  **OpenMoE and other community training runs** demonstrate that community-driven distributed training across volunteer compute is viable at the 10B+ parameter scale when coordinated by [[DiLoCo]] or similar low-communication protocols. The BitTorrent-inspired collaborative training paradigm (DALL-E collaborative, Hivemind, OpenMoE) distributes gradient computation across internet-connected participants without requiring a co-located GPU cluster.

  **Torchtune** (PyTorch team, 2024) provides a lightweight, native [[PyTorch]]-based fine-tuning library for [[Large Language Models]], supporting QLoRA, LoRA, and full fine-tuning with simple YAML configurations; it is increasingly used alongside FSDP2 for multi-node fine-tuning of open-weight models.

  ## Summary

  Distributed AI training is the engineering discipline that makes frontier-scale AI development possible by parallelising the compute, memory, and communication requirements of [[Machine Learning]] across many accelerators and nodes. Its four core parallelism strategies — data parallelism (replicate and sync), tensor parallelism (shard layers within nodes), pipeline parallelism (partition stages across nodes), and sequence parallelism (distribute long-context attention) — are combined in increasingly sophisticated "3D" and "4D" configurations to train models with hundreds of billions of parameters on multi-trillion-token corpora. The ZeRO memory optimisation family eliminates redundant parameter copies in data parallelism, enabling single-copy parameter storage across hundreds or thousands of GPUs. [[DiLoCo]] extends the frontier by enabling training across geographically distributed clusters connected by commodity internet, reducing communication bandwidth by 500× and making internet-scale decentralised model training practical for the first time.

  The UK's substantial investment in distributed training infrastructure through AIRR (Isambard-AI at Bristol, Dawn at Cambridge) and the foundational research contributions of Google DeepMind (DiLoCo, GShard, scaling laws), the Alan Turing Institute, Edinburgh, Imperial, and Manchester position the UK as a significant player in frontier distributed training capacity and methodology. Governance challenges — compute thresholds for safety evaluation, supply chain security, environmental sustainability, and the open vs. closed model development tension — will shape how distributed AI training capacity is built, regulated, and accessed over the 2026–2030 period.

- ### Provenance
  - sources:: https://www.rohan-paul.com/p/distributed-training-strategies-for, https://arxiv.org/pdf/2311.08105, https://arxiv.org/pdf/2412.01152, https://www.primeintellect.ai/blog/opendiloco, https://www.deepspeed.ai/training/, https://arxiv.org/pdf/2104.04473, https://arxiv.org/pdf/1910.02054, https://www.openaccessgovernment.org/isambard-ai-building-the-uks-most-powerful-ai-supercomputer/209620/, https://www.ukri.org/news/300-million-to-launch-first-phase-of-new-ai-research-resource/, https://epoch.ai/gradient-updates/how-far-can-decentralized-training-over-the-internet-scale, https://arxiv.org/pdf/2507.07765, https://datahacker.rs/llms-from-scratch-007-mastering-distributed-machine-learning-and-training-large-scale-models/
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
  - enrichment-model:: claude-sonnet-4-6
  - enrichment-wave:: phase-6-2026-06-21
  - quality-score:: 0.88
  - references-count:: 28