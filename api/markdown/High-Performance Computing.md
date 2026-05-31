public:: true
alias:: High Performance Computing

# High-Performance Computing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:high-performance-computing",
  "@type": "Page",
  "vc:slug": "high-performance-computing",
  "title": "High-Performance Computing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:high-performance-computing",
  "@type": "Class",
  "label": "High-Performance Computing",
  "definition": "High-Performance Computing (HPC) refers to the use of aggregated computational resources — clusters, supercomputers, and massively parallel systems — to solve problems requiring sustained compute throughput, memory bandwidth, or I/O rates far beyond those achievable on commodity servers. HPC systems combine specialised processors (CPUs, GPUs, FPGAs, TPUs), high-speed interconnects (InfiniBand, NVLink), parallel file systems, and workload-management software to execute scientific simulations, large-scale machine learning training, genomics, climate modelling, and computational fluid dynamics at peta- or exascale performance.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:computing-infrastructure", "label": "Computing Infrastructure"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:gpu-compute", "label": "GPU Compute"},
      {"@id": "urn:ngm:class:cuda", "label": "CUDA"},
      {"@id": "urn:ngm:class:fpga", "label": "FPGA"},
      {"@id": "urn:ngm:class:tpu", "label": "TPU"},
      {"@id": "urn:ngm:class:parallel-processing", "label": "Parallel Processing"},
      {"@id": "urn:ngm:class:batch-processing", "label": "Batch Processing"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:machine-learning-infrastructure", "label": "Machine Learning Infrastructure"},
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"},
      {"@id": "urn:ngm:class:neur-ips", "label": "NeurIPS"},
      {"@id": "urn:ngm:class:blockchain-analytics", "label": "Blockchain Analytics"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:distributed-computing", "label": "Distributed Computing"},
      {"@id": "urn:ngm:class:cloud-infrastructure", "label": "Cloud Infrastructure"},
      {"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"},
      {"@id": "urn:ngm:class:ai-infrastructure", "label": "AI Infrastructure"},
      {"@id": "urn:ngm:class:ai-hardware", "label": "AI Hardware"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:compute-infrastructure", "label": "Compute Infrastructure"},
      {"@id": "urn:ngm:class:computing-hardware", "label": "Computing Hardware"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - High-Performance Computing (HPC) denotes the coordinated use of large-scale parallel systems — supercomputers, GPU clusters, and distributed compute arrays — to tackle computationally intensive workloads that are infeasible on general-purpose hardware within practical time constraints.

- ### Relationships
  - High-Performance Computing is a subclass of [[Computing Infrastructure]] and relies on specialised [[Computing Hardware]] including [[GPU Compute]], [[CUDA]]-accelerated processors, [[FPGA]]s, and [[TPU]]s, coordinated via [[Parallel Processing]] and managed through [[Batch Processing]] schedulers. It directly enables [[Machine Learning Infrastructure]] for large-model training, underpins the reproducibility of research published at venues like [[NeurIPS]], and provides the computational backbone for [[Blockchain Analytics]] at transaction-graph scale. HPC complements [[Distributed Computing]] and [[Cloud Infrastructure]] paradigms, and is a foundational element of [[AI Infrastructure]] and [[AI Hardware]] strategy for leading research institutions.

- ### Content
  - The origins of HPC lie in 1960s vector supercomputers — the CDC 6600 (1964) and Cray-1 (1976) — designed for weapons physics and climate modelling. The field evolved through shared-memory multiprocessors, distributed-memory clusters, and MPP (massively parallel processor) systems. Modern HPC systems are heterogeneous: the TOP500 list (published bi-annually) consistently shows the leading systems combining many-core CPUs with GPU accelerators, connected by low-latency, high-bandwidth fabrics such as InfiniBand NDR or proprietary NVLink meshes.

  - The convergence of HPC and AI (sometimes termed "AI-HPC") has been the defining trend of the 2010s–2020s. Training large language models (GPT-4, Llama 3, Gemini Ultra) and foundation models for vision and multimodal reasoning requires thousands of GPU-hours on interconnected accelerators with near-terabyte model checkpoints. NVIDIA's H100 and H200 GPUs, with transformer-engine mixed-precision training and NVLink 4.0 interconnects, have become the de facto standard HPC node for AI workloads. Systems such as Meta's Research SuperCluster (RSC), Microsoft Azure's ND H100 v5 clusters, and the Frontier exascale system at Oak Ridge National Laboratory exemplify the AI-HPC convergence.

  - Parallel programming models shape HPC software design. MPI (Message Passing Interface) remains the dominant inter-node communication standard for scientific HPC, while OpenMP provides shared-memory parallelism within a node. GPU workloads use CUDA (NVIDIA) or ROCm/HIP (AMD). Machine learning frameworks (PyTorch, JAX, TensorFlow) abstract over these primitives through distributed training strategies: data parallelism, tensor parallelism, pipeline parallelism, and expert parallelism (for MoE architectures). Frameworks like DeepSpeed, Megatron-LM, and FSDP (Fully Sharded Data Parallel) are engineering layers that map model training graphs onto distributed HPC topologies efficiently.

  - Storage and I/O are frequent bottlenecks in HPC. Parallel file systems — Lustre, GPFS/IBM Spectrum Scale, DAOS — are designed to deliver aggregate I/O bandwidth of terabytes per second to thousands of concurrent compute nodes. Pre-training datasets for large models (The Pile, RedPajama, FineWeb) may exceed tens of terabytes, making efficient data loading pipelines as important as compute scheduling for effective utilisation.

  - Energy consumption is a mounting concern. The Frontier exascale system draws approximately 21 MW; proposed future systems exceed 50 MW. National AI compute strategies (the EU's EuroHPC initiative, the US Executive Order on AI and NAIRR proposals, the UK AI Research Resource) explicitly address HPC energy sourcing, carbon accounting, and access equity, recognising that frontier AI research is increasingly gated by access to large-scale compute rather than algorithmic insight alone.
