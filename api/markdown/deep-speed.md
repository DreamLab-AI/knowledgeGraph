- ### Definition
  - [[DeepSpeed]] is an open-source deep learning optimisation library developed by [[Microsoft Research]] and released in 2020, designed to enable the [[Distributed AI Training]] of models with hundreds of billions to trillions of parameters on clusters of [[GPU Cluster|GPU clusters]]. Its central innovation is the ZeRO (Zero Redundancy Optimizer) algorithm, which eliminates the memory redundancy inherent in standard [[Data Parallelism]] by partitioning [[Optimisation|optimiser]] states, gradients, and model parameters across all data-parallel [[Distributed Computing]] devices rather than replicating them. In standard data-parallel training every device holds a complete copy of all model states, creating per-device memory consumption that scales linearly with model size; ZeRO reduces this to O(N/d) where N is the total model state size and d is the number of devices, making training of models that far exceed the memory capacity of any single accelerator tractable. DeepSpeed further integrates [[Pipeline Parallelism]], [[Tensor Parallelism]], and [[Mixed-Precision Training]] into a unified framework that operates on top of [[PyTorch]], enabling 3D parallelism strategies — combining data, pipeline, and tensor parallelism simultaneously — that underpin the largest publicly reported training runs. Beyond training, DeepSpeed provides a high-performance inference engine with [[Model Quantization|quantisation]], weight streaming, and fused [[NVIDIA CUDA]] kernels for [[Transformer Architecture]] layers, along with ZeRO-Infinity which extends memory offloading to CPU RAM and NVMe storage to support models of theoretically unbounded scale. As of 2026, DeepSpeed remains one of the two dominant distributed training frameworks in the open-source ecosystem alongside NVIDIA's [[Megatron-LM]], and is actively maintained by Microsoft with support extended to AMD ROCm and Intel Gaudi accelerators in addition to the primary CUDA GPU pathway. The library is used across academia and industry for training foundational models including Turing-NLG, Megatron-Turing NLG 530B, GPT-NeoX, BLOOM, StarCoder, and Falcon, and is deeply integrated with [[Hugging Face Accelerate]] and the [[Python PyTorch Deep Learning Stack]] ecosystem.

- ### Semantic Classification
  - owl-class:: machine-learning:DeepSpeed
  - owl-role:: DistributedTrainingFramework | OptimisationLibrary | InferenceEngine | ExecutableProtocol
  - owl-inferred:: ml:MemoryOptimisationSystem, ml:LargeScaleMLFramework, ml:ParallelTrainingSystem, ml:ModelServingPlatform
  - belongs-to-domain:: [[Distributed AI Training]], [[High Performance Computing]], [[Machine Learning]]
  - implemented-in-layer:: [[Infrastructure Layer]], [[Algorithm Layer]]

- ### Relationships
  - is-subclass-of:: [[Distributed AI Training]], [[Distributed Computing]], [[Machine Learning]], [[High Performance Computing]]
  - has-part:: [[Pipeline Parallelism]], [[Tensor Parallelism]], [[Sparse Attention]], [[Gradient Checkpointing]], [[Mixed-Precision Training]], [[Model Quantization]], [[ZeRO Optimizer]]
  - implements:: [[Data Parallelism]], [[Model Parallelism]], [[Pipeline Parallelism]], [[Tensor Parallelism]], [[Mixed-Precision Training]]
  - uses:: [[Mixed-Precision Training]], [[Gradient Checkpointing]], [[NVIDIA CUDA]], [[Transformer Architecture]], [[PyTorch]], [[Message Passing Interface]], [[GPU Cluster]]
  - enables:: [[Large Language Model]], [[Model Parallelism]], [[Distributed Inference]], [[High Performance Computing]], [[Model Quantization]], [[Distributed AI Training]]
  - supports:: [[Natural Language Processing]], [[Computer Vision]], [[Reinforcement Learning]], [[Hugging Face]], [[Azure Machine Learning]]
  - requires:: [[High Performance Computing]], [[GPU Cluster]], [[PyTorch]], [[NVIDIA CUDA]]
  - depends-on:: [[Python PyTorch Deep Learning Stack]], [[Message Passing Interface]], [[Distributed Computing]], [[GPU Cluster]]
  - contrasts-with:: [[Megatron-LM]], [[JAX]], [[Fully Sharded Data Parallel]], [[Horovod]]
  - related-to:: [[Hugging Face Accelerate]], [[Data Parallelism]], [[Model Quantization]], [[Distributed Inference]], [[Gradient Descent]], [[Backpropagation]], [[Transformer Architecture]], [[Large Language Model]], [[Model Compression]]
  - standardized-by:: [[Microsoft Research]]

- ### Content

  ## Compositional Relationships (Components)
      SubClassOf(ml:DeepSpeed
        ObjectSomeValuesFrom(ml:hasPart ml:ZeROOptimizer))
      SubClassOf(ml:DeepSpeed
        ObjectSomeValuesFrom(ml:hasPart ml:PipelineParallelismEngine))
      SubClassOf(ml:DeepSpeed
        ObjectSomeValuesFrom(ml:hasPart ml:TensorParallelismEngine))
      SubClassOf(ml:DeepSpeed
        ObjectSomeValuesFrom(ml:hasPart ml:SparseAttentionKernel))
      SubClassOf(ml:DeepSpeed
        ObjectSomeValuesFrom(ml:hasPart ml:GradientCheckpointing))
      SubClassOf(ml:DeepSpeed
        ObjectSomeValuesFrom(ml:hasPart ml:MixedPrecisionTraining))
      SubClassOf(ml:DeepSpeed
        ObjectSomeValuesFrom(ml:hasPart ml:InferenceEngine))
      SubClassOf(ml:DeepSpeed
        ObjectSomeValuesFrom(ml:hasPart ml:ZeROInfinity))

  ## Dependency Relationships
      SubClassOf(ml:DeepSpeed
        ObjectSomeValuesFrom(ml:requires ml:GPUCluster))
      SubClassOf(ml:DeepSpeed
        ObjectSomeValuesFrom(ml:requires ml:NVIDIACUDARuntime))
      SubClassOf(ml:DeepSpeed
        ObjectSomeValuesFrom(ml:requires ml:PyTorch))
      SubClassOf(ml:DeepSpeed
        ObjectSomeValuesFrom(ml:dependsOn ml:MessagePassingInterface))
      SubClassOf(ml:DeepSpeed
        ObjectSomeValuesFrom(ml:dependsOn ml:DistributedComputing))
      SubClassOf(ml:DeepSpeed
        ObjectSomeValuesFrom(ml:dependsOn ml:TransformerArchitecture))

  ## Capability Relationships
      SubClassOf(ml:DeepSpeed
        ObjectSomeValuesFrom(ml:enables ml:LargeLanguageModelTraining))
      SubClassOf(ml:DeepSpeed
        ObjectSomeValuesFrom(ml:enables ml:ModelParallelism))
      SubClassOf(ml:DeepSpeed
        ObjectSomeValuesFrom(ml:enables ml:DistributedInference))
      SubClassOf(ml:DeepSpeed
        ObjectSomeValuesFrom(ml:enables ml:TrillionParameterTraining))
      SubClassOf(ml:DeepSpeed
        ObjectSomeValuesFrom(ml:enables ml:MemoryEfficientTraining))
      SubClassOf(ml:DeepSpeed
        ObjectSomeValuesFrom(ml:supports ml:NaturalLanguageProcessing))
      SubClassOf(ml:DeepSpeed
        ObjectSomeValuesFrom(ml:supports ml:ComputerVision))
      SubClassOf(ml:DeepSpeed
        ObjectSomeValuesFrom(ml:supports ml:AzureMachineLearning))

  ## Implementation Relationships
      SubClassOf(ml:DeepSpeed
        ObjectSomeValuesFrom(ml:implements ml:DataParallelism))
      SubClassOf(ml:DeepSpeed
        ObjectSomeValuesFrom(ml:implements ml:PipelineParallelism))
      SubClassOf(ml:DeepSpeed
        ObjectSomeValuesFrom(ml:implements ml:TensorParallelism))
      SubClassOf(ml:DeepSpeed
        ObjectSomeValuesFrom(ml:implements ml:MixedPrecisionTraining))
      SubClassOf(ml:DeepSpeed
        ObjectSomeValuesFrom(ml:uses ml:NVIDIACUDAKernels))
      SubClassOf(ml:DeepSpeed
        ObjectSomeValuesFrom(ml:uses ml:GradientCheckpointing))
      SubClassOf(ml:DeepSpeed
        ObjectSomeValuesFrom(ml:uses ml:MessagePassingInterface))

  ## Reduction Relationships
      SubClassOf(ml:DeepSpeed
        ObjectSomeValuesFrom(ml:reducesTo ml:DataParallelism))
      SubClassOf(ml:DeepSpeed
        ObjectSomeValuesFrom(ml:reducesTo ml:StandardDistributedTraining))
      SubClassOf(ml:DeepSpeed
        ObjectSomeValuesFrom(ml:reducesTo ml:SingleGPUTraining))
      SubClassOf(ml:ZeROOptimizer
        ObjectSomeValuesFrom(ml:reducesTo ml:AllReduceGradientSync))
      SubClassOf(ml:ZeROOptimizer
        ObjectSomeValuesFrom(ml:hasPart ml:OptimiserStatePartition))
      SubClassOf(ml:ZeROOptimizer
        ObjectSomeValuesFrom(ml:hasPart ml:GradientPartition))
      SubClassOf(ml:ZeROOptimizer
        ObjectSomeValuesFrom(ml:hasPart ml:ParameterPartition))
      SubClassOf(ml:DeepSpeedInferenceEngine
        ObjectSomeValuesFrom(ml:implements ml:ModelQuantization))
      SubClassOf(ml:DeepSpeedInferenceEngine
        ObjectSomeValuesFrom(ml:enables ml:HighThroughputInference))
      SubClassOf(ml:DeepCompile
        ObjectSomeValuesFrom(ml:implements ml:CompilerOptimisation))
      SubClassOf(ml:DeepCompile
        ObjectSomeValuesFrom(ml:enables ml:CommunicationComputationOverlap))

  ## About
  **DeepSpeed** is Microsoft Research's flagship contribution to the open-source infrastructure for large-scale [[Distributed AI Training]], and occupies a central position in the modern [[Machine Learning]] stack for training billion- to trillion-parameter [[Large Language Model|large language models]] and other [[Deep Learning|deep neural networks]]. Conceived from work on the original Turing-NLG 17B model training in 2019 and publicly released in 2020, DeepSpeed solved a problem that had become an existential constraint on AI research: the inability of any single GPU — even the most powerful then available — to hold the full model state of increasingly capable [[Transformer Architecture|transformer architectures]]. The library is maintained under the permissive Apache 2.0 licence and is installed via the [[Python PyTorch Deep Learning Stack]] ecosystem as the `deepspeed` PyPI package, with close integration into [[Hugging Face]] Transformers via the `Trainer` API and [[Hugging Face Accelerate]].

  The fundamental insight of the ZeRO (Zero Redundancy Optimizer) algorithm is that standard [[Data Parallelism]] is massively inefficient: each of the d devices in a data-parallel configuration maintains its own complete copy of the optimiser states (Adam first and second moments consume 8 bytes per parameter in FP32), gradients, and model parameters, yet all copies are kept identical through [[Gradient Descent|gradient]] synchronisation via MPI all-reduce. ZeRO simply partitions these redundant copies across devices, so that each device holds only 1/d of the total state, using collective communication to re-assemble shards on demand during [[Backpropagation|forward and backward passes]]. This transforms the per-device memory from O(N) — where N is the number of model parameters — to O(N/d), enabling a linear scaling in the effective model size that can be trained on any given hardware. The theoretical analysis in the original SC '20 paper demonstrated that, with d=64 data-parallel workers, ZeRO Stage 3 could train a 1-trillion parameter model — at the time a purely hypothetical scale — on hardware that would otherwise be limited to 7.5 billion parameters per device.

  DeepSpeed's design philosophy privileges composability and backward compatibility. Its configuration is specified via a JSON file (`ds_config.json`) that is consumed by the `deepspeed.initialize()` call wrapping a standard PyTorch model and optimiser, requiring minimal changes to existing training code. This one-file-configuration approach became a significant factor in the library's rapid adoption, distinguishing it from [[Megatron-LM]] which requires more invasive architectural changes. The library's tight integration with [[Azure Machine Learning]] also positions it as the canonical training framework for Microsoft's cloud AI customers, with native support in Azure ML's distributed job launchers and automatic cluster provisioning via InfiniBand-connected ND H100 v5 VM families.

  The ZeRO partitioning strategy was introduced in three escalating stages. **ZeRO Stage 1** partitions only the optimiser states, reducing memory from 16 bytes/parameter (4-byte FP32 parameter + 12-byte Adam state) to 4 + 12/d bytes/parameter — a meaningful reduction when d is 8 or more devices. **ZeRO Stage 2** additionally partitions the gradient tensors, further reducing the gradient contribution to 4/d bytes/parameter. **ZeRO Stage 3** partitions the model parameters themselves, reducing every component of model state by the device count d and allowing models that are strictly larger than the memory of any single device to be trained in a principled way. **ZeRO-Infinity**, introduced in 2021, extends the offloading concept to heterogeneous memory hierarchies: unused parameter shards can be offloaded to CPU DRAM (ZeRO-Offload) or NVMe SSDs (ZeRO-Infinity), trading bandwidth for capacity and enabling models of theoretically unbounded size on finite GPU clusters.

  Beyond ZeRO, DeepSpeed integrates a complete set of complementary techniques. Its **pipeline parallelism** engine implements the 1F1B (one-forward-one-backward) schedule to split model layers across pipeline stages, interlacing micro-batches to minimise the pipeline bubble — the fraction of time any stage is idle waiting for upstream computation. Its **tensor parallelism** engine (developed in close collaboration with [[Megatron-LM]] and combined in the Megatron-DeepSpeed integration) splits individual weight matrices column- or row-wise across devices, enabling intra-layer model parallelism that is orthogonal to pipeline and data parallelism. The combination of all three — dubbed **3D parallelism** — was demonstrated in the training of the Megatron-Turing NLG 530 billion parameter model in 2022, at the time the largest published dense language model. [[Sparse Attention]] kernels (introduced in DeepSpeed Sparse Attention) reduce the quadratic attention complexity of [[Transformer Architecture]] models, enabling sequence lengths substantially beyond what dense attention supports. The inference engine provides FP16/INT8 quantisation, kernel fusion for transformer operations, and weight streaming for models that exceed inference device memory, making DeepSpeed applicable throughout the model lifecycle.

  ## Historical Development Timeline
  The trajectory of DeepSpeed mirrors the exponential growth in [[Large Language Model]] parameter counts:

  - **2019**: ZeRO algorithm first described internally at Microsoft Research during Turing-NLG 17B training; tensor parallelism approach pioneered by [[Megatron-LM]] at NVIDIA
  - **2020 (February)**: DeepSpeed v0.1 released on GitHub; ZeRO paper presented at SC '20 (Best Paper Finalist); enables 100B+ parameter training
  - **2021 (March)**: ZeRO-Infinity paper (SC '21); ZeRO-Offload for CPU DRAM offloading; [[Distributed Inference]] engine introduced
  - **2021 (October)**: DeepSpeed-MoE for [[Mixture of Experts]] model training with expert parallelism
  - **2022 (January)**: Megatron-Turing NLG 530B joint paper published; largest publicly trained dense model at the time; used full 3D parallelism combining [[Megatron-LM]] and DeepSpeed
  - **2022 (July)**: ZeRO++ released; 4× reduction in communication volume vs ZeRO-3 via quantised gradients and hierarchical all-reduce on heterogeneous bandwidth topologies
  - **2022 (November)**: BLOOM 176B released by BigScience; DeepSpeed-trained on Jean Zay cluster; first open-weight model trained with DeepSpeed at this scale
  - **2023 (April)**: DeepSpeed-Chat released; end-to-end [[Reinforcement Learning]] from Human Feedback pipeline; SFT + reward model + PPO in a single DeepSpeed workflow
  - **2023 (November)**: DeepSpeed-FastGen with dynamic split-fuse for continuous batching [[Distributed Inference]]
  - **2024 (December)**: DeepSpeed Core API update; PyTorch-style backward pass; low-precision master states reducing FP32 memory overhead
  - **2025 (April)**: DeepCompile released; compiler integration with `torch.compile` for automated communication-computation overlap scheduling
  - **2025 (October)**: SuperOffload; Arctic Long Sequence Training (ALST) for multi-million token sequences; ZenFlow and Muon optimiser support
  - **2026 (March)**: ASPLOS 2026 tutorial on DeepSpeed; SuperOffload receives ASPLOS 2026 Honourable Mention for Best Paper
  - **2026 (May)**: System DMA for ZeRO-3 on AMD ROCm GPUs; collectives offloaded to DMA engine to free compute units

  ## ZeRO Algorithm — Technical Detail
  The core ZeRO memory analysis decomposes training memory into two categories: **model state memory** (optimiser states + gradients + parameters) and **residual memory** (activations + temporary buffers). For a model with N parameters trained with the Adam optimiser in mixed precision:

  - Baseline (replicated [[Data Parallelism|data parallel]]): 16N bytes per device (4N fp16 params + 4N fp32 master copy + 8N fp32 Adam states)
  - ZeRO Stage 1 (partition optimiser states): (4N + 8N/d + 4N/d) bytes per device
  - ZeRO Stage 2 (partition optimiser states + [[Gradient Descent|gradients]]): (4N + 12N/d) bytes per device
  - ZeRO Stage 3 (partition all model state): 16N/d bytes per device
  - ZeRO-Offload (Stage 2 + CPU): CPU holds 8N+4N, GPU holds 4N fp16 params + local gradients
  - ZeRO-Infinity: limited only by aggregate NVMe storage capacity

  At d=64 devices, Stage 3 achieves 64x memory reduction versus the baseline, transforming 64-device training from a 64x redundant system into a near-perfectly memory-efficient one. The communication overhead compared to standard all-reduce [[Data Parallelism]] adds a roughly 1.5x communication volume (for Stage 3), which is amortised by the much larger models that can now be trained without falling back to slower pipeline-based approaches.

  **Communication analysis**: Standard data-parallel all-reduce requires 2Ψ element communication (reduce-scatter + all-gather). ZeRO Stage 3 requires 3Ψ elements total (reduce-scatter + all-gather for forward + all-gather for backward), a 1.5× overhead. ZeRO++ reduces this further using quantised weights (16-bit → 8-bit, 2× reduction) and hierarchical partitioning (hpZ) that exploits NVLink bandwidth within nodes to minimise InfiniBand inter-node traffic, achieving effective communication comparable to ZeRO Stage 1 at Stage 3 memory efficiency.

  **Residual memory considerations**: ZeRO addresses model state memory but not residual memory (activations). [[Gradient Checkpointing|Activation checkpointing]] (selective recomputation of activations during [[Backpropagation|backward pass]]) addresses residual memory, trading additional compute (typically +33% compute overhead) for proportional activation memory reduction. DeepSpeed integrates activation checkpointing with configurable granularity from full recomputation to no recomputation, allowing operators to tune the memory-compute trade-off based on available hardware.

  ## Components / Architecture

  - **ZeRO Optimizer (Stages 1–3 + Infinity)**
    - Core memory partitioning engine; shards optimiser states, [[Gradient Descent|gradients]], and parameters across data-parallel ranks
    - Collective gather (all-gather) on forward/backward as needed; reduce-scatter on gradient synchronisation
    - JSON-configurable: `zero_optimization.stage` controls which stages are active
    - ZeRO++ adds quantised weight gathering (qwZ) and hierarchical partitioning (hpZ)
  - **Pipeline Parallelism Engine**
    - 1F1B (one-forward-one-backward) micro-batch schedule; configurable number of pipeline stages
    - Interleaved 1F1B schedule reduces pipeline bubble fraction from O(p-1/m) to O(p-1/v·m)
    - Configurable micro-batch count and gradient accumulation steps
    - Bubble rate profiling and analysis tools included
  - **Tensor Parallelism**
    - Column-parallel and row-parallel [[Transformer Architecture|transformer]] linear layers
    - Head-level attention parallelism for multi-head attention blocks
    - Integrated with [[Megatron-LM]] communication patterns via Megatron-DeepSpeed project
    - Most effective within NVLink-connected GPU nodes (≤8 GPUs per tensor-parallel group)
  - **DeepSpeed Inference Engine**
    - FP16/BF16/INT8 CUDA kernel support with auto-tuned tiling
    - Weight quantisation (INT8, INT4) and streaming for models exceeding GPU memory
    - Continuous batching via DeepSpeed-FastGen with dynamic split-fuse algorithm
    - [[Distributed Inference|Distributed inference]] via tensor parallelism across multiple GPUs for single-request latency optimisation
  - **Sparse Attention Kernels**
    - [[Sparse Attention|BigBird]], Longformer, and custom sparsity patterns
    - Enables sequences up to 100k+ tokens in [[Transformer Architecture|transformer]] training
    - Tiled sparse matrix-multiply kernels optimised for H100/A100 hardware
  - **Gradient Checkpointing Integration**
    - Activation recomputation: discard intermediate activations, recompute during [[Backpropagation|backward pass]]
    - Configurable per-layer granularity: full, partial, or no checkpointing
    - Reduces activation memory from O(L×B×S×H) to O(L√(L×B×S×H)) with uniform checkpointing
  - **ZeRO-Offload / ZeRO-Infinity**
    - CPU DRAM tier: async prefetch to hide PCIe transfer latency; NUMA-aware placement
    - NVMe SSD tier (ZeRO-Infinity): async NVMe I/O with configurable buffer sizes
    - Bandwidth-optimal scheduling: overlap compute with device-to-host transfers
  - **DeepCompile (2025)**
    - Compiler pipeline integrating with `torch.compile` (TorchDynamo / TorchInductor)
    - Proactive prefetching: schedules all-gather operations before they are needed by compute
    - Selective unsharding: keeps frequently used parameters permanently unsharded when beneficial
    - Adaptive offloading: dynamically determines which optimizer state subsets to offload to CPU
  - **SuperOffload (2025–2026)**
    - Large-scale [[Large Language Model|LLM]] training on heterogeneous superchip architectures (GB200 NVL72, MI300X)
    - ASPLOS 2026 Best Paper Honourable Mention
    - Targets within-node HBM + DRAM + NVMe memory hierarchy on unified superchip nodes
  - **System DMA for ZeRO-3 (2026)**
    - AMD ROCm GPU collective offloading via System DMA (SDMA) engine
    - Frees compute units (CUs) during all-gather / reduce-scatter operations
    - Improves compute utilisation on AMD MI300X during ZeRO-3 communication phases
  - **Arctic Long Sequence Training (ALST, 2025)**
    - Sequence parallelism distributing sequence dimension across devices
    - Enables multi-million token training for long-context [[Large Language Model|language models]]
    - Ring attention-style communication for overlapping sequence chunks

  ## Major Model Families Trained with DeepSpeed
  DeepSpeed underpins or substantially enables training of a significant fraction of publicly disclosed large models:

  - **Turing-NLG 17B (2020)**
    - First large-scale DeepSpeed deployment
    - 17B parameter autoregressive [[Large Language Model|language model]]
    - Trained on 512 NVIDIA V100 32GB GPUs
    - ZeRO Stage 2; achieved 41.4 TFlops/GPU sustained
  - **Megatron-Turing NLG 530B (2022)**
    - Joint [[Microsoft Research]] / NVIDIA project
    - Combines [[Megatron-LM]] tensor parallelism with DeepSpeed ZeRO and pipeline parallelism
    - 530B dense parameters; 270B GPT architecture
    - Trained on 4480 NVIDIA A100 80GB GPUs across Azure and NVIDIA DGX SuperPOD
    - Full 3D parallelism: 8T × 35P × 16D = 4480 GPUs
  - **BLOOM 176B (2022)**
    - BigScience consortium multilingual model; 46 natural languages
    - Used DeepSpeed ZeRO Stage 3 with [[Megatron-LM]]
    - Trained on GENCI Jean Zay cluster (France) with 384 A100 80GB GPUs
    - First open-weight model at this scale; all training code open-sourced
  - **GPT-NeoX 20B (2022)**
    - EleutherAI open-source [[Large Language Model|LLM]]
    - Trained on CoreWeave hardware using DeepSpeed
    - Published training code and weights publicly
  - **StarCoder (2023)**
    - BigCode project code generation model; 15B parameters
    - DeepSpeed + [[Megatron-LM]] training infrastructure
    - Trained on 512 A100 80GB GPUs on ServiceNow cluster
  - **Falcon 40B / 180B (2023)**
    - Technology Innovation Institute (TII) Abu Dhabi
    - DeepSpeed-based training infrastructure
    - 40B achieved state-of-the-art open model performance at release
  - **Microsoft Phi family (2023–2025)**
    - Phi-1 (1.3B), Phi-2 (2.7B), Phi-3-mini/small/medium, Phi-4 (14B)
    - Trained on Azure using DeepSpeed internally
    - "Small language model" philosophy demonstrating data quality over scale
  - **DeepSeek models (2024)**
    - Various open-source Chinese frontier models from DeepSeek AI
    - Training infrastructure uses DeepSpeed ZeRO components
    - DeepSeek-V2, DeepSeek-Coder, DeepSeek-R1 among published models

  ## Use Cases
  - **Frontier model pre-training**
    - Trillion-token training runs for foundation [[Large Language Model|language models]] requiring thousands of [[GPU Cluster|GPUs]]
    - ZeRO Stage 3 + 3D parallelism enables distribution of 500B+ parameter models
    - Typical configuration: ZeRO Stage 3 + pipeline parallelism for multi-node, tensor parallelism within NVLink node
  - **Fine-tuning at scale**
    - [[Reinforcement Learning|RLHF]], instruction tuning, and parameter-efficient fine-tuning (LoRA/QLoRA) of large models on smaller [[GPU Cluster|GPU clusters]]
    - Stage 1/2 typically sufficient; ZeRO Stage 3 for models exceeding 30B parameters on 8-GPU nodes
    - DeepSpeed-Chat provides end-to-end RLHF pipeline including PPO implementation
  - **Mixture-of-Experts (MoE) training**
    - DeepSpeed-MoE provides expert parallelism support enabling sparse MoE models with thousands of experts
    - All-to-all communication for expert routing; hierarchical expert placement strategies
    - Applicable to Switch Transformer, GLaM, and open-source MoE architectures
  - **Long-context training**
    - Arctic Long Sequence Training (ALST, 2025) enables multi-million token sequence training
    - Sequence parallelism distributes the sequence dimension across devices
    - Applicable to document summarisation, code generation, and multimodal long-context models
  - **Inference serving**
    - DeepSpeed-FastGen continuous batching with dynamic split-fuse for throughput-optimised [[Large Language Model|LLM]] serving
    - DeepSpeed-MII wraps inference engine with REST API and dynamic batching
    - Applicable to self-hosted enterprise deployments on [[Azure Machine Learning]] and on-premises clusters
  - **Academic research**
    - Accessible via [[Hugging Face]] Transformers `Trainer` integration and [[Hugging Face Accelerate]] backend
    - Single-node ZeRO Stage 2/3 widely used in university research groups for 7B–70B parameter fine-tuning
    - Open-source licence (Apache 2.0) enables derivative research and educational use

  ## Theoretical Foundations
  DeepSpeed synthesises principles from three research communities: high-performance computing (HPC), distributed systems, and [[Machine Learning]] systems research. Understanding these theoretical foundations illuminates both the design choices and the limits of the library's current approaches.

  From **HPC and parallel computing**, DeepSpeed draws on collective communication theory (all-reduce, reduce-scatter, all-gather), which was formalised for MPI in the 1990s and optimised for InfiniBand fabric topology in the 2010s. The ZeRO communication pattern (reduce-scatter for gradient aggregation + all-gather for parameter retrieval) is a specific instantiation of classical scatter-gather algorithms adapted to the symmetric structure of data-parallel [[Deep Learning|deep learning]] training. NCCL (NVIDIA Collective Communications Library) provides the low-level implementation of these collectives on GPU hardware, and DeepSpeed schedules these NCCL operations while managing the higher-level partitioning logic.

  From **distributed systems**, DeepSpeed adopts the principle of data partitioning across nodes — a pattern common in distributed database systems and MapReduce frameworks — and applies it to the neural network weight tensors that constitute model state. The fundamental challenge is that neural network weights, unlike database records, must be assembled and disassembled on every forward and backward pass (rather than once per query), placing much tighter requirements on communication latency and bandwidth. ZeRO's key insight is that the communication volume for optimal model-state sharding (3Ψ elements for Stage 3) is asymptotically only 1.5× worse than the baseline all-reduce (2Ψ elements), making the trade-off extremely favourable.

  From **[[Machine Learning]] systems**, DeepSpeed draws on [[Mixed-Precision Training]] (Micikevicius et al., 2018), which demonstrated that training with FP16/BF16 arithmetic and FP32 master weights could match FP32-only accuracy on most architectures with appropriate loss scaling. This halved memory requirements for activations and parameters while also doubling throughput on Tensor Core hardware that natively supports 16-bit matrix multiplication. [[Gradient Checkpointing]] (Chen et al., 2016) provided the complement: trading recomputation for activation memory, enabling constant-factor memory reduction independent of model size for the activation memory component.

  The integration of these three bodies of work into a single, backward-compatible library with a single configuration file is DeepSpeed's engineering contribution — making a system whose theoretical complexity approaches that of a distributed operating system accessible to practitioners who primarily think in terms of [[PyTorch]] models and training loops.

  ## Deployment Configuration Guide
  Practitioners using DeepSpeed navigate a configuration space that determines which parallelism strategies are active, at what stages, and with what communication and memory trade-offs. The following summarises common deployment configurations:

  **Single-node, 8-GPU (e.g. NVIDIA DGX A100/H100)**:
  - ZeRO Stage 2 or 3 for model sizes up to ~70B parameters on 80GB GPUs
  - No pipeline parallelism (overhead exceeds benefit at ≤8 GPUs)
  - Tensor parallelism degree T=2 or T=4 for models with >10B parameters where gradient memory is the binding constraint
  - [[Mixed-Precision Training|BF16]] precision; no offloading required
  - Typical use: fine-tuning Llama 70B, training 7B–20B parameter models from scratch

  **Multi-node, 16–64 GPUs (e.g. JADE-2 or cloud cluster)**:
  - ZeRO Stage 3 for models >50B parameters; ZeRO Stage 2 for smaller models with data parallelism
  - Pipeline parallelism P=2 to P=8 across nodes when InfiniBand bandwidth is the limiting factor
  - Tensor parallelism T=8 within each NVLink-connected node
  - Data parallelism D = total GPUs / (T × P) fills remaining capacity
  - Typical use: pre-training 30B–100B parameter models, RLHF training of large models

  **Extreme scale, 1000+ GPUs**:
  - Full 3D parallelism with ZeRO Stage 3
  - Megatron-DeepSpeed integration for tensor parallelism optimised communication patterns
  - Interleaved 1F1B pipeline schedule to minimise bubble fraction
  - ZeRO++ with quantised weight gathering for reduced cross-node communication
  - DeepCompile for automated overlap scheduling
  - Typical use: trillion-token pre-training of 100B+ parameter frontier models on Azure or NVIDIA Selene infrastructure

  **CPU-memory-constrained systems (academic clusters without high-memory GPUs)**:
  - ZeRO-Offload (Stage 2 + CPU offload) for training models 2–10× GPU memory capacity
  - ZeRO-Infinity for models requiring NVMe offload; tolerable only with NVMe SSDs on PCIe 4.0+ bus
  - [[Gradient Checkpointing]] to reduce activation memory
  - Typical use: university researchers training 13B–30B parameter models on standard compute cluster allocations

  ## 3D Parallelism: The Unifying Framework
  The most significant engineering contribution of the DeepSpeed/Megatron-LM joint research programme is the realisation and demonstration of **3D parallelism** — the simultaneous combination of data parallelism (via ZeRO), pipeline parallelism, and tensor parallelism into a single coordinated training system. Each parallelism dimension addresses a distinct aspect of the scalability problem:

  **[[Data Parallelism]] (ZeRO)** scales the total data throughput by processing different mini-batches on different devices and averaging gradients. In standard data parallelism this requires a full model replica on each device; ZeRO eliminates this constraint by partitioning model state. Data parallelism provides the widest scaling dimension — it is straightforward to add more data-parallel workers — but provides no benefit when the model does not fit on a single device even with ZeRO Stage 3.

  **[[Pipeline Parallelism]]** assigns different contiguous groups of [[Transformer Architecture|transformer]] layers to different devices, forming a pipeline. A mini-batch is split into micro-batches that flow through the pipeline sequentially. At steady state, multiple micro-batches occupy different pipeline stages simultaneously. The efficiency loss — the pipeline bubble — is the fraction of each pipeline's time spent waiting for the first micro-batch to traverse the full pipeline at startup and for the last micro-batch to complete at cooldown. DeepSpeed implements the 1F1B (one forward, one backward) schedule and the more efficient interleaved 1F1B schedule (from PipeDream-Flush) that reduces the bubble fraction from O(p-1/m) to O(p-1/v·m) where p is pipeline stages, m is micro-batches, and v is virtual pipeline stages per device.

  **[[Tensor Parallelism]]** (pioneered by [[Megatron-LM]]) splits individual weight matrices within a layer across devices. For a self-attention layer, attention heads can be assigned to different devices; for a feedforward layer, the columns of the first weight matrix and rows of the second are split column-parallel and row-parallel respectively. This requires exactly two all-reduce operations per transformer layer (at the output of the column-parallel and row-parallel computations). Tensor parallelism incurs synchronisation overhead that scales with model depth and is most efficient within a single NVLink-connected node, while pipeline parallelism tolerates the lower bandwidth of InfiniBand connections between nodes.

  The 3D combination assigns the N total GPUs as T tensor-parallel × P pipeline-parallel × D data-parallel, with T·P·D = N. Choosing T, P, and D requires careful profiling: T is typically bounded by NVLink bandwidth (e.g. 8 within a DGX node), P scales with number of nodes and InfiniBand bandwidth, and D fills the remaining capacity with ZeRO memory partitioning.

  ## Performance Benchmarks and Throughput Results
  Published throughput results from Microsoft and community sources provide concrete data points on DeepSpeed's practical performance. All results are approximate and hardware-dependent:

  - **Turing-NLG 17B** (2020): 530 TFlops aggregate on 512 NVIDIA V100 32GB; 41.4 TFlops/GPU sustained
  - **Megatron-Turing NLG 530B** (2022): 126 TFlops/GPU sustained on NVIDIA A100 80GB with NVLink + InfiniBand; trained across 4480 GPUs on Azure + NVIDIA DGX SuperPOD
  - **BLOOM 176B** (2022): Trained on 384 A100 80GB on GENCI Jean Zay cluster (France); ~39 TFLOPS/GPU
  - **MLPerf Training 4.0 Record** (2024): Azure ND H100 v5 cluster training GPT-3 175B in <10 minutes, 2.3× improvement over prior record; DeepSpeed integration
  - **ZeRO++ vs ZeRO-3 communication reduction**: 4× communication volume reduction on topologies with heterogeneous bandwidth (NVLink within node vs InfiniBand between nodes)
  - **DeepCompile gains** (2025): 10–30% throughput improvement on ZeRO-3 training runs vs uncompiled baseline, from proactive prefetching and selective unsharding

  These figures depend strongly on model architecture (dense vs MoE), hardware interconnect bandwidth, batch size, sequence length, and the specific ZeRO stage and 3D parallelism configuration. DeepSpeed provides profiling utilities and the `ds_report` diagnostic tool to assist practitioners in optimising configuration.

  ## Academic Context
  DeepSpeed emerged from Microsoft Research's deep learning systems research group, led by Yuxiong He and Olatunji Ruwase, and is intellectually descended from several bodies of prior work across high-performance computing and [[Machine Learning]] systems research. The data-parallel gradient averaging technique was established through [[Horovod]] (Sergeev & Del Balso, 2018) and PyTorch DistributedDataParallel (DDP, Li et al., 2020), which provided the communication substrate on which ZeRO operates. The foundational observation — that model state redundancy in [[Data Parallelism]] is the primary memory bottleneck — was first articulated rigorously in the ZeRO paper (Rajbhandari et al., SC 2020, Best Paper Finalist), which provided the first comprehensive memory breakdown analysis of the [[Distributed AI Training|distributed training]] memory problem.

  [[Megatron-LM]] (Shoeybi et al., 2019) at NVIDIA Research independently established the tensor parallelism approach for [[Transformer Architecture|transformer]] layer splitting, which DeepSpeed later incorporated via the Megatron-DeepSpeed project. The 1F1B pipeline schedule was formalised by Narayanan et al. in PipeDream-Flush (SC 2021), building on the earlier PipeDream work (SOSP 2019). [[Gradient Checkpointing|Activation checkpointing]], a component of DeepSpeed's residual memory management, traces to Chen et al. (2016) at CMU. The ZeRO-Infinity work (2021) drew on prior CPU-offload research in distributed systems and heterogeneous memory management. Together, these bodies of work form the theoretical foundation that DeepSpeed synthesises into an integrated, practitioner-accessible system.

  The Megatron-Turing NLG 530B paper (Smith et al., 2022) represents the definitive demonstration of 3D parallelism at scale and remains the most widely cited empirical result demonstrating DeepSpeed's capabilities at frontier model scale. Subsequent publications from the BLOOM project, EleutherAI, and the BigCode project have validated DeepSpeed's utility for large-scale open science model training, establishing it as the standard tool for academic-scale frontier model training that lacks access to Google's proprietary JAX/XLA ecosystem or NVIDIA's Selene cluster.

  ## Competitive Positioning and Ecosystem Comparison
  DeepSpeed occupies a distinct niche in the distributed training ecosystem, competing and coexisting with several alternative frameworks:

  **vs. PyTorch FSDP (Fully Sharded Data Parallel)**:
  PyTorch FSDP (released in PyTorch 1.11, matured in 1.13) implements ZeRO Stage 3-equivalent functionality as a native PyTorch primitive, removing the DeepSpeed dependency for pure data-parallel sharding. FSDP has gained substantial adoption in 2024–2026 as Meta's internal training framework for Llama models, and FSDP2 (PyTorch 2.3+) improves composability with torch.compile. The key advantage of FSDP over DeepSpeed is tighter integration with the [[Python PyTorch Deep Learning Stack|PyTorch]] ecosystem (no separate installation, better `torch.compile` compatibility); DeepSpeed's advantage is the more mature pipeline and tensor parallelism support, ZeRO-Infinity, and the complete inference engine.

  **vs. [[Megatron-LM]] (NVIDIA)**:
  [[Megatron-LM]] is NVIDIA's internal framework for frontier model training, optimised for NVIDIA DGX SuperPOD clusters with NVLink and InfiniBand. It pioneered tensor parallelism and implements highly optimised CUDA kernels for transformer operations (FlashAttention, fused LayerNorm). The Megatron-DeepSpeed integration project combines both frameworks. For pure NVIDIA hardware at scale, [[Megatron-LM]] is often the higher-performing choice; DeepSpeed provides broader hardware support and a more accessible API.

  **vs. Google JAX/XLA**:
  Google's [[JAX]] with XLA compilation provides the training infrastructure for Google's internal models (Gemini, PaLM, Gemma). XLA's ahead-of-time compilation and SPMD (Single Program Multiple Data) parallelism strategy provides different trade-offs: better compiler optimisation but more complex programming model. JAX is less accessible for practitioners outside Google's ecosystem; DeepSpeed remains the dominant choice for non-Google external research.

  **vs. ColossalAI**:
  ColossalAI (Leahy Zhang et al., NeurIPS 2022) is a competing framework from Colossal AI that implements tensor, pipeline, and ZeRO-equivalent memory optimisation. Less widely adopted than DeepSpeed but offers some advanced auto-parallelism features for automatic strategy selection.

  **vs. Lightning Fabric / PL + DeepSpeed**:
  PyTorch Lightning wraps DeepSpeed as a backend via Lightning Fabric, providing a higher-level API for practitioners who prefer a training loop abstraction. DeepSpeed's native API provides more fine-grained control; Lightning Fabric makes it more accessible.

  ## Current Landscape (2026)
  As of mid-2026, DeepSpeed is maintained by the DeepSpeed AI team at Microsoft under the `deepspeedai` GitHub organisation (formerly `microsoft/DeepSpeed`), with a global contributor base extending beyond Microsoft employees. The project has accumulated over 35,000 GitHub stars and is installed by tens of thousands of researchers and engineers worldwide via PyPI. The 2025–2026 release series introduced several significant extensions: DeepCompile (April 2025) integrates [[PyTorch]] compiler optimisations with DeepSpeed's communication scheduling, using proactive prefetching, selective unsharding, and adaptive offloading to improve throughput on ZeRO-3 runs by 10–30%. SuperOffload (October 2025) targets heterogeneous GPU/accelerator superchips, received an ASPLOS 2026 Honourable Mention, and enables training regimes that span memory tiers within a single compute node. ZenFlow and Muon Optimiser support (late 2025) provide alternative optimiser backends beyond Adam, addressing research into improved optimiser convergence properties. Arctic Long Sequence Training (ALST) extends the sequence length frontier to multi-million tokens through sequence parallelism. System DMA for ZeRO-3 on AMD ROCm (May 2026) offloads collective operations to AMD's DMA engines, freeing compute units during communication phases and improving GPU utilisation on AMD MI300X hardware.

  The Azure integration remains the canonical enterprise deployment path, with [[Azure Machine Learning]] providing native DeepSpeed job launchers, automatic scaling across ND A100 and ND H100 v5 VM families, and managed monitoring of distributed training jobs. In MLPerf Training 4.0, Azure with DeepSpeed infrastructure demonstrated training a 175B parameter model in under 10 minutes on H100 clusters — a 2.3× improvement over the prior record and a demonstration that cloud infrastructure can match dedicated AI supercluster performance. The competitive landscape includes PyTorch FSDP (Fully Sharded Data Parallel) — the [[PyTorch]]-native equivalent of ZeRO Stage 3 — which has gained substantial adoption in 2024–2026 as a simpler alternative without the DeepSpeed dependency. FSDP2 in PyTorch 2.3+ addresses prior limitations in composability with `torch.compile`, narrowing the gap with DeepSpeed's DeepCompile approach. [[Megatron-LM]] remains the primary framework for NVIDIA-internal model training (Megatron-Core is the underlying engine for NVIDIA's NIM microservices). The hardware diversity trend — AMD MI300X gaining market share, Intel Gaudi 3 deployments growing in Europe and Asia, Cerebras and Graphcore AI accelerators in academic deployments — is the primary forcing function for DeepSpeed's continued investment in hardware abstraction and compiler-first design.

  ## Open Source Governance and Community
  DeepSpeed operates as an open-source project under the Apache 2.0 licence, maintained by Microsoft Research's DeepSpeed team under the `deepspeedai` GitHub organisation. The project governance model is relatively centralised: Microsoft employees author the majority of core features, while community contributions focus primarily on bug fixes, hardware backend extensions, and documentation improvements. This contrasts with more distributed governance models like PyTorch (Linux Foundation AI) or Hugging Face Transformers (community-driven). The centralised model has advantages for architectural coherence but can mean that features prioritised by Microsoft's internal model training roadmap receive more attention than features critical to the broader research community.

  The project's issue tracker and GitHub Discussions board serve as the primary support channels, with Microsoft engineers actively responding to user issues. The DeepSpeed blog (`deepspeed.ai`) publishes technical articles on new features and performance results. The project has strong presence at major ML conferences (NeurIPS, ICML, SC, ASPLOS), with accepted papers from the core team establishing the theoretical foundations for each major new capability. Community tutorials and integration examples cover [[Hugging Face]] Transformers, PyTorch Lightning, and custom training loop patterns, significantly reducing the barrier to entry for practitioners from diverse technical backgrounds.

  ## UK Context
  The UK's academic and industrial AI community engages with DeepSpeed primarily through its use in training infrastructure for research organisations. The Baskerville, Sulis, and JADE-2 national facilities operated by EPSRC provide NVIDIA A100 [[GPU Cluster|GPU clusters]] to UK universities; DeepSpeed is among the supported [[Distributed AI Training|distributed training]] frameworks on JADE-2 and Baskerville for research groups at the University of Edinburgh, University of Manchester, Imperial College London, and University College London undertaking large-scale [[Natural Language Processing|NLP]] and multimodal pre-training. The Alan Turing Institute's computing partnerships leverage DeepSpeed for national AI research programs. The UK AI Research Resource (AIRR), receiving government investment under the National AI Strategy, is designed to support exactly the kind of large-scale training runs for which DeepSpeed provides the software stack.

  Northern England's AI ecosystem — centred on Manchester's National Graphene Institute and Leeds-based data science companies — benefits from JADE-2 access and the open-source nature of the library. UK-based research groups at Edinburgh (Language Technology Group) and Manchester (Machine Learning group) have published work using DeepSpeed for large-scale [[Large Language Model|language model]] training. Sheffield's Neuroscience and AI group and Newcastle University's Digital Institute have applied DeepSpeed to biomedical foundation model training, taking advantage of JADE-2 allocation mechanisms that support multi-GPU jobs. The Isambard AI national facility (HP Cray EX supercomputer at the University of Bristol), receiving £225M of government funding, will provide heterogeneous GPU (NVIDIA Grace Hopper) compute that DeepSpeed's hardware-agnostic design is positioned to support, potentially creating a significant UK national capability for open foundation model training at scale.

  ## Formal Memory Analysis: ZeRO Stage Breakdown
  Consider a model with Ψ parameters trained with the [[Mixed-Precision Training|mixed-precision]] Adam optimiser. For each parameter, the baseline memory profile is:

  - **FP16 parameters**: 2 bytes × Ψ
  - **FP16 gradients**: 2 bytes × Ψ
  - **FP32 master parameters** (for numerically stable weight update): 4 bytes × Ψ
  - **FP32 Adam first moment (m)**: 4 bytes × Ψ
  - **FP32 Adam second moment (v)**: 4 bytes × Ψ
  - **Total per device (baseline data parallel)**: 16Ψ bytes

  ZeRO partitions across Nd data-parallel devices:

  | Stage | Partition | Per-device memory | Reduction vs baseline (Nd=64) |
  |-------|-----------|-------------------|-----------------------------|
  | Baseline | None | 16Ψ | 1× |
  | Stage 1 | Optimiser states | 4Ψ + 12Ψ/Nd | ~4× |
  | Stage 2 | Optimiser states + gradients | 4Ψ + (12+2)Ψ/Nd | ~4× |
  | Stage 3 | All model state | 16Ψ/Nd | 64× |
  | ZeRO-Infinity | All state + NVMe offload | hardware dependent | unlimited |

  Communication volume for Stage 3 is 3Ψ elements (1.5× the all-reduce baseline of 2Ψ for data parallelism), a modest overhead fully justified by the model scale it enables. For FP16 communication with BF16 arithmetic (the 2024–2026 standard configuration), mixed-precision [[Gradient Descent|gradient]] accumulation further reduces communication volume.

  ## Integration Ecosystem
  DeepSpeed's practical influence extends beyond its core algorithms to the ecosystem of tools it integrates with or has inspired:

  - **[[Hugging Face Accelerate]]**: The `accelerate` library wraps DeepSpeed ZeRO as a backend, enabling researchers to add DeepSpeed to existing HuggingFace training scripts with a single command-line flag; the most common entry point for academic users
  - **[[Hugging Face]] Transformers `Trainer`**: Native `TrainingArguments.deepspeed` parameter enabling ZeRO Stage 1/2/3 in any standard HuggingFace fine-tuning workflow
  - **[[PyTorch]] FSDP interoperability**: DeepSpeed ZeRO and PyTorch FSDP target similar use cases; Microsoft has contributed to bridge APIs allowing models to move between the two backends
  - **[[Azure Machine Learning]]**: Native DeepSpeed job configuration in Azure ML pipelines; Azure ND A100 v4 and ND H100 v5 VMs are the canonical training hardware
  - **[[Megatron-LM]] integration**: The Megatron-DeepSpeed project combines Megatron-LM's tensor parallelism with DeepSpeed's ZeRO and pipeline parallelism, providing full 3D parallelism; used for frontier model training runs
  - **RLHF toolkits**: DeepSpeed-Chat (2023) provides an end-to-end pipeline for supervised fine-tuning, reward model training, and PPO-based [[Reinforcement Learning|reinforcement learning from human feedback]], making RLHF accessible at large model scales
  - **Inference frameworks**: DeepSpeed-MII (Model Implementations for Inference) wraps the DeepSpeed inference engine with a REST API and dynamic batching, enabling [[Distributed Inference|distributed inference]] deployment patterns similar to vLLM

  ## Key Terminology
  - **ZeRO**: Zero Redundancy Optimizer — the core memory partitioning algorithm; the defining innovation of DeepSpeed; named to contrast with the O(N) memory of standard [[Data Parallelism]]
  - **ZeRO Stage 1**: Partitions only optimiser states across data-parallel ranks; 4× memory reduction for Adam optimiser at infinite parallelism
  - **ZeRO Stage 2**: Partitions optimiser states and [[Gradient Descent|gradients]]; further reduces per-device memory; most common production setting
  - **ZeRO Stage 3**: Partitions all model state (optimiser states, gradients, and parameters); enables training models larger than single-device memory; requires gather operations during forward pass
  - **ZeRO-Infinity**: Extension of ZeRO to CPU DRAM and NVMe SSD storage tiers, enabling models of unbounded size on finite GPU clusters
  - **ZeRO-Offload**: Predecessor to ZeRO-Infinity; offloads optimiser states and [[Backpropagation|backward pass]] gradient computation to CPU DRAM during training
  - **ZeRO++**: 2022 extension enabling 4× communication reduction vs ZeRO-3 via quantised weights (qwZ) and hierarchical all-reduce (hpZ) respecting NVLink vs InfiniBand bandwidth differences
  - **3D Parallelism**: The combination of [[Data Parallelism]] (ZeRO), [[Pipeline Parallelism]], and [[Tensor Parallelism]] simultaneously; used for the largest training runs including Megatron-Turing NLG 530B
  - **Pipeline Bubble**: The fraction of a pipeline stage's time spent idle waiting for upstream computation; DeepSpeed minimises this with the 1F1B and interleaved 1F1B schedules to achieve bubble fraction O(p-1/v·m)
  - **Tensor Parallelism**: Splitting individual weight matrices column-wise or row-wise across devices; provides intra-layer parallelism orthogonal to pipeline and data parallelism; most efficient within NVLink-connected GPU nodes
  - **DeepCompile**: The 2025 compiler extension integrating with `torch.compile` to automatically schedule communication-computation overlap in [[Distributed AI Training|distributed]] ZeRO training
  - **SuperOffload**: 2025/2026 technique for heterogeneous superchip training targeting heterogeneous HBM/DRAM/NVMe memory hierarchies within a single node; ASPLOS 2026 Honourable Mention
  - **Arctic Long Sequence Training (ALST)**: 2025 extension enabling training on sequences of millions of tokens by distributing sequence dimension across devices via sequence parallelism
  - **Mixed-Precision Training**: [[Mixed-Precision Training|BF16/FP16]] arithmetic for forward/backward with FP32 master weights and Adam states for numerically stable parameter updates; the standard DeepSpeed production configuration since 2022
  - **Sparse Attention**: [[Sparse Attention|BigBird/Longformer-style]] attention patterns supported by DeepSpeed kernels enabling very long sequence [[Transformer Architecture|transformer]] training with sub-quadratic attention complexity
  - **DeepSpeed-MoE**: The [[Mixture of Experts]] extension; provides expert parallelism support for sparse MoE models with dedicated all-to-all communication for expert routing
  - **DeepSpeed-Chat**: End-to-end [[Reinforcement Learning|RLHF]] pipeline released in 2023; includes SFT, reward model training, and PPO optimisation using DeepSpeed infrastructure
  - **DeepSpeed-FastGen**: High-throughput inference serving system with dynamic split-fuse continuous batching; supersedes naive batching strategies for [[Large Language Model]] serving
  - **Collective Communication**: The MPI [[Message Passing Interface|MPI]] / NCCL operations (all-reduce, all-gather, reduce-scatter) that synchronise distributed state across ZeRO partitioned devices; the communication primitive underlying all DeepSpeed parallelism strategies

  ## Future Directions (2026–2030)
  - **Integration with next-generation interconnects**
    - NVLink 5.0 (GB200 NVL72 with 900 GB/s NVLink bandwidth) and InfiniBand NDR 400G
    - Communication-computation overlap strategies in DeepCompile become more critical as compute-to-bandwidth ratio increases
    - Optical interconnects (800G Ethernet) for rack-scale and data-centre-scale training
  - **Heterogeneous memory hierarchies**
    - SuperOffload's principles extended to CXL-attached memory pools (CXL 3.0 enables pooled DRAM accessible across nodes)
    - Dynamic allocation between GPU HBM3e, CPU DRAM, CXL expansion memory, and NVMe within a single training job
  - **MoE at extreme scale**
    - Sparse MoE architectures with tens of thousands of experts will require expert parallelism beyond current DeepSpeed-MoE
    - Hierarchical routing, expert placement across heterogeneous hardware, load-balancing without auxiliary loss penalties
  - **Compiler-first design**
    - DeepCompile direction signals shift from hand-tuned operator libraries towards compiler-generated communication schedules
    - Improving portability across [[GPU Cluster|GPU vendors]]: NVIDIA, AMD, Intel Gaudi, Google TPU backends
    - Integration with MLIR-based compiler stacks for hardware-independent optimisation
  - **Convergence with FSDP**
    - PyTorch FSDP2 and DeepSpeed may align on shared primitives as both adopt compiler-backed communication scheduling
    - Possible converged API layer reducing framework fragmentation in the [[Python PyTorch Deep Learning Stack|PyTorch ecosystem]]
  - **Post-GPU accelerator support**
    - Intel Gaudi 3, AMD MI300X/MI350, Cerebras CS-3 support deepening
    - Positioning DeepSpeed as a hardware-agnostic [[Distributed AI Training|distributed training]] standard independent of [[NVIDIA CUDA|CUDA]]
  - **Inference-time compute scaling**
    - DeepSpeed inference engine extending to speculative decoding, medusa heads, and tree-based decoding strategies
    - Growing demand for efficient token generation at scale as inference-time compute (test-time compute) becomes a dominant [[Large Language Model]] capability lever

  ## Security and Reproducibility Considerations
  [[Distributed AI Training]] at scale introduces security and reproducibility dimensions that are particularly relevant for DeepSpeed deployments:

  **Numerical reproducibility**: ZeRO's partitioning strategy can affect numerical reproducibility. When gradients are reduced-scattered across d devices, the order of floating-point summation differs from single-device training due to non-associativity of floating-point arithmetic, leading to different (but statistically equivalent) gradient updates. This is typically acceptable for convergence but can complicate debugging, as the same code run on different numbers of GPUs will produce different loss trajectories even with the same random seed. DeepSpeed's `reproducibility` configuration flags partially address this but with throughput trade-offs.

  **Supply chain security**: DeepSpeed is installed from PyPI and GitHub and imports CUDA kernels that are compiled at install time. Academic and enterprise users should verify package signatures and pin dependency versions in production training environments. The transition from `microsoft/DeepSpeed` to `deepspeedai/DeepSpeed` in 2024 updated the GitHub organisation but the PyPI package name remains `deepspeed`, requiring care to ensure the correct package is installed.

  **Gradient leakage in distributed training**: Research on gradient inversion attacks (Zhu et al., NeurIPS 2019) demonstrated that shared gradients in federated or [[Distributed AI Training|distributed learning]] can leak training data. ZeRO's reduce-scatter pattern exposes gradient shards to devices not responsible for those shards during the aggregation step. For sensitive-data training (medical, legal, financial), this implies that ZeRO configurations should be evaluated against gradient privacy requirements, potentially motivating the use of differentially private gradient clipping in combination with ZeRO.

  **Model checkpointing consistency**: ZeRO Stage 3 requires that model parameters be gathered from all d devices before a consistent checkpoint can be saved. DeepSpeed provides `zero_to_fp32.py` conversion utilities to reconstruct full-precision model checkpoints from ZeRO-partitioned checkpoint shards, but the process is memory-intensive (requires sufficient CPU DRAM to hold the full model) and can fail on very large models. Zero-overhead checkpoint saving (saving shards directly) is the correct approach for models that exceed single-node CPU DRAM.

  **Training stability with large batches**: ZeRO enables global batch sizes substantially larger than feasible in single-GPU training. Large effective batch sizes (global batch size = micro-batch × gradient accumulation × data-parallel degree) require careful learning rate scaling (linear or sqrt scaling rules, warmup schedules) to maintain training stability. DeepSpeed's documentation addresses this but practitioners frequently encounter instability when scaling to thousands of GPUs without appropriate learning rate adjustment. The [[Gradient Descent|gradient]] accumulation and batch size interaction is a source of subtle bugs in distributed training configurations.

  ## Limitations and Criticisms
  Despite its widespread adoption, DeepSpeed presents several known limitations that practitioners encounter:

  **Configuration complexity**: DeepSpeed's JSON configuration file can have dozens of interacting parameters, and an incorrect configuration can silently degrade performance or produce numerical instability without obvious error messages. The interaction between ZeRO stages, pipeline parallelism, tensor parallelism, gradient checkpointing, and [[Mixed-Precision Training|mixed precision]] settings requires expertise to optimise. Community-contributed configuration guides and the DeepSpeed benchmark suite mitigate this, but the configuration space remains daunting for newcomers.

  **Debugging difficulty**: Bugs in distributed [[Deep Learning|deep learning]] code are notoriously hard to reproduce and diagnose. DeepSpeed adds additional layers of abstraction that can obscure the source of numerical errors (e.g. ZeRO-3 parameter gathering errors, pipeline bubble schedule errors). The library's logging and debugging tools have improved significantly but remain less mature than single-GPU [[PyTorch]] debugging tools.

  **Hardware vendor dependency**: Despite growing AMD and Intel support, DeepSpeed's most optimised kernels and communication patterns remain NVIDIA CUDA-specific. The AMD ROCm and Intel Gaudi paths have historically lagged 3–6 months behind CUDA in feature availability. The System DMA feature (May 2026) and DeepCompile work are narrowing this gap, but CUDA remains the first-class citizen.

  **FSDP convergence**: As PyTorch FSDP2 matures, the incremental value of DeepSpeed for pure data-parallel use cases diminishes. Research groups that do not need pipeline or tensor parallelism may find FSDP2 simpler to use, with fewer dependencies. DeepSpeed's value proposition is strongest for models requiring 3D parallelism or ZeRO-Infinity, i.e. frontier-scale training.

  **Version compatibility**: The deep integration with [[PyTorch]] means that PyTorch version upgrades can break DeepSpeed compatibility, and the reverse. Practitioners frequently encounter compatibility matrix issues between DeepSpeed versions, PyTorch versions, CUDA toolkit versions, and [[Hugging Face]] Transformers versions. The `ds_report` diagnostic tool assists with this, but dependency management remains a practical burden.

  ## Research & Literature

  1. Rajbhandari, S., Rasley, J., Ruwase, O., & He, Y. (2020). ZeRO: Memory optimizations toward training trillion parameter models. *Proceedings of SC '20: International Conference for High Performance Computing, Networking, Storage and Analysis*. https://arxiv.org/abs/1910.02054

  2. Rasley, J., Rajbhandari, S., Ruwase, O., & He, Y. (2020). DeepSpeed: System optimizations enable training deep learning models with over 100 billion parameters. *Proceedings of the 26th ACM SIGKDD International Conference on Knowledge Discovery & Data Mining*.

  3. Smith, S., Patwary, M., Norick, B., LeGresley, P., Rajbhandari, S., et al. (2022). Using DeepSpeed and Megatron to train Megatron-Turing NLG 530B, a large-scale generative language model. *arXiv:2201.11990*.

  4. Rajbhandari, S., Ruwase, O., Rasley, J., Smith, S., & He, Y. (2021). ZeRO-Infinity: Breaking the GPU memory wall for extreme scale deep learning. *Proceedings of SC '21*. https://arxiv.org/abs/2104.07857

  5. Ren, J., Rajbhandari, S., Aminabadi, R. Y., Ruwase, O., Yang, S., et al. (2021). ZeRO-Offload: Democratizing billion-scale model training. *Proceedings of USENIX ATC '21*. https://arxiv.org/abs/2101.06840

  6. Shoeybi, M., Patwary, M., Puri, R., LeGresley, P., Casper, J., & Catanzaro, B. (2019). Megatron-LM: Training multi-billion parameter language models using model parallelism. *arXiv:1909.08053*.

  7. Narayanan, D., Shoeybi, M., Casper, J., LeGresley, P., Patwary, M., et al. (2021). Efficient large-scale language model training on GPU clusters using Megatron-LM. *Proceedings of SC '21*.

  8. Narayanan, D., Harlap, A., Phanishayee, A., Seshadri, V., et al. (2019). PipeDream: Generalised pipeline parallelism for DNN training. *Proceedings of SOSP '19*.

  9. Huang, Y., Cheng, Y., Bapna, A., Firat, O., et al. (2019). GPipe: Efficient training of giant neural networks using pipeline parallelism. *NeurIPS 2019*.

  10. Lepikhin, D., Lee, H., Xu, Y., Chen, D., Firat, O., et al. (2021). GShard: Scaling giant models with conditional computation and automatic sharding. *ICLR 2021*.

  11. Chen, T., Xu, B., Zhang, C., & Guestrin, C. (2016). Training deep nets with sublinear memory cost. *arXiv:1604.06174*.

  12. Sergeev, A., & Del Balso, M. (2018). Horovod: Fast and easy distributed deep learning in TensorFlow. *arXiv:1802.05799*.

  13. Rajbhandari, S., Li, C., Yao, Z., Zhang, M., Aminabadi, R. Y., et al. (2022). DeepSpeed-MoE: Advancing mixture-of-experts inference and training to power next-generation AI scale. *Proceedings of ICML 2022*. https://proceedings.mlr.press/v162/rajbhandari22a.html

  14. Aminabadi, R. Y., Rajbhandari, S., Zheng, M., Awan, A. A., Li, C., et al. (2022). DeepSpeed-Inference: Enabling efficient inference of transformer models at unprecedented scale. *Proceedings of SC '22*. https://arxiv.org/abs/2207.00032

  15. Holmes, C., Narayanan, D., He, B., Phanishayee, A., Ruwase, O., & Rajbhandari, S. (2024). Deepspeed data efficiency: Improving deep learning model quality and training efficiency via efficient data sampling and routing. *arXiv:2212.03597*.

  16. BigScience Workshop (2022). BLOOM: A 176B-parameter open-access multilingual language model. *arXiv:2211.05100*.

  17. Black, S., Biderman, S., Hallahan, E., Anthony, Q., Gao, L., et al. (2022). GPT-NeoX-20B: An open-source autoregressive language model. *Proceedings of the ACL Workshop on Challenges & Perspectives in Creating Large Language Models*.

  18. Li, S., Zhao, Y., Varma, R., Salpekar, O., Noordhuis, P., et al. (2020). PyTorch distributed: Experiences on accelerating data parallel training. *Proceedings of VLDB 2020*.

  19. Zhao, Y., Gu, A., Varma, R., Luo, L., Huang, C. C., et al. (2023). PyTorch FSDP: Experiences on scaling fully sharded data parallel. *Proceedings of VLDB 2023*.

  20. Almazrouei, E., Alobeidli, H., Alshamsi, A., Cappelli, A., Cojocaru, R., et al. (2023). The Falcon series of open language models. *arXiv:2311.16867*.

  21. Li, R., Allal, L. B., Zi, Y., Muennighoff, N., Kocetkov, D., et al. (2023). StarCoder: May the source be with you! *arXiv:2305.06161*.

  22. DeepSpeed Team. (2025). DeepCompile: Unlocking compiler optimization for distributed training. *DeepSpeed Blog, April 2025*. https://www.deepspeed.ai/

  23. DeepSpeed Team. (2025). SuperOffload: Unleashing the power of large-scale LLM training on superchips. *ASPLOS 2026 Honourable Mention*. https://www.deepspeed.ai/

  24. Microsoft Azure Team. (2024). Azure and NVIDIA set LLM training record in MLPerf Training 4.0. *Microsoft Azure Blog*. https://azure.microsoft.com/en-us/blog/

  25. Jiang, A. Q., Sablayrolles, A., Mensch, A., Bamford, C., Chaplot, D. S., et al. (2023). Mistral 7B. *arXiv:2310.06825*.

  26. DeepSpeed Team. (2023). DeepSpeed-FastGen: High-throughput text generation for LLMs via MII and DeepSpeed-Inference. *GitHub Blog, November 2023*. https://github.com/microsoft/DeepSpeed-MII

  27. He, Y., Ruwase, O., Rajbhandari, S., & Rasley, J. (2021). ZeRO++: Extremely efficient collective communication for giant model training. *arXiv:2306.10209*.

- ### Provenance
  - sources:: https://arxiv.org/abs/1910.02054, https://arxiv.org/abs/2104.07857, https://arxiv.org/abs/2201.11990, https://www.deepspeed.ai/, https://github.com/deepspeedai/DeepSpeed, https://proceedings.mlr.press/v162/rajbhandari22a.html, https://azure.microsoft.com/en-us/blog/azure-empowers-easytouse-highperformance-and-hyperscale-model-training-using-deepspeed/, https://www.microsoft.com/en-us/research/blog/zero-infinity-and-deepspeed-unlocking-unprecedented-model-scale-for-deep-learning-training/, https://github.com/deepspeedai/DeepSpeed/releases, https://windowsnews.ai/article/azure-nvidia-smash-llm-training-record-cloud-infrastructure-outperforms-dedicated-ai-clusters.427145
  - web-searches-performed:: 4
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm