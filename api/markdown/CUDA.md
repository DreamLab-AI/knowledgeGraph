public:: true

# cuda
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e636c973d999a634277daa3a43db4adb0e7fde4ef22d47c8e833adb29bd2e99f",
  "@type": "Page",
  "vc:slug": "cuda",
  "title": "cuda",
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
  "@id": "urn:ngm:class:cuda",
  "@type": "Class",
  "label": "CUDA",
  "definition": "CUDA (Compute Unified Device Architecture) is NVIDIA's proprietary parallel computing platform and programming model that exposes GPU hardware through a C/C++ extension, enabling thousands of threads to execute concurrently across thousands of GPU cores via a three-level hierarchy of grids, blocks, and warps. It provides a unified memory model spanning host (CPU) and device (GPU) address spaces, complemented by curated libraries such as cuBLAS, cuDNN, and NCCL that deliver optimised primitives for linear algebra, deep neural network operations, and multi-GPU communication. Originally released in 2006, CUDA has become the de facto execution substrate for production deep learning training and inference, underpinning frameworks such as PyTorch and TensorFlow, and is the primary determinant of GPU vendor lock-in in the AI infrastructure stack.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:parallel-computing",
    "label": "Parallel Computing"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:tensor-core",
        "label": "Tensor Core"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:ai-infrastructure",
        "label": "AI Infrastructure"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:gpu-compute",
        "label": "GPU Compute"
      },
      {
        "@id": "urn:ngm:class:nvidia-gpu",
        "label": "NVIDIA GPU"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:training",
        "label": "Training"
      },
      {
        "@id": "urn:ngm:class:inference",
        "label": "Inference"
      },
      {
        "@id": "urn:ngm:class:mixed-precision-training",
        "label": "Mixed Precision Training"
      },
      {
        "@id": "urn:ngm:class:scientific-computing",
        "label": "Scientific Computing"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      },
      {
        "@id": "urn:ngm:class:machine-learning-discipline-framework",
        "label": "Machine Learning Framework"
      },
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
      },
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:shared-memory",
        "label": "Shared Memory"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:rocm",
        "label": "ROCm"
      },
      {
        "@id": "urn:ngm:class:opencl",
        "label": "OpenCL"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:gpu-rendering",
        "label": "GPU Accelerated Rendering"
      },
      {
        "@id": "urn:ngm:class:high-performance-computing",
        "label": "High-Performance Computing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:python-pytorch-deep-learning-stack",
        "label": "PyTorch"
      },
      {
        "@id": "urn:ngm:class:tensor-flow",
        "label": "TensorFlow"
      },
      {
        "@id": "urn:ngm:class:memory-bandwidth",
        "label": "GPU Memory Bandwidth"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:compute-unified-device-architecture",
      "label": "Compute Unified Device Architecture"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - CUDA (Compute Unified Device Architecture) is NVIDIA's proprietary [[Parallel Computing]] platform and programming model, first released in 2006, that exposes the massively parallel architecture of NVIDIA GPUs to general-purpose computation through a C/C++ language extension. It organises execution into a three-level hierarchy of grids, thread blocks, and warps, with each warp of 32 threads executing in lockstep under [[SIMT Execution]] (Single Instruction, Multiple Threads) scheduling. CUDA provides a layered memory model spanning registers, per-block [[Shared Memory]], L1/L2 caches, and global [[GPU Memory Bandwidth|device memory]], and it ships with curated libraries — [[cuBLAS]], [[cuDNN]], [[NCCL]] — that deliver optimised primitives for [[Deep Learning]], linear algebra, and multi-GPU communication. Its dominance as the execution substrate for [[PyTorch]], [[TensorFlow]], and virtually all production [[AI Infrastructure]] has made it the primary driver of vendor lock-in in the GPU compute market.

- ### Overview
  - CUDA was introduced by NVIDIA in 2006 as the first broadly accessible general-purpose GPU (GPGPU) programming model. Prior to CUDA, harnessing GPU parallelism required mapping workloads onto graphics shader APIs, which was both cumbersome and limited. CUDA exposed GPU cores directly through a C-like syntax, unlocking scientific computing, molecular dynamics, financial simulation, and ultimately [[Deep Learning]] training.
  - The core programming model divides computation into *kernels* — functions that execute across a configurable grid of thread blocks. Each block is scheduled onto a streaming multiprocessor (SM) and shares a fast scratchpad called [[Shared Memory]]. Warps of 32 threads within a block execute in lockstep; branch divergence within a warp serialises execution, making warp-level reasoning central to performance optimisation.
  - CUDA exposes two programmer-facing APIs: the higher-level *Runtime API* and the lower-level *Driver API*, the latter giving finer control over context management and module loading. PTX (Parallel Thread eXecution) serves as an intermediate virtual assembly language, enabling forward-compatible binary distribution across GPU generations.
  - The platform's ecosystem reach — encompassing [[cuBLAS]], [[cuDNN]], [[NCCL]], Thrust, CUB, and third-party compilers — means that switching away from CUDA entails re-implementing or re-validating a large surface area of optimised primitives, cementing its central role in the [[AI Infrastructure]] stack.

- ### Key Components
  - **Thread Hierarchy**
    - Grid → blocks → warps (32 threads) → individual CUDA threads
    - Kernel launch configuration: `<<<gridDim, blockDim, sharedMemBytes, stream>>>`
    - Thread divergence within a warp degrades to serialised execution; minimising divergence is a primary optimisation concern
  - **Memory Hierarchy**
    - Registers (fastest, per-thread) → [[Shared Memory]] (per-block scratchpad, ~L1 speed) → L1/L2 cache → Global device memory (DRAM)
    - Unified Virtual Addressing (UVA) and Unified Memory allow the CPU and GPU to share a single pointer space, with page migration handled by the runtime
    - [[GPU Memory Bandwidth]] is the principal throughput bottleneck for memory-bound kernels; bandwidth is maximised through coalesced global memory accesses
  - **Tensor Cores**
    - Introduced in Volta (2017) and enhanced through Turing, Ampere, Hopper, and Blackwell architectures
    - [[Tensor Core]] units execute fused matrix-multiply-accumulate (MMA) operations at FP16/BF16/TF32/FP8 precision, delivering an order-of-magnitude throughput improvement for [[Mixed Precision Training]] and [[Inference]]
    - Accessed via the WMMA API or automatically by [[cuBLAS]] and [[cuDNN]]
  - **cuBLAS**
    - NVIDIA's optimised Basic Linear Algebra Subroutines library for GPU execution
    - Used by [[PyTorch]] and [[TensorFlow]] for dense matrix operations underlying [[Neural Network]] layers
  - **cuDNN**
    - NVIDIA's Deep Neural Network library providing optimised primitives for convolutions, normalisation, pooling, and attention
    - Central to the performance of [[Computer Vision]] and [[Large Language Model]] training pipelines
  - **NCCL (NVIDIA Collective Communications Library)**
    - Optimised all-reduce, broadcast, and gather primitives for multi-GPU and multi-node training
    - Exploits NVLink and InfiniBand topologies to minimise communication overhead in distributed [[Training]] jobs
  - **PTX and SASS**
    - PTX: portable intermediate representation compiled by `nvcc` from CUDA C/C++; forward-compatible across GPU generations
    - SASS: final machine code emitted by the PTX assembler for a specific GPU microarchitecture (compute capability)
  - **CUDA Streams and Graphs**
    - Streams enable asynchronous, overlapping execution of kernels and memory transfers
    - CUDA Graphs capture a directed acyclic graph of operations and replay them with reduced launch overhead, critical for [[Inference]] latency optimisation

- ### Applications and Use Cases
  - **Deep Learning Training**
    - All major frameworks ([[PyTorch]], [[TensorFlow]], JAX) emit CUDA kernels, either directly or via [[cuDNN]] and XLA backends
    - [[Large Language Model]] pre-training across thousands of GPUs depends on [[NCCL]] for gradient synchronisation
    - [[Mixed Precision Training]] using BF16 or FP8 on Tensor Cores achieves significant throughput gains whilst preserving model accuracy
  - **Inference Serving**
    - TensorRT, vLLM, and ONNX Runtime leverage CUDA kernel fusion and [[Tensor Core]] utilisation to minimise latency
    - [[Inference]] at scale on NVIDIA H100 and A100 clusters is almost universally CUDA-based
  - **Scientific Computing and HPC**
    - Molecular dynamics (GROMACS, NAMD), weather modelling, quantum chemistry (GAMESS), and computational fluid dynamics codes use CUDA for [[Scientific Computing]] acceleration
    - [[High Performance Computing]] centres worldwide deploy CUDA-enabled clusters for both research and AI workloads
  - **Computer Vision**
    - Image classification, object detection, segmentation, and video processing pipelines rely on CUDA for real-time throughput
    - [[Computer Vision]] libraries (OpenCV CUDA backend, DALI) offload preprocessing to the GPU
  - **Generative AI and Diffusion Models**
    - Stable Diffusion, DALL-E, and video generation models execute entirely on CUDA-accelerated hardware
    - Flash Attention and custom CUDA kernels are key to efficient attention computation in transformer architectures underlying [[Large Language Model]] systems

- ### Relationships
  - hasPart:: [[cuBLAS]]
  - hasPart:: [[cuDNN]]
  - hasPart:: [[NCCL]]
  - hasPart:: [[Tensor Core]]
  - partOf:: [[AI Infrastructure]]
  - requires:: [[GPU Compute]]
  - requires:: [[NVIDIA GPU]]
  - enables:: [[Deep Learning]]
  - enables:: [[Training]]
  - enables:: [[Inference]]
  - enables:: [[Mixed Precision Training]]
  - enables:: [[Scientific Computing]]
  - supports:: [[Neural Network]]
  - supports:: [[Machine Learning Framework]]
  - supports:: [[Large Language Model]]
  - supports:: [[Computer Vision]]
  - uses:: [[SIMT Execution]]
  - uses:: [[Shared Memory]]
  - contrastsWith:: [[ROCm]]
  - contrastsWith:: [[oneAPI]]
  - contrastsWith:: [[OpenCL]]
  - contrastsWith:: [[Metal Compute]]
  - bridges-to:: [[GPU Accelerated Rendering]]
  - bridges-to:: [[High Performance Computing]]
  - relatedTo:: [[PyTorch]]
  - relatedTo:: [[TensorFlow]]
  - relatedTo:: [[GPU Memory Bandwidth]]

- ### Standards and Context
  - **Compute Capability**: NVIDIA versioning scheme (e.g. 8.0 for Ampere, 9.0 for Hopper) that determines supported CUDA features; kernels compiled for a minimum compute capability run on all later GPUs
  - **NVCC**: The NVIDIA CUDA Compiler Driver that invokes the host compiler (GCC, MSVC, Clang) alongside the GPU backend; outputs fat binaries containing multiple PTX and SASS variants
  - **CUDA Toolkit**: Distributed by NVIDIA under a proprietary licence (though public-access); includes compiler, profiler (Nsight), debugger, math libraries, and documentation
  - **Open Standards Landscape**: [[OpenCL]] (Khronos Group) and [[SYCL]] provide vendor-neutral alternatives; [[ROCm]] (AMD) and [[oneAPI]] (Intel) are proprietary-but-open-source alternatives. None have achieved the library and ecosystem depth of CUDA as of 2026
  - **Regulatory and Supply-Chain Context**: US export controls on NVIDIA H100/A100 chips (Entity List restrictions) have elevated CUDA's geopolitical significance; access to CUDA-enabled hardware is now a strategic resource in AI development capacity
  - **Interoperability**: CUDA interoperates with OpenGL and Vulkan via device pointer sharing, enabling [[GPU Accelerated Rendering]] workflows and spatial computing pipelines; relevant to [[spatial-computing]] workloads involving real-time simulation and visualisation

- ### Provenance
  - sources::
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
