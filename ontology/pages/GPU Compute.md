public:: true

# gpu compute
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c9e380e718a618734f76570f8947ec6e19e80c9a90cf4f0f853744b2221e3a1a",
  "@type": "Page",
  "vc:slug": "gpu-compute",
  "title": "gpu compute",
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
  "@id": "urn:ngm:class:gpu-compute",
  "@type": "Class",
  "label": "GPU Compute",
  "definition": "GPU Compute (General-Purpose GPU computing, GPGPU) is the practice of executing data-parallel numerical workloads on Graphics Processing Units originally designed for rasterising 3D geometry, exploiting their thousands of shader cores and high-bandwidth memory to perform tensor operations — principally matrix multiplications and convolutions — at throughputs far exceeding those achievable on CPUs. Programming models such as NVIDIA CUDA and AMD ROCm expose the GPU's Single Instruction Multiple Data (SIMD) execution model to software, enabling general-purpose scientific, engineering, and machine-learning workloads to run directly on the GPU die. GPU compute is the dominant hardware substrate for training and inference of deep neural networks, large language models, and diffusion models, with specialised Tensor Core and matrix-engine hardware units providing mixed-precision acceleration orders of magnitude beyond scalar compute. The field now extends to heterogeneous cluster computing, where thousands of GPUs are interconnected via NVLink and high-speed fabrics to train models at scales that would be infeasible on any single device.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-infrastructure",
      "label": "AI Infrastructure"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:tensor-core",
        "label": "Tensor Core"
      },
      {
        "@id": "urn:ngm:class:cuda",
        "label": "CUDA Kernel"
      },
      {
        "@id": "urn:ngm:class:high-bandwidth-memory",
        "label": "High Bandwidth Memory"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:ai-infrastructure",
        "label": "AI Infrastructure"
      },
      {
        "@id": "urn:ngm:class:machine-learning-discipline-infrastructure",
        "label": "Machine Learning Infrastructure"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:cuda",
        "label": "CUDA"
      },
      {
        "@id": "urn:ngm:class:nvlink",
        "label": "NVLink"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:distributed-training",
        "label": "Distributed Training"
      },
      {
        "@id": "urn:ngm:class:model-training",
        "label": "Model Training"
      },
      {
        "@id": "urn:ngm:class:neural-network-inference",
        "label": "Neural Network Inference"
      },
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
      },
      {
        "@id": "urn:ngm:class:scientific-computing",
        "label": "Scientific Computing"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:cuda",
        "label": "CUDA"
      },
      {
        "@id": "urn:ngm:class:rocm",
        "label": "ROCm"
      },
      {
        "@id": "urn:ngm:class:mixed-precision-training",
        "label": "Mixed Precision Training"
      },
      {
        "@id": "urn:ngm:class:parallel-computing",
        "label": "Parallel Computing"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:tpu",
        "label": "TPU"
      },
      {
        "@id": "urn:ngm:class:cpu-compute",
        "label": "CPU Compute"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:energy-consumption",
        "label": "Energy Consumption"
      },
      {
        "@id": "urn:ngm:class:data-centre",
        "label": "Data Centre"
      },
      {
        "@id": "urn:ngm:class:model-parallelism",
        "label": "Model Parallelism"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      },
      {
        "@id": "urn:ngm:class:ray-tracing",
        "label": "Ray Tracing"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:gpgpu",
      "label": "GPGPU"
    },
    {
      "@id": "urn:ngm:class:general-purpose-gpu-computing",
      "label": "General-Purpose GPU Computing"
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
  - GPU Compute — also termed [[GPGPU]] (General-Purpose Graphics Processing Unit computing) — is the exploitation of [[Graphics Processing Unit]] hardware for massively parallel numerical workloads beyond traditional rasterisation. A modern GPU contains thousands of shader cores arranged in streaming multiprocessors that execute [[Parallel Computing]] workloads under a Single Instruction Multiple Data model, delivering throughputs in the tens to hundreds of teraFLOPs that make it the dominant substrate for [[Deep Learning]] training and inference. The [[CUDA]] programming model, introduced by NVIDIA in 2007, was the foundational catalyst that opened GPU hardware to general software developers, and [[ROCm]] provides AMD's open-source equivalent. The capability culminates in multi-node GPU clusters that underpin the compute budgets required by [[Large Language Model]] pre-training, [[Diffusion Model]] generation, and large-scale [[Reinforcement Learning]] experiments.

- ### Overview
  - GPU Compute emerged as a distinct discipline when researchers in the mid-2000s demonstrated that GPUs could accelerate scientific simulations and, later, [[Neural Network]] training by one to two orders of magnitude over contemporary CPUs. The key architectural insight is that deep learning workloads consist overwhelmingly of matrix multiplications (dense linear algebra) that map naturally onto the GPU's SIMD execution model.
  - Modern data-centre GPUs — NVIDIA A100, H100, H200, and AMD Instinct MI300X — are purpose-built for [[Model Training]] and [[Neural Network Inference]], integrating dedicated matrix engines (NVIDIA Tensor Cores, AMD Matrix Cores) that accelerate FP16/BF16/FP8 multiply-accumulate operations at far higher throughput than FP32 scalar units.
  - The significance of GPU Compute extends beyond speed: it enabled the scaling laws that drive modern [[Foundation Model]] research, where compute budget (measured in FLOP) has become the primary lever for improving model capability.
  - GPU Compute is now central to [[AI Infrastructure]] strategy, data-centre power planning, geopolitical export controls, and semiconductor supply chains.

- ### Key Components
  - **Streaming Multiprocessors (SMs)**: the fundamental execution unit on NVIDIA GPUs, each containing dozens of CUDA cores, Tensor Cores, shared memory, and register file. Hundreds of SMs operate in parallel.
  - **Tensor Cores**: specialised matrix-multiply-accumulate (MMA) units introduced with NVIDIA Volta (2017) that operate on 4×4 or larger sub-matrices in a single clock cycle, enabling the throughput needed for [[Mixed-Precision Training]].
  - **[[High Bandwidth Memory]] (HBM)**: stacked DRAM dies mounted adjacent to the GPU die via silicon interposer, providing memory bandwidth in the terabytes-per-second range — essential for feeding the compute units during [[Transformer]] attention operations.
  - **[[CUDA]] and PTX**: CUDA (Compute Unified Device Architecture) is NVIDIA's C/C++ extension for GPU programming; PTX (Parallel Thread Execution) is the intermediate assembly; cuDNN and cuBLAS are high-level libraries covering [[Deep Learning]] primitives and linear algebra respectively.
  - **[[ROCm]]**: AMD's Radeon Open Compute platform, the open-source alternative to CUDA, targeting AMD Instinct GPUs. Enables [[PyTorch]] and TensorFlow workloads on AMD hardware.
  - **[[NVLink]]**: NVIDIA's high-bandwidth GPU-to-GPU interconnect, providing far higher bandwidth than PCIe for multi-GPU intra-node communication, enabling [[Model Parallelism]] across GPUs within a node.
  - **InfiniBand / RoCE**: high-speed network fabrics for inter-node GPU communication in [[Distributed Training]] clusters.
  - **[[CUDA Kernel]]s**: the individual programs executed on the GPU in parallel across thousands of threads organised into blocks and grids; kernel optimisation (tiling, memory coalescing, warp divergence reduction) is central to GPU performance engineering.
  - **Warp and Thread Block**: a warp (32 threads on NVIDIA) is the scheduling unit for SIMD execution; thread blocks group warps and share on-chip shared memory; the occupancy (active warps per SM) determines how well memory latency is hidden.

- ### Programming Models and Frameworks
  - **[[CUDA]]**: dominant programming model for NVIDIA GPUs; exposes C/C++ extensions for kernel launch syntax, memory management (`cudaMalloc`, `cudaMemcpy`), and streams for asynchronous execution.
  - **[[ROCm]] / HIP**: AMD's heterogeneous interface for portability; HIP code is largely portable between NVIDIA and AMD GPUs.
  - **OpenCL**: vendor-neutral open standard for heterogeneous computing, predating CUDA in standardisation but overtaken in ecosystem richness; maintained by Khronos Group.
  - **[[PyTorch]]**: the dominant Python framework for [[Deep Learning]] research; uses CUDA under the hood for GPU-accelerated tensor operations via its ATen library.
  - **TensorFlow**: Google's ML framework with XLA compilation targeting GPU and [[TPU]] backends.
  - **Triton**: an open-source compiler and programming language from OpenAI that allows researchers to write high-performance GPU kernels in Python, reducing dependence on hand-tuned CUDA.
  - **TensorRT / TensorRT-LLM**: NVIDIA's inference optimisation toolkit; performs layer fusion, quantisation, and kernel selection to maximise GPU throughput during [[Neural Network Inference]].
  - **vLLM**: open-source [[Large Language Model]] serving framework implementing PagedAttention for efficient [[GPU Memory Management]] during inference.

- ### Applications and Use Cases
  - **[[Deep Learning]] Pre-training**: the primary consumer of GPU compute; training [[Transformer]] models requires quintillions to sextillions of floating-point operations, making clusters of thousands of GPUs the standard platform.
  - **[[Neural Network Inference]]**: serving trained models (e.g. [[Large Language Model]] APIs, image generation APIs) at scale demands GPU batching to amortise memory bandwidth costs; inference optimisation is a major GPU Compute sub-discipline.
  - **[[Scientific Computing]]**: molecular dynamics (GROMACS, AMBER), climate simulation, computational fluid dynamics, quantum chemistry (TeraChem), and particle physics (lattice QCD) all rely on GPU acceleration.
  - **[[Computer Vision]]**: real-time object detection, semantic segmentation, image classification, and video analytics exploit GPU parallelism for both training and edge deployment.
  - **[[Reinforcement Learning]]**: policy gradient algorithms run environment simulations and neural network forward/backward passes simultaneously; GPU parallelism enables the sample throughput required for superhuman game-playing and [[Robotics]] policy training.
  - **[[Diffusion Model]] Generation**: iterative denoising in image and video synthesis is highly parallelisable; consumer GPU Compute enables local image generation.
  - **[[Ray Tracing]] and [[Real-Time Rendering]]**: although originally the GPU's primary purpose, hardware ray-tracing units (RT Cores on NVIDIA Turing+) remain important for graphics rendering, bridging GPU Compute's AI use with its heritage.
  - **Cryptography and [[Blockchain]]**: proof-of-work mining (historically) and ZK proof generation exploit GPU parallelism for hash and elliptic-curve operations.
  - **Bioinformatics**: genome assembly, protein structure prediction (AlphaFold), and cryo-EM reconstruction use GPU Compute for large matrix operations.

- ### Distributed GPU Compute and Cluster Architecture
  - Large model training requires [[Distributed Training]] across hundreds to tens of thousands of GPUs. Parallelism strategies include:
    - **Data Parallelism**: each GPU holds a copy of the model and processes a shard of the data batch; gradients are synchronised via AllReduce collective operations.
    - **[[Model Parallelism]]**: model layers are partitioned across GPUs; tensor parallelism (splitting weight matrices) and pipeline parallelism (splitting layers into stages) are the two main variants.
    - **Expert Parallelism**: in [[Mixture of Experts]] architectures, different expert sub-networks reside on different GPUs.
  - Collective communication libraries (NCCL for NVIDIA, RCCL for AMD) implement AllReduce, AllGather, and Scatter-Reduce over [[NVLink]] and InfiniBand.
  - GPU cluster schedulers (Slurm, Kubernetes with GPU device plugins, NVIDIA Run:ai) manage allocation of GPU resources across jobs.

- ### Relationships
  - partOf:: [[AI Infrastructure]]
  - partOf:: [[Machine Learning Infrastructure]]
  - hasPart:: [[Tensor Core]]
  - hasPart:: [[CUDA Kernel]]
  - hasPart:: [[High Bandwidth Memory]]
  - requires:: [[CUDA]]
  - requires:: [[NVLink]]
  - requires:: [[High Bandwidth Memory]]
  - requires:: [[GPU Memory Management]]
  - enables:: [[Distributed Training]]
  - enables:: [[Model Training]]
  - enables:: [[Neural Network Inference]]
  - enables:: [[Large Language Model]]
  - enables:: [[Diffusion Model]]
  - enables:: [[Scientific Computing]]
  - uses:: [[CUDA]]
  - uses:: [[ROCm]]
  - uses:: [[Mixed-Precision Training]]
  - uses:: [[Parallel Computing]]
  - supports:: [[Deep Learning]]
  - supports:: [[Reinforcement Learning]]
  - supports:: [[Computer Vision]]
  - contrastsWith:: [[TPU]]
  - contrastsWith:: [[CPU Compute]]
  - contrastsWith:: [[Neuromorphic Computing]]
  - relatedTo:: [[Energy Consumption]]
  - relatedTo:: [[Data Centre]]
  - relatedTo:: [[Model Parallelism]]
  - bridges-to:: [[Real-Time Rendering]]
  - bridges-to:: [[Ray Tracing]]

- ### Standards and Context
  - **CUDA Compute Capability**: NVIDIA's versioning scheme for GPU feature sets (e.g. compute capability 9.0 for H100), determining which CUDA intrinsics and memory features are available; code compiled for a given capability may not run on older GPUs.
  - **OpenCL**: Khronos Group open standard for portable GPU programming; vendor-neutral but lacks the ecosystem depth of CUDA.
  - **SYCL**: Intel's modern C++-based heterogeneous programming model, successor to OpenCL, standardised by Khronos; targets Intel GPUs, CPUs, and FPGAs.
  - **ROCm / HIP**: AMD's open-source GPU compute stack; HIP provides a CUDA-compatible API layer enabling source portability.
  - **Export controls**: US Bureau of Industry and Security (BIS) applies export licensing restrictions to high-end data-centre GPUs (NVIDIA A100, H100) under EAR / ECCN 3A090, constraining supply to certain jurisdictions — shaping [[AI Infrastructure]] geopolitics.
  - **IEEE 754 and alternative precision formats**: GPU Compute relies on IEEE 754 floating-point arithmetic for FP32 and FP64, but has adopted vendor extensions (BF16, TF32, FP8) optimised for [[Mixed-Precision Training]] throughput, with ongoing standardisation discussions in IEEE working groups.

- ### Provenance
  - sources:: NVIDIA CUDA Programming Guide; AMD ROCm Documentation; Hopper H100 Architecture White Paper; "Scaling Laws for Neural Language Models" (Kaplan et al.); "Efficient Large Scale Language Modeling with Mixtures of Experts"; OpenAI Triton compiler documentation
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
